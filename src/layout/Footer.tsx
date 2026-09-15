import React from "react";
import { Box, Divider, Flex, Group, Image, Stack, Text, Title } from "@mantine/core";
import { IconClock, IconMail, IconPhone } from "@tabler/icons-react";
import logoJustice from "../assets/logo_justice_no_text.png";
import palaisImage from "../assets/palais.jpeg";
import flagImage from "../assets/flag.png";

const COLORS = {
	background: "#07352D",
	text: "#F7F5F0",
	muted: "rgba(247, 245, 240, 0.68)",
	gold: "#B08D2F",
};

const Footer: React.FC = () => (
	<Box
		component="footer"
		px={{ base: "lg", md: 44 }}
		py={{ base: "xl", md: "lg" }}
		style={{
			backgroundImage: `linear-gradient(rgba(7, 53, 45, 0.94), rgba(7, 53, 45, 0.94)), url(${palaisImage})`,
			backgroundSize: "cover",
			backgroundPosition: "center",
		}}
	>
		<Flex
			direction={{ base: "column", md: "row" }}
			justify="space-between"
			align="flex-start"
			gap="xl"
			 
			mx="auto"
			style={{ width: "100%" }}
		>
			<Stack gap="xs" maw={280} align="flex-start" style={{ textAlign: "left" }}>
				<Group gap="sm" align="center" wrap="nowrap">
					<Image src={logoJustice} alt="Ministère de la Justice" w={80} />
					<Stack gap={0}>
						<Text size="sm" fw={700} style={{ color: COLORS.text }}>
							Ministère de la Justice
						</Text>
						<Text size="xs" style={{ color: COLORS.muted }}>
							République du Sénégal
						</Text>
					</Stack>
				</Group>
				<Title order={4} size="sm" style={{ color: COLORS.text }}>
					Justice Accessible
				</Title>
				<Text size="xs" style={{ color: COLORS.muted }}>
					Améliorer l'accès à la justice pour tous.
				</Text>
			</Stack>

			<Stack gap={5} align="flex-start" style={{ textAlign: "left" }}>
				<Text size="xs" fw={700} style={{ color: COLORS.text }}>
					Liens utiles
				</Text>
				<a className="footer-link" href="#faq">FAQ</a>
				<a className="footer-link" href="#guide">Guide d'utilisation</a>
				<a className="footer-link" href="#contact">Contact</a>
				<a className="footer-link" href="#mentions-legales">Mentions légales</a>
			</Stack>

			<Stack gap={5} align="flex-start" style={{ textAlign: "left" }}>
				<Text size="xs" fw={700} style={{ color: COLORS.text }}>
					Contact d'urgence
				</Text>
				<a className="footer-link footer-contact" href="tel:+221338190519">
					<IconPhone size={14} color={COLORS.text} />
					<span>221 33 819 05 19</span>
				</a>
				<a className="footer-link footer-contact" href="#horaires">
					<IconClock size={14} color={COLORS.text} />
					<span>Lun - Ven, 8h - 18h</span>
				</a>
				<a className="footer-link footer-contact" href="mailto:contact@justice.sn">
					<IconMail size={14} color={COLORS.text} />
					<span>contact@justice.sn</span>
				</a>
			</Stack>
		</Flex>

		<Divider my="md" color="rgba(247, 245, 240, 0.18)" />
		<Flex
			justify="space-between"
			align="center"
			wrap="wrap"
			gap="sm"
			mx="auto"
			style={{ width: "100%" }}
		>
			<Text size="xs" style={{ color: COLORS.muted }}>
				© 2026 Ministère de la Justice du Sénégal. Tous droits réservés.
			</Text>
			<Image src={flagImage} alt="Drapeau du Sénégal" w={54} h={16} fit="contain" />
		</Flex>
	</Box>
);

export default Footer;
