let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");

const msgP=document.querySelector("#msg")
const userScorePara=document.querySelector("#user-score")
const compScorePara=document.querySelector("#computer-score")

const genComputerChoice=()=>{
    const option=["rock","paper","scissor"]

    const random=Math.floor(Math.random()*3)
    return option[random];
} 
const drawGame=()=>{
    console.log("GAME WAS DRAW.");
    msgP.innerText="Draw";
    msgP.style.backgroundColor="#081b81";
}
const showWinner=(userWin,userChoice,computerChoice)=>{
    if(userWin)
    {
        userScore++;
        userScorePara.innerText=userScore;
        console.log("YOU WIN")
        msgP.innerText=`YOU WIN! Your ${userChoice} beats ${computerChoice}`
        msgP.style.backgroundColor="green";
    }
    else{
        compScore++;
        compScorePara.innerHTML=compScore;
        console.log("COMPUTER WIN, YOU LOSS")
        msgP.innerText=`COMPUTER WIN, ${computerChoice} beats your ${userChoice}`
        msgP.style.backgroundColor="red";
    }
}
const playGame=(userChoice)=>{
    console.log("user choice = ",userChoice)
    //generate computer choice 
    const computerChoice=genComputerChoice();
    console.log("computer choice = ",computerChoice)
    if(userChoice===computerChoice){
        //draw condiiton
        drawGame();
    }
    else {
        let userWin=true;
        if(userChoice==="rock"){
            userWin=computerChoice==="paper"?false:true;
        }
        if(userChoice==="paper"){
            userWin=computerChoice==="scissor"?false:true;
        }
        if(userChoice==="scissor"){
            userWin=computerChoice==="rock"?false:true;
        }
        showWinner(userWin,userChoice,computerChoice);
    }
}
choices.forEach((choice)=>{
    console.log(choice);
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        //console.log("choice was clicked",userChoice);
        playGame(userChoice);
    })
})
