// Complete the game using ONLY JavaScript! You can't change any other file ❌ READ the instructions a couple of times

// 1. Create an array of three random numbers between 0 and 9.
const secretNumber = [/* Your code goes here */]
fdaf
// When you are done, uncomment the following code to check the array. You might want to know the secret number while programming
// to make sure you are doing it right. Comment the line when you are finished to fairly play the game.
// console.log('Secret number', secretNumber);

// 2. Write a variable 'attempts' and assign it to 0. It will keep track of the attempts of the user.
/* Your code goes here */

// 3. Complete the function with the following steps:
function attemptSecretNumber() {
  // Start of the function

  // 3.0. Everytime this function is called, the value of the variable 'attempts' should be incremented by 1.
  /* Your code goes here */

  // 3.1. Get all the inputs from the document and store them in a 'guesses' variable.
 /* Your code goes here */

  // 3.2. Create a new variable called 'guessArr' where you will later store the value of each input. Initialize it as an empty array.
 /* Your code goes here */

  // 3.3. Store the VALUE of each input found in the 'guesses' array, in the new guessArr. 
  // 👀 Hint: Remember that you can't iterate through an HTML collection. You might need to do something before.
  // 👀 Hint: The value stored in the guessArr should be a NUMBER. Even when an input is of type='number', the value received is a string.
  // 👀 When you are done, console.log(guessArr) to make sure you are doing it right. Expected output example: [7,2,3];
  /* Your code goes here */


  // 3.4. Create a variable called 'howManyAreRight' and initialize it to 0. It will later store how many attempts the user has gotten right.
  /* Your code goes here */


  // 3.5. For each element in the guessArr array, CHECK 2 DIFFERENT THINGS:
  guessArr.forEach((number) => {
  // FIRST IF:
  // If the value exists in the secretNumber array AND is in the same position as the user's attempt => console.log('Number X is right and in the right position 🟢'). Only in this case, howManyAreRight should be incremented by 1.
  // If the value exists in the secretNumber array => console.log('Number X is right but in the wrong position 🟠')
  // If the value doesn't exist in the secretNumber array => console.log('Number X is not one of the secret numbers 🔴')
  // 👀 Hint: you might want to check the indexes of both numbers in the arrays

  /* Your code goes here */

  // SECOND IF:
  // If the variable howManyAreRight equals 3, alert the user the following message: 'Omg you win 🎉🎉!'
  /* Your code goes here */

  });

  // 3.6. Select the span where the attempts are shown and print in the HTML how many attempts the user has tried so far.
  // Remember you declared a variable before for that.

  /* Your code goes here */

  // 3.7. If the user gets to 10 attempts:
  // Alert the user the following message: 'You lose 🥲. The secret number was X, X, X!'
  // Disable the button. You can do that by selecting it and then applying => setAttribute('disabled', 'true')
 
  /* Your code goes here */


  // END of the function.
}