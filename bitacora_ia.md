# Bitácora de Inteligencia Artificial

Registro del proceso de desarrollo, consultas, decisiones de diseño y modificaciones manuales para la construcción de la versión 0.1 del portfolio personal (Aplicaciones Informáticas II • 6º E • Instituto San Agustín).

---

## Consulta 1: Planificación de Identidad, Enfoque y Estructura Base

* **Fecha:** 04 de noviembre de 2026  
* **Herramienta utilizada:** Gemini  
* **Objetivo:** Definir cómo presentar mi perfil de manera clara y técnica, diferenciándome de un portfolio genérico y destacando mi orientación hacia la Licenciatura en Ciencias de la Computación en FaMAF (UNC), el desarrollo de juegos en Godot y el modding en Java.  
* **Prompt completo:**  
  > *"Actuá como un mentor de desarrollo para un estudiante de 6º año de secundaria técnica que quiere armar su primer portfolio web. Mis áreas de mayor práctica son el desarrollo de videojuegos en Godot Engine (GDScript y C++), modding técnico en Minecraft (Java/NeoForge) y scripts en Linux con Python y Bash. El año que viene voy a cursar Ciencias de la Computación en FaMAF (UNC). Ayudame a estructurar qué secciones debería tener el sitio, qué información poner en la presentación y qué tono usar para que sea profesional pero sincero, sin inflar experiencia."*  
* **Parte utilizada:**  
  La recomendación de priorizar un encabezado conciso, separar claramente las habilidades por áreas técnicas y estructurar los proyectos en torno a problemas resueltos y aprendizajes reales en lugar de descripciones vacías.  
* **Cambios realizados por mí:**  
  Descarté completamente la propuesta inicial de redactar una biografía formal en tercera persona. Reescribí todo en primera persona directa, haciendo hincapié en mi interés por los sistemas operativos ligeros, la lógica pura y el código abierto.  
* **¿Qué comprendí?**  
  Que para un portfolio escolar de nivel secundario/técnico tiene mucho más peso evidenciar curiosidad técnica, lógica de programación y proyectos que se puedan probar o descargar, antes que intentar simular un perfil laboral corporativo ficticio.  
* **¿Qué descarté y por qué?**  
  Descarté propuestas que sugerían añadir secciones de "Servicios" o "Precios", ya que no coinciden con mis objetivos actuales de estudio e investigación.

---

## Consulta 2: Maquetado Semántico HTML5 y Fichas Técnicas de Proyectos

* **Fecha:** 06 de noviembre de 2026  
* **Herramienta utilizada:** Antigravity / Gemini  
* **Objetivo:** Construir una estructura semántica rigurosa en HTML5 (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`) que cumpla con los 7 campos exigidos por la consigna escolar para tres proyectos reales: *Eternauta: Dark Winter*, *Factorinv* y *ApunteQR*.  
* **Prompt completo:**  
  > *"Necesito la estructura HTML5 semántica para mi portfolio escolar. Tiene que incluir menú con anclas (#inicio, #sobre-mi, #proyectos, #habilidades, #contacto). En la sección proyectos tengo 3 trabajos reales: 1) Eternauta: Dark Winter (juego en Godot 2D para la feria de ciencias del colegio), 2) Factorinv (mod de Minecraft en Java/NeoForge con crafteo automático de Factorio), 3) ApunteQR (web app para compartir apuntes escolares escaneando un QR en clase). Cada proyecto debe detallar problema, solución, mi participación, tecnologías, evidencia y aprendizaje, pero redactado de forma natural. Marcá dónde van las rutas de imágenes relativas y asegurate de no usar divs innecesarios."*  
* **Parte utilizada:**  
  El esqueleto semántico base con etiquetas estructurales nativas y la organización de cada proyecto dentro de un elemento `<article>`.  
* **Cambios realizados por mí:**  
  * Reemplacé textos de ejemplo por redacción propia con los detalles técnicos específicos: el manejo de daño por radiación y desgaste del traje en *Eternauta*, la resolución de árboles recursivos de recetas sin bugs de duplicación en *Factorinv*, y la optimización para redes 4G lentas de colegio en *ApunteQR*.  
  * Corregí manualmente las rutas relativas (`assets/img/proyecto-eternauta.jpg`, etc.) y agregué atributos descriptivos `alt` en cada imagen para accesibilidad.  
  * Ajusté los identificadores de sección (`id="sobre-mi"`, `id="proyectos"`, etc.) para asegurar que la navegación interna mediante anclas funcionara sin saltos bruscos.  
* **¿Qué comprendí?**  
  La diferencia entre agrupar contenido por su función semántica (`<article>` para entidades autocontenidas como un proyecto individual frente a `<section>` para divisiones temáticas mayores) y la importancia del orden jerárquico de encabezados (`<h1>`, `<h2>`, `<h3>`) para que el documento sea legible y accesible para lectores de pantalla.  
* **¿Qué descarté y por qué?**  
  Descarté una plantilla que la IA sugería con decenas de etiquetas con clases tipo Bootstrap o Tailwind. Preferí escribir código limpio a mano en VS Code para poder explicar cada línea ante el profesor.

---

## Consulta 3: Arquitectura CSS, Modelo de Caja y Tarjetas de Proyecto

* **Fecha:** 08 de noviembre de 2026  
* **Herramienta utilizada:** Antigravity / Gemini  
* **Objetivo:** Resolver el diseño visual inicial utilizando CSS puro, implementando variables personalizadas en `:root`, cuadrículas mediante CSS Grid y Flexbox, y solucionando problemas de desbordamiento horizontal en pantallas estrechas.  
* **Prompt completo:**  
  > *"Tengo armada la estructura HTML. Ahora necesito escribir la hoja de estilos en CSS puro (css/estilos.css). Quiero una paleta oscura con variables en :root, tipografías legibles y que las tarjetas de proyectos tengan buena separación. En mis primeras pruebas en pantalla chica, las tarjetas se rompían y el texto se pegaba a los bordes. Explicame cómo estructurar el box-sizing, los márgenes y un layout que se adapte con media queries sin usar frameworks."*  
* **Parte utilizada:**  
  La configuración del reseteo universal con `box-sizing: border-box`, el sistema de variables de color (`--bg-principal`, `--cyan`, `--ambar`, etc.) y la estructura de media queries (`@media (max-width: 880px)`).  
* **Cambios realizados por mí:**  
  * Ajusté manualmente los valores de relleno (*padding*) e interlineado para mejorar la legibilidad en párrafos largos de la sección "Sobre mí".  
  * Creé sombras duras desplazadas estilo retro (`box-shadow: 4px 4px 0px var(--cyan);`) para darle carácter a los botones y tarjetas.  
  * Modifiqué el comportamiento del menú de navegación para que en pantallas móviles no colapse en un menú hamburguesa complejo de JavaScript, sino en una barra flexible envuelta (*flex-wrap*) que no se rompe.  
* **¿Qué comprendí?**  
  Comprendí a fondo el modelo de caja: cómo el padding y los bordes ensanchan los elementos si no se declara `box-sizing: border-box`, y cómo `grid-template-columns: repeat(auto-fit, minmax(...))` permite que las cajas se reorganicen solas según el ancho de pantalla disponible.  
* **¿Qué descarté y por qué?**  
  Descarté animaciones pesadas con keyframes continuos y transiciones lentas que consumían recursos en computadoras del colegio y generaban distracciones visuales.

---

## Consulta 4: Estética Retro-Tech, Efecto CRT Permanente y Canvas de Partículas

* **Fecha:** 09 de noviembre de 2026  
* **Herramienta utilizada:** Antigravity / Gemini  
* **Objetivo:** Desarrollar una identidad visual retro inspirada en monitores arcade y terminales Linux de los años 90, integrando un efecto de líneas de escaneo (scanlines) permanente y una animación sutil de partículas en Canvas reactiva al cursor.  
* **Prompt completo:**  
  > *"Quiero darle a mi portfolio una estética retro auténtica. Reemplacé una foto de stock que tenía por una terminal con comandos en texto. ¿Cómo puedo crear una capa fija de monitor CRT con scanlines sutiles usando puro CSS sin imágenes de fondo pesadas? Y para el fondo de la página, pasame un script ligero en JS con Canvas que dibuje partículas que se muevan despacio y sigan levemente el mouse, sin consumir CPU."*  
* **Parte utilizada:**  
  La técnica de gradientes lineales repetidos (`repeating-linear-gradient` junto a una viñeta radial oscura) para simular el vidrio curvo de un monitor CRT, y el ciclo de animación en Canvas mediante `requestAnimationFrame`.  
* **Cambios realizados por mí:**  
  * Noté que la capa CRT bloqueaba los clics del mouse sobre los enlaces y botones, por lo que agregué de inmediato la propiedad `pointer-events: none` en la clase `.monitor-crt-overlay`.  
  * Calibré la opacidad de las líneas CRT: la IA las había generado demasiado marcadas y dificultaban la lectura de textos chicos; las reduje a una transparencia de `rgba(0, 0, 0, 0.22)` para que den atmósfera sin fatigar la vista.  
  * Limpié el archivo `js/script.js`: quité intentos previos de reproducir efectos de sonido (SFX) que resultaban molestos y concentré el script únicamente en el canvas de partículas y en el resaltador de navegación por scroll (*Scrollspy*).  
* **¿Qué comprendí?**  
  Comprendí cómo funciona el apilamiento de capas en el navegador mediante `z-index`, la importancia de `pointer-events: none` en overlays decorativos, y cómo optimizar bucles de Canvas recalculando coordenadas relativas solo ante eventos de redimensionamiento de ventana (*resize*).  
* **¿Qué descarté y por qué?**  
  Descarté efectos de sonido con Web Audio API y librerías externas de partículas (como particles.js) de varios megabytes. Con 60 líneas de JavaScript puro se logró un efecto más fluido, liviano y controlable.

---

## Registro de Pruebas y Correcciones Realizadas

A lo largo de las sesiones de trabajo entre el 04 y el 10 de noviembre de 2026, se realizaron pruebas constantes en navegador local (Google Chrome, Mozilla Firefox y simulación de dispositivos móviles con DevTools).

* **Prueba 1 — Menú de Navegación y Anclas Internas:**  
  * *Problema:* Al hacer clic en los enlaces del menú superior, la barra de navegación sticky tapaba el título de las secciones al posicionarse.  
  * *Corrección aplicada:* Se configuró `scroll-margin-top: 80px` en las secciones dentro de CSS para compensar la altura del encabezado fijo y garantizar que los títulos queden perfectamente visibles.
* **Prueba 2 — Rendimiento en Pantallas Móviles:**  
  * *Problema:* En pantallas de celulares con resolución de 375px a 420px, la tarjeta de proyecto con dos columnas (imagen a la izquierda y texto a la derecha) apretaba el texto hasta hacerlo ilegible.  
  * *Corrección aplicada:* Se añadió una regla `@media (max-width: 880px)` que convierte la cuadrícula en una sola columna fluida (`grid-template-columns: 1fr`), haciendo que la imagen se ubique arriba y el texto descriptivo abajo con ancho completo.
* **Prueba 3 — Accesibilidad y Contraste bajo el Filtro CRT:**  
  * *Problema:* Las etiquetas de tecnologías y los textos secundarios en color gris oscuro perdían contraste contra el fondo negro al pasar por las líneas de escaneo del monitor CRT.  
  * *Corrección aplicada:* Se elevaron los colores del texto secundario a un gris azulado claro (`#96a1bd`) y los enlaces a cyan brillante (`#00f5d4`), superando el ratio de contraste exigido por las pautas WCAG AA.
* **Prueba 4 — Preparación del Repositorio:**  
  * *Acción:* Inicialización local de Git en rama `main`, configuración del autor (`Ian Alexis Acevedo`), verificación de archivos en la raíz (`index.html`, `README.md`, `bitacora_ia.md`) y vinculación al repositorio remoto en GitHub para despliegue en GitHub Pages.
