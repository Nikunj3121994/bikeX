// adding animated.css class to div
$(document).ready(function(){
// Animations for Add to cart , Quick View, Colors for class image1
 $(".status").mouseenter(function(){
 		// $(this).addClass('animated pulse');
 		$('.addToCart').addClass('animated fadeInRight');
 		$('.quickView').addClass('animated fadeInLeft');
 		$('.circle-blue').addClass('animated bounceInDown');
 		$(".circle-blue").css('opacity',1);
 		$('.circle-red').addClass('animated bounceInDown');
 		$(".circle-red").css('opacity',1);
 		$('.circle-gold').addClass('animated bounceInDown');
 		$(".circle-gold").css('opacity',1);
 		$('.circle-lightOrange').addClass('animated bounceInDown');
 		$(".circle-lightOrange").css('opacity',1);
 		$('.circle-grey').addClass('animated bounceInDown');
 		$(".circle-grey").css('opacity',1);
    });
$(".status").mouseleave(function(){
	// $(this).removeClass('animated pulse');
	$('.addToCart').removeClass('animated fadeInRight');
 	$('.quickView').removeClass('animated fadeInLeft');
	$('.circle-blue').removeClass('animated bounceInDown');
	$('.circle-red').removeClass('animated bounceInDown');
	$('.circle-gold').removeClass('animated bounceInDown');
	$('.circle-lightOrange').removeClass('animated bounceInDown');
	$('.circle-grey').removeClass('animated bounceInDown');    
    });

// $(".circle-blue").mouseenter(function(){
//  		$(this).addClass('bounceInDown');
//  		// $(".circle-blue").css('opacity',1);
//     });


    // $(".addToCart").animate({
    //    width: '400px'
    // }, { duration: 1, queue: false });

    // $(".quickView").animate({
    //    width: '600px'
    // }, { duration: 2, queue: false });


// --------------------------------------------------------------------------








});