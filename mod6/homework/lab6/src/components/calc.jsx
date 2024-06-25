import './calc.css'
import { useState } from 'react';

const Calculator = () => {

const addition=(a, b) => ((a*10) +(b* 10))/10;
const subtract=(a, b) => a-b;
const multiply=(a, b) => a*b;
const divide=(a, b) => a/b

const [result, setResult] = useState('');
const [inputData2, setInputData2] = useState('');
const [operator, setOperator] = useState('');
const [inputData, setInputData] = useState('');

const makeValue = (e) => {
    const newNum = inputData + e;
    setInputData(newNum);
};

const addSign = () => {
  setOperator('+')
  setInputData2(inputData)
  setInputData('')
};


const subSign = () => {
    setOperator('-')
  setInputData2(inputData)
  setInputData('')
  };

const multSign = () => {
    setOperator('*')
  setInputData2(inputData)
  setInputData('')
  };

const divSign = () => {
    setOperator('/')
    setInputData2(inputData)
    setInputData('')
  };

const reset = () => {
    setOperator('')
    setInputData2('')
    setInputData('')
    setResult('')
};

const equals = () => {
    console.log(operator);
    if(operator === "+") {
        const result = parseFloat(inputData2) + parseFloat(inputData);
        setResult(result);
    }else if (operator === "-") {
        const result = parseFloat(inputData2) - parseFloat(inputData);
        setResult(result);
    }else if ( operator === "*") {
        const result = parseFloat(inputData2) * parseFloat(inputData);
        setResult(result);
    } else if (operator === "/") {
        const result = parseFloat(inputData2) / parseFloat(inputData);
        setResult(result);
    } else{
        setResult('error');
    }
};

    return (
        <div>
        <h1>.....Calculator.....</h1>

        <div id="wrapper">

            <div id="screen">
                <p>{result}</p>
                <p id="results1">{inputData2}</p>
                <p id="operator">{operator}</p>
                <p id="results2">{inputData}</p>
                
            </div>

            <button className="numBtn number"  onClick={() => makeValue('1')}>1</button>
            <button className="numBtn number" onClick={() => makeValue('2')}>2</button>
            <button className="numBtn number" onClick={() => makeValue('3')}>3</button>
            <button className="numBtn operator" onClick={addSign}>+</button>
            <button className="numBtn number" onClick={() => makeValue('4')}>4</button>
            <button className="numBtn number" onClick={() => makeValue('5')}>5</button>
            <button className="numBtn number" onClick={() => makeValue('6')}>6</button>
            <button className="numBtn operator" onClick={subSign}>-</button>
            <button className="numBtn number" onClick={() => makeValue('7')}>7</button>
            <button className="numBtn number" onClick={() => makeValue('8')}>8</button>
            <button className="numBtn number" onClick={() => makeValue('9')}>9</button>
            <button className="numBtn operator" onClick={multSign}>*</button>
            <button className="numBtn number" onClick={() => makeValue('0')}>0</button>
            <button className="numBtn operator" onClick={divSign}>/</button>
                 
            

            <button id="submit" type="submit" onClick={equals}>Equals</button>
            <button id="reset" type="reset" onClick={reset}>Reset</button>

        </div>
       </div>

    );
}

export default Calculator