import React, {useState} from "react";
import {SuperButton} from "./SuperButton";



type CounterPropsType = {
    maxValue: number
    startValue: number
    increment: () => void
    reset: () => void
    counter: number
    displayClass: string
}

export const Counter = (props: CounterPropsType) => {



    const incDisabled = (props.counter === props.maxValue)
    const resetDisabled = (props.counter === props.startValue)

    // const displayClass = (props.counter === props.maxValue ? "count-display-error" : "display")

    const incClass = `button
    ${incDisabled ? 'disabled' : ''}`


    const resetClass = `button
    ${resetDisabled ? 'disabled' : ''}`


    return (
        <div>
            <div className="container">

                <div className={props.displayClass}>{props.counter}</div>

                <div className="buttons-display">
                    <SuperButton name={'INC'}
                                 callback={props.increment}
                                 className={incClass}
                                 disabled={incDisabled} />
                    <SuperButton name={'RESET'}
                                 callback={props.reset}
                                 className={resetClass}
                                 disabled={resetDisabled} />
                </div>

            </div>
        </div>
    );
};
