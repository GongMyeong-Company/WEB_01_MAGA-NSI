let agreeButton = document.getElementById('agree-button')

let percentAnimation1 = document.querySelector('#percent-animation-1')
let percentAnimation2 = document.querySelector('#percent-animation-2')
let percentAnimation3 = document.querySelector('#percent-animation-3')
let percentAnimation4 = document.querySelector('#percent-animation-4')
let textAnimation = document.querySelector('#text-animation')
let fixbarRandom = document.getElementById('fixbar-random')

window.addEventListener('scroll', function () {
    let value = window.scrollY;
    console.log("scrollY", value);

    if (1200 < screen.width <=1800 && value > 4500) {
        percentAnimation1.style.animation = 'percent-1 1s ease-in-out';
        percentAnimation2.style.animation = 'percent-2 1.5s ease-in-out';
        percentAnimation3.style.animation = 'percent-3 2s ease-in-out';
        percentAnimation4.style.animation = 'percent-4 2.5s ease-in-out';
    } else if (991 < screen.width <= 1200 && value > 4000) {
        percentAnimation1.style.animation = 'percent-1 1s ease-in-out';
        percentAnimation2.style.animation = 'percent-2 1.5s ease-in-out';
        percentAnimation3.style.animation = 'percent-3 2s ease-in-out';
        percentAnimation4.style.animation = 'percent-4 2.5s ease-in-out';
    } else if (768 < screen.width <= 991 && value > 3600) {
        percentAnimation1.style.animation = 'percent-1 1s ease-in-out';
        percentAnimation2.style.animation = 'percent-2 1.5s ease-in-out';
        percentAnimation3.style.animation = 'percent-3 2s ease-in-out';
        percentAnimation4.style.animation = 'percent-4 2.5s ease-in-out';
    } else if (480 < screen.width <= 768 && value > 2900) {
        percentAnimation1.style.animation = 'percent-1 1s ease-in-out';
        percentAnimation2.style.animation = 'percent-2 1.5s ease-in-out';
        percentAnimation3.style.animation = 'percent-3 2s ease-in-out';
        percentAnimation4.style.animation = 'percent-4 2.5s ease-in-out';
    } else if (400 < screen.width <= 480 && value > 2200) {
        percentAnimation1.style.animation = 'percent-1 1s ease-in-out';
        percentAnimation2.style.animation = 'percent-2 1.5s ease-in-out';
        percentAnimation3.style.animation = 'percent-3 2s ease-in-out';
        percentAnimation4.style.animation = 'percent-4 2.5s ease-in-out';
    } else if (screen.width <= 400 && value > 2600) {
        percentAnimation1.style.animation = 'percent-1 1s ease-in-out';
        percentAnimation2.style.animation = 'percent-2 1.5s ease-in-out';
        percentAnimation3.style.animation = 'percent-3 2s ease-in-out';
        percentAnimation4.style.animation = 'percent-4 2.5s ease-in-out';
    } else {
        percentAnimation1.style.animation = 'percent-disappear1 1s ease-out forwards';
        percentAnimation2.style.animation = 'percent-disappear2 1s ease-out forwards';
        percentAnimation3.style.animation = 'percent-disappear3 1s ease-out forwards';
        percentAnimation4.style.animation = 'percent-disappear4 1s ease-out forwards';
    }
});


window.addEventListener('scroll', function () {
    let value = window.scrollY;
    console.log("scrollY", value);

    if (screen.width > 1200 && value > 2200) {
        textAnimation.style.animation = 'text-1 2s ease-out'
    } else if (991 < screen.width <= 1200 && value > 1600) {
        textAnimation.style.animation = 'text-1 2s ease-out'
    } else if (768 < screen.width <= 991 && value > 2000) {
        textAnimation.style.animation = 'text-1 2s ease-out'
    } else if (480 < screen.width <= 768 && value > 1550) {
        textAnimation.style.animation = 'text-1 2s ease-out'
    } else if (400 < screen.width <= 480 && value > 1300) {
        textAnimation.style.animation = 'text-1 2s ease-out'
    } else if (screen.width <= 400 && value > 1500) {
        textAnimation.style.animation = 'text-1 2s ease-out'
    } else {
        textAnimation.style.animation = 'text-disappear 1.5s ease-out forwards'
    }
});


let new_window_width = 600;
let new_window_height = 700;
let positionX = (window.screen.width / 2) - (new_window_width / 2);
let positionY = (window.screen.height / 2) - (new_window_height / 2);

agreeButton.addEventListener('click', agree)

function agree() {
    window.open("sub_index.html", "PopupWin", "width=" + new_window_width + ", height=" + new_window_height + ", top=" + positionY + ", left=" + positionX);
}

function birthMaxlength(e) {
    if (e.value.length > e.maxLength) {
        e.value = e.value.slice(0, e.maxLength);
    }
}
function telMaxlength(e) {
    if (e.value.length > e.maxLength) {
        e.value = e.value.slice(0, e.maxLength);
    }
}

function random(min,max) {
    let randomNum = Math.floor(Math.random()*(max-min)) + min;
    console.log(randomNum)
    fixbarRandom.textContent = `현재 상담신청 인원수 ${randomNum}명 신청 중`
}

random(50,100);

