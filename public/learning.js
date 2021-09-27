const content =[
"\"학습하기\"에서 인구피라미드에 대해 많이 알게 되었지?/ [\"학습하기\"를 마친 후 진행하는 것을 권장합니다.]",
"내가 열심히 알려준 덕분이라고~/사실은 너에게 부탁이 있어. 혹시 나를 도와줄 수 있어?",
"거절은 거절한다.",
"고마워~ 너처럼 친절한 사람은 처음이야!",
"나는 사실 \"펭귄국\"이라는 나라에서 왔어./남극에 숨겨져 있는 1년 내내 추운 나라지. /그런데 우리나라에 한가지 문제가 생겼어.",
"우리 나라의 2020년 인구 피라미드를 보여줄게.",
"우리나라의 문제가 무엇인지 알겠니?",
"음.. 아닌데.. 우리 다시 공부하고 올까?",
"맞아! 우리 펭귄국은 고령화 문제가 심각한 나라야. /평균 연령이 무려 65세라고!",
"짜잔~ 고령화의 원인을 알아내려고 도서관에서 중요한 데이터를 챙겨왔어./ 바로 1900년부터 모아온 펭귄국의 인구 피라미드 데이터지.",
"화살표 버튼을 눌러 연도의 데이터를 볼 수 있어. /2020년까지 살펴보자. 뭐든 찾아내면 이야기해 줘",
"그래? 마침 나도 굉장한 걸 발견했어. /내가 먼저 말해볼게.",
"1900년의 인구 피라미드에서 0~9살이던 사람들이 10년 뒤에는 몇 살이 될까?",
"다시 생각해봐 /(0~9살이던 사람들이 10년 뒤에는 몇 살이 될까?)",
"맞아! 0살이던 사람은 10살이 되고 9살이던 사람은 19살이 될거야.",
"이걸 보고 내가 발견한 사실은 10년이 지날때 마다 그림이 그대로 한칸씩 올라간다는 거야!",
"1900년도에 0~9살인 사람들을 계속 표시해 줄게./ 연도를 바꾸면서 이 사람들이 어떻게 움직이는지 관찰해봐.",
"어때 내 말이 맞지?/아 맞다! 너는 뭐를 찾아냈어?",
"(수상하게 생긴 스위치다.)",
"오! 정말이네 한번 눌러봐",
"무섭긴 뭐가 무서워! 이리 줘 내가 누를 테니까!",
"",
"(............................................딸깍)",
"새로운 버튼들이 나타났네!/출생인구? 이게뭐지.. /일단 재생버튼을 눌러보자.",
"10년마다 인구피라미드가 어떻게 바뀌는지 보여주는 기능인가봐./2000년이 될 때까지 기다려 보자./",
"버튼 사용방법이 아직 이해가 안 됐니?/다시 알아보려면 한참 걸릴텐데.. 괜찮겠어???",
"어휴.. 이번에는 꼭 이해해야해?/먼저 재생버튼부터 눌러보자.",
"내 생각에 이 \"출생인구\"가 중요한 것 같아./우리나라의 고령화 문제랑 관련이 있지 않을까?",
"내가 펭귄국의 인구그래프 모양대로 배경을 색칠해봤어./ 재생버튼을 누르고, 출생인구를 조절해서 똑같은 모양을 만들어봐/ 나도 하고 있을게 성공하면 불러~",
"오 성공했나 보구나! 설마 그냥 넘어온건 아니겠지..?ㅎㅎ/나도 한번 해볼게 시작 버튼만 눌러줘",
"어휴.. 알겠어, 다시보여줄게./시작버튼을 눌러줘!",
"정말? 그게 뭔데?",
"그건 바로,?",
"그건 바로, 펭귄국의?",
"그건 바로, 펭귄국의 출생인구가?",
"그건 바로, 펭귄국의 펭두는?",
"그건 바로, 우리반의?",
"그건 바로, 우리반의 학생들은?",
"그건 바로, 우리반의 담임 선생님은?",
"",
"장난치지말고 제대로 말해줘../펭귄국이 고령화가 된 이유가 뭐야?",
"",
"",
"그렇구나! 펭귄들이 아이를 점점 적게 낳는 것이 원인이었어./정말 고마워! 나는 어서 이 사실을 알리러 가볼게!/ 다음에 또 만나자!"
];
const chartLeft = document.querySelector(".population__chart__left > ul");
const chartRight = document.querySelector(".population__chart__right > ul");
const birthPopuLeft = document.querySelector(".birthpopu_left");
const birthPopuRight = document.querySelector(".birthpopu_right");
const inputSliderL = document.querySelector("#rangeL");
const inputSliderR = document.querySelector("#rangeR");
const levelSelect = document.querySelector(".levelSelect");
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
const scriptContainer=document.querySelector('.gamerule');
const character=document.querySelector('.character');
const text = document.querySelector(".script");
const scriptButtons = document.querySelectorAll(".script__button__box button");
const scriptbutton1 = document.querySelector(".script_button_1");
const scriptbutton2 = document.querySelector(".script_button_2");
const scriptbutton3 = document.querySelector(".script_button_3");
const scriptbutton4 = document.querySelector(".script_button_4");
const scriptbuttona = document.querySelector(".script_button_a");
const scriptbuttonaA = document.querySelector(".script_button_a > a");
const scriptbuttonb = document.querySelector(".script_button_b");
const scriptbuttonaB = document.querySelector(".script_button_b > a");
const hintbutton = document.querySelector(".hint_button");
const hint = document.querySelector(".hint");
const backButton=document.querySelector(".back__button");
const skipButton=document.querySelector(".skip__button");
const scriptArrowContainer=document.querySelector('.script__arrow__container');
const scriptFold=document.querySelector('.script__arrow__down');
const scriptOpen=document.querySelector('.script__arrow__up');
const chart=document.querySelector('.popu__section__container');
const birthPopu=document.querySelector('.birthpopu__container');
const yearcontrols=document.querySelectorAll('.year_box > button');
const yearbox=document.querySelector('.year_box');
const hintcontainer=document.querySelector('.hint_container');
const playContainer=document.querySelector('.play_container');
const playButtons=document.querySelectorAll('.play_container button');
const playButton=document.querySelector('.playbutton');
const stopButton=document.querySelector('.stopbutton');
const slowButton=document.querySelector('.slowbutton');
const fastButton=document.querySelector('.fastbutton');
const playSpeed=document.querySelector('.playSpeed');
const speedBox=document.querySelector('.speed_box');
const chartcontainer=document.querySelector('.population__chart__container');
const birthpopulation=document.querySelector('.birthpopulation');
const progressLi=document.querySelector('.progress > li');
const progresspercent=document.querySelector('.progress_percent');
const indexdutorial=document.querySelector('.index_dutorial');
const indexlearn=document.querySelector('.index_learn');
const indexproblem1=document.querySelector('.index_problem1');
const indexproblem2=document.querySelector('.index_problem2');
const body=document.querySelector('body');
const typingAudio = new Audio('public/music/Keyboard Typing.wav');
let speed = 30;
let speedSlow = 300;
let GAME_COLS = 10;
let lines =["0","0","0","0","0","0","0","0","0","0"];
let question =[];
let saveLines =[];
let index = 0;
let typingCount = 0;
let isStop = false;
let scriptTop = false;
let gobackNum = 1;
let gonextNum = 1;
let button1Num;
let button2Num;
let button3Num;
let button4Num;
let input = inputSliderR.value;
let agingMode = false;
let agingInput;
let agingchart = ["6","7","8","7","6","7","8","9","8","9","10","9","10","9","8","7","6","5","4","3","2","1"];
let agingIndex = -1;
let saveYear;
let yearSpeedIndex = 0;
let yearSpeed = 1500;
let midcontent = [""]
let repeat = true;
let repeat2 = true;
let repeat3 = true;
let num;
let answer ="";
let appendmode = false;
let answerAppend1 = "";
let answerAppend2 = "";
let answerAppendEnd1 = "";
let answerAppendEnd2 = "";
let progress = 33;
let pI = 0;
var interval; 
let answerSound;

init();

function init() {
    indexdutorial.classList.add("index_unselect")
    indexlearn.classList.add("index_unselect")
    indexproblem1.classList.add("index_select")
    indexproblem2.classList.add("index_unselect")
    drawProgress();
    drawBack(chartLeft);
    drawBack(chartRight);
    drawBack_under(birthPopuLeft);
    drawBack_under(birthPopuRight);
    resetAnimation()
    beforeTypingAnimation()
    setTimeout(typing, speed);
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

indexdutorial.addEventListener('mouseover', ()=>{
    indexproblem1.classList.remove("index_select")
    indexproblem1.classList.add("index_unselect")
})

indexdutorial.addEventListener('mouseout', ()=>{
    indexproblem1.classList.remove("index_unselect")
    indexproblem1.classList.add("index_select")
})

indexlearn.addEventListener('mouseover', ()=>{
    indexproblem1.classList.remove("index_select")
    indexproblem1.classList.add("index_unselect")
})

indexlearn.addEventListener('mouseout', ()=>{
    indexproblem1.classList.remove("index_unselect")
    indexproblem1.classList.add("index_select")
})

indexproblem2.addEventListener('mouseover', ()=>{
    indexproblem1.classList.remove("index_select")
    indexproblem1.classList.add("index_unselect")
})

indexproblem2.addEventListener('mouseout', ()=>{
    indexproblem1.classList.remove("index_unselect")
    indexproblem1.classList.add("index_select")
})

rightbutton.addEventListener("click",()=>{
    if(agingMode){
        switch(typingCount){
            case 16 :
                if(agingchart[agingIndex+14]){
                    backButton.textContent = "<<이전";
                    skipButton.textContent = "다음>>";
                    input = agingchart[agingIndex+11]
                    agingIndex++
                    year.textContent = year.textContent*1 + 10;
                    play(input)
                    erase("opacityAnimationM")
                    erase("opacityAnimationW")
                    lineOpacityAnimation(8-agingIndex)
                }
                break;
            default :
                if(agingchart[agingIndex+11]){
                        if(agingIndex==10){
                            rightbutton.classList.remove('blink__animation')
                            leftbutton.classList.remove('blink__animation')
                            character.setAttribute("src", "public/imgs/switchOff.png");
                            character.classList.add("character_switch")
                            backButton.textContent = "";
                            midTyping("(뒤쪽에 숨겨진 수상한 스위치를 발견했다)")
                        }
                        input = agingchart[agingIndex+11]
                        agingIndex++
                        year.textContent = year.textContent*1 + 10;
                        play(input)
                    }
                break;
        }
    } else{
        play(input)
    }
})

leftbutton.addEventListener("click",()=>{
    if(agingMode){
        if(agingchart[agingIndex]){
            input = lines[8];
            lines.unshift(agingchart[agingIndex])
            lines.unshift("play()에서 지워질 값")
            lines.pop();
            lines.pop();
            agingIndex--
            year.textContent = year.textContent*1 - 10;
            play(input)
        }
        if(typingCount==16){
            erase("opacityAnimationM")
            erase("opacityAnimationW")
            lineOpacityAnimation(8-agingIndex)
        }
    } else{
        play(input)
    }
})

skipButton.addEventListener('mouseover',()=>{
    clickSound()
})

backButton.addEventListener('mouseover',()=>{
    clickSound()
})

indexdutorial.addEventListener('mouseover',()=>{
    tapSound()
})

indexlearn.addEventListener('mouseover',()=>{
    tapSound()
})

indexproblem1.addEventListener('mouseover',()=>{
    tapSound()
})

indexproblem2.addEventListener('mouseover',()=>{
    tapSound()
})

skipButton.addEventListener('click',()=>{ // next버튼
    goNext(gonextNum);
})

backButton.addEventListener('click',()=>{ // back버튼
    if(typingCount!=0){
        goBack(gobackNum);
    }
})

scriptFold.addEventListener('click',()=>{ //스크립트 접기
    scriptFold.style.display = 'none';
    scriptOpen.style.display= 'block';
    if(scriptTop==false){
        scriptContainer.style.top='95%';
    } else{
        scriptContainer.style.top='-185px';
    }
})

scriptOpen.addEventListener('click',()=>{ //스크립트 열기
    scriptFold.style.display = 'block';
    scriptOpen.style.display='none';
    if(scriptTop==false){
        scriptContainer.style.top='';
    } else{
        console.log('hi');
        scriptContainer.style.top='0';
    }
})

scriptbutton1.addEventListener('click',()=>{
    if(appendmode){
        answer = "\"" + answer + answerAppend1 + "\"라고?/" + answerAppendEnd1;
    }
    console.log(answerSound);
    if(answerSound != 0){
        if(answerSound == 1){
            correctAnswer()
        }else{
            wrongAnswer()
        }
    }
    gowhere(button1Num);
})

scriptbutton2.addEventListener('click',()=>{
    if(appendmode){
        answer = "\"" + answer + answerAppend2 + "\"라고?/" + answerAppendEnd2;
    }
    if(answerSound != 0){
        if(answerSound == 2){
            correctAnswer()
        }else{
            wrongAnswer()
        }
    }
    gowhere(button2Num);
})

scriptbutton3.addEventListener('click',()=>{
    if(answerSound != 0){
        if(answerSound == 3){
            correctAnswer()
        }else{
            wrongAnswer()
        }
    }
    gowhere(button3Num);
})

scriptbutton4.addEventListener('click',()=>{
    if(answerSound != 0){
        if(answerSound == 4){
            correctAnswer()
        }else{
            wrongAnswer()
        }
    }
    gowhere(button4Num);
})

hintbutton.addEventListener('click',()=>{
    hintcontainer.style.display = ""
    if(typingCount == 28){
        skipButton.textContent = "다음>>";
    }
})

playButton.addEventListener('click',()=>{
    playButton.style.display = "none"
    stopButton.style.display = ""
    switch(typingCount){
        case 23:
            goNext(1);
            break; 
        case 26:
            gowhere(24);
            break; 
        case 29: case 30:
            num = 11
            renderbirthPopu();
            character.setAttribute("src", "public/imgs/hacker.png");
            text.textContent = "[펭두가 인구피라미드를 완성하는 중입니다.]"
            var br = document.createElement('br')
            text.append(br)
            text.append("[출생인구가 어떻게 변하는지 관찰해 보세요.]")
            interval = setInterval(yearPlus, yearSpeed)
            break;
        case 41:
            num = 0
            renderbirthPopu();
            interval = setInterval(yearPlus, yearSpeed)
            break;
        default:
            interval = setInterval(yearPlus, yearSpeed)
    }
})

stopButton.addEventListener('click',()=>{
    year.textContent = 1900;
    stopButton.style.display = "none"
    playButton.style.display = ""
    clearInterval(interval);
    lines = ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0"]
    erase("coloredWomen");
    erase("coloredMan");
    erase("birthPopu");
    erase("opacityAnimationM")
    erase("opacityAnimationW")
    inputSliderR.value = 1
    inputSliderL.value = 9
    renderbirthPopu();
})

fastButton.addEventListener('click',()=>{
    if (typingCount == 24 && repeat3 == true){
        pI=23;
        renderProgress()
        repeat3 = false;
        fastButton.classList.remove("blink__animation")
        slowButton.style.pointerEvents = ""
        stopButton.style.pointerEvents = ""
        midTyping("연도가 빠르게 올라가네./이 버튼으로 속도를 조절 할 수 있는 것 같아./ 버튼들의 기능이 이해가 됐으면 다음으로 넘어가자.")
    }
    switch(yearSpeedIndex){
        case 0:
            yearSpeedIndex++;
            playSpeed.textContent = "x2";
            yearSpeed = 750;
            break
        case 1:
            yearSpeedIndex++;
            playSpeed.textContent = "x4";
            yearSpeed = 375;
            break
        case 2:
            yearSpeedIndex++;
            playSpeed.textContent = "x8";
            yearSpeed = 187.5;
            break
        case 3:
            yearSpeedIndex++;
            playSpeed.textContent = "x16";
            yearSpeed = 93.75;
            break
    }
    if(playButton.style.display == "none"){
        clearInterval(interval);
        interval = setInterval(yearPlus, yearSpeed)
    }
})

slowButton.addEventListener('click',()=>{
    switch(yearSpeedIndex){
        case 1:
            yearSpeedIndex--;
            playSpeed.textContent = "x1";
            yearSpeed = 1500;
            break
        case 2:
            yearSpeedIndex--;
            playSpeed.textContent = "x2";
            yearSpeed = 750;
            break
        case 3:
            yearSpeedIndex--;
            playSpeed.textContent = "x4";
            yearSpeed = 375;
            break
        case 4:
            yearSpeedIndex--;
            playSpeed.textContent = "x8";
            yearSpeed = 187.5;
            break
    }
    if(playButton.style.display == "none"){
        clearInterval(interval);
        interval = setInterval(yearPlus, yearSpeed)
    }
})

//functions
function clickSound(){
    var clickaudio = document.getElementById("click");
    clickaudio.volume=0.5;
    clickaudio.play();
}

function tapSound(){
    var tapSound = document.getElementById("tap");
    tapSound.volume=0.5;
    tapSound.play();
}

function wrongAnswer(){
    var wrongaudio = document.getElementById("wrongAudio");
    wrongaudio.play();
}

function correctAnswer(){
    var correctaudio = document.getElementById("correctAudio");
    correctaudio.volume=0.5;
    correctaudio.play();
}

function drawProgress() {
    for(let i = 0; i < progress; i++){
        const div = document.createElement("div");
        const i = document.createElement("i");
        div.append(i)
        progressLi.prepend(div);
        i.setAttribute("class", "fas fa-running");
    }
}

function renderProgress() {
        for(let i = 0; i < progress; i++){
            const target = progressLi.childNodes[i].childNodes[0];
            target.style.display ="none";
        }
        if(typingCount != progress-1){
            for(let i = pI+1; i < progress; i++){
                const targetDivFront = progressLi.childNodes[i];
                targetDivFront.style.borderBottomColor = "#f5f3e7";
            }
        }
        const targetI = progressLi.childNodes[pI].childNodes[0];
        const targetDiv = progressLi.childNodes[pI];
        targetI.style.display ="block";
        targetDiv.style.borderBottomColor = "#73a66b";
        progresspercent.textContent = Math.floor(pI*100/(progress-1)) + "%"
}

function reset() {
    question =[];
    setQuestion();
    lines =["0","0","0","0","0","0","0","0","0","0"];
    inputSliderL.value = 10;
    inputSliderR.value = 0;
    erase("coloredWomen");
    erase("coloredMan");
    erase("birthPopu");
    erase("coloredQuestion");
    renderQuestion();
    gameText.style.display = "none"
}

function play(input) {
    lines.push(input);
    lines.shift();
    erase("coloredWomen");
    erase("coloredMan");
    renderQuestion();
    renderChart();
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
    year.textContent = year.textContent*1 + 10
    if(typingCount == 29 || typingCount == 30 || typingCount == 42){
        if(typingCount == 42 && num == 1){
            num = 11;
            lines = ["0","0","0","0","0","0","0","0","0","0"]
            year.textContent = 1920
        }
        num--
        inputSliderR.value = num
        inputSliderL.value = 10 - num
        renderbirthPopu();
    } else if(typingCount == 41){
        if(num == 9){
            clearInterval(interval);
            scriptButtoncontrol1(40, "뒤집은 모양이 만들어졌네.. 장난이지ㅎㅎ 다시 알려줄게")
        }
        num++
        inputSliderR.value = num
        inputSliderL.value = 10 - num
        renderbirthPopu();
    }
    input = inputSliderR.value;
    play(input);
    if(typingCount == 24){
        if(lines[0] != 0 && repeat == true){
            pI=21;
            renderProgress()
            repeat = false;
            yearbox.classList.remove("blink__animation")
            chartcontainer.classList.remove("blink__animation")
            birthPopuLeft.classList.add("blink__animation")
            birthPopuRight.classList.add("blink__animation")
            midTyping("이번에는 이 초록색 네모를 좌우로 움직여 보자.")
        }else if(index>=content[typingCount].length && repeat2 == true){
            text.append(year.textContent+"년.. ")
        }else if(lines[0] != 0 && lines[9] != 1 && repeat2 == true){
            repeat2 = false;
            birthPopuLeft.classList.remove("blink__animation")
            birthPopuRight.classList.remove("blink__animation")
            pI=22;
            renderProgress()
            midTyping("아하! 출생인구에 따라서 매년 인구피라미드의 모양이 달라지네!/이번에는 이 버튼을 눌러볼까?")
        }
    } else if(JSON.stringify(lines) == JSON.stringify(question)){
        if(typingCount == 28){
            clearInterval(interval)
            scriptButtoncontrol1(29, "성공했어!")
        } else if (typingCount == 29 || typingCount == 30){
            clearInterval(interval)
            scriptButtoncontrol1(30, "다시보여줘!")
            scriptButtoncontrol2(31, "아하! 고령화의 원인이 뭔지 알아냈어!")
        }
    }
}

function resetAnimation(){ // 상호작용 요소들 초기화
    body.classList.add("background")
    gobackNum=1;
    gonextNum=1;
    eraseAll()
    scriptButtons.forEach(Button=>{
        Button.style.display = "none";
    })
    playButton.style.display = ""
    stopButton.style.display = "none"
    chart.style.display = "";
    hintbutton.style.display = "none";
    hintcontainer.style.display = "none";
    backButton.textContent = "<<이전";
    skipButton.textContent = "";
    leftbutton.classList.remove('blink__animation')
    rightbutton.classList.remove('blink__animation')
    playButtons.forEach(Button=>{
        Button.classList.remove('blink__animation')
    })
    birthPopuLeft.classList.remove("blink__animation")
    birthPopuRight.classList.remove("blink__animation")
    yearbox.classList.remove('blink__animation')
    chartcontainer.classList.remove('blink__animation')
    playContainer.classList.remove('blink__animation')
    birthpopulation.classList.remove("blink__animation")
    agingMode = false;
    repeat = true;
    repeat2 = true;
    repeat3 = true;
    appendmode = false;
    answerSound = 0;
    character.setAttribute("src", "public/imgs/penguin.png");
    character.classList.remove("character_switch")
    clearInterval(interval)
    displayControl()
    lines =["0","0","0","0","0","0","0","0","0","0"];
    question = [];
    inputSliderR.value = 1
    inputSliderL.value = 9
    yearSpeedIndex = 0;
    yearSpeed = 1500;
    playSpeed.textContent = "x1"
    renderbirthPopu()
}

function displayControl(yNum="0000", ybtn="none", lbtn="none", rbtn="none", bchart="none", player="none", playBtn="none", slider="none"){
    year.textContent = yNum;
    yearcontrols.forEach(Button=>{
        Button.style.display = ybtn;
    })
    leftbutton.style.pointerEvents = lbtn;
    rightbutton.style.pointerEvents = rbtn;
    birthPopu.style.display = bchart;
    inputSliderL.style.pointerEvents=slider;
    inputSliderR.style.pointerEvents=slider;
    playContainer.style.display=player;
    speedBox.style.display=player;
    playButtons.forEach(Button=>{
        Button.style.pointerEvents = playBtn;
    })
    fastButton.style.pointerEvents = playBtn;
    slowButton.style.pointerEvents = playBtn;
}

function renderControl(lineV=["1","1","1","1","1","1","1","1","1","1"]){
    if(agingMode){
        agingIndex = -1;
        if(year.textContent == 1900){
            for(let i = 9; i >= 0; i--){
                lines.pop()
                lines.unshift(agingchart[i])
            }
            renderChart()
        }
        if(year.textContent == 1910){
            for(let i = 10; i >= 1; i--){
                lines.pop()
                lines.unshift(agingchart[i])
            }
            renderChart()
        }
    } else{
        lines=lineV;
        renderChart()
    }
}

function lineOpacityAnimation(line){
    for(let i = 0; i < lines[line]; i++) {
        const target = chartRight.childNodes[line].childNodes[0].childNodes[i];
        target.classList.add("opacityAnimationM")
    }
    for(let i = 9; i > 9-lines[line]; i--) {
        const target = chartLeft.childNodes[line].childNodes[0].childNodes[i];
        target.classList.add("opacityAnimationW")
    }
}

function midTyping(newText){
    text.textContent = "";
    midcontent[0] = newText
    index = 0;
    setTimeout(midTypingPlay, speed);
}

function midTypingPlay () {
    typingAudio.play();
    if(index<midcontent[0].length){
        if(midcontent[0][index] == "/"){
            var br = document.createElement('br')
            text.append(br)
            index++
            setTimeout(midTypingPlay, speed);
        } else {
            text.append(midcontent[0][index]) 
            index++
            setTimeout(midTypingPlay, speed);
        }
    } else{
        typingAudio.pause();
        switch(typingCount){
            case 10:
                scriptButtoncontrol1(11,"내가 뭔가를 발견한 것 같아.")
                break;
            case 24:
                inputSliderL.style.pointerEvents="";
                inputSliderR.style.pointerEvents="";
                if(repeat2 == false && repeat3 == true){
                    fastButton.style.pointerEvents="";
                    fastButton.classList.add("blink__animation")
                } else if(repeat2 == false && repeat3 == false){
                    skipButton.textContent = "다음>>"
                }
                break;
        }
    }
    }


function typing(){ // 타이핑 효과
    typingAudio.play();
    if(index<content[typingCount].length){
        if(content[typingCount][index] == "/"){
            var a = document.createElement('br')
            text.append(a)
            index++
            setTimeout(typing, speedSlow);
        } else {
            text.append(content[typingCount][index]) 
            index++
            setTimeout(typing, speed);
        }

    } else{
        skipButton.classList.add('skip__animation');
        typingAudio.pause();
        afterTypingAnimation()
    }
}

function goNext(num){ // next버튼
    skipButton.classList.remove('skip__animation')
    index=0;
    text.textContent = "";
    typingCount +=num;
    console.log(typingCount);
    beforeTypingAnimation()
    setTimeout(typing, speed);
}

function goBack(num){ // back버튼
    skipButton.classList.remove('skip__animation')
    index=0;
    text.textContent="";
    typingCount -=num;
    console.log(typingCount);
    beforeTypingAnimation()
    setTimeout(typing, speed);
}

function gowhere(num){ // back버튼
    skipButton.classList.remove('skip__animation')
    index=0;
    text.textContent="";
    typingCount=num;
    console.log(typingCount);
    beforeTypingAnimation()
    setTimeout(typing, speed);
}

function scriptButtoncontrol1(gowhereNum=0, text="", mode=false, appendEnd = "") {
    appendmode = mode;
    answerAppend1 = text;
    answerAppendEnd1 = appendEnd;
    scriptbutton1.style.display="";
    button1Num=gowhereNum;
    scriptbutton1.textContent=text;
}

function scriptButtoncontrol2(gowhereNum=0, text="", mode=false, appendEnd = "") {
    appendmode = mode;
    answerAppend2 = text;
    answerAppendEnd2 = appendEnd;
    scriptbutton2.style.display="";
    button2Num=gowhereNum;
    scriptbutton2.textContent=text;
}

function scriptButtoncontrol3(gowhereNum=0, text="") {
    scriptbutton3.style.display="";
    button3Num=gowhereNum;
    scriptbutton3.textContent=text;
}

function scriptButtoncontrol4(gowhereNum=0, text="") {
    scriptbutton4.style.display="";
    button4Num=gowhereNum;
    scriptbutton4.textContent=text;
}

function scriptButtoncontrola(text="") {
    scriptbuttona.style.display="";
    scriptbuttonaA.textContent=text;
}

function scriptButtoncontrolb(text="") {
    scriptbuttonb.style.display="";
    scriptbuttonaB.textContent=text;
}

function scriptUp() { // 스크립트 위치 위로
    scriptContainer.style.top='0';
    character.style.bottom='0px';
    scriptArrowContainer.style.bottom='-219px';
    scriptTop = true;
}

function scriptDown() { // 스크립트 위치 아래로
    scriptContainer.style.top='';
    character.style.bottom='50px';
    scriptArrowContainer.style.bottom='30px';
    scriptTop = false;
}

function eraseAll() {
    erase("coloredWomen");
    erase("coloredMan");
    erase("birthPopu");
    erase("coloredQuestion");
    erase("opacityAnimationM")
    erase("opacityAnimationW")
}

function beforeTypingAnimation(){ 
    resetAnimation()
    speed=30;
    speedSlow=300;
    switch(typingCount){
        case 3:
            gobackNum=2;
            break;
        case 5 :case 6 :case 7 :case 8 :
            displayControl(yearNum="2020");
            renderControl(["10","9","8","7","6","5","4","3","2","1"]);
            break; 
        case 9 :case 11 : case 13 :
            displayControl(yNum=1900,ybtn="");
            agingMode=true;
            renderControl();
            break; 
        case 12 :
            skipButton.textContent = "";
            displayControl(yNum=1900,ybtn="");
            agingMode=true;
            renderControl();
            break;     
        case 14 :case 15 :
            displayControl(yNum=1900,ybtn="");
            agingMode=true;
            renderControl();
            break;
        case 16 :
            displayControl(yNum=1900,ybtn="");
            agingMode=true;
            renderControl();
            break; 
        case 17 :case 18 :case 19 :case 20 :case 21 :case 22 :
            displayControl(yNum=1900,ybtn="");
            agingMode=true;
            renderControl();
            break;
        case 23 :
            displayControl(yNum=1900,ybtn="none",lbtn="none",rbtn="none",bchart="",player="flex");
            break
        case 24 :case 25 :case 26 :case 27 :
            displayControl(yNum=1900,ybtn="none",lbtn="none",rbtn="none",bchart="",player="flex",playBtn="none",slider="none");
            break
        case 28 :case 29:case 30:case 31:case 32 :case 33 :case 34 :case 35:case 36:case 37:case 38:case 39:case 40:case 41:case 42:
            displayControl(yNum=1900,ybtn="none",lbtn="none",rbtn="none",bchart="",player="flex",playBtn="none",slider="none");
            question=["10","9","8","7","6","5","4","3","2","1"]
            renderQuestion();
            break
        case 43 :
            displayControl(yNum=1900,ybtn="none",lbtn="none",rbtn="none",bchart="",player="flex",playBtn="",slider="");
            break
    };
    switch(typingCount){
        case 0 :case 1 :case 2 :case 3 :
            body.classList.remove("background")
            chart.style.display = "none";
            break; 
        case 4 :
            chart.style.display = "none";
            break; 
        case 8 :
            gobackNum=2;
            break;
        case 10 :
            displayControl(yNum=1900,ybtn="");
            agingMode=true;
            renderControl();
            break; 
        case 12 :case 13 :
            lineOpacityAnimation(9)
            break; 
        case 14 :
            lineOpacityAnimation(8)
            gobackNum=2;
            break;
        case 15 :
            lineOpacityAnimation(8)
            break;
        case 16 :
            lineOpacityAnimation(9)
            break; 
        case 18 :
            character.setAttribute("src", "public/imgs/switchOff.png");
            character.classList.add("character_switch")
            break;
        case 21 :
            character.setAttribute("src", "public/imgs/switchOff.png");
            character.classList.add("character_switch")
            break;
        case 22 :
            gobackNum=3;
            character.setAttribute("src", "public/imgs/switchOff.png");
            character.classList.add("character_switch")
            break;
        case 24 :
            gonextNum=3;
            playButton.style.display = "none"
            stopButton.style.display = ""
            playButton.style.pointerEvents = ""
            yearbox.classList.add('blink__animation')
            chartcontainer.classList.add('blink__animation')
            interval = setInterval(yearPlus, yearSpeed)
            break;
        case 27 :
            gobackNum=2;
            birthpopulation.classList.add("blink__animation")
            break;
        case 39 :
            content[39] = answer;
            break;
        case 41 :
            content[41] = answer;
            break;
        case 42 :
            year.textContent = 1920
            playButton.style.display = "none"
            stopButton.style.display = ""
            playSpeed.textContent="x8";
            yearSpeed = 375;
            content[42] = answer;
            num = 11
            renderbirthPopu();
            interval = setInterval(yearPlus, yearSpeed)
            break;
    };
    switch(typingCount){
        case 0:case 2:case 7:case 13:case 20:case 21:case 25:case 26:
            backButton.textContent = "";
            break;
    };
    switch(typingCount){
        case 3 :case 4 :case 5 :case 8 :case 9 :case 11 :case 14 :case 15 :
        case 18 :case 20 :case 27 :
            skipButton.textContent = "다음>>";
            break;
    };
    switch(typingCount){
        case 0: pI=0; break; case 1: pI=1; break; case 3: pI=2; break; case 4: pI=3; break; case 5: pI=4; break; 
        case 6: pI=5; break; case 8: pI=6; break; case 9: pI=7; break; case 10: pI=8; break; case 11: pI=9; break; 
        case 12: pI=10; break; case 14: pI=11; break; case 15: pI=12; break; case 16: pI=13; break; case 17: pI=14; break; 
        case 18: pI=15; break; case 19: pI=16; break; case 21: pI=17; break; case 22: pI=18; break; case 23: pI=19; break; 
        case 24: pI=20; break; case 27: pI=24; break; case 28: pI=25; break; case 29: pI=26; break; case 31: pI=27; break; 
        case 32: pI=28; break; case 33: pI=29; break; case 34: pI=30; break; case 42: pI=31; break; case 43: pI=32; break;
    };
    renderProgress()
}

function afterTypingAnimation(){ // 상호작용 요소 변화
    switch(typingCount){
        case 0 :
            scriptButtoncontrol1(1, "계속하기")
            scriptButtoncontrola("[학습하기]로 이동")
            break;
        case 1 :
            scriptButtoncontrol1(3, "알겠어! 뭐든지 말해~")
            scriptButtoncontrol2(2, "싫은데? 도와주기 싫어!")
            break;
        case 2 :
            scriptButtoncontrol1(3, "음.. 알겠어")
            break; 
        case 5 :
            break;    
        case 6 :
            answerSound = 2;
            scriptButtoncontrol1(7, "지구온난화")
            scriptButtoncontrol2(8, "고령화")
            hint.textContent = "ㅇㅇㅇ는 노인 인구를 전체 인구로 나눈 노인 비율이 증가하는 것을 말한다."
            hintbutton.style.display="block"
            break; 
        case 7 :
            scriptButtoncontrola("[학습하기]로")
            scriptButtoncontrol1(6, "아냐 다시 맞춰볼게")
            break;
        case 10 :
            displayControl(yNum=1900,ybtn="",lbtn="",rbtn="");
            leftbutton.classList.add('blink__animation')
            rightbutton.classList.add('blink__animation')
            hint.textContent = "2020년의 그래프 까지 모두 살펴봐야 다음으로 넘어갈 수 있습니다."
            hintbutton.style.display="block"
            break;
        case 11 :
            break;
        case 12 :
            answerSound = 1;
            scriptButtoncontrol1(14, "10~19살")
            scriptButtoncontrol2(13, "30~39살")
            scriptButtoncontrol3(13, "50~59살")
            scriptButtoncontrol4(11, "내가 뭔가를 발견했다고!!")
            break;
        case 13 :
            answerSound = 1;
            scriptButtoncontrol1(14, "10~19살")
            scriptButtoncontrol2(13, "30~39살")
            scriptButtoncontrol3(13, "50~59살")
            break;
        case 16:
            displayControl(yNum=1900,ybtn="",lbtn="",rbtn="");
            leftbutton.classList.add('blink__animation')
            rightbutton.classList.add('blink__animation')
            break
        case 17:
            scriptButtoncontrol1(18, "인구피라미드 뒷면에서 숨겨진 스위치를 발견했어!")
            break;
        case 19:
            scriptButtoncontrol1(21, "알겠어")
            scriptButtoncontrol2(20, "무서운데..")
            break;
        case 21:
            scriptButtoncontrol1(22, "(스위치를 누른다.)")
            break;
        case 22 :
            eraseAll()
            character.setAttribute("src", "public/imgs/switchOn.png");
            displayControl(yNum=1900,ybtn="none",lbtn="none",rbtn="none",bchart="",player="flex");
            renderbirthPopu()
            backButton.textContent = "<<이전";
            skipButton.textContent = "다음>>";
            break;
        case 23 :
            playButton.classList.add('blink__animation')
            playButton.style.pointerEvents = ""
            break; 
        case 25 :
            scriptButtoncontrol1(26, "헤헤, 다시 알려주라~")
            scriptButtoncontrol2(27, "아냐! [<<이전버튼]을 잘못 누른거야!")
            break;
        case 26 :
            playButton.classList.add('blink__animation')
            playButton.style.pointerEvents = ""
            break;
        case 27 :
            gobackNum=2;
            displayControl(yNum=1900,ybtn="none",lbtn="none",rbtn="none",bchart="",player="flex",playBtn="none",slider="none");
            break;
        case 28 :
            displayControl(yNum=1900,ybtn="none",lbtn="none",rbtn="none",bchart="",player="flex",playBtn="",slider="");
            hint.textContent = "출생인구를 10칸부터 한칸씩 줄여나가면 됩니다."
            var br = document.createElement('br')
            hint.append(br)
            hint.append("(잘 안되면 [다음>>]버튼을 눌러 넘어가세요.)");
            hintbutton.style.display="block";
            break;
        case 29 :case 30 :
            playButton.classList.add('blink__animation');
            playButton.style.pointerEvents = "";
            break;
        case 31:
            gobackNum=2;
            scriptButtoncontrol1(32, "그건 바로, ")
            break;
        case 32:
            scriptButtoncontrol1(33, "펭귄국의")
            scriptButtoncontrol2(36, "우리반의")
            break;
        case 33:
            gobackNum=2;
            scriptButtoncontrol1(34, "출생인구가")
            scriptButtoncontrol2(35, "펭두는")
            break;
        case 34:
            gobackNum=3;
            answer = "그건 바로, 펭귄국의 출생인구가 "
            answerSound = 1;
            scriptButtoncontrol1(42, "점점 줄어들었기 때문이야!", true, "")
            scriptButtoncontrol2(41, "점점 늘어났기 때문이야!", true, "음.. 출생인구가 점점 늘어나면 이런 모양이 될거야. /재생버튼을 눌러봐.")
            break;
        case 35:
            gobackNum=4;
            answerSound = 4;
            answer = "그건 바로, 펭귄국의 펭두는 "
            scriptButtoncontrol1(39, "대머리니까!", true, "너 진짜 나쁜 아이구나?")
            scriptButtoncontrol2(39, "귀여우니까!", true, "내가 좀 귀엽긴 하지 ㅎㅎ / 그런데 그게 고령화랑 무슨 관계가 있어?")
            break;
        case 36:
            gobackNum=5;
            scriptButtoncontrol1(37, "학생들은")
            scriptButtoncontrol2(38, "담임 선생님은")
            break;
        case 37:
            gobackNum=6;
            answerSound = 4;
            answer = "그건 바로, 우리반의 학생들은 "
            scriptButtoncontrol1(39, "똑똑하니까!", true, "니 말이 맞는 것 같아. / 그런데 그게 고령화랑 무슨 관계가 있어?")
            scriptButtoncontrol2(39, "사랑스러우니까!", true, "맞아 정말 사랑스러운 것 같아. / 그런게 그게 고령화랑 무슨 관계가 있어?")
            break;
        case 38:
            gobackNum=7;
            answerSound = 4;
            answer = "그건 바로, 우리반의 담임선생님은 "
            scriptButtoncontrol1(39, "예쁘시니까!", true, "맞아 정말로 아름다우시더라 ㅎㅎ / 그런데 그게 고령화랑 무슨 관계가 있어?")
            scriptButtoncontrol2(39, "잘생기셨으니까!", true, "음.. 내 생각은 좀 다른데..  / 그런데 그게 고령화랑 무슨 관계가 있어?")
            break;
        case 39:
            gobackNum=8;
            answer = "";
            scriptButtoncontrol1(40, "장난이야 ㅎㅎ 다시 알려줄게")
            break;
        case 40:
            gobackNum=9;
            scriptButtoncontrol1(32, "그건 바로, ")
            break;
        case 41:
            gobackNum=10;
            answer = "";
            playButton.classList.add("blink__animation")
            playButton.style.pointerEvents = "";
            break;
        case 42:
            gobackNum=11;
            answer = "";
            scriptButtoncontrol1(43, "그래, 아래쪽은 좁아지고 위쪽은 넓어 지니까 고령화 비율이 증가하는 거야.")
            break;
        case 43:
            scriptButtoncontrolb("[문제해결2]로 이동")
            break;
    };
    switch(typingCount){
        case 1:case 6:
            backButton.textContent = "<<이전"; 
            break;
    };
}


text.addEventListener('click',()=>{
    speed=5;
    speedSlow=5;
  })


const hintClose = document.querySelector('.hint__close');
hintClose.addEventListener('click',()=>{
    hintcontainer.style.display="none"
})