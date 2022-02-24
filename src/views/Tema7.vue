<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span.text-white 7
      h1 Aplicación SOAP UI

    .row.justify-content-center.fondo1-tema2
      .col-12.col-lg-4.mb-4.mb-lg-0.mt-0
        figure
          img.mt-0(src='@/assets/curso/tema7-img1.svg' alt='Aplicación SOAP UI')
      .col-lg-8.pb-4.px-lg-5
        .row.align-items-center.justify-content-center.neg--right.mb-4.pt-3(data-aos="fade-left")
          .col-lg-12.bg-blanco.p-3.pb-lg-5
            p.mb-0 Según la organización SoapUI (s. f.), la aplicación SOAP UI esta es una herramienta muy versátil, que sirve para probar, simular y obtener el código de aplicaciones <em>web service</em> y la transferencia de estado representacional. Esta herramienta está generada en código java, funciona sobre SOAP, JMS, JDBC, API de REST, GraphQL y muchos servicios más, además de ser muy útil para que los futuros desarrolladores aprendan a crear API.
        .row.align-items-center.justify-content-center.neg--top2
          .col-lg-12
            .tarjeta.bg-degrade.p-3
              .row.align-items-center
                .col
                  .row.justify-content-between.align-items-center
                    .col.mb-3.mb-sm-0
                      h4.mb-2 SOAP UI
                      p Para descargar este programa de forma gratuita, haga clic aquí. 
                    .col-sm-auto
                      a.boton.color-acento-botones(href="https://www.soapui.org/downloads/download-readyapi-trial/?v=1" target="_blank")
                        span Descargar
                        i.fas.fa-file-download

    Separador

    #t_7_1
    .titulo-segundo.color-acento-contenido
      h2 7.1 Instalación y configuración

    p.mb-4 Para la instalación del programa, se deben seguir los siguientes pasos: 

    .tarjeta.fondo-slider2.mb-4
      SlyderA.tema-7(tipo="b")
        .row.justify-content-end.align-items-center           
          .col-md-7.pt-5
            figure
              img(src='@/assets/curso/tema7-1-slide1.svg', alt='slide 1')
          .col-md-4.mb-0  
            figure
              img(src='@/assets/curso/tema7-1-derecha.svg', alt='imagen decorativa')
        .row.justify-content-center.align-items-center           
          .col-md-4.mb-0  
            figure
              img(src='@/assets/curso/tema7-1-izquierda.svg', alt='imagen decorativa')
          .col-md-7.pt-5
            figure
              img(src='@/assets/curso/tema7-1-slide2.svg', alt='slide 2')

        .row.justify-content-end.align-items-center           
          .col-md-7.pt-5
            figure
              img(src='@/assets/curso/tema7-1-slide3.svg', alt='slide 3')
          .col-md-4.mb-0  
            figure
              img(src='@/assets/curso/tema7-1-derecha.svg', alt='imagen decorativa')
        .row.justify-content-center.align-items-center           
          .col-md-4.mb-0  
            figure
              img(src='@/assets/curso/tema7-1-izquierda.svg', alt='imagen decorativa')
          .col-md-7.pt-5
            figure
              img(src='@/assets/curso/tema7-1-slide4.svg', alt='slide 4')  

        .row.justify-content-end.align-items-center           
          .col-md-7.pt-5
            figure
              img(src='@/assets/curso/tema7-1-slide5.svg', alt='slide 5')
          .col-md-4.mb-0  
            figure
              img(src='@/assets/curso/tema7-1-derecha.svg', alt='imagen decorativa')
        .row.justify-content-center.align-items-center           
          .col-md-4.mb-0  
            figure
              img(src='@/assets/curso/tema7-1-izquierda.svg', alt='imagen decorativa')
          .col-md-7.pt-5
            figure
              img(src='@/assets/curso/tema7-1-slide6.svg', alt='slide 6')     

        .row.justify-content-end.align-items-center           
          .col-md-7.pt-5
            figure
              img(src='@/assets/curso/tema7-1-slide7.svg', alt='slide 7')
          .col-md-4.mb-0  
            figure
              img(src='@/assets/curso/tema7-1-derecha.svg', alt='imagen decorativa')
        .row.justify-content-center.align-items-center           
          .col-md-4.mb-0  
            figure
              img(src='@/assets/curso/tema7-1-izquierda.svg', alt='imagen decorativa')
          .col-md-7.pt-5
            figure
              img(src='@/assets/curso/tema7-1-slide8.svg', alt='slide 8')      

        .row.justify-content-end.align-items-center           
          .col-md-7.pt-5
            figure
              img(src='@/assets/curso/tema7-1-slide9.svg', alt='slide 9')
          .col-md-4.mb-0  
            figure
              img(src='@/assets/curso/tema7-1-derecha.svg', alt='imagen decorativa')
        .row.justify-content-center.align-items-center           
          .col-md-4.mb-0  
            figure
              img(src='@/assets/curso/tema7-1-izquierda.svg', alt='imagen decorativa')
          .col-md-7.pt-5
            figure
              img(src='@/assets/curso/tema7-1-slide10.svg', alt='slide 10')                 
                
        .row.justify-content-end.align-items-center           
          .col-md-7.pt-5
            figure
              img(src='@/assets/curso/tema7-1-slide11.svg', alt='slide 11')
          .col-md-4.mb-0  
            figure
              img(src='@/assets/curso/tema7-1-derecha.svg', alt='imagen decorativa')


    Separador

    #t_7_2
    .titulo-segundo.color-acento-contenido
      h2 7.2 Uso de la herramienta SOAP UI

    .row.justify-content-center.fondo1-tema2
      .col-12.col-lg-4.mb-4.mb-lg-0.mt-0
        figure
          img.mt-0(src='@/assets/curso/tema7-2-img1.jpg' alt='Uso de la herramienta SOAP UI')
      .col-lg-8.pb-3.px-lg-5
        .row.align-items-center.justify-content-center.neg--right.mb-4.pt-3(data-aos="fade-left")
          .col-lg-12.bg-blanco.p-3.pb-lg-5
            p Para probar un servicio web existente, se utilizan recursos y directorios <em>web service</em> que se pueden acceder de manera libre, o diferentes páginas que proveen servicios, como almacenes, bibliotecas, supermercados, etc.
            p.mb-0 Para esto, es necesario saber qué tipo de proyecto se utilizará en SOAP UI, si es REST o SOAP.
        .row.align-items-center.justify-content-center.mb-3
          .col-lg-12.neg--top2.mb-4
            .tarjeta.bg-degrade.p-3.mb-3
              .row.align-items-center
                .col
                  .row.justify-content-between.align-items-center
                    .col.mb-3.mb-sm-0
                      h4.mb-2 REGRES.IN
                      p.mb-0 Para este caso en particular, se utilizará una página, haga clic aquí.
                    .col-sm-auto
                      a.boton.color-acento-botones(href="https://regres.in/" target="_blank")
                        span Ver
                        i.fas.fa-link   
            .tarjeta.bg-degrade.p-3.mb-3
              .row.align-items-center
                .col
                  .row.justify-content-between.align-items-center
                    .col.mb-3.mb-sm-0
                      h4.mb-2 LOCAL HOST
                      p.mb-0 Se realizará la prueba con el ejercicio que se desarrolló, haga clic aquí.
                    .col-sm-auto
                      a.boton.color-acento-botones(href="http://localhost/trabajo/cliente/index.php" target="_blank")
                        span Ver
                        i.fas.fa-link       
            .tarjeta.bg-degrade.p-3
              .row.align-items-center
                .col
                  .row.justify-content-between.align-items-center
                    .col.mb-3.mb-sm-0
                      h4.mb-2 SOAP UI
                      p.mb-0 Funcionamiento de la herramienta SOAP UI, haga clic aquí.
                    .col-sm-auto
                      a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=t6LO87jW_QE" target="_blank")
                        span Ver
                        i.fas.fa-link                           
          .col-lg-12
            p Ha llegado al final de este componente formativo, pero, antes de concluir, realice esta actividad: 
            .tarjeta.bg-degrade.p-3
              .row.justify-content-around.align-items-center
                .col-3.col-sm-2.col-lg-2.px-lg-4
                  img.px-lg-2(src="@/assets/curso/actividad-img.svg")
                .col
                  .row.justify-content-between.align-items-center
                    .col.mb-3.mb-sm-0.text-white
                      h4.mb-2 Actividad didáctica 2
                      p.text-small Póngase a prueba, es hora de responder la siguiente actividad, ¡adelante!
                    .col-sm-auto
                      a.boton.color-acento-botones(:href="obtenerLink('/actividades/actividad2/actividad.html')" target="_blank")
                        span Ver
                        i.fas.fa-link





</template>

<script>
export default {
  name: 'Tema7',
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
