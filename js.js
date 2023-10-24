const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry)=>{
        if(entry.isIntersecting) {
            entry.target.classList.add('show')
        } else {
            entry.target.classList.remove('show')
        }
    })
})

const childs = document.querySelectorAll('.child',)
const hidden = document.querySelectorAll('.hidden',)

childs.forEach((el)=> {
    observer.observe(el)
})
hidden.forEach((el)=> {
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
