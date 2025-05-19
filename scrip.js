

let gameSeq = [];
let userSeq = [];

let btns = ["yellow", "red", "blue", "green"];

let started = false;
let level = 0;


let h2 = document.querySelector("h2");

let h3=document.querySelector("h3");

let button = document.querySelector("button");

button.addEventListener("click", function () {
    if (started == false) {
        console.log("started");
        started = true;
        levelUp();

    }
});

function gameFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 450);
}

function userFlash(btn) {
    btn.classList.add("userFlash");
    setTimeout(function () {
        btn.classList.remove("userFlash");
    }, 250);
}

function levelUp() {
    userSeq=[];
    level++;
    h2.innerText = `level${level}`;

    let randidx = Math.floor(Math.random() * 3);
    let randcolor = btns[randidx];
    let randbtn = document.querySelector(`.${randcolor}`);

    gameSeq.push(randcolor);
    console.log(gameSeq);
    gameFlash(randbtn);
}

function checkans(idx) {
    // console.log("current level${level}",level)
    
    if (gameSeq[idx] === userSeq[idx]) {
        if(gameSeq.length==userSeq.length){
         setTimeout(levelUp,1000);
        }
       
    } else {
        
         h3.innerText=`Top socer level ${level}`;
        h2.innerHTML = `Game is over! your score <b> level ${level} </b><br>press again to start the game`;
        let body=document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            body=document.querySelector("body").style.backgroundColor="white";
        },800);
        
        reset();
       
    }
}

function btnpress() {
    // console.log(this);
    let btn = this;
    userFlash(btn);


    usercolor = btn.getAttribute("id");
    userSeq.push(usercolor);
    console.log(userSeq);

    checkans(userSeq.length-1);
}

let allbtns = document.querySelectorAll(".btn");
for (btn of allbtns) {
    btn.addEventListener("click", btnpress);
}



function reset(){
 userSeq=[];
 gameSeq=[];
 level=0;
 started=false;
}
