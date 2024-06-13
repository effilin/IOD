 class Calculator {
    constructor() {
        this.id = Math.floor(Math.random()+1)
    }
    
    
     add = (num1, num2) => {
        const sum = num1+num2
        return sum;
        }
        
         subtract = (num1, num2) => {
            const sum = num1 - num2;
            return sum;
        }
        
         multiply = (num1, num2) => {
            const sum = num1 * num2;
            return sum;
        }
        
        divide = (num1, num2) => {
            const sum = num1 / num2;
            return sum;
        }  
        
    }  
 
  export default Calculator;