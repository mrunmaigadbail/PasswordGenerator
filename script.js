
var passwordLength;
var specialCharacter;
var numericCharacter;
var upperCaseCharacter;
var lowerCaseCharacter;
var baseCharacter =[];
var lowercase=["abcdefghijklmnopqrstuvwxyz"];
var uppercase=["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
var numbers=["0123456789"];
var symbols=["~!@#$%^&*()_+=-[]:{}|<>?/"];
// var lowercase=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
// var uppercase=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
// var numbers=["0","1","2","3","4","5","6","7","8","9"];
// var symbols=["~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "=", "-", "[", "]",":", "{", "}", "|", "<", ">", "?", "/"];

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

// atleast one of the category is selected to create password 
while (lowerCaseCharacter==false && upperCaseCharacter==false && numericCharacter ==false && specialCharacter ==false)
{
  alert("Please select atleast one category")
  lowerCaseCharacter = confirm("Click OK to confirm including lowercase characters.");
  upperCaseCharacter = confirm("Click OK to confirm including uppercase characters.");
  numericCharacter = confirm("Click OK to confirm including numeric characters.");
  specialCharacter = confirm("Click OK to confirm including special characters.");
}

console.log(passwordLength);
console.log(lowerCaseCharacter);
console.log(upperCaseCharacter); 
console.log(numericCharacter);
console.log(specialCharacter);
  
  var password = generatePassword();

   console.log(password); 
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
console.log(passwordText);
}

function generatePassword()
{
  password="";

  baseCharacter="";
if(lowerCaseCharacter==true)
{
  baseCharacter = baseCharacter.concat(lowercase);
}
if(upperCaseCharacter==true)
{
  baseCharacter =baseCharacter.concat(uppercase);
  }
if(numericCharacter==true)
{
  baseCharacter=baseCharacter.concat(numbers);
}
if(specialCharacter==true)
{
  baseCharacter=baseCharacter.concat(symbols);
}
console.log(baseCharacter);
for(var i=0; i<passwordLength; i++)
  {
    password = password + baseCharacter[Math.floor(Math.random() * baseCharacter.length)];
  }

 console.log(password);
 return password;
// password="";
// baseCharacter="";
// for(var i=0; i<=passwordLength; i++)
// {

// }

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




