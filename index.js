//MODAL CODE
var titleModal = document.getElementById('title-modal')
var subtitleModal = document.getElementById('subtitle-modal')
var descModal = document.getElementById('description-modal')
var allFeaturesModal = document.getElementById('all-features-modal')
var backButton = document.getElementById("button-back-modal")
var nextButton = document.getElementById("button-next-modal")
var actualNumber = 0
//Get modal element
var modal = document.getElementById("myModal");
var modalContent = document.getElementById("modal-content")

// Get the button that opens the modal
var btn = document.getElementById("myBtn");
var astronaut = document.getElementById("astronaut");
var net = document.getElementById("net");
var spinner = document.getElementById("spinner");
var title = document.getElementById("title");

// Get the element that closes the modal
var span = document.getElementById("closeBtn");
//List of services and descriptions

setTimeout(function () {
  document.getElementById("loading").className = "animate__animated animate__fadeOut";
}, 3000);

setTimeout(function () {
  document.getElementById("loading").style.display = "none";
  spinner.style.display = "flex"
  net.style.display = "flex"
  astronaut.style.display = "flex"
  title.style.display = "block"
  spinner.className = "spinner-box animate__animated animate__fadeInUp animate__slow"
  net.className = "div-a animate__animated animate__fadeInUp animate__slow"
  astronaut.className = "div-b animate__animated animate__fadeInRight animate__slow"
  title.className = "animate__animated animate__fadeInLeft animate__slow title"
  modal.style.display = "none"
}, 3100);

window.onload = function () {
  document.getElementById("loading").style.display = "block";
  spinner.style.display = "none"
  astronaut.style.display = "none"
  net.style.display = "none"
  title.style.display = "none"
}

const infoServices = [
  {
    'haveSubTitle': false,
    'title': 'GESTION DE REDES SOCIALES',
    'description': 'Mantener activas las redes sociales de tu empresa no es tarea fácil si lo que quieres, es proyectar una imagen profesional y conectar con tu público objetivo. Déjalo en manos de profesionales',
    'features': [
      'Planificación de grilla y pilares de contenido mensual.',
      'Diseño y dirección de arte para contenido.',
      'Creación de contenido creativo como: Carruseles, Reels, Stories, Caja de preguntas, Juegos, Memes, etc.',
      'Programación de contenido según calendario y activación de stories diarias.',
      'Reporte de métricas mensual.',
      'Respuesta y moderación de comentarios en publicaciones.'
    ]
  },
  {
    'haveSubTitle': false,
    'title': 'LEVANTAMIENTO DE REDES SOCIALES',
    'description': 'Entregar redes sociales activas corporativas con el fin de que el cliente pueda manejar y controlar el contenido de su plataforma, es decir, entregar un producto autoadministrable para el cliente o dueño del negocio.',
    'features': [
      'Diseño logo perfil circular en Instagram y Facebook.',
      'Desarrollo de identidad de marca para plataformas de Instagram y Fanpage.',
      'Kit de marca y paleta de colores corporativos.',
      'Descripción corporativa y persuasiva, orientada a la venta.',
      'Asignación de Llamadas a la acción de venta o reservas.',
      'Diseño y creación de cuadrículas corporativas.',
      'Diseño de piezas gráficas para historias corporativas o de marca.',
      'Sincronización entre cuentas de Facebook e Instagram',
      'Elaboración de Reels publicitarios.'
    ]
  },
  {
    'haveSubTitle': false,
    'title': 'ANUNCIOS FACEBOOK E INSTAGRAM',
    'description': 'Sácale el jugo a la inversión de Marketing de tu negocio en anuncios de Facebook, Instagram, Youtube, entre otros. Déjalo en nuestras manos y recibe verdaderos resultados. Nos especializamos en crear embudos de conversión, de esta forma te ayudaremos a llegar al público deseado.',
    'features': [
      'Configuración de la cuenta empresarial.',
      'Instalación Pixel de Facebook.',
      'Análisis situacional del rubro y cliente.',
      'Desarrollo de un plan de medios.',
      'Optimización diaria de campañas y presupuestos.',
      'Implementar estrategia en la plataforma de Facebook Business.'
    ]
  },
  {
    'haveSubTitle': false,
    'title': 'ANUNCIOS EN GOOGLE ADWORDS',
    'description': '¡Si en las primeras páginas de Google quieres estar, anuncios tienes que pagar! Trabajaremos la mejor estrategia que hará despegar tus ventas.',
    'features': [
      'Configuración de la cuenta empresarial.',
      'Configuración de etiquetas de conversión.',
      'Análisis de rubro y cliente. Estudio de palabras claves.',
      'Informe mensual de rendimiento.',
      'Optimización y monitoreo del presupuesto diariamente.',
      'Desarrollo de plan de medios. Trabajamos anuncios en red búsqueda, red display y shooping.'
    ]
  }, {
    'haveSubTitle': true,
    'title': 'E-COMMERCE',
    'subtitle': '¿Qué es e-commerce o Comercio Electrónico?',
    'description': 'La incorporación de este nuevo método de ventas permite que los clientes accedan de manera simple y desde cualquier parte del mundo a los productos y servicios que una empresa ofrece.',
    'features': [
      'Expandir la base de clientes al entrar a un mercado más amplio.',
      'Extender el horario de venta las 24 horas del día, los siete días de la semana, 365 días al año.',
      'Crear una ventaja competitiva.',
      'Reducir costos de producción, capital, administración, entre otros.',
      'Mejorar la comunicación con los clientes y efectividad de campañas publicitarias.'
    ]
  }, {
    'haveSubTitle': true,
    'title': 'EMAIL MARKETING (MAILING)',
    'subtitle': '¿Qué es? ¿Cómo hacer mailing?.',
    'description': 'Para transmitir mensajes a grandes volúmenes de direcciones de correo electrónico debes tomar en cuenta ciertas reglas: asegurar una buena entregabilidad, mencionar las informaciones obligatorias de la empresa, gestionar correctamente las listas de contactos, dar seguimiento al correo electrónico y medir su rendimiento.',
    'features': [
      'Dirección de arte y objetos para ambientación.',
      'Entrega de carpeta con fotografías en alta resolución y tamaño para redes sociales.',
      'Edición de color, luz, imperfecciones.',
      'Servicio por jornadas de horas dependiendo de la cantidad de productos.',
      'Implementación de estudio fotográfico en dependencias del cliente o de Orbital-22'
    ]
  }, {
    'haveSubTitle': false,
    'title': 'FOTOGRAFÍA COMERCIAL\n Y PUBLICITARIA',
    'description': 'Olvida las fotos con fondo blanco, ¡Que bellos se ven los productos cuando hay un contexto detrás! Si quieres que tus redes sociales sean amor a primera vista, entonces debes preocuparte por tener fotografías de calidad.',
    'features': [
      'Dirección de arte y objetos para ambientación.',
      'Entrega de carpeta con fotografías en alta resolución y tamaño para redes sociales.',
      'Edición de color, luz, imperfecciones.',
      'Servicio por jornadas de horas dependiendo de la cantidad de productos.',
      'Implementación de estudio fotográfico en dependencias del cliente o de Orbital-22'
    ]
  }, {
    'haveSubTitle': false,
    'title': 'PRODUCCIÓN DE EVENTOS',
    'description': 'Desarrollamos eventos de integración y celebración que ponen en juego todos los sentidos a partir de entornos y contenidos desafiantes para que los participantes experimenten momentos que perduren en sus mentes. Eventos a medida o con producción llave en mano, donde nos encargamos de todo. \n¡Hacemos que tu evento corporativo sea inolvidable!',
    'features': [
      'Dirección de arte y diseño de rectores.',
      'Diseño gráfico y producción audiovisual para anuncios publicitarios del evento.',
      'Desarrollamos app del evento, ya sea para acceso o registro de asistentes.',
      'Incorporación técnica, servicio de sonido e iluminación (dependiendo si cliente solicita).',
      'Manejo de los tiempos o timing completo de la producción del evento.',
      'Interacción con los stakeholders para gestionar el flow de trabajo, speakers.',
      'Actividades de teambuilding y speakers.',
      'Obsequios o souvenirs.'
    ]
  }, {
    'haveSubTitle': false,
    'title': 'SONIDO E ILUMINACIÓN',
    'description': 'Amplificación, sonido en vivo e iluminación para fiestas y eventos de todo tipo. Contamos con un sistema de sonido de última generación manejado solo por expertos en la materia.\nAdemás contamos con iluminación de alta gama para charlas, seminarios, lanzamientos de marcas, fiestas, conciertos, matrimonios, etc.',
    'features': [
      'Parlantes profesionales de alta calidad, micrófonos inalámbricos, consolas de sonido, amplificadores, extensores y ecualizadores.',
      'Personal y asistentes altamente calificados para utilización, manejo y manipulación de los recursos.',
      'Torres de aluminio para amplificación e iluminación de eventos, conciertos, matrimonios.',
      'Servicio por jornadas de horas dependiendo la cantidad de equipos requeridos.',
      'Luces láser gráficos y 3D, luces perimetrales led, cabezas móviles, sistemas robo scan y ambiental, que a las vez pueden ser controlados por el ritmo de la música o a través del sistema dmx que es operado por el personal adecuado.',
      'Maquinas de humo, máquina de chispas y lanza cotillón (challas).'
    ]
  }
]

const deviceType = () => {
  const ua = navigator.userAgent;
  if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
    return "tablet";
  }
  else if (/Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(ua)) {
    return "mobile";
  }
  return "desktop";
};



// When the user clicks on the button, open the modal
btn.onclick = function () {
  modalContent.className = "modal-content animate__animated animate__zoomIn description-modal title-modal subtitle-modal"
  spinner.className = "spinner-box animate__animated animate__fadeOutDown animate__slow"
  net.className = "div-a animate__animated animate__fadeOutDown animate__slow"
  astronaut.className = "div-b spinner-box animate__animated animate__fadeOutRight animate__slow"
  title.className = "animate__animated animate__fadeOutLeft animate__slow"
  openModal(actualNumber)
}

// When the user clicks on <span> (x), close the modal
span.onclick = function (event) {
  modalContent.className = "animate__animated animate__zoomOut"
  spinner.className = "spinner-box animate__animated animate__fadeInUp animate__slow"
  net.className = "div-a animate__animated animate__fadeInUp animate__slow"
  astronaut.className = "div-b animate__animated animate__fadeInRight animate__slow"
  title.className = "animate__animated animate__fadeInLeft animate__slow title"
  modal.style.display = "none"
}


// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modalContent.className = "animate__animated animate__zoomOut"
    spinner.className = "spinner-box animate__animated animate__fadeInUp animate__slow"
    net.className = "div-a animate__animated animate__fadeInUp animate__slow"
    astronaut.className = "div-b animate__animated animate__fadeInRight animate__slow"
    title.className = "animate__animated animate__fadeInLeft animate__slow title"
    modal.style.display = "none"
  }
}

function openPlanet(actualPage) {
  const device = deviceType()
  if (device == 'desktop') {
    modalContent.className = "modal-content animate__animated animate__zoomIn description-modal title-modal subtitle-modal"
    spinner.className = "spinner-box animate__animated animate__fadeOutDown animate__slow"
    net.className = "div-a animate__animated animate__fadeOutDown animate__slow"
    astronaut.className = "div-b spinner-box animate__animated animate__fadeOutRight animate__slow"
    title.className = "animate__animated animate__fadeOutLeft animate__slow"
    openModal(actualPage)
  }
}


function openModal(actualPage) {
  const info = infoServices[actualPage]
  modal.style.display = "inline-block"
  titleModal.innerHTML = info.title
  descModal.innerHTML = info.description
  if (info.haveSubTitle) {
    subtitleModal.innerHTML = info.subtitle
  }
  allFeaturesModal.innerHTML = ''
  info.features.forEach((el) => {
    allFeaturesModal.innerHTML += `<div class="features">
      <img src = "./iconos/interface.svg" class="asterisk" alt = "asterisk">
        <p class="features-item">
          ${el} </p>
    </div >`
  })
}

nextButton.onclick = function () {
  if (actualNumber + 1 != infoServices.length) {
    modalContent.className = "modal-content animate__animated animate__zoomOut"
    setTimeout(() => {
      next(actualNumber + 1)
      modalContent.className = "modal-content animate__animated animate__zoomIn description-modal title-modal subtitle-modal"
    }, 500);
  }
}

backButton.onclick = function () {
  if (actualNumber != 0) {
    modalContent.className = "modal-content animate__animated animate__zoomOut"
    setTimeout(() => {
      back(actualNumber - 1)
      modalContent.className = "modal-content animate__animated animate__zoomIn description-modal title-modal subtitle-modal"
    }, 500);
  }
}

function next(actualPage) {
  const info = infoServices[actualPage]
  console.log(info);
  modal.style.display = "inline"
  titleModal.innerHTML = info.title
  if (info.haveSubTitle) {
    subtitleModal.innerHTML = info.subtitle
  }
  descModal.innerHTML = info.description
  actualNumber = actualPage
  allFeaturesModal.innerHTML = ''
  info.features.forEach((el) => {
    allFeaturesModal.innerHTML += `<div class="features">
      <img src = "./iconos/interface.svg" width = "25px" alt = "">
        <p style="color: white; font-size: 15px; margin-left: 5%; font-family: 'nunito'; text-align: left;">
          ${el} </p>
    </div >`
  })
}

function back(actualPage) {
  const info = infoServices[actualPage]
  modal.style.display = "inline"
  titleModal.innerHTML = info.title
  if (info.haveSubTitle) {
    subtitleModal.innerHTML = info.subtitle
  }
  descModal.innerHTML = info.description
  actualNumber = actualPage
  allFeaturesModal.innerHTML = ''
  info.features.forEach((el) => {
    allFeaturesModal.innerHTML += `<div class="features">
      <img src = "./iconos/interface.svg" width = "25px" alt = "">
        <p style="color: white; font-size: 15px; margin-left: 5%; font-family: 'nunito'; text-align: left;">
          ${el} </p>
    </div >`
  })
}

document.onkeydown = function (e) {
  console.log('key down', e);
  if (e.key == 'ArrowRight') {
    nextButton.click()
  } else if (e.key == 'ArrowLeft') {
    backButton.click()
  }
}