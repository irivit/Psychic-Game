//var declaration

var win = 0;         // variable for amount of time that user wins
var losses =0;         // variable for amount of time that user lost
var guessesLeft =  9; // variable for the amunt of word that the user left to guest
var myLetter = ''; // variable to catch my letters
var letterSoFar = new Array();

var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",];

var compLetter = alphabet[Math.floor(Math.random() * alphabet.length)]; //generate a random letter
console.log(compLetter);


var reset = function(){
    guessesLeft = 9;
    letterSoFar = [];

    updateLetterSoFar();
    document.getElementById("left").innerHTML = guessesLeft;
    
    compLetter = alphabet[Math.floor(Math.random() * alphabet.length)];

    console.log(compLetter);

}

function updateLetterSoFar(){
    document.getElementById("letters").innerHTML = letterSoFar.join(', ');
}  

document.onkeyup =function(event){
    guessesLeft--;
    var myLetter = String.fromCharCode(event.keyCode).toLowerCase(); // store the letter pressed by user

 
    letterSoFar.push(myLetter);
    updateLetterSoFar();
      
    
    if (guessesLeft > 0){

        if (compLetter === myLetter){
            win++;
            document.getElementById("win").innerHTML = win;
            reset(); 
        }
    }else  {
        losses++;
        document.getElementById("loss").innerHTML = losses;        
        reset();
    }


}