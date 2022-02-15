<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span.text-white 6
      h1 Servicios en PHP 

    .row.fondo1-tema6.mb-5
      .col-lg-12.px-lg-5
        .row.justify-content-center.mt-0
          .col-lg-12.mt-0
            figure
              img(src='@/assets/curso/tema6-banner.svg' alt='Servicios en PHP')
          .col-lg-10.bg-degrade2.borde-redondo.neg--top.mb-5
            .row.align-items-center.justify-content-center.py-4.px-3
              .col-lg-3.col-6.mb-4.mb-lg-0
                figure
                  img(src='@/assets/curso/tema6-img1.svg' alt='PHP')
              .col-lg-9
                p.mb-0 PHP es uno de los lenguajes de código abierto más utilizados y adecuados para el desarrollo de aplicaciones y servicios web, este puede ser introducido en HTML. Por el hecho de ser un lenguaje gratuito, millones de páginas y portales web están creados con PHP. Su función es muy sencilla: el usuario utiliza aplicaciones o navegadores para realizar una solicitud a un servidor, el servidor recibe la petición, organiza la información que le solicitan y responde enviando la consulta por medio de una página web o aplicación “normal”, pero su creación es “dinámica”.
          .col-lg-9.mb-4
            .titulo-sexto.color-acento-contenido
              h5 Tabla 2. 
              span PHP
            .tabla-a.color-acento-botones 
              table
                thead
                  tr
                    th.tabla2 Páginas estáticas
                    th.tabla2 Petición
                    th.tabla2 Respuesta
                tbody
                  tr.bg-blanco
                    td.tabla2 Páginas dinámicas 
                    td.tabla2 Petición
                    td.tabla2 Procesa, prepara y da respuesta     

    .desborde.mb-5.text-center
      .h2.text-white.px-lg-5.px-4.py-2 El proceso de los servicios PHP está estructurado de la siguiente manera: 

    .row.fondo2-tema6.mb-5
      BotonesB


    .row.justify-content-center
      .col-lg-10
        .tarjeta.color-primario.p-3.mb-5
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-2.px-lg-4
              img.px-lg-2(src="@/assets/curso/actividad-img.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h4.mb-2 Ejercicio práctico creación de servicios web
                  p.text-small En el siguiente ejercicio, se observarán en detalle los temas que se han abordado en cuanto a servicios web. Se trabajará desde el punto de vista del creador de servicios y el cliente o consumidor de servicios: 
                  .row.justify-content-center
                    .col-lg-10
                      ul.lista-ul.mb-0
                        li.mb-0 
                          i.fas.fa-layer-group(style='color: #FFA726')
                          p.text-small.mb-0 XAMPP
                        li.mb-0
                          i.fas.fa-layer-group(style='color: #FFA726')
                          p.text-small.mb-0 Editor de código fuente de licencia libre como = Notepad++ o NetBeans
                        li
                          i.fas.fa-layer-group(style='color: #FFA726')
                          p.text-small.mb-0 Navegador web = Chrome o Internet Explorer    
                .col-sm-auto
                  a.boton.color-acento-botones(:href="obtenerLink('/downloads/OKEst_Anexo4_EjercicioServiciosWeb.pdf')" target="_blank")
                    span Descargar
                    i.fas.fa-file-download




</template>

<script>
import BotonesB from '../components/BotonesB.vue'
export default {
  name: 'Tema6',
  components: {
    BotonesB,
  },
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
