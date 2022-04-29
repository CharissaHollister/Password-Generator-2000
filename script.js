// Password Generator 2000
//authored by Charissa Hollister 04/29/2022
//**************************** */


//---------variables-----------

// var nums = [1,2,3,4,5,6,7,8,9];
// var alphas = [a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z];
// var spChars = ["!","#","$","*","."];

// var lc = "abcdefghijklmnopqrstuvwxyz";
// var uc = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// var no = "0123456789";

//-----------Code------------


//start function 

  //verify the user wants to create a password
    //yes continue, no break
  //ask what length they want
var pwLength = prompt("How long would you like your password?");
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