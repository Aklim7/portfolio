const navMenu=document.getElementById('nav-menu'),
navToggle=document.getElementById('nav-toggle'),
navClose=document.getElementById('nav-close');


if(navToggle){
    navToggle.addEventListener('click',()=>{
        navMenu.classList.add('show-menu')
    })
}


if(navClose){
    navClose.addEventListener('click',()=>{
        navMenu.classList.remove('show-menu')
    })
};

const navLink =document.querySelectorAll('.nav__link');
function linkAction(){
    const navMenu=document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n=>n.addEventListener('click',linkAction));

const skillsContent=document.getElementsByClassName('skills__content'),
skillsHeader=document.querySelectorAll('.skills__header');

function toggleSkills(){
    let itemClass=this.parentNode.className

    for(i=0; i<skillsContent.length;i++){
        skillsContent[i].className='skills__content skills__close'
    }
if(itemClass==='skills__content skills__close')
{
    this.parentNode.className='skills__content skills__open'
}

}
skillsHeader.forEach((el)=>{
    el.addEventListener('click',toggleSkills)
})

// qualification
const tabs=document.querySelectorAll('[data-target]'),
 tabContents=document.querySelectorAll('[data-content]');

 tabs.forEach(tab =>{
    tab.addEventListener('click',()=>{
        const target=document.querySelector(tab.dataset.target)

        tabContents.forEach(tabContent=>{
            tabContent.classList.remove('qualification__active')
        })
        target.classList.add('qualification__active')

        tabs.forEach(tab=>{
            tab.classList.remove('qualification__active')
        })
        tab.classList.add('qualification__active')

    })
 })


const mV=document.querySelectorAll('.services__model'),
mB=document.querySelectorAll('.services__button'),
mC=document.querySelectorAll('.services__model-close');

let model=function(modelClick){
    mV[modelClick].classList.add('active-model')
}

mB.forEach((mB,i) =>{
    mB.addEventListener('click', () =>{
        model(i)
    })
})

mC.forEach((mC) =>{
    mC.addEventListener('click', () =>{
        mV.forEach((mV) =>{
            mV.classList.remove('active-model')
        })
    })
});

// PORTFOLIO
let swiperPf = new Swiper(".pf__container",{
    cssMode:true,
    loop:true,

    navigation: {
    nextE1:'.swiper-button-next',
    prevE1:'.swiper-button-prev',
    },
    pagination: {
        el:".swiper-pagination",
        clickable:true,
    },
    
 });

// TESTIMONAL
let swiperTt = new Swiper(".tt__container",{
    loop:true,
    grabCursor:true,
    spaceBetween:48,

    pagination: {
        el:".swiper-pagination",
        clickable:true,
        dynamicBullets:true,
    },
    breakpoints:{
        568:{
            slidesPerView: 2,
        }
    }
    
 });
//  SCROLL SECTIONS ACTIVE LINK
 const sections=document.querySelectorAll('section[id]')

 function scrollActive(){
    const scrollY=window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight=current.offsetHeight
        const sectionTop=current.offsetTop-50;
        const sectionId=current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')

        }
        else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
            
        }
    })
 }
 window.addEventListener('scroll',scrollActive)
  

 function scrollHeader(){
    const nav =document.getElementById('header');

    if(this.scrollY >= 80) nav.classList.add('scroll-header');else nav.classList.remove('scroll-header');
    
 }
 window.addEventListener('scroll',scrollHeader);

//  SHOW SCROLL TOP
 function scrollUp(){
    const scrollUp=document.getElementById('scroll-up');
    if(this.scrollY>=560) scrollUp.classList.add('show-scroll');else scrollUp.classList.remove('show-scroll');
 }
 window.addEventListener('scroll',scrollUp)


 const themeButton=document.getElementById('theme-button')
 const darkTheme='uil-sun'
 const iconTheme='dark-theme'

 const selectedTheme=localStorage.getItem('selected-theme')
 const selectedIcon=localStorage.getItem('selected-Icon')

 const getCurrentTheme=()=> document.body.classList.contains(iconTheme) ? 'light':'dark'
 const getCurrentIcon=()=> themeButton.classList.contains(darkTheme) ? 'uil-sun':'uil-moon'

 if(selectedTheme){
    document.body.classList[selectedTheme==='light' ? 'add':'remove'](iconTheme)
    themeButton.classList[selectedIcon==='uil-sun' ? 'add':'remove'](darkTheme)

 }

 themeButton.addEventListener('click',()=>{
    document.body.classList.toggle(iconTheme)
    themeButton.classList.toggle(darkTheme)

    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-Icon', getCurrentIcon())

 })
 /*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
//     reset: true
});



sr.reveal('.home__data, .about__img, .skills__title,.services__title, .skills__subtitle, .qualification__title, .qualification__subtitle,.services__title,.tt__name,.tt__client',{}); 
sr.reveal('.home__img, .home__title,.home__subtitle,.home__desciption, .section__subtitle, .about__description, .skills__img,.portfolio__description,.tt__description',{delay: 400}); 
sr.reveal('.home__social-icon',{ interval: 200}); 
sr.reveal('.skills__data,.services__model, .qualification__data,.portfolio__img,',{interval: 200}); 


 
