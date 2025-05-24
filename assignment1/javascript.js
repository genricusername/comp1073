let buttonOne = 0;
let buttonTwo = 0;
let buttonThree = 0;
let buttonFour = 0;
let buttonFive = 0;


function random(){
    buttonOne = Math.floor(Math.random() * 7);
    buttonTwo = Math.floor(Math.random() * 7);
    buttonThree  = Math.floor(Math.random() * 7);
    buttonFour = Math.floor(Math.random() * 7);
    buttonFive = Math.floor(Math.random() * 7);
    random = false;
    firstP(buttonOne);
};

document.querySelector("div button:nth-of-type(1)").addEventListener("click", function(){
    buttonOne++;
    if(buttonOne === 7){
        buttonOne = 0;
    }
    firstP(buttonOne);
});

document.querySelector("div button:nth-of-type(2)").addEventListener("click", function(){
    buttonTwo++;
});

document.querySelector("div button:nth-of-type(3)").addEventListener("click", function(){
    buttonThree++; 
});

document.querySelector("div button:nth-of-type(4)").addEventListener("click", function(){
    buttonFour++;
});

document.querySelector("div button:nth-of-type(5)").addEventListener("click", function(){
    buttonFive++;
});

document.querySelector("div button:nth-of-type(6)").addEventListener("click", function(){
    random();
});

function firstP(buttonOne){
    const wordsOne = ["The turkey", "Mom", "Dad", "The dog", "my teacher", "The elephant", "The cat"];
    document.querySelector("div p:nth-of-type(1)").textContent = wordsOne[buttonOne];
}