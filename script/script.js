
//select letters container in html
window.onload= function(){
    var alphabet=[ 'a','b','c','d','e','f','g','h','i','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
}
//----Variabler
var categori;
var word;
var lives;
var guess;
var storeguess;
var showlives=
document.getElementById("mylives");
var showClue= document.getElementById("clue");

//the words that will be randomized 
let words = ['ord1','ord2','ord3','ord4'];

//let words = lista med ord

//let alphabet = 'a','b','c';
//the letters that will act as buttons in html
//let lettersContainer = document.querySelector('.letters');


//----Functioner
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

var buttons= function( ){
    myButtons=document.getElementById('buttons');
    letters=document.createElement('ul');
    for (var i=0; i<alphabet.length; i++){
        letters.id='alphabet';
        ListeningStateChangedEvent.innerHtml=alphabet[i];
        check();
        myButtons.appendChild(letters);
        letters.appendChild(list);
    }
}

// create storeguess ul
result = function () {
    wordHolder = document.getElementById('hold');
    correct = document.createElement('ul');

    for (var i = 0; i < word.length; i++) {
      correct.setAttribute('id', 'my-word');
      guess = document.createElement('li');
      guess.setAttribute('class', 'guess');
      if (word[i] === "-") {
        guess.innerHTML = "-";
        space = 1;
      } else {
        guess.innerHTML = "_";
      }

      geusses.push(guess);
      wordHolder.appendChild(correct);
      correct.appendChild(guess);
    }
  }
   // Animate man
   var animate = function () {
    var drawMe = lives ;
    drawArray[drawMe]();
  }
  
    

//----Eventlisteners
//show lives
Comment=function(){
    showlives.innerHTML="you have"+ lives +"lives";
    if (lives<1){
        showlives.innerHTML="Game Over";

    }
    for(var i=0;i< storeguess.length;i++){
        if(counter+space ===geusses.length){
            showlives.innerHTML="You Win"
        }
        
    }
}
//En eventlistener för knapptryck på bokstav som går in i funktion x 
