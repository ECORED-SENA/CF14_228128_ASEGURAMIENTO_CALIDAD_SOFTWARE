<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Metodologías de evaluación de usabilidad y accesibilidad
    p Una vez revisado y comprendido de manera precisa y sucinta los conceptos y técnicas que engloban en gran medida la disciplina de la usabilidad, es posible ahora entrar a uno de los más interesantes mecanismos y apartados de este componente, que es la evaluación.
    Separador
    #t_2_1
    .titulo-segundo.color-acento-contenido
      h2 2.1 Introducción y conceptos básicos
    .row.align-items-center.mb-5
      .col-lg-9.order-2.order-lg-1
        p.mb-4 Una de las científicas informáticas más renombradas en el mundo de la interacción humano-computador, #[b Jenny Preece], indica en su libro #[b #[i Interaction Design: Beyond Human-Computer]] lo siguiente:
        .row
          .col-12.px-4.pb-4.px-lg-5.pb-lg-5.bg-c28(data-aos="fade-down")
            .row.justify-content-center
              .col-lg-12
                .tarjeta-avatar
                  img(src='@/assets/curso/tema2/img1.svg' alt='AvatarTop')
                  .tarjeta.color-primario1
                    .p-4
                      .bloque-texto-d.p-4
                        .bloque-texto-d__texto.mb-2
                          i.fas.fa-quote-left
                          p.text-center #[b ...hace poco me encontré con dos diseñadores de sitios web que orgullosos de su nuevo sitio me miraron atónitos cuando les pregunté si lo habían probado con usuarios. «No», dijeron, «pero nosotros sabemos que está bien». Indagué un poco más y descubrí que en su empresa eran considerados como expertos pues conocían perfectamente todos los trucos del diseño web...]
                          i.fas.fa-quote-right
                        .bloque-texto-d__autor 
                          p.mb-0.text-center - Jenny Preece
      .col-lg-3.mb-4.mb-lg-0.order-1.order-lg-2
        figure
          img(src='@/assets/curso/tema2/img1.png', style="width:340px", alt='').m-auto

</template>

<script>
export default {
  name: 'Tema2',
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
