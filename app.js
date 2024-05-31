let game_seq=[];
let user_seq=[];

let btns=["yellow","red","green","purple"];
let started=false;
let level=0; 

let h3=document.querySelector("h3");
document.addEventListener("keypress",function(){
    if(started == false){
        console.log("game started");
        started=true;
        levelUp();
    }
});
function gameFlash(btn){
    btn.classList.add('flash');
    setTimeout(function(){
        btn.classList.remove("flash");
    },100)
}
function userFlash(btn){
    btn.classList.add('aquaFlash');
    setTimeout(function(){
        btn.classList.remove("aquaFlash");
    },100)
}
function levelUp(){
    user_seq=[];
    level++;
    h3.innerText=`level ${level}`;

    let randIndx=Math.floor(Math.random()*3);
    let randColor=btns[randIndx];
    let randBtn=document.querySelector(`.${randColor}`);
    game_seq.push(randColor);
    gameFlash(randBtn);

}
function checkAns(idx){

    if(game_seq[idx] === user_seq[idx])
    {
        if(game_seq.length == user_seq.length)
        {
            setTimeout(levelUp ,1000);
        }
    }else{
        h3.innerText=  `game over your score is : ${level}`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        },250)
        reset();
    }
}
function buttonPress()
{
    let btn=this;
    userFlash(btn);
    let userColor=btn.getAttribute("id");
    user_seq.push(userColor);
    checkAns(user_seq.length-1);
}

let allbtns=document.querySelectorAll(".btn");
for(btn of allbtns){
    btn.addEventListener("click",buttonPress);
}
function reset(){
    started=false;
    game_seq=[];
    user_seq=[];
    level=0;
}