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


function initClient() {
    gapi.client.init({
      apiKey: "YOUR_API_KEY",
      clientId: "348033447317-08j2grfjtpfokp6vpehtsj63gae4nq29.apps.googleusercontent.com",
      scope: "https://www.googleapis.com/auth/gmail.send",
      discoveryDocs: ["https://www.googleapis.com/discovery/v1/apis/gmail/v1/rest"]
    }).then(() => {
      // Now you can sign in and send emails
    });
  }

  gapi.load("client:auth2", initClient);
(function(){
    emailjs.init("A6DBNVW06kfSpH3tW");
  })();

  document.getElementById("contact-form").addEventListener("submit", function(e) {
    e.preventDefault();
    emailjs.sendForm("service_u3lqth5", "template_vqi5scb", this)
      .then(() => alert("Message sent successfully!"))
      .catch(() => alert("Failed to send. Please try again."));
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