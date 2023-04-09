import React from "react";
import {SuperButton} from "./SuperButton";
import {SuperInput} from "./SuperInput";


type SettingsPropsType = {
    maxValue: number
    startValue: number
    maxValueSet: (maxNum: number) => void
    startValueSet: (startNum: number) => void
    setCounterValue: () => void
}

export const Settings = (props: SettingsPropsType) => {
    const maxValueChangeHandler = (maxNum: number) => {
        props.maxValueSet(maxNum)
    }

    const startValueChangeHandler = (startNum: number) => {
        props.startValueSet(startNum)
    }



    const valueLimit =
        `${props.startValue < 0
            ? "input-error"
            : props.maxValue < props.startValue
                ? "input-error"
                : props.maxValue === props.startValue
                    ? "input-error" : "input"}`

    return (
        <div>
            <div className="container">
                <div className={"settings-display"}>
                        <div>
                            Max value:
                            Start value:
                        </div>
                        <div>
                            <SuperInput value={props.maxValue}
                                        className={valueLimit}
                                        callback={maxValueChangeHandler}/>
                            <SuperInput value={props.startValue}
                                        className={valueLimit}
                                        callback={startValueChangeHandler}/>
                        </div>
                </div>
                    <div className="buttons-display">
                        <SuperButton name={'SET'}
                                     callback={props.setCounterValue}
                                     className={'button'}
                                     disabled={false} />
                    </div>

                </div>
        </div>
    );
};
