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

//select letters container in html
window.onload= function(){
    var alphabet=[ 'a','b','c','d','e','f','g','h','i','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
}

const alphabet2 = [ 'a','b','c','d','e','f','g','h','i','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];



//----Functioner
//function på vad som händer om en bokstav klickas på 
//if/else sats vid klick på bokstav 
//skapa ul lista där bokstäverna som är rätt läggs in i (createElement)
//i Html ska de tomma bokstäverna för ordet ersättas med bokstäver 

//----Generate letters 
//function for getting the letters from array 
buttons = () => {
    letterButtons = document.getElementById('buttons');
    letters = document.createElement('ul');

    //loops through array of letters in alphabet2
    for (let i = 0; i < alphabet2.length; i++) {
        //adds new classname to ul list
        letters.className = 'alphabet';
        //creates a new li list 
        letterList = document.createElement('li');
        //adds new classname to li list
        letterList.className = 'letter';
        //adds the li list to innerhtml to the index of alphabet2 array
        letterList.innerHTML = alphabet2[i];
        //sets ul list to the child of id buttons in html
        letterButtons.appendChild(letters);
        //sets li list as child to ul 
        letters.appendChild(letterList);
    }
}

//kör funktionen buttons
buttons();


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



//---Randomizer 
//function randomWord() = gå igenom lista med ord och ge ut ett random
//loopa igenom alphabet.length för att kunna matcha 

//function getting word randomizer
randomWord = () => {
    //gets words from array and randomize it 
    chosenWord = words[Math.floor(Math.random() * words.length)];
    //kör buttons
    buttons();
    console.log(chosenWord);
}
//kör randomWord
randomWord();


// create storeguess ul
// result=function(){}

//function word holder
wordsList = () => {
    wordHolder = document.getElementById('word-holder');
    correct = document.createElement('ul');

    for (let i = 0; i < words.length; i++) {
        correct.className = 'my-word';
        guess = document.createElement('li');
        guess.className ='guess';
        guess.innerHTML = "_";

        storeguess.push(guess);
        wordHolder.appendChild(correct);
        correct.appendChild(guess);
    }
}

wordsList();


//----Generate letters 
//Create a variable that creates span in html 
//Create variable that creates text node 
//Append letter as child to span so they connects 
//Add class on span (.className) so we can change in css 
//Append span to the letters container in html 




//----Eventlisteners
//En eventlistener för knapptryck på bokstav som går in i funktion x 
