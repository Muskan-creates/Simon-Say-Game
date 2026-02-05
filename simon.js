let userSeq=[];
let gameSeq=[];
let level=0;
let highScore=0;
let started=false;

let h3=document.querySelector("h3");

let btns=["purple","red","yellow","green"];

document.addEventListener("keypress",function(){
    if(started==false){
        console.log("game is started");
        started= true;
        LevelUp();
    }
});

// gameflash
function gameflash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
};

// userflash
function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },250);
}

function LevelUp(){
    userSeq=[];
    level++;

    // random button selection
    let randno=Math.floor(Math.random()*3);
    let randcolor=btns[randno];
    let randbtn=document.querySelector(`.${randcolor}`);

    h3.innerText=`Level ${level}`;

    gameSeq.push(randcolor);
    // random btn flash
    gameflash(randbtn);
};

function btnpress(){
    let btn= this;
    userflash(btn);

    let userColor=btn.getAttribute("id");
    userSeq.push(userColor);
    check(userSeq.length-1);
}

let allbtns=document.querySelectorAll(".btn");
for (let btn of allbtns){
    btn.addEventListener("click",btnpress);
};

function check(ind){
    console.log("curr level:",level);
    if (userSeq[ind]===gameSeq[ind]){

       if(userSeq.length==gameSeq.length){
        setTimeout(LevelUp,1000);
       };
    }
    else{
        if(level>highScore){
            highScore=level;
        h3.innerHTML=`New High Score!${highScore}🎉<br><b>Press any key to start `}
       
        else{
            h3.innerHTML=`Game Over! Your Score: ${level} | High Score: ${highScore}</b><br>Press any key to start.`;

            document.querySelector("body").style.backgroundColor="red";

            setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
            },200)
    }
        reset();
    }
}
function reset(){
    started=false;
    gameSeq=[];
    userSeq=[];
    level=0;
}

