import React from "react";
import { Group, Text, Button, Anchor, Box, Divider, Burger, Stack } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconUser } from "@tabler/icons-react";
import justiceLogo from "../assets/logo_justice.png";

// Palette du projet
const COLORS = {
  green: "#0F4C3A", // Vert institutionnel
  gold: "#B08D2F", // Or républicain
  bg: "#faf9f6", // Fond
  text: "#1E1E1E", // Texte
  red: "#D92C2C", // Rouge (alertes)
  border: "#E5E7EB", // Bordures
};

interface NavLink {
  label: string;
  href: string;
  active?: boolean;
}

const NAV_LINKS: NavLink[] = [
  { label: "Accueil", href: "#", active: true },
  { label: "Faire une demande", href: "#" },
  { label: "Suivre ma demande", href: "#" },
  { label: "À propos", href: "#" },
  { label: "FAQ", href: "#" },
  { label: "Contact", href: "#" },
];

const NavItem: React.FC<{ link: NavLink }> = ({ link }) => (
  <Box
    className={`header-nav-item${link.active ? " is-active" : ""}`}
    style={{ position: "relative", paddingBottom: 6 }}
  >
    <Anchor
      href={link.href}
      underline="never"
      size="sm"
      fw={link.active ? 700 : 500}
      c={COLORS.green}
    >
      {link.label}
    </Anchor>
  </Box>
);

const Header: React.FC = () => {
  const [menuOpened, { toggle, close }] = useDisclosure(false);

  return (
    <Box bg={COLORS.bg}>
      <Box
        mx="auto"
        py="sm"
        px="lg"
      >
        <Group justify="space-between" wrap="nowrap">
          {/* Brand */}
          <Group gap="xs" wrap="nowrap">
            <img
              src={justiceLogo}
              alt="Ministère de la Justice"
              style={{ width: 75, height: "auto", display: "block" }}
            />
          </Group>

          {/* Nav links */}
          <Group gap="lg" visibleFrom="md" wrap="nowrap" align="flex-start">
            {NAV_LINKS.map((link) => (
              <NavItem key={link.label} link={link} />
            ))}
          </Group>

          {/* Right group */}
          <Group gap="md" wrap="nowrap" visibleFrom="md">
            <Group gap={6} wrap="nowrap">
              <Text size="xs" fw={600} style={{ color: COLORS.text }}>
                FR
              </Text>
              <Divider orientation="vertical" />
              <Text size="xs" fw={600} style={{ color: COLORS.text }}>
                WO
              </Text>
            </Group>
            <Button
              variant="outline"
              radius="xl"
              size="xs"
              leftSection={<IconUser size={14} />}
              styles={{
                root: {
                  color: COLORS.green,
                  borderColor: COLORS.green,
                },
              }}
            >
              Connexion
            </Button>
          </Group>

          <Burger
            opened={menuOpened}
            onClick={toggle}
            hiddenFrom="md"
            aria-label={menuOpened ? "Fermer le menu" : "Ouvrir le menu"}
            color={COLORS.green}
          />
        </Group>

        <Box hiddenFrom="md">
          {menuOpened && (
            <Stack gap="md" pt="md" pb="xs">
              {NAV_LINKS.map((link) => (
                <Box key={link.label} onClick={close}>
                  <NavItem link={link} />
                </Box>
              ))}
              <Group gap={6}>
                <Text size="xs" fw={600} style={{ color: COLORS.text }}>FR</Text>
                <Divider orientation="vertical" />
                <Text size="xs" fw={600} style={{ color: COLORS.text }}>WO</Text>
              </Group>
              <Button
                variant="outline"
                radius="xl"
                size="sm"
                leftSection={<IconUser size={14} />}
                onClick={close}
                styles={{
                  root: {
                    width: "fit-content",
                    color: COLORS.green,
                    borderColor: COLORS.green,
                  },
                }}
              >
                Connexion
              </Button>
            </Stack>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default Header;