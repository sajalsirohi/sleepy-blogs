import React, { useState, useRef } from "react";
import Heart from "react-animated-heart";
import { connect } from "react-redux";
import { selectCurrentUser, isUserLoggedIn } from "../../../redux/user/user.selectors";
import {createStructuredSelector} from "reselect";
import axios from "axios";

const LikeBtn = ({isSessionActive, currentUser, url}) => {
  const [isClick, setClick] = useState(false);
  var timesClicked = useRef(0);
  function handleClick(){
    timesClicked.current +=1;
    if (timesClicked.current <= 1){
      if (!isSessionActive) return alert("You have to logged in to like a post.")
      setClick(!isClick);
      axios({
        method: "post",
        url: `${url}/like`,
        params: {
          ...currentUser
        }
      });
    }
  }
  return <Heart isClick={isClick} onClick={handleClick} />;
};

const mapStateToProps = createStructuredSelector({
  isSessionActive: isUserLoggedIn,
  currentUser: selectCurrentUser
})

export default connect(mapStateToProps)(LikeBtn);
