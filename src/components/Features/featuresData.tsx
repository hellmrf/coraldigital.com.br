import { Feature } from "@/types/feature";
import {
  FaChartBar,
  FaDatabase,
  FaFileContract,
  FaFlask,
  FaShieldAlt,
  FaWhatsapp,
} from "react-icons/fa";

const featuresData: Feature[] = [
  {
    id: 1,
    icon: FaDatabase,
    title: "RAG Corporativo",
    paragraph:
      "Torne o conhecimento interno da sua empresa acessível por linguagem natural. Documentos jurídicos, políticas de RH e protocolos clínicos respondidos em segundos, com rastreabilidade de fonte.",
  },
  {
    id: 2,
    icon: FaWhatsapp,
    title: "Responde.Chat",
    paragraph:
      "Atendimento via WhatsApp com IA que entende seu negócio, não apenas executa scripts. Integração nativa, sem depender de plataformas genéricas.",
  },
  {
    id: 3,
    icon: FaFileContract,
    title: "Licita.AI",
    paragraph:
      "Monitore, organize e analise editais de licitação com inteligência artificial. Menos tempo vasculhando DOU, mais tempo preparando propostas competitivas.",
  },
  {
    id: 4,
    icon: FaFlask,
    title: "P&D Sob Demanda",
    paragraph:
      "Capacidade técnica especializada para projetos pontuais quando o problema é complexo demais para ferramentas prontas e caro demais para contratar equipe interna.",
  },
  {
    id: 5,
    icon: FaShieldAlt,
    title: "IA dentro da sua rede",
    paragraph:
      "Implantamos modelos no ambiente da sua empresa: sem envio de dados para terceiros, sem dependência de APIs externas, em conformidade com LGPD e exigências setoriais.",
  },
  {
    id: 6,
    icon: FaChartBar,
    title: "Validação e Métricas",
    paragraph:
      "Nenhuma entrega sem evidência. Cada projeto inclui protocolo de validação estatística, métricas de desempenho e documentação de limitações.",
  },
];

export default featuresData;
