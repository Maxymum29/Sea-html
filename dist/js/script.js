window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.header__links'),
    menuItem = document.querySelectorAll('.header__link'),
    hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger-active');
        menu.classList.toggle('active');
    });

    menuItem.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger-active');
            menu.classList.toggle('active');
        });
    });
});

$('.rooms__slides').slick({
    infinite: true,
    slidesToShow: 1,
    responsive: [
        {
            breakpoint: 769,
            settings: {
              arrows: false,
            }
          }
        
      ]
});

$('.reviews__slides').slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    dots:true,
    responsive: [
        {
            breakpoint: 1201,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                centerMode: true,
                centerPadding: '-20px',
            }
        },
        {
            breakpoint: 768,
            settings: {
                arrows: false,
                slidesToShow: 1,
                slidesToScroll: 1,
                centerMode: true,
                centerPadding: '0px'
            }
        },
        
      ]
  });