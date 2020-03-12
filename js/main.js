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
		});
	});
/*по нажатию на крестик закрываю окно*/
	$('#close, #overlay').click( function(){ 
		$('#popUp')
			.animate({opacity: 0, bottom: '0'}, 490, 
				function(){ 
					$(this).css('display', 'none'); 
					$('#overlay').fadeOut(220); 
				}
			);
	});
});
