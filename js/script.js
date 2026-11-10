/**
 * ==========================================================================
 * PORTFOLIO RETRO - IAN ALEXIS ACEVEDO
 * Archivo: js/script.js
 * Funciones:
 * 1. Fondo interactivo de estrellas retro en Canvas (reactivo al cursor).
 * 2. Navegación activa dinámica al hacer scroll.
 * 3. Saludo en la consola del desarrollador.
 * ==========================================================================
 */

document.addEventListener("DOMContentLoaded", () => {

  /* ------------------------------------------------------------------------
     1. FONDO DE ESTRELLAS RETRO EN CANVAS
     Partículas suaves que flotan y se mueven levemente con el cursor
     ------------------------------------------------------------------------ */
  const canvas = document.getElementById("canvas-fondo");
  if (canvas) {
    const ctx = canvas.getContext("2d");
    let ancho = (canvas.width = window.innerWidth);
    let alto = (canvas.height = window.innerHeight);

    window.addEventListener("resize", () => {
      ancho = canvas.width = window.innerWidth;
      alto = canvas.height = window.innerHeight;
    });

    const particulas = [];
    const totalParticulas = 60;

    for (let i = 0; i < totalParticulas; i++) {
      particulas.push({
        x: Math.random() * ancho,
        y: Math.random() * alto,
        radio: Math.random() * 1.5 + 0.5,
        color: Math.random() > 0.4 ? "#00f5d4" : "#ffb703",
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        alfa: Math.random() * 0.7 + 0.2
      });
    }

    let mouseX = ancho / 2;
    let mouseY = alto / 2;

    window.addEventListener("mousemove", (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    });

    function animar() {
      ctx.clearRect(0, 0, ancho, alto);

      for (let i = 0; i < particulas.length; i++) {
        const p = particulas[i];
        p.x += p.vx;
        p.y += p.vy;

        // Rebote en bordes
        if (p.x < 0) p.x = ancho;
        if (p.x > ancho) p.x = 0;
        if (p.y < 0) p.y = alto;
        if (p.y > alto) p.y = 0;

        // Atracción suave al puntero
        const dx = mouseX - p.x;
        const dy = mouseY - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 100) {
          p.x += (dx / dist) * 0.3;
          p.y += (dy / dist) * 0.3;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radio, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.alfa;
        ctx.fill();
      }

      ctx.globalAlpha = 1;
      requestAnimationFrame(animar);
    }

    animar();
  }

  /* ------------------------------------------------------------------------
     2. NAVEGACIÓN ACTIVA AL HACER SCROLL (Scrollspy)
     ------------------------------------------------------------------------ */
  const secciones = document.querySelectorAll("section[id]");
  const enlacesNav = document.querySelectorAll(".nav-retro .enlace-nav");

  function actualizarNavActivo() {
    const scrollPos = window.scrollY + 180;

    secciones.forEach((seccion) => {
      const top = seccion.offsetTop;
      const altura = seccion.offsetHeight;
      const id = seccion.getAttribute("id");

      if (scrollPos >= top && scrollPos < top + altura) {
        enlacesNav.forEach((enlace) => {
          enlace.classList.remove("activo");
          if (enlace.getAttribute("href") === `#${id}`) {
            enlace.classList.add("activo");
          }
        });
      }
    });
  }

  window.addEventListener("scroll", actualizarNavActivo, { passive: true });

  /* ------------------------------------------------------------------------
     3. CONSOLA DE DESARROLLADOR
     ------------------------------------------------------------------------ */
  console.log(
    "%c> Ian Alexis Acevedo // Dev Portfolio",
    "background: #0b0e14; color: #00f5d4; font-family: monospace; font-size: 13px; font-weight: bold; padding: 4px 8px; border: 1px solid #00f5d4;"
  );
});
