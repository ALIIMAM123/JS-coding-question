// Q: Reverse the integer    eg: 59 ...> 95

// step1: convert int into string
// step2: turn into array
// step3: reverse Int
// step4: back to string
// step5: back to int

/*
const reverseStr = (int) => {
      const str = int.toString()
      const arraySplit  = str.split("")
      const reverseArray = arraySplit.reverse();
      const strJoin = reverseArray.join("");
      const parseInteger = parseInt(strJoin)
      console.log(parseInteger)
}

reverseStr(12)   */

//  Method:2 (using for of loop)

const reverseStr = (int) => {
  for (let eachChar of int) {
    let str = "";

    if (int < 0) {
      str = eachChar + str;
      parseInteger = -1 * parseInt(str);
      return parseInteger;
    } else {
      str = eachChar + str;
      parseInteger = parseInt(str);
      return parseInteger;
    }
  }
  console.log(parseInteger);
};

let num = -51;

let strNum = num.toString();
let result = reverseStr(strNum);
console.log(result);

// function revInt(num) {
//       let val = num.toString().split('').reverse().join('');

//       if (val.endsWith('-')) {
//         val = '-' + val;
//           return parseInt(val);
//       }
//           return parseInt(val);
//     }

//     console.log(revInt(-123));
