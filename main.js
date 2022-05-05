let agreeButton = document.getElementById('agree-button')

let new_window_width = 600;
let new_window_height = 700;
let positionX = (window.screen.width / 2) - (new_window_width / 2);
let positionY = (window.screen.height / 2) - (new_window_height / 2);

agreeButton.addEventListener('click', agree)

function agree() {
    window.open("sub_index.html", "PopupWin", "width=" + new_window_width + ", height=" + new_window_height + ", top=" + positionY + ", left=" + positionX);
}