// Q1: Given a string ,reverse it ?

// solution1: [ using reverse Built in method]
/*given string- convert it into Array
reverse it the Array
turn the array back into string */

/*
const reverseStr = (str) => {
   const array =  str.split("")
   const reverseArray = array.reverse()
   // console.log(reverseArray)
 const reverseString  = reverseArray.join("")
 return reverseString

}

const result = reverseStr("hello")
console.log(result)  */
//,  .................

// solution2:   [using self calling function and for of loop]
// given string - create empty string
// loop through each character
// return the reversed

/*
(function(str){                   // self calling function
   let reverseStr = ""
   for(let eachChar of str){
      reverseStr = eachChar + reverseStr
      
   }
   console.log(reverseStr)
    
})("greetings");  */

// method3: (using  function expression and  for of loop)

const reverse = (str) => {
	let reverseStr = "";

	for (let eachChar of str) {
		reverseStr = eachChar + reverseStr;
		//  console.log(reverseStr)
	}
	console.log(reverseStr);
};

reverse("gretting");
