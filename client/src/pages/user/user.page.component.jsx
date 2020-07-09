import React from "react";
import {selectCurrentUser} from "../../redux/user/user.selectors";
import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";
import UserInfo from "../../components/user-info-holder/user-info-holder.component";
import {Outer, Title, NameHolder} from "./user.page.styles";

const UserPage = ({currentUser}) => {
    return (
        <Outer>
            <NameHolder>
                <Title>Welcome {currentUser.display_name}</Title>
            </NameHolder>
            <UserInfo user={currentUser}/>
        </Outer>
    )
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser
});

export default connect(mapStateToProps)(UserPage);