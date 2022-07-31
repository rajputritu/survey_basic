import $ from 'jquery'; 

window.addEventListener('scroll', function () {
    let logo = document.querySelector('.logo');
    let mobillogo = document.querySelector('.mobillogo');
    let nav = document.querySelector('#logi');
    let header = document.getElementsByTagName('header')[0];

    if (window.pageYOffset >= 190) {
      nav.classList.add('non');
      logo.classList.add('non');
      mobillogo.classList.add('visibal');


    } else {
      nav.classList.remove('non');
      logo.classList.remove('non');
      mobillogo.classList.remove('visibal');
      header.classList.remove('sticky');
    }




  });
  $(document).ready(function () {
    $("#menue").click(function () {
      $(this).toggleClass("fa-bars");
      $(this).toggleClass("fa-times");
      $(".menu").toggleClass("active");
      $(".drop").removeClass("open");
    });

    $(".tc1").click(function () {
      $(".drop-1").toggleClass("open");
      $(".drop-2").removeClass("open");
      $(".drop-3").removeClass("open");
      $(".drop-4").removeClass("open");
     
    })
    $(".tc2").click(function () {
      $(".drop-1").removeClass("open");
      $(".drop-2").toggleClass("open");
      $(".drop-3").removeClass("open");
      $(".drop-4").removeClass("open");
     
    })
    $(".tc3").click(function () {
      $(".drop-1").removeClass("open");
      $(".drop-2").removeClass("open");
      $(".drop-3").toggleClass("open");
      $(".drop-4").removeClass("open");
     
    })
    $(".tc4").click(function () {
      $(".drop-1").removeClass("open");
      $(".drop-2").removeClass("open");
      $(".drop-3").removeClass("open");
      $(".drop-4").toggleClass("open");
     
    })


/*
    $(".switch-toggle").click(function () {
      $(".drop").removeClass("open");
      $(this).siblings(".drop").addClass("open");
    })
    */
  })