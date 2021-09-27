let typingCount = 0;


const progressLi=document.querySelector('.progress > li');
const progresspercent=document.querySelector('.progress_percent');
const indexdutorial=document.querySelector('.index_dutorial');
const indexlearn=document.querySelector('.index_learn');
const indexproblem1=document.querySelector('.index_problem1');
const indexproblem2=document.querySelector('.index_problem2');
let progress = 2;
let pI = 0;

indexdutorial.addEventListener('mouseover', ()=>{
  indexproblem2.classList.remove("index_select")
  indexproblem2.classList.add("index_unselect")
})

indexdutorial.addEventListener('mouseout', ()=>{
  indexproblem2.classList.remove("index_unselect")
  indexproblem2.classList.add("index_select")
})

indexlearn.addEventListener('mouseover', ()=>{
  indexproblem2.classList.remove("index_select")
  indexproblem2.classList.add("index_unselect")
})

indexlearn.addEventListener('mouseout', ()=>{
  indexproblem2.classList.remove("index_unselect")
  indexproblem2.classList.add("index_select")
})

indexproblem1.addEventListener('mouseover', ()=>{
  indexproblem2.classList.remove("index_select")
  indexproblem2.classList.add("index_unselect")
})

indexproblem1.addEventListener('mouseout', ()=>{
  indexproblem2.classList.remove("index_unselect")
  indexproblem2.classList.add("index_select")
})


indexdutorial.classList.add("index_unselect")
indexlearn.classList.add("index_unselect")
indexproblem1.classList.add("index_unselect")
indexproblem2.classList.add("index_select")
drawProgress()

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





const female_data = [{"year":1950,"sex":"female","0s":3400.9269999999997,"10s":2439.044,"20s":1793.644,"30s":1557.717,"40s":1151.434,"50s":724.566,"60s":552.982,"70s":236.086,"80s":69.581,"90s":14.638},{"year":1955,"sex":"female","0s":3619.7619999999997,"10s":2613.5640000000003,"20s":2085.741,"30s":1751.373,"40s":1294.461,"50s":795.146,"60s":584.236,"70s":314.44,"80s":81.64099999999999,"90s":13.063},{"year":1960,"sex":"female","0s":4210.927,"10s":3026.559,"20s":2205.8810000000003,"30s":2048.514,"40s":1523.058,"50s":931.033,"60s":596.27,"70s":379.818,"80s":113.286,"90s":8.922},{"year":1965,"sex":"female","0s":4243.037,"10s":3808.154,"20s":2424.678,"30s":2163.923,"40s":1753.747,"50s":1029.807,"60s":676.553,"70s":420.86,"80s":161.21,"90s":13.79},{"year":1970,"sex":"female","0s":4157.187,"10s":4369.921,"20s":2871.998,"30s":2382.42,"40s":2030.4209999999998,"50s":1212.473,"60s":813.942,"70s":449.33000000000004,"80s":202.504,"90s":19.715},{"year":1975,"sex":"female","0s":4156.992,"10s":4367.989,"20s":3615.786,"30s":2785.62,"40s":2133.021,"50s":1412.848,"60s":919.885,"70s":535.494,"80s":237.767,"90s":40.115},{"year":1980,"sex":"female","0s":3910.867,"10s":4307.766,"20s":4167.432,"30s":3519.529,"40s":2318.5460000000003,"50s":1648.789,"60s":1102.125,"70s":658.636,"80s":263.38800000000003,"90s":55.574000000000005},{"year":1985,"sex":"female","0s":3844.693,"10s":4067.8959999999997,"20s":4251.1900000000005,"30s":4136.187,"40s":2734.181,"50s":1914.1999999999998,"60s":1297.229,"70s":753.0550000000001,"80s":323.873,"90s":72.827},{"year":1990,"sex":"female","0s":3448.4359999999997,"10s":3777.096,"20s":4306.642,"30s":4262.9490000000005,"40s":3516.031,"50s":2057.111,"60s":1536.473,"70s":927.1569999999999,"80s":404.442,"90s":81.886},{"year":1995,"sex":"female","0s":3627.172,"10s":3308.1490000000003,"20s":4084.1639999999998,"30s":4306.217000000001,"40s":4120.521,"50s":2260.7380000000003,"60s":1807.175,"70s":1116.504,"80s":485.89599999999996,"90s":112.709},{"year":2000,"sex":"female","0s":3511.076,"10s":3086.7439999999997,"20s":3789.712,"30s":4106.358,"40s":4258.65,"50s":2676.185,"60s":1967.273,"70s":1358.48,"80s":629.657,"90s":147.561},{"year":2005,"sex":"female","0s":3202.788,"10s":3141.5,"20s":3294.524,"30s":3780.05,"40s":4340.464,"50s":3457.727,"60s":2187.006,"70s":1636.732,"80s":791.45,"90s":183.575},{"year":2010,"sex":"female","0s":3116.4700000000003,"10s":2711.077,"20s":3074.091,"30s":3234.365,"40s":4056.768,"50s":4070.866,"60s":2608.88,"70s":1825.042,"80s":1040.012,"90s":274.63699999999994},{"year":2015,"sex":"female","0s":3112.982,"10s":2287.4139999999998,"20s":3158.298,"30s":3176.818,"40s":3739.1620000000003,"50s":4255.34,"60s":3360.248,"70s":2075.96,"80s":1327.059,"90s":390.561},{"year":2020,"sex":"female","0s":2942.7110000000002,"10s":2199.989,"20s":2720.322,"30s":3162.306,"40s":3371.739,"50s":4254.519,"60s":3997.2709999999997,"70s":2459.549,"80s":1577.598,"90s":561.319},{"year":2025,"sex":"female","0s":1594.488,"10s":2187.860,"20s":2827.802,"30s":3270.777,"40s":3777.484,"50s":4330.649,"60s":4016.651,"70s":2346.530,"80s":1311.445,"90s":267.157},{"year":2030,"sex":"female","0s":1575.125,"10s":1960.042,"20s":2317.470,"30s":3344.040,"40s":3454.199,"50s":4088.144,"60s":4237.793,"70s":3146.242,"80s":1486.966,"90s":373.617},{"year":2035,"sex":"female","0s":1678.894,"10s":1582.162,"20s":2200.136,"30s":2893.110,"40s":3294.388,"50s":3810.674,"60s":4306.330,"70s":3827.534,"80s":1828.206,"90s":464.086},{"year":2040,"sex":"female","0s":1586.317,"10s":1562.503,"20s":1973.048,"30s":2380.670,"40s":3368.351,"50s":3490.007,"60s":4075.569,"70s":4059.747,"80s":2510.846,"90s":555.160},{"year":2045,"sex":"female","0s":1442.437,"10s":1665.509,"20s":1600.986,"30s":2264.505,"40s":2921.219,"50s":3334.208,"60s":3809.914,"70s":4150.301,"80s":3060.629,"90s":733.077},{"year":2050,"sex":"female","0s":1321.028,"10s":1574.174,"20s":1580.388,"30s":2036.122,"40s":2410.952,"50s":3411.466,"60s":3496.879,"70s":3942.418,"80s":3281.877,"90s":1049.711}]

const male_data = [{"year":1950,"sex":"male","0s":3542.402,"10s":2680.726,"20s":1482.974,"30s":1315.1190000000001,"40s":1094.0900000000001,"50s":710.4290000000001,"60s":461.876,"70s":177.25400000000002,"80s":45.891999999999996,"90s":7.549},{"year":1955,"sex":"male","0s":3692.5209999999997,"10s":2861.983,"20s":2066.919,"30s":1315.018,"40s":1116.549,"50s":835.027,"60s":514.244,"70s":236.91899999999998,"80s":52.428,"90s":1.9949999999999999},{"year":1960,"sex":"male","0s":4337.582,"10s":3296.9669999999996,"20s":2342.032,"30s":1597.292,"40s":1281.172,"50s":960.049,"60s":544.951,"70s":279.855,"80s":69.284,"90s":1.886},{"year":1965,"sex":"male","0s":4367.432,"10s":4051.54,"20s":2654.233,"30s":1988.237,"40s":1373.042,"50s":1021.212,"60s":652.52,"70s":312.442,"80s":90.751,"90s":3.118},{"year":1970,"sex":"male","0s":4291.103,"10s":4603.290999999999,"20s":3118.393,"30s":2241.112,"40s":1546.058,"50s":1152.704,"60s":753.074,"70s":329.087,"80s":101.694,"90s":4.867999999999999},{"year":1975,"sex":"male","0s":4306.812,"10s":4612.469999999999,"20s":3828.239,"30s":2478.964,"40s":1926.8829999999998,"50s":1237.1239999999998,"60s":803.7280000000001,"70s":396.557,"80s":112.681,"90s":11.148},{"year":1980,"sex":"male","0s":4044.362,"10s":4581.429,"20s":4365.576999999999,"30s":2934.7200000000003,"40s":2191.7129999999997,"50s":1415.4279999999999,"60s":921.833,"70s":458.149,"80s":117.351,"90s":13.499000000000002},{"year":1985,"sex":"male","0s":3974.139,"10s":4343.154,"20s":4472.72,"30s":3683.928,"40s":2462.3540000000003,"50s":1800.89,"60s":1007.809,"70s":509.76599999999996,"80s":151.893,"90s":17.214000000000002},{"year":1990,"sex":"male","0s":3649.821,"10s":4022.067,"20s":4553.723,"30s":4304.253,"40s":2880.5299999999997,"50s":2066.357,"60s":1194.961,"70s":624.976,"80s":187.418,"90s":20.042},{"year":1995,"sex":"male","0s":3852.249,"10s":3632.874,"20s":4330.0779999999995,"30s":4427.33,"40s":3600.437,"50s":2319.38,"60s":1569.9560000000001,"70s":722.914,"80s":238.575,"90s":31.009000000000004},{"year":2000,"sex":"male","0s":3660.531,"10s":3508.712,"20s":4016.1620000000003,"30s":4542.3060000000005,"40s":4219.16,"50s":2731.09,"60s":1824.887,"70s":905.025,"80s":320.44,"90s":43.598},{"year":2005,"sex":"male","0s":3321.5699999999997,"10s":3513.259,"20s":3607.654,"30s":4340.610000000001,"40s":4384.805,"50s":3458.517,"60s":2104.81,"70s":1244.24,"80s":398.29499999999996,"90s":62.178},{"year":2010,"sex":"male","0s":3192.468,"10s":2977.626,"20s":3487.62,"30s":3913.6400000000003,"40s":4488.367,"50s":4086.598,"60s":2529.923,"70s":1509.734,"80s":553.309,"90s":95.33999999999999},{"year":2015,"sex":"male","0s":3173.2780000000002,"10s":2460.6189999999997,"20s":3546.187,"30s":3712.004,"40s":4232.749,"50s":4336.448,"60s":3277.7920000000004,"70s":1798.069,"80s":811.2620000000001,"90s":132.616},{"year":2020,"sex":"male","0s":2994.3,"10s":2333.5950000000003,"20s":2972.398,"30s":3604.346,"40s":3990.4260000000004,"50s":4354.907,"60s":3938.478,"70s":2217.6820000000002,"80s":1068.786,"90s":210.93599999999998},{"year":2025,"sex":"male","0s":1679.699,"10s":2316.589,"20s":3094.403,"30s":3735.351,"40s":4008.994,"50s":4385.654,"60s":3881.266,"70s":2009.662,"80s":779.712,"90s":82.953},{"year":2030,"sex":"male","0s":1661.072,"10s":2062.431,"20s":2471.743,"30s":3768.464,"40s":3777.894,"50s":4194.302,"60s":4128.871,"70s":2762.189,"80s":979.973,"90s":136.376},{"year":2035,"sex":"male","0s":1770.625,"10s":1665.475,"20s":2302.636,"30s":3124.593,"40s":3740.631,"50s":3983.219,"60s":4238.323,"70s":3439.891,"80s":1288.641,"90s":190.341},{"year":2040,"sex":"male","0s":1673.014,"10s":1646.384,"20s":2046.347,"30s":2491.117,"40s":3777.181,"50s":3764.588,"60s":4080.357,"70s":3709.372,"80s":1847.669,"90s":257.129},{"year":2045,"sex":"male","0s":1521.295,"10s":1755.099,"20s":1655.057,"30s":2323.047,"40s":3137.942,"50s":3739.382,"60s":3902.689,"70s":3865.323,"80s":2325.560,"90s":365.859},{"year":2050,"sex":"male","0s":1393.254,"10s":1658.948,"20s":1636.294,"30s":2068.250,"40s":2507.150,"50s":3783.936,"60s":3706.943,"70s":3758.905,"80s":2567.872,"90s":557.933}]

total_data = [19211,21515,25330,28896,32196,35379,38046,40804,42918, 45293,47379,48701,49546,50823,51269,51905,51926,51629,50855,49574,47744
]

averageage_data =[19.0,	18.9,	18.6,	18.4,	19.0,	19.9,	22.1,	24.3,	27.0,	29.3,	31.9,	34.8,	38.0,	40.8,	43.7,45.4,47.6,49.6,51.4,53.1,54.4
]

aging_data = [3.0,3.4,3.5,3.6,3.6,3.9,4.3,4.7,5.5,6.4,7.7,9.7,12.0,14.8,16.0,20.3,25.0,29.5,33.9,37.0,39.8]

const num = document.querySelectorAll('.population__bar__num');
const chart = document.querySelectorAll('.population__bar__value');
const year = document.querySelector('.population__year');
const total = document.querySelector('.population__title__value');
const averageAge = document.querySelector('.average__age__value');
const aging = document.querySelector('.aging__rate__value')
const chartStart = document.querySelector('.population__chart__start');
const chartStop = document.querySelector('.population__chart__stop');
const volumeUp = document.querySelector('.volume__up');
const volumeOff = document.querySelector('.volume__off');
const chartResume = document.querySelector('.population__chart__resume');
const typingAudio = new Audio('public/music/Keyboard Typing.wav');


let yearNumCount = 0

const nSecond = 5,
      resolutionMS = 33;

volumeOff.style.opacity="0";
volumeOff.style.pointerEvents="none";
volumeUp.style.opacity="0";
volumeUp.style.pointerEvents="none";
chartStart.style.display="none";
chartStop.style.display = "none";
chartResume.style.opacity = "0";
chartResume.style.pointerEvents = "none"

let activate = true;
var audio = new Audio('public/music/Beyond - Patrick Patrikios.mp3');
audio.volume = 0;      


function chart_start(){
  activate = true;
  chartStop.style.display = "";
  chartStart.style.display = "none";
  chartResume.style.opacity = "0";
  chartResume.style.pointerEvents = "none"
  dropUp.style.opacity="0"
  dropDown.style.opacity="0"
  audio.play();
  delayPop(yearNumCount,"90s","male",0);
  delayPop(yearNumCount,"80s","male",1);
  delayPop(yearNumCount,"70s","male",2);
  delayPop(yearNumCount,"60s","male",3);
  delayPop(yearNumCount,"50s","male",4);
  delayPop(yearNumCount,"40s","male",5);
  delayPop(yearNumCount,"30s","male",6);
  delayPop(yearNumCount,"20s","male",7);
  delayPop(yearNumCount,"10s","male",8);
  delayPop(yearNumCount,"0s","male",9);
  delayPop(yearNumCount,"90s","female",10);
  delayPop(yearNumCount,"80s","female",11);
  delayPop(yearNumCount,"70s","female",12);
  delayPop(yearNumCount,"60s","female",13);
  delayPop(yearNumCount,"50s","female",14);
  delayPop(yearNumCount,"40s","female",15);
  delayPop(yearNumCount,"30s","female",16);
  delayPop(yearNumCount,"20s","female",17);
  delayPop(yearNumCount,"10s","female",18);
  delayPop(yearNumCount,"0s","female",19);
  delayYear(yearNumCount);
  delayTotal(yearNumCount);
  delayAverage(yearNumCount);
  delayAging(yearNumCount);
}



console.log(total_data[0])

function stop() {
  
  activate = false;

  chartStop.style.display = "none";
  // audio.pause();
  // audio.currentTime=0;
}

function delayYear(d) {
  if(d==20 || activate==false){
    audio.pause();
    audio.currentTime=0;
    chartStop.style.display = "none";
    chartStart.style.display="";
    chartStart.innerHTML = "처음부터";
    if(d==20&&activate==true){
      chartResume.style.opacity = '0';
      chartResume.style.pointerEvents = 'none';
    } else if(d!=20&&activate==false){
      chartResume.style.opacity = '1';
      chartResume.style.pointerEvents = 'auto';
      console.log('hi')
    };

    dropUp.style.display = "";
    dropDown.style.display = "";
    yearNumCount=(Number(year.innerHTML)-1950)/5;
    return false; 
  }
  countYear(d);
  sleep(5000).then(() => delayYear(d+1));
}

function delayTotal(d) {
  if(d==20 || activate==false){
    return false;
  }
  countTotal(d);
  sleep(5000).then(() => delayTotal(d+1));
}

function delayAverage(d){
  if(d==20 || activate==false){
    return false;
  }
  countAverage(d);
  sleep(5000).then(() => delayAverage(d+1));
}

function delayAging(d){
  if(d==20 || activate==false){
    return false;
  }
  countAging(d);
  sleep(5000).then(() => delayAging(d+1));
}

// 5초마다 숫자 카운팅 이어서하기 
function delayPop(order,age,sex,pos) {
  if(order==20 || activate==false){
    return false;
  }
  countIni(order,age,sex,pos);
  console.log("complete")
  sleep(5000).then(() => delayPop(order+1,age,sex,pos));
}

chartStart.addEventListener('click',()=>{
  if(chartStart.innerHTML=="처음부터"){
    yearNumCount=0;
    chartStart.innerHTML="시작하기"
    dropUp.style.opacity="1"
    dropDown.style.opacity="1"
    chartResume.style.opacity = "0";
    chartResume.style.pointerEvents = "none"
    year.innerHTML = 1950;
    eachYearChart(0);
  } else{
    chart_start()
  }
})



// order: 연도, age: 나이, sex:성별, pos:입력값위치 

// 숫자 카운팅 함수
function countIni(order,age,sex,pos) {
  if (sex == "male") {
    data=male_data
    data= male_data;
  } else if (sex=="female") {
    data = female_data;
  };
  let startNum = Math.floor(data[order][age])*1000,
  endNum = Math.floor(data[order+1][age])*1000,
  deltaNum = (endNum - startNum) / (1000 / resolutionMS) / nSecond;

  let handle = setInterval(() => {
    let x = startNum.toLocaleString(undefined, {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    });
    num[pos].innerHTML = x.toString();
    chart[pos].style.width = startNum/58000 + '%';
    // if already updated the endNum, stop
    if(startNum<=endNum){
      if (startNum >= endNum) clearInterval(handle);
    
    startNum += deltaNum;
    startNum = Math.min(startNum, endNum);
    } else if(startNum>endNum){
      if (startNum <= endNum) clearInterval(handle);
    
    startNum += deltaNum;
    startNum = Math.max(startNum, endNum);
    }
    
  }, resolutionMS);
};



function countYear(counting) {
  let startNum = male_data[counting]["year"],
  endNum = male_data[counting+1]["year"],
  deltaNum = (endNum - startNum) / (1000 / resolutionMS) / nSecond;
  console.log(startNum);
  var handle = setInterval(() => {
    var x = startNum.toLocaleString(undefined, {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    });
    year.innerHTML = x.toString().replace(",", "");
    
    // if already updated the endNum, stop
    if (startNum >= endNum) clearInterval(handle);
    
    startNum += deltaNum;
    startNum = Math.min(startNum, endNum);
  }, resolutionMS);
};

function countTotal(counting) {
  let startNum = Math.floor(total_data[counting]/10),
  endNum = Math.floor(total_data[counting+1]/10),
  deltaNum = (endNum - startNum) / (1000 / resolutionMS) /nSecond;
  console.log(startNum);
  var handle = setInterval(() => {
    var x = startNum.toLocaleString(undefined, {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    });
    total.innerHTML = x.toString()+"만";
    
    if(startNum<=endNum){
      if (startNum >= endNum) clearInterval(handle);
    
    startNum += deltaNum;
    startNum = Math.min(startNum, endNum);
    } else if(startNum>endNum){
      if (startNum <= endNum) clearInterval(handle);
    
    startNum += deltaNum;
    startNum = Math.max(startNum, endNum);
    }
    
  }, resolutionMS);
};


function countAverage(counting) {
  let startNum = averageage_data[counting]*10,
  endNum = averageage_data[counting+1]*10,
  deltaNum = (endNum - startNum) / (1000 / resolutionMS) /nSecond;
  console.log(startNum);
  var handle = setInterval(() => {
    var x = startNum.toLocaleString(undefined, {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    });
    natNum=x.substr(0,2);
    decNum=x.substr(2,1);
    averageAge.innerHTML = natNum+"."+decNum;
    // averageAge.innerHTML = x.toString();
    
    // if already updated the endNum, stop
    if (startNum >= endNum) clearInterval(handle);
    
    startNum += deltaNum;
    startNum = Math.min(startNum, endNum);
  }, resolutionMS);
};

function countAging(counting) {
  let startNum = aging_data[counting]*10,
  endNum = aging_data[counting+1]*10,
  deltaNum = (endNum - startNum) / (1000 / resolutionMS) /nSecond;
  console.log(startNum);
  var handle = setInterval(() => {
    var x = startNum.toLocaleString(undefined, {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    });
    if(Number(x)<100){
      natNum=x.substr(0,1);
      decNum=x.substr(1,1);
    } else {
      natNum=x.substr(0,2);
      decNum=x.substr(2,1);
    }
    aging.innerHTML = natNum+"."+decNum+"%";
    // averageAge.innerHTML = x.toString();
    
    // if already updated the endNum, stop
    if (startNum >= endNum) clearInterval(handle);
    
    startNum += deltaNum;
    startNum = Math.min(startNum, endNum);
  }, resolutionMS);
};

// 볼륨관련 함수
volumeUp.style.display='none';

volumeUp.addEventListener('click',()=>{
  volumeUp.style.display = 'none';
  volumeOff.style.display = '';
  audio.volume = 0;
})

volumeOff.addEventListener('click',()=>{
  volumeUp.style.display = '';
  volumeOff.style.display = 'none';
  audio.volume = 1;
})

// 년도 위,아래 토글
const dropUp = document.querySelector('.drop__up');
const dropDown = document.querySelector('.drop__down');
let yearNum = Number(year.innerHTML)


dropUp.addEventListener('click',()=>{
  if(yearNum == 2050) {
    console.log(yearNum);
    yearNumCount = 0
    yearNum = 1950;
  } else{
    yearNumCount = yearNumCount+1;
    yearNum = yearNum + 5;
  }
  
  year.innerHTML = yearNum.toString();
  console.log(yearNumCount);
  eachYearChart(yearNumCount);
})

dropDown.addEventListener('click',()=>{
  if(yearNum == 1950) {
    yearNumCount = 20;
    yearNum = 2050;
  } else{
    yearNumCount = yearNumCount-1
    yearNum = yearNum-5;
  }
  console.log(yearNum);
  year.innerHTML = yearNum.toString();
  console.log(yearNumCount);
  eachYearChart(yearNumCount);
})

function eachYearChart(x) {
  num[0].innerHTML = Math.floor(male_data[x]["90s"]*1000)
  num[1].innerHTML = Math.floor(male_data[x]["80s"]*1000)
  num[2].innerHTML = Math.floor(male_data[x]["70s"]*1000)
  num[3].innerHTML = Math.floor(male_data[x]["60s"]*1000)
  num[4].innerHTML = Math.floor(male_data[x]["50s"]*1000)
  num[5].innerHTML = Math.floor(male_data[x]["40s"]*1000)
  num[6].innerHTML = Math.floor(male_data[x]["30s"]*1000)
  num[7].innerHTML = Math.floor(male_data[x]["20s"]*1000)
  num[8].innerHTML = Math.floor(male_data[x]["10s"]*1000)
  num[9].innerHTML = Math.floor(male_data[x]["0s"]*1000)
  num[10].innerHTML = Math.floor(female_data[x]["90s"]*1000)
  num[11].innerHTML = Math.floor(female_data[x]["80s"]*1000)
  num[12].innerHTML = Math.floor(female_data[x]["70s"]*1000)
  num[13].innerHTML = Math.floor(female_data[x]["60s"]*1000)
  num[14].innerHTML = Math.floor(female_data[x]["50s"]*1000)
  num[15].innerHTML = Math.floor(female_data[x]["40s"]*1000)
  num[16].innerHTML = Math.floor(female_data[x]["30s"]*1000)
  num[17].innerHTML = Math.floor(female_data[x]["20s"]*1000)
  num[18].innerHTML = Math.floor(female_data[x]["10s"]*1000)
  num[19].innerHTML = Math.floor(female_data[x]["0s"]*1000)
  chart[0].style.width = Math.floor(male_data[x]["90s"]*1000)/58000 + '%'
  chart[1].style.width = Math.floor(male_data[x]["80s"]*1000)/58000 + '%'
  chart[2].style.width = Math.floor(male_data[x]["70s"]*1000)/58000 + '%'
  chart[3].style.width = Math.floor(male_data[x]["60s"]*1000)/58000 + '%'
  chart[4].style.width = Math.floor(male_data[x]["50s"]*1000)/58000 + '%'
  chart[5].style.width = Math.floor(male_data[x]["40s"]*1000)/58000 + '%'
  chart[6].style.width = Math.floor(male_data[x]["30s"]*1000)/58000 + '%'
  chart[7].style.width = Math.floor(male_data[x]["20s"]*1000)/58000 + '%'
  chart[8].style.width = Math.floor(male_data[x]["10s"]*1000)/58000 + '%'
  chart[9].style.width = Math.floor(male_data[x]["0s"]*1000)/58000 + '%'
  chart[10].style.width = Math.floor(female_data[x]["90s"]*1000)/58000 + '%'
  chart[11].style.width = Math.floor(female_data[x]["80s"]*1000)/58000 + '%'
  chart[12].style.width = Math.floor(female_data[x]["70s"]*1000)/58000 + '%'
  chart[13].style.width = Math.floor(female_data[x]["60s"]*1000)/58000 + '%'
  chart[14].style.width = Math.floor(female_data[x]["50s"]*1000)/58000 + '%'
  chart[15].style.width = Math.floor(female_data[x]["40s"]*1000)/58000 + '%'
  chart[16].style.width = Math.floor(female_data[x]["30s"]*1000)/58000 + '%'
  chart[17].style.width = Math.floor(female_data[x]["20s"]*1000)/58000 + '%'
  chart[18].style.width = Math.floor(female_data[x]["10s"]*1000)/58000 + '%'
  chart[19].style.width = Math.floor(female_data[x]["0s"]*1000)/58000 + '%'
  total.innerHTML = (Math.floor(total_data[x]/10)).toString()+"만";
  averageAge.innerHTML = averageage_data[x].toFixed(1);
  aging.innerHTML = (aging_data[x].toFixed(1)).toString()+"%";
}
// /차트 디폴트값
num[0].innerHTML = Math.floor(male_data[20]["90s"]*1000).toString()
num[1].innerHTML = Math.floor(male_data[20]["80s"]*1000).toString()
num[2].innerHTML = Math.floor(male_data[20]["70s"]*1000).toString()
num[3].innerHTML = Math.floor(male_data[20]["60s"]*1000).toString()
num[4].innerHTML = Math.floor(male_data[20]["50s"]*1000).toString()
num[5].innerHTML = Math.floor(male_data[20]["40s"]*1000).toString()
num[6].innerHTML = Math.floor(male_data[20]["30s"]*1000).toString()
num[7].innerHTML = Math.floor(male_data[20]["20s"]*1000).toString()
num[8].innerHTML = Math.floor(male_data[20]["10s"]*1000).toString()
num[9].innerHTML = Math.floor(female_data[20]["0s"]*1000).toString()
num[10].innerHTML = Math.floor(female_data[20]["90s"]*1000).toString()
num[11].innerHTML = Math.floor(female_data[20]["80s"]*1000).toString()
num[12].innerHTML = Math.floor(female_data[20]["70s"]*1000).toString()
num[13].innerHTML = Math.floor(female_data[20]["60s"]*1000).toString()
num[14].innerHTML = Math.floor(female_data[20]["50s"]*1000).toString()
num[15].innerHTML = Math.floor(female_data[20]["40s"]*1000).toString()
num[16].innerHTML = Math.floor(female_data[20]["30s"]*1000).toString()
num[17].innerHTML = Math.floor(female_data[20]["20s"]*1000).toString()
num[18].innerHTML = Math.floor(female_data[20]["10s"]*1000).toString()
num[19].innerHTML = Math.floor(female_data[20]["0s"]*1000).toString()
chart[0].style.width = Math.floor(male_data[20]["90s"]*1000)/58000 + '%'
chart[1].style.width = Math.floor(male_data[20]["80s"]*1000)/58000 + '%'
chart[2].style.width = Math.floor(male_data[20]["70s"]*1000)/58000 + '%'
chart[3].style.width = Math.floor(male_data[20]["60s"]*1000)/58000 + '%'
chart[4].style.width = Math.floor(male_data[20]["50s"]*1000)/58000 + '%'
chart[5].style.width = Math.floor(male_data[20]["40s"]*1000)/58000 + '%'
chart[6].style.width = Math.floor(male_data[20]["30s"]*1000)/58000 + '%'
chart[7].style.width = Math.floor(male_data[20]["20s"]*1000)/58000 + '%'
chart[8].style.width = Math.floor(male_data[20]["10s"]*1000)/58000 + '%'
chart[9].style.width = Math.floor(male_data[20]["0s"]*1000)/58000 + '%'
chart[10].style.width = Math.floor(female_data[20]["90s"]*1000)/58000 + '%'
chart[11].style.width = Math.floor(female_data[20]["80s"]*1000)/58000 + '%'
chart[12].style.width = Math.floor(female_data[20]["70s"]*1000)/58000 + '%'
chart[13].style.width = Math.floor(female_data[20]["60s"]*1000)/58000 + '%'
chart[14].style.width = Math.floor(female_data[20]["50s"]*1000)/58000 + '%'
chart[15].style.width = Math.floor(female_data[20]["40s"]*1000)/58000 + '%'
chart[16].style.width = Math.floor(female_data[20]["30s"]*1000)/58000 + '%'
chart[17].style.width = Math.floor(female_data[20]["20s"]*1000)/58000 + '%'
chart[18].style.width = Math.floor(female_data[20]["10s"]*1000)/58000 + '%'
chart[19].style.width = Math.floor(female_data[20]["0s"]*1000)/58000 + '%'
total.innerHTML = (Math.floor(total_data[20]/10)).toString()+"만";
averageAge.innerHTML = averageage_data[20].toFixed(1);
aging.innerHTML = (aging_data[20].toFixed(1)).toString()+"%";



// 팝업차트 

// 1.드래그앤 드롭
dragElement(document.getElementById("popup1"));
dragElement(document.getElementById("popup2"));
dragElement(document.getElementById("popup3"));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  // 이동 목적지
  if (document.querySelector(elmnt.id + "header")) {
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // 시작지점 마우스좌표 얻기
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // 이동지점 마우스좌표 얻기
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // 이동지점 커서좌표 계산
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // 요소의 새 위치 설정
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    /* 마우스버튼 풀렸을 때, 이동 멈춤 */
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

// 2.팝업창 끄기 켜기
const popupTotal = document.querySelector('.popup__total');
const popupAverage = document.querySelector('.popup__average__age');
const popupAging = document.querySelector('.popup__aging');
const populationTitle = document.querySelector('.population__title');
const averageAgeContainer = document.querySelector('.average__age');
const agingContainer = document.querySelector('.aging__rate');
const popupClose = document.querySelectorAll('.popup__close');
const popupChart = document.querySelectorAll('.popup__chart');



for(i=0;i<popupChart.length;i++){
  popupChart[i].style.zIndex='1';
}

let zIndexVal = 1;


popupChart[0].addEventListener('click',()=>{
  zIndexVal = zIndexVal+1
  popupChart[0].style.zIndex = zIndexVal.toString(); 
})

popupChart[1].addEventListener('click',()=>{
  zIndexVal = zIndexVal+1
  popupChart[1].style.zIndex = zIndexVal.toString(); 
})

popupChart[2].addEventListener('click',()=>{
  zIndexVal = zIndexVal+1
  popupChart[2].style.zIndex = zIndexVal.toString(); 
})


popupTotal.style.display='none';
popupAverage.style.display='none';
popupAging.style.display='none';

populationTitle.addEventListener('click',()=>{
  zIndexVal = zIndexVal+1
  popupChart[1].style.zIndex = zIndexVal.toString(); 
  popupTotal.style.display = '';
  google.charts.setOnLoadCallback(drawBasicTotal);
  
})

averageAgeContainer.addEventListener('click',()=>{
  zIndexVal = zIndexVal+1
  popupChart[0].style.zIndex = zIndexVal.toString(); 
  popupAverage.style.display ='';
  google.charts.setOnLoadCallback(drawBasicAv);
})

agingContainer.addEventListener('click',()=>{
  zIndexVal = zIndexVal+1
  popupChart[2].style.zIndex = zIndexVal.toString(); 
  popupAging.style.display ='';
  google.charts.setOnLoadCallback(drawBasicAging);
})


popupClose[0].addEventListener('click',()=>{
  setTimeout(()=>{
    popupAverage.style.display = 'none';
  },1)})

popupClose[1].addEventListener('click',()=>{
  setTimeout(()=>{
    popupTotal.style.display = 'none';
  },1)
  
})

popupClose[2].addEventListener('click',()=>{
  setTimeout(()=>{
    popupAging.style.display = 'none';
  },1)
  
})



// 구글차트

google.charts.load('current', {packages: ['corechart']});


function drawBasicAv() {

      var data = new google.visualization.DataTable();
      data.addColumn('string', 'X');
      data.addColumn('number', '평균 연령');

      data.addRows([
        ['1950',19.0],['1960',18.6],['1970',19.0],['1980',22.1],
        ['1990',27.0],['2000',31.9],['2010',38.0],['2020',43.7],['2030(전망)',47.6],['2040(전망)',51.4],['2050(전망)',54.4],['2060(전망)',56.4]
      ]);

      var options = {
        width:795,
        height:560,
        chartArea: {'width': '85%', 'height': '75%','left':'12%'},
        hAxis: {
          title: '년도',
          textStyle: {
            fontSize: 11,
            fontName: 'Arial',
            italic: true,
            bold: true,
          },
          direction: 1, 
          slantedText: true, 
          slantedTextAngle: -30
          
        },
        vAxis: {
          
          title: '평균 연령',
          textStyle: {
            bold:true
          }
          
        }
      }
      options.legend = ('top');

      var chart = new google.visualization.ComboChart(document.getElementById('chart_div_av'));

      chart.draw(data, options);
      window.addEventListener('resize',drawBasicAv,false);
    }

    function drawBasicTotal() {

      var data = new google.visualization.DataTable();
      data.addColumn('string', 'X');
      data.addColumn('number', '총인구(만)');
    
      data.addRows([
        ['1950',1921],['1960',2533],['1970',3219],['1980',3804],
        ['1990',4291],['2000',4737],['2010',4954],       ['2020',5126],['2030(전망)',5192],['2040(전망)',5085],['2050(전망)',4774],['2060(전망)',4283]
      ]);
    
      
    
      var options = {
        width:795,
        height:560,
        chartArea: {'width': '85%', 'height': '75%','left':'12%'},
        hAxis: {
          title: '년도',
          textStyle: {
            fontSize: 11,
            fontName: 'Arial',
            italic: true,
            bold: true
          },
          direction: 1, 
          slantedText: true, 
          slantedTextAngle: -30
        },
        vAxis: {
          
          title: '총인구 ( 만 )',
          textStyle: {
            bold:true
          }
          
        }
      }
    
      options.legend = ('top');
    
      var chart = new google.visualization.LineChart(document.getElementById('chart_div_total'));
    
      chart.draw(data, options);
      window.addEventListener('resize',drawBasicTotal,false);
    }
    
    function drawBasicAging() {
    
      var data = new google.visualization.DataTable();
      data.addColumn('string', 'X');
      data.addColumn('number', '고령화(%)');
    
      data.addRows([
        ['1950',3.0],['1960',3.5],['1970',3.6],['1980',4.3],
        ['1990',5.5],['2000',7.7],['2010',12.0],['2020',16.0],['2030(전망)',25.0],['2040(전망)',33.9],['2050(전망)',39.8],['2060(전망)',43.9]
      ]);
    
    
    
      var options = {
        seriesType:'bars',
        series:{2:{type:'line'}},
        width:795,
        height:560,
        chartArea: {'width': '85%', 'height': '75%','left':'12%'},
        hAxis: {
          title: '년도',
          textStyle: {
            fontSize: 11,
            fontName: 'Arial',
            italic: true,
            bold:true
          },
          direction: 1, 
          slantedText: true, 
          slantedTextAngle: -30
        },
        vAxis: {
          
          title: '고령화 ( % )',
          textStyle: {
            bold:true
          },
        },
        
      }
    
      options.legend = ('top');
    
      var chart = new google.visualization.ComboChart(document.getElementById('chart_div_aging'));
    
      chart.draw(data, options);
      window.addEventListener('resize',drawBasicAging,false);
    }
    






// function countSum(counting) {
//   let startNum = Math.floor(male_data[order][age])*1000+,
//   endNum = data[counting+1]["year"],
//   deltaNum = (endNum - startNum) / (1000 / resolutionMS) / nSecond;
//   console.log(startNum);
//   var handle = setInterval(() => {
//     var x = startNum.toLocaleString(undefined, {
//       minimumFractionDigits: 0,
//       maximumFractionDigits: 0
//     });
//     year.innerHTML = x.toString().replace(",", "");
    
//     // if already updated the endNum, stop
//     if (startNum >= endNum) clearInterval(handle);
    
//     startNum += deltaNum;
//     startNum = Math.min(startNum, endNum);
//   }, resolutionMS);
// };



// 비동기 지연함수
function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}



//차트 숨기기
const chartSection = document.querySelector('.section');
const machineSection = document.querySelector('.section_chart');
const resultSection = document.querySelector('.predict_result');
const chartShow = document.querySelector('.summary__entrance');
const webStarting = document.querySelector('.webcam-starting');
const camOn = document.querySelector('.cam_on');
const webcamRetry = document.querySelector('.webcam_retry');
const body = document.querySelector('#body');

chartSection.style.display='none';
resultSection.style.display='none';
webStarting.style.display='none'
camOn.style.pointerEvents='none';


chartShow.addEventListener('click',()=>{
  resultSection.style.display='none';
  chartSection.style.display='';
  body.style.background="none";
  body.style.backgroundColor="#ffebcd"
})

webcamRetry.addEventListener('click',()=>{
    location.reload();
})



const URL = "https://teachablemachine.withgoogle.com/models/lqJ_II8Mv/";

let model, webcam, labelContainer, maxPredictions;
let predictionNum=0;

// Load the image model and setup the webcam
async function init() {
    const modelURL = URL + "model.json";
    const metadataURL = URL + "metadata.json";
    webStarting.style.display='';
    camOn.style.pointer='Default';
    camOn.style.pointerEvents='none';
    // load the model and metadata
    // Refer to tmImage.loadFromFiles() in the API to support files from a file picker
    // or files from your local hard drive
    // Note: the pose library adds "tmImage" object to your window (window.tmImage)
    model = await tmImage.load(modelURL, metadataURL);
    maxPredictions = model.getTotalClasses();

    // Convenience function to setup a webcam
    const flip = true; // whether to flip the webcam
    webcam = new tmImage.Webcam(420, 420, flip); // width, height, flip
    
    await webcam.setup(); // request access to the webcam
    await webcam.play();

    webcam2 = new tmImage.Webcam(420, 420, flip);
    await webcam2.setup();
    await webcam2.play();

    window.requestAnimationFrame(loop);


    // append elements to the DOM
    webcamContainer=document.getElementById("webcam-container")
    webcamContainer.appendChild(webcam.canvas);
    chartSection.appendChild(webcam2.canvas);
    

    labelContainer = document.getElementById("label-container");
    // for (let i = 0; i < maxPredictions; i++) { // and class labels
    //     labelContainer.appendChild(document.createElement("div"));
    // }
    labelContainer.appendChild(document.createElement("div"));
    document.querySelector('.webcam-div').style.display='none';
    
}

async function loop() {
    webcam.update(); // update the webcam frame
    webcam2.update();
    await predict();

    if(classlevel>=80){
      predictionNum ++
      // console.log(predictionNum);
    };
    if(predictionNum==30){
      // console.log(webcam);
      await webcam.stop();
      await webcam2.stop();
      setTimeout(()=>{
        machineSection.style.display='none'
      },2000);
      setTimeout(()=>{
        resultSection.style.display=''
        pI=1;
        renderProgress()
      },2500);

    }else{
      window.requestAnimationFrame(loop);
    }
    
}

// run the webcam image through the image model
async function predict() {
    // predict can take in an image, video or canvas html element
    const prediction = await model.predict(webcam.canvas);
    // for (let i = 0; i < maxPredictions; i++) {
    //     const classPrediction =
    //         prediction[i].className + ": " + prediction[i].probability.toFixed(2);
    //     labelContainer.childNodes[i].innerHTML = classPrediction;
    // }
        const classPrediction = Math.ceil(prediction[0].probability.toFixed(2)*100)+"%";
        classlevel=  Math.ceil(prediction[0].probability.toFixed(2)*100);  
        labelContainer.childNodes[0].innerHTML = classPrediction;
        labelContainer.childNodes[0].style.backgroundColor="#03fcb6";
        labelContainer.childNodes[0].style.width=classPrediction;
        labelContainer.childNodes[0].style.borderRadius="5px";
        labelContainer.childNodes[0].style.textAlign="right";
        labelContainer.childNodes[0].style.fontStyle="italic";
}

async function init2() {
  const modelURL = URL + "model.json";
  const metadataURL = URL + "metadata.json";
  webStarting.style.display='';
  camOn.style.pointer='Default';
  camOn.style.pointerEvents='none';
  // load the model and metadata
  // Refer to tmImage.loadFromFiles() in the API to support files from a file picker
  // or files from your local hard drive
  // Note: the pose library adds "tmImage" object to your window (window.tmImage)
  model = await tmImage.load(modelURL, metadataURL);
  maxPredictions = model.getTotalClasses();

  // Convenience function to setup a webcam
  const flip = true; // whether to flip the webcam
  webcam2 = new tmImage.Webcam(150, 150, flip); // width, height, flip
  await webcam2.setup(); // request access to the webcam
  await webcam2.play();
  window.requestAnimationFrame(loop2);

  // append elements to the DOM
  webcamContainer=document.getElementById("webcam-container")
  chartSection.appendChild(webcam.canvas);

  labelContainer = document.getElementById("label-container");
  // for (let i = 0; i < maxPredictions; i++) { // and class labels
  //     labelContainer.appendChild(document.createElement("div"));
  // }
  labelContainer.appendChild(document.createElement("div"));
  document.querySelector('.webcam-div').style.display='none';
  
}

async function loop2() {
  webcam2.update(); // update the webcam frame
  await predict2();
  // if(classlevel>=80){
  //   predictionNum ++
  //   console.log(predictionNum);
  // };
  // if(predictionNum==50){
  //   console.log(webcam2);
  //   await webcam2.stop();
  //   setTimeout(()=>{
  //     machineSection.style.display='none'
  //   },2000);
  //   setTimeout(()=>{
  //     resultSection.style.display='';
  //   },2500);

  // }else{
  //   window.requestAnimationFrame(loop);
  // }
  window.requestAnimationFrame(loop);
  
}

// run the webcam image through the image model
async function predict2() {
  // predict can take in an image, video or canvas html element
  const prediction = await model.predict(webcam2.canvas);
  // for (let i = 0; i < maxPredictions; i++) {
  //     const classPrediction =
  //         prediction[i].className + ": " + prediction[i].probability.toFixed(2);
  //     labelContainer.childNodes[i].innerHTML = classPrediction;
  // }
      const classPrediction = Math.ceil(prediction[0].probability.toFixed(2)*100)+"%";
      classlevel=  Math.ceil(prediction[0].probability.toFixed(2)*100);  
      labelContainer.childNodes[0].innerHTML = classPrediction;
      labelContainer.childNodes[0].style.backgroundColor="#03fcb6";
      labelContainer.childNodes[0].style.width=classPrediction;
      labelContainer.childNodes[0].style.borderRadius="5px";
      labelContainer.childNodes[0].style.textAlign="right";
      labelContainer.childNodes[0].style.fontStyle="italic";
}

async function initPlay(){
  init();
  // init2();
}

const skipButton=document.querySelector(".skip__button");
const scriptButton1 = document.querySelector(".script_button1");
const scriptButton2 = document.querySelector(".script_button2");
const scriptButton3 = document.querySelector(".script_button3");
const scriptButton4 = document.querySelector(".script_button4");
const hintButton = document.querySelector(".hint_button");
const backButton=document.querySelector(".back__button");
const popuTop=document.querySelector('.popu__summary__top');
const averageAgeBox=document.querySelector('.average__age');
const character=document.querySelector('.character');
const scriptArrowContainer=document.querySelector('.script__arrow__container');
const yearArrow=document.querySelector('.population__year__arrow');
const scriptInputBox = document.querySelector('.script_input_box');
const scriptInput=document.querySelector('.script_input');
const scrtiptInputSpan = document.querySelector('.script_input_span');
const scriptToggleBox = document.querySelector('.script_toggle_box');
const scriptToggleText = document.querySelector('.script_toggle_text');
const scriptToggleUp = document.querySelector('#script_toggle_up');
const scriptToggleDown = document.querySelector('#script_toggle_down');
const chartZero = document.querySelectorAll('.chart_zero');
const popuChartMid = document.querySelector('.population__chart__mid');
const wrapper = document.querySelector('.wrapper');
console.log(chartZero);

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

skipButton.innerHTML="다음>>"
backButton.innerHTML="<<이전"

// skipButton.style.pointerEvents="none";
// 컨테이너 보이게,안보이게
function invisible(i){
  i.style.opacity='0'
  i.style.pointerEvents='none'

}
function visible(i){
  i.style.opacity='1'
  i.style.pointerEvents='auto'

}

backButton.style.opacity='0';
backButton.style.pointerEvents='none';
invisible(scriptButton1);
invisible(scriptButton2);
invisible(scriptButton3);
invisible(scriptButton4);
// invisible(backButton);
invisible(hintButton);
scriptInputBox.style.display='none';
scriptToggleBox.style.display='none';

// 스크립트 접기,펼치기
const scriptFold=document.querySelector('.script__arrow__down');
const scriptOpen=document.querySelector('.script__arrow__up');
const scriptContainer=document.querySelector('.gamerule');
const popuSectionContainer=document.querySelector('.popu__section__container');
scriptOpen.style.display='none';

scriptFold.addEventListener('click',()=>{
  scriptFold.style.display = 'none';
  scriptOpen.style.display='';
  if(scriptTop==false){
    scriptContainer.style.top='95%';
  } else{
    console.log('hi');
    scriptContainer.style.top='-185px';
  }
})

scriptOpen.addEventListener('click',()=>{
  scriptFold.style.display = '';
  scriptOpen.style.display='none';
  if(scriptTop==false){
    scriptContainer.style.top='';

  } else{
    console.log('hi');
    scriptContainer.style.top='0';
  }

})
    

    const content =["대한민국은 현재 태어나는 아이는 점점 줄어들고../노인 인구는 점점 늘어나고 있어서 큰일이라고 해.","계속해서 아이를 낳지 않는다면 2050년 대한민국은 인구 구성은 어떤 모습일까?","인구 피라미드 활동지에 2050년 인구 피라미드를 그려보고 카메라를 실행시켜 비추면 네가 2050년 인구 피라미드를 잘 예측했는지 확인해 줄게!"];

  

    
    const text = document.querySelector(".script");
    const chartTop = document.querySelector(".popu__summary__top");
    const retry = "다시 풀기";
    let index = 0;
    let speed = 30;
    let speedSlow = 300;    



    function typing(){
      typingAudio.play();
      
    if(index<content[typingCount].length){
      if(content[typingCount][index]=="/"){
        var a = document.createElement('br');
        text.append(a)
        index++
        setTimeout(typing, speedSlow);
        } else{
          text.append(content[typingCount][index])
          index++
          setTimeout(typing,speed);
        }
      } else{
        typingAudio.pause();
          typingAnimation()
      }
    }

    
    function goNext(){
      // skipButton.classList.remove('skip__animation')
      // index=0;
      // text.textContent = "";
      // typingCount++;
      // setInterval(typing, 100);
      // console.log(typingCount);
      // typingAnimation();

      skipButton.classList.remove('skip__animation')
      index=0;
      text.textContent = "";
      typingCount++;
      console.log(typingCount);
      setTimeout(typing, speed);
      typingAnimation();
    }
    
    function goBack(){
      // skipButton.classList.remove('skip__animation')
      // index=0;
      // text.textContent="";
      // typingCount--;
      // setInterval(typing, 100);
      // console.log(typingCount);

      // typingAnimation();
      skipButton.classList.remove('skip__animation')
      index=0;
      text.textContent="";
      typingCount--;
      console.log(typingCount);
      setTimeout(typing, speed);
      typingAnimation()
    }
    
    function right(){
      skipButton.classList.remove('skip__animation')
      index=0;
      text.textContent="";
      typingCount=typingCount+2;
      setTimeout(typing, speed);
      console.log(typingCount);
      typingAnimation();
    }

    // setInterval(typing, 100);
    
    setTimeout(typing, speed);
    
    // 넘어가기,뒤로가기
    skipButton.addEventListener('mouseover',()=>{
      clickSound()
    })
    
    backButton.addEventListener('mouseover',()=>{
      clickSound()
    })

    skipButton.addEventListener('click',()=>{
        goNext();
        
    })
    
    backButton.addEventListener('click',()=>{
        goBack();
    })

    scriptButton1.addEventListener('click',()=>{
      // goNext();
      wrapper.style.display='none';
      camOn.style.pointerEvents='auto';
    })

    scriptButton2.addEventListener('click',()=>{
     
    })

    scriptButton3.addEventListener('click',()=>{
   
    })

    scriptButton4.addEventListener('click',()=>{
    
    })
    
    text.addEventListener('click',()=>{
      speed=5;
      speedSlow=5;
      console.log('hi');
    })
    // 버튼 기능 비활성화
    renderProgress()
    function typingAnimation(){
      speed=30;
      speedSlow=300;
      // 다음버튼 보이기여부 
      if(typingCount==2 || typingCount==7){
        skipButton.style.opacity='0';
      } else{
        skipButton.style.opacity='1';
      }

      // 버튼1 보이기여부
      if(typingCount==2){
        scriptButton1.style.opacity='1';
        scriptButton1.style.pointerEvents='auto';
      } else{
        scriptButton1.style.opacity='0';
        scriptButton1.style.pointerEvents='none';
      }

      // 버튼2 보이기여부
      if(typingCount>=1){
        backButton.style.opacity='1'
        backButton.style.pointerEvents='auto';
      } else{
        backButton.style.opacity='0'
        backButton.style.pointerEvents='none';
      }

      if(typingCount==2){
        skipButton.style.display="none"
      } else{
        skipButton.style.display=""}
      
    }  
    
    
    // 스크립트 위치 위로 or 아래로
    let scriptTop = false;
    
    function scriptUp() {
      scriptContainer.style.top='0';
      character.style.bottom='0px';
      scriptArrowContainer.style.bottom='-219px';
      scriptTop = true;
    }
    
    function scriptDown() {
      scriptContainer.style.top='';
      character.style.bottom='50px';
      scriptArrowContainer.style.bottom='30px';
      scriptTop = false;
    }    

// 비동기 지연함수
function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}



// 힌트
const hintContainer = document.querySelector(".hint_container");
const hintText = document.querySelector('.hint');
const hintClose = document.querySelector('.hint__close');


invisible(hintContainer);

hintButton.addEventListener('click',()=>{
  visible(hintContainer);
})

hintClose.addEventListener('click',()=>{
  invisible(hintContainer);
})

function clickSound(){
  var clickaudio = document.getElementById("click");
  clickaudio.volume= 0.5;
  clickaudio.play();
}

function tapSound(){
  var tapSound = document.getElementById("tap");
  tapSound.volume= 0.5;
  tapSound.play();
}


// 스크립트 토글 버튼

