import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sobre Nós | Coral Digital",
  description: "Sobre a Coral Digital",
  // other metadata
};
const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Sobre nós"
        description="A Coral Digital é uma empresa inovadora focada em transformar a interação entre empresas e clientes através de soluções de Inteligência Artificial. Nossa missão é democratizar o acesso à tecnologia avançada, tornando-a acessível e útil para micro e pequenas empresas no Brasil."
      />
      <AboutSectionOne />
      <AboutSectionTwo />
    </>
  );
};

export default AboutPage;
