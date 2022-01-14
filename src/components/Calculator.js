import React, { useState } from 'react';
import './style.css';

function Calculator() {
  
  
  
const [current, setCurrent] = useState("");
  const [prev, setPrev] = useState("");
  const [operations, setOperations] = useState("");



  const valueHandler = (e) => {
    const value = e.target.getAttribute('data');
    if (value === "." && current.includes(".")) return;
    setCurrent(current + value);
  }
  const operationHandler =(e) => {
    if (current == "") return;
    if (prev !== "") {
      let value = calculate();
      setPrev(value);
    

    } else {
      setPrev(current);
    }
    setCurrent("");
    setOperations(e.target.getAttribute("data"))

  }
  const calculate = () => {
    let result;
    let prevNumber = parseFloat(prev);
    let currentNumber = parseFloat(current);

    switch (operations) {
      case "/": 
      result = prevNumber / currentNumber;
      break;
      case "*":
        result = prevNumber * currentNumber;
        break;
        case "+" : 
        result = prevNumber + currentNumber;
        break;
        case "-" : 
        result = prevNumber - currentNumber;
        break;
        default:
        return;
    }
    return result;
  }



  const resultShow = () => {
    let value = calculate();
    if (value === undefined || value === null) return;
    setCurrent(value);
    setPrev("");
    setOperations("");
  }
  const clearAll = () => {
    setCurrent("");
    setOperations("");
    setPrev("");
  }
    

    return (
        <>
        <div className="container">
            <div className="center">
                <div className="inputField">
                    <div className='voiceIcon'>  
                    <i className="fal fa-microphone iconStyle"></i></div>
                    
                    <div className='resultDiv'>
                        {/* <input type="text" className='outputShow' value={current} placeholder='0' readOnly/>
                        <input type="text" className='resultShow' readOnly  /> */}
                        <div className='outputShow'>{prev} {operations} {current}</div>
                        {/* <div className='resultShow'></div> */}
                    </div>
                </div>
                <div className="btns">
                    <button className='clearBtn' onClick={clearAll} >C</button>
                    <button className='clearBtn' >+/-</button>
                    <button className='clearBtn' >%</button>
                    <button className='otherBtn' onClick={operationHandler} data = {'/'}>/</button>

                    <button className='countBtn' onClick={valueHandler} data = {7}>7</button>
                    <button className='countBtn' onClick={valueHandler} data = {8}>8</button>
                    <button className='countBtn' onClick={valueHandler} data = {9}>9</button>

                    <button className='otherBtn' onClick={operationHandler} data = {'*'}>X</button>

                    <button className='countBtn' onClick={valueHandler} data = {4}>4</button>
                    <button className='countBtn' onClick={valueHandler} data = {5}>5</button>
                    <button className='countBtn' onClick={valueHandler} data = {6}>6</button>

                    <button className='otherBtn' onClick={operationHandler} data = {'-'}>&#8722;</button>

                    <button className='countBtn' onClick={valueHandler} data = {1}>1</button>
                    <button className='countBtn' onClick={valueHandler} data = {2}>2</button>
                    <button className='countBtn' onClick={valueHandler} data = {3}>3</button>

                    <button className='otherBtn' onClick={operationHandler} data = {'+'}>+</button>

                    <button className='zeroBtn' onClick={valueHandler} data = {0}>0</button>
                    <button className='countBtn'onClick={valueHandler} data = {"."}>.</button>

                    <button className='otherBtn' onClick={resultShow}>=</button>
                </div>
            </div>
        </div>   
        </>
    )
}

export default Calculator
