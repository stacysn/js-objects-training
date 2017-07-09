/*
  Create a function `letterCount` that accepts a string, and finds the number of times each letter
  occurs in the string. For example, given the word "apple", letterCount("apple") should count all
  occurrences of the letters "a", "p", "l" and "e" and then return the following output:

  ```javascript
  {
    "a": 1,
    "p": 2,
    "l": 1,
    "e": 1
  }
  ```

  Bonuses
  - Make sure that lower case letters and upper case letters count for the same character.
  - Ignore spaces, special characters, and punctuation.
  - Instead of just counting letters, calculate their percent-based frequency.
    See: http://www.math.cornell.edu/~mec/2003-2004/cryptography/subs/frequencies.html

    ```javascript
    {
      "a": 0.2, // percent
      "p": 0.4,
      "l": 0.2,
      "e": 0.2
    }
    ```
*/

// YOUR CODE HERE

function letterCount(string){
  var letters = {};
  var lowString = string.toLowerCase();
  for (var i = 0; i < lowString.length; i++){
    var letter = string[i];
    var alphabet = 'abcdefghijklmnopqrstuvwxyz'

    // console.log("BLAH", (letter in letters)); //other way to check if key present in object
    // console.log("ADDING HERE", letters.letter = 1);
    // console.log(letters[string[i]]);
    if (letters[lowString[i]] === undefined) {
      letters[lowString[i]] = 1;
      // console.log(letters);
    }
    else if (letters[lowString[i]] !== -1){
      letters[lowString[i]] += 1;
    }
  }
  console.log(letters);
}

letterCount("apPple");
