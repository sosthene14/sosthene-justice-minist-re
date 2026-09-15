import React from "react";
import { Box, SimpleGrid, Text } from "@mantine/core";
import {
  IconClock,
  IconFileDescription,
  IconUsers,
  IconStar,
} from "@tabler/icons-react";

const COLORS = {
  green: "#0F4C3A",
  gold: "#B08D2F",
  text: "#1E1E1E",
  muted: "#8A8A82",
  background: "#F7F5F0",
  border: "rgba(15, 76, 58, 0.14)",
};

interface Stat {
  icon: React.FC<{ size?: number; color?: string; stroke?: number }>;
  label: string;
  value: string;
  change: string;
  detail: string;
}

const STATS: Stat[] = [
  {
    icon: IconFileDescription,
    label: "Demandes traitées",
    value: "8 742",
    change: "+12%",
    detail: "Ce mois-ci",
  },
  {
    icon: IconUsers,
    label: "Citoyens aidés",
    value: "6 203",
    change: "+18%",
    detail: "Ce mois-ci",
  },
  {
    icon: IconClock,
    label: "Délai de réponse moyen",
    value: "24h",
    change: "-40%",
    detail: "Par rapport au mois dernier",
  },
  {
    icon: IconStar,
    label: "Taux de satisfaction",
    value: "92%",
    change: "+6%",
    detail: "Ce mois-ci",
  },
];

const StatsBar: React.FC = () => {
  return (
    <Box
      component="section"
      aria-label="Statistiques du service public"
      px={{ base: "md", md: "lg" }}
      py="md"
      style={{
        backgroundColor: COLORS.background,
       
       
      }}
    >
      <SimpleGrid className="stats-grid" cols={{ base: 2, md: 4 }} spacing={0}>
        {STATS.map((stat) => (
          <Box
            key={stat.label}
            px="lg"
            py="xs"
            className="stats-item"
            style={{ borderColor: COLORS.border }}
          >
            <stat.icon size={24} color={COLORS.gold} stroke={1.8} />
            <Text size="sm" fw={500} style={{ color: COLORS.green }}>
              {stat.label}
            </Text>
            <Box style={{ display: "flex", alignItems: "baseline", gap: 10 }}>
              <Text
                fw={700}
                style={{ color: COLORS.green, fontSize: 24, lineHeight: 1.15 }}
              >
                {stat.value}
              </Text>
              <Text size="xs" fw={700} style={{ color: COLORS.green }}>
                ↑ {stat.change}
              </Text>
            </Box>
            <Text size="xs" style={{ color: COLORS.muted }}>
              {stat.detail}
            </Text>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default StatsBar;
