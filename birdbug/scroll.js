$( document ).ready(function() {
  var p1 = $('.page1').width();
$(window).scroll(function() {
 var windowPosY = $(this).scrollTop();
  var windowPosX = $(this).scrollLeft();


  if ($(this).scrollLeft() > p1 *.75 && windowPosX < (p1*.75*2) ){

    $('.input').css({'bottom':'0'});

  }else{
    $('.input').css({'bottom':''});
  }

  if ($(this).scrollLeft() < p1*.75){

    $('#current').removeAttr('id');
  $('.tab1').attr('id', 'current');
  

  }
  if ($(this).scrollLeft() > p1*.75  && windowPosX < (p1*1.75) ){

    $('#current').removeAttr('id');
  $('.tab2').attr('id', 'current');

  }

  if ($(this).scrollLeft() > p1*1.75 ){

    $('#current').removeAttr('id');
  $('.tab3').attr('id', 'current');

  }
});

$( '.tab1' ).click(function() {
      $('body').animate({scrollLeft: (0)}, 500);

    });
$( '.tab2' ).click(function() {
      $('body').animate({scrollLeft: (p1)}, 500);

    });
$( '.tab3' ).click(function() {
      $('body').animate({scrollLeft: (p1*2)}, 500);

    });
});
