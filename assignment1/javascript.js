let buttonOne = 0;
let buttonTwo = 0;
let buttonThree = 0;
let buttonFour = 0;
let buttonFive = 0;


function random(){
    buttonOne = Math.floor(Math.random() * 7) + 1;
    buttonTwo = Math.floor(Math.random() * 7) + 1;
    buttonThree  = Math.floor(Math.random() * 7) + 1;
    buttonFour = Math.floor(Math.random() * 7) + 1;
    buttonFive = Math.floor(Math.random() * 7) + 1;
    random = false;
    firstP(buttonOne);
};

document.querySelector("div button:nth-of-type(1)").addEventListener("click", function(){
    buttonOne++;
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
    if(buttonOne === 1){
    document.querySelector("div p:nth-of-type(1)").textContent ="The turkey";
    } else if(buttonOne === 2){
    document.querySelector("div p:nth-of-type(1)").textContent = "Mom";
    } else if(buttonOne === 3){
    document.querySelector("div p:nth-of-type(1)").textContent = "Dad";
    }else if(buttonOne === 4){
    document.querySelector("div p:nth-of-type(1)").textContent = "the dog";
    }else if(buttonOne === 5){
    document.querySelector("div p:nth-of-type(1)").textContent = "my teacher" ;
    }else if(buttonOne === 6){
    document.querySelector("div p:nth-of-type(1)").textContent = "the elephant";  
    }else if(buttonOne === 7){
    document.querySelector("div p:nth-of-type(1)").textContent = "the cat";
    }else if(buttonOne <= 8){
    buttonOne = 1;
    }
    return buttonOne;
}