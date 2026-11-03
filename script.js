// Nos aseguramos de que el HTML haya cargado completamente antes de ejecutar nada
document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Seleccionamos los elementos clave del DOM
    const tarjetasProyectos = document.querySelectorAll('#proyectos article');
    const modal = document.getElementById('modal-proyecto');
    const modalCuerpo = document.getElementById('modal-cuerpo');
    const btnCerrar = document.getElementById('cerrar-modal');

    // 2. Función para abrir el modal
    const abrirModal = (tarjeta) => {
        // Copiamos todo el HTML interior de la tarjeta en la que hemos hecho clic
        const contenidoHTML = tarjeta.innerHTML;
        
        // Lo inyectamos en el cuerpo del modal
        modalCuerpo.innerHTML = contenidoHTML;
        
        // Cambiamos las clases para mostrarlo
        modal.classList.remove('modal-oculta');
        modal.classList.add('modal-visible');
        
        // Bloqueamos el scroll de la página de fondo para que no se mueva al hacer scroll en el modal
        document.body.style.overflow = 'hidden';
    };

    // 3. Función para cerrar el modal
    const cerrarModal = () => {
        modal.classList.remove('modal-visible');
        modal.classList.add('modal-oculta');
        
        // Vaciamos el contenido para que no haya parpadeos raros la próxima vez
        setTimeout(() => {
            modalCuerpo.innerHTML = '';
        }, 300); // Esperamos a que termine la animación de CSS

        // Restauramos el scroll de la página
        document.body.style.overflow = 'auto'; 
    };

    // 4. Asignamos el evento de "clic" a cada tarjeta de proyecto
    tarjetasProyectos.forEach(tarjeta => {
        tarjeta.addEventListener('click', () => {
            abrirModal(tarjeta);
        });
    });

    // 5. Asignamos los eventos para cerrar la ventana
    
    // Clic en el botón X
    btnCerrar.addEventListener('click', cerrarModal);
    
    // Clic fuera de la ventana (en el fondo oscuro)
    modal.addEventListener('click', (evento) => {
        if (evento.target === modal) {
            cerrarModal();
        }
    });

    // Accesibilidad: Cerrar al pulsar la tecla "Escape" del teclado
    document.addEventListener('keydown', (evento) => {
        if (evento.key === 'Escape' && modal.classList.contains('modal-visible')) {
            cerrarModal();
        }
    });

});