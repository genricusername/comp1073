let buttonOne = 0;
let buttonTwo = 0;
let buttonThree = 0;
let buttonFour = 0;
let buttonFive = 0;
let myArray = [12, 45, 26, 68, 92];

let myVar = myArray.unshift(73, 29);

console.log(myVar);
//depending on which button is pressed add one to the buttonX, if its higher than or equal to 7 reset it to 0 than pass that to the function
document.querySelector("div button:nth-of-type(1)").addEventListener("click", function(){
    buttonOne++;
    if(buttonOne === 7){
        buttonOne = 0;
    }
    firstP(buttonOne);
});

document.querySelector("div button:nth-of-type(2)").addEventListener("click", function(){
    buttonTwo++;
    if(buttonTwo === 6){
        buttonTwo = 0;
    }
    secondP(buttonTwo);
});

document.querySelector("div button:nth-of-type(3)").addEventListener("click", function(){
    buttonThree++; 
    if(buttonThree === 6){
        buttonThree = 0;
    }
    thirdP(buttonThree);
});

document.querySelector("div button:nth-of-type(4)").addEventListener("click", function(){
    buttonFour++;
    if(buttonFour === 7){
        buttonFour = 0;
    }
    fourP(buttonFour);
});

document.querySelector("div button:nth-of-type(5)").addEventListener("click", function(){
    buttonFive++;
    if(buttonFive === 5){
        buttonFive = 0;
    }
    fiveP(buttonFive);
});

//call random and have it pick a random option 0-6 and then call the needed function to replace the text
document.querySelector("div button:nth-of-type(6)").addEventListener("click", function(){
    random();
});

function random(){
    buttonOne = Math.floor(Math.random() * 6);
    buttonTwo = Math.floor(Math.random() * 5);
    buttonThree  = Math.floor(Math.random() * 5);
    buttonFour = Math.floor(Math.random() * 6);
    buttonFive = Math.floor(Math.random() * 5);
    firstP(buttonOne);
    secondP(buttonTwo);
    thirdP(buttonThree);
    fourP(buttonFour);
    fiveP(buttonFive);
};

//set the words for the story into an array and then change the respective p element depending on how many times the respective button was pushed
function firstP(buttonOne){
    const wordsOne = ["The turkey", "Mom", "Dad", "The dog", "my teacher", "The elephant", "The cat"];
    document.querySelector("div p:nth-of-type(1)").textContent = wordsOne[buttonOne];
};

function secondP(buttonTwo){
    const wordsTwo = ["sat on", "ate", "danced with", "saw", "doesnt like", "kissed",];
    document.querySelector("div p:nth-of-type(2)").textContent = wordsTwo[buttonTwo];
};

function thirdP(buttonThree){
    const wordsThree = ["a funny", "a scary", "a goofy", "a slimy", "a barking", "a fat"];
    document.querySelector("div p:nth-of-type(3)").textContent = wordsThree[buttonThree];
};

function fourP(buttonFour){
    const wordsFour = ["goat", "monkey", "fish", "cow", "frog", "bug", "worm"];
    document.querySelector("div p:nth-of-type(4)").textContent = wordsFour[buttonFour];
};

function fiveP(buttonFive){
    const wordsFive = ["on the moon", "on the chair", "in my spaghetti", "in my soup", "on the grass", "in my shoes"];
    document.querySelector("div p:nth-of-type(5)").textContent = wordsFive[buttonFive];
};