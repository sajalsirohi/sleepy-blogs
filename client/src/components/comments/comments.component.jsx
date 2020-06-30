import React from "react";
import {
  Outer,
  UserInfo,
  CommentBody,
  DateHolder,
  TopSection,
} from "./comments.styles";

const Comments = ({ comment: { created_at, comment_made_by, body } }) => {
  return (
    <Outer>
      <TopSection>
        <UserInfo>{comment_made_by} says:</UserInfo>
        <DateHolder>{created_at.substring(0,10)}</DateHolder>
      </TopSection>

      <CommentBody>{body}</CommentBody>
    </Outer>
  );
};
export default Comments;
