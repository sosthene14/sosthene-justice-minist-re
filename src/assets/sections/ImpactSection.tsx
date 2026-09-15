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
	<Card component="section"   p={{ base: "lg", md: "xl" }} style={{ backgroundColor: COLORS.background, height: "100%",borderRadius: 5 }}>
		<Stack gap="xs">
			<Box style={{ width: 24, height: 2, backgroundColor: COLORS.gold }} />
			<Title order={2} style={{ color: COLORS.green, fontSize: 22, lineHeight: 1.1 }}>
				Notre impact
			</Title>
			<Text size="sm" style={{ color: COLORS.muted }}>
				Des résultats concrets pour améliorer l'accès à la justice.
			</Text>
		</Stack>
		<SimpleGrid cols={{ base: 1, sm: 2 }} spacing="md" mt="xl">
			{PILLARS.map((pillar) => (
				<Box key={pillar.title} className="impact-pillar" style={{ backgroundColor: "rgba(255, 255, 255, 0.58)", border: "1px solid rgba(15, 76, 58, 0.1)", borderRadius: 8, padding: 16 }}>
					<Title order={3} size="h4" style={{ color: COLORS.green }}>
						{pillar.title}
					</Title>
					<Text size="sm" mt="xs" style={{ color: COLORS.muted }}>
						{pillar.description}
					</Text>
					<Stack gap="sm" mt="lg">
						{pillar.items.map(({ icon: Icon, label }) => (
							<Box key={label} style={{ display: "flex", alignItems: "center", gap: 10 }}>
								<ThemeIcon size={32} radius="xl" style={{ color: COLORS.green, backgroundColor: "#F4E8C8", flexShrink: 0 }}>
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
