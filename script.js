// Assignment Code
var generateBtn = document.querySelector("#generate");

// var lowerCase = [abcdefghijklmnopqrstuvwxyz];
var lowerCase = ['a', 'b', 'c'];
// var upperCase = "ABCDEFGHIJKLMOPQRSTUVWXYZ";
var upperCase = ['A', 'B', 'C'];
// var numbers = "0123456789"; <- make sure these are strings
var numbers = ['0', '1', '2'];
// var special = "`~!@#$%^&*()_+-={}|[]\:;'<>,.?/'";
var special = ['!', '@'];

function getUsersPasswordOptions() {
    var passwordLength = parseInt(prompt('how long would you like your passsword to be?'), 10)

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

    var userPasswordOptions = {
      passwordLength: passwordLength,
      hasSpecChars: hasSpecChars,
      hasNumbers: hasNumbers,
      hasLower: hasLower,
      hasUpper: hasUpper,
    }
    return userPasswordOptions
}

function getRandomArrayElement(array) {
  var randomIndex = Math.floor(Math.random() * array.length)
  var randomElement = array[randomIndex]
  return randomElement
}

function generatePassword() {
  var options = getUsersPasswordOptions();

  var passwordResult = []

  var potentialChars = []

  var confirmedChars = []

  if (options.hasSpecChars) {
    potentialChars = potentialChars.concat(special)
    confirmedChars.push(getRandomArrayElement(special))
  }

  // same code block as above for every other type 


  // loop pver options.passwordLength lenfth sleected random arrray characrters to push in result 

  // loop over agaiun and mix in one guaranreed characer


  return passwordResult.join('')
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


