import Image from "next/image";
import React from "react";
import { Timeline } from "../components/ui/Timeline";
import { Timeline2020, Timeline2023, TimelineImg } from "@/data";

export function TimelineDemo() {
  const data = [
    {
      title: "2022",
      content: (
        <div>
          <p className="dark:bg-black dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
           Primeiro Contato com Programação: Python e PhP
          </p>
           <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
             Em 2022, iniciei minha jornada no mundo da programação por conta própria, estudando PHP e Python. A experiência me mostrou o potencial da tecnologia e me inspirou a buscar uma formação formal na área.
          </p>
          <div className="grid grid-cols-2 gap-4">
           {Timeline2020.map((image) => (
              <Image
              key={image.id}
              src={image.img}
              alt={`Timeline image ${image.id}`}
              width={image.width}
              height={image.height}
              className={image.className}
              />
            ))}
          </div>
        </div>
      ),
    },
    {
      title: "Meados 2023",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Início da Graduação em Ciências da Computação.
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
           Com o desejo de aprofundar meus conhecimentos, ingressei na Unicid para cursar Ciências da Computação. No mesmo ano, desenvolvi um projeto completo para um cliente, onde fui responsável por criar o design do site e, em seguida, implementá-lo em HTML. Esse foi um dos meus primeiros projetos a ser hospedado, representando uma conquista importante no início da minha carreira.
          </p>
          <div className="grid grid-cols-2 gap-4">
            {Timeline2023.map((image) => (
              <Image
              key={image.id}
              src={image.img}
              alt={`Timeline image ${image.id}`}
              width={image.width}
              height={image.height}
              className={image.className}
              />
            ))}
          </div>
        </div>
      ),
    },
    {
      title: "2024",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
           Foco em Novas Tecnologias e Engenharia de Software
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
         Este ano, decidi dar um passo importante na minha formação e troquei meu curso para Engenharia de Software em uma das melhores universidades de São Paulo. Essa mudança foi motivada pelo desejo de aprofundar meu conhecimento em desenvolvimento de sistemas e arquitetura de software.

        Ao longo do ano, também busquei me desenvolver em         áreas essenciais para a criação de interfaces e         experiências de usuário, completando cursos de UX/        UI Design. Essas habilidades foram fundamentais         para aprimorar minha compreensão do design        centrado no usuário.

        Atualmente, estou focado no aprendizado de Next.        js, uma tecnologia poderosa para o desenvolvimento        front-end, e também trabalhando para obter uma        certificação em C#.
          </p>
          <div className="grid grid-cols-2 gap-4">
           <Image
              src="https://assets.aceternity.com/pro/hero-sections.png"
              alt="hero template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="https://assets.aceternity.com/features-section.png"
              alt="feature template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="https://assets.aceternity.com/pro/bento-grids.png"
              alt="bento template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="https://assets.aceternity.com/cards.png"
              alt="cards template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Atualmente",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
            Após a implantação de 5 novos projetos em 2 meses, estou atualmente focado em aprofundar minhas habilidades técnicas e expandir meus conhecimentos na área.
          </p>
          <div className="mb-8">
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              ✅ Aprendizado contínuo em Next.js para otimizar o desenvolvimento front-end
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              ✅ Certificação em C# para fortalecer minhas habilidades de backend e desenvolvimento de software
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              ✅ Melhorias na UX/UI dos meus projetos para criar experiências centradas no usuário
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              ✅ Estudo aprofundado em arquitetura de software e desenvolvimento de sistemas
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              ✅ Colaboração com outros desenvolvedores para troca de conhecimento e crescimento profissional
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {TimelineImg.map((image) => (
                <Image
                  key={image.id}
                  src={image.img}
                  alt={`Timeline image ${image.id}`}
                  width={image.width}
                  height={image.height}
                  className={image.className}
                />
            ))}
            
          
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  );
}
