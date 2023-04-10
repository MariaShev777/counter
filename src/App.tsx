import React, {useState} from "react";
import './App.css';
import {Counter} from "./components/Counter";
import {Settings} from "./components/Settings";


function App() {

    let [maxValue, setMaxValue] = useState<number>(5);
    let [startValue, setStartValue] = useState<number>(0);

    let [counter, setCounter] = useState<number>(0)

    let [disabled, setDisabled] = useState<boolean>(false)

    let maxValueIncorrectCases = maxValue < startValue
        || maxValue === startValue

    // if (maxValueIncorrectCases) {
    //     setDisabled(true)
    // }

    let startValueIncorrectCases = startValue < 0
        || maxValue < startValue
        || maxValue === startValue

    // if (startValueIncorrectCases) {
    //     setDisabled(true)
    // }


    const increment = () => {
        if (counter < maxValue) {
            setCounter(counter + 1)
        }
    }


    const maxValueSet = (maxNum: number) => {
        if (maxNum % 1 === 0 && maxNum.toString().length < 9) {
            setMaxValue(maxNum)
        }
        setDisabled(false)
    }

    const startValueSet = (startNum: number) => {
        if (startNum % 1 === 0 && startNum.toString().length < 9) {
            setStartValue(startNum)
        }
        setDisabled(false)
    }

    const setCounterValue = () => {
        setCounter(startValue)
        setDisabled(!disabled)
    }



    const reset = () => {
        setCounter(startValue)
    }




    return (
        <div className='App'>
            <Settings
                startValue={startValue}
                maxValue={maxValue}
                maxValueSet={maxValueSet}
                startValueSet={startValueSet}
                setCounterValue={setCounterValue}
                disabled={disabled}
                maxValueIncorrectCases={maxValueIncorrectCases}
                startValueIncorrectCases={startValueIncorrectCases}
            />

            <Counter startValue={startValue}
                     maxValue={maxValue}
                     increment={increment}
                     reset={reset}
                     counter={counter}/>
        </div>
    )
}

export default App;
