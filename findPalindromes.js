// Q: find palindromes   (reverse string  === given string called palindrome)
// palindrome("abba") === true
// palindrome("abcdefg") === false


// method1:  [using Builtin method]
/*
const Palindrome = (str) => {
  let array = str.split("");
  let reverseArray = array.reverse();
  let reversedStr = reverseArray.join("");
  let originalStr = str;
  if (originalStr == reversedStr) {
    console.log("It is Palindrome ");
  } else {
    console.log("It is not Palindrome ");
  }
};
Palindrome("abba5");  */

// .........
// method2:  [using for of loop ]

 function Palindrome(str){
    let reverseStr = "";

    for (let eachChar of str){
        reverseStr = eachChar + reverseStr
         let originalString = str;

         if(originalString == reverseStr){
             return "Its palindrome"
         } else{
            "Its not palindrome"
         }
    }  
}

 let result = Palindrome("abba")
 console.log(result);

