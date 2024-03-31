
let h2 = document.querySelector('h2');
let h3 = document.querySelector('h3');
let box = document.querySelector('.box');
let btn_start = document.querySelector('.start_btn');
let btn_restart = document.querySelector('.restart_btn');
let body = document.querySelector("body");

let gameSeq = [];
let userSeq = [];

let btnBox = ["box1", "box2", "box3", "box4"];

let started = false;
let level = 0;

btn_start.addEventListener('click',function(){
    if(started == false){
        started = true;
        levelup();
    }
});

function gameFlash(btn){
    btn.classList.add("gameflash");
    setTimeout(function(){
        btn.classList.remove("gameflash")
    }, 300);
};

function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash")
    }, 300);
};

function levelup(){
    level++;
    h2.innerText = `level ${level}`;
    userSeq = [];

    // Generate random 
    let randIdx = Math.floor(Math.random() * 3);
    let randColors = btnBox[randIdx];
    let randBox = document.querySelector(`.${randColors}`);

    gameSeq.push(randColors);
    console.log(gameSeq);
    gameFlash(randBox);
}

function checkAns(idx){
    if(userSeq[idx] === gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelup, 1000);
        }
    } else {
        h2.innerText = `Game Over! Click restart to restart game`;
        h3.innerText = `your score is : ${level}`;
        body.classList.add("lost");
        setTimeout(function(){
            body.classList.remove("lost")
        }, 250);
    }
}

function btnPress(){
    let btn = this;
    userFlash(btn);

    userPress = btn.getAttribute("id");
    userSeq.push(userPress);
    console.log(userSeq);
    checkAns(userSeq.length-1);
}

let boxes = document.querySelectorAll(".box")
    for(box of boxes){
        box.addEventListener("click",btnPress);
    };

btn_restart.addEventListener('click',function(){
        gameSeq = [];
        userSeq = [];
        started = false;
        level = 0;
        h3.innerText = "";
        if(started == false){
            started = true;
            levelup();
        }
})