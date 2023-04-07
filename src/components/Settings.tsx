import React from "react";
import {SuperButton} from "./SuperButton";
import {SuperInput} from "./SuperInput";


type SettingsPropsType = {
    maxValue: number
    startValue: number
    maxValueSet: (maxNum: number) => void
    startValueSet: (startNum: number) => void

}

export const Settings = (props: SettingsPropsType) => {
    const maxValueChangeHandler = (maxNum: number) => {
        props.maxValueSet(maxNum)
    }

    const startValueChangeHandler = (startNum: number) => {
        props.startValueSet(startNum)
    }

    const startValueError = `''
    ${props.startValue < 0 ? 'input-error' : ''}`


    return (
        <div>
            <div className="container">
                <div className={"settings-display"}>
                        <div>
                            Max value:
                            Start value:
                        </div>
                        <div>
                            <SuperInput value={props.maxValue} className={''}  callback={maxValueChangeHandler}/>
                            <SuperInput value={props.startValue} className={startValueError} callback={startValueChangeHandler}/>
                        </div>
                </div>
                    <div className="buttons-display">
                        <SuperButton callback={()=>{}} className={'button'} disabled name={'SET'}/>
                    </div>

                </div>
        </div>
    );
};
