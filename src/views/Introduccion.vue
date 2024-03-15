<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    .row.align-items-center.mb-4
      .col-md-auto.mb-4.mb-md-0(data-aos="fade-right")
        figure
          img(src='@/assets/curso/intro/img1.svg', style="width:80px", alt='').m-auto
      .col(data-aos="fade-left")
        p Le damos la bienvenida al componente formativo “Plan de pruebas de usabilidad”. 
        p.mb-0 Este componente destaca la importancia de la arquitectura de la información en los contenidos a trabajar, así como la relevancia de las metodologías para la evaluación de usabilidad y accesibilidad en interfaces gráficas de sistemas de software. Además, se introduce la disciplina de la Experiencia de Usuario (UX). Estos conceptos son cruciales para elaborar un plan efectivo de pruebas de usabilidad.
    .row
      .col-lg-8.order-2.order-lg-1(data-aos="fade-right")
        .row
          .col-12.bg-c1
            .p-4
              p.mb-0 Inicialmente, es fundamental comprender los elementos de interacción de una interfaz, incluyendo su disposición y naturaleza. Esto permite aplicar adecuadamente las técnicas de evaluación para desarrollar aplicaciones no solo funcionales, sino también intuitivas y fáciles de utilizar. Asimismo, es esencial considerar al usuario final en el proceso de estas pruebas de usabilidad, enfocándose en cómo contribuyen a forjar una experiencia de usuario óptima.
      .col-lg-4.mb-4.mb-lg-0.order-1.order-lg-2(data-aos="fade-left")
        figure
          img(src='@/assets/curso/intro/img1.png', style="width:350px", alt='').m-auto
    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
