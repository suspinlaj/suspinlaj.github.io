export const inicializarTema = () => {
    const btnTema = document.getElementById('btn-tema');
    const temaGuardado = localStorage.getItem('tema');

    if (temaGuardado === 'claro') {
        document.body.classList.add('tema-claro');
        btnTema.textContent = '⏾'; 
    }

    btnTema.addEventListener('click', () => {
        document.body.classList.toggle('tema-claro'); 
        
        if (document.body.classList.contains('tema-claro')) {
            localStorage.setItem('tema', 'claro');
            btnTema.textContent = '⏾';
        } else {
            localStorage.setItem('tema', 'oscuro');
            btnTema.textContent = '☀︎';
        }
    });
};