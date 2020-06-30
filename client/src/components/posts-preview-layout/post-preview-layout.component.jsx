import React from "react";
import Loader from "react-loader-spinner";
import { OuterContainer } from "./post-preview-layout.styles";
import PostPreview from "../posts-preview/post-preview.component";

const PostPreviewLayout = ({ posts }) => {
  let values = [];
  return (
    <OuterContainer>
      {(values = posts.map((post, idx) => <PostPreview key={idx} {...post} />))}
    </OuterContainer>
  );
};

export default PostPreviewLayout;
