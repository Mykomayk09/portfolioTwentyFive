//toggle light and dark switches
const toggleBtn = document.getElementById('toggle')
    toggleBtn.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
    });
    toggleBtn.addEventListener('click', () => {
        document.body.classList.toggle('light-mode');
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

function underlineHover(element, color1, color2){
    if(document.body.scrollTop > 50){

    }
}
const currentDate = new Date();
const currentYear = currentDate.getFullYear();
document.getElementById('year').textContent = currentYear;


(function(){
    emailjs.init("A6DBNVW06kfSpH3tW"); // Your Public Key
  })();

  document.getElementById("contact-form").addEventListener("submit", function(e) {
    e.preventDefault();
    emailjs.sendForm("service_u3lqth5", "template_vqi5scb", this)
      .then(() => alert("Message sent successfully!"))
      .catch((error) => console.error("Failed to send:", error));
  });




// const homeSection = document.getElementsByClassName('Home_page_padding');
// const aboutSection = document.getElementsByClassName('about_me');
// const aboutBtn = document.getElementById('about');
//     aboutBtn.addEventListener('click', () => {
//         homeSection.style.display = "none";
//         aboutSection.style.display = "block";
//     })

//hamburger icon
//if(window.resizeTo < 768){
//element.classList.display=""}
//hover underline in every title of section