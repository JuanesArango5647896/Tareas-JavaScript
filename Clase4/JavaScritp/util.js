export const crearBody = () => {
    const navContent = `
        <nav>
            <a href="#">Inicio</a>
            <br>
            <a href="#">Warzone</a>
            <br>
            <a href="#">Fornite</a>
            <br>
            <a href="#">Need For Speed</a>
            <br>
            <a href="#">Fifa</a>
        </nav>
        <h1 class="title">¿Que es un VideoJuego?</h1>
            <br>
            <br>
            <p>
                Un videojuego es una aplicación interactiva orientada al entretenimiento que, 
                a través de ciertos mandos o controles, permite simular experiencias en la 
                pantalla de un televisor, una computadora u otro dispositivo electrónico.
            </p>
    `;

    const utilNav = document.createElement('div');
    utilNav.classList.add("util-navigation");
    utilNav.innerHTML = navContent;
    document.body.appendChild(utilNav);
}