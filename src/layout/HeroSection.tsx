import React from "react";
import {
  Box,
  Badge,
  Title,
  Text,
  Button,
  Group,
  Grid,
  Stack,
  SimpleGrid,
  ThemeIcon,
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import {
  IconBuildingBank,
  IconArrowRight,
  IconFileText,
  IconShieldCheck,
  IconLock,
  IconClockHour4,
} from "@tabler/icons-react";
import palaisImage from "../assets/palais.jpeg";

// Palette du projet
const COLORS = {
  green: "#0F4C3A", // Vert institutionnel
  gold: "#B08D2F", // Or républicain
  bg: "#F7F5F0", // Fond
  text: "#1E1E1E", // Texte
  textDarkGreen: "#030e0a",
  red: "#D92C2C", // Rouge (alertes)
  border: "#E5E7EB", // Bordures
};

interface Feature {
  icon: React.FC<{ size?: number }>;
  title: string;
  subtitle: string;
}

const FEATURES: Feature[] = [
  {
    icon: IconShieldCheck,
    title: "Confidentialité garantie",
    subtitle: "Vos informations sont protégées",
  },
  {
    icon: IconLock,
    title: "Données sécurisées",
    subtitle: "Transmission chiffrée",
  },
  {
    icon: IconClockHour4,
    title: "Service public",
    subtitle: "Réponse dans les meilleurs délais",
  },
];

 
const HeroClipPathDefs: React.FC = () => (
  <svg width="0" height="0" style={{ position: "absolute" }} aria-hidden="true">
    <defs>
      <clipPath id="heroDiagonalClip" clipPathUnits="objectBoundingBox">
        <path
          d="
            M0.12,0
            L1,0
            L1,1
            L0.04,1
            Q0,1 0.0072,0.94
            L0.12,0
            Z
          "
        />
      </clipPath>
    </defs>
  </svg>
);

const HeroSection: React.FC = () => {
  // < 48em (≈768px) => mobile : image plate, empilée, sans découpe
  const isMobile = useMediaQuery("(max-width: 62em)");

  return (
    <Box bg={COLORS.bg} style={{ overflow: "hidden" }}>
      {!isMobile && <HeroClipPathDefs />}
      <Grid className="hero-grid"  style={{ margin: "0 auto" }}>
         <Grid.Col
          span={{ base: 12, md: 5 }}
          order={{ base: 1, md: 2 }}
          className="hero-image-column"
        >
          <Box
            style={{
              position: "relative",
              height: "100%",
              minHeight: isMobile ? 220 : undefined,
              overflow: "hidden",
            }}
          >
            <Box
              style={{
                position: "relative",
                width: "100%",
                height: "100%",
                clipPath: isMobile ? "none" : "url(#heroDiagonalClip)",
              }}
            >
              <img
                src={palaisImage}
                alt="Palais de Justice"
                style={{
                  width: "100%",
                  height: "100%",
                  minHeight: isMobile ? 220 : undefined,
                  display: "block",
                  objectFit: "cover",
                  borderRadius: 0,
                }}
              />
            </Box>
          </Box>
        </Grid.Col>

        {/* Colonne contenu */}
        <Grid.Col span={{ base: 12, md: 7 }} order={{ base: 2, md: 1 }}>
          <Stack
            justify="center"
            px={{ base: "md", sm: "lg", md: "xl" }}
            py={{ base: "lg", md: "xl" }}
            gap="md"
            h="100%"
          >
            <Box pb={{ base: "md", md: "xl" }}>
              <Badge
                size="xl"
                radius="sm"
                leftSection={<IconBuildingBank size={14} />}
                styles={{
                  root: {
                    backgroundColor: COLORS.gold,
                    color: "#fff",
                    textTransform: "none",
                    fontWeight: 600,
                  },
                }}
              >
                Service Public Officiel
              </Badge>
            </Box>

            <Title
              order={1}
              style={{
                color: COLORS.green,
                fontSize: "clamp(1.6rem, 4.2vw, 2.2rem)",
                lineHeight: 1.15,
                fontWeight: 600,
              }}
            >
              Adressez votre demande à la justice
            </Title>

            <Text size="lg" style={{ color: COLORS.text }} maw={420}>
              Déposez votre demande en ligne, suivez son traitement et recevez
              une réponse sans vous déplacer.
            </Text>

            <Group gap="sm" mt="xs" wrap="wrap">
              <Button
                radius="md"
                size="md"
                rightSection={<IconArrowRight size={16} />}
                styles={{
                  root: { backgroundColor: COLORS.green },
                }}
              >
                Faire une demande
              </Button>
              <Button
                radius="md"
                size="md"
                variant="outline"
                leftSection={<IconFileText size={16} />}
                styles={{
                  root: { color: COLORS.green, borderColor: COLORS.green },
                }}
              >
                Suivre ma demande
              </Button>
            </Group>

            <SimpleGrid cols={{ base: 1, xs: 3 }} spacing="md" mt="md" ml={{ base: 0, xs: "-lg" }}>
              {FEATURES.map((feature, index) => (
                <Group
                  key={feature.title}
                  gap="xs"
                  align="center"
                  wrap="nowrap"
                  style={{
                    flexDirection: "row",
                    borderRight:
                      index < FEATURES.length - 1
                        ? "2px solid rgba(3, 14, 10, 0.25)"
                        : undefined,
                    paddingRight: index < FEATURES.length - 1 ? 16 : 0,
                    height: 30,
                  }}
                  className="hero-feature"
                >
                  <ThemeIcon
                    variant="light"
                    radius="md"
                    size={44}
                    styles={{
                      root: { color: COLORS.green, backgroundColor: "transparent" },
                    }}
                  >
                    <feature.icon size={24} />
                  </ThemeIcon>
                  <Box>
                    <Text size="sm" fw={700} style={{ color: COLORS.green }}>
                      {feature.title}
                    </Text>
                    <Text size="sm" style={{ color: COLORS.text }}>
                      {feature.subtitle}
                    </Text>
                  </Box>
                </Group>
              ))}
            </SimpleGrid>
          </Stack>
        </Grid.Col>
      </Grid>

      {/* Sur mobile, le border-right entre features casse le rendu en colonne unique */}
      <style>{`
        @media (max-width: 47.99em) {
          .hero-feature {
            border-right: none !important;
            padding-right: 0 !important;
            height: auto !important;
          }
        }
      `}</style>
    </Box>
  );
};

export default HeroSection;