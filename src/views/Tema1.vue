<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Arquitectura de la información, navegación y búsqueda
    .row
      .col-lg-8.order-2.order-lg-1(data-aos="fade-right")
        p.mb-0 En esta unidad, se abordarán, de manera general, áreas claves para la comprensión de la disciplina de la usabilidad, por lo que es necesario profundizar en temáticas como la Arquitectura de la Información (AI), donde no solo se trata de la estructura gráfica visual de una aplicación #[i software], sino que también importa el contenido que se va colocar, es decir, debe haber un sentido y organización de la información, por lo que se adicionan técnicas y consejos  alrededor de una buena construcción, en pro de la navegación y la búsqueda. De esta manera, con estas temáticas y herramientas, se pretende que  tenga las habilidades y competencias para validar y mejorar las aplicaciones #[i software] asociadas al concepto de la usabilidad.
      .col-lg-4.mb-4.mb-lg-0.order-1.order-lg-2(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema1/img1.png', style="width:440px", alt='').m-auto
    Separador
    #t_1_1
    .titulo-segundo.color-acento-contenido
      h2 1.1 Introducción a la arquitectura de la información
    .row.align-items-center.mb-4
      .col-lg-9.order-2.order-lg-1(data-aos="fade-right")
        .row.mb-3
          .col-12.bg-c2
            .p-4
              p La #[i Information Architecture] (IA), o la Arquitectura de la Información (AI), tiene un propósito y unos beneficios de uso, es así como su presencia va más allá de los entornos no web. En ese sentido, se inicia mediante la generación de una serie de preguntas, para así entender de manera epistemológica el sentido de este concepto:
              .row
                .col-12.bg-c3
                  .p-4
                    ul.lista-ul.mb-0
                      li.d-flex
                        i.fas.fa-circle(style="color:#1682FB !important")
                        | ¿Cuántas veces ha tenido que preguntar en una estación de ferrocarriles la ubicación de una determinada vía?
                      li.d-flex
                        i.fas.fa-circle(style="color:#1682FB !important")
                        | ¿Cuántas veces ha entrado en una página web buscando un teléfono de contacto y ha sido incapaz de localizarlo?
                      li.d-flex
                        i.fas.fa-circle(style="color:#1682FB !important")
                        | ¿En alguna ocasión se ha perdido por los pasillos de un hospital sin encontrar la consulta que buscaba?
        p.mb-0 Para resolver este tipo de problemas, y otros más, es que surge la Arquitectura de la Información (AI). La AI lleva tres décadas tratando de resolver y mejorar estos problemas.  El #[i Information Architecture Institute] la define como:
      .col-lg-3.mb-4.mb-lg-0.order-1.order-lg-2(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema1/img2.png', style="width:320px", alt='').m-auto
    .row.mb-4(data-aos="fade-down")
      .col-12.bg-c4
        .p-4
          .row.align-items-center
            .col-md-auto.mb-4.mb-md-0
              figure
                img(src='@/assets/curso/tema1/img1.svg', style="width:70px", alt='').m-auto
            .col
              p.text-white.mb-0 #[b Es el diseño estructural de los entornos de información compartidos. Es el arte y la ciencia de organizar y etiquetar sitios web, intranets, comunidades en línea y #[i software], para apoyar la usabilidad y la facilidad de encontrar contenidos. Es una comunidad emergente en la práctica enfocada en proporcionar los principios del diseño y la arquitectura al entorno digital.]
    .row.align-items-center.mb-5
      .col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
        figure
          img(src='@/assets/curso/tema1/img3.png', style="width:320px", alt='').m-auto
      .col-lg-8(data-aos="fade-left")
        p El objetivo de la Arquitectura de la Información no es otro que el de ayudar a las personas a entender su entorno y encontrar lo que están buscando en el mundo real, así como en entornos digitales. Es decir, #[b ayuda a los usuarios a ubicarse, saber dónde se encuentran, cuál es la información disponible y cómo volver al punto de partida cuando se sumergen demasiado en una estructura siguiendo unas pistas equivocadas].  
        p La AI ofrece una visión clara de lo que se puede esperar de la página o aplicación en la que el usuario se encuentra. Un simple golpe de vista proporcionará una idea de la intencionalidad del sitio, su actividad principal y qué tipo de contenidos se pueden encontrar navegando por su interior.
        p.mb-0 En resumen, la Arquitectura de la Información se centra en las siguientes acciones:
    .row.justify-content-center.mb-5
      .col-md-9.col-lg.bg-c5.m-2(data-aos="fade-right")
        .p-4
          figure.mb-3
            img(src='@/assets/curso/tema1/img2.svg', style="width:120px", alt='')
          p.text-white.mb-0 Organizar los contenidos y los objetos de manera intuitiva para los usuarios.
      .col-md-9.col-lg.bg-c5.m-2(data-aos="fade-down")
        .p-4
          figure.mb-3
            img(src='@/assets/curso/tema1/img3.svg', style="width:120px", alt='')
          p.text-white.mb-0 Etiquetar y describir los grupos de información de manera clara y sencilla.
      .col-md-9.col-lg.bg-c5.m-2(data-aos="fade-left")
        .p-4
          figure.mb-3
            img(src='@/assets/curso/tema1/img4.svg', style="width:120px", alt='')
          p.text-white.mb-0 Facilitar la localización (#[i findability]) de la información, bien sea por los elementos de navegación disponibles o por sistemas de búsqueda directa.
    .row.bg-c11
      .col-12
        .px-5
          .row.mb-4
            .col-auto.bg-c6(data-aos="fade-down")
              .px-3.pb-0
                .row.align-items-end
                  .col-auto.pe-0
                    figure.fig-p1
                      img(src='@/assets/curso/tema1/img5.svg', style="width:50px" alt='').m-auto
                  .col
                    h3 La importancia de la AI
          .row.align-items-center.mb-4
            .col-lg-10.order-2.order-lg-1(data-aos="fade-right")
              p La necesidad de una Arquitectura de la Información surge en el momento en que se agrupan términos o ideas y estos grupos requieren ser etiquetados. Es importante considerar que, si en nuestra vida cotidiana puede resultar desafiante agrupar u organizar objetos para nuestro uso personal, este reto se intensifica cuando la organización se realiza para personas fuera de nuestro entorno privado.
              p El nombre asignado a cada grupo debe ser lo más simple e intuitivo posible, con el objetivo de facilitar su hallazgo por el mayor número posible de usuarios.
              p.mb-0 Además, la información crece constantemente, y cuanta más información, más difícil será encontrar lo que se busca.
            .col-lg-2.mb-4.mb-lg-0.order-1.order-lg-2(data-aos="fade-left")
              figure
                img(src='@/assets/curso/tema1/img7.svg', style="width:320px", alt='').m-auto
          .row.justify-content-center.mb-4
            .col-lg-10(data-aos="fade-down")
              .row.align-items-center
                .col-lg-auto.pe-0.mb-4.mb-lg-0
                  figure
                    img(src='@/assets/curso/tema1/img4.png', style="width:320px", alt='').m-auto
                .col.bg-c7
                  .p-4
                    .row
                      .col-12.bg-c8
                        .p-4
                          p.mb-0 Una buena arquitectura de la información, ayudará a encontrar la información que se está buscando, descartando el contenido que no está relacionado con la misma, mediante una toma de decisiones que requiera el menor tiempo posible.
          p.mb-5(data-aos="fade-right") La dificultad, radica en una serie de características que se debe tener en cuenta sobre los usuarios y contenidos:
    .row.bg-c9.mb-5(data-aos="fade-left")
      .col-12
        .p-5
          .row.justify-content-center
            .col-lg-8.d-none.d-lg-block
              ImagenInfografica.color-secundario
                template(v-slot:imagen)
                  figure
                    img(src='@/assets/curso/tema1/img9.svg', alt='')
                .tarjeta.color-secundario.p-3(x="30%" y="26%" numero="+")
                  .p-2
                    .row.mb-2
                      .col-auto.bg-c10
                        .px-2.py-1
                          p.mb-0 #[b 1. Ideas]
                    p.mb-0 No todos tienen las mismas ideas respecto a la agrupación de términos.
                .tarjeta.color-secundario.p-3(x="53%" y="53%" numero="+")
                  .p-2
                    .row.mb-2
                      .col-auto.bg-c10
                        .px-2.py-1
                          p.mb-0 #[b 2. Necesidad]
                    p.mb-0 Tienen diferentes necesidades y prioridades.
                .tarjeta.color-secundario.p-3(x="89%" y="65%" numero="+")
                  .p-2
                    .row.mb-2
                      .col-auto.bg-c10
                        .px-2.py-1
                          p.mb-0 #[b 3. Conocimiento]
                    p.mb-0 Tienen diferentes grados de conocimiento de los términos. Los usuarios tienen diferente grado de conocimientos de la información, son más o menos expertos en referencia a un tema.
                .tarjeta.color-secundario.p-3(x="68%" y="97%" numero="+")
                  .p-2
                    .row.mb-2
                      .col-auto.bg-c10
                        .px-2.py-1
                          p.mb-0 #[b 4. Experiencia]
                    p.mb-0 La forma de agrupar la información no es única. Hay múltiples opciones.
                .tarjeta.color-secundario.p-3(x="32%" y="95%" numero="+")
                  .p-2
                    .row.mb-2
                      .col-auto.bg-c10
                        .px-2.py-1
                          p.mb-0 #[b 5. Información]
                    p.mb-0 Existencia de términos ambiguos, con diferentes significados para unos u otros usuarios.
                .tarjeta.color-secundario.p-3(x="10%" y="68%" numero="+")
                  .p-2
                    .row.mb-2
                      .col-auto.bg-c10
                        .px-2.py-1
                          p.mb-0 #[b 6. Interpretación]
                    p.mb-0 Los usuarios tienen unas costumbres o mecanismos de interpretación diferentes.
            .col-10.col-md-6.col-lg-8.d-block.d-lg-none
              ImagenInfografica.color-secundario
                template(v-slot:imagen)
                  figure
                    img(src='@/assets/curso/tema1/img9m.svg', alt='')
                .tarjeta.color-secundario.p-3(x="50%" y="11%" numero="+")
                  .p-2
                    .row.mb-2
                      .col-auto.bg-c10
                        .px-2.py-1
                          p.mb-0 #[b 1. Ideas]
                    p.mb-0 No todos tienen las mismas ideas respecto a la agrupación de términos.
                .tarjeta.color-secundario.p-3(x="50%" y="25%" numero="+")
                  .p-2
                    .row.mb-2
                      .col-auto.bg-c10
                        .px-2.py-1
                          p.mb-0 #[b 2. Necesidad]
                    p.mb-0 Tienen diferentes necesidades y prioridades.
                .tarjeta.color-secundario.p-3(x="55%" y="42%" numero="+")
                  .p-2
                    .row.mb-2
                      .col-auto.bg-c10
                        .px-2.py-1
                          p.mb-0 #[b 3. Conocimiento]
                    p.mb-0 Tienen diferentes grados de conocimiento de los términos. Los usuarios tienen diferente grado de conocimientos de la información, son más o menos expertos en referencia a un tema.
                .tarjeta.color-secundario.p-3(x="54%" y="62%" numero="+")
                  .p-2
                    .row.mb-2
                      .col-auto.bg-c10
                        .px-2.py-1
                          p.mb-0 #[b 4. Experiencia]
                    p.mb-0 La forma de agrupar la información no es única. Hay múltiples opciones.
                .tarjeta.color-secundario.p-3(x="50%" y="80%" numero="+")
                  .p-2
                    .row.mb-2
                      .col-auto.bg-c10
                        .px-2.py-1
                          p.mb-0 #[b 5. Información]
                    p.mb-0 Existencia de términos ambiguos, con diferentes significados para unos u otros usuarios.
                .tarjeta.color-secundario.p-3(x="50%" y="98%" numero="+")
                  .p-2
                    .row.mb-2
                      .col-auto.bg-c10
                        .px-2.py-1
                          p.mb-0 #[b 6. Interpretación]
                    p.mb-0 Los usuarios tienen unas costumbres o mecanismos de interpretación diferentes.
    .row.mb-5
      .col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
        figure
          img(src='@/assets/curso/tema1/img5.png', style="width:380px", alt='').m-auto
      .col-lg-8(data-aos="fade-left")
        p Al desarrollar una Arquitectura de la Información, es esencial llevar a cabo una investigación preliminar con los usuarios. Es crucial reconocer que no todos los usuarios poseen conocimientos previos sobre los temas tratados, ni están familiarizados con la terminología específica que se emplea. Además, es importante entender que cada persona interpreta la información a su manera y desde su propio punto de vista.
        p.mb-0 Antes de realizar una buena Arquitectura de la Información, se deben reconocer tres pilares que intervienen directamente en el proceso:
    .row.bg-c12.mb-5(data-aos="fade-right")
      .col-12
        .p-4.p-lg-5
          .tarjeta.tarjeta--azul
            .pb-3.pt-4.pt-lg-5.px-4
              SlyderA(tipo="b")
                .row.justify-content-center.align-items-center
                  .col-lg-5.order-2.order-lg-1
                    .text-white
                      p #[b.txt-c1 Pilares de la arquitectura de la información]
                      p Louis Rosenfeld, Peter Morville y Jorge Arango, en su libro: “Information Architecture for the World Wide Web”, establecen unos pilares definitivos sobre arquitectura de la información:
                      ul.lista-ul
                        li.d-flex
                          i.fas.fa-circle(style="color:#1682FB !important")
                          | Contenido
                        li.d-flex
                          i.fas.fa-circle(style="color:#1682FB !important")
                          | Usuarios
                        li.d-flex
                          i.fas.fa-circle(style="color:#1682FB !important")
                          | Contexto
                      p Esta idea de que la IA se da por la intersección de estos 3 conceptos recibe el nombre de ecología de la información y representa un ambiente de interdependencia, que será diferente de negocio para negocio.
                  .col-lg-5.mb-4.mb-lg-0.order-1.order-lg-2
                    figure
                      img(src='@/assets/curso/tema1/img11.svg', style="width:380px", alt='').m-auto
                .row.justify-content-center.align-items-center
                  .col-lg-5.order-2.order-lg-1
                    .text-white
                      p #[b.txt-c1 Usuarios]
                      p Es fundamental considerar las perspectivas y el nivel de conocimiento de los usuarios sobre el tema, así como identificar qué necesitan hacer, encontrar, aprender, etc. Si no se comprende a los usuarios, resultará difícil organizar los conceptos de manera que sean significativos para ellos y que puedan localizarlos fácilmente durante su navegación o búsquedas.
                      p.mb-0 Entender la personalidad, necesidades, comportamientos de búsqueda, experiencia previa y tareas deseadas de los usuarios es crucial para diseñar interfaces intuitivas y efectivas, asegurando una navegación y búsqueda de información óptimas.
                  .col-lg-5.mb-4.mb-lg-0.order-1.order-lg-2
                    figure
                      img(src='@/assets/curso/tema1/img12.svg', style="width:380px", alt='').m-auto
                .row.justify-content-center.align-items-center
                  .col-lg-5.order-2.order-lg-1
                    .text-white
                      p #[b.txt-c1 Contenido]
                      p.mb-0 Para analizar el contenido existente y el necesario, resulta esencial comprender tanto los recursos actuales como los futuros requerimientos. Esto incluye textos, imágenes, gráficos, contenido en audio, etc., así como el mapeo de páginas o pantallas, estructura, taxonomía y volumen de información. Sin esta comprensión, se corre el riesgo de desarrollar una solución ineficaz tanto para el contenido actual como para el que se agregará posteriormente.
                  .col-lg-5.mb-4.mb-lg-0.order-1.order-lg-2
                    figure
                      img(src='@/assets/curso/tema1/img13.svg', style="width:380px", alt='').m-auto
                .row.justify-content-center.align-items-center
                  .col-lg-5.order-2.order-lg-1
                    .text-white
                      p #[b.txt-c1 Contexto]
                      p.mb-0 Al diseñar una Arquitectura de la Información, es crucial considerar tanto los objetivos personales de los usuarios como los objetivos de negocio de la organización. Esto implica identificar las partes interesadas, así como reconocer las limitaciones, incluyendo los dispositivos o plataformas disponibles (web, móvil, intranet, etc.). Además, es importante tener en cuenta el modelo de negocios, los objetivos del proyecto, las tecnologías y metodologías de desarrollo empleadas, y los recursos disponibles (capital, personal, equipos, etc.), así como cualquier restricción existente.
                  .col-lg-5.mb-4.mb-lg-0.order-1.order-lg-2
                    figure
                      img(src='@/assets/curso/tema1/img14.svg', style="width:380px", alt='').m-auto
    .row.bg-c11
      .col-12
        .px-5
          .row.mb-4
            .col-auto.bg-c6(data-aos="fade-down")
              .px-3.pb-0
                .row.align-items-end
                  .col-auto.pe-0
                    figure.fig-p1
                      img(src='@/assets/curso/tema1/img5.svg', style="width:50px" alt='').m-auto
                  .col
                    h3 La AI como parte del proyecto
          p.mb-5(data-aos="fade-right") Se deben conocer, las formas de comunicar el trabajo y estar atento para detallar, identificar y definir los sistemas y componentes en los que se basan los sitios. Se debe desarrollar la capacidad de convencer a los clientes y colegas sobre el análisis y las soluciones planteadas, que se comunicarán a través de una documentación y entregables que pueden agruparse en dos grandes tipos, como se puede ver a continuación:
          .row.justify-content-center.mb-5
            .col-md-9.col-lg.bg-c13.m-2(data-aos="fade-right")
              .p-4
                figure.mb-4
                  img(src='@/assets/curso/tema1/img15.svg', style="width:140px" alt='').m-auto
                p.text-center.mb-3 #[b Relacionados con la Arquitectura de la Información en sí]
                p.mb-0 A través de la estructura o la forma del sitio y cómo se relaciona cada una de estas partes. También, mediante la creación de grupos y el etiquetado de estos. En esta categoría, se incluye el «metadato», es decir, la forma de describir los productos y los términos utilizados (muy común en #[i e-commerce] y en webs que disponen de amplios listados de productos).
            .col-md-9.col-lg.bg-c13.m-2(data-aos="fade-left")
              .p-4
                figure.mb-4
                  img(src='@/assets/curso/tema1/img16.svg', style="width:140px" alt='').m-auto
                p.text-center.mb-3 #[b Relacionados con la navegación]
                p.mb-0 Describiendo cómo se desplazan los usuarios a través de la web, rutas y atajos que definen su comportamiento, y los elementos que componen en sí dicha navegación (barras de navegación, #[i links], #[i in-page navigation], etc.).
          .row.mb-4
            .col-auto.bg-c6(data-aos="fade-down")
              .px-3.pb-0
                .row.align-items-end
                  .col-auto.pe-0
                    figure.fig-p1
                      img(src='@/assets/curso/tema1/img5.svg', style="width:50px" alt='').m-auto
                  .col
                    h3 AI en el contexto
          .row.align-items-center.mb-5
            .col-lg-8.order-2.order-lg-1(data-aos="fade-right")
              p Al iniciar un proyecto, se debe tener en cuenta una serie de parámetros: ¿Cuáles son los objetivos? ¿Cuál es la tecnología empleada y cuáles son nuestras oportunidades y limitaciones? ¿El diseño nos añade alguna limitación adicional? ¿En qué entorno o filosofía de trabajo nos encontramos y cómo afecta eso a nuestro proyecto? ¿Cuáles son todas las personas implicadas y de qué manera influyen en el proyecto? Además, no se deben perder de vista dos puntos clave durante el proceso: 
              .row.justify-content-center.mb-3
                .col-md-9.col-lg.bg-c14.m-2
                  .p-4
                    p.text-center.mb-0 ¿Cuál es el objetivo del proyecto o su razón de ser?
                .col-md-9.col-lg.bg-c14.m-2
                  .p-4
                    p.text-center.mb-0 ¿Qué se espera una vez se haya finalizado el proyecto? 
              p.mb-0 Si se desconoce el norte o ruta del proyecto, difícilmente se podrá llegar al destino; por esta razón, el conocimiento claro de los objetivos permitirá: 
            .col-lg-4.mb-4.mb-lg-0.order-1.order-lg-2(data-aos="fade-left")
              figure
                img(src='@/assets/curso/tema1/img7.png', style="width:380px", alt='').m-auto
          .row.justify-content-center.mb-5
            .col-md-9.col-lg.bg-c5.m-2(data-aos="fade-right")
              .p-4
                figure.mb-3
                  img(src='@/assets/curso/tema1/img18.svg', style="width:120px", alt='')
                p.text-white.mb-0 Evaluar requerimientos y soluciones.
            .col-md-9.col-lg.bg-c5.m-2(data-aos="fade-down")
              .p-4
                figure.mb-3
                  img(src='@/assets/curso/tema1/img19.svg', style="width:120px", alt='')
                p.text-white.mb-0 Establecer funcionalidades y prioridades.
            .col-md-9.col-lg.bg-c5.m-2(data-aos="fade-left")
              .p-4
                figure.mb-3
                  img(src='@/assets/curso/tema1/img20.svg', style="width:120px", alt='')
                p.text-white.mb-0 Toma de decisiones a favor de si las funcionalidades a implementar van alineadas con los objetivos del proyecto.
    .row.mb-4
      .col-auto.bg-c6(data-aos="fade-down")
        .px-3.pb-0
          .row.align-items-end
            .col-auto.pe-0
              figure.fig-p1
                img(src='@/assets/curso/tema1/img5.svg', style="width:50px" alt='').m-auto
            .col
              h3 AI más allá de la web
    .row.align-items-center.mb-5
      .col-lg-9.order-2.order-lg-1(data-aos="fade-right")
        .row
          .col-12.bg-c3
            .p-4
              p.mb-0 Es frecuente pensar que la Arquitectura de la Información únicamente está presente o es aplicable a páginas web, pero en realidad las metodologías y técnicas de AI son aplicables en cualquier lugar donde un usuario necesite ubicarse o encontrar una determinada información. Se presentan algunos de estos ejemplos no web para otras soluciones digitales, así:
      .col-lg-3.mb-4.mb-lg-0.order-1.order-lg-2(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema1/img8.png', style="width:380px", alt='')
    .row.bg-c12(data-aos="fade-left")
      .col-12
        .p-4.p-lg-5
          .tarjeta.tarjeta--azul
            .pb-3.pt-4.pt-lg-5.px-4
              SlyderA(tipo="b")
                .row.justify-content-center.align-items-center
                  .col-lg-5.order-2.order-lg-1
                    .text-white
                      p #[b.txt-c1 Aplicaciones de escritorio]
                      p En aplicaciones de escritorio con múltiples herramientas y menús, es fundamental una organización correcta de las mismas y un acceso lo más sencillo posible, así como la forma de interactuar con los elementos.
                  .col-lg-5.mb-4.mb-lg-0.order-1.order-lg-2
                    figure
                      img(src='@/assets/curso/tema1/img11.png', style="width:380px", alt='').m-auto
                .row.justify-content-center.align-items-center
                  .col-lg-5.order-2.order-lg-1
                    .text-white
                      p #[b.txt-c1 #[i Dashboards] o paneles de control]
                      p Secciones o herramientas en las que la visualización y organización de mucha información debe ser procesada al mismo tiempo. En estas plataformas, es esencial el uso de la jerarquía para enfatizar o resaltar los elementos más importantes.
                  .col-lg-5.mb-4.mb-lg-0.order-1.order-lg-2
                    figure
                      img(src='@/assets/curso/tema1/img9.png', style="width:380px", alt='').m-auto
                .row.justify-content-center.align-items-center
                  .col-lg-5.order-2.order-lg-1
                    .text-white
                      p #[b.txt-c1 Aplicaciones móviles]
                      p El alto rendimiento y excelente Experiencia de Usuario (UX) es indispensable, además de tener acceso a una amplia gama de aplicaciones, ayuda a acelerar el trabajo de desarrollo y a ampliar los límites del uso de la aplicación.
                  .col-lg-5.mb-4.mb-lg-0.order-1.order-lg-2
                    figure
                      img(src='@/assets/curso/tema1/img10.png', style="width:380px", alt='').m-auto
    Separador
    #t_1_2
    .titulo-segundo.color-acento-contenido
      h2 1.2 El arquitecto de la información
    p.mb-5(data-aos="fade-right") Para generar un plan de pruebas de usabilidad a cualquier interfaz de un sistema #[i software] interactivo, es necesario conocer de manera conceptual y epistemológica diversos conceptos y áreas que de por sí generarán mayor autonomía a la hora de aplicar una técnica de evaluación de usabilidad. Es por eso que en este apartado se continúa con términos y fórmulas claves para el aprendizaje efectivo de esta disciplina.
    .row.mb-4
      .col-auto.bg-c6(data-aos="fade-down")
        .px-3.pb-0
          .row.align-items-end
            .col-auto.pe-0
              figure.fig-p1
                img(src='@/assets/curso/tema1/img5.svg', style="width:50px" alt='').m-auto
            .col
              h3 El rol del arquitecto de información
    .row.mb-5
      .col-12.bg-c16(data-aos="fade-down")
        .p-4
          p.mb-0 Para el proceso de evaluación de una interfaz, no solo basta con revisar la naturaleza funcional de la aplicación, sino que es necesario entender su concepto mismo, a lo que está destinada, es decir, cuál es la razón de esa aplicación, a qué tipo de usuario objetivo está destinada y las características especiales derivadas de los requerimientos, como puede observarse en la Figura 1.
    .titulo-sexto.color-acento-contenido(data-aos="fade-right")
      p.mb-0 #[b Figura 1]. Ejemplo de arquitectura de la información
    .row.mb-5
      .col-12.bg-c17(data-aos="fade-down")
        .p-4
          figure
            img(src='@/assets/curso/tema1/img22.svg', style="width:850px" alt='La figura muestra un diagrama de flujo de la arquitectura de la información de una plataforma de servicios de salud. Detalla un menú con opciones de inicio, notificaciones y perfil, donde desde el perfil se accede a secciones como recetas, laboratorios y mensajes. Además, se mapean flujos de trabajo para citas médicas y pagos, así como páginas de entidades para doctores y lugares. El propósito es estructurar la navegación y las funciones de la aplicación.').m-auto
    p.mb-4(data-aos="fade-right") A continuación, se presenta una serie de pasos que dará pistas al #[i tester] para entender la lógica de la interfaz:
    .row.align-items-center.mb-5
      .col-lg-8.order-2.order-lg-1(data-aos="fade-right")
        AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul1")
          .row(titulo="Realice un invetario")
            .col-12
              p Consiste en identificar todo aquello que se quiera incluir en el proyecto, partiendo del contenido y de las funcionalidades que se quiere ofrecer.
              p.mb-0 Para decidir qué incluir, se debe soportar en la investigación y el conocimiento que se haya obtenido sobre los usuarios; esta información debe ser realizada por instancia del equipo de desarrollo de la empresa, pero también sobre el sitio web o #[i app] actual (si se trata de un rediseño).
          .row(titulo="Agrupe las tarjetas")
            .col-12
              p.mb-0 Se deben establecer relaciones entre los ítems inventariados para agruparlos en categorías dentro de las secciones o menús de la arquitectura, basándose en dónde los usuarios esperan encontrarlos para alcanzar sus objetivos. Cris Busquets sugiere utilizar técnicas como el #[i Card Sorting], entrevistas o encuestas para entender las preferencias de navegación de los usuarios, como en el ejemplo de una tienda #[i online] de muebles, donde se puede organizar el contenido por tipo de mueble, función, habitación, o a través de un buscador.
          .row(titulo="Defina el mapa")
            .col-12
              p.mb-0 Se deben presentar o ilustrar todos los datos anteriores en un mapa que muestra la estructura de la información y del contenido (no confundir con #[i sitemap]). De esta forma, se permitirá ver las relaciones y agrupaciones establecidas entre los contenidos. Hay casos donde será necesario renombrar algunas categorías o incluso permitir el acceso a algún apartado desde distintas categorías.
      .col-lg-4.mb-4.mb-lg-0.order-1.order-lg-2(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema1/img12.png', style="width:350px" alt='').m-auto
    .row.mb-4
      .col-auto.bg-c6(data-aos="fade-down")
        .px-3.pb-0
          .row.align-items-end
            .col-auto.pe-0
              figure.fig-p1
                img(src='@/assets/curso/tema1/img5.svg', style="width:50px" alt='').m-auto
            .col
              h3 Competencias: colaboración y comunicación
    .row.align-items-center
      .col-lg-9.order-2.order-lg-1(data-aos="fade-right")
        .row
          .col-12.bg-c3
            .p-4
              p.mb-0 Es importante que haya una precisa comunicación entre los miembros del equipo de desarrollo. Como evaluador de interfaces, es apremiante conocer o interpretar la estrategia diseñada por sus colegas, revisar el mapa de la AI de la aplicación. Al igual que el arquitecto de información, el #[i tester] debe conocer los puntos de interacción entre un producto o servicio digital y sus usuarios.
      .col-lg-3.mb-4.mb-lg-0.order-1.order-lg-2(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema1/img13.png', style="width:380px", alt='').m-auto
    Separador
    #t_1_3
    .titulo-segundo.color-acento-contenido
      h2 1.3 La investigación de la audiencia
    p.mb-5(data-aos="fade-right") En esta sección, se presentarán de manera muy precisa conceptos y técnicas para la comprensión del usuario y, de esta forma, tener de manera más prolija la organización de la información. Así, se espera que todo lo conceptual visto en los apartados anteriores quede claro con esta parte práctica.
    .row.mb-4
      .col-auto.bg-c6(data-aos="fade-down")
        .px-3.pb-0
          .row.align-items-end
            .col-auto.pe-0
              figure.fig-p1
                img(src='@/assets/curso/tema1/img5.svg', style="width:50px" alt='').m-auto
            .col
              h3 Aprendiendo de nuestros usuarios
    .row.align-items-center.mb-5
      .col-lg-8.order-2.order-lg-1(data-aos="fade-right")
        p De manera rápida, no solo la persona encargada de realizar las pruebas a las aplicaciones #[i software], sino todo el equipo de desarrollo, debería hacerse estos cuestionamientos:
        .row.justify-content-center.mb-3
          .col-md-9.col-lg.bg-c14.m-2
            .p-4
              p.text-center.mb-0 ¿Cuál es la manera más intuitiva de presentar la información?
          .col-md-9.col-lg.bg-c14.m-2
            .p-4
              p.text-center.mb-0 ¿Cuál es la información más relevante?
        p Esta reflexión lleva a establecer que el cliente no es el usuario, que el equipo de desarrollo (diseñadores, programadores y tester) tampoco. Se debe entender que los usuarios tienen diferentes conocimientos, diferente experiencia o diferentes maneras de ver las cosas. Por lo tanto, en el momento de realizar las pruebas de interfaces, es importante entender qué información están buscando, por lo que la interfaz debe obedecer a lo siguiente:
        .row
          .col-12.bg-c2
            .p-4
              .row.align-items-center
                .col-md-auto
                  figure
                    img(src='@/assets/curso/tema1/img24.svg', style="width:120px", alt='').m-auto
                .col
                  ul.lista-ul.mb-0
                    li.d-flex
                      i.fas.fa-circle(style="color:#1682FB !important")
                      | Proporcionar la información que se necesita.
                    li.d-flex
                      i.fas.fa-circle(style="color:#1682FB !important")
                      | Información fácil de encontrar.
                    li.d-flex
                      i.fas.fa-circle(style="color:#1682FB !important")
                      | Priorizar los contenidos.
                    li.d-flex
                      i.fas.fa-circle(style="color:#1682FB !important")
                      | Identificar obstáculos.
      .col-lg-4.mb-4.mb-lg-0.order-1.order-lg-2(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema1/img14.png', style="width:330px", alt='').m-auto
    .row.mb-4
      .col-auto.bg-c6(data-aos="fade-down")
        .px-3.pb-0
          .row.align-items-end
            .col-auto.pe-0
              figure.fig-p1
                img(src='@/assets/curso/tema1/img5.svg', style="width:50px" alt='').m-auto
            .col
              h3 Metodologías de investigación
    p.mb-5(data-aos="fade-right") En este apartado, se hará énfasis en solo una de las metodologías, se trata de aquella que involucra la organización y la categorización de la información de acuerdo con el usuario y su contexto, esta se denomina #[i card sorting]. No obstante, se presenta un esquema que engloba las principales metodologías, según las condiciones de presencia con usuarios (directo), las que generan un informe de manera inmediata (reportados) y las que se realizan cuando no se tiene contacto directo con los usuarios (observados).
    .titulo-sexto.color-acento-contenido(data-aos="fade-down")
      p.mb-0 #[b Figura 2]. Métodos de evaluación según condiciones
    .row.mb-5
      .col-12.bg-c17(data-aos="fade-left")
        .p-4
          figure
            img(src='@/assets/curso/tema1/img25.svg', style="width:650px" alt='El gráfico organiza métodos de evaluación en un sistema de cuatro cuadrantes  directos o indirectos, y reportados o observados. Focus Group y Entrevistas son directos y reportados; Observación es directa y observada; Encuestas son indirectas y reportadas; HelpDesk, Analítica y Logs son indirectos y observados. Card Sorting se sitúa centralmente, sugiriendo aplicabilidad en múltiples cuadrantes. Este esquema ayuda a elegir métodos de evaluación adecuados para diferentes situaciones de proyecto.').m-auto
    .row.bg-c20
      .col-12
        .px-5
          .row.justify-content-center.mb-5
            .col-md-10.col-lg.bg-c18.m-2(data-aos="fade-right")
              .p-4
                p #[b.txt-c2 #[i Card sorting]]
                .row.mb-3
                  .col-12.bg-c19
                    .p-4
                      p.mb-0 Es un método utilizado para ayudar a diseñar o evaluar la arquitectura de información de un sitio. En una sesión de #[i Card Sorting] u ordenamiento de tarjetas, los participantes organizan los temas en categorías que tienen sentido para ellos y también pueden apoyar a etiquetar estos grupos. La dinámica de #[i Card Sorting] puede utilizar tarjetas reales, trozos de papel o una de las varias herramientas de #[i software] de clasificación de tarjetas en línea. (Assistant Secretary for Public Affairs, 2021).
                figure
                  img(src='@/assets/curso/tema1/img15.png', style="width:520px", alt='').m-auto
            .col-md-10.col-lg.bg-c18.m-2(data-aos="fade-left")
              .p-4
                p #[b.txt-c2 Beneficios del #[i Card Sorting]]
                .row.mb-3
                  .col-12.bg-c19
                    .p-4
                      p Ayuda a comprender las expectativas de los usuarios y los temas de su interés. Esta información del grupo de usuarios reclutados puede apoyar al equipo desarrollador a:
                      ul.lista-ul
                        li 
                          i.fas.fa-circle(style="color: #1682FB")
                          | Construir la estructura de su sitio web
                        li 
                          i.fas.fa-circle(style="color: #1682FB")
                          | Decidir qué poner en la página de inicio
                        li 
                          i.fas.fa-circle(style="color: #1682FB")
                          | Navegar y categorizar las etiquetas
                figure
                  img(src='@/assets/curso/tema1/img16.png', style="width:520px", alt='').m-auto
          .row.mb-4
            .col-auto.bg-c6(data-aos="fade-down")
              .px-3.pb-0
                .row.align-items-end
                  .col-auto.pe-0
                    figure.fig-p1
                      img(src='@/assets/curso/tema1/img5.svg', style="width:50px" alt='').m-auto
                  .col
                    h3 Analizando los resultados
          p.mb-5(data-aos="fade-right") Para entender el análisis de los resultados de la técnica de #[i Card Sorting], es necesario abordar las instrucciones y procedimiento que se establecen. En ese sentido, se define lo siguiente:
          .row.justify-content-center.mb-5
            .col-lg-10.bg-c21.mb-4(data-aos="fade-right")
              .p-4
                .row.align-items-center
                  .col-md-auto.mb-4.mb-md-0
                    figure
                      img(src='@/assets/curso/tema1/img17.png', style="width:150px", alt='').m-auto
                  .col
                    ol.lista-ol--cuadro.mb-0
                      li.d-flex
                        .lista-ol--cuadro__vineta
                          span(style="color:#000") 1.
                        |
                        p.mb-0 Aplicando el #[i Card Sorting] se pueden tener resultados de tipo:
                    ul.lista-ul.ms-4
                      li.d-flex
                        i.lista-ul__vineta
                        | Cuantitativo (resultados, dendrograma, matriz de coocurrencia).
                      li.d-flex
                        i.lista-ul__vineta
                        | Cualitativo (Comentarios, sugerencias, dudas, alternativas).
            .col-lg-10.bg-c22.mb-4(data-aos="fade-down")
              .p-4
                .row.align-items-center
                  .col-md-auto.mb-4.mb-md-0
                    figure
                      img(src='@/assets/curso/tema1/img18.png', style="width:150px", alt='').m-auto
                  .col
                    ol.lista-ol--cuadro.mb-0
                      li.d-flex
                        .lista-ol--cuadro__vineta
                          span(style="color:#000") 2.
                        | Es recomendable que para la prueba se tengan cinco (5) personas, y el tiempo utilizado es de 20 min x persona.
            .col-lg-10.bg-c21(data-aos="fade-left")
              .p-4
                .row.align-items-center
                  .col-md-auto.mb-4.mb-md-0
                    figure
                      img(src='@/assets/curso/tema1/img17.png', style="width:150px", alt='').m-auto
                  .col
                    ol.lista-ol--cuadro.mb-0
                      li.d-flex
                        .lista-ol--cuadro__vineta
                          span(style="color:#000") 3.
                        | La técnica puede realizarse en dos tipos, de manera cerrada (validación) o abierta (investigación). Es decir, cuando es cerrada, es porque las categorías ya están definidas, de esta manera, los usuarios lo que hacen es clasificar los ítems en las categorías ya establecidas. Por otro lado, cuando se aplica de manera abierta, los usuarios agrupan los ítems y dan nombres a las categorías de estas agrupaciones.
          p.mb-5(data-aos="fade-right") De acuerdo con lo visto hasta el momento, en relación al análisis de resultados, se pueden presentar estos con alguna de las siguientes técnicas:
    .row.mb-5
      .col-12.bg-c23(data-aos="fade-down")
        .p-4
          ul.lista-ul.mb-0
            li.d-flex
              i.fas.fa-circle(style="color:#1682FB !important")
              |
              p.mb-0 #[b Matriz de coocurrencia]: con el resultado de la matriz de coocurrencia, se muestra claramente la clasificación de varios ítems en ciertas categorías, por lo que se ve con un color azul mucho más oscuro la concurrencia de los términos, por lo tanto, lo que se presume y propone es que la interfaz de la aplicación debe tener entre 5 a 6 agrupaciones (o categorías) fijas. Los otros ítems pueden ser adicionados en las categorías más concurridas.
    .row.justify-content-center.mb-5
      .col-lg-10
        .titulo-sexto.color-acento-contenido(data-aos="fade-right")
          p.mb-0 #[b Figura 3]. Ejemplo de matriz de coocurrencia
        .row
          .col-12.bg-c17(data-aos="fade-left")
            .p-5
              .row.justify-content-center
                .col-auto
                  figure
                    img(src='@/assets/curso/tema1/img22.png', style="width:750px" alt='La matriz contiene una matriz de coocurrencia que enumera categorías de muebles y muestra su relación con varios factores representados por columnas, con números que indican el nivel de concurrencia o frecuencia de relación. Esta matriz sirve para analizar patrones de asociación entre categorías de muebles en diferentes situaciones o condiciones.').m-auto
                  figcaption Nota. Tomado de (Blogger, 2020).
    .row.mb-5
      .col-12.bg-c23(data-aos="fade-down")
        .p-4
          ul.lista-ul.mb-0
            li.d-flex
              i.fas.fa-circle(style="color:#1682FB !important")
              |
              p.mb-0 #[b Dendrograma]: el análisis del dendrograma revela las agrupaciones posibles, lo que subraya la responsabilidad del equipo de desarrollo al decidir cuántas categorías incorporar en el diseño de la interfaz, ya sean 2, 3 o 4. Esta decisión depende en gran medida de la investigación realizada con los usuarios, resaltando así la importancia y el papel crucial del evaluador o tester de interfaces de #[i software]. Estos profesionales tienen la capacidad de determinar la eficacia de la arquitectura de la información, basándose en las técnicas y conceptos estudiados.
    .row.justify-content-center
      .col-lg-10
        .titulo-sexto.color-acento-contenido(data-aos="fade-right")
          p.mb-0 #[b Figura 4]. Ejemplo de dendrograma
        .row
          .col-12.bg-c17(data-aos="fade-left")
            .p-5
              .row.justify-content-center
                .col-auto
                  figure
                    img(src='@/assets/curso/tema1/img23.png', style="width:700px" alt='La figura  muestra un dendrograma de un análisis de conglomerados jerárquicos, donde diferentes categorías como "FORO", "CHAT", y otras, se agrupan basándose en su similitud. Las líneas horizontales representan la fusión de estas categorías en conglomerados que varían de cuatro a dos grupos principales, según la distancia reescalada entre ellos. Este gráfico se utiliza para visualizar la estructura de datos y la formación de grupos en un conjunto de datos.').m-auto
                  figcaption Nota. Tomada de Revista No Solo Usabilidad 
                    | 
                    a.txt-c4(href="http://www.nosolousabilidad.com/" target="_blank") (http://www.nosolousabilidad.com/).
    Separador 
    #t_1_4
    .titulo-segundo.color-acento-contenido
      h2 1.4 Organizando la información
    p.mb-5(data-aos="fade-right") Hay algunos consejos importantes para la determinación de una buena interfaz, estos serán de utilidad para el evaluador de una interfaz gráfica de un sistema #[i software] interactivo, que, aunque en el caso práctico se toma una aplicación web, estos consejos sirven para cualquier aplicación #[i software].
    .row.mb-4
      .col-auto.bg-c6(data-aos="fade-down")
        .px-3.pb-0
          .row.align-items-end
            .col-auto.pe-0
              figure.fig-p1
                img(src='@/assets/curso/tema1/img5.svg', style="width:50px" alt='').m-auto
            .col
              h3 Páginas web que funcionan
    .row.align-items-center.mb-5
      .col-lg-7.order-2.order-lg-1(data-aos="fade-right")
        p Los criterios para definir si una aplicación o sitio web funciona o no dependen de una serie de hallazgos comunes. Normalmente, los hallazgos se refieren a una de las siguientes categorías, obsérvelas en el siguiente recurso:
        AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul1")
          .row(titulo="1. Aspectos negativos generales")
            .col-12
              p Entre los aspectos denominados negativos en la experiencia con páginas web, están:
              ul.lista-ul.mb-0
                li.d-flex
                  i.fas.fa-circle(style="color:#1682FB !important")
                  |
                  p.mb-0 Velocidad.
                li.d-flex
                  i.fas.fa-circle(style="color:#1682FB !important")
                  |
                  p.mb-0 Ancho de banda.
                li.d-flex
                  i.fas.fa-circle(style="color:#1682FB !important")
                  |
                  p.mb-0 Efectividad (no hace lo que tiene que hacer en los tiempos más esperados).
                li.d-flex
                  i.fas.fa-circle(style="color:#1682FB !important")
                  |
                  p.mb-0 Estética.
                li.d-flex
                  i.fas.fa-circle(style="color:#1682FB !important")
                  |
                  p.mb-0 Funcionalidad.
                li.d-flex
                  i.fas.fa-circle(style="color:#1682FB !important")
                  |
                  p.mb-0 Interacción (uso de #[i banners], #[i frames], elementos confusos).
                li.d-flex
                  i.fas.fa-circle(style="color:#1682FB !important")
                  |
                  p.mb-0 Navegación.
          .row(titulo="2. Principales hallazgos negativos")
            .col-12
              p Estos se relacionan con:
              ul.lista-ul.mb-0
                li.d-flex
                  i.fas.fa-circle(style="color:#1682FB !important")
                  |
                  p.mb-0 Contenidos difíciles de encontrar (etiquetas poco claras, ambiguas, navegación por encabezados incorrecta).
                li.d-flex
                  i.fas.fa-circle(style="color:#1682FB !important")
                  |
                  p.mb-0 Diseño gráfico descuidado.
                li.d-flex
                  i.fas.fa-circle(style="color:#1682FB !important")
                  |
                  p.mb-0 Demasiadas alertas.
                li.d-flex
                  i.fas.fa-circle(style="color:#1682FB !important")
                  |
                  p.mb-0 Tono/Lenguaje inapropiado (jerga empresarial ajena a la audiencia).
          .row(titulo="3. Principales hallazgos positivos")
            .col-12
              p Principales hallazgos positivos
              ul.lista-ul.mb-0
                li.d-flex
                  i.fas.fa-circle(style="color:#1682FB !important")
                  |
                  p.mb-0 Estética agradable.
                li.d-flex
                  i.fas.fa-circle(style="color:#1682FB !important")
                  |
                  p.mb-0 Información de interés, actualizada.
                li.d-flex
                  i.fas.fa-circle(style="color:#1682FB !important")
                  |
                  p.mb-0 Utilidad.
                li.d-flex
                  i.fas.fa-circle(style="color:#1682FB !important")
                  |
                  p.mb-0 Sencillez.
      .col-lg-5.mb-4.mb-lg-0.order-1.order-lg-2(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema1/img20.png', style="width:470px" alt='').m-auto
    .row.mb-4
      .col-auto.bg-c6(data-aos="fade-down")
        .px-3.pb-0
          .row.align-items-end
            .col-auto.pe-0
              figure.fig-p1
                img(src='@/assets/curso/tema1/img5.svg', style="width:50px" alt='').m-auto
            .col
              h3 El planteamiento inicial
    .row.mb-5
      .col-12.bg-c24(data-aos="fade-down")
        .p-4
          .row.align-items-center
            .col-lg-auto.pe-0.mb-4.mb-lg-0
              figure
                img(src='@/assets/curso/tema1/img21.png', style="width:310px" alt='').m-auto
            .col.bg-c25
              .p-3
                p.mb-0 El punto de partida es que, a través de la investigación de los usuarios, se debe presentar la información organizada, que a la vez es comprensiva y explícita para estos usuarios. De hecho, los sistemas de organización van a reflejar siempre las perspectivas y objetivos del proyecto, pues al ser un estudio sistemático para descubrir comportamientos, necesidades, motivaciones y tendencias, se centra sobre lo que se requiere y debe hacerse.
    .row.mb-4
      .col-auto.bg-c6(data-aos="fade-down")
        .px-3.pb-0
          .row.align-items-end
            .col-auto.pe-0
              figure.fig-p1
                img(src='@/assets/curso/tema1/img5.svg', style="width:50px" alt='').m-auto
            .col
              h3 Esquemas de organización
    p.mb-5(data-aos="fade-right") Según el enunciado, los esquemas son lineamientos o marcos de referencia para organizar y presentar la información. En ese sentido, es importante tener en cuenta estos aspectos, por lo que, entre los más representativos, se tienen:
    .row.justify-content-center.mb-5
      .col-md-8.col-lg-3.ps-0.bg-c26.mb-4.mb-lg-0(data-aos="fade-right")
        .row
          .col-auto
            p.txt-c2 #[b Esquemas exactos]
        .row
          .col-12
            .p-4
              ul.lista-ul.mb-0
                li.d-flex
                  i.fas.fa-circle(style="color:#1682FB !important")
                  |
                  p.text-white.mb-0 Alfabéticos.
                li.d-flex
                  i.fas.fa-circle(style="color:#1682FB !important")
                  |
                  p.text-white.mb-0 Cronológicos.
                li.d-flex
                  i.fas.fa-circle(style="color:#1682FB !important")
                  |
                  p.text-white.mb-0 Geográficos.
      .col-md-8.col-lg.ms-0.ms-lg-4.ps-0.bg-c26(data-aos="fade-left")
        .row
          .col-auto
            p.txt-c2 #[b Esquemas ambiguos]
        .row
          .col-12
            .p-4
              ul.lista-ul.mb-0
                li.d-flex
                  i.fas.fa-circle(style="color:#1682FB !important")
                  |
                  p.text-white.mb-0 Tópico / Temática / Producto.
                li.d-flex
                  i.fas.fa-circle(style="color:#1682FB !important")
                  |
                  p.text-white.mb-0 Audiencia.
                li.d-flex
                  i.fas.fa-circle(style="color:#1682FB !important")
                  |
                  p.text-white.mb-0 Tarea.
                li.d-flex
                  i.fas.fa-circle(style="color:#1682FB !important")
                  |
                  p.text-white.mb-0 Organización (no recomendados).
                li.d-flex
                  i.fas.fa-circle(style="color:#1682FB !important")
                  |
                  p.text-white.mb-0 Metáfora (se utilizan gráficas y el sentido que ellas representan para presentar la información, como, por ejemplo, un árbol representa una compañía y los frutos de ese árbol son los servicios que ofrece esa empresa).
    .row.mb-4
      .col-auto.bg-c6(data-aos="fade-down")
        .px-3.pb-0
          .row.align-items-end
            .col-auto.pe-0
              figure.fig-p1
                img(src='@/assets/curso/tema1/img5.svg', style="width:50px" alt='').m-auto
            .col
              h3 Esquemas de organización
    p.mb-5(data-aos="fade-right") Para este apartado, solo se debe responder a una pregunta: ¿Cómo navegan nuestros usuarios? Para los usuarios resulta frustrante aquellas estructuras que no resultan lógicas ni predecibles; emplear métodos de organización consistentes permite a los usuarios extender su conocimiento desde páginas familiares a otras que no lo son. Por lo anterior, se presentan las estructuras de organización simples o complejas que se encuentran cuando se navega por la web:
    .row.justify-content-center
      .col-lg-10.bg-c27.mb-4(data-aos="fade-right")
        .p-4
          .row.align-items-center
            .col-md-auto.mb-4.mbmd-0
              figure
                img(src='@/assets/curso/tema1/img28.svg', style="width:150px" alt='').m-auto
            .col
              p #[b.txt-c2 Simples]
              p Jerarquías: Modelo Top - Down. Organizadas en grupos, pueden ser amplias o profundas. Es decir, un menú puede ser amplio, pero máximo hasta 7 categorías, según uno de los pioneros del diseño responsivo, Steven Krug. La recomendación para esta jerarquía es que las categorías deben ser:
              ul.lista-ul.mb-0
                li.d-flex
                  i.fas.fa-circle(style="color:#1682FB !important")
                  |
                  p.mb-0 Mutuamente excluyentes.
                li.d-flex
                  i.fas.fa-circle(style="color:#1682FB !important")
                  |
                  p.mb-0 Equilibradas tanto en amplitud como en profundidad.
                li.d-flex
                  i.fas.fa-circle(style="color:#1682FB !important")
                  |
                  p.mb-0 Pueden ser amplias o profundas.
      .col-lg-10.bg-c27(data-aos="fade-left")
        .p-4
          .row.align-items-center
            .col-md-auto.mb-4.mbmd-0
              figure
                img(src='@/assets/curso/tema1/img29.svg', style="width:150px" alt='').m-auto
            .col
              p #[b.txt-c2 Complejos]
              ul.lista-ul.mb-0
                li.d-flex
                  i.fas.fa-circle(style="color:#1682FB !important")
                  |
                  p.mb-0 Hipertexto.
                li.d-flex
                  i.fas.fa-circle(style="color:#1682FB !important")
                  |
                  p.mb-0 Linear.
                li.d-flex
                  i.fas.fa-circle(style="color:#1682FB !important")
                  |
                  p.mb-0 Combinados: - Jerarquía (1er nivel) + Rel. (Secciones) - Catálogo (Niveles superiores, jerarquía - Niveles inferiores: contenido).
      
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
