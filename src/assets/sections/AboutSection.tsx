import React from "react";
import { Box, Card, Group, SimpleGrid, Stack, Text, ThemeIcon, Title } from "@mantine/core";
import { IconShieldCheck, IconBolt, IconScaleOutline } from "@tabler/icons-react";
import balanceImage from "../balance.jpeg";

const COLORS = {
	green: "#0F4C3A",
	gold: "#B08D2F",
	text: "#1E1E1E",
	muted: "#6B7280",
	background: "#F7F5F0",
};

const VALUES = [
	{ icon: IconShieldCheck, title: "Sécurité", text: "Données protégées" },
	{ icon: IconBolt, title: "Transparence", text: "Suivi en temps réel" },
{ icon: IconScaleOutline,  title: "Justice pour tous", text: "Un service pour chaque citoyen" },

 ];

const AboutSection: React.FC = () => (
	<Card component="section" className="about-card" radius="md" p={0} withBorder style={{ overflow: "hidden", height: "100%", borderColor: "#E5E7EB" }}>
		<Box className="about-layout">
			<Box
				component="img"
				className="about-image"
				src={balanceImage}
				alt="Balance de la justice"
				style={{ width: "100%", height: "100%", minHeight: 250, objectFit: "cover" }}
			/>
			<Stack p={{ base: "lg", md: "xl" }} gap="md" style={{ backgroundColor: "#fff" }}>
				<Text size="xs" fw={700} style={{ color: COLORS.gold, letterSpacing: "0.04em" }}>
					POURQUOI CETTE PLATEFORME ?
				</Text>
				<Title order={2} style={{ color: COLORS.green, fontSize: "clamp(1.5rem, 2.5vw, 2rem)", lineHeight: 1.08 }}>
					Un accès plus simple<br />et plus rapide à la justice
				</Title>
				<Text size="sm" maw={560} style={{ color: COLORS.muted }}>
					Notre plateforme vous permet de faire vos démarches sans vous déplacer, en toute sécurité et en toute confidentialité. Elle rapproche la justice de tous les citoyens du Sénégal, partout et à tout moment.
				</Text>
				<SimpleGrid className="about-values" cols={{ base: 1, sm: 3 }} spacing="sm" mt="sm">
					{VALUES.map(({ icon: Icon, title, text }) => (
						<Group key={title} gap="xs" align="flex-start" wrap="nowrap" className="about-value">
							<ThemeIcon size={34} radius="xl" style={{ color: COLORS.gold, backgroundColor: "#F8F1DC", flexShrink: 0 }}>
								<Icon size={19} />
							</ThemeIcon>
							<Box>
								<Text size="xs" fw={700} style={{ color: COLORS.green }}>{title}</Text>
								<Text size="xs" style={{ color: COLORS.muted }}>{text}</Text>
							</Box>
						</Group>
					))}
				</SimpleGrid>
			</Stack>
		</Box>
	</Card>
);

export default AboutSection;
