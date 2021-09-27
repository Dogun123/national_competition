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
const game1Replaybutton=document.querySelector('.game1Replaybutton');

const speed = 5;
let GAME_COLS = 10;
let lines =["0","0","0","0","0","0","0","0","0","0"];
let question =[];
let saveLines =[];
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
    playContainer.style.display = "none";
    playSpeed.style.display = "none";
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

rightbutton.addEventListener("click",()=>{
    rightBtn()
})

leftbutton.addEventListener("click",()=>{
    leftBtn()
})

game1Replaybutton.addEventListener("click",()=>{
    replayBtn()
})

let repeat = true;
//functions
function rightBtn(){
    if(year.textContent < 2000 && inputSliderR.value != 0){
        year.textContent = year.textContent*1 + 10
        lines.push(inputSliderR.value);
        lines.shift();
        renderChart();
    }
    if(lines[0] != 0 && repeat){
        repeat = false;
        game1Replaybutton.style.display = "block"
        for(let i =0; i < 10; i++){
            if(lines[i] == question[i]){
                score++
                lineBlink(i)
            };
        }
        saveScore()
        round++
        totalScore.textContent = totalScore.textContent*1 + score;
        scoreboard.scrollTop = scoreboard.scrollHeight;
    }
}

function leftBtn(){
    if(year.textContent > 1900 && inputSliderR.value != 0 && lines[0] == 0){
        year.textContent = year.textContent*1 - 10
        lines.pop();
        lines.unshift("0");
        console.log(lines)
        renderChart();
    }
}

function replayBtn(){
    reset()
    repeat = true;
    year.textContent=1900;
    game1Replaybutton.style.display = "none"
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
    erase("coloredWomen");
    erase("coloredMan");
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
    const divRound = document.createElement("div")
    const divScore = document.createElement("div")
    divRound.append(round + ".")
    divScore.append(score + "점")
    divScorebox.append(divRound)
    divScorebox.append(divScore)
    divScorebox.classList.add("scoreBox")
    scoreboard.append(divScorebox)
}
//functions

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
            if(year.textContent > 1900 && inputSliderR.value != 0 && lines[0] == 0){
                leftbutton.classList.remove("keyup")
                leftbutton.classList.add("keydown")
            }
            leftBtn()
            break;
        case 38 : // 위
            e.preventDefault();
            if(year.textContent < 2000 && inputSliderR.value != 0){
                rightbutton.classList.remove("keyup")
                rightbutton.classList.add("keydown")
            }
            rightBtn()
            break
        case 32 : //스패이스바
                game1Replaybutton.classList.remove("keyup")
                game1Replaybutton.classList.add("keydown")
            break
        default:
            break;
    }
})

document.addEventListener("keyup", (e) => {
    switch(e.keyCode){
        case 32 :
            if(year.textContent == 2000){
                replayBtn()
            }
            break
    }
    leftbutton.classList.remove("keydown")
    rightbutton.classList.remove("keydown")
    game1Replaybutton.classList.remove("keydown")
    leftbutton.classList.add("keyup")
    rightbutton.classList.add("keyup")
    game1Replaybutton.classList.add("keyup")
});


