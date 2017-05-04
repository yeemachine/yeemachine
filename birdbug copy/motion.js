window.onload = function() {
    var oneDoc = one.contentDocument;
    var oneB = oneDoc.getElementsByClassName("birdbug");
    var oneR = oneDoc.getElementsByClassName("roman");
    var twoDoc = two.contentDocument;
    var twoB = twoDoc.getElementsByClassName("birdbug");
    var twoR = twoDoc.getElementsByClassName("roman");
    var threeDoc = three.contentDocument;
    var threeB = threeDoc.getElementsByClassName("birdbug");
    var threeR = threeDoc.getElementsByClassName("roman");
    var fourDoc = four.contentDocument;
    var fourB = fourDoc.getElementsByClassName("birdbug");
    var fourR = fourDoc.getElementsByClassName("roman");
    var fiveDoc = five.contentDocument;
    var fiveB = fiveDoc.getElementsByClassName("birdbug");
    var fiveR = fiveDoc.getElementsByClassName("roman");

    var sixDoc = six.contentDocument;
    var sixB = sixDoc.getElementsByClassName("birdbug");
    var sixR = sixDoc.getElementsByClassName("roman");
    var sevenDoc = seven.contentDocument;
    var sevenB = sevenDoc.getElementsByClassName("birdbug");
    var sevenR = sevenDoc.getElementsByClassName("roman");
    var eightDoc = eight.contentDocument;
    var eightB = eightDoc.getElementsByClassName("birdbug");
    var eightR = eightDoc.getElementsByClassName("roman");
    var nineDoc = nine.contentDocument;
    var nineB = nineDoc.getElementsByClassName("birdbug");
    var nineR = nineDoc.getElementsByClassName("roman");
    var tenDoc = ten.contentDocument;
    var tenB = tenDoc.getElementsByClassName("birdbug");
    var tenR = tenDoc.getElementsByClassName("roman");

    var eighteenDoc = eighteen.contentDocument;
    var eighteenB = eighteenDoc.getElementsByClassName("birdbug");
    var eighteenR = eighteenDoc.getElementsByClassName("roman");

    var elevenDoc = eleven.contentDocument;
    var elevenB = elevenDoc.getElementsByClassName("birdbug");
    var elevenR = elevenDoc.getElementsByClassName("roman");
    var twelveDoc = twelve.contentDocument;
    var twelveB = twelveDoc.getElementsByClassName("birdbug");
    var twelveR = twelveDoc.getElementsByClassName("roman");
    var thirteenDoc = thirteen.contentDocument;
    var thirteenB = thirteenDoc.getElementsByClassName("birdbug");
    var thirteenR = thirteenDoc.getElementsByClassName("roman");
    var fourteenDoc = fourteen.contentDocument;
    var fourteenB = fourteenDoc.getElementsByClassName("birdbug");
    var fourteenR = fourteenDoc.getElementsByClassName("roman");
    var fifteenDoc = fifteen.contentDocument;
    var fifteenB = fifteenDoc.getElementsByClassName("birdbug");
    var fifteenR = fifteenDoc.getElementsByClassName("roman");

    var sixteenDoc = sixteen.contentDocument;
    var sixteenB = sixteenDoc.getElementsByClassName("birdbug");
    var sixteenR = sixteenDoc.getElementsByClassName("roman");
    var seventeenDoc = seventeen.contentDocument;
    var seventeenB = seventeenDoc.getElementsByClassName("birdbug");
    var seventeenR = seventeenDoc.getElementsByClassName("roman");
    var eighteenDoc = eighteen.contentDocument;
    var eighteenB = eighteenDoc.getElementsByClassName("birdbug");
    var eighteenR = eighteenDoc.getElementsByClassName("roman");
    var nineteenDoc = nineteen.contentDocument;
    var nineteenB = nineteenDoc.getElementsByClassName("birdbug");
    var nineteenR = nineteenDoc.getElementsByClassName("roman");
    var twentyDoc = twenty.contentDocument;
    var twentyB = twentyDoc.getElementsByClassName("birdbug");
    var twentyR = twentyDoc.getElementsByClassName("roman");



    $("#one").mouseenter(function() {
        $(oneB).css({
            "display": "block",
            "animation": "dash 2s cubic-bezier(0.670, 0.005, 0.200, 1.000)"
        });
        $(oneR).css({
            "display": "none"
        });
        $("#one").removeClass("fade");
        $(".fade").css({
            "opacity": ".1"
        });
        $("body").css({
            "background-color": "red"
        });
    });
    $("#one").mouseleave(function() {
        $(oneB).css({
            "display": "",
            "animation": ""
        });
        $(oneR).css({
            "display": ""
        });
        $("#one").addClass("fade");
        $(".fade").css({
            "opacity": ""
        });
        $("body").css({
            "background-color": ""
        });
    });

    $("#two").mouseenter(function() {
        $(twoB).css({
            "display": "block",
            "animation": "dash 2s cubic-bezier(0.670, 0.005, 0.200, 1.000)"
        });
        $(twoR).css({
            "display": "none"
        });
        $("#two").removeClass("fade");
        $(".fade").css({
            "opacity": ".1"
        });
        $("body").css({
            "background-color": "#ff5500"
        });
    });
    $("#two").mouseleave(function() {
        $(twoB).css({
            "display": ""
        });
        $(twoR).css({
            "display": ""
        });
        $("#two").addClass("fade");
        $(".fade").css({
            "opacity": ""
        });
        $("body").css({
            "background-color": ""
        });
    });
    $("#three").mouseenter(function() {
        $(threeB).css({
            "display": "block",
            "animation": "dash 2s cubic-bezier(0.670, 0.005, 0.200, 1.000)"
        });
        $(threeR).css({
            "display": "none"
        });
        $("#three").removeClass("fade");
        $(".fade").css({
            "opacity": ".1"
        });
        $("body").css({
            "background-color": "#ffa200"
        });
    });
    $("#three").mouseleave(function() {
        $(threeB).css({
            "display": ""
        });
        $(threeR).css({
            "display": ""
        });
        $("#three").addClass("fade");
        $(".fade").css({
            "opacity": ""
        });
        $("body").css({
            "background-color": ""
        });
    });

    $("#four").mouseenter(function() {
        $(fourB).css({
            "display": "block",
            "animation": "dash 2s cubic-bezier(0.670, 0.005, 0.200, 1.000)"
        });
        $(fourR).css({
            "display": "none"
        });
        $("#four").removeClass("fade");
        $(".fade").css({
            "opacity": ".1"
        });
        $("body").css({
            "background-color": "ffde00"
        });
    });
    $("#four").mouseleave(function() {
        $(fourB).css({
            "display": ""
        });
        $(fourR).css({
            "display": ""
        });
        $("#four").addClass("fade");
        $(".fade").css({
            "opacity": ""
        });
        $("body").css({
            "background-color": ""
        });
    });

    $("#five").mouseenter(function() {
        $(fiveB).css({
            "display": "block",
            "animation": "dash 2s cubic-bezier(0.670, 0.005, 0.200, 1.000)"
        });
        $(fiveR).css({
            "display": "none"
        });
        $("#five").removeClass("fade");
        $(".fade").css({
            "opacity": ".1"
        });
        $("body").css({
            "background-color": "b4ff00"
        });
    });
    $("#five").mouseleave(function() {
        $(fiveB).css({
            "display": ""
        });
        $(fiveR).css({
            "display": ""
        });
        $("#five").addClass("fade");
        $(".fade").css({
            "opacity": ""
        });
        $("body").css({
            "background-color": ""
        });
    });




    $("#six").mouseenter(function() {
        $(sixB).css({
            "display": "block",
            "animation": "dash 2s cubic-bezier(0.670, 0.005, 0.200, 1.000)"
        });
        $(sixR).css({
            "display": "none"
        });
        $("#six").removeClass("fade");
        $(".fade").css({
            "opacity": ".1"
        });
        $("body").css({
            "background-color": "00ff30"
        });
    });
    $("#six").mouseleave(function() {
        $(sixB).css({
            "display": "",
            "animation": ""
        });
        $(sixR).css({
            "display": ""
        });
        $("#six").addClass("fade");
        $(".fade").css({
            "opacity": ""
        });
        $("body").css({
            "background-color": ""
        });
    });
    $("#seven").mouseenter(function() {
        $(sevenB).css({
            "display": "block",
            "animation": "dash 2s cubic-bezier(0.670, 0.005, 0.200, 1.000)"
        });
        $(sevenR).css({
            "display": "none"
        });
        $("#seven").removeClass("fade");
        $(".fade").css({
            "opacity": ".1"
        });
        $("body").css({
            "background-color": "00ffae"
        });
    });
    $("#seven").mouseleave(function() {
        $(sevenB).css({
            "display": ""
        });
        $(sevenR).css({
            "display": ""
        });
        $("#seven").addClass("fade");
        $(".fade").css({
            "opacity": ""
        });
        $("body").css({
            "background-color": ""
        });
    });
    $("#eight").mouseenter(function() {
        $(eightB).css({
            "display": "block",
            "animation": "dash 2s cubic-bezier(0.670, 0.005, 0.200, 1.000)"
        });
        $(eightR).css({
            "display": "none"
        });
        $("#eight").removeClass("fade");
        $(".fade").css({
            "opacity": ".1"
        });
        $("body").css({
            "background-color": "00fcff"
        });
    });
    $("#eight").mouseleave(function() {
        $(eightB).css({
            "display": ""
        });
        $(eightR).css({
            "display": ""
        });
        $("#eight").addClass("fade");
        $(".fade").css({
            "opacity": ""
        });
        $("body").css({
            "background-color": ""
        });
    });

    $("#nine").mouseenter(function() {
        $(nineB).css({
            "display": "block",
            "animation": "dash 2s cubic-bezier(0.670, 0.005, 0.200, 1.000)"
        });
        $(nineR).css({
            "display": "none"
        });
        $("#nine").removeClass("fade");
        $(".fade").css({
            "opacity": ".1"
        });
        $("body").css({
            "background-color": "0072ff"
        });
    });
    $("#nine").mouseleave(function() {
        $(nineB).css({
            "display": ""
        });
        $(nineR).css({
            "display": ""
        });
        $("#nine").addClass("fade");
        $(".fade").css({
            "opacity": ""
        });
        $("body").css({
            "background-color": ""
        });
    });

    $("#ten").mouseenter(function() {
        $(tenB).css({
            "display": "block",
            "animation": "dash 2s cubic-bezier(0.670, 0.005, 0.200, 1.000)"
        });
        $(tenR).css({
            "display": "none"
        });
        $("#ten").removeClass("fade");
        $(".fade").css({
            "opacity": ".1"
        });
        $("body").css({
            "background-color": "a800ff"
        });
    });
    $("#ten").mouseleave(function() {
        $(tenB).css({
            "display": ""
        });
        $(tenR).css({
            "display": ""
        });
        $("#ten").addClass("fade");
        $(".fade").css({
            "opacity": ""
        });
        $("body").css({
            "background-color": ""
        });
    });








    $("#eleven").mouseenter(function() {
        $(elevenB).css({
            "display": "block",
            "animation": "dash 2s cubic-bezier(0.670, 0.005, 0.200, 1.000)"
        });
        $(elevenR).css({
            "display": "none"
        });
        $("#eleven").removeClass("fade");
        $(".fade").css({
            "opacity": ".1"
        });

        $("body").css({
            "background-color": "#c10000"
        });
    });
    $("#eleven").mouseleave(function() {
        $(elevenB).css({
            "display": "",
            "animation": ""
        });
        $(elevenR).css({
            "display": ""
        });
        $("#eleven").addClass("fade");
        $(".fade").css({
            "opacity": ""
        });
        $("body").css({
            "background-color": ""
        });
    });
    $("#twelve").mouseenter(function() {
        $(twelveB).css({
            "display": "block",
            "animation": "dash 2s cubic-bezier(0.670, 0.005, 0.200, 1.000)"
        });
        $(twelveR).css({
            "display": "none"
        });
        $("#twelve").removeClass("fade");
        $(".fade").css({
            "opacity": ".1"
        });
        $("body").css({
            "background-color": "#c24100"
        });
    });
    $("#twelve").mouseleave(function() {
        $(twelveB).css({
            "display": ""
        });
        $(twelveR).css({
            "display": ""
        });
        $("#twelve").addClass("fade");
        $(".fade").css({
            "opacity": ""
        });
        $("body").css({
            "background-color": ""
        });
    });
    $("#thirteen").mouseenter(function() {
        $(thirteenB).css({
            "display": "block",
            "animation": "dash 2s cubic-bezier(0.670, 0.005, 0.200, 1.000)"
        });
        $(thirteenR).css({
            "display": "none"
        });
        $("#thirteen").removeClass("fade");
        $(".fade").css({
            "opacity": ".1"
        });
        $("body").css({
            "background-color": "d78900"
        });
    });
    $("#thirteen").mouseleave(function() {
        $(thirteenB).css({
            "display": ""
        });
        $(thirteenR).css({
            "display": ""
        });
        $("#thirteen").addClass("fade");
        $(".fade").css({
            "opacity": ""
        });
        $("body").css({
            "background-color": ""
        });
    });

    $("#fourteen").mouseenter(function() {
        $(fourteenB).css({
            "display": "block",
            "animation": "dash 2s cubic-bezier(0.670, 0.005, 0.200, 1.000)"
        });
        $(fourteenR).css({
            "display": "none"
        });
        $("#fourteen").removeClass("fade");
        $(".fade").css({
            "opacity": ".1"
        });
        $("body").css({
            "background-color": "ddc000"
        });
    });
    $("#fourteen").mouseleave(function() {
        $(fourteenB).css({
            "display": ""
        });
        $(fourteenR).css({
            "display": ""
        });
        $("#fourteen").addClass("fade");
        $(".fade").css({
            "opacity": ""
        });
        $("body").css({
            "background-color": ""
        });
    });

    $("#fifteen").mouseenter(function() {
        $(fifteenB).css({
            "display": "block",
            "animation": "dash 2s cubic-bezier(0.670, 0.005, 0.200, 1.000)"
        });
        $(fifteenR).css({
            "display": "none"
        });
        $("#fifteen").removeClass("fade");
        $(".fade").css({
            "opacity": ".1"
        });
        $("body").css({
            "background-color": "97d501"
        });
    });
    $("#fifteen").mouseleave(function() {
        $(fifteenB).css({
            "display": ""
        });
        $(fifteenR).css({
            "display": ""
        });
        $("#fifteen").addClass("fade");
        $(".fade").css({
            "opacity": ""
        });
        $("body").css({
            "background-color": ""
        });
    });




    $("#sixteen").mouseenter(function() {
        $(sixteenB).css({
            "display": "block",
            "animation": "dash 2s cubic-bezier(0.670, 0.005, 0.200, 1.000)"
        });
        $(sixteenR).css({
            "display": "none"
        });
        $("#sixteen").removeClass("fade");
        $(".fade").css({
            "opacity": ".1"
        });
        $("body").css({
            "background-color": "00c625"
        });
    });
    $("#sixteen").mouseleave(function() {
        $(sixteenB).css({
            "display": "",
            "animation": ""
        });
        $(sixteenR).css({
            "display": ""
        });
        $("#sixteen").addClass("fade");
        $(".fade").css({
            "opacity": ""
        });
        $("body").css({
            "background-color": ""
        });
    });
    $("#seventeen").mouseenter(function() {
        $(seventeenB).css({
            "display": "block",
            "animation": "dash 2s cubic-bezier(0.670, 0.005, 0.200, 1.000)"
        });
        $(seventeenR).css({
            "display": "none"
        });
        $("#seventeen").removeClass("fade");
        $(".fade").css({
            "opacity": ".1"
        });
        $("body").css({
            "background-color": "00d491"
        });
    });
    $("#seventeen").mouseleave(function() {
        $(seventeenB).css({
            "display": ""
        });
        $(seventeenR).css({
            "display": ""
        });
        $("#seventeen").addClass("fade");
        $(".fade").css({
            "opacity": ""
        });
        $("body").css({
            "background-color": ""
        });
    });
    $("#eighteen").mouseenter(function() {
        $(eighteenB).css({
            "display": "block",
            "animation": "dash 2s cubic-bezier(0.670, 0.005, 0.200, 1.000)"
        });
        $(eighteenR).css({
            "display": "none"
        });
        $("#eighteen").removeClass("fade");
        $(".fade").css({
            "opacity": ".1"
        });
        $("body").css({
            "background-color": "00c4c6"
        });
    });
    $("#eighteen").mouseleave(function() {
        $(eighteenB).css({
            "display": ""
        });
        $(eighteenR).css({
            "display": ""
        });
        $("#eighteen").addClass("fade");
        $(".fade").css({
            "opacity": ""
        });
        $("body").css({
            "background-color": ""
        });
    });

    $("#nineteen").mouseenter(function() {
        $(nineteenB).css({
            "display": "block",
            "animation": "dash 2s cubic-bezier(0.670, 0.005, 0.200, 1.000)"
        });
        $(nineteenR).css({
            "display": "none"
        });
        $("#nineteen").removeClass("fade");
        $(".fade").css({
            "opacity": ".1"
        });
        $("body").css({
            "background-color": "025bca"
        });
    });
    $("#nineteen").mouseleave(function() {
        $(nineteenB).css({
            "display": ""
        });
        $(nineteenR).css({
            "display": ""
        });
        $("#nineteen").addClass("fade");
        $(".fade").css({
            "opacity": ""
        });
        $("body").css({
            "background-color": ""
        });
    });

    $("#twenty").mouseenter(function() {
        $(twentyB).css({
            "display": "block",
            "animation": "dash 2s cubic-bezier(0.670, 0.005, 0.200, 1.000)"
        });
        $(twentyR).css({
            "display": "none"
        });
        $("#twenty").removeClass("fade");
        $(".fade").css({
            "opacity": ".1"
        });
        $("body").css({
            "background-color": "7e01be"
        });
    });
    $("#twenty").mouseleave(function() {
        $(twentyB).css({
            "display": ""
        });
        $(twentyR).css({
            "display": ""
        });
        $("#twenty").addClass("fade");
        $(".fade").css({
            "opacity": ""
        });
        $("body").css({
            "background-color": ""
        });
    });


    $(oneDoc).click(function() {
      // $(".stroke, .stroke2").css({"opacity": "0"});
      $(".strokebox2").css({"display": "flex"});

    });

    // $(twoDoc).click(function() {
    //   $(".stroke, .stroke2").css({"opacity": "0"});
    // });
    // $(threeDoc).click(function() {
    //   $(".stroke, .stroke2").css({"opacity": "0"});
    // });
    // $(fourDoc).click(function() {
    //   $(".stroke, .stroke2").css({"opacity": "0"});
    // });
    // $(fiveDoc).click(function() {
    //   $(".stroke, .stroke2").css({"opacity": "0"});
    // });
    // $(sixDoc).click(function() {
    //   $(".stroke, .stroke2").css({"opacity": "0"});
    // });
    // $(sevenDoc).click(function() {
    //   $(".stroke, .stroke2").css({"opacity": "0"});
    // });
    // $(eightDoc).click(function() {
    //   $(".stroke, .stroke2").css({"opacity": "0"});
    // });
    // $(nineDoc).click(function() {
    //   $(".stroke, .stroke2").css({"opacity": "0"});
    // });
    // $(tenDoc).click(function() {
    //   $(".stroke, .stroke2").css({"opacity": "0"});
    // });
    // $(elevenDoc).click(function() {
    //   $(".stroke, .stroke2").css({"opacity": "0"});
    // });
    // $(twelveDoc).click(function() {
    //   $(".stroke, .stroke2").css({"opacity": "0"});
    // });
    // $(thirteenDoc).click(function() {
    //   $(".stroke, .stroke2").css({"opacity": "0"});
    // });
    // $(fourteenDoc).click(function() {
    //   $(".stroke, .stroke2").css({"opacity": "0"});
    // });
    // $(fifteenDoc).click(function() {
    //   $(".stroke, .stroke2").css({"opacity": "0"});
    // });
    // $(sixteenDoc).click(function() {
    //   $(".stroke, .stroke2").css({"opacity": "0"});
    // });
    // $(seventeenDoc).click(function() {
    //   $(".stroke, .stroke2").css({"opacity": "0"});
    // });
    // $(eighteenDoc).click(function() {
    //   $(".stroke, .stroke2").css({"opacity": "0"});
    // });
    // $(nineteenDoc).click(function() {
    //   $(".stroke, .stroke2").css({"opacity": "0"});
    // });
    // $(twentyDoc).click(function() {
    //   $(".stroke, .stroke2").css({"opacity": "0"});
    // });
    $('.strokebox2').click(function() {
      $(".strokebox2").css({"display": ""});
    });

}
