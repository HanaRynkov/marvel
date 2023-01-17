//references to HTML elements
const questionElement = document.getElementById("question");
const wordInputElement = document.getElementById("word-input");
const remainedLettersElement = document.getElementById("letters-remained");
const letterInputElement = document.getElementById("letter-input");
const wordElement = document.querySelector(".word");
const resultMessage = document.getElementById("result-message");
const playAgain = document.getElementById("play-again");
let wordLettersElement;
//global variables
const questionsWords = [["Имя лучшего в мире футболиста 2022", "messi"], ["question2", "answer2"]];
let currentIndex = 0;
let initialLettersNumber;
let remainedLettersNumber;

//functions
function startGame() {
    wordInputElement.value = '';
    wordInputElement.readOnly = true;
    questionElement.innerHTML = questionsWords[currentIndex][0];
    playAgain.style.display = 'none'
    resultMessage.innerHTML = '';
    wordElement.innerHTML = getWordDivs();
    wordInputElement.setAttribute('disabled', true);
    remainedLettersElement.innerHTML = Math.round(0.3 * questionsWords[currentIndex][1].length);
}

function getWordDivs() {
    const answerArray = Array.from(questionsWords[currentIndex][1]);
    function appendLetter(letter, index) {
        return `<p class="letter" id="${index}_letter">${letter}</p>`;
    }
    return answerArray.map(appendLetter).join('');
}
function checkWord() {
    //TODO
}
function processLetter() {
    const currentValue = letterInputElement.value;
    const answerArray = Array.from(questionsWords[currentIndex][1]);

    function changeBg(item, index) {
        if (item === currentValue) {
            const htmlEl = document.getElementById(`${index}_letter`);
            htmlEl.style.backgroundColor = 'white';
        }
    }

    answerArray.forEach(changeBg);
}
function takeChance() {
    //TODO
}
function finishGame() {
    //TODO
}
//actions
startGame();