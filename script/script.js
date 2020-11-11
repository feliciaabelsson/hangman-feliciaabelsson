//----Variables

//How many lives the player have from start 
let lives = 9;
//Stores the guesses 
let storeGuesses = [];
//Counts correct geusses
let counter;
//The word that is given the player 
let word;
//Animation starts at 0 
let wrongAttempts = 0;
//Wins & losses 
let playerWins = 0;
let playerLosses = 0;
//Sets seconds to 0
let seconds = 0;

const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

const categories = {
    movies: ['godfather', 'inception', 'matrix', 'seven', 'lionking'],
    games: ['minecraft', 'tetris', 'dota', 'fortnite', 'uno'],
    countries:["sweden", "syria","tanzania","niger","jamaica","greece"]
};
 

//-----Elements 

let rightWord = document.getElementById('right-answer')
let pointStatus = document.getElementById("mistake-counter");
let theDraw = document.querySelector (".hangman-draw");
let countDiv = document.getElementById('countDown');
let totalWins = document.querySelector('#wins span');
let totalLosses = document.querySelector('#losses span');


//--------Functions 

//OnClick Function
clickedLetter = () => {
    //when clicked on a letter button it goes to this function 
    letterList.onclick = function () {
        //"this" binds to the element that caused the event to fire (in this case the letterList)
        let guessedLetter = (this.innerHTML);
        //sets class active to the elements 
        this.setAttribute("class", "active");
        //loops through words to check if the word matches 
        for (let i = 0; i < word.length; i++) {
            //if the index of the word is equal to the letter the player clicked on 
            if (word[i] === guessedLetter) {
                //adds the clicked letter to the innerhtml of storeguess 
                storeGuesses[i].innerHTML = guessedLetter;
                //counts up by one 
                counter++;   
                //adds sound
                document.getElementById("letterSound").play();
            }
        }

        //gets the letter that the player clicked on
        let wrongGuess = (word.indexOf(guessedLetter));
        //if the player clicks on wrong letter (-1 = a letter that does not exist), the lives goes down by one 
        if (wrongGuess === -1) {
            this.setAttribute('class', 'active wrong-letter');
            lives -= 1;
            //adds wrongAttempts by 1 each wrong attempt  
            wrongAttempts++;
            //adds sound
            document.getElementById("failLetter").play();
            //add class wrong on the draw element
            theDraw.classList.add(`wrong-${wrongAttempts}`);
            showLives();
        }  else {
            showLives();
        }
    } 
};


//Function for timer
//sets interval 
countDown = setInterval(function () {
    "use strict";
    seconedPass();
}, 1000);

//function for seconds passing 
seconedPass = () => {
    "use strict";
    countDiv.innerHTML = "Time:" + seconds + "s";
    //if seconds is less then 5
    if (seconds < 40) {
        //add 1 second 
        seconds += 1;
    }
    else {
        //clears interval 
        clearInterval(countDown);
        //plays sound
        document.getElementById("fail").play();
        //adds text 
        pointStatus.innerHTML = "Game Over";
        //hides letters
        letterButtons.classList.add('hide-letters');
        //adds playerLosses count by 1
        playerLosses += 1;
        //shows total losses
        totalLosses.innerHTML = playerLosses;
    }
};


//Function losses and wins counter 
pointsCounter = () => {
    //if pointsStatus is "you win" 
    if (pointStatus.innerHTML == "You Win!") {
        //playerWins gets added by 1 
        playerWins += 1;
        //writes out the points in innerhtml
        totalWins.innerHTML = playerWins;
        //if lives is less then one 
    } else if (lives < 1) {
        //playerLosses gets added by 1
        playerLosses += 1;
        //writes out the points in innerhtml
        totalLosses.innerHTML = playerLosses;
    }
};


//Function Show lives 
//Counts lives and renders how many the player have left when making a wrong move 
showLives = () => {
    //writes out how many lives the player have 
    pointStatus.innerHTML = "You have " + lives + " lives";
    
    //if lives is less then one the player has lost the game 
    if (lives < 1) {
        //plays sound
        document.getElementById("fail").play();
        pointStatus.innerHTML = "Game Over";
        rightWord.innerHTML = 'The answer is: ' + word;
        //adds class that removes all letters 
        letterButtons.classList.add('hide-letters');
        //clears interval 
        clearInterval(countDown);
    } 
    //loops through array storeguesses
    for (let i = 0; i < storeGuesses.length; i++) {
        //if the counter is equal to the storeguess array
        if (counter === storeGuesses.length) {
            pointStatus.innerHTML = "You Win!";
            //plays sound
            document.getElementById("winSound").play();
            //adds class that removes all letters 
            letterButtons.classList.add('hide-letters');
            //clears interval 
            clearInterval(countDown);
        }  
    }  
    //runs function pointsCounter
    pointsCounter(); 
};
  
  
//Function Buttons
//gets the letters from array and writes them on a li list in html
buttons = () => {
    //getting the button from html
    letterButtons = document.getElementById('buttons');
    //creates a new ul element 
    letters = document.createElement('ul');

    //loops through array of letters in alphabet
    for (let i = 0; i < alphabet.length; i++) {
        //adds new classname to ul list
        letters.className = 'alphabet';
        //creates a new li list 
        letterList = document.createElement('li');
        //adds new classname to li list
        letterList.className = 'letter';
        //adds the li list to innerhtml to the index of alphabet array
        letterList.innerHTML = alphabet[i];
        //runs function clickedLetter
        clickedLetter();
        //sets ul list to the child of id buttons in html
        letterButtons.appendChild(letters);
        //sets li list as child to ul 
        letters.appendChild(letterList);
    }
    
};


//Function for word holders
wordsList = () => {
    //gets the html element 
    wordHolder = document.getElementById('word-holder');
    //creates an ul element 
    correct = document.createElement('ul');

    //loops through empty array of words 
    for (let i = 0; i < word.length; i++) {
        //adds classname my-word to html ul elements 
        correct.className = 'my-word';
        //creates li element to empty variable guess
        guess = document.createElement('li');
        //adds classname guess to li element in html 
        guess.className ='guess';
        //makes li element innehtml to be a underscore 
        guess.innerHTML = "_";

        //pushes the guesses to empty array storeGuesses
        storeGuesses.push(guess);
        //makes ul list as a child to word-holder inside html 
        wordHolder.appendChild(correct);
        //makes guess variable as child to ul list so 
        correct.appendChild(guess);
    }
};


//Function for getting words out of array
getWords = () => {
    //getting the keys from the object
    let key = Object.keys(categories);
    //accessing the keys array lenght and randomizes
    let randomArray = key[Math.floor(Math.random() * key.length)];
    //sets cateogires as the array of the keys
    let list = categories[randomArray];
    //gets out the strings from the arrays and randomizes 
    word = list[Math.floor(Math.random() * list.length)];
    console.log(word);
    //gets the element of html 
    let category = document.querySelector('#category span');
    //writes out what category the string belongs to 
    category.innerHTML =  randomArray;   
    
    //sets lives to 9 each new round
    lives = 9;
    //sets counter back to 0 each round
    counter = 0;
}  

//Function for erasing each new misstake class to the drawing 
eraseAnimation = () => {
    theDraw.classList.remove('wrong-1', 'wrong-2','wrong-3','wrong-4','wrong-5','wrong-6','wrong-7','wrong-8','wrong-9');
}


//Function for Play Again button
//When clicking on play-again button this functions runs
document.getElementById('play-again').onclick = playAgain = () => {
    //removes all ul element from wordHoler()
    correct.parentNode.removeChild(correct);
    //removes all ul element from buttons()
    letters.parentNode.removeChild(letters);
    //sets rightword back to nothing 
    rightWord.innerHTML = '';
    //makes storeGuesses to an empty array again
    storeGuesses = [];
    //sets seconds back to 0
    seconds = 0;
    //runs interval again 
    countDown = setInterval(function () {
        "use strict";
        seconedPass();
    }, 1000);
    //removes the class that removes all letters so that they are visible again
    letterButtons.classList.remove('hide-letters');
    //sets wrong attempts to 0 so it will start counting from scratch 
    wrongAttempts = 0;
   
    //runs each function again 
    eraseAnimation();
    getWords();
    buttons();
    showLives();
    wordsList();
    clickedLetter(); 
}


buttons();
getWords();
clickedLetter();
showLives();
wordsList();




