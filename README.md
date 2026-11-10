# Portfolio Personal - Ian Alexis Acevedo

Primera versión (v0.1) de mi sitio web personal, desarrollado para la materia Aplicaciones Informáticas II (6º E) en el Instituto San Agustín.

El proyecto reúne mis trabajos prácticos, proyectos escolares y desarrollos independientes en videojuegos y software, con el objetivo de presentar mi perfil de cara al ingreso a la Licenciatura en Ciencias de la Computación en FaMAF (Universidad Nacional de Córdoba).

---

## Enlaces

- Sitio publicado: https://Angrymanaboutcomp.github.io
- Repositorio: https://github.com/Angrymanaboutcomp/Angrymanaboutcomp.github.io

---

## Estructura del proyecto

El sitio está construido con tecnologías web estándar (HTML5, CSS3 y JavaScript puro), sin frameworks externos ni dependencias pesadas:

```text
Angrymanaboutcomp.github.io/
├── index.html            Página principal con marcado semántico
├── README.md             Documentación general del repositorio
├── bitacora_ia.md        Registro de consultas y proceso de desarrollo con IA
├── css/
│   └── estilos.css       Hoja de estilos con variables, efecto CRT y diseño adaptativo
├── js/
│   └── script.js         Partículas de fondo en Canvas y navegación activa por scroll
└── assets/
    └── img/              Imágenes de evidencia de los proyectos
        ├── proyecto-eternauta.jpg
        ├── proyecto-factorinv.jpg
        └── proyecto-apunteqr.jpg
```

---

## Proyectos incluidos

### 1. Eternauta: Dark Winter (2026)
Arcade shooter lateral en 2D desarrollado en Godot Engine 4 para la feria de ciencias del colegio. Adapta la historieta de H.G. Oesterheld y Francisco Solano López a un formato jugable en el stand escolar, con 4 niveles progresivos, mecánicas de supervivencia frente a la nevada mortal, desgaste del traje aislante y combate contra invasores.

- Tecnologías: Godot Engine 4, GDScript, físicas 2D, máquinas de estados (FSM).
- Rol: Programación de la lógica del personaje, daño por radiación ambiental e inteligencia artificial básica de patrullaje de enemigos.

### 2. Factorinv (2026)
Mod independiente para Minecraft desarrollado sobre la API de NeoForge en Java. Reemplaza la mesa de trabajo convencional de 3x3 por un sistema de crafteo en cola y en cascada inspirado en el juego Factorio, resolviendo ingredientes intermedios de forma automática en el inventario del jugador.

- Tecnologías: Java, NeoForge API, Gradle, estructuras de datos recursivas.
- Rol: Desarrollo del algoritmo de resolución de árboles de recetas, interfaz gráfica personalizada y sincronización de paquetes de red cliente-servidor sin fallos de duplicación.

### 3. ApunteQR (2026)
Aplicación web diseñada para resolver el intercambio de resúmenes y fotos de pizarrones entre compañeros en el aula. Permite que un alumno cargue imágenes de apuntes y genere en pantalla un código QR dinámico para que los demás puedan escanearlo y descargarlo en el momento desde el navegador, sin necesidad de crear cuentas, instalar aplicaciones ni compartir números de teléfono privados.

- Tecnologías: JavaScript nativo, HTML5, CSS3, API de generación de códigos QR.
- Rol: Maquetado enfocado en dispositivos móviles con conexiones lentas, scripts de lectura/generación de códigos QR y optimización de carga de imágenes.

---

## Decisiones de diseño y estética

- Paleta retro-tech: Modo oscuro con fondo profundo (`#0b0e14`), acentos en cyan neón (`#00f5d4`), ámbar cálido (`#ffb703`) y magenta sintetizador (`#e056fd`).
- Efecto CRT permanente: Capa fija construida con gradientes CSS repetidos (`repeating-linear-gradient`) y viñeta radial oscura para emular la curvatura y textura de los monitores de tubo arcade de los años 90.
- Terminal interactiva en la cabecera: En lugar de fotografías genéricas de stock, el inicio presenta un bloque de comandos (`ian@pc:~`) que resume mi recorrido de aprendizaje (Python, C++, GDScript y nociones de Java), mis herramientas de desarrollo y datos académicos.
- Fondo dinámico en Canvas: Rutina liviana en JavaScript que dibuja partículas suaves reaccionando levemente al puntero del mouse, consumiendo el mínimo de procesamiento.
- Accesibilidad y diseño adaptable: Maquetado responsivo mediante CSS Grid y Flexbox que se reorganiza en una sola columna en resoluciones móviles (hasta 360px) manteniendo proporciones legibles.

---

## Proceso de desarrollo y uso de IA

El seguimiento del desarrollo mediante la metodología de vibe coding responsable, el detalle de los prompts aplicados, las decisiones de descarte y el registro de correcciones técnicas se encuentran documentados en el archivo [bitacora_ia.md](bitacora_ia.md).

---

## Contacto

- Correo electrónico: i.a_acevedo39@gmail.com
- Perfil de GitHub: https://github.com/Angrymanaboutcomp
