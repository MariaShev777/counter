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



    let maxValueIncorrectCases = maxValue  < 0
        || maxValue < startValue
        || maxValue === startValue


    let startValueIncorrectCases = startValue < 0
        || maxValue < startValue
        || maxValue === startValue


    const increment = () => {
        if (counter < maxValue) {
            setCounter(counter + 1)
        }
    }

    const reset = () => {
        setCounter(startValue)
    }

    const handleCorrectValueCondition = () => {
        setBtnSetDisabled(false);
        setErrorText("Enter values and press 'SET'");
    }

    const handleIncorrectValueCondition = () => {
        setBtnSetDisabled(true);
        setErrorText("Incorrect value");
    }


    const maxValueSet = (maxNum: number) => {
        if ((maxNum > startValue && maxNum >= 0 && startValue !== maxNum) && maxNum % 2 === 0 && maxNum.toString().length < 9) {
            setMaxValue(maxNum)
            handleCorrectValueCondition();
        } else {
            setMaxValue(maxNum);
            handleIncorrectValueCondition();
        }
    }

    const startValueSet = (startNum: number) => {
        if ((startNum < maxValue && startNum >= 0 && maxValue !== startNum) && startNum % 2 === 0 && startNum.toString().length < 9) {
            setStartValue(startNum);
            handleCorrectValueCondition();
        } else {
            setStartValue(startNum);
            handleIncorrectValueCondition();
        }
    }

    const setCounterValue = () => {
            setCounter(startValue)
            setBtnSetDisabled(true)
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
