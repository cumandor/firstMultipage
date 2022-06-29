//slik
$(function(){
     
    $('.veterinarian-slider, .slider__items').slick({
        arrows: false, dots: true, fade: true, autoplay: true, autoplaySpeed: 3000,
    })

});

//scroll

$(".info--link").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $(".list").offset().top
    }, 50);
});

$(".service--link").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $(".services").offset().top
    }, 50);
});

//scrollup

window.onload = function(){
    
    var scrolled;
    var timer;

    document.getElementById('top').onclick = function(){
        scrolled = window.pageYOffset;
        
        scrollToTop();
   }
    function scrollToTop(){
       if (scrolled > 0){
           window.scrollTo(0, scrolled); // proverka
            scrolled = scrolled - 80; // speed
            timer = setTimeout(scrollToTop, 5); //visov func
       }
       else {
            clearTimeout(timer);
           window.scrollTo(0,0);
        }
    }
}

//map

function initMap() {
    const uluru = { lat: 50.9175484, lng: 34.8065736};
    const pam = new google.maps.Map(document.getElementById('pam'), {
    zoom: 15,
    center: uluru,
});
const marker = new google.maps.Marker({
  position: uluru,
  map: pam,
});
}

window.initMap = initMap;

//inputs

$(document).ready(function() {

	
	$("form").submit(function() { 
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", 
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
