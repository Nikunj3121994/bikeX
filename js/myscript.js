
// plugin for setting the height of the jumbtron to the screen size available to the user
$(document).ready(function () {
  
  $(window).resize(function () {
    $('.jumbotron').css('height', $(window).height() * 0.9);
    });

  $(function(){ $(window).resize() });


});

//setting the height of the jumbtrontext to the screen size available to the user
$(document).ready(function () {
  
  $(window).resize(function () {
    $(".jumbotronText").css("font-size", $(window).height() * 0.05);
    });

  $(function(){ $(window).resize() });

});

//setting the height of the jumbtronh1 to the screen size available to the user
$(document).ready(function () {
  
  $(window).resize(function () {
    $(".jumboh1").css("font-size", $(window).height() * 0.05);
    });

  $(function(){ $(window).resize() });

});









// Plugin for controlling the font size at different screen sizes. Works When document has finished loading
// $(document).ready(function() {
  
//   var resizeText = function () {
//     // Standard height, for which the body font size is correct
//     var preferredFontSize = 18; // %
//     var preferredSize = 1024 * 768;

//     var currentSize = $(window).width() * $(window).height();
//     var scalePercentage = Math.sqrt(currentSize) / Math.sqrt(preferredSize);
//     var newFontSize = preferredFontSize * scalePercentage;
//     $("fullheight").css("font-size", newFontSize + '%');
//   };

//   $(window).bind('resize', function() {
//     resizeText();
//   }).trigger('resize');

// });


// $(function() {

//   "use strict";

//   var topoffset = 50; //variable for menu height

//   //Activate Scrollspy
//   $('body').scrollspy({
//     target: ' .navbar',
//     offset: topoffset
//   });

//   add inbody class
//   var hash = $(this).find('li.active a').attr('href');
//   if(hash !== '#featured') {
//     $('header nav').addClass('inbody');
//   } else {
//     $('header nav').removeClass('inbody');
//   }


//   // Add an inbody class to nav when scrollspy event fires
//   $('.navbar-fixed-top').on('activate.bs.scrollspy', function() {
//     var hash = $(this).find('li.active a').attr('href');
//     if(hash !== '#featured') {
//       $('header nav').addClass('inbody');
//     } else {
//       $('header nav').removeClass('inbody');
//     }
//   });

// });




