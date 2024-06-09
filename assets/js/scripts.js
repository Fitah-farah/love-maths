//Wait for the DOM to finish loading before running the Game.
//Get the button elements and add event listeners to them.

//This event listener code is excuted when the page finish loading.
document.addEventListener("DOMContentLoaded", function(){
    let buttons = document.getElementsByTagName("button");

    //This event listener code is excuted when the user clicks a button.
    for(let button of buttons){
        button.addEventListener("click", function(){
            if(this.getAttribute("dataType")==="submit"){
                alert("You clicked submit");
            }
            else {
                let gameType = this.getAttribute("data-type");
                runGame(gameType);
            }
        })
    }

    
})

/*** 
 * The main 'loop' Game called, when the script first loaded
 * and after the user's answer has been processed
 */

function runGame(gameType){
    let num1 = Math.floor(Math.random() *25 +1);
    let num2 = Math.floor(Math.random() *25 +1);
    if(gameType === 'addition'){
        displayAdditionQuestion(num1,num2);
    }
    else {
        alert(`unknown game type ${gameType}`);
        throw `Unknown game type ${gameType}, Aborting!`
    }
}


function checkanswer(){

}

function calculateCorrectAnswer() {

}

function incrementScore() {

}

function incrementWrongAnswer()
{

}

function displayAdditionQuestion(operand1, operand2) {
    document.getElementById('operand1').textContent= operand1;
    document.getElementById('operand2').textContent= operand2;
    document.getElementById('operator').textContent= '+';

}

function subtractQuestion() {

}


function multiplyQuestion(){

}
