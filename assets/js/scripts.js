//Wait for the DOM to finish loading before running the Game.
//Get the button elements and add event listeners to them.

document.addEventListener("DOMContentLoaded", function(){
    let buttons = document.getElementsByTagName("button");

    for(let button of buttons){
        button.addEventListener("click", function(){
            if(this.getAttribute("dataType")==="submit"){
                alert("You clicked submit");
            }
            else {
                let gameType = this.getAttribute("data-type");
                alert(`you cliked ${gameType}`);
            }
        })
    }

    
})


function runGame(){

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

function displayAdditionQuestion() {

}

function subtractQuestion() {

}


function multiplyQuestion(){

}
