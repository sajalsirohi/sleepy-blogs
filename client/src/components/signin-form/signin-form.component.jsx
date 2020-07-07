import React, {useState} from "react";
import {Outer, BtnHolder, ErrorContainer} from "./signin-form.styles";
import FormInput from "../form-input/form-input.component";
import { AwesomeButton } from "react-awesome-button";
import axios from "axios"

const SignIn = () => {

    const [value, updateValue] = useState({
        signIn: true
    })
    const [resError, updateError] = useState({
        isError: false,
        message: ""
    });

    function onLogin(){
        axios({
            method: "post",
            url: "/login",
            params: {
                ...value
            }
        }).then(({data}) => {
            console.log("this is the data", data);
            if (data.status === 400) updateError({
                ...data,
                isError: true
            })
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
                <FormInput Type="text" name="username" Label="User Name" onChange={handleChange}/>
                <FormInput Type="password" name="password" Label="Password" onChange={handleChange}/>
                <BtnHolder>
                    <AwesomeButton type="primary" onPress={onLogin}>Login</AwesomeButton>
                    <AwesomeButton type="gplus">Login with Google</AwesomeButton>
                </BtnHolder>
                {
                    resError.isError && <ErrorContainer>Error: {resError.message}</ErrorContainer>
                }

            </form>
        </Outer>
    )
}
export default SignIn;