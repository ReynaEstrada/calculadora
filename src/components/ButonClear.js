import React from "react";
import '../css/ButtonClear.css'

const ButonClear = (props) => (
    <div className='button-clear' onClick={props.manejarClear}>
        {props.children}
    </div>
)
export default ButonClear;