import React, {useState} from "react";
import './App.css';
import {Counter} from "./components/Counter";
import {Settings} from "./components/Settings";


function App() {

    let [maxValue, setMaxValue] = useState<number>(5);
    let [startValue, setStartValue] = useState<number>(0);

    let [counter, setCounter] = useState<number>(0)

    let [btnSetDisabled, setBtnSetDisabled] = useState<boolean>(false)

    let [errorText, setErrorText] = useState<string | null>(null)



    let maxValueIncorrectCases = maxValue < startValue
        || maxValue === startValue


    let startValueIncorrectCases = (startValue < 0)
        || (maxValue < startValue)
        || (maxValue === startValue)


    const increment = () => {
        if (counter < maxValue) {
            setCounter(counter + 1)
        }
    }

    const reset = () => {
        setCounter(startValue)
    }


    const maxValueSet = (maxNum: number) => {
        if (!(maxNum < startValue || maxNum < 0 || startValue === maxNum) && maxNum % 1 === 0 && maxNum.toString().length < 9) {
            setMaxValue(maxNum)
            setBtnSetDisabled(false)
            setErrorText("Enter values and press 'SET'")
        } else {
            setErrorText("Incorrect value")
            setMaxValue(maxNum)
            setBtnSetDisabled(true)
        }
    }

    const startValueSet = (startNum: number) => {
        if (!(startNum < 0 || maxValue < startNum || maxValue === startNum) && startNum % 1 === 0 && startNum.toString().length < 9) {
            setStartValue(startNum)
            setBtnSetDisabled(false)
            setErrorText("Enter values and press 'SET'")
        } else {
            setStartValue(startNum)
            setErrorText("Incorrect value")
            setBtnSetDisabled(true)
        }
    }

    const setCounterValue = () => {
        setCounter(startValue)
        setBtnSetDisabled(!btnSetDisabled)
        setErrorText(null);
    }





    return (
        <div className='App'>
            <Settings
                startValue={startValue}
                maxValue={maxValue}
                maxValueSet={maxValueSet}
                startValueSet={startValueSet}
                setCounterValue={setCounterValue}
                btnSetDisabled={btnSetDisabled}
                maxValueIncorrectCases={maxValueIncorrectCases}
                startValueIncorrectCases={startValueIncorrectCases}
            />

            <Counter startValue={startValue}
                     maxValue={maxValue}
                     increment={increment}
                     reset={reset}
                     counter={counter}
                     errorText={errorText}/>
        </div>
    )
}

export default App;
