
var passwordLength;
var specialCharacter;
var numericCharacter;
var upperCaseCharacter;
var lowerCaseCharacter;
var baseCharacter ="";
var lowercase="abcdefghijklmnopqrstuvwxyz";
var uppercase="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers="0123456789";
var symbols="~!@#$%^&*()_+=-[]:{}|<>?/";


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// code for the prompt and confirm criteria to create password 
function writePassword() {
passwordLength = prompt("How many characters would you like your password to contain?");


//code  to check length of password is betwwen 8 and 128 also an integer
while ((passwordLength < 8 || passwordLength > 128) || (isNaN(passwordLength)))
    {
      passwordLength = prompt("Please enter valid password length between 8 to 128");
    }

lowerCaseCharacter = confirm("Click OK to confirm including lowercase characters.");
upperCaseCharacter = confirm("Click OK to confirm including uppercase characters.");
numericCharacter = confirm("Click OK to confirm including numeric characters.");
specialCharacter = confirm("Click OK to confirm including special characters.");

// code so that atleast one of the criteria is selected to create password 
while (lowerCaseCharacter==false && upperCaseCharacter==false && numericCharacter ==false && specialCharacter ==false)
  {
    alert("Please select atleast one category")
    lowerCaseCharacter = confirm("Click OK to confirm including lowercase characters.");
    upperCaseCharacter = confirm("Click OK to confirm including uppercase characters.");
    numericCharacter = confirm("Click OK to confirm including numeric characters.");
    specialCharacter = confirm("Click OK to confirm including special characters.");
  }


//code to check boolean value of inputs
// console.log(passwordLength);
// console.log(lowerCaseCharacter);
// console.log(upperCaseCharacter); 
// console.log(numericCharacter);
// console.log(specialCharacter);
  
var password = generatePassword();

//console.log(password); 
var passwordText = document.querySelector("#password");
passwordText.value = password;

}


function generatePassword()
  {
      password="";
      baseCharacter="";
      
      //code to check condtions required for the password and adding one character from required condtions
      if(lowerCaseCharacter==true)
        {
          baseCharacter = baseCharacter.concat(lowercase);
          password = password + lowercase[Math.floor(Math.random() * lowercase.length)];
        }

      if(upperCaseCharacter==true)
        {
          baseCharacter =baseCharacter.concat(uppercase);
          password = password + uppercase[Math.floor(Math.random() * uppercase.length)];
        }

      if(numericCharacter==true)
        {
          baseCharacter=baseCharacter.concat(numbers);
          password = password + numbers[Math.floor(Math.random() * numbers.length)];
        }

      if(specialCharacter==true)
        {
          baseCharacter=baseCharacter.concat(symbols);
          password = password + symbols[Math.floor(Math.random() * symbols.length)];
        }

      //code to add remaining characters into password randomly till password length between 8 to 128
      var reduceLoop = password.length;
      for(var i=0; i<(passwordLength - reduceLoop); i++)
        {   
           password = password + baseCharacter[Math.floor(Math.random() * baseCharacter.length)];
        }
 
       return password;

  }

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




