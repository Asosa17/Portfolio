const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show')
        } else {
            entry.target.classList.remove('show')
        }
    })
})

const childs = document.querySelectorAll('.child',)
const hidden = document.querySelectorAll('.hidden',)

childs.forEach((el) => {
    observer.observe(el)
})
hidden.forEach((el) => {
    observer.observe(el)
})

const btnTheme = document.getElementById("theme");
const iconTheme = document.getElementById("theme-icon");
const fondo = document.getElementsByClassName("fondo");
const gris = document.getElementsByClassName("gris");
const text = document.getElementsByClassName("text");
const moon = '<i class="ri-contrast-2-line"></i>';
const sun = '<i class="ri-sun-line"></i>';

iconTheme.innerHTML = moon;
document.body.classList.add('light-theme')

function toggleTheme() {
    if (iconTheme.innerHTML == moon) {
        iconTheme.innerHTML = "";
        iconTheme.innerHTML = sun;
        document.body.classList.remove('light-theme')
        document.body.classList.add('dark-theme')
    } else {
        iconTheme.innerHTML = "";
        iconTheme.innerHTML = moon;
        document.body.classList.remove('dark-theme')
        document.body.classList.add('light-theme')
    }
}

btnTheme.addEventListener("click", () => {
    toggleTheme()
});
// Función para ajustar el tamaño de fuente en función del ancho de la pantalla
function adjustFontSize() {
    const screenWidth = window.innerWidth;
    const text2 = document.querySelector('.text2');
    const text3 = document.querySelector('.text3');

    if (screenWidth <= 768) {
        text2.style.fontSize = '20px';
        text3.style.fontSize = '16px';
    } else if (screenWidth <= 1024) {
        text2.style.fontSize = '30px';
        text3.style.fontSize = '24px';
    } else {
        text2.style.fontSize = '40px';
        text3.style.fontSize = '32px';
    }
}

// Llama a la función inicialmente y cada vez que cambie el tamaño de la ventana
adjustFontSize();
window.addEventListener('resize', adjustFontSize);




