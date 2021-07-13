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