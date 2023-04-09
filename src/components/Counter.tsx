import React, {useState} from "react";
import {SuperButton} from "./SuperButton";



type CounterPropsType = {
    maxValue: number
    startValue: number
}

export const Counter = (props: CounterPropsType) => {


    const [count, setCount] = useState<number>(props.startValue)

    const incHandler = () => {
        if (count < props.maxValue) setCount(count + 1);
    }

    const resetHandler = () => {
        setCount(props.startValue)
    }

    const incDisabled = (count === props.maxValue)
    const resetDisabled = (count === props.startValue)

    const displayClass = (count === props.maxValue ? "count-display-error" : "display")

    const incClass = `button
    ${incDisabled ? 'disabled' : ''}`


    const resetClass = `button
    ${resetDisabled ? 'disabled' : ''}`



    return (
        <div>
            <div className="container">

                <div className={displayClass}>{count}</div>

                <div className="buttons-display">
                    <SuperButton name={'INC'} callback={incHandler} className={incClass} disabled={incDisabled} />
                    <SuperButton name={'RESET'} callback={resetHandler} className={resetClass} disabled={resetDisabled} />
                </div>

            </div>
        </div>
    );
};
