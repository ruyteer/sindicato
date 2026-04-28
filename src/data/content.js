// ============================================================================
// CONTEUDO DO LIVRO DA FAMILIA
// ----------------------------------------------------------------------------
// Edite este arquivo pra atualizar nomes, metas, premiacoes e textos do site.
// ============================================================================

export const faction = {
  name: "Peaky Blinders",
  tagline: "By Order of the Peaky Blinders",
  welcome:
    "Bem-vindo a familia. Aqui voce encontra tudo que precisa saber pra caminhar com a gente \u2014 a hierarquia, os cargos, as metas e as premiacoes. Leia com atencao. Ninguem aqui e maior que a familia.",
};

export const vsl = {
  youtubeId: "-NxZPNe3WD8",
  title: "Assista antes de qualquer coisa",
  subtitle:
    "Uma mensagem da lideranca pra quem acabou de chegar na familia. Tira dois minutos, assiste ate o fim.",
};

export const leadership = [
  {
    id: "00-jhon",
    rank: "00",
    placeholder: "Jhon Shelby",
    photo: "/images/jhon.jpeg",
  },
  {
    id: "01-patricio",
    rank: "01",
    placeholder: "Patrício Belford",
    photo: "/images/patricio.jpeg",
  },
  {
    id: "02-ruyter",
    rank: "02",
    placeholder: "Ruyter Shelby",
    photo: "/images/ruyter.jpeg",
  },
  {
    id: "02-felipe",
    rank: "02",
    placeholder: "Felipe Shelby",
    photo: "/images/felipe.jpeg",
  },
  {
    id: "02-pessoa",
    rank: "02",
    placeholder: "Pessoa Shelby",
    photo: "/images/pessoa.jpeg",
  },
  {
    id: "03-rasec",
    rank: "03",
    placeholder: "Rasec Shelby",
    photo: "/images/rasec.jpeg",
  },
  {
    id: "03-bigode",
    rank: "03",
    placeholder: "Bigode Shelby",
    photo: "/images/bigode.jpeg",
  },
  {
    id: "03-lazarento",
    rank: "03",
    placeholder: "Lazarento Bagualtche",
    photo: "/images/lazarento.jpeg",
  },
];

export const management = [
  {
    id: "geral",
    title: "Gerente Geral",
    placeholder: "Responsável: Jhon",
    description:
      "Coordena os gerentes e e a ponte entre a gerencia e a lideranca. Garante que os recursos cheguem onde precisam chegar.",
  },
  {
    id: "farm",
    title: "Gerente de Farm",
    placeholder: "Responsável: Adrion Médico",
    description:
      "Cobra as metas de farm, acompanha os membros farmando e gerencia as salas pra ninguem ficar sozinho.",
  },
  {
    id: "recrutamento",
    title: "Gerente de Recrutamento",
    placeholder: "Responsável: Elfo Salamaleiko",
    description:
      "Gerencia os recrutadores, acompanha os novatos de perto e garante que todo recem-chegado conheca as regras da familia.",
  },
];

export const roles = [
  {
    id: "membro",
    title: "Membro",
    description: "A base da familia. Todo mundo comeca aqui.",
    goals: ["Bater as metas de farm", "Se mostrar presente"],
    rewards: ["Pode vender os proprios farms para os zeros"],
  },
  {
    id: "recrutador",
    title: "Recrutador",
    description: "Responsavel por trazer sangue novo pra familia.",
    goals: [
      "Bater as metas de farm",
      "Recrutar no minimo 2 pessoas por dia em que estiver online",
    ],
    rewards: [
      "2kk por pessoa recrutada",
      "Promocoes relampago podem aumentar o valor",
    ],
  },
  {
    id: "supervisor",
    title: "Supervisor",
    description:
      "Cargo de destaque \u2014 usado pra sinalizar quem esta se destacando e tem potencial pra virar gerente. Sem responsabilidades extras.",
    goals: ["Manter o desempenho que te trouxe ate aqui"],
    rewards: ["Visibilidade \u2014 proximo passo e a gerencia"],
  },
];

export const locations = [
  {
    id: "p1",
    name: "P1",
    tagline: "Nosso territorio",
    description:
      "A P1 e o centro da operacao \u2014 onde a familia se reune, recebe clientes e toca o dia a dia. Toda interacao importante acontece aqui, entao esse espaco exige respeito: sem zaralho, sem carro, sem tumulto.",
    image: "/images/local-p1.jpeg",
  },
  {
    id: "quadra-farm",
    name: "Quadra de Farm",
    tagline: "Onde o trabalho rola",
    description:
      "Lugar reservado pro farm da fac. Se tem gente farmando, respeita o trabalho \u2014 nada de bater, matar ou passar de carro por cima. Quem chega na quadra e pra farmar ou acompanhar, nada alem disso.",
    image: "/images/local-farm.jpeg",
  },
];

export const events = {
  title: "Eventos diarios",
  tagline: "A familia nao para",
  description:
    "Todos os dias a fac se movimenta. Pontualmente as 19h, a gente se reune pra colocar algo grande em pratica \u2014 uma acao planejada, uma invasao, um script ou um evento personalizado feito pela lideranca. A ideia e simples: manter a familia viva, unida e com historias pra contar depois.",
  highlights: [
    { time: "19h", label: "Reuniao diaria e acao coletiva" },
    { time: "Todo dia", label: "Scripts, invasoes e eventos custom" },
    { time: "Sempre", label: "Diversao em primeiro lugar" },
  ],
};

export const rules = [
  {
    id: "zaralho",
    title: "Nada de zaralho em areas sensiveis",
    text: "Nada de zaralho na P1 \u2014 muito menos quando tiver cliente no local. O mesmo vale pra quadra de farm e pra pesca. Nessas areas, sem matar, sem bater, sem andar de carro. O trabalho do irmao ao seu lado nao pode ser interrompido.",
  },
  {
    id: "carros",
    title: "Carro nao entra na P1",
    text: "Chegou dirigindo? Guarda na garagem e desce a pe. A P1 e espaco de convivencia \u2014 movimento em cima de movimento so atropela gente e tumultua o ambiente. Respeita o espaco.",
  },
  {
    id: "uniforme",
    title: "Uniforme e obrigatorio",
    text: "Dentro da fac, o uniforme e regra (exceto durante eventos especificos). Foi visto sem uniforme, toma advertencia. A roupa representa a familia \u2014 veste com orgulho.",
  },
  {
    id: "hierarquia",
    title: "Respeito e hierarquia",
    text: "Respeito acima de tudo \u2014 e a hierarquia nao se discute. Saiba quem e seu superior e trate como tal. Aqui ninguem e maior que a familia, mas cada um tem seu lugar.",
  },
  {
    id: "familia",
    title: "Meta e importante, mas voce e irmao",
    text: "Membro e recrutador: bata suas metas, mas nao se prenda so a isso. Voce nao e funcionario \u2014 voce e irmao. Conversa, cria laco, curte com a fac. Uma familia que se diverte junto, dura junto.",
  },
];

export const newcomerGuide = {
  eyebrow: "A carta da familia",
  title: "Guia do novato",
  subtitle: "Le com calma. Tudo que voce precisa pra comecar ta aqui.",
  salutation: "A nova cabeca da familia,",
  opening:
    "Se essa carta chegou nas suas maos, e porque voce foi escolhido pra caminhar com a gente. Nao e qualquer um que entra \u2014 entao respeita o convite e le com atencao. Tudo que voce precisa saber pra dar os primeiros passos ta escrito aqui embaixo.",
  sections: [
    {
      id: "quem-somos",
      heading: "Quem somos",
      text: "A Peaky Blinders e faccao de lavagem e algema na cidade nobre \u2014 e a maior delas. O jogo e claro: cobramos 30% de cada cliente que aparece pra lavar com a gente. Mas atencao: apenas gerentes pra cima encostam na lavagem. Enquanto voce for membro, seu pao e a algema.",
    },
    {
      id: "algema",
      heading: "A algema e seu primeiro oficio",
      text: "Voce compra a algema por 10k e revende pelo dobro. Com parceria fechada, sai a 20k. Sem parceria, 25k. Cada algema vendida e dinheiro direto no seu bolso \u2014 e a fac garante o estoque rolando o tempo todo.",
    },
    {
      id: "meta",
      heading: "A meta diaria e o farm",
      text: "Bate sua meta de farm e leva 600k de grana ao entregar. E aqui vem a melhor parte: se farmar alem do combinado, os 0's e os gerentes compram suas farms extras por um preco acima. Traducao simples \u2014 quanto mais voce farma, mais grana entra. A familia recompensa quem produz.",
    },
    {
      id: "recrutamento",
      heading: "O proximo passo: recrutador",
      text: "Quando voce se mostrar, vai ser promovido a recrutador. A partir dai e a sua vez de trazer sangue novo, explicar essas mesmas regras e formar a proxima geracao. Cada cabeca que voce trouxer pra dentro vale 2kk no seu pagamento.",
    },
    {
      id: "pagamento",
      heading: "O pagamento e sagrado",
      text: "Todo santo dia, as 20h em ponto, o nosso 00 puxa o relatorio do painel e faz o pagamento dos recrutadores. Tudo registrado, tudo rastreado \u2014 quem recrutou, quantos e quanto leva. Voce nao precisa cobrar ninguem, nao precisa lembrar ninguem. O pagamento cai. Sempre. 20h. Todo dia.",
    },
    {
      id: "eventos",
      heading: "A fac nao dorme",
      text: "Toda noite a familia se movimenta \u2014 acao, invasao, script, reuniao. Sempre tem algo rolando. Fica de olho no Discord e no grupo do WhatsApp da fac, e por la que tudo e avisado. Quem perde evento, perde historia.",
    },
  ],
  closing:
    "Respeita seus irmaos, diverte e carrega o nome com orgulho. Aqui ninguem e maior que a familia \u2014 mas a familia reconhece quem caminha junto.",
  welcome: "Bem-vindo a maior faccao da cidade nobre.",
  signature: "By order of the Peaky Blinders",
};

export const navSections = [
  {
    heading: "Inicio",
    items: [
      { id: "inicio", label: "Bem-vindo" },
      { id: "video", label: "Video de boas-vindas" },
      { id: "hierarquia", label: "A hierarquia" },
    ],
  },
  {
    heading: "Estrutura",
    items: [
      { id: "lideranca", label: "Lideranca (Zeros)" },
      { id: "gerencia", label: "Gerencia" },
      { id: "cargos", label: "Cargos" },
    ],
  },
  {
    heading: "Dia a dia",
    items: [
      { id: "locais", label: "Locais" },
      { id: "eventos", label: "Eventos" },
      { id: "regras", label: "Regras gerais" },
    ],
  },
  {
    heading: "Pra comecar",
    items: [{ id: "novatos", label: "Guia do novato" }],
  },
];
