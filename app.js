
var choices = document.querySelectorAll(".choice");
var message = document.querySelector("#msg");

const draw = ()=>{
    console.log("This Is draw");
    message.innerText="Game Was Draw! Play Again";
    message.style.backgroundColor="#081b31";
}

const genCompChoice = () =>{
    const options = ["rock","paper","scissors"];
     const randIndx = Math.floor(Math.random()*3);
     return options[randIndx];
}
const ShowWinner = (userWin,compChoice,userchoice) =>{
    if(userWin){
        console.log("you are a Winnner");
        message.innerText = `Your Win! Your ${userchoice} beats ${compChoice}`;
        message.style.backgroundColor="green";
    }
    else{
        console.log("You are a Losser");
        message.innerText = `You Loose ! Computer ${compChoice} beats Your ${userchoice}`;
        message.style.backgroundColor="red";
    }
}

const playGame = (userchoice) =>{
 console.log("This is user choice :", userchoice)
 // Generate Computer Choice
 const compChoice = genCompChoice();
 console.log("This is computer Choice:",compChoice);
 if(userchoice ===compChoice )
 {
     draw ()
 }
 else {
    let userWin = true;
    if(userchoice = "rock"){
        userWin= compChoice === "paper" ? false : true;
    }
    else if( userchoice ==="paper"){
        userWin = compChoice = "scessiors" ? false : true;
    }
    else{
        userWin = compChoice="rock"?false:true;
    }
    ShowWinner(userWin,compChoice,userchoice);
 }
}

choices.forEach((el) =>{
    console.log(el);
    el.addEventListener("click",()=>{
        const userchoice= el.getAttribute("id");
        ///console.log("btnwasClickes",userchoice);
        playGame(userchoice);
        
    });
});
