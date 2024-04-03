<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Metodologías de evaluación de usabilidad y accesibilidad
    p(data-aos="fade-right") Una vez revisado y comprendido de manera precisa y sucinta los conceptos y técnicas que engloban en gran medida la disciplina de la usabilidad, es posible ahora entrar a uno de los más interesantes mecanismos y apartados de este componente, que es la evaluación.
    Separador
    #t_2_1
    .titulo-segundo.color-acento-contenido
      h2 2.1 Introducción y conceptos básicos
    .row.align-items-center.mb-5
      .col-lg-9.order-2.order-lg-1(data-aos="fade-right")
        p.mb-4 Una de las científicas informáticas más renombradas en el mundo de la interacción humano-computador, #[b Jenny Preece], indica en su libro #[b #[i Interaction Design: Beyond Human-Computer]] lo siguiente:
        .row
          .col-12.px-4.pb-4.px-lg-5.pb-lg-5.bg-c28(data-aos="fade-down")
            .row.justify-content-center
              .col-lg-12
                .tarjeta-avatar
                  img(src='@/assets/curso/tema2/img1.svg' alt='AvatarTop')
                  .tarjeta.color-primario1
                    .p-4
                      .bloque-texto-d.p-4
                        .bloque-texto-d__texto.mb-2
                          i.fas.fa-quote-left
                          p.text-center #[b ...hace poco me encontré con dos diseñadores de sitios web que orgullosos de su nuevo sitio me miraron atónitos cuando les pregunté si lo habían probado con usuarios. «No», dijeron, «pero nosotros sabemos que está bien». Indagué un poco más y descubrí que en su empresa eran considerados como expertos pues conocían perfectamente todos los trucos del diseño web...]
                          i.fas.fa-quote-right
                        .bloque-texto-d__autor 
                          p.mb-0.text-center - Jenny Preece
      .col-lg-3.mb-4.mb-lg-0.order-1.order-lg-2(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema2/img1.png', style="width:340px", alt='').m-auto
    .row.align-items-center.mb-5
      .col-lg-3.mb-4.mb-lg-0(data-aos="fade-right")
        figure
          img(src='@/assets/curso/tema2/img2.png', style="width:300px", alt='').m-auto
      .col-lg-9(data-aos="fade-left")
        p Lo anteriormente expuesto constituye una de las verdades que lamentablemente se da con demasiada frecuencia y, por infortunio, es lo habitual. Además, aunque el concepto de usabilidad pueda ser sencillo de comprender, conseguir que un producto sea usable y comprensible es difícil, ahora, aún más, que deje sensaciones positivas al usarlo (experiencia de usuario). En general, cuando se diseña y desarrolla una aplicación software, se está más preocupado por la funcionalidad que por la usabilidad del mismo, y eso que no se trata de la accesibilidad, que en últimas es poco tratada.
        .row
          .col-12.bg-c2
            .p-4
              p.mb-0 En el siguiente video se explorará  la vital importancia de la evaluación dentro de la ingeniería de #[i software], evidenciando que su relevancia trasciende la fase de desarrollo. Expertos destacan su impacto significativo y analizan su papel indispensable.
    figure.mb-5(data-aos="fade-down")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/8Xe8Cgrs15E?si=D6Sc_5qkkhMKdocI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    p.mb-5(data-aos="fade-right") Dados estos criterios, los métodos de evaluación pueden clasificarse de varias maneras, como se muestra a continuación.
    .row.justify-content-center.mb-5
      .col-lg-10
        .titulo-sexto.color-acento-contenido(data-aos="fade-right")
          p.mb-0 #[b Figura 5]. Clasificación de métodos de evaluación de usabilidad
        .row
          .col-12.bg-c17(data-aos="fade-left")
            .p-4
              figure.mb-3
                img(src='@/assets/curso/tema2/img3.svg', style="width:850px" alt='La imagen muestra un esquema de clasificación de métodos de evaluación de usabilidad. Estos métodos se clasifican según diferentes criterios: lugar de realización, tipo de técnica, automatización y participantes. Bajo el lugar de realización, se diferencian los que se llevan a cabo en laboratorio y en entorno natural. En cuanto al tipo de técnica, se distinguen la inspección, indagación y test. Según la automatización, se categorizan en automáticos y manuales. Por último, en función de los participantes, se clasifican en métodos que involucran a usuarios  implicados y aquellos que no involucran usuarios ni implicados.').m-auto
              figcaption Nota. Tomada de Granollers (2018).
    p.mb-5(data-aos="fade-right") En ese sentido, se abordará cada método y técnica de manera sucinta.
    .row.bg-c11
      .col-12
        .px-5
          .row.mb-4
            .col-auto.bg-c6(data-aos="fade-down")
              .px-3.pb-0
                .row.align-items-end
                  .col-auto.pe-0
                    figure.fig-p1
                      img(src='@/assets/curso/tema1/img5.svg', style="width:50px" alt='').m-auto
                  .col
                    h3 Lugar de realización
          .row.align-items-center.mb-5
            .col-lg-10.order-2.order-lg-1(data-aos="fade-right")
              p En relación al lugar de realización, se tiene en cuenta el ambiente, controlado o no, al llevar a cabo la evaluación. Puede ser en espacios controlados, como los laboratorios, donde hay mayor manejo de las condiciones y variables externas. Y también están los espacios naturales, que, de acuerdo con el entorno del observado, se tendrá menor manejo sobre variables que puedan intervenir en la evaluación. Se presentan dos categorías generales, así:
            .col-lg-2.mb-4.mb-lg-0.order-1.order-lg-2(data-aos="fade-left")
              figure
                img(src='@/assets/curso/tema2/img4.svg', style="width:320px", alt='').m-auto
          .row.mb-5
            .col-lg-6.bg-c29(data-aos="fade-right")
              .p-4
                figure.mb-4
                  img(src='@/assets/curso/tema2/img5.svg', style="width:120px", alt='').m-auto
                p #[b Aquellos que se realizan en el laboratorio]
                p El objetivo del evaluador, a veces, es comprobar aspectos sin que sea necesaria la ayuda y/o presencia de los usuarios. Este tipo de comprobaciones y validaciones las realiza, normalmente, en su área de trabajo, que por lo general es en el laboratorio, donde se puede tener una gran oportunidad de traer usuarios para un estudio particular.
                p.mb-0 En la sección de material complementario, se presenta un ejemplo de laboratorio de usabilidad construido por una de las grandes multinacionales, como lo es Oracle. Para visualizar y aprender sobre este escenario, encontrará el enlace con el nombre de laboratorios de usabilidad.
            .col-lg-6.bg-c30(data-aos="fade-left")
              .p-4
                figure.mb-4
                  img(src='@/assets/curso/tema2/img6.svg', style="width:120px", alt='').m-auto
                p #[b Aquellos que se realizan en el entorno natural o habitual del escenario (donde se realizan las tareas a evaluar)]
                p.mb-0 Esta condición se da cuando el evaluador realiza su trabajo en el escenario natural donde se realiza la escena o acciones cotidianas del usuario. Por ejemplo, muchas de las empresas utilizan la tecnología de seguimiento ocular para revisar dónde los usuarios enfocan su atención. Este tipo de prácticas se usa con frecuencia para revisar mejorar la usabilidad de los sitios web de e-commerce, utilizando la técnica de Tracking Eye Movements, para reconocer y comprender la navegación ocular de dichas aplicaciones web.
    .row.mb-4
      .col-auto.bg-c6(data-aos="fade-down")
        .px-3.pb-0
          .row.align-items-end
            .col-auto.pe-0
              figure.fig-p1
                img(src='@/assets/curso/tema1/img5.svg', style="width:50px" alt='').m-auto
            .col
              h3 Tipo de técnica
    p.mb-5(data-aos="fade-right") En cuanto al tipo de técnica de comprobación utilizada, se distinguen tres categorías: inspección, indagación y test, tal como se puede consultar en el siguiente recurso:
    .row.mb-5
      .col-12.bg-c17(data-aos="fade-left")
        .p-4
          .row.justify-content-center.mb-4
            .col-auto
              p.text-white.txt-c3.mb-0 #[b Tipo de técnica en evaluación de usabilidad]
          TabsC.color-acento-botones
            .p-4.bg-white(titulo="1. Insprección")
              .row.align-items-center
                .col-lg-4.mb-4.mb-lg-0
                  figure
                    img(src='@/assets/curso/tema2/img8.svg', style="width:320px", alt='').m-auto
                .col-lg-8
                  p #[b 1. Insprección]
                  p El término utilizado de inspección, aplicado al contexto de la usabilidad, agrupa un conjunto de métodos para evaluar la usabilidad, donde los expertos que son conocidos como evaluadores explican el grado de usabilidad de un sistema, soportados en la inspección o examen de la interfaz del mismo.
                  .row.justify-content-center
                    .col-10.col-lg-auto.mx-1.my-3
                      a.boton.color-acento-botones.indicador__container(@click="modal1 = true")
                        span(style="color:#000") Evaluación heurística
                        .indicador--click(v-if="mostrarIndicador")
                    .col-10.col-lg-auto.mx-1.my-3
                      a.boton.color-acento-botones.indicador__container(@click="modal2 = true")
                        span(style="color:#000") Recorrido cognitivo
                    .col-10.col-lg-auto.mx-1.my-3
                      a.boton.color-acento-botones.indicador__container(@click="modal3 = true")
                        span(style="color:#000") Recorrido de usabilidad plural
                    .col-10.col-lg-auto.mx-1.my-3
                      a.boton.color-acento-botones.indicador__container(@click="modal4 = true")
                        span(style="color:#000") Recorrido cognitivo con usuarios
                    .col-10.col-lg-auto.mx-1.my-3
                      a.boton.color-acento-botones.indicador__container(@click="modal5 = true")
                        span(style="color:#000") Inspección de estándares
            .p-4.bg-white(titulo="2. Indagación")
              .row.align-items-center
                .col-lg-4.mb-4.mb-lg-0
                  figure
                    img(src='@/assets/curso/tema2/img8.svg', style="width:320px", alt='').m-auto
                .col-lg-8
                  p #[b 2. Indagación]
                  p El proceso de indagación permite llegar al conocimiento de una cosa a través de conjeturas y señales. En este tipo de métodos de evaluación, se tiene como premisa hablar con los usuarios y observarlos detenidamente usando el sistema en su entorno real, de esta forma, se obtienen respuestas a las preguntas formuladas verbalmente o por escrito.
                  .row.justify-content-center
                    .col-10.col-lg-auto.mx-1.my-3
                      a.boton.color-acento-botones.indicador__container(@click="modal6 = true")
                        span(style="color:#000") Observación de campo
                        .indicador--click(v-if="mostrarIndicador")
                    .col-10.col-lg-auto.mx-1.my-3
                      a.boton.color-acento-botones.indicador__container(@click="modal7 = true")
                        span(style="color:#000") Grupo de discusión dirigido (#[i(style="color:#000") Focus Group])
                    .col-10.col-lg-auto.mx-1.my-3
                      a.boton.color-acento-botones.indicador__container(@click="modal8 = true")
                        span(style="color:#000") Entrevistas (#[i(style="color:#000") Interviews])
                    .col-10.col-lg-auto.mx-1.my-3
                      a.boton.color-acento-botones.indicador__container(@click="modal9 = true")
                        span(style="color:#000") Cuestionarios (#[i(style="color:#000") Surveys])
                    .col-10.col-lg-auto.mx-1.my-3
                      a.boton.color-acento-botones.indicador__container(@click="modal10 = true")
                        span(style="color:#000") Grabación del uso (#[i(style="color:#000") Logging])
            .p-4.bg-white(titulo="3. Test")
              .row.align-items-center
                .col-lg-4.mb-4.mb-lg-0
                  figure
                    img(src='@/assets/curso/tema2/img8.svg', style="width:320px", alt='').m-auto
                .col-lg-8
                  p #[b 3. #[i Test]]
                  p Los métodos de usabilidad de tipo #[i test] es cuando los usuarios trabajan en tareas utilizando el sistema o el prototipo (#[i wireframe] o #[i mockup]), y los evaluadores utilizan los resultados para revisar cómo la interfaz de usuario de la aplicación soporta a los usuarios con sus tareas.
                  .row.justify-content-center
                    .col-10.col-lg-auto.mx-1.my-3
                      a.boton.color-acento-botones.indicador__container(@click="modal11 = true")
                        span(style="color:#000") Pensando en voz alta (#[i(style="color:#000") thinking aloud])
                        .indicador--click(v-if="mostrarIndicador")
                    .col-10.col-lg-auto.mx-1.my-3
                      a.boton.color-acento-botones.indicador__container(@click="modal12 = true")
                        span(style="color:#000") Interacción constructiva
                    .col-10.col-lg-auto.mx-1.my-3
                      a.boton.color-acento-botones.indicador__container(@click="modal13 = true")
                        span(style="color:#000") Método del conductor
                    .col-10.col-lg-auto.mx-1.my-3
                      a.boton.color-acento-botones.indicador__container(@click="modal14 = true")
                        span(style="color:#000") Ordenación de tarjetas (#[i(style="color:#000") Card Sorting])
    ModalA(:abrir-modal.sync="modal1")
      .row
        .col-12
          .p-0
            p #[b Evaluación heurística]
            p.mb-0 Es una de las formas más económicas de encontrar errores en la web, aplicación, o cualquier sistema que interactúe con el usuario.
    ModalA(:abrir-modal.sync="modal2")
      .row
        .col-12
          .p-0
            p #[b Recorrido cognitivo]
            p Un grupo de evaluadores examina la interfaz, realizando un conjunto de tareas y evaluando su comprensión y facilidad de aprendizaje.
            p.mb-0 La interfaz está usualmente en forma de prototipo. Es una técnica idónea en la etapa de diseño.
    ModalA(:abrir-modal.sync="modal3")
      .row
        .col-12
          .p-0
            p #[b Recorrido de usabilidad plural]
            p.mb-0 Son reuniones multidisciplinares, en las que diseñadores, desarrolladores, usuarios y expertos en usabilidad asumen el rol de usuarios del sistema.
    ModalA(:abrir-modal.sync="modal4")
      .row
        .col-12
          .p-0
            p #[b Recorrido cognitivo con usuarios]
            p.mb-0 Este método aporta una primera aproximación conocida de implicar a usuarios en los tradicionales recorridos cognitivos. Pues, conocedores de las ventajas de estos recorridos, se hace consistente evidenciar los principales problemas que puedan presentarse y, a la vez, detectados por los usuarios.
    ModalA(:abrir-modal.sync="modal5")
      .row
        .col-12
          .p-0
            p #[b Inspección de estándares]
            p.mb-0 Se realiza por medio de un experto en un estándar de la interfaz, que puede ser de facto o de iure. El experto realiza una inspección minuciosa a la interfaz, para comprobar que en todo momento y de manera global se cumplen los puntos definidos en el estándar.
    ModalA(:abrir-modal.sync="modal6")
      .row
        .col-12
          .p-0
            p #[b Observación de campo]
            p.mb-0 La investigación de campo, generalmente, implica una combinación del método de observación de participante, entrevistas y análisis. Las grandes corporaciones pueden tener su propio departamento de marketing o investigación, para recopilar datos de fuentes primarias. Sin embargo, para la mayor parte de la investigación de campo, se contrata a terceros que realizan encuestas, grupos focales y entrevistas a nombre de la compañía.
    ModalA(:abrir-modal.sync="modal7")
      .row
        .col-12
          .p-0
            p #[b Grupo de discusión dirigido (#[i Focus Group])]
            p.mb-0 El #[i Focus Group] o Grupo de Discusión Dirigido es una técnica de recogida de datos, donde se reúnen de 6 a 9 personas (generalmente usuarios y también implicados) para discutir aspectos relacionados con el sistema. En ellos, un evaluador experto en usabilidad y/o accesibilidad (dependiendo del objetivo de la evaluación) realiza la función de moderador. Este preparará previamente la lista de aspectos a discutir y se encargará de recoger la información que necesita de la discusión.
    ModalA(:abrir-modal.sync="modal8")
      .row
        .col-12
          .p-0
            p #[b Entrevistas (#[i Interviews])]
            p.mb-0 Entrevistar a los usuarios respecto de su experiencia en un sistema interactivo resulta una manera directa y una técnica potente de adquirir información. Pueden ser estructuradas o abiertas (o desestructuradas), en las primeras, el evaluador es más rígido en procurar el buen seguimiento del guion preestablecido, mientras que en las abiertas, se da espacio a los contertulios a expresarse con más libertad.
    ModalA(:abrir-modal.sync="modal9")
      .row
        .col-12
          .p-0
            p #[b Cuestionarios (#[i Surveys])]
            p.mb-0 Herramienta de investigación que consiste en una serie de preguntas diseñadas para recopilar información de los participantes sobre diversos temas, preferencias o opiniones.
    ModalA(:abrir-modal.sync="modal10")
      .row
        .col-12
          .p-0
            p #[b Grabación del uso (#[i Logging])]
            p.mb-0 Proceso de registrar automáticamente las acciones o eventos ocurridos dentro de un sistema o aplicación para analizar el comportamiento de los usuarios o diagnosticar problemas.
    ModalA(:abrir-modal.sync="modal11")
      .row
        .col-12
          .p-0
            p #[b Pensando en voz alta (#[i Thinking Aloud])]
            p.mb-0 Técnica de investigación cualitativa donde los participantes verbalizan sus pensamientos, sentimientos y decisiones mientras realizan una tarea, proporcionando insights sobre su proceso cognitivo.
    ModalA(:abrir-modal.sync="modal12")
      .row
        .col-12
          .p-0
            p #[b Interacción constructiva]
            p.mb-0 Método colaborativo en el que dos o más personas trabajan juntas en una tarea, discutiendo y construyendo sobre las ideas del otro para alcanzar un objetivo común.
    ModalA(:abrir-modal.sync="modal13")
      .row
        .col-12
          .p-0
            p #[b Método del conductor]
            p.mb-0 Técnica de investigación donde un facilitador guía a un participante a través de una serie de tareas o preguntas, manteniendo el enfoque y la dirección de la sesión mientras recopila datos relevantes.
    ModalA(:abrir-modal.sync="modal14")
      .row
        .col-12
          .p-0
            p #[b Ordenación de tarjetas (#[i Card Sorting])]
            p.mb-0 Método utilizado en el diseño de la experiencia del usuario para entender cómo las personas agrupan o categorizan información, ayudando a organizar el contenido de manera que refleje el pensamiento y las expectativas de los usuarios.
    .row.mb-4
      .col-auto.bg-c6(data-aos="fade-down")
        .px-3.pb-0
          .row.align-items-end
            .col-auto.pe-0
              figure.fig-p1
                img(src='@/assets/curso/tema1/img5.svg', style="width:50px" alt='').m-auto
            .col
              h3 Evaluación heurística
    .row.align-items-center.mb-5
      .col-lg-9.order-2.order-lg-1(data-aos="fade-right")
        p.mb-4 Toni Granollers, en su página oficial de metodologías de usabilidad, se refiere a esta técnica como: 
        .row
          .col-12.px-4.pb-4.px-lg-5.pb-lg-5.bg-c28(data-aos="fade-down")
            .row.justify-content-center
              .col-lg-12
                .tarjeta-avatar
                  img(src='@/assets/curso/tema2/img1.svg' alt='AvatarTop')
                  .tarjeta.color-primario1
                    .p-4
                      .bloque-texto-d.p-4
                        .bloque-texto-d__texto.mb-2
                          i.fas.fa-quote-left
                          p.text-center #[b La «Heurística» es un método de evaluación de sistemas interactivos desarrollado por Nielsen y Molich, que consiste en analizar (mediante la inspección de varios evaluadores expertos) la calidad de uso de una interfaz, a partir de comprobar su conformidad respecto unos principios reconocidos de usabilidad.]
                          i.fas.fa-quote-right
                        .bloque-texto-d__autor 
                          p.mb-0.text-center -  Toni Granollers
      .col-lg-3.mb-4.mb-lg-0.order-1.order-lg-2(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema2/img11.svg', style="width:340px", alt='').m-auto
    p(data-aos="fade-right") Este método consiste en aplicar el decálogo de Nielsen, que consta de 10 reglas o lineamientos. Para ello, se reúne un conjunto de evaluadores expertos en usabilidad, los cuales contrastan y validan individualmente el conjunto de reglas (o comúnmente llamadas heurísticas, o #[i guidelines]) escogidas en la interfaz del sistema. Tras las revisiones individuales por cada experto, los resultados son puestos en común y discutidos en una reunión entre los evaluadores y la persona responsable de la evaluación, generando un informe final de la práctica.
    p.mb-5(data-aos="fade-right") A continuación, se presentan los 10 principios heurísticos de #[b Jakob Nielsen]:
    .row.mb-5
      .col-12.bg-c23(data-aos="fade-down")
        .p-5
          SlyderF(columnas="col-lg-6 col-xl-4")
            .tarjeta.color-secundario.p-4
              .row.align-items-start.mb-3
                .col-auto.bg-c31
                  .p-1
                    p.mb-0 #[b(style="color:#000") 1.]
                .col.bg-c32
                  .p-1
                    p.mb-0 #[b(style="color:#000") Visibilidad del estado del sistema]
              p.mb-0 El sistema #[i software] siempre debe mantener a todos los usuarios informados sobre lo que ocurre o pasa en la aplicación, a través de una retroalimentación apropiada en un tiempo razonable, de hecho, el tiempo es lo que más cuenta en la actualidad, debido a que los usuarios se han acostumbrado a la inmediatez y, además, los usuarios ya poco leen en la web, dado que han afianzado la acción de escanear.
            .tarjeta.color-secundario.p-4
              .row.align-items-start.mb-3
                .col-auto.bg-c31
                  .p-1
                    p.mb-0 #[b(style="color:#000") 2.]
                .col.bg-c32
                  .p-1
                    p.mb-0 #[b(style="color:#000") Empate entre el sistema y el mundo real]
              p.mb-0 El sistema #[i software] debe hablar en el lenguaje del usuario, con palabras, frases, coloquios y conceptos familiares para él. Aquí cobra bastante importancia la arquitectura de la información, vista anteriormente. Por eso, utilizar convenciones del mundo real, haciendo que la información aparezca en un orden natural y lógico, este tipo de convenciones y gráficos es lo que técnicamente se llaman metáforas.
            .tarjeta.color-secundario.p-4
              .row.align-items-start.mb-3
                .col-auto.bg-c31
                  .p-1
                    p.mb-0 #[b(style="color:#000") 3.]
                .col.bg-c32
                  .p-1
                    p.mb-0 #[b(style="color:#000") Control y libertad del usuario]
              p.mb-0 Es normal que, cuando se utiliza por primera vez, los usuarios ingresen a un sitio donde no querían, por lo que necesitan una 'puerta de emergencia' para salir del estado indeseado. En ese sentido es imperativo ofrecer soporte para deshacer y rehacer acciones.
            .tarjeta.color-secundario.p-4
              .row.align-items-start.mb-3
                .col-auto.bg-c31
                  .p-1
                    p.mb-0 #[b(style="color:#000") 4.]
                .col.bg-c32
                  .p-1
                    p.mb-0 #[b(style="color:#000") Consistencia y estándares]
              p.mb-0 No se debe colocar en juicios a los usuarios, ni ponerlos en escenarios de dudas si las diversas palabras, situaciones o acciones significan la misma cosa. Por lo tanto, se deben seguir las normas y convenciones de la plataforma sobre la que está implementado el sistema.
            .tarjeta.color-secundario.p-4
              .row.align-items-start.mb-3
                .col-auto.bg-c31
                  .p-1
                    p.mb-0 #[b(style="color:#000") 5.]
                .col.bg-c32
                  .p-1
                    p.mb-0 #[b(style="color:#000") Prevención de errores]
              p.mb-0 Es necesario tener la cultura de la proactividad, más que ser reactivos a incidentes. Esta reflexión recae sobre que antes que diseñar buenos mensajes o notificaciones de error, es mejor evitar que el problema ocurra.
            .tarjeta.color-secundario.p-4
              .row.align-items-start.mb-3
                .col-auto.bg-c31
                  .p-1
                    p.mb-0 #[b(style="color:#000") 6.]
                .col.bg-c32
                  .p-1
                    p.mb-0 #[b(style="color:#000") Reconocimiento mejor que recuerdo]
              p.mb-0 Es importante entender que menos es más, debido a que el usuario necesita enfocarse en lo que debe hacer para alcanzar sus objetivos, y así se minimiza la carga de memoria del usuario, haciendo que los objetos de interacción, las acciones y las opciones estén visibles. De esta forma, se evitará que el usuario tenga que recordar la información de una parte del diálogo a otra.
            .tarjeta.color-secundario.p-4
              .row.align-items-start.mb-3
                .col-auto.bg-c31
                  .p-1
                    p.mb-0 #[b(style="color:#000") 7.]
                .col.bg-c32
                  .p-1
                    p.mb-0 #[b(style="color:#000") Flexibilidad y eficiencia de uso]
              p.mb-0 La personalización de un sistema es crucial para su éxito. Esto permitirá adaptarse a diversas condiciones de los usuarios. Por ejemplo, los aceleradores, no vistos por el usuario principiante, pero sí por el usuario experto, lo que le permite una mejor interacción con el sistema, así que el sistema podrá adaptarse a los distintos tipos de usuarios. Es crucial que el sistema permita personalizar acciones frecuentes.
            .tarjeta.color-secundario.p-4
              .row.align-items-start.mb-3
                .col-auto.bg-c31
                  .p-1
                    p.mb-0 #[b(style="color:#000") 8.]
                .col.bg-c32
                  .p-1
                    p.mb-0 #[b(style="color:#000") Diseño estético y minimalista]
              p.mb-0 Los diálogos, alertas o notificaciones no deben contener información irrelevante, como se ha indicado anteriormente. Se debe propiciar que el usuario alcance su objetivo. Se hace claridad que, cada vez que adicionemos alguna información, sea un diálogo o notificación, va a competir con la información importante, disminuyendo la atención y visibilidad relativa.
            .tarjeta.color-secundario.p-4
              .row.align-items-start.mb-3
                .col-auto.bg-c31
                  .p-1
                    p.mb-0 #[b(style="color:#000") 9.]
                .col.bg-c32
                  .p-1
                    p.mb-0 #[b(style="color:#000") Ayudar a reconocer, diagnosticar y recuperarse de errores]
              p.mb-0 Los mensajes de error, alertas o notificaciones deben estar expresados en lenguaje sencillo (sin códigos), indicando de manera precisa y rápida el problema y siempre sugiriendo una solución.
            .tarjeta.color-secundario.p-4
              .row.align-items-start.mb-3
                .col-auto.bg-c31
                  .p-1
                    p.mb-0 #[b(style="color:#000") 10.]
                .col.bg-c32
                  .p-1
                    p.mb-0 #[b(style="color:#000") Ayuda y documentación]
              p.mb-0 Aunque es mejor que se pueda usar el sistema sin documentación, es necesario proveer al usuario de ayuda y documentación. Esta tiene que ser fácil de buscar, centrada en las tareas del usuario, con información de las etapas a realizar y que no sea muy extensa.
    .row.mb-4
      .col-auto.bg-c6(data-aos="fade-down")
        .px-3.pb-0
          .row.align-items-end
            .col
              h3.mt-3 Comparativa de los métodos de evaluación de la usabilidad
    .tarjeta.color-secundario.p-3.mb-5(data-aos="fade-left")
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/tema2/img12.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h3.mb-1 Comparativa de los métodos de evaluación de la usabilidad
              p.mb-0 Ingrese al siguiente documento donde se presenta una tabla que resume los métodos de evaluación de usabilidad para proporcionar una comprensión integral de sus características principales, basada en el curso de Interacción humano-ordenador del profesor Toni Granollers.
            .col-sm-auto
              a.boton.color-acento-botones.texto-blanco(:href="obtenerLink('/downloads/anexo1.pdf')" target="_blank")
                span(style="color:#000 !important") Descargar
                i.fas.fa-file-download(style="color:#000 !important")
    .row.mb-4
      .col-auto.bg-c6(data-aos="fade-down")
        .px-3.pb-0
          .row.align-items-end
            .col-auto.pe-0
              figure.fig-p1
                img(src='@/assets/curso/tema1/img5.svg', style="width:50px" alt='').m-auto
            .col
              h3 Automatización
    .row.align-items-center.mb-3
      .col-lg-9.order-2.order-lg-1(data-aos="fade-right")
        .row
          .col-12.bg-c15
            .p-4
              p.mb-0 La característica de automatización se centra en la forma en que los resultados son obtenidos al emplear un método. Según la tabla anterior, hay una columna en la que se puede apreciar cuáles tienen esta característica. Esos métodos son aquellos que disponen de mecanismos, sean #[i hardware] y/o #[i software], que facilitan la comprobación de los aspectos a validar. Los métodos automáticos resultan eficientes por la inmediatez de sus resultados, dado que siempre provienen de los mismos parámetros, sin apreciaciones subjetivas.
      .col-lg-3.mb-4.mb-lg-0.order-1.order-lg-2(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema2/img3.png', style="width:250px" alt='').m-auto
    p.mb-5(data-aos="fade-right") El principal problema de estos métodos radica en que siempre se soportan en sistemas ya finalizados o versiones beta y no pueden utilizarse en etapas tempranas del ciclo de vida del desarrollo #[i software] del proyecto.
    .row.mb-4
      .col-auto.bg-c6(data-aos="fade-down")
        .px-3.pb-0
          .row.align-items-end
            .col-auto.pe-0
              figure.fig-p1
                img(src='@/assets/curso/tema1/img5.svg', style="width:50px" alt='').m-auto
            .col
              h3 Participantes
    p.mb-5(data-aos="fade-right") Otra característica a tener en cuenta son las personas que intervienen en los métodos, el tipo de participantes en la evaluación. Se pueden distinguir los siguientes métodos:
    .row.align-items-center.mb-5
      .col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
        figure
          img(src='@/assets/curso/tema2/img4.png', style="width:350px" alt='').m-auto
      .col-lg-8(data-aos="fade-left")
        .row
          .col-12.bg-c2
            .p-4
              p #[b Con usuarios y/o implicados]
              p Son los métodos en los que se evalúa el sistema con la intervención directa de los usuarios objetivos. De igual manera, también pueden participar en las sesiones otras personas que, sin ser usuarios finales, tienen la condición de stakeholders o implicados del sistema.
              p.mb-0 Estos métodos resultan ser muy pertinentes debido a que implican la participación de usuarios en el proceso de diseño; la desventaja es que no siempre resulta fácil reclutar usuarios para este tipo de ejercicios.
    .row.align-items-center
      .col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
        figure
          img(src='@/assets/curso/tema2/img5.png', style="width:350px" alt='').m-auto
      .col-lg-8(data-aos="fade-left")
        .row
          .col-12.bg-c2
            .p-4
              p #[b Sin usuarios y/o implicados]
              p Métodos que son realizados solo por expertos evaluadores con la ayuda de pautas o instrucciones que permiten hacer un seguimiento de lo que han realizado los usuarios mientras utilizan el sistema. Esta modalidad de trabajar sin la presencia de los usuarios permite que este tipo de métodos se realicen con mayor rapidez; no obstante, por el mismo motivo, carecen de la valiosa información que evaluar con dichos usuarios aporta al desarrollo del aplicativo #[i software]. Adicionalmente, el método tiene un valor agregado y es que permite detectar errores funcionales.
    Separador
    #t_2_2
    .titulo-segundo.color-acento-contenido
      h2 2.2 Plan de evaluación. Introducción y conceptos básicos
    .row.align-items-center.mb-3
      .col-lg-9.order-2.order-lg-1(data-aos="fade-right")
        p Para esta sección, se conocen de manera precisa y teórica los pasos que se deben seguir para la elaboración de un plan de pruebas. 
        p Un plan de evaluación es una secuencia de pasos ya establecidos, y en la literatura se encuentra gran variedad de estos ejercicios; no obstante, para este fin, se considera el siguiente modelo como el más pertinente, el que propone el Profesor Toni Granollers en su curso de Interacción humano-ordenador (Granollers, 2015). En el siguiente recurso educativo, se presentan los pasos:
        TabsA.color-acento-botones
          .tarjeta.color-primario2.p-4(titulo="PASO 1")
            .row
              .col-md-auto
                figure
                  img(src='@/assets/curso/tema2/img13.svg', style="width:70px" alt='').m-auto
              .col
                p.mb-0 Antes de iniciar una evaluación, se deben tener claros los objetivos de la misma. No se debe pensar en el sistema en global, sino solo en la parte que va a ser probada y en lo que se espera de la prueba. Aquí toma precisión una de las frases más importantes del desarrollo #[i software]: “divide y vencerás”.
          .tarjeta.color-primario2.p-4(titulo="PASO 2")
            .row
              .col-12
                p Cada evaluación debe tener un responsable (puede ser un integrante del equipo de desarrollo), el cual tendrá las siguientes responsabilidades:
                ul.lista-ul.mb-0
                  li.d-flex
                    i.fas.fa-circle(style="color:#1682FB !important")
                    |
                    p.mb-0 Moderar las sesiones.
                  li.d-flex
                    i.fas.fa-circle(style="color:#1682FB !important")
                    |
                    p.mb-0 Reclutar a los usuarios y/o a los evaluadores.
                  li.d-flex
                    i.fas.fa-circle(style="color:#1682FB !important")
                    |
                    p.mb-0 Reservar el lugar de celebración de la evaluación (tanto si se trata del laboratorio como del lugar de trabajo).
                  li.d-flex
                    i.fas.fa-circle(style="color:#1682FB !important")
                    |
                    p.mb-0 Dirigir las tareas a evaluar (en función de los objetivos del punto anterior).
                  li.d-flex
                    i.fas.fa-circle(style="color:#1682FB !important")
                    |
                    p.mb-0 Disponer de todos los recursos necesarios para la evaluación (prototipos, dispositivos necesarios, etc.).
                  li.d-flex
                    i.fas.fa-circle(style="color:#1682FB !important")
                    |
                    p.mb-0 Tener claras las tareas a probar.
                  li.d-flex
                    i.fas.fa-circle(style="color:#1682FB !important")
                    |
                    p.mb-0 Qué técnicas de evaluación se utilizarán.
          .tarjeta.color-primario2.p-4(titulo="PASO 3")
            .row
              .col-md-auto
                figure
                  img(src='@/assets/curso/tema2/img14.svg', style="width:70px" alt='').m-auto
              .col
                p.mb-0 La evaluación debe tener una planeación bien hecha, y eso está sujeto también a los costos que demanda la misma (presupuesto). Como es una planeación, se deberán prever tantas actividades como sean necesarias, y dependiendo de las necesidades y requerimientos de cada una, se aplicará uno o más métodos de evaluación de usabilidad y/o accesibilidad.
          .tarjeta.color-primario2.p-4(titulo="PASO 4")
            .row
              .col-md-auto
                figure
                  img(src='@/assets/curso/tema2/img15.svg', style="width:70px" alt='').m-auto
              .col
                p.mb-0 Se deben documentar los resultados de la evaluación (responsabilidad del integrante del equipo de desarrollo) y esta deberá ser distribuida y socializada entre los miembros del equipo que precisen de dichos resultados (responsabilidad del director del proyecto).
      .col-lg-3.mb-4.mb-lg-0.order-1.order-lg-2(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema2/img6.png', style="width:350px" alt='').m-auto
    p(data-aos="fade-right") Respecto a los principios fundamentales de la accesibilidad, es crucial incorporar esta disciplina dentro de los procesos de desarrollo y evaluación de proyectos de #[i software]. Al enfocarse en mejorar sus habilidades y competencias en estas áreas, se contribuye a la creación de sistemas más pulidos y accesibles para todos los usuarios.

</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    mostrarIndicador: true,
    modal1: false,
    modal2: false,
    modal3: false,
    modal4: false,
    modal5: false,
    modal6: false,
    modal7: false,
    modal8: false,
    modal9: false,
    modal10: false,
    modal11: false,
    modal12: false,
    modal13: false,
    modal14: false,
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
