//var declaration

var win = 0;         // variable for amount of time that user wins
var losses =0;         // variable for amount of time that user lost
var guessesLeft = 9; // variable for the amunt of word that the user left to guest
var myLetter = ''; // variable to catch my letters
var letterSoFar = new Array();

var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",];

var compLetter = alphabet[Math.floor(Math.random() * alphabet.length)]; //generate a random letter



var reset = function(){
    guessesLeft = 9; //reset guesses lef
    letterSoFar = []; // reste the array

    updateLetterSoFar(); //show the array so far
    updateGuessesLeft(); //update guesses left
    
    compLetter = alphabet[Math.floor(Math.random() * alphabet.length)]; //generate a new letter from my alphabet
}


// this function update the letter pressed by the user
function updateLetterSoFar(){
    document.getElementById("letters").innerHTML = letterSoFar.join(', ');
}  


//this function update the guesses letters so far
function updateGuessesLeft(){
    document.getElementById("left").innerHTML = guessesLeft; 
}



document.onkeyup =function(event){
    guessesLeft--; 
    var myLetter = String.fromCharCode(event.keyCode).toLowerCase(); // store the letter pressed by user

 
    letterSoFar.push(myLetter); //add a new letter to the array of letter pressed by user
    updateLetterSoFar(); //call function to update the array
      
    if (compLetter === myLetter){ //compare if the first letter pressed is equal to the letter generated from alphabet
        win++;  
        document.getElementById("win").innerHTML = win; //update the win
        reset();  // call the function to clean my variables
    }else if(guessesLeft > 0){ //if the letter are differents ask for my left oportunities
        updateGuessesLeft(); //call the function to update left oportunities 
    }else{
        losses++; //increment the variables losses
        document.getElementById("loss").innerHTML = losses; //update the losses on html  
        reset(); // call the function to clean my variables
    }

}