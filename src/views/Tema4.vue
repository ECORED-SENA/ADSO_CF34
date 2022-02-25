<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span.text-white 4
      h1 Creación de servicios

    .row.justify-content-center.fondo1-tema4.mb-4
      .col-12.col-lg-5.mb-4.mb-lg-0.mt-0
        figure
          img.mt-0(src='@/assets/curso/tema4-img1.jpg' alt='Creación de servicios')
      .col-lg-7.pb-4
        .row.align-items-center.justify-content-center.tarjeta--azulRey.neg--right.mb-4.mt-3(data-aos="fade-left")
          .col-lg-11
            figure.mb-0
              img(src='@/assets/curso/comilla.svg').img-position2
            p.text-white Indican que es una tecnología que establece unos estándares y protocolos que se utilizan para intercambiar datos entre distintas aplicaciones, plataformas y con diferentes o iguales lenguaje de programación. Por lo general, se utilizan estándares abiertos, lo que comúnmente se llama interoperabilidad; las organizaciones OASIS y W3C son los comités responsables de la arquitectura y la reglamentación de los servicios web.
            .row.mb-4
              .col-12.d-inline-flex.justify-content-end.align-items-center
                p.mb-0.text-white <b>Sayago et al. (2019)</b>
                .cuadro
        p Los mismos autores hacen notar que su función es permitir que los dispositivos interactúen entre sí y presenten información dinámica al usuario, con base en una arquitectura de referencia estándar, que hace posible su combinación para realizar integraciones entre las mismas aplicaciones.        

    .desborde.mb-4
      .h2.fit-content.text-white.px-lg-5.px-4.py-2 CREACIÓN DE SERVICIOS

    p.mb-5  Para la creación de servicios, se debe seguir el siguiente proceso: 

    .tarjeta.fondo-slider.p-4.mb-4
      SlyderA(tipo="b")
        .row.justify-content-center.align-items-center
          .col-md-4.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/tema4-slide1.svg', alt='Desarrollo de servicios')
          .col-md-6.bg-num1.pt-5
            h4 Desarrollo de servicios
            p.mb-0 Se hace en la parte de servicios o en la nube, a este tipo de desarrollo también se le conoce con el nombre de <em><b>backend</b></em>. Esta parte de la programación no es visible para el usuario y no se ejecuta en los dispositivos o navegadores del cliente. Aquí es donde se provee el servicio para que los clientes lo consuman (Recalde, 2019).
        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0.bg-num2.pt-5
            h4 Ejecución de servicios
            p.mb-0 Una vez creado el servicio, está listo para ser ejecutado en el servidor, a la espera de que un usuario o cliente solicite información. Hay que recordar que la aplicación del cliente que solicita el servicio puede estar programada en el mismo lenguaje o en uno diferente, en esto consiste la dinámica del <em>web service</em>. La ejecución del servicio hace referencia al intercambio de datos; se resalta que actualmente se utilizan  SOAP y RESTful, los cuales se diferencian por sus estándares  (Bianco, 2005).
          .col-md-4
            figure
              img(src='@/assets/curso/tema4-slide2.svg', alt='Ejecución de servicios')
        .row.justify-content-center.align-items-center
          .col-md-4.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/tema4-slide3.svg', alt='Consumo de servicios')
          .col-md-6.bg-num3.pt-5
            h4 Consumo de servicios
            p.mb-0 El anterior autor hace referencia a que, una vez el servicio es creado, es el turno de los usuarios para consumirlo, por lo cual se desarrollan o programan aplicaciones del lado del <em>Frontend</em> para consumir dichos servicios; esto consiste en la conversión de datos en una interfaz gráfica, para que el usuario pueda ver e interactuar con la información. 


</template>

<script>
export default {
  name: 'Tema4',
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
