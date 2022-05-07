let agreeButton = document.getElementById('agree-button')

let percentAnimation1 = document.querySelector('#percent-animation-1')
let percentAnimation2 = document.querySelector('#percent-animation-2')
let percentAnimation3 = document.querySelector('#percent-animation-3')
let percentAnimation4 = document.querySelector('#percent-animation-4')
let textAnimation = document.querySelector('#text-animation')

window.addEventListener('scroll', function(){
    let value = window.scrollY;
    console.log("scrollY", value);

    if ( value > 2300) {
       percentAnimation1.style.animation = 'percent-1 0.8s ease-in-out';
       percentAnimation2.style.animation = 'percent-2 1.2s ease-in-out';
       percentAnimation3.style.animation = 'percent-3 1.5s ease-in-out';
       percentAnimation4.style.animation = 'percent-4 2s ease-in-out';
    }else {
        percentAnimation1.style.animation = 'percent-disappear1 0.5s ease-in-out forwards';
        percentAnimation2.style.animation = 'percent-disappear2 0.5s ease-in-out forwards';
        percentAnimation3.style.animation = 'percent-disappear3 0.5s ease-in-out forwards';
        percentAnimation4.style.animation = 'percent-disappear4 0.5s ease-in-out forwards';
    }

    if( value > 950) {
        textAnimation.style.animation = 'text-1 1.5s ease-out'
    }else {
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

