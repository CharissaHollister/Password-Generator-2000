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
var charsG = "";


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


  // ask about uppercase; yes charU = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
function charPick1(){
  var charPick1YN = "";
  charPick1YN = prompt('Would You Like to Include Uppercase? Yes or No');
  charPick1YN = charPick1YN.toLowerCase();
    if (charPick1YN === "yes") {
      chars = charsUp; 
        var randoNum = Math.floor(Math.random() * charsUp.length);
        charsG += charsUp.substring(randoNum, randoNum + 1);
        //charsG += charsUp.charAt(randoNum);
    }
    else if (charPick1YN === "no") {
      chars = chars;
    }
    else {
    window.alert("Must be entered as 'yes', 'no'");
    charPick1();
    }
}
  //ask about lowercase; yes charL = "abcdefghijklmnopqrstuvwxyz"
function charPick2(){
  var charPick2YN = "";
  charPick2YN = prompt('Would You Like to Include lowercase? Yes or No');
  charPick2YN = charPick2YN.toLowerCase();
    if (charPick2YN === "yes") {
      chars = chars + charsLow;
      var randoNum = Math.floor(Math.random() * charsLow.length);
      charsG += charsLow.substring(randoNum, randoNum + 1);
    }
    else if (charPick2YN === "no") {
      chars = chars;
    }
    else {
    window.alert("Must be entered as 'yes', 'no'");
    charPick2();
    }
}
  //ask about numeric; yes charN = "123456789"
function charPick3(){
    var charPick3YN = "";
    charPick3YN = prompt('Would You Like to Include Numbers? Yes or No');
    charPick3YN = charPick3YN.toLowerCase();
      if (charPick3YN === "yes") {
        chars = chars + charsNum;
        var randoNum = Math.floor(Math.random() * charsNum.length);
        charsG += charsNum.substring(randoNum, randoNum + 1);
      }
      else if (charPick3YN === "no") {
        chars = chars;
      }
      else {
      window.alert("Must be entered as 'yes', 'no'");
      charPick3();
      }
}
  //ask about special characters; "!@#$%^&*()"
function charPick4(){
    var charPick4YN = "";
    charPick4YN = prompt('Would You Like to Include Special Characters? Yes or No');
    charPick4YN = charPick4YN.toLowerCase();
      if (charPick4YN === "yes") {
        chars = chars + charSC;
        var randoNum = Math.floor(Math.random() * charSC.length);
        charsG += charSC.substring(randoNum, randoNum + 1);
      }
      else if (charPick4YN === "no") {
        chars = chars;
      }
      else {
      window.alert("Must be entered as 'yes', 'no'");
      charPick4();
      }
}

function onePick(){
  if (charsG.length < 1 ){
      window.alert("Must Choose at Least One Character Type");
      generatePassword();
    }
}

//check if password has all the requirements
// function pwIsVal() {
//   pwValid = prompt("Your New Password is " + password + " Would you like to continue? Yes or No");
//   pwValid = pwValid.toLowerCase();
//   if (pwValid === "yes") {
//     return password
//   }
//   else if (pwValid === "no") {
//     generatePassword()
//   }
//   else{
//   window.alert("Must be entered as 'yes' or 'no'");
//   pwValid();
//   }
// }


function generatePassword() {
  password = "";
  pwPrompt();
  charPick1();
  charPick2();
  charPick3();
  charPick4();
  onePick();
  var remainNums = (pwLength - charsG.length);
    for (var i = 0; i <= remainNums; i++) {
      var randoNum = Math.floor(Math.random() * chars.length);
      password += chars.substring(randoNum, randoNum + 1);
    };
    password += charsG;
  //pwIsVal();
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