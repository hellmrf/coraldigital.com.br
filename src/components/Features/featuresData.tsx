import { Feature } from "@/types/feature";
// import { FaGlobe, FaRobot } from "react-icons/fa";
import {
  FaGlobe,
  FaEnvelopeOpenText,
  FaRobot,
  FaCloud,
  FaTools,
  FaCogs,
  FaRocket,
  FaLock,
  FaChartLine,
  FaUserShield,
} from "react-icons/fa";

const featuresData: Feature[] = [
  {
    id: 1,
    icon: FaGlobe,
    title: "Sites Profissionais",
    paragraph:
      "Crie presença digital com sites modernos, rápidos e visualmente impecáveis, sob medida para sua marca.",
  },
  {
    id: 2,
    icon: FaEnvelopeOpenText,
    title: "Domínio & E-mail Profissional",
    paragraph:
      "Tenha domínio próprio e e-mails profissionais que fortalecem a credibilidade da sua empresa.",
  },
  {
    id: 3,
    icon: FaRobot,
    title: "Chatbots Inteligentes",
    paragraph:
      "Atenda seus clientes 24h no WhatsApp com chatbots que realmente entendem seu negócio.",
  },
  {
    id: 4,
    icon: FaCloud,
    title: "Automação com IA",
    paragraph:
      "Otimize processos, ganhe produtividade e reduza custos aplicando inteligência artificial de forma prática.",
  },
  {
    id: 5,
    icon: FaTools,
    title: "Manutenção e Suporte",
    paragraph:
      "Conte com suporte técnico confiável e atualizações constantes para manter sua operação sem sustos.",
  },
  {
    id: 6,
    icon: FaCogs,
    title: "Soluções Sob Medida",
    paragraph:
      "Planejamos projetos digitais personalizados para ajudar sua empresa a crescer de forma escalável.",
  },
  // {
  //   id: 7,
  //   icon: FaRocket,
  //   title: "Lançamentos Rápidos",
  //   paragraph:
  //     "Coloque seu projeto online em tempo recorde, sem abrir mão da qualidade ou da segurança.",
  // },
  // {
  //   id: 8,
  //   icon: FaLock,
  //   title: "Segurança Digital",
  //   paragraph:
  //     "Implemente práticas de segurança para proteger dados sensíveis e garantir a confiabilidade da sua marca.",
  // },
  // {
  //   id: 9,
  //   icon: FaChartLine,
  //   title: "Análise e Performance",
  //   paragraph:
  //     "Monitore o desempenho do seu site e dos seus processos digitais para tomar decisões baseadas em dados.",
  // },
  // {
  //   id: 10,
  //   icon: FaUserShield,
  //   title: "Privacidade e Compliance",
  //   paragraph:
  //     "Adequamos suas soluções digitais às leis de proteção de dados para proteger você e seus clientes.",
  // },
];

export default featuresData;
