$(function() {
	new WOW().init();

	$(document).ready(function(){
  		$(".owl-1").owlCarousel({
  			margin:10,
   			nav: true,
   			loop: true,
   			dots: false,
  			navText: ["<",">"],
  			responsiveClass:true,
    		responsive:{
        		0:{
		            items:1
		        },
		        480:{
		            items:2
		        },
		        768:{
		            items:3
		        }
		  	}
  		});
  	});

	$(document).ready(function(){
  		$(".owl-2").owlCarousel({
   			loop: true,
   			nav: false,
  			items: 1,
  			autoplay: true,
  			autoplayTimeout: 3000,
  			dots: true
  		});
  	});

  	$(document).ready(function(){
	     $( '.menu-btn' ).click(function(){
	     	$('.responsive-menu').toggleClass('expand');
	     	
	     });
    	$('.menu-btn').on('click', function() {
			$('.bar').toggleClass('animate');
		})
	});
    $("form").submit(function() { //Change
      var th = $(this);
      $.ajax({
        type: "POST",
        url: "mail.php", //Change
        data: th.serialize()
      }).done(function() {
        alert("Thank you!");
        setTimeout(function() {
          // Done Functions
          th.trigger("reset");
        }, 1000);
      });
      return false;
    });
	

});
