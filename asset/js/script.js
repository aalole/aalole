

//  slideToggleAndAction();
 
$(document).ready(function(){
  // toggle button
  $('.btn').click(function () {
    $('.nav-links').slideToggle(2000);
    $('.btn').toggleClass('change');
  })

// transparent
$(window).scroll(function(){
  let position = $(window).scrollTop()
  if (position >= 100){
    $('nav, nav-container').addClass('navBackground');
  }
  else{
    $('nav, nav-container').removeClass('navBackground');
  }
});
          // smooth scrolling
  
  $('.nav-link a').click(function (link) {
    link.preventDefault();
  
    let targetPageSection = $(this).attr('href');
    $('html, body').stop().animate({
      scrollTop: $(targetPageSection).offset().top
    }, 'fast'); 
  });
  // owl team
  $('.team-center').owlCarousel({
    loop: true,
    margin: 10,
    smartSpeed: 4000,
    nav:true,
    responsive:{
      0:{
        items: 1
      },
      600:{
        items: 3,
      },
      1000:{
        items: 5
      }
    }
  });
  // owl customers
  $('.customers-center').owlCarousel({
    loop: true,
    margin: 10,
    smartSpeed: 4000,
    nav:true,
    responsive:{
      0:{
        items: 1
      },
      600:{
        items: 1,
      },
      1000:{
        items: 3
      }
    }
  });
});