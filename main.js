// click and score
const cookie = document.getElementById('goku');
const scoreDisplay = document.getElementById('score');

let score = 0;

cookie.addEventListener('click', () => {
    score++;
    scoreDisplay.textContent = score;
});

//increase score by 1 every second
function increaseScore() {
    setInterval(() => {
        score++;
        scoreDisplay.textContent = score;
    }, 1000);
}
increaseScore();


//picture change when click
function changeImage() {
    const image = document.getElementById('goku');
    let scoreDisplay = document.getElementById('score');


    if (image.src.endsWith('gokuPunch2.png')) {
        image.src = 'gokuPunch1.png';
    } else {
        image.src = 'gokuPunch2.png';
    }

    let score = parseInt(scoreDisplay.innerText, 10);
    score += 1;
    scoreDisplay.innerText = score;
}


// start background
function startButton() {
    const button = document.getElementById('start-button');
    const startScreen = document.getElementById('start-screen');

    button.addEventListener('click', function (){
        startScreen.style.display = 'none'
    });
}

window.onload = startButton;