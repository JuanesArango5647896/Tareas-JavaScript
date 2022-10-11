export const crearEncabezado = () => {
    const navContent = `
        <nav>
            <ul>
                <li><a href = "#">Home</a></li>
                <br>
                <li><a href = "#">Building</a></li>
                <br>
                <li><a href = "#">University</a></li>
                <br>
            </ul>
        </nav>
    `;

    //En el index.html voy a crear un div, y eso lo guarda como un objeto (mainNav)
    const mainNav = document.createElement('div');
    //Se le asigno una clase al div <div class = "main-navigation"></div>
    mainNav.classList.add("main-navigation");
    //Cree el nav
    mainNav.innerHTML = navContent;
    //Agregarlo en index.html
    document.body.appendChild(mainNav);
}