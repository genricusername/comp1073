let buttonOne = 0;
let buttonTwo = 0;
let buttonThree = 0;
let buttonFour = 0;
let buttonFive = 0;
let random = false;

if (random = true){
    buttonOne = Math.floor(Math.random() * 5) + 1;
    buttonTwo = Math.floor(Math.random() * 5) + 1;
    buttonThree  = Math.floor(Math.random() * 5) + 1;
    buttonFour = Math.floor(Math.random() * 5) + 1;
    buttonFive = Math.floor(Math.random() * 5) + 1;
    random = false;
};

document.getElementById("firstButton").addEventListener("click", function(){
    buttonOne++;
});

document.getElementById("secondButton").addEventListener("click", function(){
    buttonTwo++;
});

document.getElementById("thirdButton").addEventListener("click", function(){
    buttonThree++; 
});

document.getElementById("fourthButton").addEventListener("click", function(){
    buttonFour++;
});

document.getElementById("fifthButton").addEventListener("click", function(){
    buttonFive++;
});

document.getElementById("randButton").addEventListener("click", function(){
    random = true;
});

