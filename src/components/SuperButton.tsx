import React from "react";


type SuperButtonPropsType = {
    callback: () => void
    disabled: boolean
    className: string
    children: React.ReactNode
}

export const SuperButton: React.FC<SuperButtonPropsType> =
    ({callback, disabled, className, children}) => {


    return (
           <button onClick={callback} disabled={disabled} className={className}>{children}</button>
    );
};
