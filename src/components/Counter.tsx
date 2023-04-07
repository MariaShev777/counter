import React, {useState} from "react";
import {SuperButton} from "./SuperButton";

export const Counter = () => {

    let maxValue = 5;
    let minValue = 0;

    const [count, setCount] = useState<number>(minValue)

    const incHandler = () => {
        if (count < maxValue) setCount(count + 1);
    }

    const resetHandler = () => {
        setCount(minValue)
    }

    const incDisabled = (count === maxValue)
    const resetDisabled = (count === minValue)

    const displayClass = (count === maxValue ? "count-display-error" : "display")

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
