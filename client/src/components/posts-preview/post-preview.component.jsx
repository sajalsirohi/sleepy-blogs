import React from "react";
import { useHistory } from "react-router-dom";

import {
  Outer,
  TitleContainer,
  UserInfo,
  TextSection,
  Interaction,
  NameHolder,
  ImgAndNameHolder,
} from "./post-preview.styles";

const PostPreview = ({ post, username, display_name, profile_image_url }) => {
  const { _id, title, likes, shares, views, created_at, content } = post;
  var history = useHistory();
  function handleClick(post) {
    console.log(_id);
    history.push(`/posts/${_id}`);
  }

  return (
    <div>
      <Outer onClick={handleClick} href={`/post/:${_id}`}>
        <UserInfo>
          <ImgAndNameHolder>
            <img src={profile_image_url} alt="user img" />

            <NameHolder>
              <div>{display_name}</div>
              <div>{username}</div>
            </NameHolder>
          </ImgAndNameHolder>

          <div>
            {created_at.substring(0,10)}
          </div>
        </UserInfo>
        <TitleContainer>{title.substring(0,30)}...</TitleContainer>
        <TextSection>{content.substring(0, 150)} ...</TextSection>
        <Interaction>
          <div>Liked by: {likes}</div>
          <div>Views: {views}</div>
          <div>Shared: {shares}</div>
        </Interaction>
      </Outer>
    </div>
  );
};

export default PostPreview;
