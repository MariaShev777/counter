import React, {useState} from "react";
import './App.css';
import {Counter} from "./components/Counter";
import {Settings} from "./components/Settings";


function App() {

    let [maxValue, setMaxValue] = useState(0);
    let [startValue, setStartValue] = useState(0);


    const maxValueSet = (maxNum: number) => {
        setMaxValue(maxNum)
    }

    const startValueSet = (startNum: number) => {
        setStartValue(startNum)
    }




    return (
        <div className='App'>
            <Settings
                startValue={startValue}
                maxValue={maxValue}
                maxValueSet={maxValueSet}
                startValueSet={startValueSet}
            />
            <Counter startValue={startValue}
                     maxValue={maxValue}/>
        </div>
    )
}

export default App;
