
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

//the words that will be randomized // Create an array of words
var words = [
    "javascript",
    "monkey",
    "amazing",
    "pancake",
    "galvainze",
    "cohort",
    "concatenate",
    "iteration",
    "index",
    "code",
    "angular",
    "react",
    "python"
    ];

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
      
  

      // Animate man
      var animate = function () {
        var drawMe = lives ;
        drawArray[drawMe]();
      }
    
      
       // Hangman
      canvas =  function(){
    
        myStickman = document.getElementById("stickman");
        context = myStickman.getContext('2d');
        context.beginPath();
        context.strokeStyle = "#fff";
        context.lineWidth = 2;
      };
      
        head = function(){
          myStickman = document.getElementById("stickman");
          context = myStickman.getContext('2d');
          context.beginPath();
          context.arc(60, 25, 10, 0, Math.PI*2, true);
          context.stroke();
        }
        
      draw = function($pathFromx, $pathFromy, $pathTox, $pathToy) {
        
        context.moveTo($pathFromx, $pathFromy);
        context.lineTo($pathTox, $pathToy);
        context.stroke(); 
    }
    
       frame1 = function() {
         draw (0, 150, 150, 150);
       };
       
       frame2 = function() {
         draw (10, 0, 10, 600);
       };
      
       frame3 = function() {
         draw (0, 5, 70, 5);
       };
      
       frame4 = function() {
         draw (60, 5, 60, 15);
       };
      
       torso = function() {
         draw (60, 36, 60, 70);
       };
      
       rightArm = function() {
         draw (60, 46, 100, 50);
       };
      
       leftArm = function() {
         draw (60, 46, 20, 50);
       };
      
       rightLeg = function() {
         draw (60, 70, 100, 100);
       };
      
       leftLeg = function() {
         draw (60, 70, 20, 100);
       };
      
      drawArray = [rightLeg, leftLeg, rightArm, leftArm,  torso,  head, frame4, frame3, frame2, frame1]; 
    
    
      // OnClick Function
       check = function () {
        list.onclick = function () {
          var geuss = (this.innerHTML);
          this.setAttribute("class", "active");
          this.onclick = null;
          for (var i = 0; i < word.length; i++) {
            if (word[i] === geuss) {
              geusses[i].innerHTML = geuss;
              counter += 1;
            } 
          }
          var j = (word.indexOf(geuss));
          if (j === -1) {
            lives -= 1;
            comments();
            animate();
          } else {
            comments();
          }
        }
      }
      
     
  // Play
  play = function () {  
    var words = [
        "javascript",
        "monkey",
        "amazing",
        "pancake",
        "galvainze",
        "cohort",
        "concatenate",
        "iteration",
        "index",
        "code",
        "angular",
        "react",
        "python"
        ];
        
// Pick a random word
var word = words[Math.floor(Math.random() * words.length)];

// Set up the amswer answerArrayvar answerArray = [];
for (var i = 0; i < word.length; i++) {
  answerArray[i] = "_";
}

var remainingLetters = word.length;

        geusses = [ ];
        lives = 10;
        counter = 0;
        space = 0;
        result();
        comments();
        selectCat();
        canvas();
      }
    
      play();
            
}
//En eventlistener för knapptryck på bokstav som går in i funktion x 
