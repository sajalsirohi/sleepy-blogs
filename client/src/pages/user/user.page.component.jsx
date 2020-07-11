import React from "react";
import {selectCurrentUser} from "../../redux/user/user.selectors";
import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";
import UserInfo from "../../components/user-info-holder/user-info-holder.component";
import {Outer, Title, NameHolder, CreatePostBtn} from "./user.page.styles";
import {AwesomeButton} from "react-awesome-button";
import {withRouter} from "react-router";

const UserPage = ({currentUser, history}) => {

    function handlePress(e){
        history.push(`/user/${currentUser._id}/createPost`);
    }

    return (
        <Outer>
            <NameHolder>
                <Title>Welcome {currentUser.display_name}</Title>
            </NameHolder>
            <UserInfo user={currentUser}/>
            <CreatePostBtn>
                <AwesomeButton type="primary" onPress={handlePress}>
                    Create post
                </AwesomeButton>
            </CreatePostBtn >
        </Outer>
    )
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser
});

export default withRouter(connect(mapStateToProps)(UserPage));