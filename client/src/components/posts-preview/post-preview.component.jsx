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
  let { _id, title, likes, shares, views, created_at, content } = post;
  let history = useHistory();
  function handleClick(post) {
    console.log(_id);
    history.push(`/posts/${_id}`);
  }
  created_at = new Date(created_at);

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
            {created_at.getDate()}/{created_at.getMonth()+1}/{created_at.getFullYear()}
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
