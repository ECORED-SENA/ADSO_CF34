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
            p.mb-0 Los servicios web permiten la nueva generación de aplicaciones basadas en Internet. Estos servicios admiten la comunicación de Internet de aplicación a aplicación, es decir, las aplicaciones en diferentes ubicaciones de la red se pueden integrar para funcionar como si fueran parte de un único sistema de <em>software</em> grande. Ejemplos de aplicaciones que los servicios web hacen posibles incluyen transacciones comerciales automatizadas y acceso directo (sin navegador) a dispositivos de escritorio y de mano, a las reservas, el comercio de acciones y los sistemas de seguimiento de pedidos.
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
                p.text-white XML (Extensible Markup Language) es un lenguaje de marcas que define un conjunto de reglas para la codificación de documentos, se utiliza para estructurar información en cualquier fichero que contenga texto y es muy usado en el medio, debido a que es un estándar abierto y libre, creado por el consorcio <em>World Wide Web</em>, W3C. 
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

    .h3 Estructura

    .row.justify-content-center.fondo1-tema2.mb-5
      .col-12.col-lg-4.mb-4.mb-lg-0.mt-0
        figure
          img.mt-0(src='@/assets/curso/tema3-1-img3.jpg' alt='Imagen decorativa')
      .col-lg-8.pb-4.px-lg-5
        .row.align-items-center.justify-content-center.neg--right.mb-4.pt-3(data-aos="fade-left")
          .col-lg-12.bg-blanco.p-3
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

    .row.justify-content-center.mb-5
      .col-lg-7
        .titulo-sexto.color-acento-contenido
          h5 Figura 1. 
          span Estructura
        figure
          img(src='@/assets/curso/tema3-1-fig.svg' alt='Estructura')

    .titulo-azul.px-3.py-1.text-white.mb-5
      h3.mb-0 Vea a continuación un ejemplo: 
    
    .row.fondo1-tema3-1.mb-3
      .col-lg-12.px-lg-5
        .row.justify-content-center.mt-0.mb-lg-4            
          .col-lg-6.mb-4
            ImagenInfografica.color-acento-contenido.mb-5
              template(v-slot:imagen)
                figure
                  img(src='@/assets/curso/tema3-1-imginfog.svg', alt='ejemplo')
              .tarjeta.color-acento-contenido.p-3(x="48%" y="19.5%" numero="1")
                .h5.mb-0 Prólogo: Declaración
              .tarjeta.color-acento-contenido.p-3(x="77%" y="56%" numero="2")
                .h5.mb-2 Elemento raíz “librería”
                p.mb-0 Dentro de este, van incluidos todos los demás elementos en orden de árbol.
              .tarjeta.color-acento-contenido.p-3(x="5%" y="56%" numero="3")
                .h5.mb-0 Cuerpo

    h3 Etiquetas o Tags

    .row.justify-content-center.fondo1-tema2
      .col-lg-7.pb-4.px-lg-5
        .row.align-items-center.justify-content-center.neg--left.mb-4.pt-3
          .col-lg-12.bg-blanco2.p-3
            p.mb-0 En el anterior ejemplo, se observa que hay elementos en los cuales se describen los datos que se contienen, así: 
        .row.align-items-center
          .col-lg-12
            h4 Ejemplo 4: 
            p En el ejercicio 1, se puede observar que: 
          .col-lg-7.bg-celeste.py-3.px-3.mb-4.mx-2(data-aos="fade-right")
            p.mb-0 <b>&lt;titulo&gt;</b> Guía de Aprendizaje XML  <b>&lt;/titulo&gt;</b>
          .col-lg-12
            ul.lista-ul.mb-0.mx-3
              li.mb-2
                i.fas.fa-layer-group(style='color: #039BE5')
                p.mb-0 Cuando se inicia una etiqueta, siempre se deben abrir así: <b>&lt;titulo&gt;</b>
              li 
                i.fas.fa-layer-group(style='color: #039BE5')
                p.mb-0 Cuando se termina de describir un dato, siempre se debe cerrar así: <b>&lt;/titulo&gt;</b>  
      .col-12.col-lg-5.mb-5.mb-lg-0.mt-0.z-1
        figure
          img.mt-0(src='@/assets/curso/tema3-1-img7.jpg' alt='Imagen decorativa')

    .row.justify-content-center.fondo2-tema3-1.mb-4
      .col-lg-12.px-lg-5
        .row.justify-content-center.mt-5.mb-lg-3
          .col-lg-12
            h3 Atributos
      .col-12.col-lg-5.mb-4.mb-lg-0.mt-0
        figure
          img.mt-0(src='@/assets/curso/tema3-1-img8.svg' alt='Imagen decorativa')
      .col-lg-7.pb-4.px-lg-5
        .row.align-items-center.justify-content-center.neg--right.mb-4.pt-3(data-aos="fade-left")
          .col-lg-12.bg-blanco.p-3
            p.mb-0 Un atributo sirve para proporcionar información extra sobre el elemento que lo contiene, los atributos siempre están dentro de las etiquetas de apertura: 
        .row.align-items-center.justify-content-center 
          .col-lg-12
            h4 Ejemplo 5:  
            p En el ejercicio 1, se puede observar que: 
          .col-lg-7.bg-celeste.py-3.px-3.mb-2.mx-2
            p.mb-0 <b>&lt;precio</b> moneda=“euros”&gt;30<b>&lt;/precio&gt;</b>  
          .col-lg-7.bg-celeste.py-3.px-3.mb-4.mx-2
            p.mb-0 <b>&lt;precio</b> moneda=“pesos”&gt;80.000<b>&lt;/precio&gt;</b> 
          .col-lg-12.mb-4
            .cajon.color-acento-botones.p-4
              p.mb-0 El atributo está entre comillas dobles, pero también puede ir entre comillas sencillas. En este caso específico, indica que la moneda de un libro es en euros mientras que el otro es en pesos.    
          .col-lg-7.bg-celeste.py-3.px-3.mb-2.mx-2
            p.mb-0 <b>&lt;autor&gt;</b>Mario Meneses<b>&lt;/autor&gt;</b>
            p.mb-0 <b>&lt;titulo&gt;</b>Guía de Aprendizaje XML<b>&lt;/titulo&gt;</b>
            p.mb-0 <b>&lt;precio</b> moneda=“euros”&gt;30<b>&lt;/precio&gt;</b>
            p.mb-0 <b>&lt;autor&gt;</b>Eduardo Benavides<b>&lt;/autor&gt;</b>
            p.mb-0 <b>&lt;titulo&gt;</b>XML con ejemplos<b>&lt;/titulo&gt;</b>
            p.mb-0 <b>&lt;descriptor&gt;</b>lenguajes<b>&lt;/descriptor&gt;</b>
            p.mb-0 <b>&lt;descriptor&gt;</b>Programación<b>&lt;/descriptor&gt;</b>
            p.mb-0 <b>&lt;precio</b> moneda=“euros”&gt;30<b>&lt;/precio&gt;</b>
            p.mb-0 <b>&lt;precio</b> moneda=“pesos”&gt;80.000<b>&lt;/precio&gt;</b>


    .row.fondo1-tema3-1
      .col-lg-12.px-lg-5.mb-lg-5
        .row.justify-content-center.mt-0.mb-lg-4
          .col-lg-12.mb-5
            .titulo-azul.px-3.py-1.text-white
              h3.mb-0 Miremos el siguiente ejercicio: 
          .col-lg-6.mb-4
            figure.p-3
              img(src='@/assets/curso/tema3-1-cod2.svg' alt='Ejercicio')

    .row.justify-content-center.mb-4
      .col-md-4.mb-4
        img(src='@/assets/curso/tema3-1-cod1.svg' alt='Código')
      .col-md-1
      .col-md-4
        img(src='@/assets/curso/tema3-1-img6.svg' alt='Imagen decorativa')

    .row.fondo1-tema3-3
      .col-lg-12.px-lg-5.mb-lg-5
        .row.justify-content-center.mt-0.mb-lg-4
          .col-lg-12.mb-4
            .cajon.color-acento-botones.p-4
              p.mb-0 <b>Es posible ensayar y editar este código fuente de una manera muy sencilla.</b>
          .row
            .col-lg-7.mb-4
              LineaTiempoD.color-primario
                p(numero="1" titulo="Paso 1") Abrir el programa Notepad++            
                p(numero="2" titulo="Paso 2") Pegar  o escribir el código
                p(numero="3" titulo="Paso 3") Dar clic en guardar como, seleccionar una ubicación y, en el nombre, escribir un nombre+.xml, así: Familia.xml
                p(numero="4" titulo="Paso 4") Guardar los cambios
                .row.justify-content-center(numero="5" titulo="Paso 5") 
                  p Ahora, al archivo que guardó, se  le da clic derecho y  se abre  con el navegador <em>Google Chrome</em>, y debe aparecer en el navegador así:
                  .col-md-11.mb-2
                    img(src='@/assets/curso/tema3-1-paso5.svg' alt='Resultado')
            .col-lg-5.mb-4
              img(src='@/assets/curso/tema3-1-img5.svg' alt='Imagen decorativa')
    
    .row.d-flex.neg--top2
      .col-md-3.bg-blanco.bg-shadow.centrar-imagen
        figure.p-3
          img(src='@/assets/curso/tema3-1-img4.svg' alt='Imagen decotativa', style="width:200px")
      .col-md-9  
        .row.align-items-center.justify-content-center.tarjeta--azulRey(data-aos="fade-left")
          .col-lg-12
            figure.mb-0
              img(src='@/assets/curso/comilla.svg').img-position2
            .row.align-items-center.justify-content-center
              .col-lg-9.mb-4
                p.text-white De acuerdo con Bianco (2005), hay que recordar que: 
                ul.lista-ul.mb-0
                  li 
                    i.fas.fa-layer-group(style='color: #FFA726')
                    p.text-white.mb-0 Para editar el código, existen muchos programas, como: Microsoft Word, bloc de notas, Notepad++ y un sin número de editores.
                  li
                    i.fas.fa-layer-group(style='color: #FFA726')
                    p.text-white.mb-0 Para visualizar, es mejor utilizar los navegadores <em>Google Chrome</em> o <em>Mozilla Firefox</em>, ya que otros pueden tener problemas de compatibilidad.
                  li
                    i.fas.fa-layer-group(style='color: #FFA726')
                    p.text-white.mb-0 XML hace distinción de la escritura en mayúsculas y minúsculas, por lo cual hay que tener cuidado en la escritura.
            

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
        iframe(width="560" height="315" src="https://www.youtube.com/embed/0LzmDyJgCcw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

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
                p(numero="1" titulo="Types") Tipos de datos.            
                p(numero="2" titulo="Message") Descripción de los datos a transferir.
                p(numero="3" titulo="Interface") Operaciones abstractas que describen la comunicación entre el servidor y el cliente (aún se llamaba portType en una versión anterior del estándar).
                p(numero="4" titulo="Binding") Información sobre el protocolo de transporte utilizado.
                p(numero="5" titulo="Endpoint") Información sobre la interfaz de comunicación, generalmente, en forma de un URI (aún se denominaba port en una versión anterior del estándar). 
                p(numero="6" titulo="Service") Puntos de acceso del servicio web. 
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

    .row.fondo1-tema4.mb-4
      .col-lg-12.px-lg-5
        .row.justify-content-center.align-items-center.mt-0.mb-lg-4
          .col-lg-4.mb-4.mb-lg-0
            img(src='@/assets/curso/tema3-4-img1.svg' alt='Imagen decorativa')
          .col-lg-8.py-3
            figure.mb-3
              img(src='@/assets/curso/tema3-4-IBM.svg' alt='IBM', style="width: 200px")
            .separador3.mb-3
            .title-18.mb-0 <b>Para IBM Corporation (s. f.), UDDI (Universal Description, Discovery, and Integration)</b> “define un modo de publicar y encontrar información sobre servicios web, incluye un esquema XML para mensajes SOAP que define un conjunto de documentos para describir información de empresas y servicios, un conjunto común de API para consultar y publicar información en los directorios y una API para duplicar entradas de directorio entre nodos UDDI iguales”.

    p <b>UDDI</b> tiene dos funciones:

    ul.lista-ul.px-3.mb-5
      li.mb-1
        i.fas.fa-layer-group(style='color: #039BE5')
        p.mb-0 Es un protocolo basado en SOAP que define cómo se comunican los clientes con los registros UDDI.
      li
        i.fas.fa-layer-group(style='color: #039BE5')
        p.mb-0 Es un conjunto de registros duplicados globales en particular. 

    .row.justify-content-center
      .col-lg-7
        .titulo-sexto.color-acento-contenido
          h5 Figura 2. 
          span Protocolo UDDI
        figure
          img(src='@/assets/curso/tema3-4-fig.svg' alt='Protocolo UDDI')  

    Separador


    #t_3_5
    .titulo-segundo.color-acento-contenido
      h2 3.5 REST “Representational State Transfer”  

    p El protocolo REST (Representational State Transfer) es una arquitectura cliente-servidor, en la cual un servicio es visto como un recurso que es identificado a través de una dirección URL, por medio de la cual puede ser accedido o consumido. Para acceder a estos servicios web, se hace uso de mensajes en formato simple, los cuales se intercambian entre cliente y servidor.
    p.mb-5 Este define, a partir de HTTP, cuatro métodos:

    .row.fondo1-tema3-3.pb-lg-5
      .col-lg-12.px-lg-5.mb-lg-5
        .row.justify-content-center.mt-0.mb-lg-4
          .col-lg-6.mb-4
            img(src='@/assets/curso/tema3-5-img1.svg' alt='Imagen decorativa')
          .col-lg-4.mb-4
            SlyderF(columnas="col-12")
              .tarjeta.bg-blanco.p-4
                .row.justify-content-center.mb-3
                  .col-8.centrar-imagen
                    img(src='@/assets/curso/tema3-5-tarj1.svg' alt='GET', style="width: 100px")
                h4.text-center GET
                p Es usado para enviar la representación de un recurso o servicio al cliente “consulta información”.
              .tarjeta.bg-blanco.p-4
                .row.justify-content-center.mb-3
                  .col-8.centrar-imagen
                    img(src='@/assets/curso/tema3-5-tarj2.svg' alt='PUT', style="width: 100px")
                h4.text-center PUT
                p Este es usado para transferir el estado de un cliente al recurso “actualiza un registro”.   
              .tarjeta.bg-blanco.p-4
                .row.justify-content-center.mb-3
                  .col-8.centrar-imagen
                    img(src='@/assets/curso/tema3-5-tarj3.svg' alt='DELETE', style="width: 100px")
                h4.text-center DELETE
                p Borra un recurso específico.  
              .tarjeta.bg-blanco.p-4
                .row.justify-content-center.mb-3
                  .col-8.centrar-imagen
                    img(src='@/assets/curso/tema3-5-tarj4.svg' alt='POST', style="width: 100px")
                h4.text-center POST
                p Es utilizado para enviar una entidad a un recurso en específico, causando a menudo un cambio en el estado o efectos secundarios en el servidor “crear un nuevo registro”.
    
    .row.justify-content-center.neg--top2
      .col-lg-12
        figure
          img(src='@/assets/curso/tema3-5-img2.jpg' alt='SOAP “Simple Object Access Protocol”')
      .col-lg-10.bg-naranja.borde-redondo.neg--top.p-4          
        p.mb-0 El mismo autor resalta que, para hacer uso de esta comunicación, se hace a través de estos lenguajes o formatos: XML, HTML, JSON; JSON, este es el tipo de mensajes más difundido en diferentes servicios propios de redes sociales (<em>Facebook</em> y <em>Twitter</em>) y comunidades en Internet. Cada mensaje intercambiado contiene la información necesaria para el funcionamiento del servicio, de tal forma que, para cada servicio, el cliente y el servidor conocen el formato o protocolo interno de los mensajes.

    Separador


    #t_3_6
    .titulo-segundo.color-acento-contenido
      h2 3.6 JSON “JavaScript Object Notation”  

    .row.justify-content-center.align-items-center.fondo1-tema4.mb-5
      .col-12.col-lg-5.mb-4.mb-lg-0.mt-0
        figure
          img.mt-0(src='@/assets/curso/tema3-6-img1.jpg' alt='JSON “JavaScript Object Notation”')
      .col-lg-7.pb-5
        .row.align-items-center.justify-content-center.tarjeta--azulRey.neg--right.mb-4.mt-2(data-aos="fade-left")
          .col-lg-12
            figure.mb-0
              img(src='@/assets/curso/comilla.svg').img-position2
            .row.justify-content-center
              .col-lg-9
                p.text-white JSON (JavaScript Object Notation) es un formato ligero de intercambio de datos, es de fácil lectura y escritura para los usuarios, fácil de analizar y generar por parte de los dispositivos, además, se basa en un subconjunto del lenguaje de programación JavaScript; es compatible con la gran mayoría de lenguajes de programación, lo que lo hace el más popular y usado en el <em>web service</em>. 
            .row.mb-4
              .col-11.d-inline-flex.justify-content-end.align-items-center
                p.mb-0.text-white <b>(IBM Corporation, 2020)</b>
                .cuadro
        p.mb-4 La cardinalidad, o también llamada multiplicidad, indica la cantidad de elementos o instancias de una entidad A que se relacionan con una instancia de una entidad B y viceversa. Esta puede ser de 4 tipos:
        .row.justify-content-center.tarjetas-tema3
          .col-lg-2.text-center.mb-2.p-3.mx-2
            .numero1.mb-2
              span 1
            strong Uno a uno “única”
          .col-lg-2.text-center.mb-2.p-3.mx-2
            .numero2.mb-2
              span 2
            strong Uno a varios “múltiple”
          .col-lg-2.text-center.mb-2.p-3.mx-2
            .numero1.mb-2
              span 3
            strong Varios a uno “múltiple”
          .col-lg-2.text-center.mb-2.p-3.mx-2
            .numero2.mb-2
              span 4
            strong Varios a varios “múltiple”

    p.mb-4 A continuación, observe un ejemplo: 

    AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--gris")
      .row.justify-content-center(titulo="Ejemplo 1")
        .col-md-11
          p Se va a crear un objeto con el nombre negocio con cardinalidad única:
        .col-lg-7.mb-5
          figure
            img(src='@/assets/curso/tema3-6-acord1-1.svg')
        .col-md-11
          p Se asignan los siguientes valores para las propiedades del objeto negocio:
        .col-lg-7.mb-5
          figure
            img(src='@/assets/curso/tema3-6-acord1-2.png')
        .col-md-11
          p El formato Json quedaría de la siguiente forma:
        .col-lg-7.mb-4
          figure
            img(src='@/assets/curso/tema3-6-acord1-3.svg')
      .row.justify-content-center(titulo="Ejemplo 2")
        .col-md-11
          p Se va a crear un objeto con el nombre negocio con cardinalidad múltiple:
        .col-lg-7.mb-5
          figure
            img(src='@/assets/curso/tema3-6-acord2-1.svg')
        .col-md-11
          p También, se asignan los siguientes valores para las propiedades del objeto negocio:
        .col-lg-7.mb-5
          figure
            img(src='@/assets/curso/tema3-6-acord2-2.png')
        .col-md-11
          p El formato Json quedaría de la siguiente forma:
        .col-lg-7.mb-4
          figure
            img(src='@/assets/curso/tema3-6-acord2-3.svg')

    .row.d-flex.mb-5
      .col-md-3.bg-blanco.bg-shadow.centrar-imagen
        figure.p-3
          img(src='@/assets/curso/tema3-6-img3.svg' alt='XML', style="width:200px")
      .col-md-9.bg-celeste2.py-3
        .row.justify-content-center
          .col-md-11
            p En el ejemplo 1, se observa una cardinalidad única, ya que es de uno a varios, mientras que en el ejemplo 2, es una cardinalidad múltiple, porque se relaciona de varios a varios.
          .col-md-10
            .tarjeta.bg-degrade3.p-3
              .row.justify-content-around.align-items-center
                .col-3.col-sm-2.col-lg-2.px-lg-4
                  img.px-lg-1(src="@/assets/curso/actividad-img.svg")
                .col
                  .row.justify-content-between.align-items-center
                    .col.mb-3.mb-sm-0.text-white
                      h4.mb-2 Actividad didáctica 1
                      p.text-small Póngase a prueba, es hora de responder la siguiente actividad, ¡adelante!
                    .col-sm-auto
                      a.boton.color-acento-botones(:href="obtenerLink('/actividades/actividad1/actividad.html')" target="_blank")
                        span Ver
                        i.fas.fa-link




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
