export default {
  global: {
    componenteFormativo: 'Servicios web con PHP',
    descripcionCurso:
      'Los servicios web, también conocidos como <em>web services</em>, son un conjunto de protocolos que facilitan la comunicación entre dispositivos, permitiendo intercambiar información: “datos”. Un servicio web tiene una interfaz que oculta los detalles de implementación, para que se pueda utilizar independientemente de la plataforma de <em>hardware</em> o <em>software</em> en la que se implementa, e independientemente del lenguaje de programación en el que está escrito. ',
    imagenBannerPrincipal: require('@/assets/curso/banner-principal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Métodos o funciones',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Clases y objetos',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Integración de aplicaciones (XML, SOAP, WSDL y UDDI)',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'XML “Extensible Markup Language”',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'SOAP “Simple Object Access Protocol”',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'WSDL “Lenguaje de Descripción de Servicios Web” ',
            hash: 't_3_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.4',
            titulo: 'UDDI “Universal Description, Discovery, and Integration”',
            hash: 't_3_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.5',
            titulo: 'REST “Representational State Transfer”',
            hash: 't_3_5',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.6',
            titulo: 'JSON “JavaScript Object Notation”',
            hash: 't_3_6',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Creación de servicios',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Conexiones a SQL',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema6',
        icono: 'far fa-file-alt',
        numero: '6',
        titulo: 'Servicios en PHP',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema7',
        icono: 'far fa-file-alt',
        numero: '7',
        titulo: 'Aplicación SOAP UI',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '7.1',
            titulo: 'Instalación y configuración',
            hash: 't_7_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '7.2',
            titulo: 'Uso de la herramienta SOAP UI',
            hash: 't_7_2',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Álvarez, J. (2017). Entorno de programación intencional basado en XML. Universidad Politécnica de Madrid. ',
      link: 'https://oa.upm.es/49793/1/PFC_JOSE_ANTONIO_ALVAREZ_PEREZ.pdf',
    },
    {
      referencia:
        'Bianco, P. (2005). Desarrollo de Aplicaciones Basadas en XML Web Service para Dispositivos Móviles con Microsoft. NET Compact Framework. Universidad de Belgrano. ',
      link: 'http://repositorio.ub.edu.ar/handle/123456789/343',
    },
    {
      referencia:
        'Chanchí, G., Campo, W., Amaya, J. y Arciniegas, J. (2011). Esquema de servicios para Televisión Digital Interactiva, basados en el protocolo REST-JSON. Cuadernos de Informática, 6(1), p. 233-240. ',
      link:
        'http://seer.ufrgs.br/cadernosdeinformatica/article/view/v6n1p233-240',
    },
    {
      referencia:
        'Eslava, V. (2013). El nuevo PHP. Conceptos avanzados. Bubok.',
    },
    {
      referencia: 'García, A. (2003). Manual práctico de SQL. ',
      link:
        'https://www.lawebdelprogramador.com/cursos/archivos/ManualPracticoSQL.pdf',
    },
    {
      referencia:
        'Gonzáles, S. y Pelissier, C. (2002). Programación con PHP. Universidad Técnica Federico Santa María. ',
      link:
        'http://profesores.elo.utfsm.cl/~agv/elo330/2s02/projects/pelissier/informe.pdf',
    },
    {
      referencia:
        'Gutiérrez, A. (2016). Elaboración de un servicio web para el registro de operaciones entre clientes:(infraestructura de fibra óptica NEBA de Telefónica). Universidad Carlos III de Madrid. ',
      link:
        'https://e-archivo.uc3m.es/bitstream/handle/10016/22335/PFC_Alvar_Guti%C3%A9rrez_Rom%C3%A1n.pdf',
    },
    {
      referencia: 'IBM Corporation. (2015). IBM integration Bus 10.0.0. ',
      link:
        'https://www.ibm.com/docs/es/integration-bus/10.0?topic=ssmkhh-10-0-0-com-ibm-etools-mft-doc-bi12017—htm',
    },
    {
      referencia:
        'IBM Corporation. (2020). Formato Json (JavaScript Object Notation). ',
      link:
        'https://www.ibm.com/docs/es/baw/20.x?topic=formats-javascript-object-notation-json-format',
    },
    {
      referencia:
        'IBM Corporation. (s. f.). UDDI (Universal Description, Discovery, and Integration). ',
      link:
        'https://www.ibm.com/docs/es/rsas/7.5.0?topic=standards-universal-description-discovery-integration-uddi',
    },
    {
      referencia:
        'Ortiz, A., Otón, S. y Barchino, R. (2005). Learning Objects universal publishing and location Architecture using Web Services. Universidad de Alcalá. ',
      link:
        'https://www.researchgate.net/publication/267217723_Learning_Objects_universal_publishing_and_location_Architecture_using_Web_Services',
    },
    {
      referencia:
        'Paz, K. (s. f.). Media aritmética simple. Universidad Rafael Landívar. ',
      link:
        'https://fgsalazar.net/LANDIVAR/ING-PRIMERO/boletin07/URL_07_BAS01.pdf',
    },
    {
      referencia:
        'Sayago, J., Flores, E. y Recalde, A. (2019). Análisis comparativo entre los estándares orientados a servicios web SOAP, REST y GRAPHQL. Revista Antioqueña de las Ciencias Computacionales y la Ingeniería de Software (RACCIS), 9(2), p. 10-22. ',
      link: 'http://dx.doi.org/10.5281/zenodo.3592004',
    },
    {
      referencia:
        'SoapUI. (s. f.). Acelerando la calidad de la API a través de pruebas. ',
      link: 'https://www.soapui.org/',
    },
    {
      referencia:
        'Villate, J. (2001). Introducción al XML. Universidad de Oporto. ',
      link:
        'https://docplayer.es/1640770-Introduccion-al-xml-jaime-e-villate-universidad-de-oporto-villate-fe-up-pt-5-de-mayo-de-2001.html',
    },
  ],
  glosario: [
    {
      termino: 'API',
      significado:
        'La interfaz de programación de aplicaciones es un conjunto de subrutinas, funciones y procedimientos que ofrece cierta biblioteca para ser utilizada por otro <em>software</em> como una capa de abstracción.',
    },
    {
      termino: 'BackEnd',
      significado:
        'Es la parte del desarrollo web que se encarga de que toda la lógica de una página web funcione. Se trata del conjunto de acciones que pasan en una web pero que no vemos, como, por ejemplo, la comunicación con el servidor.',
    },
    {
      termino: 'FrontEnd',
      significado:
        'El desarrollo web FrontEnd consiste en la conversión de datos en una interfaz gráfica, para que el usuario pueda ver e interactuar con la información de forma digital, usando HTML, CSS y JavaScript.',
    },
    {
      termino: 'REST',
      significado:
        'La Transferencia de Estado Representacional, o REST, es un estilo de arquitectura <em>software</em> para sistemas hipermedia distribuidos, como la <em>World Wide Web</em>.',
    },
  ],
  complementario: [
    {
      texto:
        'IBM Corporation. (s. f.). UDDI (Universal Description, Discovery, and Integration). ',
      tipo: 'Página web',
      link:
        'https://www.ibm.com/docs/es/rsas/7.5.0?topic=standards-universal-description-discovery-integration-uddi',
    },
    {
      texto:
        'Meneses, M. (2021a). Creación archivos PHP en el localhost [Video]. YouTube. ',
      tipo: 'Video',
      link: 'https://youtu.be/9MXAQGGxCN4',
    },
    {
      texto:
        'Meneses, M. (2021b). Web Services programación Front End Consumo de servicios web [Video]. YouTube. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=MV3dSZx5iTo',
    },
    {
      texto: 'SoapUI. (s. f.). Accelerating API Quality Through Testing. ',
      tipo: 'Página web',
      link: 'https://www.soapui.org/',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Mario Fernando Meneses Calvache',
        cargo: 'Experto temático',
        centro:
          'Centro de teleinformática y producción industrial Regional Cauca',
      },
      {
        nombre: 'Jonathan Guerrero Astaiza',
        cargo: 'Instructor',
        centro:
          'Centro de teleinformática y producción industrial Regional Cauca',
      },
      {
        nombre: 'Zulema León',
        cargo: 'Instructor',
        centro:
          'Centro de teleinformática y producción industrial Regional Cauca',
      },
      {
        nombre: 'Carlos Hernán Muñoz',
        cargo: 'Experto temático',
        centro:
          'Centro de teleinformática y producción industrial Regional Cauca',
      },
      {
        nombre: 'Paola Moya Peralta',
        cargo: 'Diseñadora instruccional',
        centro:
          'Centro para la Industria de la Comunicación Gráfica Regional Distrito Capital',
      },
      {
        nombre: 'Ana Catalina Córdoba Sus',
        cargo: 'Revisora metodológica y pedagógica',
        centro:
          'Centro para la Industria de la Comunicación Gráfica Regional Distrito Capital',
      },
      {
        nombre: 'Darío González',
        cargo: 'Corrección de estilo',
        centro: 'Centro Agropecuario La Granja Regional Tolima',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Jesús Antonio Vecino',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Andrea Paola Botello De la Rosa',
        cargo: 'Desarrollo Front-End',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Zuleidy María Ruiz Torres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Wilson Andrés Arenales Cáceres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodriguez Rodriguez',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Oleg Litvin',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Veimar Celis Melendez',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
