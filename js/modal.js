import { proyectosData } from './data.js';
import { idiomaActual } from './i18n.js';

export const inicializarModales = () => {
    const tarjetasProyectos = document.querySelectorAll('#proyectos article');
    const modal = document.getElementById('modal-proyecto');
    const modalContenido = document.querySelector('.modal-contenido'); 
    const modalCuerpo = document.getElementById('modal-cuerpo');
    const btnCerrar = document.getElementById('cerrar-modal');
    
    let intervaloSlider; 

    // --- VENTANA DE ZOOM ---
    let arrayZoomActual = [];
    let indiceZoomActual = 0;

    const zoomModal = document.createElement('div');
    zoomModal.id = 'modal-zoom';
    zoomModal.className = 'modal-oculta';
    zoomModal.innerHTML = `
        <div class="zoom-contenido">
            <button id="cerrar-zoom">✖</button>
            <button class="zoom-btn prev" id="zoom-prev">❮</button>
            <button class="zoom-btn next" id="zoom-next">❯</button>
            <img id="img-zoom" src="" alt="Captura ampliada">
        </div>
    `;
    document.body.appendChild(zoomModal);

    const imgZoom = document.getElementById('img-zoom');
    const btnCerrarZoom = document.getElementById('cerrar-zoom');
    const btnZoomPrev = document.getElementById('zoom-prev');
    const btnZoomNext = document.getElementById('zoom-next');

    const abrirZoom = (src, color, index, arrayFotos) => {
        arrayZoomActual = arrayFotos;
        indiceZoomActual = index;
        imgZoom.src = src;
        zoomModal.style.setProperty('--color-modal-actual', color);
        zoomModal.classList.remove('modal-oculta');
        zoomModal.classList.add('modal-visible');
    };

    const cerrarZoom = () => {
        zoomModal.classList.remove('modal-visible');
        zoomModal.classList.add('modal-oculta');
    };

    btnZoomPrev.addEventListener('click', (e) => {
        e.stopPropagation();
        indiceZoomActual = (indiceZoomActual === 0) ? arrayZoomActual.length - 1 : indiceZoomActual - 1;
        imgZoom.src = arrayZoomActual[indiceZoomActual];
    });

    btnZoomNext.addEventListener('click', (e) => {
        e.stopPropagation();
        indiceZoomActual = (indiceZoomActual === arrayZoomActual.length - 1) ? 0 : indiceZoomActual + 1;
        imgZoom.src = arrayZoomActual[indiceZoomActual];
    });

    btnCerrarZoom.addEventListener('click', cerrarZoom);
    zoomModal.addEventListener('click', (evento) => {
        if (evento.target === zoomModal) cerrarZoom();
    });

    // --- MODAL PRINCIPAL ---
    const abrirModal = (projectId) => {
        const datos = proyectosData[projectId];
        if (!datos) return;

        modalContenido.style.setProperty('--color-modal-actual', datos.color);

        let htmlTags = datos.tecnologias[idiomaActual].map(tech => `<li>${tech}</li>`).join('');
        
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

        const textoDemo = idiomaActual === 'es' ? 'Ver Video ↗' : 'Watch Video ↗';

        modalCuerpo.innerHTML = `
            <h3>${datos.titulo}</h3>
            <p>${datos.descripcionLarga[idiomaActual]}</p>
            
            ${htmlCoverflow}

            <ul>${htmlTags}</ul>
            
            <div class="modal-botones">
                <a href="${datos.demoUrl}" target="_blank">${textoDemo}</a>
                <a href="${datos.githubUrl}" target="_blank">GitHub ↗</a>
            </div>
        `;
        
        modal.classList.remove('modal-oculta');
        modal.classList.add('modal-visible');
        document.body.style.overflow = 'hidden';

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
                        transformacion += `translateX(0px) scale(1.1) rotateY(0deg)`;
                        slide.style.zIndex = 50;
                        slide.style.opacity = 1;
                        slide.style.filter = 'brightness(1)';
                    } else {
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
                        abrirZoom(slide.src, datos.color, index, datos.capturas);
                        clearInterval(intervaloSlider); 
                    } else {
                        indiceActual = index;
                        actualizarCoverflow();
                        reiniciarAutoplay();
                    }
                });
            });

            const iniciarAutoplay = () => { intervaloSlider = setInterval(pasarSiguiente, 3000); };
            const reiniciarAutoplay = () => { clearInterval(intervaloSlider); iniciarAutoplay(); };

            actualizarCoverflow();
            iniciarAutoplay();
        }
    };

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

    document.addEventListener('keydown', (evento) => {
        if (evento.key === 'Escape') {
            if (zoomModal.classList.contains('modal-visible')) {
                cerrarZoom();
            } else if (modal.classList.contains('modal-visible')) {
                cerrarModal();
            }
        }
    });
};