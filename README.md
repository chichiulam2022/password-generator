# Password Generator 

https://chichiulam2022.github.io/password-generator/

This project allows users to generate passwords between 8 and 126 characters by clicking a button, then input how many characters they want for their password, and choose if numbers, uppercase and lowercase letters, and other symbol symbols such as @, $, %, *, are included.

The project involves in JavaScript, which can access the HTML to manipulate the functionality and interaction between users and the page. Some examples of JavaScript used in this project as follows:

* `window.prompt()`
```JavaScript
let pwLength = window.prompt('Enter how many characters you want for your password. Press 0 or cancel to exit.');
```


* `while-loop`
```JavaScript
while (!parseInt(pwLength) || parseInt(pwLength) < 8 || parseInt(pwLength) > 126) {
    if (pwLength === null || parseInt(pwLength) === 0) return;
    pwLength = window.prompt('Enter a valid number between 8 and 126');
  }
 ```
 
 * `for-loop`
 ```JavaScript
 for (let i = 0; i < pwLength; i++) {
    let newListLength = newList.length;
    password += newList.charAt(Math.floor(Math.random() * newListLength));
  }
  ```
