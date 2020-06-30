import React, { useState } from "react";
import Heart from "react-animated-heart";

const LikeBtn = () => {
  const [isClick, setClick] = useState(false);

  return <Heart isClick={isClick} onClick={() => setClick(!isClick)} />;
};
export default LikeBtn;
