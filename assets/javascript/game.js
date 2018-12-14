window.onload = function() {
  // setting up variables to be used and alphabet array
var guess;
var guessed = [];
var wins = 0;
var losses = 0;
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// setting initial guessesLeft and generating random GuessTarget number
var guessesLeft = 9;
var guessTarget = alphabet[Math.floor(Math.random() * alphabet.length)];
console.log("guessTarget " + guessTarget);

// ============================================== Note: the next two commented sections are not working, I am adding them in order to have someone look at the page and give feedback.  rest of page works if they are cut out.========================================

// setting up variables for html ids
var winCountHTM = document.getElementById("winCount");
var lossCountHTM = document.getElementById("lossCount");
var guessesLeftHTM = document.getElementById("guessesLeft");
var guessedHTM = document.getElementById("guessed"); 

// adding initial textcontent
winCountHTM.textContent = "Wins: ";
lossCountHTM.textContent = "Losses: ";
guessesLeftHTM.textContent = "Guesses Left: 9";
guessedHTM.textContent = "Your Guesses So Far:";


// setting up function to occur when button pressed. recording keystroke in var "guess"
document.onkeyup = function (event) {
  var guess = event.key;
  console.log("user guessed " + guess);

  // checking whether user typed a letter.
  var isLetter = alphabet.includes(guess);
  console.log("is letter: " + isLetter);

  // adding to win if guessed, updating html counter, then resetting guessesLeft to nine, updating html guesses left, emptying guessed array, resetting html guessed list; establishing new guessTarget
  if (isLetter) {
    if (guess === guessTarget) {
      alert("You got it!");
      wins++;
      winCountHTM.textContent = "Wins: "+wins;
      console.log("wins: " + wins);
      guessesLeft = 9;
      guessesLeftHTM.textContent = "Guesses Left: "+guessesLeft;
      guessed = [];
      guessedHTM.textContent = "Your Guesses So Far:";
      guessTarget = alphabet[Math.floor(Math.random() * alphabet.length)];
      console.log("Guess target: " + guessTarget)
    }

    // subtracting from guessesLeft is not guessed, updating html guessesleft counter, pushing guessed letter to guessed array, updating html list for guesses left, then if guessesLeft=0 adding to losses, updating html for losses, resetting guessesLeft to 9, updating html guessesleft, resetting guessed arrary; clearing html guessed list; establishing new guessTarget
    else {
      guessesLeft--;
      console.log("guesses left " + guessesLeft);
      guessesLeftHTM.textContent = "Guesses Left: "+guessesLeft;
      guessed.push(guess);
      console.log("letters guessed: " + guessed);
      guessedHTM.textContent = "Your Guesses So Far: "+guessed;
      if (guessesLeft === 0) {
        losses++;
        console.log("losses: " + losses);
        lossCountHTM.textContent = "Losses: "+losses;
        guessesLeft = 9;
        guessesLeftHTM.textContent = "Guesses Left: "+guessesLeft;
        guessed = [];
        guessedHTM.textContent = "Your Guesses So Far:";
        guessTarget = alphabet[Math.floor(Math.random() * alphabet.length)];
        console.log("guess target: " + guessTarget);
      }
    }

  }

  // else in case button pressed is not letter.
  else (
    alert("you must press a letter key.")
  )
}

 }