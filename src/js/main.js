$(function(){
  var $gallery = $('.products-container a').simpleLightbox();

});

//different functions for main menu and secondary menu

$('#hamb-icon').click(function() {
    if ( ($(window).width() > 768) && ($('.hamb-container').hasClass('hamb-visible')) && ($(".hamb-overlay").hasClass("shown")) ) {
      $('.hamb-container').removeClass('hamb-visible')
    }
    $('.top-bar').toggleClass('rotated-right');
    $('.middle-bar').toggleClass('toggled');
    $('.bottom-bar').toggleClass('rotated-left');
    $('body').toggleClass('stop-scrolling');
    $(".header-logo").toggleClass("not-visible");
});


$("#hamb-icon").click(function(){
	if($(".hamb-overlay").hasClass("shown")){
		console.log($("#hamb-icon"));
		$(".hamb-overlay").removeClass("shown");
		$(".hamb-overlay").addClass("toggled");
	}
	else{
		console.log($("#hamb-icon"));
		$(".hamb-overlay").removeClass("toggled");
		$(".hamb-overlay").addClass("shown");
	}
});

//menu

$('.scrollTo').click(function(){
    $(".hamb-overlay").removeClass("shown");
    $(".hamb-overlay").addClass("toggled"); 
    $('.top-bar').toggleClass('rotated-right');
    $('.middle-bar').toggleClass('toggled');
    $('.bottom-bar').toggleClass('rotated-left');
    $('body').toggleClass('stop-scrolling');
    $('html, body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top
    }, 500);
    return false;
});

$(".scrollOverlay").click(function(){
	$(".header-logo").toggleClass("not-visible");
})

$('body').bind('touchmove', function(e){e.preventDefault()});

$('body').unbind('touchmove');

$(document).ready(function(){

	let height = $('.gallery-item-image img').height();
	console.log(height);

	$('.gallery-item-image').css("height", height);

    $('.phone').mask('+375(99)999-99-99');

	$(".form-field").focusin(function(){
		$(this).prev().css("background-color", "#00ADEF");
	});

	$(".form-field").focusout(function(){
		$(this).prev().css("background-color", "#111111");
	});


  $("#button").click(function() {
      $('html, body').animate({
          scrollTop: $("#myDiv").offset().top
      }, 2000);
  });

  if ($(window).width() > 768){
  	$(".about").animated("fadeIn");
    $(".section-header").animated("fadeInUp");
    $(".gallery-item-description").animated("fadeInUp");
  }

  $("#light-slider").lightSlider({
    item:1,
    slideMargin: 0,
    speed:800,
    pause: 5000,
    auto:false,
    loop:true,
    pauseOnHover: true,
    pager: false,
    onSliderLoad: function() {
        $('#image-gallery').removeClass('cS-hidden');
    }       
  });

  if ($(window).width() < 768) {
  	$('.hamb-container').toggleClass('hamb-visible')
  }

})

$(window).resize(function(){

	let height = $('.gallery-item-image img').height();
	console.log(height);
	
	$('.gallery-item-image').css("height", height);

    if (($(window).width() < 768) && (!($('.hamb-container').hasClass('hamb-visible'))) ) {
      $('.hamb-container').addClass('hamb-visible')
    } 

    if ( ($('body').hasClass('stop-scrolling')) && ($(window).width() > 768) ){
      $('.main-menu').toggleClass('not-visible')
    }   

    if ( ($(window).width() > 768) && ($('.hamb-container').hasClass('hamb-visible'))) {
      $('.hamb-container').removeClass('hamb-visible')
    }

    if ( ($(window).width() > 768) && ($('.hamb-container').hasClass('hamb-visible'))) {
      $('.hamb-container').removeClass('hamb-visible')
    }

  	if ( ($('body').hasClass('stop-scrolling')) && ($(window).width() > 768) && (!($('.hamb-container').hasClass('hamb-visible')))) {
    	$('.hamb-container').addClass('hamb-visible')
	  } 
})

window.onscroll = function() {myFunction()};

var header = document.getElementById("myHeader");

var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}
