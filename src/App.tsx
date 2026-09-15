
import './App.css'
import Header from './layout/Header';
import HeroSection from './layout/HeroSection';
import StatsBar from './layout/StatsBar';
import ChannelsSection from './layout/ChannelsSection';
import ImpactSection from './assets/sections/ImpactSection';
import CtaSection from './assets/sections/CtaSection';
import Footer from './layout/Footer';
import { Box, Button, Flex, Modal, Stack, Text, Title } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconInfoCircle } from '@tabler/icons-react';

function App() {
  const [disclaimerOpened, { close: closeDisclaimer }] = useDisclosure(true);
 
  return (
    <>
      <Modal
        opened={disclaimerOpened}
        onClose={closeDisclaimer}
        centered
        withCloseButton={false}
        closeOnClickOutside={false}
        closeOnEscape={false}
        overlayProps={{ backgroundOpacity: 0.7, blur: 2 }}
        title={
          <Flex align="center" gap="sm">
            <IconInfoCircle size={24} color="#B08D2F" />
            <Title order={3} style={{ color: "#0F4C3A" }}>
              Avis important
            </Title>
          </Flex>
        }
      >
        <Stack gap="md">
          <Text style={{ color: "#1E1E1E" }}>
            Ce site est un projet indépendant et n&apos;est pas un site officiel
            du Ministère de la Justice du Sénégal.
          </Text>
          <Text size="sm" style={{ color: "#6B7280" }}>
            Il n&apos;est ni affilié, ni mandaté, ni administré par le Ministère
            de la Justice du Sénégal. Les informations présentées sont
            fournies à titre indicatif.
          </Text>
          <Button
            fullWidth
            onClick={closeDisclaimer}
            styles={{ root: { backgroundColor: "#0F4C3A" } }}
          >
            J&apos;ai compris
          </Button>
        </Stack>
      </Modal>
      <Header />
      <Box style={{ display: "flex", flexDirection: "column", gap: 45 }}>
        <HeroSection />
        <StatsBar />
        <ChannelsSection />
        <Flex
          direction="column"
          gap="xl"
          align="stretch"
          mx={10}
        >
          
             <ImpactSection />
         </Flex>
        <CtaSection />
        <Footer />
      </Box>
    </> 
  )
}

export default App
