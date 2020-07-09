import React from "react";
import "./form-input.styles.scss";

const FormInput = ({Label, onChange, Type, name, placeholder}) => {
    return (
        <div className="col-12">
            <input className="effect-16" type={Type} placeholder={placeholder ? placeholder : ""}
                   onChange={onChange ? onChange : ""}
                   name={name} autoComplete="off" required/>
            {
                Label && <label>{Label}</label>
            }
        </div>
    );
};

export default FormInput;