import React, {useState} from "react";
import { connect } from "react-redux";
import {withRouter} from "react-router";
import { setCurrentUser } from "../../redux/user/user.action";
import {Outer, BtnHolder, ErrorContainer} from "./signin-form.styles";
import FormInput from "../form-input/form-input.component";
import { AwesomeButton } from "react-awesome-button";
import axios from "axios"

const SignIn = ({history, setCurrentUser}) => {

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
            });
            else {
                setCurrentUser(data);
                history.push("/");
            }
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

const mapDispatchToProps = dispatch => ({
    setCurrentUser: (user) => dispatch(setCurrentUser(user)),
})
export default withRouter(connect(null, mapDispatchToProps)(SignIn));