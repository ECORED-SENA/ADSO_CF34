<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span.text-white 1
      h1 Métodos o funciones
    
    .row.align-items-center.mb-4
      .col-lg-6(data-aos="fade-right")
        figure
          img.mx-auto(src='@/assets/curso/tema1-img1.jpg' alt='Métodos o funciones')
      .col-lg-6(data-aos="fade-left")
        .bg-gris.neg--right.p-lg-4.p-4
          p.mb-0 
            strong.resaltado-contenido De acuerdo con Gonzáles y Pelissier (2002), 
            | los métodos o funciones permiten segmentar el trabajo que hace un programa en subtareas o tareas más pequeñas, enfocadas en un fin específico, y se pueden utilizar cuantas veces se necesite; estas están separadas del programa principal, pero aportan a su objetivo.

    .row.mb-5(data-aos="fade-down")
      .cajon.color-acento-botones.p-4
        p.mb-0 El uso de funciones da la capacidad de agrupar varias instrucciones de código bajo un solo nombre, y con el nombre de la función, es posible invocarlo las veces que se necesite, permitiendo usar esta función las veces que sean necesarias.

    .row.align-items-center
      .col-lg-5.mb-4(data-aos="fade-right")
        figure
          img(src='@/assets/curso/tema1-img2.svg' alt='Métodos o funciones')
      .col-lg-7.mb-4(data-aos="fade-left")
        h3 Ejemplo 1: 
        p La función se define con la siguiente sintaxis:
        .cajon.color-primario.p-4.mb-4
          p.mb-0 <b>Nota:</b> el símbolo “//” quiere decir que no hace parte del código, se lo utiliza para hacer comentarios sobre el código, por lo cual se pone en color azul.
        .row.bg-gris2.mx-1.px-3
          .col-lg-1.pt-3
            strong 1
          .col-lg-11.border-left.pt-3
            p.mb-0 &lt;?php
          .col-lg-1
            strong 2
          .col-lg-11.border-left
            p.mb-0 function media_aritmetica($a, $b){  //Aquí definimos la función y la llamamos media_arimetica y las variables a y b 
          .col-lg-1
            strong 3
          .col-lg-11.border-left
            p.mb-0 $media=($a+$b)/2;		 //escribimos la fórmula de la media, en este caso de 2 números divididos entre 2
          .col-lg-1
            strong 4
          .col-lg-11.border-left
            p.mb-0 return $media;			 // aquí la función retorna el valor de la media
          .col-lg-1
            strong 5
          .col-lg-11.border-left
            p.mb-0  }
          .col-lg-1
            strong 6
          .col-lg-11.border-left
            p.mb-0 echo media_aritmetica(7,9),”&lt;br&gt;”; // aquí ingresamos los números, en este caso 7 y 9
          .col-lg-1.pb-3
            strong 7
          .col-lg-11.border-left.pb-3
            p.mb-0 echo media_aritmetica(300,500),”&lt;br&gt;”; ?> //aquí ingresamos otros dos números 300 y 500   

    .row.fondo1
      .col-lg-12.px-lg-5
        .row.justify-content-center.align-items-center
          .col-lg-7.mb-3(data-aos="fade-right")
            p La función arroja como resultados los números 8 y 400.
            p En el ejemplo anterior, se observa la sintaxis de una función que arroja la media aritmética de dos o más números, pero es necesario recordar qué es la media aritmética. Según Paz (s. f.), “La media aritmética o promedio simple se calcula sumando los valores de interés y dividiendo entre el número de valores sumados”. Para el anterior caso, se suman 2 números y el resultado se divide entre 2, así:
            .row.justify-content-center
              .col-lg-4.texto-cursivo.text-center
                p.mb-0
                  span.raya-abajo.mb-0 ($<em>a</em> + $<em>b</em>) 
                  br
                  span.mb-0 2
          .col-lg-5.mb-3(data-aos="fade-left")
            figure
              img(src='@/assets/curso/tema1-img3.jpg' alt='Métodos o funciones')
          .col-lg-12
            .cajon.color-acento-botones.p-4
              p.mb-0 Los autores, además, dicen que estos tienen 3 tipos de visibilidad: <b>Public “Pública”, Private “Privada”, o Protected “Protegidas”</b>, si no se especifica, se sobreentiende que es privada.




  
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
