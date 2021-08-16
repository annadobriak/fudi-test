$(function () {
// start forma login
    $('.header__btn-login').on('click' , function () {
        $('.login-form').removeClass('login-form--close');
    });
    $('.login-form__close').on('click' , function () {
        $('.login-form').addClass('login-form--close');
    });
// end forma login

// start forma Sign Up
    $('.header__btn-signup').on('click' , function () {
        $('.signup-form').removeClass('signup-form--close');
    });
    $('.signup-form__close').on('click' , function () {
        $('.signup-form').addClass('signup-form--close');
    });
// end forma Sign Up

// меню бургер
$('.header__btn-menu').on('click' , function () {
    $('.menu__body').removeClass('menu__body--close');
});
$('.menu__close').on('click' , function () {
    $('.menu__body').addClass('menu__body--close');
});


// --start slider--
    $('.slider__inner').slick({
        arrows: false,
        dots: true,
        autoplay: true
    });
// --end slider--

// --start BROWSE BY CUISINES--
    let ArrayOfImages = ['images/italian.jpg', 'images/indian.jpg', 'images/french.jpg', 'images/steakhouse.jpg', 'images/seafood.jpg', 'images/sushi.jpg', 'images/mexican.jpg', 'images/chinese.jpg', 'images/pizza.jpg', 'images/american.jpg']; 
    ArrayOfImages.forEach(function(image) {
        let img = document.createElement('img');
        img.src = image;
        img.height = "225";
        img.width = "320";
        document.getElementById("div1").appendChild(img);
    });
// --end BROWSE BY CUISINES--

// --start of number counter
    var time = 3;
    var windowHeight = $(window).height();
 
    $(document).on('scroll', function() {
		$('.counter').each(function() {
			var self = $(this),
			height = self.offset().top + self.height();
			if ($(document).scrollTop() + windowHeight >= height) {
                
                $(".counter__item-number").addClass("viz");

                $('.counter__item-number').each(function() {
                    var
                    i = 1,
                    num = $(this).data('num'),
                    step = 1000 * time / num,
                    that = $(this),
                    int = setInterval(function() {
                        if (i <= num) {
                            that.html(i);
                        } else {
                            clearInterval(int);
                        }
                        i ++;
                        }, step);
                });          
			}
		});
	});
// --end of number counter

});




