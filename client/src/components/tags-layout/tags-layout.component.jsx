import React from "react";
import Loader from "react-loader-spinner";
import { Outer, Tags } from "./tags-layout.styles";
const TagLayout = ({ tags }) => {
  var values = [];
  return (
    <Outer>
      {values = tags.map((tag, idx) => (
        <Tags key={idx}>{tag}</Tags>
      ))}
    </Outer>
  );
};
export default TagLayout;
