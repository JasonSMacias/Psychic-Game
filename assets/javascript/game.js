// setting up variables to be used and alphabet array
var guess;
var guessed = [];
var alphabet = ["a","b","c","d","e","f","g","h","i","j","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
// setting initial guessesLeft and generating random GuessTarget number
var guessesLeft = 9;
var guessTarget = alphabet[Math.floor(Math.random() * alphabet.length)];
console.log("guessTarget "+guessTarget);
// setting up function to occur when button pressed. recording keystroke in var "guess"
document.onkeyup = function(event) {
  var guess = event.key;
  console.log("user guessed " + guess);

// checking whether user typed a letter.
  var isLetter = alphabet.includes(guess);
  console.log(isLetter);

  if (isLetter) {
    console.log("user typed a letter");
  }

  else (
    alert("you must press a letter key.")
  )
}
