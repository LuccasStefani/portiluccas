import { link } from "fs";

export const navItems = [
  { name: "Sobre", link: "#about" },
  { name: "Projetos", link: "#projects" },
  { name: "Testemunhas", link: "#testimonials" },
  { name: "Contato", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "Priorizo a colaboração do cliente, promovendo a comunicação aberta",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[56vh]",
    imgClassName: "",
    titleClassName: "justify-end",
    img: "/b1.png",
    spareImg: "",
  },
  {
    id: 2,
    title: "Sou muito flexível com comunicação de fuso horário",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "Meu tech stack",
    description: "Melhorando constantemante!",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Entusiasta de tecnologia e apaixonado por desenvolvimento",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Atualmente em busca de certificações..",
    description: "Informação privilegiada",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-70",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Quer começar um projeto? Podemos trabalhar juntos!",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Innovare Decor",
    des: "Projeto feito com o tato, mais ele do que eu.",
    img: "/p1.svg",
    className: "md:col-span-6",
    iconLists: ["/re.svg", "/tail.svg"],
    link: "https://innovaredecor.com",
  },
  {
    id: 2,
    title: "Lading Page Adivogado",
    des: "Entregando algo que o cliente buscava, Minimalista e Moderno",
    img: "/p2.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg"],
    link: "/",
  },
  {
    id: 3,
    title: "Clone Aplle",
    des: "Bildind e Deploy Apple App",
    img: "/p3.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg",],
    link: "/ui.aiimg.com",
  },
  {
    id: 4,
    title: "Code with me!",
    des: "Atualmente desenvolvendo um repositório online...",
    img: "/p4.svg",
    iconLists: ["/yt.svg"],
    link: "https://cloneaplle.vercel.app",
  },
];

export const testimonials = [
  {
    quote:
      "Colaborar com Luccas foi um prazer absoluto. Seu profissionalismo, presteza e dedicação na entrega de resultados excepcionais ficaram evidentes ao longo do nosso projeto. O entusiasmo de Luccas por cada faceta do desenvolvimento realmente se destaca. Se você busca elevar seu site e sua marca, Luccas é o parceiro ideal.",
    name: "Luccas Stefani",
    title: "Engenherio de Software",
  },
  {
    quote:
      "Colaborar com Luccas foi um prazer absoluto. Seu profissionalismo, presteza e dedicação na entrega de resultados excepcionais ficaram evidentes ao longo do nosso projeto. O entusiasmo de Luccas por cada faceta do desenvolvimento realmente se destaca. Se você busca elevar seu site e sua marca, Luccas é o parceiro ideal.",
    name: "Luccas Stefani",
    title: "Engenherio de Software",
  },
  {
    quote:
      "Colaborar com Luccas foi um prazer absoluto. Seu profissionalismo, presteza e dedicação na entrega de resultados excepcionais ficaram evidentes ao longo do nosso projeto. O entusiasmo de Luccas por cada faceta do desenvolvimento realmente se destaca. Se você busca elevar seu site e sua marca, Luccas é o parceiro ideal.",
    name: "Luccas Stefani",
    title: "Engenherio de Software",
  },
  {
    quote:
      "Colaborar com Luccas foi um prazer absoluto. Seu profissionalismo, presteza e dedicação na entrega de resultados excepcionais ficaram evidentes ao longo do nosso projeto. O entusiasmo de Luccas por cada faceta do desenvolvimento realmente se destaca. Se você busca elevar seu site e sua marca, Luccas é o parceiro ideal.",
    name: "Luccas Stefani",
    title: "Engenherio de Software",
  },
  {
    quote:
      "Colaborar com Luccas foi um prazer absoluto. Seu profissionalismo, presteza e dedicação na entrega de resultados excepcionais ficaram evidentes ao longo do nosso projeto. O entusiasmo de Luccas por cada faceta do desenvolvimento realmente se destaca. Se você busca elevar seu site e sua marca, Luccas é o parceiro ideal.",
    name: "Luccas Stefani",
    title: "Engenherio de Software",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Engenheiro Front-end",
    desc: "Auxiliei no desenvolvimento de uma plataforma web utilizando React.js, potencializando a interatividade.",
    className: "md:col-span-1",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Mobile App Dev - Kotlin",
    desc: "Aplicativo móvel projetado e desenvolvido para plataformas iOS e Android usando React Native.",
    className: "md:col-span-1", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Freelance App Dev Projetos",
    desc: "Liderei o desenvolvimento de um aplicativo mobile para um cliente, desde o conceito inicial até a implantação nas lojas de aplicativos.",
    className: "md:col-span-1", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Lead Frontend Developer",
    desc: "Desenvolvimento e manutenção de recursos voltados ao usuário usando tecnologias front-end modernas.",
    className: "md:col-span-1",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/LuccasStefani",
  },
  // {
  //   id: 2,
  //   img: "/twit.svg",
  //   link: "https://github.com/LuccasStefani",
  // },
  {
    id: 3,
    img: "/link.svg",
    link: "https://github.com/LuccasStefani",
  },
  {
    id: 3,
    img: "/dribbble.svg",
    link: "https://dribbble.com/yLuketa",
  },
  {
    id: 5,
    img: "/instagram.svg",
    link: "https://www.instagram.com/pureux_design/?utm_source=ig_web_button_share_sheet",
  },
  // {
  //   id: 6,
  //   img: "/whastapp.svg",
  //   link: "https://github.com/LuccasStefani",
  // },
];

export const Timeline2023 = [
  {
    id: 1,
    img: "/p1.svg",
    className: "rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] border-300",
    height: 400,
    width: 400,
  },
  {
    id: 2,
    img: "/projetoFigma.svg",
    className: "rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] border-300",
    height: 400,
    width: 400,
  },
]

export const Timeline2020 = [
  {
    id: 1,
    img: "/bgTime1.png",
    className: "rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] border-300",
    height: 400,
    width: 400,
  },
  {
    id: 2,
    img: "/bgTime2.png",
    className: "rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] border-300",
    height: 400,
    width: 400,
  },
]

export const TimelineImg = [
  {
    id: 1,
    img: "/bgTimeline1.svg",
    className: "rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]",
    height: 400,
    width: 400,
  },
  {
    id: 2,
    img: "/bgTimeline2.svg",
    className: "rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]",
    height: 400,
    width: 400,
  },
  {
    id: 3,
    img: "/bgTimeline3.svg",
    className: "rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]",
    height: 400,
    width: 400,
  },
  {
    id: 4,
    img: "/bgTimeline4.svg",
    className: "rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]",
    height: 400,
    width: 400,
  },
]