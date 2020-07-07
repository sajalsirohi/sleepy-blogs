import React, {useState} from "react";
import {Outer, SignUpSignIn, Btns} from "./signup.page.styles";
import SignUp from "../../components/signup-form/signup-form.component";
import SignIn from "../../components/signin-form/signin-form.component";
import _ from "lodash";

const SignUpPage = () => {
    var tempIsActive;
    const [isActive, updateActive] = useState({
        signUp: true,
        signIn: false
    });

    function handleClick(e) {
        tempIsActive = _.mapValues(isActive, () => false);
        updateActive({
            ...tempIsActive,
            [e.target.getAttribute("name")]: true
        })
    }

    return (
        <Outer>
            <SignUpSignIn>
                <Btns name="signUp" active={isActive.signUp} onClick={handleClick}>Sign Up</Btns>
                <Btns name="signIn" active={isActive.signIn} onClick={handleClick}>Sign In</Btns>
            </SignUpSignIn>
            {
                isActive.signUp ? <SignUp/> : <SignIn/>
            }
        </Outer>
    )
}

export default SignUpPage;