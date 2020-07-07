import React, {useState} from "react";
import {Outer, BtnHolder, Span, Bottom, ErrorContainer} from "./signup-form.styles";
import FormInput from "../form-input/form-input.component";
import { AwesomeButton } from "react-awesome-button";
import axios from "axios";
import { withRouter } from "react-router";

const SignUp = ({history}) => {
    const [value, updateValue] = useState({
        signUp: true
    })
    const [resError, updateError] = useState({
        isError: false,
        message: "Example Error"
    });

    function onSignUp(){
        axios({
            method: "post",
            url: "/register",
            params: {
                ...value
            }
        }).then(({data}) => {
            if (data.status === 400) updateError({
                ...data,
                isError: true
            })
            history.push("/");
        });
    }

    function handleSubmit(e){
        e.preventDefault();
    }

    function handleChange(e) {
        updateValue({
            ...value,
            [e.target.getAttribute("name")]: e.target.value
        });
    }
    return (
        <Outer>
            <form onSubmit={handleSubmit}>
                <FormInput Type="text" name="display_name" Label="Display Name" onChange={handleChange}/>
                <FormInput Type="text" name="username" Label="User Name" onChange={handleChange}/>
                <FormInput Type="email" name="email" Label="Email" onChange={handleChange}/>
                <FormInput Type="password" name="password" Label="Password" onChange={handleChange} autocomplete="off"/>
                {
                    resError.isError && <ErrorContainer>Error: {resError.message}</ErrorContainer>
                }
                <BtnHolder>
                    <AwesomeButton size="500px" type="primary" onPress={onSignUp}>Sign up as a Sleeper</AwesomeButton>
                </BtnHolder>

                <Bottom>Already a sleeper? <Span>Sign In here</Span></Bottom>
            </form>
        </Outer>
    )
}
export default withRouter(SignUp);