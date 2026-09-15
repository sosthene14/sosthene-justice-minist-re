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
	<Card component="section" className="about-card" radius="sm" p={0} withBorder style={{ overflow: "hidden", height: "100%" }}>
		<Box className="about-layout">
			<Box
				component="img"
				className="about-image"
				src={balanceImage}
				alt="Balance de la justice"
				style={{ width: "100%", height: "100%", minHeight: 250, objectFit: "cover" }}
			/>
			<Stack p={{ base: "xs", md: "xl" }} gap="sm" style={{ backgroundColor: "#fff" }}>
				<Text size="xs" fw={700} style={{ color: COLORS.gold, letterSpacing: "0.04em" }}>
					POURQUOI CETTE PLATEFORME ?
				</Text>
				<Title order={2} style={{ color: COLORS.green, fontSize: 22, lineHeight: 1.1 }}>
					Un accès plus simple<br />et plus rapide à la justice
				</Title>
				<Text size="sm" maw={560} style={{ color: COLORS.muted }}>
					Notre plateforme vous permet de faire vos démarches sans vous déplacer, en toute sécurité et en toute confidentialité. Elle rapproche la justice de tous les citoyens du Sénégal, partout et à tout moment.
				</Text>
				<SimpleGrid className="about-values" cols={{ base: 1, sm: 3 }} spacing="md" mt="xs">
					{VALUES.map(({ icon: Icon, title, text }) => (
						<Group key={title} gap="xs" align="flex-start" wrap="nowrap">
							<ThemeIcon size={30} variant="transparent" style={{ color: COLORS.gold }}>
								<Icon size={22} />
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
