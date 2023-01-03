(function () {
  "use strict";

  // ---------------------
  // Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript.
  // ---------------------

  // Calculates the larger of two numbers
  // num1 is a Number to compare
  // num2 is a Number to compare
  // returns the larger number
  function max(num1, num2) {
    if (num1 > num2) {
      return num1;
    } else {
      return num2;
    }
  }

  // ---------------------
  // Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
  // ---------------------

  // Calculates the larger of three numbers
  // num1 is a Number to compare
  // num2 is a Number to compare
  // num3 is a Number to compare
  // returns the largest number
  function maxOfThree(num1, num2, num3) {
    return Math.max(num1, num2, num3);
  }

  // ---------------------
  // Define a function isVowel() that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
  // ---------------------

  // Determines if a character is a vowel
  // letter is a String of length 1 to compare
  // returns a boolean
  function isVowel(letter) {
    const vowels = ["a", "e", "i", "o", "u"];
    for (let i = 0; i < vowels.length; i++) {
      if (letter == vowels[i]) {
        return true;
      }
    }
    return false;
  }
  // ---------------------
  // Write a function rovarspraket() that will translate a text into "rövarspråket". That is, double every consonant and place an occurrence of "o" in between. For example, translate("this is fun") should return the string "tothohisos isos fofunon".
  // ---------------------

  // Translates a text into "rövarspråket"/Doubles every consonant and place an occurrence of "o" in between
  // textToTranslate is a String to translate
  // returns a String
  function rovarspraket(textToTranslate) {
    const vowelsAndSpace = ["a", "e", "i", "o", "u", " "];
    const textToTranslateArray = [...textToTranslate];
    let translatedText = "";

    for (let i = 0; i < textToTranslateArray.length; i++) {
      if (!vowelsAndSpace.includes(textToTranslateArray[i])) {
        translatedText +=
          textToTranslateArray[i] + "o" + textToTranslateArray[i];
      } else {
        translatedText += textToTranslateArray[i];
      }
    }
    return translatedText;
  }
  // ---------------------
  // Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) should return 24.
  // ---------------------

  // Adds up all the numbers in an array
  // nums is an array of Numbers
  // returns a Number
  function sum(nums) {
    let total = 0;
    for (let i = 0; i < nums.length; i++) {
      total += nums[i];
    }
    return total;
  }

  // Multiplies all the numbers in an array
  // nums is an array of Numbers
  // returns a Number
  function multiply(nums) {
    let product = 1;
    for (let i = 0; i < nums.length; i++) {
      product *= nums[i];
    }
    return product;
  }

  // ---------------------
  // Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".
  // ---------------------

  // Reverses a String
  // textToReverse is a String
  // returns a String
  function reverse(textToReverse) {
    const textArray = [...textToReverse];
    let reversedText = "";
    for (let i = textArray.length - 1; i >= 0; i--) {
      reversedText += textArray[i];
    }
    return reversedText;
  }
  // ---------------------
  // Define a function findLongestWord() that takes an array of words and returns the length of the longest one.
  // ---------------------

  // Finds the length of the longest word from an array of words
  // words is an array
  // returns a Number
  function findLongestWord(words) {
    let max = 0;
    for (let i = 0; i < words.length; i++) {
      if (words[i].length > max) {
        /*(i + 1 < words.length && words[i + 1] > words[i]) */ max =
          words[i].length;
      }
    }
    return max;
  }

  // ---------------------
  // Define a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i.
  // ---------------------

  // ---------------------
  // Define a function charFreq() that takes a string and builds a frequency listing of the characters contained in it. Represent the frequency listing as a Javascript object. Try it with something like charFreq("abbabcbdbabdbdbabababcbcbab").
  // ---------------------

  ////////////////////////////////////////////////////////////////////////
  /////////////////////////DO NOT CHANGE CODE BELOW///////////////////////
  ////////////////////////////////////////////////////////////////////////

  console.assert(max(2, 4) === 4, "function max error");

  console.assert(maxOfThree(1, 2, 3) === 3, "ERROR funtion maxOfThree");

  console.assert(maxOfThree(2, 3, 1) === 3, "ERROR funtion maxOfThree");

  console.assert(maxOfThree(3, 2, 1) === 3, "ERROR maxOfThree");

  console.assert(isVowel("a") === true, "ERROR function isVowel");

  console.assert(isVowel("b") == false, "ERROR function isVowel");

  console.assert(
    rovarspraket("this is fun") === "tothohisos isos fofunon",
    "ERROR function rovarspraket"
  );

  console.assert(sum([1, 2, 3, 4]) === 10, "ERROR function sum");

  console.assert(multiply([1, 2, 3, 4]) === 24, "ERROR function multiply");

  console.assert(
    reverse("jag testar") === "ratset gaj",
    "ERROR function reverse"
  );

  console.assert(
    findLongestWord([
      "hello",
      "world",
      "does",
      "anyone",
      "really",
      "know",
      "what",
      "time",
      "it",
      "is",
    ]) === 6,
    "ERROR function findLongestWord"
  );

  console.assert(
    filterLongWords(
      [
        "hello",
        "world",
        "does",
        "anyone",
        "really",
        "know",
        "what",
        "time",
        "it",
        "is",
      ],
      4
    ).length === 4,
    "ERROR function filterLongWords"
  );

  console.assert(charFreq("abbabcbdbabdbdbabababcbcbab").a === 7);

  console.assert(charFreq("abbabcbdbabdbdbabababcbcbab").b === 14);

  console.assert(charFreq("abbabcbdbabdbdbabababcbcbab").c === 3);

  console.assert(charFreq("abbabcbdbabdbdbabababcbcbab").d === 3);
})();
