import React from "react";
import Loader from "react-loader-spinner";
import {
  OuterContainer,
  Category,
} from "./categories-layout.styles";

const CatLayout = ({ categories }) => {
  var values = [];
  return (
    <OuterContainer>
      {(values = categories.map((category) => <Category>{category}</Category>))}
    </OuterContainer>
  );
};
export default CatLayout;
