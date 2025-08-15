//toggle light and dark switches
const toggleBtn = document.getElementById('toggle')
    toggleBtn.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
    });
    toggleBtn.addEventListener('click', () => {
        document.body.classList.toggle('light-mode');
    });


//hovering the header section
function addHoverEffect(element, hoverColor, secondaryColor, defaultColor,defaultColor1) {
    if(document.body.classList.toggle('dark-mode')){
        element.addEventListener("mouseover", () => {
        element.style.color = hoverColor;
    });
    element.addEventListener("mouseout", () => {
        element.style.color = defaultColor;
    });
    }else if(document.body.classList.toggle('light-mode')){
        element.addEventListener("mouseover", () => {
        element.style.color = secondaryColor;
    });
        element.addEventListener("mouseout", () => {
        element.style.color = defaultColor1;
    });
    }
}
document.querySelectorAll(".hover-btn").forEach(btn => {
   addHoverEffect(btn, "#4c72f8", "#0f172a", "#7778a4","#283a69e6");
});

//transparent header when its scrolled down
window.addEventListener('scroll', () => {
    const header = document.getElementById('main-header');
    if(window.scrollY > 50){
        header.classList.add('scrolled')
    } else {
        header.classList.remove('scrolled');
    }
})

//hover underline in every title of section

function underlineHover(element, color1, color2){
    
}

//https://prismic.io/blog/css-hover-effects


// function addHoverEffect(element) {
//     element.addEventListener("mouseover", () => {
//         if (document.body.classList.contains("dark-mode")) {
//             element.style.color = "#ffcc00"; // hover color for dark
//         } else {
//             element.style.color = "#4c72f8"; // hover color for light
//         }
//     });
//     element.addEventListener("mouseout", () => {
//         if (document.body.classList.contains("dark-mode")) {
//             element.style.color = "#dddddd"; // default for dark
//         } else {
//             element.style.color = "#7778a4"; // default for light
//         }
//     });
// }
// document.querySelectorAll(".hover-btn").forEach(addHoverEffect);
