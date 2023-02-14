/*=============== SWIPER PROJECTS ===============*/
let swipeProjects = new Swiper(".carrusel__container", {
  loop: true,
  spaceBetween: 24,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
  breakpoints: {
    1200: {
      slidesPerView: 2,
      spaceBetween: -30,
    }
  },
});

/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () => {
  const header = document.getElementById('header')

  this.scrollY >= 50 ? header.classList.add('scroll-header')
                     : header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*=============== SHOW SCROLL UP ===============*/
const scrollUp = () => {
  const scrollUp = document.getElementById('scroll-up')

  this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                      : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const section = document.querySelectorAll('section[id]')

const scrollActive = () => {
  const scrollY = window.pageYOffset

  section.forEach(current => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute('id'),
      sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      sectionsClass.classList.add('active-link')
    } else {
      sectionsClass.classList.remove('active-link')
    }

  })
}
window.addEventListener('scroll', scrollActive)

/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById('contact-form'),
      contactName =document.getElementById('contact-name'),
      contactEmail =document.getElementById('contact-email'),
      contactNumero =document.getElementById('contact-numero'),
      contactDirec =document.getElementById('contact-direc'),
      contactMessage =document.getElementById('contact-message')

const sendEmail = (e)=>{
    e.preventDefault()

    // Check if the field has a value   
    if(contactName.value === '' || contactEmail.value === '' || contactNumero.value === '' || contactDirec.value === ''){
        // Add y remover el color
          contactMessage.classList.remove('color-blue')
          contactMessage.classList.add('color-red')

        // mensaje alerta
        contactMessage.textContent = 'Por favor llenar los campos '          
    }else{
        // serviceID - templateID - #form - publicKey:
        emailjs.sendForm('service_6b3yez9','template_fslwom2','#contact-form','4Q7xKYdVWCNnbICdm')
             .then(() =>{

                 contactMessage.classList.add('color-blue')
                contactMessage.textContent = 'Mensaje Enviado'

                setTimeout(() =>{
                contactMessage.textContent = ''
            }, 5000)
        }, (error)=>{
            alert('OOPS! ALGO A SALIDO MAL...', error)
        })

        contactName.value = ''
        contactEmail.value = ''
        contactNumero.value = ''
        contactDirec.value = ''
    }
} 
contactForm.addEventListener('submit', sendEmail)