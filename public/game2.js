const chartLeft = document.querySelector(".population__chart__left > ul");
const chartRight = document.querySelector(".population__chart__right > ul");
const birthPopuLeft = document.querySelector(".birthpopu_left");
const birthPopuRight = document.querySelector(".birthpopu_right");
const inputSliderL = document.querySelector("#rangeL");
const inputSliderR = document.querySelector("#rangeR");
const easy = document.querySelector(".easy");
const normal = document.querySelector(".normal");
const hard = document.querySelector(".hard");
const infinity = document.querySelector(".infinity");
const gamerule = document.querySelector(".gamerule");
const startButton = document.querySelector(".start");
const gameText = document.querySelector(".game-text");
const restartButton = document.querySelector(".restart");
const level = document.querySelector(".level");
const leftbutton = document.querySelector(".leftbutton");
const rightbutton = document.querySelector(".rightbutton");
const year = document.querySelector(".population__year");
const chart=document.querySelector('.popu__section__container');
const birthPopu=document.querySelector('.popu__birthpopu');
const yearcontrols=document.querySelectorAll('.year_control > button');
const playContainer=document.querySelector('.play_container');
const playButtons=document.querySelectorAll('.play_container button');
const playButton=document.querySelector('.playbutton');
const replayButton=document.querySelector('.replaybutton');
const slowButton=document.querySelector('.slowbutton > i');
const fastButton=document.querySelector('.fastbutton > i');
const playSpeed=document.querySelector('.playSpeed');
const chartcontainer=document.querySelector('.population__chart__container');
const birthpopulation=document.querySelector('.birthpopulation');
const scoreboard=document.querySelector('.scoreboard');
const totalScore=document.querySelector('.totalScore');
const gameRule=document.querySelector('.gameRule_container');
const gameRuleButton=document.querySelector('.gameRule_Button');
const gameRuleCheckButton=document.querySelector('.gameRule_checkButton');
const levelSelect=document.querySelector('.levelSelect_container');
const levelSelectButton=document.querySelector('.levelSelect_Button');
const levelSelectcheckButton=document.querySelector('.levelSelect_checkButton');

const speed = 5;
let GAME_COLS = 10;
let lines =["0","0","0","0","0","0","0","0","0","0"];
let question =[];
let saveLines =[];
let input = inputSliderR.value;
var interval; 
let yearSpeedIndex = 0;
let yearSpeed = 1500;
let round = 1;
let score = 0;


init();

function init() {
    drawBack(chartLeft);
    drawBack(chartRight);
    drawBack_under(birthPopuLeft);
    drawBack_under(birthPopuRight);
    setQuestion () 
    renderQuestion()
    playButton.style.display = "";
    replayButton.style.display = "none";
}

//EventListener
inputSliderR.oninput = (()=>{
    inputSliderL.value = 10-inputSliderR.value; 
    renderbirthPopu()
});

inputSliderL.oninput = (()=>{
    inputSliderR.value = 10-inputSliderL.value; 
    renderbirthPopu()
});

gameRuleButton.addEventListener("click",()=>{
    gameRule.style.display = "flex"
})

gameRuleCheckButton.addEventListener("click",()=>{
    gameRule.style.display = "none"
})

levelSelectButton.addEventListener("click",()=>{
    levelSelect.style.display = "flex"
})

levelSelectcheckButton.addEventListener("click",()=>{
    levelSelect.style.display = "none"
})

playButton.addEventListener('click',()=>{
    playBtn()
})

replayButton.addEventListener('click',()=>{
    replayBtn()
})

fastButton.addEventListener('click',()=>{
    fastBtn();
})

slowButton.addEventListener('click',()=>{
    slowBtn();
})

//functions
function playBtn(){
    playButton.style.display = "none"
    replayButton.style.display = ""
    fastButton.style.display = "none"
    slowButton.style.display = "none" 
    interval = setInterval(yearPlus, yearSpeed)
}

function replayBtn(){
    reset()
    replayButton.style.display = "none"
    playButton.style.display = ""
    fastButton.style.display = ""
    slowButton.style.display = "" 
    clearInterval(interval);
}

function fastBtn(){
    if(playButton.style.display == ""){
        switch(yearSpeedIndex){
            case 0:
                yearSpeedIndex++;
                playSpeed.textContent = "x2 배속";
                yearSpeed = 750;
                break
            case 1:
                yearSpeedIndex++;
                playSpeed.textContent = "x3 배속";
                yearSpeed = 500;
                break
            case 2:
                yearSpeedIndex++;
                playSpeed.textContent = "x4 배속";
                yearSpeed = 375;
                break
            case 3:
                yearSpeedIndex++;
                playSpeed.textContent = "x5 배속";
                yearSpeed = 300;
                break
        }
    }
}

function slowBtn(){
    if(playButton.style.display == ""){
        switch(yearSpeedIndex){
        case 1:
            yearSpeedIndex--;
            playSpeed.textContent = "x1 배속";
            yearSpeed = 1500;
            break
        case 2:
            yearSpeedIndex--;
            playSpeed.textContent = "x2 배속";
            yearSpeed = 750;
            break
        case 3:
            yearSpeedIndex--;
            playSpeed.textContent = "x3 배속";
            yearSpeed = 500;
            break
        case 4:
            yearSpeedIndex--;
            playSpeed.textContent = "x4 배속";
            yearSpeed = 375;
            break
        }
    }
}

function reset() {
    score = 0;
    question =[];
    setQuestion();
    lines =["0","0","0","0","0","0","0","0","0","0"];
    eraseAll()
    renderbirthPopu();
    renderQuestion();
}

function play(input) {
    lines.push(input);
    lines.shift();
    erase("coloredWomen");
    erase("coloredMan");
    renderQuestion();
    renderChart();
    //console.log(lines);
}

function setQuestion () {
    num = rand(1, 10);
    for(let i = 0; question.length< 10; i++){
        plus = rand(-1, 1);
        if(plus != 0){
            num += plus;
            if(0 < num && num < 11){
                question.push(num+"");
            }
        }
    }
}

function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function drawBack(LR) {
    for(let i = 0; i < 10; i++){
        const li = document.createElement("li");
        const ul = document.createElement("ul");
        for(let j = 0; j < GAME_COLS; j++){
            const matrix = document.createElement("li")
            ul.prepend(matrix);
        }
        li.prepend(ul);
        LR.prepend(li);
    }
}

function drawBack_under(LR) {
    const li = document.createElement("li");
    const ul = document.createElement("ul");
    for(let j = 0; j < GAME_COLS; j++){
        const matrix = document.createElement("li")
        ul.prepend(matrix);
    }
    li.prepend(ul);
    LR.prepend(li);
}

function renderChart() {
    for(let i = 0; i < 10; i++){
        let j =  10 - lines[i];
        while(j < 10) {
            const target = chartLeft.childNodes[i].childNodes[0].childNodes[j];
            target.classList.add("coloredMan")
            j++;
        }
    }
    for(let i = 0; i < 10; i++){
        let j =  lines[i] - 1;
        while(j >= 0) {
            const target = chartRight.childNodes[i].childNodes[0].childNodes[j];
            target.classList.add("coloredWomen")
            j--;
        }
    }
}

function renderQuestion() {
    for(let i = 0; i < 10; i++){
        let j =  10 - question[i];
        while(j < 10) {
            const target = chartLeft.childNodes[i].childNodes[0].childNodes[j];
            target.classList.add("coloredQuestion")
            j++;
        }
    }
    for(let i = 0; i < 10; i++){
        let j =  question[i] - 1;
        while(j >= 0) {
            const target = chartRight.childNodes[i].childNodes[0].childNodes[j];
            target.classList.add("coloredQuestion")
            j--;
        }
    }
}

function erase(classname) {
    const coloedBlocks = document.querySelectorAll("."+classname);
    coloedBlocks.forEach(colored=>{
        colored.classList.remove(classname);
    })
}

function eraseAll() {
    erase("coloredWomen");
    erase("coloredMan");
    erase("birthPopu");
    erase("coloredQuestion");
    erase("opacityAnimationM")
    erase("opacityAnimationW")
}

function renderbirthPopu() {
    let i = inputSliderR.value -1;
    let j = 9-i
    erase("birthPopu")
    while(i >= 0) {
        const target = birthPopuRight.childNodes[0].childNodes[0].childNodes[i];
        target.classList.add("birthPopu")
        i--;
    }
    while(j <= 9) {
        const target = birthPopuLeft.childNodes[0].childNodes[0].childNodes[j];
        target.classList.add("birthPopu")
        j++;
    }
}

function yearPlus(){
    input = inputSliderR.value;
    play(input);
    if(lines[0] != 0){
        clearInterval(interval)
        for(let i =0; i < 10; i++){
            if(lines[i] == question[i]){
                score++
                lineBlink(i)
            };
        }
        saveScore()
        switch(yearSpeedIndex){
            case 1:
                score = score*2
                break
            case 2:
                score = score*3
                break
            case 3:
                score = score*4
                break
            case 4:
                score = score*5
                break
        }
        round++
        totalScore.textContent = totalScore.textContent*1 + score;
        scoreboard.scrollTop = scoreboard.scrollHeight;
    }
}

function lineBlink(line){
    for(let i = 0; i < question[line]; i++) {
        const target = chartRight.childNodes[line].childNodes[0].childNodes[i];
        target.classList.add("opacityAnimationM")
        target.classList.remove("coloredQuestion")


    }
    for(let i = 9; i > 9-question[line]; i--) {
        const target = chartLeft.childNodes[line].childNodes[0].childNodes[i];
        target.classList.add("opacityAnimationW")
        target.classList.remove("coloredQuestion")

    }
}

function saveScore(){
    const divScorebox = document.createElement("div")
    const divScoreResultBox = document.createElement("div")
    const divScoreResult = document.createElement("div")
    const divRound = document.createElement("div")
    const divScore = document.createElement("div")
    divRound.append(round + ".")
    switch(yearSpeedIndex){
        case 0:
            divScore.append(score + "X1" + "=")
            divScoreResult.append(score + "점")
            break
        case 1:
            divScore.append(score + "X2" + "=")
            divScoreResult.append(score*2 + "점")
            break
        case 2:
            divScore.append(score + "X3" + "=")
            divScoreResult.append(score*3 + "점")
            break
        case 3:
            divScore.append(score + "X4" + "=")
            divScoreResult.append(score*4 + "점")
            break
        case 4:
            divScore.append(score + "X5" + "=")
            divScoreResult.append(score*5 + "점")
            break
    }
    divScorebox.append(divRound)
    divScorebox.append(divScore)
    divScorebox.classList.add("scoreBox")
    divScoreResultBox.append(divScoreResult)
    divScoreResultBox.classList.add("scoreResultBox")
    scoreboard.append(divScorebox)
    scoreboard.append(divScoreResultBox)
}

let pressed = true;

document.addEventListener("keydown", e => {
    switch(e.keyCode){
        case 37 : // 왼쪽
            e.preventDefault();
            inputSliderR.value = inputSliderR.value*1 - 1;
            inputSliderL.value = inputSliderL.value*1 + 1;
            renderbirthPopu()
            break;
        case 39 : // 오른쪽
            e.preventDefault();
            inputSliderR.value = inputSliderR.value*1 + 1;
            inputSliderL.value = inputSliderL.value*1 - 1;
            renderbirthPopu()
            break;
        case 40 : // 아래
            e.preventDefault();
            slowBtn();
            slowButton.classList.remove("keyup")
            slowButton.classList.add("keydown")
            break;
        case 38 : // 위
            e.preventDefault();
            fastBtn();
            fastButton.classList.remove("keyup")
            fastButton.classList.add("keydown")
            break
        case 32 : //스패이스바
            if(playButton.style.display == "none" && pressed == true){
                pressed = false;
                replayButton.classList.remove("keyup")
                replayButton.classList.add("keydown")
                replayBtn()
                playButton.style.display = "none"
                replayButton.style.display = ""
            } else if(playButton.style.display == "" && pressed == true){
                pressed = false;
                playButton.classList.remove("keyup")
                playButton.classList.add("keydown")
                playBtn()
                playButton.style.display = ""
                replayButton.style.display = "none"
            } 
            break
        default:
            break;
    }
})

document.addEventListener("keyup", (e) => {
    switch(e.keyCode){
        case 32 :
            if(playButton.style.display == "none"){
                playButton.style.display = ""
                replayButton.style.display = "none"
            } else{
                playButton.style.display = "none"
                replayButton.style.display = ""
            }
            pressed = true;
    }
    playButton.classList.remove("keydown")
    replayButton.classList.remove("keydown")
    fastButton.classList.remove("keydown")
    slowButton.classList.remove("keydown")
    playButton.classList.add("keyup")
    replayButton.classList.add("keyup")
    fastButton.classList.add("keyup")
    slowButton.classList.add("keyup")
});


