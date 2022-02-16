<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span.text-white 3
      h1 Integración de aplicaciones (XML, SOAP, WSDL y UDDI)

    .row.justify-content-center.fondo1-tema3
      .col-12.col-lg-5.mb-4.mb-lg-0.mt-0
        figure
          img.mt-0(src='@/assets/curso/tema3-img1.jpg' alt='Integración de aplicaciones (XML, SOAP, WSDL y UDDI)')
      .col-lg-7.pb-4.px-lg-5
        .row.align-items-center.justify-content-center.neg--right.mb-4.pt-3(data-aos="fade-left")
          .col-lg-12.bg-blanco.p-3.pb-lg-5
            p.mb-0 Los servicios web permiten la nueva generación de aplicaciones basadas en Internet. Estos servicios admiten la comunicación de Internet de aplicación a aplicación, es decir, las aplicaciones en diferentes ubicaciones de la red se pueden integrar para funcionar como si fueran parte de un único sistema de software grande. Ejemplos de aplicaciones que los servicios web hacen posibles incluyen transacciones comerciales automatizadas y acceso directo (sin navegador) a dispositivos de escritorio y de mano, a las reservas, el comercio de acciones y los sistemas de seguimiento de pedidos.
        .row.align-items-center.justify-content-center
          .col-lg-12
            p Han surgido varios estándares clave que, juntos, forman la base de los servicios web: XML (Extensible Markup Language), WSDL (Web Services Definition Language), SOAP (Simple Object Access Protocol) y UDDI (Universal Description, Discovery, and Integration). Además, se ha especificado ebXML (Electronic Business XML) para facilitar la integración automatizada de procesos comerciales entre socios comerciales.

    Separador

    #t_3_1
    .titulo-segundo.color-acento-contenido
      h2 3.1 XML “Extensible Markup Language”

    .row.d-flex.mb-5
      .col-md-3.bg-blanco.bg-shadow.centrar-imagen
        figure.p-3
          img(src='@/assets/curso/tema3-1-img1.svg' alt='XML', style="width:130px")
      .col-md-9  
        .row.align-items-center.justify-content-center.tarjeta--azulRey(data-aos="fade-left")
          .col-lg-12
            figure.mb-0
              img(src='@/assets/curso/comilla.svg').img-position2
            .row.align-items-center.justify-content-center
              .col-lg-9
                p.text-white XML (Extensible Markup Language) es un lenguaje de marcas que define un conjunto de reglas para la codificación de documentos, se utiliza para estructurar información en cualquier fichero que contenga texto y es muy usado en el medio, debido a que es un estándar abierto y libre, creado por el consorcio World Wide Web, W3C. 
            .row.mb-4
              .col-11.d-inline-flex.justify-content-end.align-items-center
                p.mb-0.text-white <b>Según Bianco (2005)</b>
                .cuadro

    .row.mb-4
      .col-lg-7.mb-4(data-aos="fade-right")
        p Además, argumenta que el lenguaje XML proporciona una estructura para definir elementos, crear un formato y generar un lenguaje personalizado. Estos archivos están conformados en dos partes prolog y body:
        .row
          .col-md-6.col-lg.mb-4.mb-lg-0
            .tarjeta-avatar
              img(src='@/assets/curso/tema3-1-tarj1.svg' alt='AvatarTop')
              .tarjeta.bg-gris3.bg-shadow.linea-decoracion
                .text-center.p-3
                  h4 PROLOG
                  p Son metadatos administrativos, como declaración XML, instrucción de procesamiento opcional, declaración de tipo de documento y comentarios.
          .col-md-6.col-lg.mb-4.mb-lg-0
            .tarjeta-avatar
              img(src='@/assets/curso/tema3-1-tarj2.svg' alt='AvatarTop')
              .tarjeta.bg-gris3.bg-shadow.linea-decoracion
                .text-center.p-3
                  h4 BODY
                  p Se compone de dos partes: estructural y de contenido (presente en los textos simples).
      .col-lg-5.mb-4(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema3-1-img2.jpg' alt='Imagen decorativa')

    .row.mb-5(data-aos="fade-down")
      .col-lg-12
        .cajon.color-acento-botones.p-4
          p.mb-0 El XML es de simple uso, por lo cual se utiliza para varios servicios web, haciendo posible una forma independiente de almacenar datos para que puedan ser compartidos por diferentes aplicaciones, logrando una óptima compatibilidad entre dispositivos.

    .row.justify-content-center.fondo1-tema2.mb-5
      .col-12.col-lg-4.mb-4.mb-lg-0.mt-0
        figure
          img.mt-0(src='@/assets/curso/tema3-1-img3.jpg' alt='Imagen decorativa')
      .col-lg-8.pb-4.px-lg-5
        .row.align-items-center.justify-content-center.neg--right.mb-4.pt-3(data-aos="fade-left")
          .col-lg-12.bg-blanco.p-3.pb-lg-5
            p.mb-0 El mismo autor afirma que el Prólogo va en la primera línea de código, aquí se declara que el documento es XML y qué versión se está utilizando. Vea el siguiente ejemplo: 
        .row.align-items-center.justify-content-center
          .col-lg-12
            h4 Ejemplo 3: 
          .col-lg-11.bg-celeste.py-3.px-3.mb-2
            p.mb-0 <b>&lt;?xml version=“1.0”?&gt;</b> “Declaración normal, sirve para cualquier documento, solo especifica la versión”  
          .col-lg-11.bg-celeste.py-3.px-3.mb-4
            p.mb-0 <b>&lt;?xml versión= “1.0” encoding= “ISO-8859-1” standalone= “yes”?&gt;</b> “Aquí está la versión y también se agrega el tipo de codificación y el Standalone, que se refiere a que es un documento autónomo”
          .col-lg-12
            p En el cuerpo es donde va la programación. Hay que tener en cuenta un elemento principal llamado raíz, dentro del cual se encuentran el resto de los elementos. Este elemento es el “padre” de todos los demás elementos, y de él se derivan las ramas del árbol hasta el nivel más bajo.
            p Hay que tener en cuenta que XML es muy diferente de HTML, por ejemplo: 

    .row.justify-content-center(data-aos="fade-down")    
      .col-lg-9.mb-5
        .titulo-sexto.color-acento-contenido
          h5 Tabla 1. 
          span Diferencias XML-HTML
        .tabla-a.color-acento-contenido 
          table
            thead
              tr
                th.tabla1 XML
                th.tabla1 HTML
            tbody
              tr.bg-blanco
                td 
                  p &lt;libro&gt;
                    br
                    span.px-2 &lt;autor&gt;Mario Meneses&lt;/autor&gt;
                    br
                    span.px-2 &lt;titulo&gt;Guía de Aprendizaje XML &lt;/titulo&gt; 
                    br
                    span.px-2 &lt;precio moneda=“pesos”&gt;100.000 &lt;/precio&gt; 
                    br
                    | &lt;/libro&gt;
                td 
                  p &lt;b&gt;Mario Meneses&lt;/b&gt;
                    br
                    | &lt;b&gt;&lt;i&gt;Guía de Aprendizaje XML&lt;/i&gt;&lt;/b&gt;
                    br
                    | &lt;b&gt;precio: 100.000 $ &lt;/b&gt;
              tr.bg-gris2
                td.strong XML Utiliza etiquetas para definir el contenido y significado de esta información. 
                td.strong HTML se centra en colocar etiquetas para representar información.

    
    p.mb-4 Para hacer un XML, se debe tener en cuenta la estructura de árbol, la cual es jerárquica; debe haber un elemento raíz y que de este se desprendan todos los demás, estos no se pueden superponer entre ellos, al contrario, deben estar anidados, por ejemplo, de la siguiente forma:







    Separador

    #t_3_2
    .titulo-segundo.color-acento-contenido
      h2 3.2 SOAP “Simple Object Access Protocol”

    .row.mb-5.justify-content-center
      .col-lg-12
        figure
          img(src='@/assets/curso/tema3-2-img1.jpg' alt='SOAP “Simple Object Access Protocol”')
      .col-lg-10.bg-naranja.borde-redondo.neg--top.p-4          
        p.mb-0 SOAP es un acrónimo de Protocolo Simple de Acceso a Objetos. Es un protocolo de mensajería, basado en XML, para intercambiar información entre computadoras, y es una aplicación de la especificación XML. Profundice con el siguiente video:   

    figure(data-aos="fade-down")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    Separador

    #t_3_3
    .titulo-segundo.color-acento-contenido
      h2 3.3 WSDL “Lenguaje de Descripción de Servicios Web” 

    .row.justify-content-center.fondo1-tema4.mb-5
      .col-12.col-lg-5.mb-4.mb-lg-0.mt-0
        figure
          img.mt-0(src='@/assets/curso/tema3-3-img1.jpg' alt='WSDL “Lenguaje de Descripción de Servicios Web” ')
      .col-lg-7.pb-5
        .row.align-items-center.justify-content-center.tarjeta--azulRey.neg--right.mb-4.mt-3(data-aos="fade-left")
          .col-lg-12
            figure.mb-0
              img(src='@/assets/curso/comilla.svg').img-position2
          .col-lg-9  
            p.text-white.mb-4 Según Gutiérrez (2016), “es un lenguaje por medio del cual un servicio web describe, entre otras cosas, qué hace o qué funcionalidad implementa. Es el lenguaje de la interfaz pública para los servicios web. Es una descripción basada en XML de los requisitos funcionales necesarios para establecer una comunicación con los servicios web”.
        h3 Estructura de WSDL
        p Este archivo tiene una estructura jerárquica, por lo tanto, la información está anidada; tiene dos tipos de descripciones:
        .row.justify-content-center
          .col-lg-10
            .tarjeta-avatar-b.mb-3
              .tarjeta-avatar-b__img
                img(src='@/assets/curso/tema3-2-tarj1.svg' alt='Descripciones abstractas')
              .tarjeta.bg-blanco
                .p-4
                  h4 Descripciones abstractas
                  p Se refiere a la funcionalidad del servicio.
            .tarjeta-avatar-b
              .tarjeta-avatar-b__img
                img(src='@/assets/curso/tema3-2-tarj2.svg' alt='Descripciones concretas')
              .tarjeta.bg-blanco
                .p-4
                  h4 Descripciones concretas
                  p Comunican datos específicos, como el protocolo de transmisión.       

    
    .row.fondo1-tema3-3
      .col-lg-12.px-lg-5.mb-lg-5
        .row.justify-content-center.mt-0.mb-lg-4
          .col-lg-12
            p.mb-4 El mismo autor resalta que WSDL recurre a 6 elementos principales:
          .row
            .col-lg-7.mb-4
              LineaTiempoD.color-primario
                p.text-small(numero="1" titulo="Types") Tipos de datos.            
                p.text-small(numero="2" titulo="Message") Descripción de los datos a transferir.
                p.text-small(numero="3" titulo="Interface") Operaciones abstractas que describen la comunicación entre el servidor y el cliente (aún se llamaba portType en una versión anterior del estándar).
                p.text-small(numero="4" titulo="Binding") Información sobre el protocolo de transporte utilizado.
                p.text-small(numero="5" titulo="Endpoint") Información sobre la interfaz de comunicación, generalmente, en forma de un URI (aún se denominaba port en una versión anterior del estándar). 
                p.text-small(numero="6" titulo="Service") Puntos de acceso del servicio web. 
            .col-lg-5.mb-4
              img(src='@/assets/curso/tema3-3-img2.svg' alt='Imagen decorativa')
    
    .row.align-items-center.justify-content-center.neg--top2    
      .col-lg-12
        .cajon.color-acento-botones.p-4
          p.mb-0 Por medio del WSDL, el cliente tiene toda la información necesaria para acceder a un servicio web, el beneficio es que todos los sistemas poseen el mismo lenguaje, lo que hace que los servicios web sean multiplataforma.

    Separador

    #t_3_4
    .titulo-segundo.color-acento-contenido
      h2 3.4 UDDI “Universal Description, Discovery, and Integration”   


</template>

<script>
export default {
  name: 'Tema3',
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
