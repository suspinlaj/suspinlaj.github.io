document.addEventListener('DOMContentLoaded', () => {
    
    // --- DATOS DE PROYECTOS ---
    const proyectosData = {
        "pedrapp": {
            titulo: "★ PedrApp",
            color: "var(--color-azul)", 
            descripcionLarga: "App a medida para el seguimiento integral de estudio y entrenamiento de oposiciones. Incluye un mapa interactivo con conexión a Waze, temporizador pomodoro flotante con notificaciones en segundo plano, y un gestor de pruebas físicas con métricas de progreso.",
            tecnologias: ["Desarrollo Móvil", "Lógica de Negocio", "UI/UX"],
            imagenPrincipal: "./assets/images/pedrapp.png",
            capturas: [
                "./assets/images/capturas/pedrapp1.jpeg",
                "./assets/images/capturas/pedrapp2.jpeg",
                "./assets/images/capturas/pedrapp3.jpeg",
                "./assets/images/capturas/pedrapp4.jpeg",
                "./assets/images/capturas/pedrapp5.jpeg",
                "./assets/images/capturas/pedrapp6.jpeg",
                "./assets/images/capturas/pedrapp7.jpeg",
                "./assets/images/capturas/pedrapp8.jpeg",
            ],
            demoUrl: "#",
            githubUrl: "https://github.com/suspinlaj/pedrapp"
        },
        "slimash": {
            titulo: "★ Slimash",
            color: "var(--color-amarillo)", 
            descripcionLarga: "Juego de reacción rápida con estética pixel art donde hay que poner a prueba los reflejos. Desarrollo en Android nativo enfocado en la inmersión del usuario, gestión de estados y animaciones de UI personalizadas.",
            tecnologias: ["Kotlin", "Pixel Art", "Multimedia", "Android"],
            imagenPrincipal: "./assets/images/slimash.png",
            capturas: [
                "./assets/images/capturas/slimash1.jpeg",
                "./assets/images/capturas/slimash2.jpeg",
                "./assets/images/capturas/slimash3.jpeg",
                "./assets/images/capturas/slimash4.jpeg",
            ],
            demoUrl: "#",
            githubUrl: "https://github.com/suspinlaj/slimash"
        },
        "techbot": {
            titulo: "★ TechBot",
            color: "var(--color-rosa)", 
            orientacion: "horizontal", 
            descripcionLarga: "Bot automatizado para la gestión técnica y organizativa. Desarrollo enfocado en la optimización de procesos y respuestas en tiempo real.",
            tecnologias: ["Desarrollo Móvil", "Lógica matricial", "Ilustración"],
            imagenPrincipal: "./assets/images/techbot.png",
            capturas: [
                "./assets/images/capturas/techbot1.png",
                "./assets/images/capturas/techbot2.png",
                "./assets/images/capturas/techbot3.png",
                "./assets/images/capturas/techbot4.png",
            ],
            demoUrl: "#",
            githubUrl: "https://github.com/suspinlaj/Tech-Bot"
        },
        "lqntd": {
            titulo: "★ Lo que nunca te dije",
            color: "var(--color-verde)", 
            descripcionLarga: "Diario personal íntimo, seguro y estético. Aplicación desarrollada en Flutter con integración de servicios en la nube mediante Firebase, cifrado local y optimización avanzada de archivos multimedia y compresión de vídeo en segundo plano.",
            tecnologias: ["Flutter", "Firebase", "UI/UX", "Cloud Storage"],
            imagenPrincipal: "./assets/images/lqntd.png",
            capturas: [
                "./assets/images/capturas/lqntd1.jpeg",
                "./assets/images/capturas/lqntd2.jpeg",
                "./assets/images/capturas/lqntd3.jpeg",
                "./assets/images/capturas/lqntd4.jpeg",
                "./assets/images/capturas/lqntd5.jpeg"
            ],
            demoUrl: "#",
            githubUrl: "https://github.com/suspinlaj/lo-que-nunca-te-dije"
        }
    };

    // --- ELEMENTOS DEL DOM PRINCIPALES ---
    const tarjetasProyectos = document.querySelectorAll('#proyectos article');
    const modal = document.getElementById('modal-proyecto');
    const modalContenido = document.querySelector('.modal-contenido'); 
    const modalCuerpo = document.getElementById('modal-cuerpo');
    const btnCerrar = document.getElementById('cerrar-modal');
    
    let intervaloSlider; 

    // --- VENTANA DE ZOOM ---
    const zoomModal = document.createElement('div');
    zoomModal.id = 'modal-zoom';
    zoomModal.className = 'modal-oculta';
    zoomModal.innerHTML = `
        <div class="zoom-contenido">
            <button id="cerrar-zoom">✖</button>
            <img id="img-zoom" src="" alt="Captura ampliada">
        </div>
    `;
    document.body.appendChild(zoomModal);

    const imgZoom = document.getElementById('img-zoom');
    const btnCerrarZoom = document.getElementById('cerrar-zoom');

    const abrirZoom = (src, color) => {
        imgZoom.src = src;
        zoomModal.style.setProperty('--color-modal-actual', color);
        zoomModal.classList.remove('modal-oculta');
        zoomModal.classList.add('modal-visible');
    };

    const cerrarZoom = () => {
        zoomModal.classList.remove('modal-visible');
        zoomModal.classList.add('modal-oculta');
    };

    btnCerrarZoom.addEventListener('click', cerrarZoom);
    zoomModal.addEventListener('click', (evento) => {
        if (evento.target === zoomModal) cerrarZoom();
    });

    const abrirModal = (projectId) => {
        const datos = proyectosData[projectId];
        if (!datos) return;

        // Establecer el color de la tarjeta para usarlo en CSS
        modalContenido.style.setProperty('--color-modal-actual', datos.color);

        let htmlTags = datos.tecnologias.map(tech => `<li>${tech}</li>`).join('');
        
        let htmlCoverflow = '';
        if (datos.capturas && datos.capturas.length > 0) {
            let claseExtra = datos.orientacion === "horizontal" ? "horizontal" : ""; 
            
            let slides = datos.capturas.map((img, index) => 
                `<img src="${img}" alt="Captura ${index + 1}" class="coverflow-slide ${claseExtra}">`
            ).join('');

            htmlCoverflow = `
                <div class="coverflow-contenedor">
                    <button class="slider-btn prev" id="btn-prev">❮</button>
                    <div class="coverflow-track" id="coverflow-track">
                        ${slides}
                    </div>
                    <button class="slider-btn next" id="btn-next">❯</button>
                </div>
            `;
        }

        // Inyección del contenido HTML
        modalCuerpo.innerHTML = `
            <h3>${datos.titulo}</h3>
            <p>${datos.descripcionLarga}</p>
            
            ${htmlCoverflow}

            <ul>${htmlTags}</ul>
            
            <div class="modal-botones">
                <a href="${datos.demoUrl}" target="_blank">Ver Demo ↗</a>
                <a href="${datos.githubUrl}" target="_blank">GitHub ↗</a>
            </div>
        `;
        
        modal.classList.remove('modal-oculta');
        modal.classList.add('modal-visible');
        document.body.style.overflow = 'hidden';

        // ---  CARRUSEL ---
        if (datos.capturas && datos.capturas.length > 0) {
            let indiceActual = 0;
            const slidesDOM = modalCuerpo.querySelectorAll('.coverflow-slide');
            const btnPrev = document.getElementById('btn-prev');
            const btnNext = document.getElementById('btn-next');

            const actualizarCoverflow = () => {
                slidesDOM.forEach((slide, i) => {
                    const diferencia = i - indiceActual;
                    const direccion = Math.sign(diferencia); 
                    const absDiferencia = Math.abs(diferencia);
                    
                    let transformacion = `translate(-50%, -50%) `; 
                    
                    if (diferencia === 0) {
                        // Imagen Central Activa
                        transformacion += `translateX(0px) scale(1.1) rotateY(0deg)`;
                        slide.style.zIndex = 50;
                        slide.style.opacity = 1;
                        slide.style.filter = 'brightness(1)';
                    } else {
                        // Imágenes Secundarias 
                        const empujeBase = datos.orientacion === "horizontal" ? 170 : 100; 
                        const pushX = direccion * (empujeBase + (absDiferencia * 40)); 
                        const giroY = direccion * -45; 
                        const escala = Math.max(0.5, 1 - (absDiferencia * 0.2));
                        
                        transformacion += `translateX(${pushX}px) scale(${escala}) rotateY(${giroY}deg)`;
                        slide.style.zIndex = 50 - absDiferencia; 
                        slide.style.opacity = Math.max(0, 1 - (absDiferencia * 0.3)); 
                        slide.style.filter = 'brightness(0.4)'; 
                    }
                    
                    slide.style.transform = transformacion;
                });
            };

            const pasarSiguiente = () => {
                indiceActual = (indiceActual === slidesDOM.length - 1) ? 0 : indiceActual + 1;
                actualizarCoverflow();
            };

            const pasarAnterior = () => {
                indiceActual = (indiceActual === 0) ? slidesDOM.length - 1 : indiceActual - 1;
                actualizarCoverflow();
            };

            btnNext.addEventListener('click', () => { pasarSiguiente(); reiniciarAutoplay(); });
            btnPrev.addEventListener('click', () => { pasarAnterior(); reiniciarAutoplay(); });

            slidesDOM.forEach((slide, index) => {
                slide.addEventListener('click', () => {
                    if (indiceActual === index) {
                        // Abrir imagen en Zoom
                        abrirZoom(slide.src, datos.color);
                        clearInterval(intervaloSlider); 
                    } else {
                        // Traer imagen seleccionada al frente
                        indiceActual = index;
                        actualizarCoverflow();
                        reiniciarAutoplay();
                    }
                });
            });

            // --- AUTOPLAY CARRUSEL ---
            const iniciarAutoplay = () => { intervaloSlider = setInterval(pasarSiguiente, 3000); };
            const reiniciarAutoplay = () => { clearInterval(intervaloSlider); iniciarAutoplay(); };

            actualizarCoverflow();
            iniciarAutoplay();
        }
    };

    // --- EVENTOS CERRAR MODALES ---
    const cerrarModal = () => {
        clearInterval(intervaloSlider); 
        modal.classList.remove('modal-visible');
        modal.classList.add('modal-oculta');
        setTimeout(() => { modalCuerpo.innerHTML = ''; }, 300);
        document.body.style.overflow = 'auto'; 
    };

    tarjetasProyectos.forEach(tarjeta => {
        tarjeta.addEventListener('click', () => {
            const idProyecto = tarjeta.getAttribute('data-id');
            abrirModal(idProyecto);
        });
    });

    btnCerrar.addEventListener('click', cerrarModal);
    
    modal.addEventListener('click', (evento) => {
        if (evento.target === modal) cerrarModal();
    });

    // Accesibilidad Teclado (ESC)
    document.addEventListener('keydown', (evento) => {
        if (evento.key === 'Escape') {
            if (zoomModal.classList.contains('modal-visible')) {
                cerrarZoom();
            } else if (modal.classList.contains('modal-visible')) {
                cerrarModal();
            }
        }
    });
});