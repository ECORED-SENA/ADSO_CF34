<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span.text-white 2
      h1 Clases y objetos
    
    .row.justify-content-center.fondo1-tema2
      .col-12.col-lg-4.mb-4.mb-lg-0.mt-0
        figure
          img.mt-0(src='@/assets/curso/tema2-img1.svg' alt='Clases y objetos')
      .col-lg-8.pb-5.px-lg-5
        .row.align-items-center.justify-content-center.neg--right.mb-4.pt-3(data-aos="fade-left")
          .col-lg-11.bg-blanco.p-3
            p.mb-0 Las clases son contenedores de información basados en atributos y en métodos de construcción, los cuales pueden modificar y consultar; son suficientes para representar objetos con los cuales se procesa información, y se usan para hacer objetos que tienen un mismo comportamiento, estado e identidad.
        .row.justify-content-center.align-items-center
          h3 Ejemplo 2: 
          p Se tiene una clase “personas” (Mario, Margarita y Alejandro), donde el comportamiento de las personas es leer, trabajar, jugar, etc.; pueden estar en estado despierto o dormido; sus propiedades pueden ser color de ojos, género, estado civil, etc.
          p Su sintaxis sería así:
          p.mb-0 class Persona { 
          p.mb-0 # Propiedades 
          p.mb-0 # Métodos 
          p }
        .row.bg-degrade
          .col-md-2.bg-blanco.bg-tarjeta-icono
            figure
              img.p-md-3(src='@/assets/curso/tema2-img2.svg' alt='Clases y objetos')
          .col-md-10.p-md-3
            p 
              strong Objeto: 
              span.text-white el objeto es una instancia de una clase, la cual puede crear varias instancias de la misma clase.
            p.mb-0
              strong Ejemplo: 
              span.text-white existe una sola clase “Persona”, pero muchos objetos de tipo persona pueden ser instancias de esta clase.

    .row.fondo2-tema2.justify-content-center.pt-5
      .col-lg-6
        h2.text-center A continuación, observe la diferencia entre clases y objetos con una analogía:
      .col-lg-9.pt-3#menu1
        .row.justify-content-center.img-position2
          .col-3
            a(href="#1A")
              figure.efect1
                img.mb-3(src="@/assets/curso/tema2-hover1.svg", style="width:170px").m-auto
              h4.bg-azul.centrado.text-white Analogía  
          .col-3
            a(href="#2A")
              figure.efect1
                img.mb-3(src="@/assets/curso/tema2-hover2.svg", style="width:170px").m-auto
              h4.bg-azul.centrado.text-white Ejemplo   
          .col-3
            a(href="#3A")
              figure.efect1
                img.mb-3(src="@/assets/curso/tema2-hover3.svg", style="width:170px").m-auto
              h4.bg-azul.centrado.text-white Resultado   

    #1A
    br
    .row.py-4.align-items-center.justify-content-between
      .col-4
        h4.bg-azul.text-white Analogía 
      .col-2
        a(href="#menu1")
          figure.efect1
            img(src="@/assets/curso/flecha.svg", style="width:50px").m-auto
    .row.tarjeta--container 
        .col-md-6.tarjeta.color-acento-contenido.p-5
          .row.justify-content-center.mb-4
            .col-4
              figure
                img(src='@/assets/curso/tema2-tarj1.svg', alt='Una clase')
          h2.text-center Una clase
          p.text-center Es como el plano de un apartamento, este define la forma del apartamento sobre el papel, con las relaciones entre las diferentes partes claramente definidas y planeadas, a pesar de que el apartamento no exista.
        .col-md-6.tarjeta.bg-gris3.p-5
          .row.justify-content-center.mb-4
            .col-4
              figure
                img(src='@/assets/curso/tema2-tarj2.svg', alt='Un objeto')
          h2.text-center Un objeto
          p.text-center El apartamento real construido de acuerdo a ese modelo; es decir, un objeto es una instancia de la clase.
          
    .separador2.mt-5

    #2A
    br
    .row.py-4.align-items-center.justify-content-between
      .col-4
        h4.bg-azul.text-white Ejemplo 
      .col-2
        a(href="#menu1")
          figure.efect1
            img(src="@/assets/curso/flecha.svg", style="width:50px").m-auto
    .row
      .col-lg-7
        p En el siguiente ejemplo, se observará el código de un objeto. 
        p El símbolo “//” quiere decir que no hace parte del código, se lo utiliza para hacer comentarios sobre el código, por lo cual, se pone en color azul.
        .row.justify-content-center
          .col-10
            figure
              img(src='@/assets/curso/tema2-codigo.svg', alt='Código')
      .col-lg-5 
        figure
          img(src='@/assets/curso/tema2-img3.svg', alt='Imagen decorativa')

    .separador2.mt-5

    #3A
    br
    .row.py-4.align-items-center.justify-content-between
      .col-4
        h4.bg-azul.text-white Resultado 
      .col-2
        a(href="#menu1")
          figure.efect1
            img(src="@/assets/curso/flecha.svg", style="width:50px").m-auto
    .row.justify-content-center
      .col-lg-12
        p Si se corriera el código, daría este resultado.
      .col-lg-10
        figure
          img(src='@/assets/curso/tema2-img4.svg', alt='Resultado')





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
