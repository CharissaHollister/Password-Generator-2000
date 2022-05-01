// Password Generator 2000
//authored by Charissa Hollister 04/29/2022
//**************************** */


//---------Global variables-----------
var pwLength = "";
var password = "";
var chars = "";
var charsUp = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var charsLow = "abcdefghijklmnopqrstuvwxyz";
var charsNum = "123456789";
var charSC = "!@#$%^&*()";
var charsG = "";


//-----------Code------------

//Ask for user input: password length
function pwPrompt(){
  pwLength = prompt('How Long Would You Like Your Password?');
  //validate answer is between 8 and 128
  if (pwLength < 8 || pwLength > 128){
    window.alert("Password must be between 8 and 128 in length");
    pwPrompt();
  }
  //validate answer is a number
  if (isNaN(pwLength)) {
    window.alert("Password must be a number");
    pwPrompt();
  }
}

// ask if they would like to include a specific criteria: yes or no
function charPick(type, charType){
  var charPickYN = "";
  charPickYN = prompt('Would You Like to Include ' + type + ' Yes or No');
  charPickYN = charPickYN.toLowerCase();
    if (charPickYN === "yes") {
      chars += charType; 
        var randoNum = Math.floor(Math.random() * charType.length);
        charsG += charType.substring(randoNum, randoNum + 1);
    }
    else if (charPickYN === "no") {
      chars = chars;
    }
    else {
    window.alert("Must be entered as 'yes', 'no'");
    charPick(type, charType);
    }
}

//Check that at least one char type was "yes"
function onePick(){
  if (charsG.length < 1 ){
      window.alert("Must Choose at Least One Character Type");
    password = "";
    chars = "";
      generatePassword();
    }
}

//check if the end user likes the password generated: yes or no
function pwIsVal() {
    pwValid = prompt("Your New Password is " + password + " Would you like to continue? Yes or No");
    pwValid = pwValid.toLowerCase();
    if (pwValid === "yes") {
        //password = password;
    }
    else if (pwValid === "no") {
      createPassword();
    }
    else{
    window.alert("Must be entered as 'yes' or 'no'");
    pwIsVal();
    }
  }

//password created using only criteria selected and with 1 of each type
function createPassword() {
    password = "";
        var remainNums = (pwLength - charsG.length);
    for (var i = 0; i <= remainNums; i++) {
            var randoNum = Math.floor(Math.random() * chars.length);
            password += chars.substring(randoNum, randoNum + 1);
    };
    password += charsG;
    pwIsVal();
}

//overall function to initiate password generation via button click
function generatePassword() {
chars = 1'';
  pwPrompt();
  charPick("Uppercase", charsUp);
  charPick("Lowercase", charsLow);
  charPick("Numbers", charsNum);
  charPick("Special Character", charSC);
  onePick();
  createPassword();
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


// Get references to the #copy to clipboard element
var copyTextBtn = document.querySelector("#copyTextBtn");
// Add event listener to copy to clipboard button
copyTextBtn.addEventListener('click', function(event) {
    let copyTextarea = document.querySelector('#password');
    copyTextarea.focus();
    copyTextarea.select();
    let successful = document.execCommand('copy');
        if (successful){
            window.alert("Password Copied to Clipboard");
        }
        else{
            window.alert("Password Not Copied");
        }

});
