// Password Generator 2000
//authored by Charissa Hollister 04/29/2022
//**************************** */


//---------Global variables-----------
var pwLength = "";
var password = "";
var chars = "";
var cp = "";
var sp = "";
var charsUp = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var charsLow = "abcdefghijklmnopqrstuvwxyz";
var charsNum = "123456789";
var charSC = "!@#$%^&*()";
//-----------Code------------

//Ask for user input, password length
function pwPrompt(){
  pwLength = prompt('How Long Would You Like Your Password?');
  //validate answer is between 8 and 128
  if (pwLength < 8 || pwLength > 128){
    window.alert("Password must be between 8 and 128 in length");
    pwPrompt();
  }
  if (isNaN(pwLength)) {
    window.alert("Password must be a number");
    pwPrompt();
  }
}

  //ask about lowercase; yes charL = "abcdefghijklmnopqrstuvwxyz"
  // ask about uppercase; yes charU = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
function casePick1(){
  //var casePick = "";
  var casePick = prompt('Would You Like to Include Uppercase, Lowercase, or Both?');
  casePick = casePick.toLowerCase();
    if (casePick === "uppercase") {
      chars = charsUp;
    }
    else if (casePick === "lowercase") {
      chars = charsLow;
    }
    else if (casePick === "both") {
      chars = charsUp + charsLow;
    }
    else {
    window.alert("Must be entered as 'uppercase', 'lowercase', or 'both'");
    casePick1();
    }
 
}


  //ask about numeric; yes charN = "123456789"
  //ask about special characters; "!@#$%^&*()"
function specialPick(){
  var specialPick = ""
  specialPick = prompt('Would You Like to Include Numbers, Special Characters (special), Neither, or Both?');
  specialPick = specialPick.toLowerCase();
    if (specialPick === "numbers") {
      chars = (chars + charsNum);
    }
    else if (specialPick === "special") {
      chars = (chars + charSC);
    }
    else if (specialPick === "both") {
      chars = (chars + charSC + charsNum);
    }
    else if (specialPick === "neither"){
      chars = chars;
    }
    else{
    window.alert("Must be entered as 'numbers', 'special', or 'both'");
    specialPick();
  }
}

// check if password has all the requirements
// function isValidPassword() {
//   pwValid = prompt("Your New Password is " + password + " Would you like to continue? Yes or No");
//   pwValid = pwValid.toLowerCase();
//   if (pwValid === "yes") {
//     password = password;
//   }
//   else if (pwValid === "no") {
//     password = "";
//   }
//   else{
//   window.alert("Must be entered as 'yes' or 'no'");
//   pwValid();
//   }
// }


function generatePassword() {
  pwPrompt();
  casePick1();
  specialPick();
    for (var i = 0; i <= pwLength; i++) {
      var randoNum = Math.floor(Math.random() * chars.length);
      password += chars.substring(randoNum, randoNum + 1);
    };
  //isValidPassword();
  return password
}

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