<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span.text-white 5
      h1 Conexiones a SQL

    .row.align-items-center.mb-4
      .col-lg-6(data-aos="fade-right")
        figure
          img.mx-auto(src='@/assets/curso/tema5-img1.jpg' alt='Conexiones a SQL')
      .col-lg-6(data-aos="fade-left")
        .bg-gris.neg--right.p-lg-4.p-4
          p Para iniciar con ese tema, es preciso recordar que el SQL (Structured Query Language) es un lenguaje de consulta estructurado, definido como la base de datos relacionales con el lenguaje de alto nivel estándar.
          p De acuerdo con García (2003), el SQL agrupa tres tipos de sentencias con objetivos particulares, en los siguientes lenguajes: 
        .row.justify-content-center.tarjetas-tema5.neg--top3  
          .col-lg-3.text-center.mb-2.p-3.mx-2
            .numero1.mb-2
              span 1
            strong (DDL) Lenguaje de Definición de Datos
          .col-lg-3.text-center.mb-2.p-3.mx-2
            .numero2.mb-2
              span 2
            strong (DML) Lenguaje de Manipulación de Datos
          .col-lg-3.text-center.mb-2.p-3.mx-2
            .numero1.mb-2
              span 3
            strong (DCL) Lenguaje de Control de Datos    

    .row(data-aos="fade-down")
      .col-lg-12
        .cajon.color-acento-botones.p-4
          p.mb-0 El mismo autor plantea que el grupo de sentencias de SQL soportan la definición y declaración de los objetos de la base de datos. Objetos tales como: 

    .row.mb-0(data-aos="fade-down")
      figure
        img(src='@/assets/curso/tema5-img2.svg' alt='Grupo de sentencias de SQL')

    .row.mb-4(data-aos="fade-down")
      .col-lg-12
        .cajon.color-acento-botones.p-4
          p.mb-0 Para el ejemplo que se realizará más adelante, en el cual se unirán todos los temas, se utilizará phpMyAdmin, que es una herramienta escrita en PHP cuya función es administrar MySQL a través de páginas web, utilizando cualquier navegador.


</template>

<script>
export default {
  name: 'Tema5',
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
