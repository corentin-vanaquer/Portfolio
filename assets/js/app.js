const app = {
  init: function() {
    app.changeMenuIcon();

    app.displayMenuIcons();

    app.displayModal();

    app.reveal();

    app.contactScroll()
    
    window.addEventListener("scroll", app.reveal);
  },
  
  
//~ ----------  Change menu icon
changeMenuIcon() {
    menuHTMLElm.addEventListener('click', () => {
      menuHTMLElm.classList.toggle('change');
  });
},

//~ ----------  Display github-linkedin icons
displayMenuIcons() {
  menuHTMLElm.addEventListener('click', () => {
      linkedinIcon.classList.toggle('display');
      githubIcon.classList.toggle('display');
      contactIcon.classList.toggle('display');
    });
},

//~ ----------  Display modal
displayModal() {
    discoverBtn.addEventListener('click', () => {
    textAbout.classList.toggle('hidden')
    modal.classList.toggle('main__flex')
    if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
      scrollTo({
        top:620,
        behavior: "smooth"
      })
    }else{
      scrollTo({
        top:920,
        behavior: "smooth"
      })
    }
  });
},


//~ ----------  Display on scroll
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

  //~ ----------  Scroll all the way down
  contactScroll() {
    contactIcon.addEventListener('click', () => {
      scrollTo({
        top:5000,
        behavior: "smooth"
      })
    })
  }
}

//~ ----------  Objects
const menuHTMLElm = document.querySelector('.header__menu');
const linkedinIcon = document.getElementById('github');
const githubIcon = document.getElementById('linkedin');
const contactIcon = document.getElementById('contact');
const discoverBtn = document.querySelector('.main__introduction__btn')
const textAbout = document.querySelector('.main__introduction__text')
const modal = document.querySelector('.main__modal')
  

document.addEventListener('DOMContentLoaded', app.init);
