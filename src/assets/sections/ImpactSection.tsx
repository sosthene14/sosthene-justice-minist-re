import React from "react";
import { Box, Card, SimpleGrid, Stack, Text, ThemeIcon, Title } from "@mantine/core";
import { IconEye, IconShieldCheck, IconRefresh } from "@tabler/icons-react";

const COLORS = { green: "#0F4C3A", gold: "#B08D2F", muted: "#6B7280", background: "#EFF4EA" };

const PILLARS = [
	{
		title: "Sécurité & Confidentialité",
		description: "Vos demandes sont protégées par des mesures de sécurité avancées et traitées dans la plus stricte confidentialité.",
		items: [
 			{ icon: IconEye, label: "Anonymat possible" },
			{ icon: IconShieldCheck, label: "Protection des témoins" },
		],
	},
	{
		title: "Impact Communautaire",
		description: "Ensemble, pour une justice sénégalaise plus accessible et transparente.",
		items: [
			{ icon: IconEye, label: "Transparence renforcée" },
			{ icon: IconRefresh, label: "Amélioration continue" },
 		],
	},
];

const ImpactSection: React.FC = () => (
	<Card component="section" radius="sm" p={{ base: "md", md: "xl" }} style={{ backgroundColor: COLORS.background, height: "100%" }}>
		<Stack gap="xs">
			<Box style={{ width: 24, height: 2, backgroundColor: COLORS.gold }} />
			<Title order={2} style={{ color: COLORS.green, fontSize: 22, lineHeight: 1.1 }}>
				Notre impact
			</Title>
			<Text size="sm" style={{ color: COLORS.muted }}>
				Des résultats concrets pour améliorer l'accès à la justice.
			</Text>
		</Stack>
		<SimpleGrid cols={{ base: 1, md: 2 }} spacing="xl" mt="lg">
			{PILLARS.map((pillar) => (
				<Box key={pillar.title}>
					<Title order={3} size="h4" style={{ color: COLORS.green }}>
						{pillar.title}
					</Title>
					<Text size="sm" mt="xs" style={{ color: COLORS.muted }}>
						{pillar.description}
					</Text>
					<Stack gap="xs" mt="md">
						{pillar.items.map(({ icon: Icon, label }) => (
							<Box key={label} style={{ display: "flex", alignItems: "center", gap: 10 }}>
								<ThemeIcon size={30} radius="xl" style={{ color: COLORS.green, backgroundColor: "#E1EBDD" }}>
									<Icon size={17} />
								</ThemeIcon>
								<Text size="sm" fw={600} style={{ color: COLORS.green }}>{label}</Text>
							</Box>
						))}
					</Stack>
				</Box>
			))}
		</SimpleGrid>
	</Card>
);

export default ImpactSection;
