import React from "react";
import {SuperButton} from "./SuperButton";

export const Settings = () => {
    return (
        <div>
                <div className="counter">

                    <div></div>

                    <div className="buttons-display">
                        <SuperButton callback={()=>{}} className={''} disabled>INC</SuperButton>
                        <SuperButton callback={()=>{}} className={''} disabled>RESET</SuperButton>
                    </div>

                </div>
        </div>
    );
};
