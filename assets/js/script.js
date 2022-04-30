// Password Generator 2000
//authored by Charissa Hollister 04/29/2022
//**************************** */


//---------Global variables-----------
var pwLength = "";
var password = "";
var chars = "";
var cp = "";
var sp = "";
// var charsUp = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// var charsLow = "abcdefghijklmnopqrstuvwxyz";
// var charsNum = "123456789";
// var charSC = "!@#$%^&*()";
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
function casePick(){
  var casePick = "";
  casePick = prompt('Would You Like to Include Uppercase, Lowercase, or Both?');
  casePick = casePick.toLowerCase();
    if (casePick === "uppercase") {
      chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      cp = "UC";
    }
    else if (casePick === "lowercase") {
      chars = "abcdefghijklmnopqrstuvwxyz";
      cp = "LC";
    }
    else if (casePick === "both") {
      chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
      cp = "UL";
    }
    else{
    window.alert("Must be entered as 'uppercase', 'lowercase', or 'both'");
    casePick();
  }
}


  //ask about numeric; yes charN = "123456789"
  //ask about special characters; "!@#$%^&*()"
function specialPick(){
  var specialPick = ""
  specialPick = prompt('Would You Like to Include Numbers, Special Characters (special), Neither, or Both?');
  specialPick = specialPick.toLowerCase();
    if (specialPick === "numbers") {
      chars = (chars + "123456789");
      sp = "NC";
    }
    else if (specialPick === "special") {
      chars = (chars + "!@#$%^&*()");
      sp = "SC";
    }
    else if (specialPick === "both") {
      chars = (chars + "123456789!@#$%^&*()");
      sp = "NS";
    }
    else if (specialPick === "neither"){
      chars = chars;
      sp = "NO";
    }
    else{
    window.alert("Must be entered as 'numbers', 'special', or 'both'");
    specialPick();
  }
}

function generatePassword() {
  pwPrompt();
  casePick();
  specialPick();
    for (var i = 0; i <= pwLength; i++) {
      var randoNum = Math.floor(Math.random() * chars.length);
      password += chars.substring(randoNum, randoNum + 1);
    };

    if (cp = "UC")



    
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