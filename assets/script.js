const horn1 = new Audio("assets/mixkit-car-horn-718.wav")

var topPos=$("#car").css('bottom');
$(document).keypress(function (e) {

    if (e.key=="h"){
        horn1.play();
    }

    if (e.key=='d'){
        $("#car").animate({
            right:"-8.5%"
        },300);
        // $('#car').css('right','-8.5%');
    }

    if (e.key=='a'){
        $("#car").animate({
            right:"8.5%"
        },300);
        // $('#car').css('right','8.5%');
    }

    if (e.key=='w'){
        $("#car").animate({
            bottom:"70%"
        },500);


    }

    if (e.key=='s'){
        $("#car").animate({
            bottom:"10%"
        },500);
    }

    // if (e.keyCode==32){
    //     $('#road').css("animationPlayState","paused");
    // }

    if (e.key=='p'){
        $('#road').css("animationPlayState","running");
    }



})

$(document).keydown(function (e) {
    if (e.keyCode==32){
        $('#road').css("animationPlayState","paused");
    }
})

$(document).keyup(function (e) {
    if (e.keyCode==32){
        $('#road').css("animationPlayState","running");
    }
})