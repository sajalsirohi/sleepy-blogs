import React, { useState } from "react";
import axios from "axios";
import { AwesomeButton } from "react-awesome-button";
import {
  Form,
  InputText,
  Outer,
  BtnHolder,
  Label,
} from "./input-comment.styles";

const InputComment = ({post_id}) => {
  const [data, updateData] = useState();

  function handleChange(e) {
    updateData({
      ...data,
      [e.target.name]: e.target.value,
    });
  }
  function handleSubmit(e) {
    axios({
        method: 'post',
        url: '/comment',
        params: {
            post_id: post_id,
            ...data
        }
    });
  }
  return (
    <Outer>
      <Form onSubmit={handleSubmit}>
        <Label>Your comment ...</Label>
        <InputText type="text" name="body" onChange={handleChange} />
        <Label>Your User Name (If you are not logged in)</Label>
        <InputText
          type="text"
          name="comment_made_by"
          username
          onChange={handleChange}
        />
        <BtnHolder>
          <AwesomeButton>Post</AwesomeButton>
        </BtnHolder>
      </Form>
    </Outer>
  );
};

export default InputComment;
