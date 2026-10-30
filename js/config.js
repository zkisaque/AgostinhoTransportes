/* ==========================================================
   CONFIGURAÇÃO DO SITE — Agostinho Transportes
   Edite SOMENTE este arquivo para trocar número, textos,
   logo, imagens e contatos. Procure por "PREENCHER".
   ========================================================== */
const SITE_CONFIG = {
  empresa: {
    nome: "Agostinho Transportes",
    descricaoSite: "Agostinho Transportes: mudanças, embalagem, carregamento e transporte de itens nas regiões Sul, Sudeste e Centro-Oeste do Brasil."
  },

  // Número com DDI + DDD + número, só dígitos.
  whatsapp: {
    numero: "5511951390596",
    mensagem: "Olá! Conheci a Agostinho Transportes pelo site e gostaria de solicitar informações."
  },

  // Telefone para ligações.
  telefone: { exibir: "(11) 95139-0596", numero: "5511951390596" },

  // Logo oficial: coloque o arquivo em assets/logo/ e ajuste o nome aqui.
  // Enquanto o arquivo não existir, o site mostra o nome da empresa em texto.
  logo: "assets/logo/agostinho.svg",

  // Imagens (troque os arquivos provisórios .svg por fotos reais .jpg/.webp)
  imagens: {
    hero:  { src: "assets/images/hero-caminhao.svg", alt: "Caminhão da Agostinho Transportes" },          // SUBSTITUIR: foto real do caminhão
    sobre: { src: "assets/images/sobre-equipe.svg",  alt: "Equipe e caminhão da Agostinho Transportes" }  // SUBSTITUIR: foto real
  },

  hero: {
    titulo: "Sua mudança, com o cuidado de quem conhece a estrada.",
    slogan: "Levando qualidade, trazendo fidelidade.",
    botao: "Falar pelo WhatsApp"
  },

  servicos: {
    titulo: "Serviços",
    intro: "Cuidamos de cada etapa para que você só precise se preocupar com o novo endereço.",
    lista: [
      { nome: "Mudanças", texto: "Transportamos a sua mudança com planejamento e cuidado, do ponto de partida até o destino." },
      { nome: "Embalagem e proteção de pertences", texto: "Embalamos e protegemos móveis e objetos para que cheguem ao destino do jeito que saíram." },
      { nome: "Carregamento e descarregamento", texto: "Organizamos a carga no caminhão e fazemos o descarregamento com atenção e responsabilidade." },
      { nome: "Transporte de itens", texto: "Transporte de itens de acordo com a sua necessidade, com o mesmo cuidado de uma mudança completa." },
      { nome: "Pré e pós-mudança", texto: "Apoio nas etapas antes e depois do transporte, para deixar todo o processo mais tranquilo." }
    ]
  },

  sobre: {
    titulo: "Uma história de família, na estrada.",
    paragrafos: [
      "A Agostinho Transportes foi fundada por Nilson Sérgio, que sempre teve afinidade com o setor de transportes e transformou esse interesse em um trabalho construído com dedicação e compromisso.",
      "O nome da empresa carrega uma história ainda maior. Agostinho, pai de Sérgio, foi um homem trabalhador, honesto e dedicado à sua família. Mestre de obras de profissão, construiu sua trajetória com esforço e princípios que permaneceram como exemplo para aqueles que conviveram com ele.",
      "A escolha desse nome é uma forma de homenagear sua memória e manter vivos os valores que ele representava. Assim, a Agostinho Transportes carrega não apenas o nome de uma pessoa especial, mas também um legado familiar que inspira sua trajetória."
    ],
    fraseDestaque: "Mais do que transportar mudanças, a empresa busca levar consigo aquilo que deu origem à sua história: trabalho, honestidade, respeito e compromisso.",
    // PREENCHER quando confirmado (ex.: "Mais de 10 anos de atuação"). Vazio = não aparece.
    anosDeAtuacao: ""
  },

  atendimento: {
    titulo: "Onde atendemos",
    intro: "Atendemos as regiões Sul, Sudeste e Centro-Oeste do Brasil.",
    mostrarEstados: true, // false = mostra só os nomes das regiões
    aviso: "Consulte a disponibilidade para a sua cidade pelo WhatsApp.", // "" para esconder
    regioes: [
      { nome: "Sul",     estados: ["Paraná", "Santa Catarina", "Rio Grande do Sul"] },
      { nome: "Sudeste", estados: ["São Paulo", "Minas Gerais", "Espírito Santo"] },
      { nome: "Centro-Oeste", estados: ["Goiás"] }
    ]
  },

  diferenciais: {
    titulo: "O que você encontra com a gente",
    lista: [
      { nome: "Confiança", texto: "Transparência e respeito em cada conversa e em cada entrega." },
      { nome: "Cuidado com os pertences", texto: "Cada item é tratado com atenção, do carregamento à chegada." },
      { nome: "Compromisso", texto: "O combinado é levado a sério, do planejamento à entrega." },
      { nome: "Qualidade no atendimento", texto: "Atendimento direto, claro e próximo, do primeiro contato ao fim da mudança." }
    ]
  },

  contato: {
    titulo: "Vamos conversar sobre a sua mudança?",
    texto: "O atendimento é feito principalmente pelo WhatsApp. Também recebemos ligações.",
    botao: "Chamar no WhatsApp"
  },

  rodape: "Todos os direitos reservados."
};
