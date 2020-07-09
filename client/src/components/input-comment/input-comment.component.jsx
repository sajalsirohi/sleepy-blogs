import React, {useState} from "react";
import axios from "axios";
import {connect} from "react-redux";
import {selectCurrentUser, isUserLoggedIn} from "../../redux/user/user.selectors";
import {AwesomeButton} from "react-awesome-button";
import {
    Form,
    InputText,
    Outer,
    BtnHolder,
    Label,
    DisplayNameHolder,
    DisplayName,
} from "./input-comment.styles";
import {createStructuredSelector} from "reselect";

const InputComment = ({post_id, currentUser, currentSession}) => {
    const [data, updateData] = useState();

    function handleChange(e) {
        updateData({
            ...data,
            [e.target.name]: e.target.value,
        });
    }

    function handleSubmit(e) {
        let localData = data;
        if (currentSession) localData = {
            ...data,
            comment_made_by: currentUser.username
        }
        axios({
            method: 'post',
            url: '/comment',
            params: {
                post_id: post_id,
                ...localData
            }
        });
    }

    return (
        <Outer>
            <Form onSubmit={handleSubmit}>
                <Label>Your comment ...</Label>
                <InputText type="text" name="body" onChange={handleChange}/>
                {
                    currentSession ?
                        <DisplayNameHolder>
                            You will be commenting as <DisplayName>{currentUser.username}</DisplayName>, logout if you
                            want to be anonymous
                        </DisplayNameHolder>
                        :
                        <div>
                            <Label>Your User Name (You are not logged in)</Label>
                            <InputText
                                type="text"
                                name="comment_made_by"
                                username
                                onChange={handleChange}
                            />
                        </div>
                }

                <BtnHolder>
                    <AwesomeButton>Post</AwesomeButton>
                </BtnHolder>
            </Form>
        </Outer>
    );
};

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    currentSession: isUserLoggedIn
})

export default connect(mapStateToProps)(InputComment);
