
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

