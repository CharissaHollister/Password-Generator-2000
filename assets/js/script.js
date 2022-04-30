// Password Generator 2000
//authored by Charissa Hollister 04/29/2022
//**************************** */


//---------variables-----------
var pwLength = "";
var password = "";
var charsUp = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var charsLow = "abcdefghijklmnopqrstuvwxyz";
var charsNum = "123456789";
var charSC = "!@#$%^&*()";
//-----------Code------------

//Ask for user input, password length
function pwPrompt(){
  pwLength = prompt('How Long Would You Like Your Password?');
  //validate answer is between 8 and 128
  if (pwLength < 8 || pwLength > 128) {
    window.alert("Password must be between 8 and 128 in length");
    pwPrompt();
  }
}

  //ask about lowercase; yes charL = "abcdefghijklmnopqrstuvwxyz"

  // ask about uppercase; yes charU = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  function casePick(){
    var casePick = ""
    casePick = prompt('Would You Like to Include Uppercase, Lowercase, or Both?');
    casePick = casePick.toLowerCase();
    if (casePick = "uppercase") {

    }
    else if (casePick = "lowercase") {

    }
    else if (casePick = "both") {

    }
    else{
    window.alert("Must be entered as 'uppercase', 'lowercase', or 'both'");
    casePick();
    }
  }


  //ask about numeric; yes charN = "123456789"

  //ask about special characters; "!@#$%^&*()"





function generatePassword() {
  var chars = "";
  pwPrompt();
  casePick();
  for (var i = 0; i <= pwLength; i++) {
    var randoNum = Math.floor(Math.random() * chars.length);
    password += chars.substring(randoNum, randoNum + 1);
    
  };
  return password
}


































// function random(min, max) {
//   const randoNum = Math.floor(Math.random() * (max - min + 1)) + min;
//   return randoNum;
// }
// random(0,9);

// function randoLetter(){
//   const list = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//   var res = "";
//   for(var i = 0; i < pwLength; i++) {
//       var rnd = Math.floor(Math.random() * list.length);
//       res = res + list.charAt(rnd);
//   }
//   return res;
// }







  //randomize uppercase and lowercase
    //if(uc = false)
      //change all letters to lowercase
    //else if(lc = true)
      //make first letter capital
      //make last letter lowercase
      //do mathrandom to decide upper (>0.5) and lower (<0.5) of all the ones in between first and last letters
      
//start function 

  //verify the user wants to create a password
    //yes continue, no break
  //ask what length they want
//var pwLength = prompt("How long would you like your password?");
  //check that it's between 8 and 128 
    //return what they picked
    //verify pass continue, fail loop back to request
  //ask what criteria they want
    //include lowercase?
        //ask if they want lowercase
        //return value yes/no
    //include uppercase?
        //ask if they want uppercase
        //return value yes/no
      //check that at least one letter case is true
        //if yes then continue
        //if none then user is sent back to select at least one
    //include numeric?
      //ask if they want numeric
      //return value yes/no
    //include special characters?
      //ask if they want special characters
      //return value yes/no
    //check that at least one is true
      //if yes then continue
      //if none then user is sent back to select at least one

  //confirm: summary of the criteria that will be used, continue or reselect?
    //
  
  //password is generated using the criteria
    //for-loop # of times equal to pwLength
      //figure out how to ensure all the criteria are included for sure
      //possibly count how many were yes and put them in a loop at fixed spots

    //return the new password

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