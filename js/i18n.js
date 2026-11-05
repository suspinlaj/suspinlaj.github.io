import { traducciones } from './data.js';

export let idiomaActual = localStorage.getItem('idioma') || 'es';

export const inicializarIdioma = () => {
    const btnIdioma = document.getElementById('btn-idioma');

    const aplicarIdioma = (idioma) => {
        document.querySelectorAll('[data-i18n]').forEach(elemento => {
            const clave = elemento.getAttribute('data-i18n');
            if (traducciones[idioma][clave]) {
                elemento.innerHTML = traducciones[idioma][clave];
            }
        });
        btnIdioma.textContent = idioma === 'es' ? 'EN' : 'ES';
    };

    btnIdioma.addEventListener('click', () => {
        idiomaActual = idiomaActual === 'es' ? 'en' : 'es'; 
        localStorage.setItem('idioma', idiomaActual);       
        aplicarIdioma(idiomaActual);                        
        
        // location.reload(); 
    });

    aplicarIdioma(idiomaActual);
};