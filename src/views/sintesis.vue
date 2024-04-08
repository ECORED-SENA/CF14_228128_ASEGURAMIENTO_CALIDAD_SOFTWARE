<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p.mb-5 El siguiente mapa ofrece una vista rápida de los contenidos de este componente formativo:
    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="La síntesis presenta  un esquema del Plan de Pruebas de Usabilidad, que se concentra en la Arquitectura de la Información para mejorar la experiencia de uso y satisfacción del producto. Destaca la importancia del Arquitecto de la Información en la estructuración y localización de contenidos, el reto de mantener la usabilidad frente al crecimiento de datos y la necesidad de involucrar al usuario en el proceso de diseño para asegurar productos accesibles y fáciles de usar. Estrategias como el Card Sorting y evaluaciones heurísticas son clave para desarrollar interfaces predecibles y centradas en las necesidades del usuario, enfatizando la diferencia entre el proceso de diseño centrado en el usuario y la experiencia final del usuario.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
