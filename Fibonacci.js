// program to generate fibonacci series up to a certain number


function fibonacci(number) {
    if(number === 1) {return 0};
    if(number === 2) {return 1};
    return fibonacci(number - 1) + fibonacci(number - 2)
  };
  
  let number = 8;
  let fibonacciArray = []
  for (let i = 1; i <= number; i++){
    fibonacciArray.push(fibonacci(i))
  }
  
  console.log(fibonacciArray);