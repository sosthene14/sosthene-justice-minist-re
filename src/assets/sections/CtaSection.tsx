import React from "react";
import { Box, Button, Group, Stack, Text, ThemeIcon, Title } from "@mantine/core";
import { IconArrowRight, IconBuildingBank, IconUserPlus } from "@tabler/icons-react";
import palaisImage from "../palais.png";

const COLORS = {
	green: "#0F4C3A",
	gold: "#B08D2F",
};

const CtaSection: React.FC = () => (
	<Box
		component="section"
		mx={10}
		px={{ base: "lg", md: "xl" }}
		py="md"
		style={{
			position: "relative",
			overflow: "hidden",
			borderRadius: 8,
			backgroundImage: `linear-gradient(90deg, rgba(15, 76, 58, 0.98) 42%, rgba(15, 76, 58, 0.72) 100%), url(${palaisImage})`,
			backgroundSize: "cover",
			backgroundPosition: "center right",
		}}
	>
		<Group
			justify="space-between"
			align="center"
			gap="lg"
			wrap="wrap"
			style={{ position: "relative", zIndex: 1 }}
		>
			<Group gap="sm" wrap="nowrap">
				<Box style={{ width: 5, height: 34, backgroundColor: COLORS.gold, flexShrink: 0 }} />
				<ThemeIcon size={30} variant="transparent" style={{ color: "#fff" }}>
					<IconBuildingBank size={20} />
				</ThemeIcon>
				<Stack gap={2}>
					<Title order={3} size="h4" style={{ color: "#fff" }}>
						Prêt à faire entendre votre voix ?
					</Title>
					<Text size="xs" maw={390} style={{ color: "rgba(255, 255, 255, 0.82)" }}>
						Rejoignez des milliers de citoyens qui contribuent à l'amélioration de la justice au Sénégal.
					</Text>
				</Stack>
			</Group>

			<Group gap="sm">
				<Button
					size="sm"
					leftSection={<IconUserPlus size={16} />}
					styles={{ root: { backgroundColor: COLORS.gold } }}
				>
					Créer un compte
				</Button>
				<Button
					size="sm"
					variant="outline"
					rightSection={<IconArrowRight size={16} />}
					styles={{ root: { color: "#fff", borderColor: "rgba(255, 255, 255, 0.75)" } }}
				>
					Faire une demande sans compte
				</Button>
			</Group>
		</Group>
	</Box>
);

export default CtaSection;
