
$('#banner_part').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    // fade: false,
    arrows:false,
    autoplay:true,
    autoplaySpeed: 2000,
    });




$('.slider').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: 0,
    fade: false,
    arrows:true,
    prevArrow:'<i class=" prev fa-solid fa-angle-left"></i>',
    nextArrow:'<i class=" next fa-solid fa-angle-right"></i>',
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
        {
          breakpoint: 1399.98,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: false
          }
        },
        {
          breakpoint: 1199.98,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: false
          }
        },
        {
          breakpoint:767.98,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: false
          }
        },
        {
          breakpoint: 767.98,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: false
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    });





    
    $('.counter').counterUp({
      delay: 5,
      time: 1000
  });