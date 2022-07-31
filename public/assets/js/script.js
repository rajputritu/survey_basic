
$(document).ready(function(){
  $("#menue").click(function(){
      $(".menu").toggleClass("active");
    
  });
  
})



$('.slid-contaner').slick({
    dots: true,
    arrows:true,
    infinite: true,
    
    
    arrows: true,
    spaceBetween: 40,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          spaceBetween: 40,
          arrows:false,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      }
      
     
    ]
    });
    











