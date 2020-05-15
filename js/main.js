window.onscroll = function() {myFunction()};

var navvbar = document.getElementById("navvbar");
var sticky = navvbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navvbar.classList.add("sticky")
  } else {
    navvbar.classList.remove("sticky");
  }
}

$(document).ready(function(){ 
	var touch  = $('#resp-menu');
	var menu  = $('.menu');
	
	$(touch).on('click', function(e) {
	 e.preventDefault();
	 menu.slideToggle();
	});
	
	$(window).resize(function(){
	 var w = $(window).width();
	 if(w > 767 && menu.is(':hidden')) {
	  menu.removeAttr('style');
	 }
	});
	
   });

$(document).ready(function(){
	$('#bism').fadeIn('slow');

});

$(document).ready(function(){
	$('.ref').click(function(){
		$('ul').toggleClass('active')
	})

})
$(document).ready(function(){
	$('.home').click(function(){
		$('ul').toggleClass('active1')
	})

})
