import React, {useState} from "react";
import './App.css';
import {Counter} from "./components/Counter";
import {Settings} from "./components/Settings";


function App() {

    let [maxValue, setMaxValue] = useState<number>(5);
    let [startValue, setStartValue] = useState<number>(0);

    let [counter, setCounter] = useState<number>(0)

    const increment = () => {
        if (counter < maxValue) {
            debugger
            setCounter(counter + 1)
        }
    }


    const maxValueSet = (maxNum: number) => {
        setMaxValue(maxNum)
    }

    const startValueSet = (startNum: number) => {
        setStartValue(startNum)
    }

    const setCounterValue = () => {
        setCounter(startValue)

    }

    const reset = () => {
        setCounter(startValue)
    }

    const displayClass = `${counter === maxValue ? "count-display-error" : "display"}`



    return (
        <div className='App'>
            <Settings
                startValue={startValue}
                maxValue={maxValue}
                maxValueSet={maxValueSet}
                startValueSet={startValueSet}
                setCounterValue={setCounterValue}
            />

            <Counter startValue={startValue}
                     maxValue={maxValue}
                     increment={increment}
                     reset={reset}
                     counter={counter}
                     displayClass={displayClass}/>
        </div>
    )
}

export default App;
