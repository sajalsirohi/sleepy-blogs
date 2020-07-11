import React from "react";
import {Label, InputText} from "./textfield-input.styles";

const TextField = (props) => {
    return (
        <div>
            <Label>{props.Label}</Label>
            <InputText {...props}/>
        </div>
    )
}
export default TextField;