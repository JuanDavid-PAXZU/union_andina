// SCROLL MENU SIZE

function scrollHeader(){
    let scrollpos = window.scrollY
    const header = document.querySelector("header")
    const header_height = header.offsetHeight
    
    const add_class_on_scroll = () => header.classList.add("m_scroll")
    const remove_class_on_scroll = () => header.classList.remove("m_scroll")

    window.addEventListener('scroll', function() { 
        scrollpos = window.scrollY;
        if (scrollpos >= header_height) { add_class_on_scroll() }
        else { remove_class_on_scroll() }
    });
}

// ACTIVACION DEL MENU MOBILE

function menuMobile(){
    
    const btnMenuMobile = document.getElementById('menu_mobile');
    const contMenuMobile = document.querySelector('.navDesktop');
    const bodyScrollLock = document.querySelector('body');
    const bgMenu = document.querySelector('.bg_dark');

    btnMenuMobile.addEventListener('click', () =>{
        contMenuMobile.classList.toggle('activeMbl');
        bodyScrollLock.classList.toggle('lock');
        bgMenu.classList.toggle('act_bg_menu');
        
        

    });

    bgMenu.addEventListener('click', () =>{
        contMenuMobile.classList.remove('activeMbl');
        bgMenu.classList.remove('act_bg_menu');
        bodyScrollLock.classList.remove('lock');
    });

}



function carusViviendas(){

    const swiper = new Swiper(".cont_carr_viv_zona .swiper-container", {
        slidesPerView: 3,
        spaceBetween: 24,
        navigation: {
          nextEl: ".cont_carr_viv_zona .swiper-button-next",
          prevEl: ".cont_carr_viv_zona .swiper-button-prev",
        },
      });
}
function carusAsesores(){

    const swiper = new Swiper(".carrusel_ases_pais .swiper-container", {
        slidesPerView: 3,
        spaceBetween: 1,
        navigation: {
          nextEl: ".carrusel_ases_pais .swiper-button-next",
          prevEl: ".carrusel_ases_pais .swiper-button-prev",
        },
      });
}
function sliderHomeHero(){

    const swiper = new Swiper(".swiperHomeHero", {
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
        parallax: true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
}

function sliderClientesF(){

    const swiper = new Swiper(".swiperClientesF", {
        slidesPerView: 3,
        spaceBetween: 30,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
}

function sliderInvertir(){

    const swiper = new Swiper(".swiperMaskInvertir", {
        slidesPerView: 1,
        spaceBetween: 20,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });
}

function btnSideForm(){
  const btnSimuladorCredito = document.querySelector('.side_button');
  const contSimuladorCredito = document.querySelector('.side_form');
  const closeIcon = document.querySelector('.close_aside_form');
  const main = document.querySelector('main');

  btnSimuladorCredito.addEventListener('click', () => {
    contSimuladorCredito.style.right = "0px";
    closeIcon.style.opacity = "1"
    closeIcon.style.display = "block"
  });

  closeIcon.addEventListener('click', () => {
    contSimuladorCredito.style.right = "-501" + "px";
    closeIcon.style.opacity = "0"
    closeIcon.style.display = "none"
  });

  main.addEventListener('click', () => {
    contSimuladorCredito.style.right = "-501" + "px";
    closeIcon.style.opacity = "0"
    closeIcon.style.display = "none"
  });
}

// function curveColor(){
//   const sectionClientesPage = document.querySelector('.s_clientes_page');
//   const footer = document.querySelector('footer');

//   if(sectionClientesPage === 'true'){
//     footer.classList.add('holaaaa');
//     footer.style.background = "url('../images/diseno/curve_footer2.svg')";
//   }
//   console.log(sectionClientesPage)
    
// } 
  
function faqs(){
  const catPregunta = document.querySelectorAll('.cont_cat_preguntas ul li');
  const containerPreguntas = document.querySelectorAll('.cont_preguntas');
  var titPregunta = document.querySelectorAll('.tit_pregunta');
  let comparador = null;

  catPregunta.forEach((CatEl) => {
    CatEl.addEventListener('click', (e) =>{
      catPregunta.forEach((el) => {
        el.classList.remove('active_cat_preguntas')
      });
      e.currentTarget.classList.toggle('active_cat_preguntas');

      comparador = CatEl.dataset.pregunta;

      containerPreguntas.forEach((elcontPreguntas) =>{
        if(elcontPreguntas.dataset.pregunta === comparador){
          elcontPreguntas.classList.add('active_cont_p');
        }else{
          elcontPreguntas.classList.remove('active_cont_p');
        }
      });

    });
  });

  titPregunta.forEach((TPregunta) => {

    TPregunta.addEventListener('click', (e) => {

      titPregunta.forEach((tit) => {
        tit.classList.remove('active_pregunta');
      });

      e.currentTarget.classList.add('active_pregunta');
    });

  });
}

function sliderSubsidios(){

  const swiper = new Swiper(".swiperSubsidios", {
      slidesPerView: 2,
      spaceBetween: 20,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      }
    });
}



scrollHeader();
btnSideForm();
menuMobile();
sliderHomeHero();
sliderInvertir();
sliderClientesF();
carusAsesores();
carusViviendas();
sliderSubsidios();
faqs();