//let navMenu = document.getElementById('nav-menu');
let navMenu  = document.querySelector('.nav__menu');

//let navToggle = document.getElementById('nav-toggle');
let navToggle  = document.querySelector('.nav__toggle');

//let navClose = document.getElementById('nav-close');
let navClose  = document.querySelector('.nav__close');

/*=====Show Menu=====*/

if(navToggle){
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}


/*=====Menu Hidden=====*/

if(navClose){
    navClose.addEventListener('click', ()=> {
        navMenu.classList.remove('show-menu')
    })
}


const navLink = document.querySelectorAll('.nav__link');

const linkAction = () => {
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}

navLink.forEach(n => n.addEventListener('click',linkAction))

let swiperProjects = new Swiper(".project__container", {
    loop : true,
    spaceBetween: 24,

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
    },
    pagination: {
        el: ".swiper-pagination",
    },
    breakpoints : {
        
        1200: {
            slidesPerView: 2,
            spaceBetween: -56,
        },
    },
   
  });

 let swiperTestimonial = new Swiper(".testimonial__container", {
    grabCursor: true,


    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  const contactForm = document.getElementById('contact-form'),
   contactName = document.getElementById('contact-name'),
   contactEmail = document.getElementById('contact-email'),
   contactProject = document.getElementById('contact-project'),
   contactMessage = document.getElementById('contact-message')
       

   const sendEmail = (e) =>{
    e.preventDefault()

    //check if the field has a value
    if(contactName.value === '' || contactEmail.value === '' || contactProject.value === ''){
        //Add and remove color

        contactMessage.classList.remove('color-blue')
        contactMessage.classList.add('color-red')

        //show message
        contactMessage.textContent = 'Write all the input fields'
    }else{
        //serviceID - templateID - #form -publickey
        emailjs.sendForm('service_urovvja','template_wnd5p7n','#contact-form','okMzlN9UwVWBt29_e')
        .then(() =>{
            //show msg and color
contactMessage.classList.add('color-blue')
contactMessage.textContent = 'Message Sent'

//Remove msg after 5sec
    setTimeout(() => {
        contactMessage.textContent = ''
    }, 5000)

        } , (error) => {
            alert('OOPS! SOMETHING HAS FAILED...', error)
        })
  
        //To clear the input field

        contactName.value = ''
        contactEmail.value = ''
        contactProject.value = ''


    }
 }

 contactForm.addEventListener('submit', sendEmail)

const sections = document.querySelectorAll('section[id]')

const scrollActive = () => {
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id'),
              sectionClass = document.querySelectorAll('.nav__menu a[href*=' + sectionId + ']')

            if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
                sectionClass.classList.add('active-link')
            }else{
                sectionClass.classList.remove('active-link')
            }
    })
}
window.addEventListener('scroll', scrollActive)


const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up')

    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                        : scrollUp.classList.remove('show-scroll')
}

window.addEventListener('scroll',scrollUp)





/////////////

const themebutton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'

const selectedTheme = localStorage.getItem('selected-theme')

const selectedIcon = localStorage.getItem('selected-icon')

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'

const getCurrentIcon = () => themebutton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'

if(selectedTheme) {

    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themebutton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme)

}

themebutton.addEventListener('click', () => {
    //Add or remove dark icon theme
    document.body.classList.toggle(darkTheme)
    themebutton.classList.toggle(iconTheme)
//we save the theme and the current icon the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon',getCurrentIcon())
})


/////



const scrollHeader = () => {
    const header = document.getElementById('header')
    //when the scroll is greater than 50 viewport , add scroll-header class
     this.scrollY >= 50 ? header.classList.add('bg-header')
                        : header.classList.remove('bg-header')

}

window.addEventListener('scroll', scrollHeader)


/*====== SCROLL REVEAL ANIMATION =============*/


const sr = ScrollReveal({
    origin: "top",
    distance:"60px",
    duration:2500,
    delay: 400,
    //reset: true /* Animation repeat */
})

sr.reveal(`.home__data, .projects__container, .testimonial__container, .footer__container`)
sr.reveal(`.home__info div`, {delay:600, origin: 'bottom', interval: 100})
sr.reveal(`.skills__content:nth-child(1), .contact__content:nth-child(1)`, {origin: 'left'})
sr.reveal(`.skills__content:nth-child(2), .contact__content:nth-child(2)`, {orgin: 'right'})
sr.reveal(`.qualification__content, .services__card`, {interval: 100})