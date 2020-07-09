import React, {useState} from "react";
import FormInput from "../form-input/form-input.component";
import axios from "axios";
import {selectCurrentUser} from "../../redux/user/user.selectors";
import {connect} from "react-redux";
import {Outer, Label, Value, ImageHolder, EditButton, ErrorContainer} from "./user-info-holder.styles";
import {AwesomeButton} from "react-awesome-button";
import {createStructuredSelector} from "reselect";
import {setCurrentUser} from "../../redux/user/user.action";

const UserInfo = ({user: {profile_image_url, display_name, email, username, created_at}, currentUser, setUser}) => {
    const [edit, updateEdit] = useState(false);
    const [newImageUrl, updateImageUrl] = useState();
    const [error, updateError] = useState(false);

    function handleChange(e) {
        updateImageUrl({
            ...newImageUrl,
            [e.target.getAttribute("name")]: e.target.value
        })
    }

    function handleSubmit() {
        axios({
            method: "put",
            url: "/user",
            params: {
                ...currentUser,
                ...newImageUrl,
            }
        }).then(res => {
            if (res.status === 200) setUser({
                ...currentUser,
                ...newImageUrl
            });
            else updateError(true);
        });
        updateEdit(false);
    }
    created_at = new Date(created_at);
    return (
        <Outer>
            <EditButton onClick={() => updateEdit(!edit)}>Edit</EditButton>
            <ImageHolder profile_image_url={profile_image_url}/>
            {
                edit && <FormInput Type="text" placeholder="Enter image url..." onChange={handleChange}
                                   name="profile_image_url"/>
            }
            {
                edit && <AwesomeButton type="primary" onPress={handleSubmit}>Submit</AwesomeButton>
            }
            {
                error && <ErrorContainer>Some error occurred while updating your profile</ErrorContainer>
            }
            <Label>User Name</Label>
            <Value>{username}</Value>
            <Label>Display Name</Label>
            <Value>{display_name}</Value>
            <Label>Email Registered</Label>
            <Value>{email}</Value>
            <Label>Member since</Label>
            <Value>{created_at.toDateString()}</Value>
        </Outer>
    )
}
const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser
})

const mapDispatchToProps = dispatch => ({
    setUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(UserInfo);