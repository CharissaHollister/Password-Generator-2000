// Password Generator 2000
//authored by Charissa Hollister 04/29/2022
//**************************** */


//click button
//prompt "would you like to generate a password?"
//alert telling them which criteria they will be allowed to choose from
//request password length
//include lowercase?
//include uppercase?
//include numeric?
//include special characters?
//if none selected then user is sent back to select at least one
//confirm: summary of the criteria that will be used, continue or reselect?
//password is generated using the criteria
//password is displayed in Secure Password box












// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);