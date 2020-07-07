import React from "react";
import "./form-input.styles.scss";

const FormInput = ({Label, onChange, Type, name}) => {
    return (
        <div className="col-12">
            <input className="effect-16" type={Type} placeholder="" onChange={onChange} name={name} autoComplete="off" required/>
            <label>{Label}</label>
        </div>
    );
};

export default FormInput;