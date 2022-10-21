const app = {
  init(){
    app.changeMenuIcon();

    app.displayMenuIcons();

    app.displayModal();

    app.reveal();

    // app.svgDrawing();
    
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

  svgDrawing() {
    let path = document.getElementById('path');
    let pathLenght = path.getTotalLength();

    path.style.strokeDasharray = pathLenght + ' ' + pathLenght;

    path.style.strokeDashoffset = pathLenght;

    window.addEventListener('scroll', () => {

      console.log(window.scrollY)

        const scrollPercentage = (document.documentElement.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);
  
        const drawLength = pathLenght * scrollPercentage * scrollPercentage;
  
        path.style.strokeDashoffset = pathLenght - drawLength;
    })
}
}

//~ ----------  Objects
const menuHTMLElm = document.querySelector('.header__menu');
const linkedinIcon = document.getElementById('github');
const githubIcon = document.getElementById('linkedin');
const discoverBtn = document.querySelector('.main__introduction__btn')
const textAbout = document.querySelector('.main__introduction__text')
const modal = document.querySelector('.main__modal')
  

document.addEventListener('DOMContentLoaded', app.init);
