import React from "react";
import {
  Box,
  Button,
  Card,
  Group,
  SimpleGrid,
  Stack,
  Text,
  ThemeIcon,
  Title,
} from "@mantine/core";
import {
  IconCheck,
  IconHash,
  IconMicrophone,
  IconPhone,
  IconDeviceMobile,
  IconVideo,
} from "@tabler/icons-react";

const COLORS = {
  green: "#0F4C3A",
  gold: "#B08D2F",
  text: "#1E1E1E",
  muted: "#6B7280",
  background: "#F7F5F0",
  border: "#E5E7EB",
};

interface Channel {
  icon: React.FC<{ size?: number }>;
  title: string;
  status: string;
  description: string;
  details: string[];
  action: string;
  featured?: boolean;
}

const CHANNELS: Channel[] = [
  {
    icon: IconMicrophone,
    title: "Message vocal",
    status: "Disponible",
    description: "Enregistrez votre demande directement par la voix.",
    details: ["Transcription automatique", "Français & Wolof"],
    action: "Enregistrer",
    featured: true,
  },
  {
    icon: IconVideo,
    title: "Message vidéo",
    status: "Bientôt disponible",
    description: "Enregistrez votre demande en vidéo avec audio.",
    details: ["Audio + vidéo", "Preuves visuelles"],
    action: "En savoir plus",
  },
  {
    icon: IconDeviceMobile,
    title: "Par SMS",
    status: "Prochainement",
    description: "Envoyez *ALERTE* au 3737 depuis votre téléphone.",
    details: ["SMS au 3737", "Réponse rapide"],
    action: "En savoir plus",
  },
  {
    icon: IconHash,
    title: "Code USSD",
    status: "Prochainement",
    description: "Composez *711# sur votre téléphone mobile.",
    details: ["Tous opérateurs", "Suivez les instructions du menu"],
    action: "En savoir plus",
  },
  {
    icon: IconPhone,
    title: "Par Téléphone",
    status: "Prochainement",
    description: "Appelez le 800-JUSTICE pour un accompagnement.",
    details: ["Lun-Ven 8h-18h", "Appel gratuit"],
    action: "En savoir plus",
  },
];

const ChannelsSection: React.FC = () => {
  return (
    <Box
      component="section"
      aria-labelledby="channels-title"
      px={{ base: "md", md: "lg" }}
      py={{ base: "xl", md: 36 }}
      style={{ backgroundColor: COLORS.background }}
    >
      <Stack gap={4} mb="lg">
        <Text
          size="xs"
          fw={700}
          style={{ color: COLORS.gold, letterSpacing: "0.04em" }}
        >
          NOS CANAUX DE DEMANDE
        </Text>
        <Title
          id="channels-title"
          order={2}
          style={{ color: COLORS.green, fontSize: 26, lineHeight: 1.2 }}
        >
          Autres moyens de faire une demande
        </Title>
        <Text size="sm" style={{ color: COLORS.muted }}>
          Choisissez le canal qui vous convient le mieux
        </Text>
      </Stack>

      <SimpleGrid cols={{ base: 1, xs: 2, lg: 5 }} spacing="sm">
        {CHANNELS.map((channel, index) => (
          <Card
            key={channel.title}
            withBorder
            radius="sm"
            padding="md"
            style={{
              borderColor: COLORS.border,
              backgroundColor: "rgba(255, 255, 255, 0.66)",
            }}
          >
            <Stack gap="sm" style={{ height: "100%" }}>
              <ThemeIcon
                size={40}
                radius="xl"
                style={{
                  color: COLORS.green,
                  backgroundColor: index % 2 === 0
                    ? "#DCE9E1"
                    : "#F4E8C8",
                }}
              >
                <channel.icon size={21} />
              </ThemeIcon>

              <Text fw={700} style={{ color: COLORS.green }}>
                {channel.title}
              </Text>

              <Box
                px="xs"
                py={3}
                style={{
                  alignSelf: "flex-start",
                  borderRadius: 999,
                  backgroundColor: channel.featured ? "#DCE9E1" : "#F4E8C8",
                }}
              >
                <Text size="xs" fw={600} style={{ color: COLORS.green }}>
                  {channel.status}
                </Text>
              </Box>

              <Text size="xs" style={{ color: COLORS.muted, minHeight: 34 }}>
                {channel.description}
              </Text>

              <Stack gap={4} style={{ flex: 1 }}>
                {channel.details.map((detail) => (
                  <Group key={detail} gap={4} wrap="nowrap" align="flex-start">
                    <IconCheck size={14} color={COLORS.green} />
                    <Text size="xs" style={{ color: COLORS.text }}>
                      {detail}
                    </Text>
                  </Group>
                ))}
              </Stack>

              <Button
                fullWidth
                size="sm"
                variant={channel.featured ? "filled" : "outline"}
                styles={{
                  root: {
                    color: channel.featured ? "#fff" : COLORS.green,
                    backgroundColor: channel.featured ? COLORS.green : "#fff",
                    borderColor: COLORS.border,
                  },
                }}
              >
                {channel.action}
              </Button>
            </Stack>
          </Card>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default ChannelsSection;