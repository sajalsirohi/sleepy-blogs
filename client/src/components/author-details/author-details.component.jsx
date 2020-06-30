import React from "react";

import {
  NameHolder,
  DisplayName,
  UserName,
  Outer,
} from "./author-details.styles";

const AuthorDetails = ({
  authorDetails: { username, profile_image_url, display_name },
}) => {
  return (
    <Outer>
      <img
        src={profile_image_url}
        alt="User image"
      />
      <NameHolder>
        <DisplayName>{display_name}</DisplayName>
        <UserName>{username}</UserName>
      </NameHolder>
    </Outer>
  );
};

export default AuthorDetails;
