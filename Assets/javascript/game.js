let letters= ["a", "b",
"c",
"d",
"e",
"f",
"g",
"h",
"i",
"j",
"k",
"l",
"m",
"n",
"o",
"p",
"q",
"r",
"s",
"t",
"u",
"v",
"w",
"x",
"y",
"z"]

let guessedLetters = [];
let letterToGuess =null;
let left = 9;
let wins = 0;
let losses = 0;

function updateLetterToGuess(){
    guessedLetters[Math.floor(Math.random() * letters.length)]; 
} 

function updateGuessesLeft(){
    document.querySelector("#left").innerHTML = "Guesses left: " + left;
}

function updateGuessesSoFar(){
    document.querySelector("#guesses").innerHtml = guessedLetters.join(",");
}


let reset = function(){
    left = 9;
    guessedLetters = [];
    updateGuessesLeft();
    updateLetterToGuess();
    updateGuessesSoFar();

    
}
document.onkeydown = function(event){
    left--;

    let letter = event.key.toLowerCase();
    guessedLetters.push(letters);
    updateGuessesLeft();
    updateLetterToGuess();

    if (letters === letterToGuess){
            wins++;
            document.querySelector("#wins").innerHTML = "wins: " + wins;
            reset();
    }
    if (left === 0){
        losses++;
        document.querySelector("#losses").innerHTML = "Losses: " + losses;
        reset();
    }
};