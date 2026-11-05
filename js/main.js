import { inicializarIdioma } from './i18n.js';
import { inicializarTema } from './theme.js';
import { inicializarModales } from './modal.js';

document.addEventListener('DOMContentLoaded', () => {
    
    // Iniciar Módulos
    inicializarIdioma();
    inicializarTema();
    inicializarModales();

    // --- ANIMACIÓN DE SCROLL ---
    const elementosAnimables = document.querySelectorAll('section h2, #proyectos article, #skills article, ul.timeline > li');
    
    elementosAnimables.forEach(el => el.classList.add('oculto-scroll'));

    const observadorScroll = new IntersectionObserver((entradas) => {
        entradas.forEach(entrada => {
            if (entrada.isIntersecting) {
                entrada.target.classList.add('visible-scroll');
                observadorScroll.unobserve(entrada.target); 
            }
        });
    }, {
        threshold: 0.15 
    });

    elementosAnimables.forEach(el => observadorScroll.observe(el));
});