$(window).on('beforeunload', function() {
    $(window).scrollTop(0);
  });


window.onunload = function(){};

window.onload=function() {

  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
  var h = $('.page1').height();
  $('.page1').height(h);
  $('.timeline').css('top', (h*.575));

}
var svg = document.getElementById("svgObject");
var svgDoc = svgObject.contentDocument;
var line1 = svgDoc.getElementById("link1");
var line2 = svgDoc.getElementById("link2");
var line3 = svgDoc.getElementById("link3");
var line4 = svgDoc.getElementById("link4");
var line5 = svgDoc.getElementById("link5");
var line6 = svgDoc.getElementById("link6");
var line7 = svgDoc.getElementById("link7");
var alphabet = svgDoc.getElementById("alphabet");
var ways = svgDoc.getElementsByClassName("ways");


var logo = svgDoc.getElementById("logo");

var move1 = svgDoc.getElementById("move1");
var move2 = svgDoc.getElementById("move2");
var move3 = svgDoc.getElementById("move3");
var move4 = svgDoc.getElementById("move4");
var move5 = svgDoc.getElementById("move5");
var hidelink1 = svgDoc.getElementsByClassName("hidelink1");
var hidelink2 = svgDoc.getElementsByClassName("hidelink2");
var hidelink3 = svgDoc.getElementsByClassName("hidelink3");
var hidelink4 = svgDoc.getElementsByClassName("hidelink4");
var hidelink5 = svgDoc.getElementsByClassName("hidelink5");
var hidelink6 = svgDoc.getElementsByClassName("hidelink6");
var hidelink7 = svgDoc.getElementsByClassName("hidelink7");



var cnt1 = $(hidelink1).contents();
var cnt2 = $(hidelink2).contents();
var cnt3 = $(hidelink3).contents();
var cnt4 = $(hidelink4).contents();
var cnt5 = $(hidelink5).contents();
var cnt6 = $(hidelink6).contents();
var cnt7 = $(hidelink7).contents();


var p1 = $('.page1').height();
var p2 = $('.page2').height();
var p3 = $('.page3').height();




var svg2 = document.getElementById("svgObject2");
var svgDoc2 = svgObject2.contentDocument;
var squiggle = svgDoc2.getElementsByClassName("squiggle");

var svg3 = document.getElementById("svgObject3");
var svgDoc3 = svgObject3.contentDocument;
var squiggle2 = svgDoc3.getElementsByClassName("squiggle");

var svg4 = document.getElementById("svgObject4");
var svgDoc4 = svgObject4.contentDocument;
var squiggle3 = svgDoc4.getElementsByClassName("squiggle");

var svg5 = document.getElementById("svgObject5");
var svgDoc5 = svgObject5.contentDocument;
var squiggle4 = svgDoc5.getElementsByClassName("squiggle");

var mn = $('h1');
var p1 = $('.page1').height();
var p2 = $('.page2').height();
var p3 = $('.page3').height();
var p4 = $('.page4').height();


var showText = function (target, message, index, interval) {
if (index < message.length) {
  $(target).text(message[index++]);
  setTimeout(function () { showText(target, message, index, interval); }, interval);
}
if (index >= message.length){
      index = 0;
}
}

$(function () {

showText(alphabet, "123456790", 0, 150);

});


setTimeout(function(){   $(".largecontainer").css("pointer-events", "none");$("h1").css("display", "block")}, 1500);




$(window).scroll(function() {




  var windowPosY = $(this).scrollTop();

  var isMobile = window.matchMedia("only screen and (max-width: 600px)");

  if (isMobile.matches) {

    if ($(this).scrollTop() > (p1 * .55) && windowPosY < (p1 + (p2))) {



      // $(squiggle).css({"animation":"dash 5s cubic-bezier(0.5, 0.5, 0.5, .5)","animation-delay":".5s","animation-fill-mode": "forwards"});


    }
    if ($(this).scrollTop() > (p1 + p2*.45) && windowPosY < (p1 + p2*2)) {



      // $(squiggle2).css({"animation":"dash 5s cubic-bezier(0.5, 0.5, 0.5, .5)","animation-delay":".5s","animation-fill-mode": "forwards"});
    }
    if ($(this).scrollTop() > (p1 + p2*1.45) && windowPosY < (p1 + p2*2.75)) {

    }
    if ($(this).scrollTop() > (p1 + p2*2.75) && windowPosY < (p1 + p2*3.75)) {




    }
    if ($(this).scrollTop() > (p1 + p2*3.75) && windowPosY < (p1 + p2*4.75)) {




    }
    if ($(this).scrollTop() > (p1 + p2*4.75) && windowPosY < (p1 + p2*5.75)) {




    }
    if ($(this).scrollTop() > (p1 + p2*5.75) && windowPosY < (p1 + p2*7.5)) {




    }
    if ($(this).scrollTop() > (p1 + p2*6.75) && windowPosY ) {

      // $(squiggle3).css({"animation":"dash 5s cubic-bezier(0.5, 0.5, 0.5, .5)","animation-delay":".5s","animation-fill-mode": "forwards"});



    }
    if ($(this).scrollTop() > (p1 + p2*7.5) && windowPosY) {


      // $(squiggle4).css({"animation":"dash 5s cubic-bezier(0.5, 0.5, 0.5, .5)","animation-delay":".5s","animation-fill-mode": "forwards"});


    }

    if ($(this).scrollTop() < (p1 * .55) && windowPosY) {

  }

  }else {
  if ($(this).scrollTop() > (p1 * .4) && windowPosY < (p1 + (p2))) {


    $(mn).css({"position": "fixed","top":"5%","left":"10%","color":""});
    $('body').css({'background-color':'','color':''})
    $("h1").html("The Yee Machine");
    $(squiggle).css({"animation":"dash 5s cubic-bezier(0.5, 0.5, 0.5, .5)","animation-delay":".5s","animation-fill-mode": "forwards"});

  }
  if ($(this).scrollTop() > (p1 + p2*.45) && windowPosY < (p1 + p2*2)) {

    $("h1").css("color","transparent");

    $(squiggle2).css({"animation":"dash 5s cubic-bezier(0.5, 0.5, 0.5, .5)","animation-delay":".5s","animation-fill-mode": "forwards"});
  }
  if ($(this).scrollTop() > (p1 + p2*1.45) && windowPosY < (p1 + p2*2.75)) {

    $("h1").css("color","");
    $("h1").html("Stocks");
  }
  if ($(this).scrollTop() > (p1 + p2*2.75) && windowPosY < (p1 + p2*3.75)) {
    $("h1").css("color","");


    $("h1").html("Heart");


  }
  if ($(this).scrollTop() > (p1 + p2*3.75) && windowPosY < (p1 + p2*4.75)) {
    $("h1").css("color","");


    $("h1").html("Clock");


  }
  if ($(this).scrollTop() > (p1 + p2*4.75) && windowPosY < (p1 + p2*5.75)) {

    $("h1").css("color","");

    $("h1").html("Transit");


  }
  if ($(this).scrollTop() > (p1 + p2*5.75) && windowPosY < (p1 + p2*7.5)) {

    $("h1").css("color","");

    $("h1").html("Tone");


  }
  if ($(this).scrollTop() > (p1 + p2*6.45) && windowPosY ) {

    $(squiggle3).css({"animation":"dash 5s cubic-bezier(0.5, 0.5, 0.5, .5)","animation-delay":".5s","animation-fill-mode": "forwards"});



  }
  if ($(this).scrollTop() > (p1 + p2*7.5) && windowPosY) {


    $("h1").css("color","transparent");
    $(squiggle4).css({"animation":"dash 5s cubic-bezier(0.5, 0.5, 0.5, .5)","animation-delay":".5s","animation-fill-mode": "forwards"});


  }
  if ($(this).scrollTop() < (p1 * .4) && windowPosY) {
    $(mn).css({"position": "","top":"","left":"","color":""});

  }

  }

});



// $(window).resize(function() {
      // This will fire each time the window is resized:
      if($(window).width() >= 600) {
        $( line1 ).mouseenter(function() {
          $("h1").hide().html("Stocks").fadeIn("500");
          $(".description").hide().html("A reimagining of a stock market app with an emphasis on finding which stocks are most stable.").fadeIn("500");
          $(".timeline").attr("class", "timelineanim");
          $(line7).css({"stroke":"#666"});
          $(line5).css({"stroke":"#666"});
          $(ways).css({'opacity':'0'})

      })
      $( line1 ).click(function() {
        $('body').animate({scrollTop: (p1 + (p2*2))}, 500);

      });

        $( line1 ).mouseleave(function() {
          $(".description").html("");
          $(".timelineanim").attr("class", "timeline");
          $(line7).css({"stroke":""});
          $(line5).css({"stroke":""});
          $(ways).css({'opacity':''})

          if ($('body').scrollTop() > (p1*.45) && windowPosY < (p1 + p2 + p3+ p4)) {
            $("h1").html("Stocks");

          }else{
            $("h1").html("The Yee Machine");

          }
    });
        $( line2 ).mouseenter(function() {
          $("h1").hide().html("Heart").fadeIn("500");

          $(line3).css({"animation":"dash 2s cubic-bezier(0.670, 0.005, 0.200, 1.000) infinite","animation-delay":".3s"});
          $(line5).css({"animation":"blink .5s cubic-bezier(0.5, 0.5, 0.5, 0.5) infinite","animation-delay":""});
          $(line5).attr('class', 'old');
          $(line6).attr('class', 'sound');
          $(".description").hide().html("A multidevice platform that lets you monitor your heartbeat and compare during different states of motion.").fadeIn("500");
          $(line7).css({"stroke":"red"});
          $(line5).css({"stroke":"red"});
          $(ways).css({'opacity':'0'})

    })
    $( line2 ).click(function() {
      $('body').animate({scrollTop: (p1 + (p2*3))}, 500);

    });
        $( line2 ).mouseleave(function() {
          $(line3).css({"animation":"","animation-delay":""});
          $(line5).css({"animation":"","animation-delay":""});
          $(".description").html("");
          $(line7).css({"stroke":""});
          $(line5).css({"stroke":""});
          $(ways).css({'opacity':''})

          if ($('body').scrollTop() > (p1 + p2*.45) && windowPosY < (p1 + p2 + p3+ p4)) {
            $("h1").html("Heart");

          }else{
            $("h1").html("The Yee Machine");

          }
    });

        $( line3 ).mouseenter(function() {
          $("h1").hide().html("Clock").fadeIn("500");
          $(".description").hide().html("A world clock app with integrated weather forecast that can be used to easily compare global differences.").fadeIn("500");

          $(logo).css({"opacity":"0"});
          $(line5).css({"stroke":"#418CCB"});
          $(alphabet).css({"fill":"#418CCB"});
          $(ways).css({'opacity':'0'})

    })
    $( line3 ).click(function() {
      $('body').animate({scrollTop: (p1 + (p2*4))}, 500);

    });
    $( line3 ).mouseleave(function() {
      $(".description").html("");

        $(logo).css({"opacity":""});
        $(line5).css({"stroke":""});
        $(alphabet).css({"fill":""});
        $(ways).css({'opacity':''})

        if ($('body').scrollTop() > (p1 + p2+ p3*.45) && windowPosY < (p1 + p2 + p3+ p4)) {
          $("h1").html("Clock");

        }else{
          $("h1").html("The Yee Machine");

        }
});

        $( line4 ).mouseenter(function() {
          $("h1").hide().html("Transit").fadeIn("500");
          $(".description").hide().html("A data crowdsourced transit app for NYC subways that is more accurate than the official MTA updates. Expansion to other regions in progress.").fadeIn("500");
          $(line1).css("animation","trainN 2s infinite cubic-bezier(0.5, 0.5, 0.5, 0.5)");
          $(line2).css("animation","trainN 4s infinite cubic-bezier(0.5, 0.5, 0.5, 0.5)");
          $(line3).css("animation","trainN 10s infinite cubic-bezier(0.5, 0.5, 0.5, 0.5)");
          $(line7).css({"stroke":"#00933C"});
          $(line5).css({"stroke":"#00933C"});
          $(ways).css({'opacity':'0'})

    })
    $( line4 ).click(function() {
      $('body').animate({scrollTop: (p1 + (p2*5))}, 500);

    });
        $( line4 ).mouseleave(function() {
          $(".description").html("");
          $(line1).css("animation","");
          $(line2).css("animation","");
          $(line3).css("animation","");
          $(line7).css({"stroke":""});
          $(line5).css({"stroke":""});
          $(ways).css({'opacity':''})

          if ($('body').scrollTop() > (p1 + p2+ p3*.45) && windowPosY < (p1 + p2 + p3+ p4)) {

          }else{
            $("h1").html("The Yee Machine");

          }
    });


        $( line5 ).mouseenter(function() {
          $("h1").hide().html("About").fadeIn("500");
          $(".description").hide().html("A quick look at the development of Yee Machine.").fadeIn("500");
          $(line7).css({"animation":"rotate 5s cubic-bezier(0.5, 0.5, 0.5, .5) infinite","animation-delay":""});
          $(line7).css({"stroke":"black"});
          $(line5).css({"stroke":"black"});
          $(ways).css({'opacity':'0'})



    })
    $( line5 ).click(function() {
      $('body').animate({scrollTop: (p1 + (p2*8.5))}, 500);

    });
        $( line5 ).mouseleave(function() {
          $(".description").html("");
            $(line7).css({"animation":"stop 1s linear","animation-delay":""});
            $(line7).css({"stroke":""});
            $(line5).css({"stroke":""});
            $(ways).css({'opacity':''})

            if ($('body').scrollTop() > (p1 + p2+ p3*.45) && windowPosY < (p1 + p2 + p3+ p4)) {

            }else{
              $("h1").html("The Yee Machine");

            }

    });
    $( line6 ).mouseenter(function() {
      $("h1").hide().html("Tone").fadeIn("500");
      $("a").css("color","white");

      $(move1).css({"animation":"moveup2 1s cubic-bezier(0.670, 0.005, 0.200, 1.000) infinite","animation-delay":""});
      $(move2).css({"animation":"moveup 1s cubic-bezier(0.670, 0.005, 0.200, 1.000) infinite",});
      // $(move3).css({"animation":"moveup 1s cubic-bezier(0.670, 0.005, 0.200, 1.000) infinite",});
      $(move4).css({"animation":"movedown 1s cubic-bezier(0.670, 0.005, 0.200, 1.000) infinite",});
      $(move5).css({"animation":"movedown2 1s cubic-bezier(0.670, 0.005, 0.200, 1.000) infinite","animation-delay":""});
      $(logo).css({"opacity":"0"});
      $(".description").hide().html("A voice analyzer that charts out your emotions.").fadeIn("500");
      $("body").css({"background-color": "black","color":"white"});
      $(line5).css({"stroke":"transparent"});
      $(ways).css({'opacity':'0'})


    })
    $( line6 ).click(function() {
      $('body').animate({scrollTop: (p1 + (p2*6))}, 500);

    });
    $( line6 ).mouseleave(function() {
        $("a").css("color","");
        $(move1).css({"animation":"","animation-delay":""});
        $(move2).css({"animation":"",});
        // $(move3).css({"animation":"",});
        $(move4).css({"animation":"",});
        $(move5).css({"animation":"","animation-delay":""});
        $(logo).css({"opacity":""});
      $(".description").html("");
      $("body").css({"background-color": "","color":""});
      $(line5).css({"stroke":""});
      $(ways).css({'opacity':''})

      if ($('body').scrollTop() > (p1 + p2+ p3*.45) && windowPosY < (p1 + p2 + p3+ p4)) {

      }else{
        $("h1").html("The Yee Machine");

      }

      })







          // if larger or equal
      }
  // }).resize();



  };
