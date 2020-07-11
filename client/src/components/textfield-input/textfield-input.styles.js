import styled from "styled-components";

export const InputText = styled.textarea`
  width: 80%;
  border: none;
  border-radius: 13px;
  background: #1b1b1b;
  box-shadow: inset 5px 5px 12px #141414, inset -5px -5px 12px #222222;
  margin-bottom: 1rem;
  min-height: ${({ blog }) => (blog ? "300px" : "0px")};
  overflow: auto;
  color: #a9aab0;
  padding: ${({ blog }) => (blog ? "20px" : "20px 20px 0px 20px")};
  line-height: 1.5rem;
  font-size: 1.2rem;
  word-wrap: break-word;
  word-break: break-all;
 
  &:focus {
    outline: none;
  }

  @media (max-width: 1000px) {
    width: 100%;
  }
`;

export const Label = styled.div`
color: #802639;
text-shadow: 1px 1px 20px #802639;
margin: 1rem 0;
font-size: 1.6em;
`;