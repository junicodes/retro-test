
import React from "react";


const Pane = ({variant, children}) => {
    return (
        <div className={variant}>
            {children}  
        </div>
    )
}

export default Pane;