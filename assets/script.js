const horn1 = new Audio("assets/mixkit-car-horn-718.wav")

const crashSound = new Audio("assets/crash-7075.mp3")

const policeSound = new Audio("assets/police-siren-99029.mp3")

posiChange();


var topPos=$("#car").css('bottom');
$(document).keypress(function (e) {

    if (e.key=="h"){
        horn1.play();
    }

    if (e.key=='d'){
        $("#car").animate({
            left:"150"
        },300);
        // $('#car').css('right','-8.5%');
    }

    if (e.key=='a'){
        $("#car").animate({
            left:"-150"
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

function posiChange() {
    setInterval(function () {
        const ranNum = getRandomNumber(100, 105);
        if (ranNum==100 | ranNum==102 | ranNum==104){
            $('#car2').css('left',(-150)+'px');
        }else{
            $('#car2').css('left',150+'px');
        }
       // console.log(ranNum);
    },5000);

}

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

score=0;
checkGameOver = setInterval(function () {
    score++;
    $('#scoreTxt').text(score);

    console.log($('#car').position().top);

    carOnePos=$('#car').position().left
    carTwoPos=$('#car2').position().left
    // console.log(carOnePos);
    // console.log(carTwoPos);

    carOnePosTop=$('#car').offset().top
    carTwoPosTop=$('#car2').offset().top
    // console.log(carOnePosTop);
    // console.log(carTwoPosTop);

    if (carOnePos == -70 && carTwoPos==-150){
        console.log("both cars in right path");

        if (carOnePosTop == 599.703125 && carTwoPosTop > 400.078125){
            crashSound.play();
            //alert("crashed");
            // policeSound.play();

            $("#road").css('animation','none');
            $("#car2").css('animation','none');
            clearInterval(checkGameOver);

            Swal.fire({
                icon: 'error',
                title: 'Game Over !',
                text: 'Try Again .....',
                // footer: '<a href="">Why do I have this issue?</a>'
            })

        }

        if (carOnePosTop == 39.90625 && carTwoPosTop > -100 && carTwoPosTop < 0){
            crashSound.play();
            //alert("crashed");
            // policeSound.play();

            $("#road").css('animation','none');
            $("#car2").css('animation','none');
            clearInterval(checkGameOver);
            Swal.fire({
                icon: 'error',
                title: 'Game Over !',
                text: 'Try Again .....',
                // footer: '<a href="">Why do I have this issue?</a>'
            })
        }

    }

    if (carOnePos == 230 && carTwoPos==150){
        console.log("both cars in left path");
        if (carOnePosTop == 599.703125 && carTwoPosTop > 400.078125){
            crashSound.play();
            //alert("crashed");
            // policeSound.play()

            $("#road").css('animation','none');
            $("#car2").css('animation','none');

            clearInterval(checkGameOver);

            Swal.fire({
                icon: 'error',
                title: 'Game Over !',
                text: 'Try Again .....',
                // footer: '<a href="">Why do I have this issue?</a>'
            })
        }

        if (carOnePosTop == 39.90625 && carTwoPosTop > -100 && carTwoPosTop < 0){
            crashSound.play();
            //alert("crashed");
            // policeSound.play();

            $("#road").css('animation','none');
            $("#car2").css('animation','none');

            clearInterval(checkGameOver);

            Swal.fire({
                icon: 'error',
                title: 'Game Over !',
                text: 'Try Again .....',
                // footer: '<a href="">Why do I have this issue?</a>'
            })
        }

        if (score==1500){
            clearInterval(checkGameOver);

            $("#road").css('animation','none');
            $("#car2").css('animation','none');

            Swal.fire({
                icon: 'success',
                title: 'Level Completed',
                text: 'Go To Next Level',
                // footer: '<a href="">Why do I have this issue?</a>'
            })
        }
    }


},100);





