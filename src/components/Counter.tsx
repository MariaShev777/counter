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

    const displayClass = (count === maxValue ? "count-display-error" : "count-display")

    const incClass = `button
    ${incDisabled ? 'disabled' : ''}`


    const resetClass = `button
    ${resetDisabled ? 'disabled' : ''}`



    return (
        <div>
            <div className="counter">

                <div className={displayClass}>{count}</div>

                <div className="buttons-display">
                    <SuperButton callback={incHandler} className={incClass} disabled={incDisabled}>INC</SuperButton>
                    <SuperButton callback={resetHandler} className={resetClass} disabled={resetDisabled}>RESET</SuperButton>
                </div>

            </div>
        </div>
    );
};
