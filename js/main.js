// главный слайдер
$(document).ready(function(){
    $('.block-slider').slick({
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    });
});
// карусель
$(document).ready(function(){
    $('.project-carousel').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [{
            breakpoint: 1024,
            settings: {
            	slidesToShow: 3,
            	slidesToScroll: 3,
            	infinite: true,
            	}
            },
            {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
                }
            },
            {
            breakpoint: 800,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
                }
            },
        ]
    });
});
// слайдер в блоке с фактами
$(document).ready(function(){
    $('.facts-slider').slick({
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    });
});
// слайдер в блоке с фактами при ширине 820
$(document).ready(function(){
    $('.facts-slider-responsive').slick({
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    });
});
// кнопка наверх
$(document).ready(function(){
    $('#up-btn').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 1500);
        return false;
    });
});
// меню
$(document).ready(function(){
	$(function() {
		$('.toggle-menu__icon').on('click', function() {
		    $(this).closest('.toggle-menu').toggleClass('menu_state_open');
		    $('body').toggleClass('hidden');
		});
	});
});

//окно оставить заявку 
$(document).ready(function() { 
	$('#start, #start-menu').click( function(event){ 
		event.preventDefault(); 
		$('#overlay').fadeIn(250, 
		 	function(){
				$('#popUp') 
					.css('display', 'block') 
					.animate({opacity: 1, top: '0'}, 490); 
				$('body').addClass("hidden")
		});
	});
/*по нажатию на крестик закрываю окно*/
	$('#close, #overlay').click( function(){ 
		$('#popUp')
			.animate({opacity: 0, bottom: '0'}, 490, 
				function(){ 
					$(this).css('display', 'none'); 
					$('#overlay').fadeOut(220);
					$('body').removeClass("hidden")
				}
			);
	});
});
