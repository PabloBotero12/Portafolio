// Menu
const hamburger = document.querySelector(".hamburger");
const navList = document.querySelector("nav ul");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle('active');
    navList.classList.toggle('active');
}); 

// dar - light mode 
const darkModeButton = document.getElementById("darkModeButton");
const body = document.body; 

const enbaleDarkMode = () => {
    body.classList.add('dark-mode');
} 

const disableDarkMode = () => {
    body.classList.remove('dark-mode');
}

darkModeButton.addEventListener('change', () => {
    if(darkModeButton.checked) {
        disableDarkMode();
    } else {
        enbaleDarkMode();
    }
}) 

//Multiple texto
const typed = new Typed('.multiple', {
    strings:['Front-End Developer', 'Back-End Developer', 'Desarrollador web'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

document.addEventListener('DOMContentLoaded', function () {
    var menuButton = document.querySelector('.hamburger');
    var menuList = document.querySelector('.list-darkmode-menu ul');

    menuButton.addEventListener('click', function () {
        // Alterna la visibilidad del menú al hacer clic en el botón
        menuList.style.left = (menuList.style.left === '' || menuList.style.left === '-100%') ? '0%' : '-100%';
    });
});

document.getElementById('downloadButton').addEventListener('click', function () {
    // Reemplaza 'ruta/a/tu_cv.pdf' con la ruta real de tu hoja de vida
    var cvUrl = 'CV/CV - Juan Pablo Botero Galeano.pdf';

    // Crea un enlace temporal y simula un clic para descargar el archivo
    var link = document.createElement('a');
    link.href = cvUrl;
    link.download = 'CV - Juan Pablo Botero.pdf'; // Puedes establecer un nombre de archivo predeterminado
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});
