// Arquivo central de conteúdo do site.
// Ao reaproveitar este template para um novo cliente, ajuste só este arquivo:
// os componentes leem tudo daqui e não precisam ser tocados.

export const siteConfig = {
  name: "Cadu",
  description: "Desenvolvedor focado em transformar ideias em produtos digitais rápidos, acessíveis e bem desenhados.",

  nav: [
    { label: "Sobre", href: "#sobre" },
    { label: "Projetos", href: "#projetos" },
    { label: "Serviços", href: "#servicos" },
    { label: "Contato", href: "#contato" },
  ],

  hero: {
    eyebrow: "Desenvolvedor",
    title: "Cadu",
    subtitle:
      "Escrevo código limpo e experiência de uso que coloca o usuário em primeiro lugar — do design da interface à lógica por trás dela.",
    ctaLabel: "Fale Comigo",
    ctaHref: "#contato",
  },

  about: {
    eyebrow: "Sobre",
    title: "Desenvolvo produtos digitais que realmente funcionam.",
    text: "Sou desenvolvedor apaixonado por transformar problemas complexos em soluções simples. Trabalho lado a lado com você, do primeiro esboço à entrega final, com foco em performance, acessibilidade e código que é fácil de manter.",
  },

  projects: {
    eyebrow: "Projetos",
    title: "Meus trabalhos mais recentes",
    items: [
      {
        title: "Onde Gastei?",
        url: "https://onde-gastei-psi.vercel.app/",
        description: "Sistema de gestão de finanças. Simples, compacto, estético e resolve seu problema de organização financeira de maneira descomplicada.",
      },
      {
        title: "BpNews",
        url: "https://bpnews1.vercel.app/",
        description: "Site de notícias de Bragança Paulista, completo com todo fluxo de dados necessário. ",
      },
      {
        title: "Projeto 3",
        url: "https://exemplo.com/projeto-3",
        description: "Troque esta descrição por um resumo do projeto: o que ele faz, o problema que resolve e as tecnologias usadas.",
      },
    ],
  },

  services: {
    eyebrow: "Serviços",
    title: "O que eu faço",
    items: [
      {
        title: "Desenvolvimento Web",
        description: "Sites e aplicações rápidas, responsivas e focadas em performance, acessibilidade e usabilidade.",
      },
      {
        title: "Sites e Landing Pages",
        description: "Páginas de alta conversão, do design à implementação, prontas para o seu negócio.",
      },
      {
        title: "Habilidades",
        description: "Trabalho utilizando tecnologias como: TypeScript, Node.js, Next.js, React.js, JavaScript, HTML, CSS, Tailwind CSS, Supabase.",
      },
    ],
  },

  contact: {
    eyebrow: "Contato",
    title: "Vamos tirar a sua ideia do papel",
    whatsapp: "https://wa.me/5511973289270",
    email: "caduwerneck42@gmail.com",
    instagram: "https://instagram.com/c4du.eduardo",
  },

  footer: {
    text: "Cadu. Todos os direitos reservados.",
  },
};
