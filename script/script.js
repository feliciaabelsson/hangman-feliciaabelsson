
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
let theDraw= document.querySelector (".hangman-draw");

const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

const categories = [
    ['godfather', 'inception', 'matrix', 'seven', 'lionking'],
    ['minecraft', 'tetris', 'dota', 'fortnite', 'uno']
];
//cateogies 
//have to change so that it does not matter if its uppercase or not
// const categories = [
//     ['Godfather', 'Inception', 'Matrix', 'Seven', 'Lionking'],
//     ['Minecraft', 'Tetris', 'Dota', 'Fortnite', 'Uno']
// ];

const categories2 = {
    movies: ['godfather', 'inception', 'matrix', 'seven', 'lionking'],
    games: ['minecraft', 'tetris', 'dota', 'fortnite', 'uno'],
    countries:["Sweden", "Syria","Tanzania","Niger","Jamaica","Greece"]
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


//letters
const letters = "abcdefghijklmnopqrstuvwxyz";

//get array from lettters
let lettersArray = Array.from(letters);

// select letters contatiner
let lettersContainer=document.querySelector(".letters");

// generate letters 
lettersArray.forEach(letter =>{
  //create span 
  let span= document.createElement("span");

  //create letter text node
  let theLetter=document.createTextNode(letter);

// append the letter to span
  span.appendChild(theLetter);

  //add class on span
  span.className='letter-box';

  //append span to the letters contatiner
  lettersContainer.appendChild(span);
});
//object of word and categories
const words={ Programming:["php","javascript","go","fortran","scala","r","mysql","python"],
Movies:[ "prestige","coco","up","twinlight","waves","the hunt","bacurau"]
,People:["Albert Einstein","Cleopatra","Mahatma Ghandi","Zlatan Ibrahimovic","Luka Mordic"],
Countries:["Sweden", "Syria","Tanzania","Niger","Jamaica","Greece"]

}
//get random property
let allKeys = Object.keys(words);

//random number depend on keys length
let randomPropNumber= Math.floor(Math.random() * allKeys.length);

//category
let randomPropName = allKeys[randomPropNumber];

//catrgory words 
let randomPropValue = words[randomPropName];


//random  number depend on words
let randomValueNumber = Math.floor(Math.random()* randomPropValue.length);

//
let randomValueValue =randomPropValue[randomValueNumber];

// set category info
document.querySelector(".game-info  span").innerHTML = randomPropName;

//select letters guess element
let lettersGuessContainer = document. querySelector(".letters-guess");

//convert chosen word to array
let lettersAndSpace = Array .from(randomValueValue);

//create spans depaned on word
lettersAndSpace.forEach(letter=> {
  
  //create empty span
  let emptySpan = document.createElement("span");

  // if letter is space
  if (letter === '') {

    //add class to the span
    emptySpan.className ='with-space';
  }
  // append span to the letters guess container
  lettersGuessContainer.appendChild(emptySpan);

});

//select guess spans
let guessSpans =document.querySelectorAll(".letters-guess span");

//swt wrong attempts
let wrongAttempts=0;

//select the draw element
let theDraw= document.querySelector (".hangman-draw");

//handle clicking on letters
document.addEventListener("click" , (e)=>  {

  
  //set the chose status
  let theStatus= false;

  if (e.target.className === 'letter-box') {
  e.target.classList.add("clicked");
  // get Clicked letter
  let theClickedLetter = e.target.innerHTML.toLowerCase();

  // the chosen word
  //console.log(lettersAndSpace);
  let theChosenword= Array.from(randomValueValue.toLowerCase());

  lettersAndSpace.forEach((wordLetter, WordIndex)=>{
  // if the  clicked letter equal to one of the chosen word letter
  if(theClickedLetter == wordLetter) {

    //set status to correct
    theStatus= true;
  
    // loop on all guess spans
    guessSpans .forEach((span, spanIndex)=> {

      if (WordIndex === spanIndex) {
        span.innerHTML = theClickedLetter;
      }
    });
   }
  });
// outside loop
   //if letter is wrong
   if (theStatus !== true){


    //increase the wrong attempts
    wrongAttempts++;

    //add class wrong on the draw element
    theDraw.classList.add(`wrong-${wrongAttempts}`);

    //play faiö sound
    document.getElementById("fail").play();
    if (wrongAttempts === 8){
      endGame();
    }

   }
   else{ document.getElementById("success").play();}
} 

  });




// //Get random word from array
// randomWord = () => {
//     //goes through the first step of array categories and puts it in a variable 
//     choosenCategory = categories[Math.floor(Math.random() * categories.length)];
//     //goes through the second step of array categories and gets a random string from list 
//     word = choosenCategory[Math.floor(Math.random() * choosenCategory.length)];
//     console.log(word);

//     guesses = [];
//     lives = 10;
//     counter = 0;
// }

getWords = () => {
    let key = Object.keys(categories2);
    let randomArray = key[Math.floor(Math.random() * key.length)];
    let list = categories2[randomArray];
    word = list[Math.floor(Math.random() * list.length)];
    console.log(word)
    let category = document.getElementById('category');
    category.innerHTML = 'The category is: ' + randomArray;   

    guesses = [];
    lives = 10;
    counter = 0;
}  


//play again function 
document.getElementById('play-again').onclick = playAgain = () => {
    correct.parentNode.removeChild(correct);
    letters.parentNode.removeChild(letters);
    rightWord.innerHTML = '';
    storeGuesses = [];
    //theDraw.classList.remove(`wrong-${wrongAttempts}`);

    getWords();
    //randomWord();
    buttons();
   
    showLives();
    wordsList();
}

buttons();
getWords();
//randomWord();
clickedLetter();
showLives();
wordsList();
 


// play = function () {
//      //goes through the first step of array categories and puts it in a variable 
//      choosenCategory = categories[Math.floor(Math.random() * categories.length)];
//      //goes through the second step of array categories and gets a random string from list 
//      word = choosenCategory[Math.floor(Math.random() * choosenCategory.length)];
//          
//      buttons();
//      //stores the words in a new empty array
//      guesses = [];
//      lives =10;
//      counter = 0;
     
//      //runs function wordsList 
//      wordsList();
//      //getCategory();
//      showLives();
     
// }
// play();

//function for getting the categories and randomizes the strings of array
// getCategory = () => {
//     //goes through the first step of array categories and puts it in a variable 
//     choosenCategory = categories[Math.floor(Math.random() * categories.length)];
//     //goes through the second step of array categories and gets a random string from list 
//     word = choosenCategory[Math.floor(Math.random() * choosenCategory.length)];
//     console.log(word);    
//     //stores the words in a new empty array
//     guesses = [];
//     //runs function wordsList 
//     wordsList();
// } 
//runs function getCategory



  
    //select the draw element
    
    //theDraw.classList.add(`wrong-${wrongAttempts}`);




// //function play again 
// playAgain = () => {
   
//     // correct.parentNode.removeChild(correct);
//     // letters.parentNode.removeChild(letters);

//     livesCounter();
//     clickedLetter();
//     buttons();
//     getCategory();
  
// };



// document.getElementById('play-again').addEventListener('click', playAgain);
 





























// letterList.addEventListener('click', () => {
//     console.log('hej');
// })




//function getting word randomizer
// randomWord = () => {
//     //gets words from array and randomize it 
//     chosenWord = words2[Math.floor(Math.random() * words2.length)];    
//     //console.log(chosenWord);

//     // for (let i = 0; i < words2.length; i++) {
//     //     for (let letters in words2) {
//     //         console.log(letters)
//     //     }
//     // }

//     // for (let words in categories) {
//     //     for (let i = 0; i < words.length; i++) {
//     //         console.log(words[i])
//     //         }
//     //     }


    

//     //att få ut arrays ur object 
//     // let allKeys = Object.keys(categories);
//     // let randomPropNumber = Math.floor(Math.random() * allKeys.length);
//     // let randomPropName = allKeys[randomPropNumber];
//     // let randomPropValue = categories[randomPropName];

//     // let randomValueNumber = Math.floor(Math.random() * randomPropValue.length);
//     // let randomValueValue = randomPropValue[randomValueNumber];
//     // console.log(randomPropValue[randomValueNumber]);
// }
// //kör randomWord
// randomWord();


//function getting word randomizer
// randomWord = () => {
//     let keys = Object.keys(categories);
//     //loops through length of objects in array
//     let objectsOfArray = Math.floor(Math.random()* keys.length);
//     //sets objects of array to its key
//     let objects = keys[objectsOfArray];
//     let objectValue = categories[objects];

//     //gets words from array and randomize it 
//     chosenWord = [Math.floor(Math.random() * objectValue.length)];

    
//     console.log(chosenWord);
// }
// //kör randomWord
// randomWord();






//function på vad som händer om en bokstav klickas på 
//if/else sats vid klick på bokstav 
//skapa ul lista där bokstäverna som är rätt läggs in i (createElement)
//i Html ska de tomma bokstäverna för ordet ersättas med bokstäver 

//---Randomizer 
//function randomWord() = gå igenom lista med ord och ge ut ett random
//loopa igenom alphabet.length för att kunna matcha 

//----Generate letters 
//Create a variable that creates span in html 
//Create variable that creates text node 
//Append letter as child to span so they connects 
//Add class on span (.className) so we can change in css 
//Append span to the letters container in html 




//----Eventlisteners
//En eventlistener för knapptryck på bokstav som går in i funktion x 

