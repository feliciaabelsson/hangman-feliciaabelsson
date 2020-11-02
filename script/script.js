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

//function for getting the letters from array 
buttons = () => {
    letterButtons = document.getElementById('buttons');
    letters = document.createElement('ul');

    for (let i = 0; i < alphabet2.length; i++) {
        letters.className = 'alphabet';
        letterList = document.createElement('li');
        letterList.className = 'letter';
        letterList.innerHTML = alphabet2[i];
        letterButtons.appendChild(letters);
        letters.appendChild(letterList);
    }
}

//kör funktionen buttons
buttons();


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
