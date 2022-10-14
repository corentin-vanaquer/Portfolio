const app = {
  init(){
    app.changeMenuIcon();

    app.displayMenuIcons();

    app.displayModal();

    app.reveal();
    
    window.addEventListener("scroll", app.reveal);
  },
  
  
//~ ----------  Change menu icon
changeMenuIcon() {
    menuHTMLElm.addEventListener('click', () => {
      menuHTMLElm.classList.toggle('change');
  });
},

//~ ----------  display github-linkedin icons
displayMenuIcons() {
  menuHTMLElm.addEventListener('click', () => {
      linkedinIcon.classList.toggle('display');
      githubIcon.classList.toggle('display');
    });
},

//~ ----------  display modal
displayModal() {
    discoverBtn.addEventListener('click', () => {
    textAbout.classList.toggle('hidden')
    modal.classList.toggle('main__flex')
  });
},


//~ ----------  display on scroll
reveal() {
    const reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
      const windowHeight = window.innerHeight;
      const elementTop = reveals[i].getBoundingClientRect().top;
      const elementVisible = 150;
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  },
  
}

//~ ----------  Objects
const menuHTMLElm = document.querySelector('.header__menu');
const linkedinIcon = document.getElementById('github');
const githubIcon = document.getElementById('linkedin');
const discoverBtn = document.querySelector('.main__introduction__btn')
const textAbout = document.querySelector('.main__introduction__text')
const modal = document.querySelector('.main__modal')
  

document.addEventListener('DOMContentLoaded', app.init);
