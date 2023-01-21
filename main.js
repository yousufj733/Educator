 //Nav manu 
const menu =document.querySelector(".nav__menu");
const openBtn =document.querySelector("#open-menu-btn");
const closeBtn =document.querySelector("#close-menu-btn");

// open button function 
const openNav= ()=>{

   menu.style.display="flex";
   closeBtn.style.display="inline-block";
   openBtn.style.display="none";
}
openBtn.addEventListener('click',openNav);

// close button function 
const closeNav  =()=>{
    menu.style.display="";
    closeBtn.style.display="none";
    openBtn.style.display="";
}
closeBtn.addEventListener('click',closeNav);


//Change nav bar on scroll 
window.addEventListener('scroll', ()=>{

    document.querySelector('nav').classList.toggle
    ('window-scroll',window.scrollY > 10)
}
)


 //    <!-- Initialize Swiper -->
  
 var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    speed: 500,
    loop: true,
    setInitialSlide: 0,
    spaceBetween: 50,

    pagination: {
      el: ".swiper-pagination ",
      clickable: true,
    },
    autoplay: {
        delay: 2000,
    },
    // break points width >=600
breakpoints: 
{
    600:{
        slidesPerView:2
    }
}

  });


// Faq toggle 

const faqs =document.querySelectorAll('.faq');
faqs.forEach(faq =>{
    faq.addEventListener('click',()=>{
        faq.classList.toggle('open');
        // change icon on click 
    const icon1 = faq.querySelector('.faq__icon i');
   
    if(icon1.className === 'uil uil-plus')
    {
        icon1.className = "uil uil-minus";
    }
    else
    {
        icon1.className= "uil uil-plus";
    }
    })

    
})


// Another way 
// openBtn.addEventListener('click',()=>{

//     menu.style.display="flex";
//     closeBtn.style.display="inline-block";
//     openBtn.style.display="none";
 
//  })


// closeBtn.addEventListener('click',()=>{

//     menu.style.display="none";
//     closeBtn.style.display="none";
//     openBtn.style.display="inline-block";
 
//  })