
//Array of roomWords
var roomWords = ['table', 'door', 'couch', 'window', 'carpet', 'tv', 'candle', 'books',
  'cup', 'light', 'shelf', 'curtains', 'wallcabinet','tvcabinet', 
];
var blanksAndSuccess = []; //Correct guesses 
var blanks = 0; 
var getHint ;
var currentWord = "";
var currentLetters = [];
var getHint ;  
// Counters
var winCounter = 0;
var lossCounter = 0;
var numGuesses = 12;
 var showClue = document.getElementById("clue");

var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j',
  'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
];

//array for users guessed letters
var guessedLetter = [];

var correctLetter = [];

var incorrectGuess = [];





var buttons = function() {
  //gets the alphabet button id from html
  var myButtons = document.getElementById('alphabet-btns');
  
  var letters = document.createElement('ul');


  //loops through the alphabet
  for (var i = 0; i < alphabet.length; i++) {

    let listItem = document.createElement('li');
    
    listItem = document.createElement('BUTTON');
    listItem.classList.add('btn-primary');

    listItem.innerHTML = alphabet[i];
    //appends listIem to my buttons
    myButtons.appendChild(listItem);
    listItem.dataset.alphabet = alphabet[i];


    listItem.onclick = function() {
      var userGuess = listItem.dataset.alphabet;     
      guessedLetter.push(userGuess);
      document.getElementById('guessed').innerHTML = "Letters Already Guessed: " + guessedLetter.join(" ");
      checkLetters(userGuess); // runs the code to check for correctness      
      round();
    }

  }
}

document.getElementById("gameStart").onclick = function() {buttons()};



function startGame() {
  numGuesses = 12;
  blanksAndSuccess = [];
  guessedLetter = [];
  incorrectGuess = [];
  currentWord = roomWords[Math.floor(Math.random() * roomWords.length)];

  //Splits the current word into letters, so that you can match the users guesses to the letters of the word
  currentLetters = currentWord.split("");

 
  blanks = currentLetters.length;
  for (var i = 0; i < blanks; i++) {
    blanksAndSuccess.push("_")
  }
  console.log(currentWord);
  document.getElementById('currentWord').innerHTML = "Find the missing letters: " + blanksAndSuccess.join(" ");
  document.getElementById('guessesRemaining').innerHTML = "Guesses left: " + numGuesses;
  document.getElementById('guessed').innerHTML = "Letters already guessed: "

}

//Checks if users letter is in the word
function checkLetters(letter) {
  //using Boolean to check if the letter is in the word
  var letterInWord = false;
  //loop that goes through the length of the word
  for (var i = 0; i < blanks; i++) {
    if (currentWord[i] == letter) {
      letterInWord = true;
    }
  }
  if (letterInWord) {
    for (var i = 0; i < blanks; i++) {

      if (currentWord[i] == letter) {
        blanksAndSuccess[i] = letter
      }
    }
    console.log(blanksAndSuccess);

  } else {
    incorrectGuess.push(letter);
    numGuesses--;
    console.log("that was incorrect " + numGuesses + " are remaining");
  }
}

//Upon finishing
function round() {

  console.log("WinCount: " + winCounter + " | LossCount: " + lossCounter + " | NumGuesses: " + numGuesses);

  // Update the HTML to reflect the new number of guesses. Also update the correct guesses.
  document.getElementById("guessesRemaining").innerHTML = "Number Of Guesses Remaining: " + numGuesses;
  document.getElementById("currentWord").innerHTML = "Find the missing letters: " + blanksAndSuccess.join(" ");
  document.getElementById("guessed" ).innerHTML = "Letters already guessed: " + incorrectGuess.join(" ");
   var getHint = document.getElementById("hint");
  var showClue = document.getElementById("clue");

  // If we have gotten all the letters to match the solution... 
  if (currentLetters.toString() == blanksAndSuccess.toString()) {
    winCounter++; // add to the win counter 
    document.getElementById("word").innerHTML = "The last word was " + currentWord;
    alert("You win! The word was " + currentWord); // give the user an alert   

    // Update the win counter in the HTML
    document.getElementById("winCounter").innerHTML = "You have won " + winCounter + " game(s)";
    startGame(); // restart the game 
  }

  // If we've run out of guesses
  else if (numGuesses == 0) {
    lossCounter++; // add to the loss counter 
    document.getElementById("word").innerHTML = "The last word was " + currentWord;

    alert("You lose. The word was " + currentWord); // give the user an alert

    // Update the loss counter in the HTML
    document.getElementById("lossCounter").innerHTML = "You have lost " + lossCounter + " game(s)";
    startGame(); // restart the game
  }
}

hint.onclick = function() { hints = [}
    ];

    var catagoryIndex = categories.indexOf(chosenCategory);
    var hintIndex = chosenCategory.indexOf(word);
    showClue.innerHTML = "Clue: - " +  hints [catagoryIndex][hintIndex];
  };


//Making the stuff run
//Calling the startGame function
startGame();
