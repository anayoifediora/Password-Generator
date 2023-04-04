// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  
  var passwordLength = parseInt(prompt("how long would you like your password to be?"));

  if (passwordLength < 8) {
    alert('password too short')
    return;
  }
  if (passwordLength > 128) {
    alert('password too long')
    return;
  }
  
  var hasSpecChars = confirm("click OK to confirm these characters")
  var hasNumbers = confirm("click OK to confirm numbers")
  var hasLower = confirm("click OK to confirm these lowercase characters")
  var hasUpper = confirm("click OK to confirm these uppercase characters")

  var lowercase = "abcdefghijklmnopqrstuvwxyz";
  var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numbers = "01233456789";
  var special = "!@#$%^&*()_+-={}[];:><?/.,";

  var allCharacters = "";

  if(hasLower) allCharacters += lowercase;
  if(hasUpper) allCharacters += upperCase;
  if(hasNumbers) allCharacters += numbers;
  if(hasSpecChars) allCharacters += special;

  let password = "";
 
  //used a for loop to generate random characters
  
  for (let i = 0; i < allCharacters.length; i++) {
    let randomIndex = Math.floor(Math.random() * allCharacters.length);
    let randomChar = allCharacters.charAt(randomIndex);

    password += randomChar;
  }

  
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)


