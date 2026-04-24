import Image from "next/image";
import type { ReactNode } from "react";
import SectionTitle from "../Common/SectionTitle";

import { FaRulerCombined } from "react-icons/fa";

const AboutSectionOne = () => {
  const List = ({ text, icon }: { text: string; icon?: ReactNode }) => (
    <p className="mb-5 flex items-center text-lg font-medium text-body-color">
      <span className="mr-4 flex h-[30px] w-[30px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-white">
        {icon || <FaRulerCombined className="text-xl text-white h-4 w-4" />}
      </span>
      {text}
    </p>
  );

  return (
    <section id="about" className="pt-16 md:pt-20 lg:pt-28">
      <div className="container">
        <div className="border-b border-body-color/15 pb-16 dark:border-white/15 md:pb-20 lg:pb-28">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 lg:w-1/2">
              <SectionTitle
                title="Por que a Coral Digital é diferente?"
                paragraph="Grandes empresas vendem infraestrutura. Consultorias tradicionais cobram o que PMEs não conseguem pagar. Startups verticais resolvem um problema, mas param por aí. A Coral Digital ocupa o espaço entre esses mundos: uma empresa de pesquisa e desenvolvimento aplicado em IA, com formação científica, histórico de entrega e capacidade de percorrer sozinha o caminho do diagnóstico ao produto em produção."
                mb="44px"
              />

              <div
                className="mb-12 max-w-[570px] lg:mb-0"
                data-wow-delay=".15s"
              >
                <div className="mx-[-12px] flex flex-wrap">
                  <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                    <List text="Validação rigorosa em cada projeto" />
                    <List text="Conhecimento de domínio acumulado" />
                    <List text="Infraestrutura técnica reutilizável" />
                  </div>

                  <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                    <List text="Transparência sobre limitações" />
                    <List text="Foco no mercado brasileiro" />
                    <List text="Da teoria ao produto em produção" />
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full px-4 lg:w-1/2">
              <div className="relative mx-auto aspect-25/24 max-w-[500px] lg:mr-0">
                <Image
                  src="/images/about/about-image.svg"
                  alt="about-image"
                  fill
                  className="mx-auto max-w-full drop-shadow-three dark:hidden dark:drop-shadow-none lg:mr-0"
                />
                <Image
                  src="/images/about/about-image-dark.svg"
                  alt="about-image"
                  fill
                  className="mx-auto hidden max-w-full drop-shadow-three dark:block dark:drop-shadow-none lg:mr-0"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionOne;
