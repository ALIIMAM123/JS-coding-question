let num = 1;

const fizzBuzz = (num) => {
     while (num <= 100){
        num = num + 1
          if( num %  3 === 0 && num % 5 === 0) {
              console.log("fizzbuzz")
              continue;
             
          }
           if( num %  3  === 0 ) {
            console.log("fizz")
            continue;
         
        }
        if( num %  5  === 0 ) {
            console.log("buzz")
            continue;
        }
        else{
            console.log(num)
            
        }

     }
   
}
fizzBuzz(100)