$(window).on('beforeunload', function() {
    $(window).scrollTop(0);
  });


window.onunload = function(){};

window.onload=function() {


  $(window).scroll(function() {

    var mn = $('h1');
    var hdr = $('.page1').height();
    var gdr = $('.page2').height();
    var pdr = $('.mobilepage').height();



    var windowPosY = $(this).scrollTop();

    var isMobile = window.matchMedia("only screen and (max-width: 600px)");



    if (isMobile.matches) {
      if ($(this).scrollTop() < (hdr * .10) ) {

        $(".yeeshadow").css("margin-top", "-.8em");
        $(".red").css("color", "");


      }
    if ($(this).scrollTop() > (hdr * .10) && windowPosY < (hdr + (pdr*3))) {

      $(".yeeshadow").css("margin-top", "-0.4em");
      $(".red").css("color", "blue");


    }
    if ($(this).scrollTop() > (hdr + (pdr*3)) && windowPosY < (hdr + (pdr*6.2))) {

      $(".yeeshadow").css("margin-top", "-.8em");
      $(".red").css("color", "");


    }
    if ($(this).scrollTop() > (hdr + (pdr*6.2)) ) {

      $(".yeeshadow").css("margin-top", "-0.4em");
      $(".red").css("color", "blue");


    }


    }
    else {
      if ($(this).scrollTop() < (hdr * .10) ) {

        $(".yeeshadow").css("margin-top", "-.8em");
        $(".red").css("color", "");


      }
    if ($(this).scrollTop() > (hdr * .10) && windowPosY < (hdr + (gdr))) {

      $(".yeeshadow").css("margin-top", "-0.4em");
      $(".red").css("color", "blue");


    }


    }

  });


var hdr = $('.page1').height();

$('body').animate({scrollTop: (hdr*.13)}, 500);
// $(window).resize(function() {
      // This will fire each time the window is resized:
if($(window).width() >= 600) {

    $( ".nav" ).mouseenter(function() {
      $(".page1, .page3").css({"filter": "blur(10px)","-webkit-filter": "blur(5px)","opacity":".05"});
    });
    $( ".nav" ).mouseleave(function() {
      $(".page1, .page3").css({"filter": "","-webkit-filter": "","opacity":""});
      $(".projects").css({"background-color": ""});
      $(".description p").html("")
    });
    $( ".contactC " ).mouseenter(function() {
      $(".red2").css("color", "red");
      $(".yeeshadow2").css("margin-top", "-0.8em");
    });
    $( ".contactC " ).mouseleave(function() {
      $(".red2").css("color", "blue");
      $(".yeeshadow2").css("margin-top", "-0.4em");
    });
    $( ".timeline1" ).mouseenter(function() {
      $(".timeline").css("margin-top", "-0.4em");
      $(".blue1").css("color", "red");
      $("#svgObject5").css({ "display": "block" });
      $(".description p").hide().html("A parody of Tesla's website featuring a timeline that tries to place Tesla's achievements on the scale of larger historic events.").fadeIn("100")
    });
  $( ".timeline1" ).mouseleave(function() {
      $(".timeline").css("margin-top", "-.8em");
      $(".blue1").css("color", "");
      $("#svgObject5").css("display", "");
    });
  $( ".space1" ).mouseenter(function() {
      $(".space").css("margin-top", "-0.4em");
      $(".blue2").css("color", "red");
      $("#svgObject3").css("display", "block");
      $(".description p").hide().html("A redesign of the Space X website with an emphasis on information hierarchy. Prototyped using Invision and recorded.").fadeIn("100")
    });
  $( ".space1" ).mouseleave(function() {
      $(".space").css("margin-top", "-.8em");
      $(".blue2").css("color", "");
      $("#svgObject3").css("display", "");
    });
  $( ".watson1" ).mouseenter(function() {
      $(".watson").css("margin-top", "-0.4em");
      $(".blue3").css("color", "red");
      $(".emotions").css("opacity", "1");
      $(".description p").hide().html("A mashup between Wayback Machine's resources and IBM Watson's tone analyzer that looks at the tone of any given website for changes in language over time.").fadeIn("100")
    });
$( ".watson1" ).mouseleave(function() {
$(".watson").css("margin-top", "-.8em");
$(".blue3").css("color", "");
$(".emotions").css("opacity", "");


});
$( ".railways1" ).mouseenter(function() {
$(".railways").css("margin-top", "-0.4em");
$(".blue4").css("color", "red");
$("#svgObject4").css("display", "block");
$(".description p").hide().html("Front-end mockup of a transit app to solve the problem of unreliable MTA subway updates. By installing low cost beacons on and in the train stations, crowd-sourced data would allow for near instant notifications of delays and traffic. Demoed at the 2016 Facebook Global Hackathon.").fadeIn("100")


});
$( ".railways1" ).mouseleave(function() {
$(".railways").css("margin-top", "-.8em");
$(".blue4").css("color", "");
$("#svgObject4").css("display", "");


});
$( ".sound1" ).mouseenter(function() {
$(".sound").css("margin-top", "-0.4em");
$(".blue5").css("color", "red");
$("#svgObject2").css("display", "block");
$(".glitch").css("opacity", "1");
$(".description p").hide().html("An in-browser soundscape populated with found and recorded voice samples. The environment changes according to different times of day. Use the 'WASD' keys and mouse to explore.").fadeIn("100");



});
$( ".sound1" ).mouseleave(function() {
$(".sound").css("margin-top", "-.8em");
$(".blue5").css("color", "");
$("#svgObject2").css("display", "");
$(".glitch").css("opacity", "");


});
$( ".yee1" ).mouseenter(function() {
$(".yee").css("margin-top", "-0.4em");
$(".blue6").css("color", "red");
$("#svgObject").css("display", "block");
$(".description p").hide().html("Personal branding project that explores what my visual identity would be as an app designer. Projects displayed on the site are a mix of completed and concept-stage works.").fadeIn("100")

});
$( ".yee1" ).mouseleave(function() {
$(".yee").css("margin-top", "-.8em");
$(".blue6").css("color", "");
$("#svgObject").css("display", "");


});
$( ".graphic1" ).mouseenter(function() {
$(".graphic").css("margin-top", "-0.4em");
$(".blue7").css("color", "red");
$("#svgObject6").css("display", "block");
$(".description p").hide().html("A collection of assorted graphic design work consisting of posters, icons, and logos.").fadeIn("100")
});
$( ".graphic1" ).mouseleave(function() {
$(".graphic").css("margin-top", "-.8em");
$(".blue7").css("color", "");
$("#svgObject6").css("display", "");
});
};

$(function() {
  $(".element").typed({
    strings: ["anger", "disgust","fear","joy","sadness"],
    typeSpeed: 7,
    showCursor: false,
    loop:true
  });

});
}
