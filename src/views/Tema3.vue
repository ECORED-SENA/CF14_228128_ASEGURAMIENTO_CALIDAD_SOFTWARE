<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 Introducción a la experiencia de usuario
    .row
      .col-12.bg-c24(data-aos="fade-right")
        .p-4
          .row.align-items-center
            .col-lg-auto.pe-0.mb-4.mb-lg-0
              figure
                img(src='@/assets/curso/tema3/img1.svg', style="width:310px" alt='').m-auto
            .col.bg-c25
              .p-3
                p.mb-0 Acá se pretende generar claridad sobre conceptos que comúnmente se utilizan en equipos de desarrollo, como, por ejemplo, el término experiencia de usuario. Es por eso que la pretensión de esta sección es abordar de manera clave algunas particularidades de esta disciplina, a través de la metodología del Diseño Centrado en el Usuario, toda vez que sin la aplicación de la metodología no es muy posible llegar a generar experiencias positivas en el uso de un sistema #[i software] interactivo.
    Separador
    #t_3_1
    .titulo-segundo.color-acento-contenido
      h2 3.1.Diseño Centrado en el Usuario
    p.mb-5(data-aos="fade-right") En esta última sección, se quiere dar a conocer una breve ilustración sobre una de las metodologías más importantes para el desarrollo de sistemas interactivos #[i software]. Esta metodología, además de ser estandarizada por la ISO 13407, propone una serie de lineamientos y fases para el éxito de las aplicaciones.
    .row.mb-4
      .col-auto.bg-c6(data-aos="fade-down")
        .px-3.pb-0
          .row.align-items-end
            .col-auto.pe-0
              figure.fig-p1
                img(src='@/assets/curso/tema1/img5.svg', style="width:50px" alt='').m-auto
            .col
              h3 ¿Por qué Diseño Centrado en el Usuario?
    .row.align-items-center.mb-3
      .col-lg-7.order-2.order-lg-1(data-aos="fade-right")
        .row
          .col-12.bg-c3
            .p-4
              p.mb-0 En la literatura, se encuentra una vasta información sobre las definiciones acerca de la metodología del Diseño Centrado en el Usuario #[b DCU] y de la experiencia de usuario #[b UX]. Por lo que, a nivel general, las definiciones convergen a que el #[b DCU] es un enfoque del diseño que se centra en los usuarios, a través de la planificación, el diseño y el desarrollo de un producto. Sus procesos y estrategias varían según el tipo de proyecto de diseño, no obstante, generalmente se basan en una combinación de actividades de investigación y diseño de #[b UX]. (Justinmind, 2018)
      .col-lg-5.mb-4.mb-lg-0.order-1.order-lg-2(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema3/img1.png', style="width:450px" alt='').m-auto
    p.mb-5(data-aos="fade-right") El DCU es un paradigma, de cierta forma, cambia la forma en que se piensa y se percibe sobre los seres humanos y las computadoras. Este tipo de proceso de diseño tiene como objetivo involucrar activamente a los usuarios en cada etapa del proceso de construcción de un sistema interactivo #[i software], para el desarrollo de productos más efectivos, eficientes y seguros. Estas etapas incluyen:
    .row.bg-c12.mb-5(data-aos="fade-down")
      .col-12
        .p-4.p-lg-5
          .tarjeta.tarjeta--azul
            .pb-3.pt-4.pt-lg-5.px-4
              SlyderA(tipo="b")
                .row.justify-content-center.align-items-center
                  .col-lg-5.order-2.order-lg-1
                    .text-white
                      p #[b.txt-c1 Análisis de investigación]
                      p Los pasos se inician con un análisis del usuario, el contexto y los escenarios. El análisis del usuario permite entender sus necesidades y conocer su perfil. Mientras que el de contexto busca entender todo lo que está alrededor, como la competencia, el mercado, entre otros. Analizar los escenarios permite entender un poco más las posibles formas de uso del sitio y corregirlas desde el comienzo. Aquí se pueden realizar entrevistas a los usuarios, se hace un análisis de la competencia respecto a su presencia digital, análisis heurístico, entre otros.
                  .col-lg-5.mb-4.mb-lg-0.order-1.order-lg-2
                    figure
                      img(src='@/assets/curso/tema3/img2.png', style="width:380px", alt='').m-auto
                .row.justify-content-center.align-items-center
                  .col-lg-5.order-2.order-lg-1
                    .text-white
                      p #[b.txt-c1 Concepto y estrategia]
                      p La siguiente etapa incluye la conceptualización del proyecto, que consiste en organizar el mismo de manera esquemática. Un sitio web puede contener varias páginas web, es necesario definir la cantidad antes de iniciar su desarrollo. También, el sitio web puede necesitar ciertas funcionalidades, como base de datos, sistemas de seguridad, entre otros aspectos importantes. Para ello, se realizan mapas del sitio o sitemaps, diseño de arquitectura de la información y categorización de productos. Esta última implica identificar la línea de productos, como sucede con los e-commerce, donde se puede utilizar card sorting, que es una herramienta sencilla y práctica para establecer estas categorías.
                  .col-lg-5.mb-4.mb-lg-0.order-1.order-lg-2
                    figure
                      img(src='@/assets/curso/tema3/img3.png', style="width:380px", alt='').m-auto
                .row.justify-content-center.align-items-center
                  .col-lg-5.order-2.order-lg-1
                    .text-white
                      p #[b.txt-c1 Diseño]
                      p En la etapa de prototipado, se desarrolla un diseño en baja y alta, de manera que se puedan apreciar las funcionalidades del sitio web. El prototipado lo que busca es tener una web funcional, pero que no está en línea aún. Es una plataforma de prueba, sin colores ni diseños o fotos (diseño en baja). Solo es un sitio web donde se pueden hacer pruebas de funcionalidad, como el uso de botones, uso de formularios o caja de búsqueda, por mencionar algunos elementos. Se hacen también pruebas piloto y se define el diseño gráfico (diseño en alta).
                  .col-lg-5.mb-4.mb-lg-0.order-1.order-lg-2
                    figure
                      img(src='@/assets/curso/tema3/img4.png', style="width:380px", alt='').m-auto
                .row.justify-content-center.align-items-center
                  .col-lg-5.order-2.order-lg-1
                    .text-white
                      p #[b.txt-c1 Desarrollo]
                      p La etapa anterior se pone en evidencia cuando se realiza el test de usuario, que incluye pruebas finales de la plataforma y uso de herramientas de analítica, como eye tracking, que permiten hacerle seguimiento a la vista mientras navega en una pantalla.
                  .col-lg-5.mb-4.mb-lg-0.order-1.order-lg-2
                    figure
                      img(src='@/assets/curso/tema3/img5.png', style="width:380px", alt='').m-auto
                .row.justify-content-center.align-items-center
                  .col-lg-5.order-2.order-lg-1
                    .text-white
                      p #[b.txt-c1 Implementación y prueba]
                      p Finalmente, una vez que se detectaron y corrigieron los problemas, se pasa al desarrollo e implementación del sitio web. Aquí se busca poner el proyecto web en producto final, para realizar el lanzamiento.
                  .col-lg-5.mb-4.mb-lg-0.order-1.order-lg-2
                    figure
                      img(src='@/assets/curso/tema3/img6.png', style="width:380px", alt='').m-auto
    .row.mb-4
      .col-auto.bg-c6(data-aos="fade-down")
        .px-3.pb-0
          .row.align-items-end
            .col-auto.pe-0
              figure.fig-p1
                img(src='@/assets/curso/tema1/img5.svg', style="width:50px" alt='').m-auto
            .col
              h3 Contexto, objetivos y métodos
    .row.align-items-center.mb-4
      .col-lg-9.order-2.order-lg-1(data-aos="fade-right")
        .row.mb-4
          .col-12.bg-c3
            .p-4
              p.mb-0 Según #[i #[b Interaction Design Foundation IDF]], los diseñadores centrados en el usuario necesitan de una comprensión profunda de sus usuarios objetivo, sus requerimientos y su entorno (IDF, 2020). Tener empatía y ser sensible a los puntos débiles de su usuario es clave.
        p.mb-0 #[b IDF] señala que el proceso tiene como objetivo capturar y abordar toda la experiencia del usuario de una interfaz. Por lo tanto, se debe involucrar a profesionales de múltiples disciplinas (por ejemplo, etnógrafos, psicólogos, ingenieros de #[i software] y #[i hardware]), así como a expertos en el dominio, partes interesadas y los propios usuarios.
      .col-lg-3.mb-4.mb-lg-0.order-1.order-lg-2(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema3/img9.png', style="width:280px", alt='').m-auto
    .row.align-items-center.mb-5
      .col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
        figure
          img(src='@/assets/curso/tema3/img7.png', style="width:380px", alt='').m-auto
      .col-lg-8(data-aos="fade-left")
        p De esta forma, como se ha apuntado en anteriores secciones, el equipo de desarrollo debe llevar a cabo el análisis y pruebas de usuario de los diseños producidos, basados en la estrategia del proyecto y los objetivos del usuario y del negocio. 
        p.mb-0 De manera adicional, para abarcar toda la experiencia del usuario, los usuarios deben participar durante todo el proceso de diseño centrado en el usuario, incluida la validación de los diseños.
    .row.mb-4
      .col-auto.bg-c6(data-aos="fade-down")
        .px-3.pb-0
          .row.align-items-end
            .col-auto.pe-0
              figure.fig-p1
                img(src='@/assets/curso/tema1/img5.svg', style="width:50px" alt='').m-auto
            .col
              h3 Generación de experiencias desde DCU
    .row.align-items-center.mb-4
      .col-lg-9.order-2.order-lg-1(data-aos="fade-right")
        p Es necesario hacer la diferenciación entre DCU y UX. Mientras que el diseño centrado en el usuario se refiere al proceso o estrategia aplicada para diseñar experiencias, la experiencia del usuario se ocupa de la experiencia específica que los usuarios tienen con los productos que utilizan.
        p Así que UX es una referencia a cómo un usuario experimenta e interactúa con un producto o servicio, un concepto más que un proceso. (Justinmind, 2018).
        .row
          .col-12.bg-c3
            .p-4
              .row.align-items-center
                .col-md-auto
                  figure
                    img(src='@/assets/curso/tema3/img2.svg', style="width:70px", alt='').m-auto
                .col
                  p.mb-0 #[b Según la ISO 9241- 210: 2010 (ISO, 2019), la definición exacta de experiencia de usuario es: “Las percepciones y respuestas de una persona resultantes del uso y / o uso anticipado de un producto, sistema o servicio”.]
      .col-lg-3.mb-4.mb-lg-0.order-1.order-lg-2(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema3/img8.png', style="width:280px", alt='').m-auto
    p.mb-5(data-aos="fade-right") Así que el interés por la experiencia de usuario ha crecido de manera constante en los últimos años. Aunque UX se refiere a cómo un usuario interpreta la interacción que tiene con cualquier producto o servicio, ocupa un lugar especial en el diseño de interfaces web y móviles.
    .row
      .col-12.bg-c18(data-aos="fade-left")
        .p-4
          .row
            .col-12.bg-c33
              .p-4
                .row.align-items-center
                  .col-md-auto.mb-4.mb-md-0
                    figure
                      img(src='@/assets/curso/tema3/img3.svg', style="width:70px", alt='').m-auto
                  .col
                    p.mb-0 La #[b UX] no es un diseño centrado en el usuario. Más bien, UX es un valor del diseño centrado en el usuario, y se necesita crear experiencias web y móviles que atraigan a los usuarios y los mantengan interesados. Conocer a los usuarios y diseñar para ellos no es solo una buena práctica de diseño, también beneficia a la marca.

</template>

<script>
export default {
  name: 'Tema3',
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
