// Assignment code here
const generateBtn = document.querySelector("#generate");

function writePassword() {
  const passwordText = document.querySelector('#password');
  let pwLength = window.prompt('Enter how many characters you want for your password. Press 0 or cancel to exit.');
  while (!parseInt(pwLength) || parseInt(pwLength) < 8 || parseInt(pwLength) > 128) {
    if (pwLength === null || parseInt(pwLength) === 0) return;
    pwLength = window.prompt('Enter a valid number between 8 and 128');
  }
  const hasNumbers = window.confirm('Would you like to include numbers?');
  const hasUppercase = window.confirm('Would you like to include uppercase letters?');
  const hasLowercase = window.confirm('Would you like to include lowercase letters?');
  const hasSymbols = window.confirm('Would you like to include symbols?');
  //generate passwords
  const password = generatePassword(pwLength, hasNumbers, hasUppercase, hasLowercase, hasSymbols);
  passwordText.value = password;
}

function generatePassword(pwLength, hasNumbers, hasUppercase, hasLowercase, hasSymbols) {
  const symbolsList = '!@#$%^&*()_,+?/=';
  const numberList = '1234567890';
  const lowercaseList = 'abcdefghijklmnopqrstuvwxyz';
  const uppercaseList = lowercaseList.toUpperCase();
  let password = '';
  let newList = '';

  if (hasNumbers === true) {
    newList += numberList
  }
  if (hasUppercase === true) {
    newList += uppercaseList
  }
  if (hasLowercase === true) {
    newList += lowercaseList
  }
  if (hasSymbols === true) {
    newList += symbolsList
  }
  for (let i = 0; i < pwLength; i++) {
    let newListLength = newList.length;
    password += newList.charAt(Math.floor(Math.random() * newListLength));
  }
  return password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

