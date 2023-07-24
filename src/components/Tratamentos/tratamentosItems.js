import alodine from '../../assets/images/alodine.webp';
import bissulfeto from '../../assets/images/bissulfeto.webp';
import cadmio from '../../assets/images/cadmio.webp';
import estanho from '../../assets/images/estanho.webp';
import fosfatizacao from '../../assets/images/fosfatizacao.webp';
import niquel from '../../assets/images/niquel.webp';
import oxidacao from '../../assets/images/oxidacao.webp';
import xylan from '../../assets/images/xylan.webp';
import zincagemEletrolitica from '../../assets/images/zincagem-eletrolitica.webp';
import zincagemFogo from '../../assets/images/zinco-fogo.webp';
import zincoNiquel from '../../assets/images/zinco-niquel.webp';
import decapagem from '../../assets/images/decapagem.webp';
import desengraxe from '../../assets/images/desengraxe.webp';
import jateamento from '../../assets/images/jateamento.webp';

export function getTratamento(item) {
  const tratamentosItems = [
    {
      route: 'alodine',
      title: 'Alodine',
      description: [
        'O que é alodine: Alodine é um tipo de tratamento de superfície para alumínio e suas ligas que forma uma película anticorrosiva de cromatos estáveis',
        'Qual a sua aplicação: Alodine pode ser aplicado por pulverização ou imersão, sem necessidade de corrente elétrica. Alodine é usado principalmente em peças aeronáuticas, automotivas e industriais.',
        'Quais os seus benefícios: Alodine melhora a aderência da tinta e fornece proteção contra corrosão para os substratos de metal leve. Alodine é um produto livre de cromo e formulado especificamente para o tratamento de alumínio e suas ligas, o que reduz o impacto ambiental e os riscos à saúde.',
      ],
      image: alodine,
    },
    {
      route: 'bissulfeto',
      title: 'Bissulfeto de Molibdênio',
      description: [
        'O bissulfeto de molibdênio (MoS2) é um composto químico formado por dois átomos de enxofre e um átomo de molibdênio, com adição de resinas altamente aderentes, resistentes a produtos químicos e altas temperaturas.',
        'Este tipo de tratamento proporciona uma boa lubricidade e grande proteção anticorrosiva, prevenindo contra emperramentos.',
        'Aplicações nos setores:',
        '• Aeroespacial',
        '• Automotivo',
        '• Alimentício',
        '• Têxtil',
        '• Máquinas e equipamentos',
        '• Petroquímico e Petrolífero',
        '• Plásticos',
        '• Siderurgia e Mineração',
      ],
      image: bissulfeto,
    },
    {
      route: 'cadmio',
      title: 'Cádmio',
      description: [
        'O tratamento de superfície com cádmio é um processo de revestimento de peças metálicas com uma camada fina de cádmio para aumentar sua resistência e prevenção contra a corrosão.',
        'O cádmio é um metal branco-prateado que tem boa condutividade elétrica e térmica, baixo ponto de fusão e alta resistência à fadiga. Nós trabalhamos com cádmio incolor, bicromatizado e verde oliva.',
        'O tratamento de superfície com cádmio é aplicável em especial em peças do segmento petroquímico, como parafusos, porcas, arruelas e tubos, mas também pode ser usado em outras indústrias que requerem alta durabilidade e proteção contra ambientes agressivos.',
        'Processo com grande aplicação na indústria aeroespacial. Seu grande ponto forte é resistência à baixas temperaturas como -50ºC.',
      ],
      image: cadmio,
    },
    {
      route: 'estanho',
      title: 'Estanho',
      description: [
        'O tratamento de superfície de banho em estanho brilhante é um processo que consiste na aplicação de um revestimento metálico de estanho sobre diversos tipos de materiais. Nós também trabalhamos com o estanho fosco.',
        'O principal objetivo desse tratamento é conferir propriedades de proteção às peças, capazes de aprimorar sua resistência e durabilidade.',
        'O banho com estanho brilhante é indicado para peças técnicas, principalmente da indústria eletroeletrônica, que necessitam de excelente condutividade elétrica e resistência à corrosão.',
        'Além disso, o banho com estanho brilhante confere um aspecto estético às peças, pois proporciona um acabamento uniforme e brilhante.',
      ],
      image: estanho,
    },
    {
      route: 'fosfatizacao',
      title: 'Fosfatização',
      description: [
        'O tratamento de superfície de fosfatização é um processo que transforma uma superfície metálica em uma superfície com uma fina camada de fosfato metálico.',
        'O objetivo desse tratamento é proteger o metal da oxidação e da corrosão, também conhecidas como ferrugem e desgaste.',
        'O tratamento também serve como base para um acabamento posterior por pintura ou impregnação de óleos protetivos, melhorando a adesão e a resistência da tinta ao metal.',
        'O tratamento pode ser feito por imersão ou aspersão, dependendo do tipo e do tamanho da peça metálica.',
        'Existem diferentes tipos de fosfatização, como a fosfatização de zinco, a fosfatização de manganês e a fosfatização orgânica.',
        'Cada tipo tem suas vantagens e desvantagens, dependendo da aplicação e das exigências ambientais.',
      ],
      image: fosfatizacao,
    },
    {
      route: 'niquel',
      title: 'Níquel Químico',
      description: [
        'O tratamento de superfície de níquel é uma técnica que visa melhorar as propriedades de peças metálicas, como resistência à corrosão, abrasão e desgaste.',
        'O tratamento a nível químico, usado com banhos em elementos químicos como por exemplo, sulfato de níquel e o hipofosfito de sódio. Esse tipo de tratamento é autocatalítico, ou seja, não precisa de corrente elétrica para ocorrer. Trabalhamos com niquel com baixo, médio e alto fósforo.',
        'Algumas aplicações do tratamento de superfície de níquel são: peças para indústrias petrolíferas, químicas e alimentícias, equipamentos mecânicos, peças automóveis e motocicletas e peças para instrumentos médicos e odontológicos',
        'Alguns benefícios do tratamento de superfície de níquel são: aumento da durabilidade e da vida útil das peças metálicas, melhoria da estética e do brilho das peças metálicas e proteção contra oxidação e corrosão das peças metálicas',
      ],
      image: niquel,
    },
    {
      route: 'oxidacao-negra',
      title: 'Oxidação Negra',
      description: [
        'O tratamento de superfície de oxidação negra é um tipo de revestimento resultante da conversão da camada exterior do metal ferroso através de um tratamento químico. Também chamada de escurecimento ou enegrecimento, a oxidação negra garante resistência contra a corrosão (para situações não tão exigentes) além de deixar o material com uma bela aparência.',
        'Aqui estão alguns benefícios do tratamento de superfície de oxidação negra: resistência à corrosão e abrasão leve, não altera significantemente a dimensão do fixador, já que a camada possui espessura fina, garante uma aparência bonita ao material, é uma alternativa mais barata em relação a outros métodos de proteção contra a corrosão. O processo pode ser realizado em grandes quantidades, reduzindo custos.',
      ],
      image: oxidacao,
    },
    {
      route: 'xylan',
      title: 'Xylan',
      description: [
        'Revestimento de Xylan® são uma família de fluoporímeros desenvolvidos para o uso em diversos tipos de componentes OEM e fixadores para previvir a corrosão e aumentar a vida do produto.',
        'A maioria dos revestimentos de Xylan® contém PTFE ou outros tipos de lubrificantes, e são aplicados em filmes finos.',
        'As propriedades dos revestimentos de Xylan são:',
        '• Lubrificação e controle de atrito',
        '• Resistencia ao desgaste',
        '• Propriedades antiaderentes e de remoção do fixador',
        '• Proteção contra corrosão',
      ],
      image: xylan,
    },
    {
      route: 'zincagem-eletrolitica',
      title: 'Zincagem Eletrolitica',
      description: [
        'A zincagem eletrolítica é um tratamento de superfície de metal ferroso ou não ferroso, com amplo uso em diversos segmentos do mercado. A técnica confere maior resistência às peças e consequente aumento de sua vida útil.',
        'A aplicação da zincagem eletrolítica é feita por meio da eletrólise, que é a deposição de uma camada de zinco sobre a superfície da peça. A camada de zinco depositada nas peças é selada com um conjunto de substâncias químicas conhecido como passivadores, aumentando o seu poder de resistência à oxidação.',
        'Os processos de tratamento superficial de zincagem eletrolítica trivalente conhecidos são a cromatização transparente trivalente branco ou azul, a cromatização amarela e cromatização preta e a cromatização verde oliva que podem ser feitas com ou sem selante. Assim, as peças adquirem alta resistência tanto à corrosão branca quanto à corrosão vermelha.',
      ],
      image: zincagemEletrolitica,
    },
    {
      route: 'zincagem-fogo',
      title: 'Zincagem a Fogo',
      description: [
        'A zincagem a fogo, também chamada de galvanização a fogo, é um processo de revestimento realizado por meio da aplicação de zinco sobre uma superfície de ferro ou aço, agregando um alto poder de resistência a corrosões e evitando a perda de ferro ou oxidação, por conta disso.',
        'O processo de zincagem a fogo produz uma série de benefícios, como: prolonga a vida útil das peças de aço, fornece uma camada protetora entre o aço e a atmosfera, evita a formação de óxido de ferro na superfície do aço, propicia à peça resistência à corrosão ao ser exposta às ações do tempo e propicia vida útil extensa à estrutura tratada.',
        'O processo de zincagem a fogo busca agregar as propriedades do zinco no material de destino e sendo assim, mudar suas propriedades para maior adequação ao ambiente de utilização como, em indústrias que lidam com altas temperaturas e necessitam de objetos e peças que suportem esses tipos de condições climáticas, por exemplo.',
        'O processo de zincagem a fogo é composto por algumas etapas, como: desengraxe, lavagem, decapagem, lavagem, fluxagem, secagem e imersão a quente ou "Zincagem a quente" e a centrifugação.',
        'A temperatura de trabalho varia de 440 a 470 graus Celsius, dependendo do tipo de material que estamos tratando.',
      ],
      image: zincagemFogo,
    },
    {
      route: 'zinco-niquel',
      title: 'Zinco Níquel',
      description: [
        'O tratamento de superfície chamado zinco níquel é um processo de revestimento que consiste em aplicar uma camada de zinco e níquel em uma superfície metálica. Esse processo é realizado por meio de banhos eletrolíticos, que são capazes de depositar uma camada uniforme de zinco e níquel na superfície da peça. O processo de execução do tratamento de superfície chamado zinco níquel é composto por várias etapas, que incluem a limpeza da superfície da peça, a aplicação do banho eletrolítico, a secagem e a inspeção final da peça.',
        'A aplicação do tratamento de superfície chamado zinco níquel é ampla e pode ser utilizada em diversos tipos de peças metálicas, como aços, bronze, latão, alumínio e outros. Com o tratamento, a durabilidade e resistência do material será elevada, evitando oxidação, corrosão e outros problemas que podem surgir e danificar suas peças.',
        'Os benefícios do tratamento de superfície chamado zinco níquel incluem a alta capacidade de prevenir a corrosão de outros materiais, sendo assim utilizado como solução para revestimentos, podendo ser aplicado à diferentes peças metálicas. As camadas produzidas por este material são totalmente isentas de tensões e são capazes de oferecer um acabamento perfeito.',
        'Trabalhamos com  zinco niquel branco, bicromatizado e preto. Atendemos todas as normas e ligas vigentes, como por exemplo: Ex ASTM B-841, Ligas 5 a 8% Ni, Ligas de 8 a 12%  Ni e Ligas de 12 a 16% Ni.',
      ],
      image: zincoNiquel,
    },
    {
      route: 'decapagem',
      title: 'Decapagem',
      description: [
        'O serviço de decapagem é um processo de remoção de impurezas e oxidação em superfícies metálicas. Esse processo é essencial para a indústria, pois a produção de certas peças só é possível com esse procedimento. A decapagem química é um dos tipos de decapagem que utiliza reagentes químicos com composições específicas para cada tipo de metal produto que se deseja decapar.',
        'A decapagem possibilita que a extração de sujidades e óxidos seja completa e possa receber o tratamento de passivação química ou eletropolimento para proteger a superfície.',
        'Nós também realizamos a decapagem de tinta.',
      ],
      image: decapagem,
    },
    {
      route: 'desengraxe',
      title: 'Desengraxe',
      description: [
        'Desengraxe é um processo que consiste em remover, de um determinado substrato, sujidades inerentes às etapas anteriores do processo produtivo, na maioria das vezes, orgânicas, como óleos, graxas, ceras, resto de pastas de estampagem. E, se for o caso, sujidades inorgânicas como cavacos ou sais provenientes de processos anteriores.',
        'Desengraxantes são compostos químicos e formulações essenciais a muitos processos industriais, como um prelúdio ao acabamento de superfície ou a componentes de proteção ou revestimento, nos processos genericamente chamados de desengraxe.',
        'O processo de desengraxe pode ser feito com limpeza com solventes secos, detergentes de limpeza alcalinos a quente, eletrolimpeza e ataque ácido. A norma ASTM B322 é um guia para a limpeza de metais antes de galvanoplastia.',
      ],
      image: desengraxe,
    },
    {
      route: 'jateamento',
      title: 'Jateamento',
      description: [
        'O jateamento é uma técnica de tratamento superficial por impacto, o qual se pode obter um excelente grau de limpeza e simultaneamente um correto acabamento superficial. Basicamente, podemos dizer que o jateamento serve para limpeza e aderência, ou seja, a remoção de todas as impurezas da área.',
        'Algumas das principais aplicações dos serviços de jateamento são: Reformas em aço no geral; Remoção de ferrugem, tintas velhas e carepa de laminação; Decapagem mecânica de arames, barras, chapas, etc; entre outros.',
      ],
      image: jateamento,
    },
  ];

  return tratamentosItems.filter(
    (tratamentoItem) => tratamentoItem.route === item
  )[0];
}
