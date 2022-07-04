// Q: find maximum character in a string and how many times it appear
/*
  32eddseew3
  #%he3#33ll#l#0
 */

//   steps Involved to solve such type of question:
/*
step1: create an object  / step2: generate key-value pair /  step3: use for of loop and check if character exist or not 
/ if it dows not exist in obj , then set its value to 1 / if exist then do an increment // step4: to count maximum number of time the letter appear
use for in loop and iterate and see which one has the highest value  */

// #%he3#33ll#l#0

const maxCharacter = (str) => {
  let obj = {}; // used let because the value keeps on changing here
  for (let eachChar of str) {
    //  console.log(eachChar)
    !obj[eachChar] ? (obj[eachChar] = 1) : obj[eachChar]++;
  }
  //console.log(obj)                //letter with max no of times  { '0': 1, '3': 3, '#': 4, '%': 1, h: 1, e: 1, l: 3 }

  let maxNum = 0;
  let maximumChar = "";

  for (let eachChar in obj) {
    if (obj[eachChar] > maxNum) {
      maxNum = obj[eachChar];
      maximumChar = eachChar;
    }
  }
  console.log(maxNum);

  console.log(maximumChar);
};

maxCharacter("#%he3#33ll#l#0");
