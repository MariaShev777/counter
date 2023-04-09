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

    const maxValueLimit = `${props.maxValue > props.startValue ? 'input-error' :
        props.maxValue === props.startValue ? 'input-error' : 'input'}`
    const startValueLimit = `${props.startValue < 0 ? 'input-error' :
        props.maxValue === props.startValue ? 'input-error' : 'input'}`


    return (
        <div>
            <div className="container">
                <div className={"settings-display"}>
                        <div>
                            Max value:
                            Start value:
                        </div>
                        <div>
                            <SuperInput value={props.maxValue} className={maxValueLimit}  callback={maxValueChangeHandler}/>
                            <SuperInput value={props.startValue} className={startValueLimit} callback={startValueChangeHandler}/>
                        </div>
                </div>
                    <div className="buttons-display">
                        <SuperButton callback={()=>{}} className={'button'} disabled name={'SET'}/>
                    </div>

                </div>
        </div>
    );
};
