// The Password generator will provide a password with 8-128  characters based on criteria the user specifies.

// Assignment Code 
var generateBtn = document.querySelector("#generate")
// Add event listener to generate button 
generateBtn.addEventListener("click", writePassword);


// Various strings for passwords
number = String.fromCharCode(Math.floor(Math.random() * 10) + 48);
symbol = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~"];
lowerChar = String.fromCharCode(Math.floor(Math.random() * 26) + 97);
upperChar = String.fromCharCode(Math.floor(Math.random() * 26) + 65)

// Variable Declaration 
var confirmLength = "";
var confirmSymbolCharacter;
var confirmNumericCharacter;
var confirmUpperCase;
var confirmLowerCase;

// Prompt to confirm how many characters the user would like in their password
function generatePassword() {
  var confirmLength = (prompt("How many characters between 8 - 128 will your password to contain?"));

  // Loop if answer is outside the parameters 
  while(confirmLength <= 7 || confirmLength >= 129) {
      alert("Password length must be between 8-128 characters Try again");
      var confirmLength = (prompt("How many characters between 8 - 128 will your password contain?"));
      } 

    // Determine parameters of password 
    var confirmSymbolCharacter = confirm("Will your password include symbols?");
    var confirmNumericCharacter = confirm("Will your password include numbers?");    
    var confirmLowerCase = confirm("Will your password include lowercase characters?");
    var confirmUpperCase = confirm("Will your password include uppercase characters?");
     
    // Loop if answer is outside the parameters 
      while(confirmUpperCase === false && confirmLowerCase === false && confirmSymbolCharacter === false && confirmNumericCharacter === false) {
        alert("You must choose at least one answer");
        var confirmSymbolCharacter = confirm("Will your password include symbols?");
        var confirmNumericCharacter = confirm("Will your password include numbers");    
        var confirmLowerCase = confirm("Will your password include lowercase characters?");
        var confirmUpperCase = confirm("Will your password include uppercase characters?");   
    } 

      // Assign an action to the password parameters. Concat method joins passwordCharacters and specialChar/number/lowerChar,upperChar and returns new array
      // Conditional statement only executed if expression is true 
      var passwordCharacters = [] //create empty string 
      
    if (confirmSymbolCharacter) {
      passwordCharacters = passwordCharacters.concat(symbol) 
    }

    if (confirmNumericCharacter) {
      passwordCharacters = passwordCharacters.concat(number)
    }
      
    if (confirmLowerCase) {
      passwordCharacters = passwordCharacters.concat(lowerChar)
    }

    if (confirmUpperCase) {
      passwordCharacters = passwordCharacters.concat(upperChar)
    }

      console.log(passwordCharacters)

      // Empty string to be filled based on for loop selecting random characters from the password variables 
      var randomPassword = []
      
      // For loop starts at 0, runs while i is less than length of variable confirmLength
      // Get a random number and multiply that random number times our passwordCharacters
      // Get a random number between 0 and the password characters and making sure it is an integer by doing math.floor and this gives random password
      for (var i = 0; i < confirmLength; i++) {
        randomPassword = randomPassword + passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
        console.log(randomPassword)
      }
      return randomPassword;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

