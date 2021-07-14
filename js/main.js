// initialize swiper to start Hero slide
    
        var swiper = new Swiper(".mySwiper", {
            speed: 500,
            loop: true,
            effect: 'fade',
            slidesPerView: 2,
            spaceBetween: 0,
            pagination: {
            el: ".swiper-pagination",
            clickable: true,
            },
            
            autoplay: {
                delay: 5000,
              },
            
        });

        // mobile menu
        let mobileMenuIcon = document.querySelector('.fa-bars')
        let menu =document.querySelector('header .menu')
        mobileMenuIcon.addEventListener('click', function(){
          // to add extra class in css
          // we can use add and remove to alter instead toggle
          menu.classList.toggle('open'); 
        })