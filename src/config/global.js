export default {
  global: {
    componenteFormativo: 'Plan de pruebas de usabilidad',
    descripcionCurso:
      'Los conceptos, técnicas y herramientas relacionados con la arquitectura de la información determinan los elementos de interacción y sus funciones en la interfaz de un sistema de <i>software</i> interactivo. Además de permitir conocer a los usuarios, el <i>tester</i> debe entender que, para el éxito de la aplicación, es necesario validar la naturaleza del funcionamiento y, sobre todo, que la aplicación realmente sea usable y accesible. ',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
    ],
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
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Arquitectura de la información, navegación y búsqueda',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Introducción a la Arquitectura de la Información',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'El arquitecto de la información',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'La investigación de la audiencia',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Organizando la información',
            hash: 't_1_4',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Metodologías de evaluación de usabilidad y accesibilidad',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Introducción y conceptos básicos',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Plan de evaluación. Introducción y conceptos básicos',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Introducción a la experiencia de usuario',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Diseño Centrado en el Usuario',
            hash: 't_3_1',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
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
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/prueba.pdf',
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
  complementario: [
    {
      tema: 'El arquitecto de la información',
      referencia:
        'XMind: Aplicación poderosa para el diseño y la creación de mapas mentales y lluvias de ideas.',
      tipo: 'Instalador',
      link: 'https://www.xmind.net/',
    },
    {
      tema: 'Analizando los resultados',
      referencia:
        'Artificial Bridge. (2020). <i>Aprende a Crear un CARD SORTING REMOTO fácilmente y GRATIS con Optimal Workshop</i>.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=kuWQCxB5r_k',
    },
    {
      tema: 'Evaluación heurística',
      referencia:
        'Modroño, T. (2017). <i>Metodologías de UX: Evaluación Heurística (PARTE I)</i>. Medium. ',
      tipo: 'Artículo',
      link:
        'https://blog.interactius.com/metodolog%C3%ADas-de-ux-evaluaci%C3%B3n-heur%C3%ADstica-parte-i-b5d02b566987',
    },
    {
      tema: 'Tipo de técnica',
      referencia:
        'Nielsen, J. (2020). <i>10 Usability Heuristics for User Interface Design</i>. Nielsen Norman Group.',
      tipo: 'Artículo',
      link: 'https://www.nngroup.com/articles/ten-usability-heuristics/',
    },
    {
      tema: 'Tipo de técnicas',
      referencia:
        'Granollers, T. (2015). <i>Plan de evaluación</i>. Curso de Interacción Persona-Ordenador.',
      tipo: 'Archivo',
      link:
        'http://mpiua.invid.udl.cat/wp-content/uploads/2014/07/Comparativa-M%C3%A9todos-Evaluaci%C3%B3n-Usabilidad.png',
    },
    {
      tema: 'Plan de evaluación y conceptos básicos',
      referencia:
        'Granollers, T. (2020). <i>Curso IPO: Accesibilidad</i>. Curso de Interacción Persona-Ordenador. ',
      tipo: 'Artículo',
      link: 'https://mpiua.invid.udl.cat/curso-ipo/curso-ipo-accesibilidad/',
    },
  ],
  glosario: [
    {
      termino: 'Arquitectura de la Información',
      significado:
        'disciplina encargada del estudio, análisis, organización, disposición y estructuración de la información en espacios de contenidos, y de la selección y presentación de los datos en los sistemas de información interactivos y no interactivos.',
    },
    {
      termino: '<em>Brainstorming</em>',
      significado:
        'es una herramienta de trabajo grupal, que facilita el surgimiento de nuevas ideas sobre un tema o problema determinado. La lluvia de ideas es una técnica de grupo para generar ideas originales en un ambiente relajado.',
    },
    {
      termino: '<em>Card Sorting</em>',
      significado:
        'método utilizado para ayudar a diseñar o evaluar la arquitectura de información de un sitio. En una sesión con este método, los participantes organizan los temas en categorías que tienen sentido para ellos y también pueden ayudar a etiquetar estos grupos.',
    },
    {
      termino: 'UX',
      significado:
        'es una referencia a cómo un usuario experimenta e interactúa con un producto o servicio, un concepto más que un proceso.',
    },
    {
      termino: '<em>Mapping</em>',
      significado: 'herramienta para realizar mapas conceptuales.',
    },
    {
      termino: 'Página web',
      significado:
        'es un documento que se puede mostrar en un navegador web como Firefox, Google Chrome, Microsoft Internet Explorer o Edge, o Safari de Apple.',
    },
  ],
  referencias: [
    {
      referencia:
        'Assistant Secretary for Public Affairs. (2020). <i>Card Sorting</i>. Usability.gov. ',
      link:
        'https://www.usability.gov/how-to-and-tools/methods/card-sorting.html',
    },
    {
      referencia:
        'Barbaroux, M. (2016). <i>Untangling UX, part 1: Design Thinking vs UCD</i>. Cambridge Consultants. ',
      link: '',
    },
    {
      referencia:
        'Busquets, C. (2020). <i>Arquitectura de la información: qué es y cómo hacerlo</i>. uiFromMars. ',
      link: 'https://www.uifrommars.com/arquitectura-de-la-informacion/',
    },
    {
      referencia:
        'Granollers, T. (2014). <i>Métodos evaluación usabilidad</i>. Curso de Interacción Persona-Ordenador. ',
      link:
        'https://mpiua.invid.udl.cat/fases-mpiua/evaluacion/metodos-evaluacion-usabilidad/',
    },
    {
      referencia:
        'Granollers, T. (2015). <i>Plan de evaluación</i>. Curso de Interacción Persona-Ordenador. ',
      link:
        'https://mpiua.invid.udl.cat/fases-mpiua/evaluacion/plan-de-evaluacion/',
    },
    {
      referencia:
        'Granollers, T. (2016). <i>Evaluación</i>. Curso de Interacción Persona-Ordenador. ',
      link: 'https://mpiua.invid.udl.cat/fases-mpiua/evaluacion/',
    },
    {
      referencia:
        'Granollers, T. (2018). <i>Clasificación de los métodos</i>. Curso de Interacción Persona-Ordenador. ',
      link: 'https://mpiua.invid.udl.cat/fases-mpiua/evaluacion/clasificacion/',
    },
    {
      referencia:
        'Interaction Design Foundation [IDF]. (2020). <i>User Centered Design</i>. ',
      link:
        'https://www.interaction-design.org/literature/topics/user-centered-design',
    },
    {
      referencia:
        'ISO. (2019).  <i>Ergonomics of human-system interaction — Part 210: Human-centred design for interactive systems</i> (ISO 9241-210:2010). ',
      link: 'https://www.iso.org/standard/52075.html',
    },
    {
      referencia:
        'Justinmind. (2018). <i>UCD vs UX: What&apos;s the difference? - UX Planet</i>. Medium. ',
      link: 'https://uxplanet.org/ucd-vs-ux-whats-the-difference-255443efa5f',
    },
    {
      referencia:
        'Blogger. (2020). <i>Crea un blog atractivo y original</i>. Es fácil y gratuito. ',
      link: 'https://www.blogger.com/about/?hl=es',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del Ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Olga Constanza Bermúdez Jaimes',
          cargo: 'Responsable de Línea de Producción',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Santiago Muñoz de la Rosa',
          cargo: 'Experto temático',
          centro:
            'Regional Cauca - Centro de Teleinformática y Producción Industrial',
        },
        {
          nombre: 'María Inés Machado López',
          cargo: 'Diseñadora instruccional',
          centro: 'Regional Distrito Capital - Centro de Diseño y Metrología',
        },
        {
          nombre: 'Carolina Coca Salazar',
          cargo: 'Revisora metodología y pedagógica ',
          centro: 'Regional Distrito Capital - Centro de Diseño y Metrología',
        },
        {
          nombre: 'Darío González',
          cargo: 'Corrección de estilo',
          centro: 'Regional Tolima - Centro Agropecuario La Granja',
        },
        {
          nombre: 'Paola Alexandra Moya',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro de Servicios de Salud',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Juan Daniel Polanco Muñoz',
          cargo: 'Diseñador de contenidos digitales',
          centro: 'Regional Antioquia - Centro de Servicios de Salud',
        },
        {
          nombre: 'Jhon Jairo Urueta Álvarez',
          cargo: 'Desarrollador fullstack',
          centro: 'Regional Antioquia - Centro de Servicios de Salud',
        },
        {
          nombre: 'Edgar Mauricio Cortés García',
          cargo: 'Actividad Didáctica',
          centro: 'Regional Antioquia - Centro de Servicios de Salud',
        },
        {
          nombre: 'Daniela Muñoz Bedoya',
          cargo: 'Animador y productor multimedia',
          centro: 'Regional Antioquia - Centro de Servicios de Salud',
        },
        {
          nombre: 'Wilson Andrés Arenales Cáceres',
          cargo: 'Locución',
          centro: 'Regional Antioquia - Centro de Servicios de Salud',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Luis Gabriel Urueta Alvarez',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Jaime Hernan Tejada',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Margarita Marcela Medrano',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
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
