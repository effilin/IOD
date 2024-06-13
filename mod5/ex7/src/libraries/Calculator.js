 class Calculator {
    constructor() {
        this.id = Math.floor(Math.random()+1)
    }
    #log = (value) => {
        console.log(`[Calculator : ${this.id} : ${sum}]`)
    }
     add = (num1, num2) => {
        const sum = num1+num2
        this.#log(sum);
        return sum;
        }
        
         subtract = (num1, num2) => {
            const sum = num1 - num2;
            this.#log(sum)
            return sum;
        }
        
         multiply = (num1, num2) => {
            const sum = num1 * num2;
            this.#log(sum)
            return sum;
        }
        
        divide = (num1, num2) => {
            const sum = num1 / num2;
            this.#log(sum)
            return sum;
        }  
        
       
 }
  export default Calculator;