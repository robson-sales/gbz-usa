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
        'What is Alodine: Alodine is a type of surface treatment for aluminum and its alloys that forms a protective film of stable chromates against corrosion.',
        'Application: Alodine can be applied by spraying or immersion, without the need for electrical current. Alodine is mainly used in aerospace, automotive, and industrial parts.',
        'Benefits: Alodine improves paint adhesion and provides corrosion protection for lightweight metal substrates. Alodine is a chromium-free product formulated specifically for treating aluminum and its alloys, reducing environmental impact and health risks.',
      ],
      image: alodine,
    },
    {
      route: 'molybdenum-disulfide',
      title: 'Molybdenum Disulfide',
      description: [
        'Molybdenum disulfide (MoS2) is a chemical compound formed by two sulfur atoms and one molybdenum atom, with the addition of highly adherent resins that are resistant to chemicals and high temperatures.',
        'This type of treatment provides good lubricity and great anti-corrosion protection, preventing seizing.',
        'Applications in sectors:',
        '• Aerospace',
        '• Automotive',
        '• Food',
        '• Textile',
        '• Machinery and equipment',
        '• Petrochemical and Petroleum',
        '• Plastics',
        '• Iron and Steel Industry and Mining',
      ],
      image: bissulfeto,
    },
    {
      route: 'cadmium',
      title: 'Cadmium',
      description: [
        'Cadmium surface treatment is a process of coating metal parts with a thin layer of cadmium to increase their resistance and prevent corrosion.',
        'Cadmium is a white-silver metal that has good electrical and thermal conductivity, a low melting point, and high fatigue resistance. We work with colorless, chromate, and olive green cadmium.',
        'Cadmium surface treatment is particularly applicable to parts in the petrochemical segment, such as screws, nuts, washers, and pipes, but it can also be used in other industries that require high durability and protection against aggressive environments.',
        'The process is widely used in the aerospace industry. Its main strength is resistance to low temperatures, such as -50ºC.',
      ],
      image: cadmio,
    },
    {
      route: 'tin',
      title: 'Tin',
      description: [
        'The bright tin plating surface treatment is a process that involves applying a metallic tin coating to various types of materials. We also work with matte tin.',
        'The main purpose of this treatment is to provide protective properties to the parts, enhancing their resistance and durability.',
        'Bright tin plating is recommended for technical parts, especially in the electro-electronic industry, which require excellent electrical conductivity and corrosion resistance.',
        'Additionally, bright tin plating gives an aesthetic aspect to the parts, as it provides a uniform and shiny finish.',
      ],
      image: estanho,
    },
    {
      route: 'phosphatization',
      title: 'Phosphatization',
      description: [
        'Phosphatization surface treatment is a process that transforms a metallic surface into a surface with a thin layer of metallic phosphate.',
        'The purpose of this treatment is to protect the metal from oxidation and corrosion, also known as rust and wear.',
        'The treatment also serves as a base for subsequent finishing by painting or impregnation of protective oils, improving the adhesion and resistance of the paint to the metal.',
        'The treatment can be done by immersion or spraying, depending on the type and size of the metal part.',
        'There are different types of phosphatization, such as zinc phosphatization, manganese phosphatization, and organic phosphatization.',
        'Each type has its advantages and disadvantages, depending on the application and environmental requirements.',
      ],
      image: fosfatizacao,
    },
    {
      route: 'nickel',
      title: 'Chemical Nickel',
      description: [
        'Nickel surface treatment is a technique that aims to improve the properties of metal parts, such as corrosion resistance, abrasion, and wear resistance.',
        'The chemical-level treatment is used with baths containing chemical elements, such as nickel sulfate and sodium hypophosphite. This type of treatment is autocatalytic, meaning it does not require an electric current to occur. We work with low, medium, and high phosphorus nickel.',
        'Some applications of nickel surface treatment are: parts for the petroleum, chemical, and food industries, mechanical equipment, automotive and motorcycle parts, and parts for medical and dental instruments.',
        'Some benefits of nickel surface treatment are: increased durability and lifespan of metal parts, improved aesthetics and shine of metal parts, and protection against oxidation and corrosion of metal parts.',
      ],
      image: niquel,
    },
    {
      route: 'black-oxidation',
      title: 'Black Oxidation',
      description: [
        'Black oxidation surface treatment is a type of coating resulting from the conversion of the outer layer of ferrous metal through a chemical treatment. Also known as blackening or darkening, black oxidation provides resistance against corrosion (for less demanding situations) and gives the material a beautiful appearance.',
        'Here are some benefits of black oxidation surface treatment: resistance to corrosion and mild abrasion, it does not significantly alter the dimensions of the fastener, as the layer has a thin thickness, it enhances the materials aesthetics, it is a more cost-effective alternative compared to other corrosion protection methods. The process can be carried out in large quantities, reducing costs.',
      ],
      image: oxidacao,
    },
    {
      route: 'xylan',
      title: 'Xylan',
      description: [
        'Xylan® coatings are a family of fluoropolymers developed for use in various types of OEM components and fasteners to prevent corrosion and extend product life.',
        'Most Xylan® coatings contain PTFE or other types of lubricants and are applied in thin films.',
        'The properties of Xylan coatings are:',
        '• Lubrication and friction control',
        '• Wear resistance',
        '• Anti-adherent properties and fastener removal',
        '• Corrosion protection',
      ],
      image: xylan,
    },
    {
      route: 'electrolytic-zinc-plating',
      title: 'Electrolytic Zinc Plating',
      description: [
        'Electrolytic zinc plating is a surface treatment for ferrous or non-ferrous metal with widespread use in various market segments. The technique provides greater strength to the parts and consequently increases their lifespan.',
        'The application of electrolytic zinc plating is done through electrolysis, which is the deposition of a layer of zinc on the surface of the part. The layer of zinc deposited on the parts is sealed with a set of chemical substances known as passivators, enhancing its resistance to oxidation.',
        'The known processes for the surface treatment of trivalent electrolytic zinc plating are transparent trivalent chromate in white or blue, yellow chromate, black chromate, and olive green chromate, which can be done with or without a sealer. Thus, the parts acquire high resistance to both white corrosion and red corrosion.',
      ],
      image: zincagemEletrolitica,
    },
    {
      route: 'hot-dip',
      title: 'Hot-Dip Galvanizing',
      description: [
        'Hot-dip galvanizing, also known as hot-dip galvanization, is a coating process carried out by applying zinc to a surface of iron or steel, providing high resistance to corrosion and preventing iron loss or oxidation as a result.',
        'The hot-dip galvanizing process produces a series of benefits, such as: extending the lifespan of steel parts, providing a protective layer between the steel and the atmosphere, preventing the formation of iron oxide on the steel surface, providing corrosion resistance when exposed to weather conditions, and ensuring an extensive lifespan for the treated structure.',
        'The hot-dip galvanizing process aims to incorporate the properties of zinc into the target material, thus altering its properties to better suit the usage environment, such as in industries that deal with high temperatures and require objects and parts capable of withstanding such weather conditions, for example.',
        'The hot-dip galvanizing process consists of several stages, including degreasing, washing, pickling, washing, fluxing, drying, and hot dipping or "Hot-Dip Galvanizing," and centrifugation.',
        'The working temperature varies from 440 to 470 degrees Celsius, depending on the type of material being treated.',
      ],
      image: zincagemFogo,
    },
    {
      route: 'zinc-nickel',
      title: 'Zinc Nickel',
      description: [
        'The surface treatment called zinc nickel is a coating process that involves applying a layer of zinc and nickel to a metal surface. This process is carried out through electrolytic baths, which can deposit a uniform layer of zinc and nickel on the surface of the part. The execution process of the zinc nickel surface treatment consists of several stages, including cleaning the surface of the part, applying the electrolytic bath, drying, and final inspection of the part.',
        'The application of the zinc nickel surface treatment is extensive and can be used on various types of metal parts, such as steels, bronze, brass, aluminum, and others. With the treatment, the durability and strength of the material will be increased, avoiding oxidation, corrosion, and other issues that can arise and damage your parts.',
        'The benefits of the zinc nickel surface treatment include its high ability to prevent corrosion of other materials, making it a solution for coatings that can be applied to different metal parts. The layers produced by this material are completely stress-free and capable of offering a perfect finish.',
        'We work with white, bicromate, and black zinc nickel. We comply with all current standards and alloys, such as ASTM B-841, Alloys 5 to 8% Ni, Alloys 8 to 12% Ni, and Alloys 12 to 16% Ni.',
      ],
      image: zincoNiquel,
    },
    {
      route: 'pickling',
      title: 'Pickling',
      description: [
        'The pickling service is a process of removing impurities and oxidation from metal surfaces. This process is essential for the industry, as the production of certain parts is only possible with this procedure. Chemical pickling is one of the types of pickling that uses chemical reagents with specific compositions for each type of metal product to be pickled.',
        'Pickling allows for complete removal of impurities and oxides, making the surface ready for chemical passivation or electropolishing treatment to protect it.',
        'We also perform paint stripping pickling.',
      ],
      image: decapagem,
    },
    {
      route: 'degreasing',
      title: 'Degreasing',
      description: [
        'Degreasing is a process that consists of removing inherent dirt from a particular substrate, most often organic, such as oils, greases, waxes, and residues from stamping pastes. If applicable, it can also remove inorganic dirt such as chips or salts from previous processes.',
        'Degreasers are chemical compounds and formulations essential to many industrial processes, serving as a prelude to surface finishing or protective coating components in the processes generally referred to as degreasing.',
        'The degreasing process can be done through cleaning with dry solvents, hot alkaline cleaning detergents, electropolishing, and acid attack. ASTM B322 is a guide for the cleaning of metals before electroplating.',
      ],
      image: desengraxe,
    },
    {
      route: 'sandblasting',
      title: 'Sandblasting',
      description: [
        'Sandblasting is a surface treatment technique based on impact, which allows for an excellent degree of cleanliness and, simultaneously, a proper surface finish. Essentially, we can say that sandblasting serves for cleaning and adhesion, meaning the removal of all impurities from the area.',
        'Some of the main applications of sandblasting services include: Steel refurbishment in general; Removal of rust, old paints, and mill scale; Mechanical pickling of wires, bars, sheets, etc.; among others.',
      ],
      image: jateamento,
    },
  ];

  return tratamentosItems.filter(
    (tratamentoItem) => tratamentoItem.route === item
  )[0];
}
