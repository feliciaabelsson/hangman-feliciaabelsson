//----Variables
let choosenCategory;
//how many lives the player have from the beginning 
let lives = 9;
//stores the guesses 
let storeGuesses = [];
// Count correct geusses
let counter;
//The word that is given the player 
let word;

let wrongAttempts = 0;

let theDraw = document.querySelector (".hangman-draw");

const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];




const categories = {
    movies: ['godfather', 'inception', 'matrix', 'seven', 'lionking'],
    games: ['minecraft', 'tetris', 'dota', 'fortnite', 'uno'],
    countries:["sweden", "syria","tanzania","biger","jamaica","greece"]
};

 

//-----Elements 
let rightWord = document.getElementById('right-answer')
//getting the element in html where the lives will be showed 
let pointStatus = document.getElementById("mistake-counter");
let showClue= document.getElementById("clue");




//-----Functions

// OnClick Function
clickedLetter = () => {
    //when clicked on a letter button it goes to this function 
    letterList.onclick = function () {
        //sets varaibel guess to 
        //this binds to the element that caused the event to fire (in this case the letterList)
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
                
            }
        }
        //gets the letter that the player clicked on
        let wrongGuess = (word.indexOf(guessedLetter));
        //if the player clicks on wrong letter (-1 = a letter that does not exist), the lives goes down by one 
        if (wrongGuess === -1) {
            lives -= 1;
            wrongAttempts++;
            //add class wrong on the draw element
            theDraw.classList.add(`wrong-${wrongAttempts}`);
            showLives();
        }  else {
            showLives();
        }
    } 
}


//Show lives 
//Counts lives and renders how many the player have left when making a wrong move 
showLives = () => {
    //writes out how many lives the player have 
    pointStatus.innerHTML = "You have " + lives + " lives";
    //if lives is less then one the player has lost the game 
    if (lives < 1) {
        pointStatus.innerHTML = "Game Over";
        rightWord.innerHTML = 'The answer was: ' + word;
    } 
    //loops through array storeguesses
    for (let i = 0; i < storeGuesses.length; i++) {
        if (counter === storeGuesses.length) {
            pointStatus.innerHTML = "You Win!";
        } 
    }  
}
  

//function for getting the letters from array and writing them out on a li list in html
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
        //console.log(letterList)
    }
};


//function for word holder
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
}


//function for getting words out of array
getWords = () => {
    //getting the keys from the object
    let key = Object.keys(categories);
    //accessing the keys array lenght and randomizes
    let randomArray = key[Math.floor(Math.random() * key.length)];
    //sets cateogires as the array of the keys
    let list = categories[randomArray];
    //gets out the strings from the arrays and randomizes 
    word = list[Math.floor(Math.random() * list.length)];
    console.log(word)
    //gets the element of html 
    let category = document.getElementById('category');
    //writes out what category the string belongs to 
    category.innerHTML = 'The category is: ' + randomArray;   

    //sets lives to 9 each new round
    lives = 9;
    //sets counter back to 0 each round
    counter = 0;
}  

//function for erasing each new misstake class to the drawing 
eraseAnimation = () => {
    theDraw.classList.remove('wrong-1', 'wrong-2','wrong-3','wrong-4','wrong-5','wrong-6','wrong-7','wrong-8','wrong-9');
}


//play again function 
document.getElementById('play-again').onclick = playAgain = () => {
    correct.parentNode.removeChild(correct);
    letters.parentNode.removeChild(letters);
    rightWord.innerHTML = '';
    storeGuesses = [];
    //sets wrong attempts to 0 so it will start counting from scratch 
    wrongAttempts = 0;
    //erases the animation
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

playAgain();


