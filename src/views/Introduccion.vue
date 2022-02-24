<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span.text-white
          i.fas.fa-info
      h1 Introducción
    
    p.mb-4(data-aos="fade") Estimado aprendiz, bienvenido al componente formativo “Servicios web con PHP”. Para iniciar, visualice el siguiente video y conozca sobre el contenido a estudiar.

    figure.mb-5(data-aos="fade-down")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/9tzRZ0aeMuE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-6
        figure
          img.mx-auto(src='@/assets/curso/intro-img1.jpg' alt='Imagen introducción')
      .col-lg-6(data-aos="fade-left")
        .bg-gris.neg--right.p-lg-4.p-4
          p.mb-0 Para la elaboración de este componente, se abordaron varios autores conocidos en 
            strong servicios web con PHP
            |, de quienes se han citado y referenciado conceptos y ejemplos para los fines educativos de esta materia, en el entendido de que el conocimiento es social y, por lo tanto, es para ser usado por quienes necesitan adquirirlo. Se espera que este documento sea útil para todos aquellos, aprendices y lectores en general, que estén interesados en acercarse a asuntos básicos de 
            strong análisis y desarrollo de <em>software</em>.
            
  
    
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
