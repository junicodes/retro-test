import React from "react";
import Pane from "./Pane";

export const SplitScreen = ({ children, leftVariant = '', rightVariant = '' }) => {

    const [ left, right ] = children;

    return (
        <div className='flex flex-row justify-between h-full bg-red-800'>
            <Pane variant={leftVariant}>
                {left}
            </Pane>
            <Pane variant={rightVariant}>
                {right}
            </Pane>
        </div>
    );
}
