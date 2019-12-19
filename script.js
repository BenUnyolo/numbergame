const countdownText = document.querySelector("#timer");
const enterButton = document.querySelector("#enter");
const soundButton = document.querySelector("#sound");
const startButton = document.querySelector("#start");
const numberGuess = document.querySelector("#numberGuess");
const containerDiv = document.querySelector(".container");
const infoDiv = document.querySelector(".info");
const mainDiv = document.querySelector(".main");
const livesDiv = document.querySelector("#livesDiv");
const scoreSpan = document.querySelector("#score");

const numbers = [
    {number: "0", file:"numbersaudio/french/0.mp3"},
	{number: "1", file:"numbersaudio/french/1.mp3"},
	{number: "2", file:"numbersaudio/french/2.mp3"},
	{number: "3", file:"numbersaudio/french/3.mp3"},
	{number: "4", file:"numbersaudio/french/4.mp3"},
	{number: "5", file:"numbersaudio/french/5.mp3"},
	{number: "6", file:"numbersaudio/french/6.mp3"},
	{number: "7", file:"numbersaudio/french/7.mp3"},
	{number: "8", file:"numbersaudio/french/8.mp3"},
	{number: "9", file:"numbersaudio/french/9.mp3"},
	{number: "10", file:"numbersaudio/french/10.mp3"},
	{number: "11", file:"numbersaudio/french/11.mp3"},
	{number: "12", file:"numbersaudio/french/12.mp3"},
	{number: "13", file:"numbersaudio/french/13.mp3"},
	{number: "14", file:"numbersaudio/french/14.mp3"},
	{number: "15", file:"numbersaudio/french/15.mp3"},
	{number: "16", file:"numbersaudio/french/16.mp3"},
	{number: "17", file:"numbersaudio/french/17.mp3"},
	{number: "18", file:"numbersaudio/french/18.mp3"},
	{number: "19", file:"numbersaudio/french/19.mp3"},
	{number: "20", file:"numbersaudio/french/20.mp3"},
	{number: "21", file:"numbersaudio/french/21.mp3"},
	{number: "22", file:"numbersaudio/french/22.mp3"},
	{number: "23", file:"numbersaudio/french/23.mp3"},
	{number: "24", file:"numbersaudio/french/24.mp3"},
	{number: "25", file:"numbersaudio/french/25.mp3"},
	{number: "26", file:"numbersaudio/french/26.mp3"},
	{number: "27", file:"numbersaudio/french/27.mp3"},
	{number: "28", file:"numbersaudio/french/28.mp3"},
	{number: "29", file:"numbersaudio/french/29.mp3"},
	{number: "30", file:"numbersaudio/french/30.mp3"},
	{number: "31", file:"numbersaudio/french/31.mp3"},
	{number: "32", file:"numbersaudio/french/32.mp3"},
	{number: "33", file:"numbersaudio/french/33.mp3"},
	{number: "34", file:"numbersaudio/french/34.mp3"},
	{number: "35", file:"numbersaudio/french/35.mp3"},
	{number: "36", file:"numbersaudio/french/36.mp3"},
	{number: "37", file:"numbersaudio/french/37.mp3"},
	{number: "38", file:"numbersaudio/french/38.mp3"},
	{number: "39", file:"numbersaudio/french/39.mp3"},
	{number: "40", file:"numbersaudio/french/40.mp3"},
	{number: "41", file:"numbersaudio/french/41.mp3"},
	{number: "42", file:"numbersaudio/french/42.mp3"},
	{number: "43", file:"numbersaudio/french/43.mp3"},
	{number: "44", file:"numbersaudio/french/44.mp3"},
	{number: "45", file:"numbersaudio/french/45.mp3"},
	{number: "46", file:"numbersaudio/french/46.mp3"},
	{number: "47", file:"numbersaudio/french/47.mp3"},
	{number: "48", file:"numbersaudio/french/48.mp3"},
	{number: "49", file:"numbersaudio/french/49.mp3"},
	{number: "50", file:"numbersaudio/french/50.mp3"},
	{number: "51", file:"numbersaudio/french/51.mp3"},
	{number: "52", file:"numbersaudio/french/52.mp3"},
	{number: "53", file:"numbersaudio/french/53.mp3"},
	{number: "54", file:"numbersaudio/french/54.mp3"},
	{number: "55", file:"numbersaudio/french/55.mp3"},
	{number: "56", file:"numbersaudio/french/56.mp3"},
	{number: "57", file:"numbersaudio/french/57.mp3"},
	{number: "58", file:"numbersaudio/french/58.mp3"},
	{number: "59", file:"numbersaudio/french/59.mp3"},
	{number: "60", file:"numbersaudio/french/60.mp3"},
	{number: "61", file:"numbersaudio/french/61.mp3"},
	{number: "62", file:"numbersaudio/french/62.mp3"},
	{number: "63", file:"numbersaudio/french/63.mp3"},
	{number: "64", file:"numbersaudio/french/64.mp3"},
	{number: "65", file:"numbersaudio/french/65.mp3"},
	{number: "66", file:"numbersaudio/french/66.mp3"},
	{number: "67", file:"numbersaudio/french/67.mp3"},
	{number: "68", file:"numbersaudio/french/68.mp3"},
	{number: "69", file:"numbersaudio/french/69.mp3"},
	{number: "70", file:"numbersaudio/french/70.mp3"},
	{number: "71", file:"numbersaudio/french/71.mp3"},
	{number: "72", file:"numbersaudio/french/72.mp3"},
	{number: "73", file:"numbersaudio/french/73.mp3"},
	{number: "74", file:"numbersaudio/french/74.mp3"},
	{number: "75", file:"numbersaudio/french/75.mp3"},
	{number: "76", file:"numbersaudio/french/76.mp3"},
	{number: "77", file:"numbersaudio/french/77.mp3"},
	{number: "78", file:"numbersaudio/french/78.mp3"},
	{number: "79", file:"numbersaudio/french/79.mp3"},
	{number: "80", file:"numbersaudio/french/80.mp3"},
	{number: "81", file:"numbersaudio/french/81.mp3"},
	{number: "82", file:"numbersaudio/french/82.mp3"},
	{number: "83", file:"numbersaudio/french/83.mp3"},
	{number: "84", file:"numbersaudio/french/84.mp3"},
	{number: "85", file:"numbersaudio/french/85.mp3"},
	{number: "86", file:"numbersaudio/french/86.mp3"},
	{number: "87", file:"numbersaudio/french/87.mp3"},
	{number: "88", file:"numbersaudio/french/88.mp3"},
	{number: "89", file:"numbersaudio/french/89.mp3"},
	{number: "90", file:"numbersaudio/french/90.mp3"},
	{number: "91", file:"numbersaudio/french/91.mp3"},
	{number: "92", file:"numbersaudio/french/92.mp3"},
	{number: "93", file:"numbersaudio/french/93.mp3"},
	{number: "94", file:"numbersaudio/french/94.mp3"},
	{number: "95", file:"numbersaudio/french/95.mp3"},
	{number: "96", file:"numbersaudio/french/96.mp3"},
	{number: "97", file:"numbersaudio/french/97.mp3"},
	{number: "98", file:"numbersaudio/french/98.mp3"},
	{number: "99", file:"numbersaudio/french/99.mp3"},
	{number: "100", file:"numbersaudio/french/100.mp3"}
];

let currentNumber;
let time = 10;
let countdown;
let lives = 3;
let score = 0;
const gameOverDiv = document.createElement("div");
gameOverDiv.classList.add("gameOverDiv");

numbers.forEach((item) => {
    item.audio = new Audio(item.file);
});

function randomNumber() {
    let num = Math.floor((Math.random() * (numbers.length)));
    return num;
};

function startGame() {
    // set lives and score variables
    if(document.contains(gameOverDiv)){
        gameOverDiv.remove();
    }
    lives = 3;
    score = 0;
    addLives();
    updateScore();
    showGame();
    if(document.contains(startButton)){
        startButton.remove();
    }
    startRound();
    //remove start button
}

function addLives() {
    for(let i = 0; i < lives; i++){
        let heart = document.createElement("i");
        heart.classList.add("fa", "fa-heart");
        livesDiv.appendChild(heart);
    }
}

function showGame() {
    if (window.getComputedStyle(infoDiv).display === "none"){
        infoDiv.style.display = "flex";
        mainDiv.style.display = "flex";
    }
}

function hideGame() {
    if (window.getComputedStyle(infoDiv).display === "flex"){
        infoDiv.style.display = "none";
        mainDiv.style.display = "none";
    }
}

function startRound() {
    numberGuess.value="";
    currentNumber = randomNumber();
    console.log(`ANSWER: ${numbers[currentNumber].number}`);
    timer();
    numbers[currentNumber].audio.play();
    numberGuess.focus();
    numberGuess.select();
}

function checkAnswer() {
    clearInterval(countdown);
    if (numberGuess.value === numbers[currentNumber].number) {
        console.log('correct!');
        score ++;
        updateScore();
        startRound()
    } else {
        console.log('wrong!');
        notCorrect()
    }
}

function timer() {
    let timeLeft = time;
    countdown = setInterval(() => {
        countdownText.innerHTML = timeLeft;
        timeLeft -= 1;
        if(timeLeft < 0){
            console.log("time's up!")
            clearInterval(countdown);
            notCorrect()
        }
    }, 1000);
};

function notCorrect() {
    if (lives <= 1) {
        removeLife();
        clearInterval(countdown);
        hideGame();
        addLostMessage();
        console.log("GAME OVER");
        console.log(`Your score was: ${score}`)
    } else if (lives > 1) {
        lives --;
        removeLife();
        startRound();
    }
}

function removeLife() {
    livesDiv.removeChild(livesDiv.childNodes[0]);
}

function updateScore() {
    scoreSpan.innerHTML = score
}

function addLostMessage() {
    gameOverDiv.innerHTML = `
    <p>You are out of lives!</p>
    <p>Your final score was ${score}</p>
    <a href="javascript:startGame()">Play Again?</a>
    `
    containerDiv.appendChild(gameOverDiv);
}

enterButton.addEventListener("click", checkAnswer)
startButton.addEventListener("click", startGame)
soundButton.addEventListener("click", () => numbers[currentNumber].audio.play())
numberGuess.addEventListener("keyup", event => {
    event.preventDefault()
    if (event.keyCode === 13) { 
        checkAnswer();
    } ;
})