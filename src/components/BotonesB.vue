<template lang="pug">
.btns
  .row.justify-content-center
    .col-md-8
      img(src='@/assets/curso/tema6-fondo-botones.svg', alt='El proceso de los servicios PHP')
  .btns__item(
    v-for="(boton, index) in botones"
    :style="getStyles(boton, index)"
    :class="[`btns_item--${index}`]"
    @mouseover="hover = index"
    @mouseleave="hover = null"
  )
    .indicador--hover(v-if="index === 0 && indicador")
    .btns__text(v-if="index === hover")  
      h4.text-center.p-2 {{boton.titulo}}
      p.text-center.px-lg-4.px-3 {{boton.contenido1}}
      h5.text-center.mb-0.px-lg-4.px-3 {{boton.subtitulo}}
      p.text-center.mb-0.px-lg-4.px-3.pb-4 {{boton.contenido2}}


</template>

<script>
export default {
  name: 'BotonesB',
  data: () => ({
    indicador: true,
    hover: null,
    size: '5.5%',
    botones: [
      {
        img: require('@/assets/curso/tema6-boton1_1.svg'),
        img_h: require('@/assets/curso/tema6-boton1_2.svg'),
        pos_x: '25%',
        pos_y: '40.5%',
        numero: 'item-1',
        titulo: 'Creación de servicios en PHP',
        contenido1:
          'Los servicios web son una integración de aplicaciones web, básicamente se trata de un servidor que expone un segmento de su funcionalidad para que sus clientes, “dispositivos, aplicaciones, computadores u otros servidores”, utilicen sus servicios. En su gran mayoría, los servicios se constituyen en JavaScript, que también es un lenguaje de programación, pero igualmente funciona de buena manera con PHP.',
      },
      {
        img: require('@/assets/curso/tema6-boton2_1.svg'),
        img_h: require('@/assets/curso/tema6-boton2_2.svg'),
        pos_x: '47%',
        pos_y: '40.5%',
        numero: 'item-2',
        titulo: 'Implementación de servicios en PHP',
        contenido1:
          'García (2003) describe que, para que un cliente tenga acceso a la información de un servicio, lo implemente y active el método en el servidor, hay un sistema de catálogo que, de manera predeterminada, efectúa todos los servicios web y sus métodos; de esta forma, con las credenciales adecuadas, un cliente tiene acceso a todas las funciones de los servicios web.',
        contenido2:
          'Este autor también refiere que, al momento de implementar un servicio web, se actualiza el WSDL, “archivo de Lenguaje de Descripción de Servicios Web”. Hay que recordar que cada servicio web tiene su propio WSDL, el cual contiene información sobre los servicios implementados en ese momento y también las firmas de métodos.',
      },
      {
        img: require('@/assets/curso/tema6-boton3_1.svg'),
        img_h: require('@/assets/curso/tema6-boton3_2.svg'),
        pos_x: '68%',
        pos_y: '40.5%',
        numero: 'item-3',
        titulo: 'Consumo de métodos',
        contenido1:
          'El consumo de un servicio, en este caso en RESTFul, es tan sencillo como enviar un pedido en HTTP y procesar su respuesta.',
        subtitulo: 'Ejemplo: ',
        contenido2:
          '<?php $res = file_get_contents(“https://www.sena.edu.co/es-co/formacion/Paginas/Estudie-en-el-SENA.aspx”);',
      },
    ],
  }),
  watch: {
    selected() {
      this.indicador = false
    },
    hover() {
      this.indicador = false
    },
  },
  methods: {
    getStyles(boton, index) {
      const image = this.hover === index ? boton.img_h : boton.img
      return {
        'background-image': `url(${image})`,
        top: boton.pos_y,
        left: boton.pos_x,
        width: this.size,
        'padding-top': this.size,
      }
    },
  },
}
</script>

<style lang="sass" scoped>

.btns_item--0 h4
  color: #fff
  background-color: #1565C0
.btns_item--1 h4
  background-color: #FED047
.btns_item--2 h4
  color: #fff
  background-color: #1565C0

.btns
  position: relative
  height: 600px
  &__item
    position: absolute
    background-size: contain
    background-repeat: no-repeat
    background-position: center
    cursor: pointer
    transition: background-image 0.2s ease-in-out
  &__text
    position: absolute
    top: 110%
    left: 50%
    background-color: #F7F7F7
    border-bottom-left-radius: 15px
    border-bottom-right-radius: 15px
    width: 550px
    z-index: 100
    line-height: 1.2em
    transform: translate(-50%)
    box-shadow: 0px 0px 4px #959494
    p
      line-height: 1.2em
@media (max-width: $bp-max-md)
  .btns__item
    width: 3.5% !important
    padding: 3.5%

  .btns_item--0
    top: 22% !important
    left: 25.1% !important
  .btns_item--1
    top: 22% !important
    left: 46% !important
  .btns_item--2
    top: 22% !important
    left: 67% !important

  .btns__text
    width: 320px
  .btns_item--0 .btns__text
    left: 180% !important
  .btns_item--1 .btns__text
    left: 90%
  .btns_item--2 .btns__text
    left: 10%
</style>
