import styled from "styled-components";

export const InputText = styled.textarea`
  width: 50%;
  border: none;
  border-radius: 13px;
  background: #1b1b1b;
  box-shadow: inset 5px 5px 12px #141414, inset -5px -5px 12px #222222;
  margin-bottom: 2rem;
  min-height: ${({ username }) => (username ? "0px" : "200px")};
  overflow: auto;
  color: #a9aab0;
  padding: ${({ username }) => (username ? "10px" : "20px")};
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

export const Outer = styled.div`
  margin: 1.5rem;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const BtnHolder = styled.div`
  width: 250px;
`;

export const Label = styled.div`
  margin-bottom: 1rem;
  margin-left: 5px;
`;

export const DisplayNameHolder = styled.div`
margin-bottom: 1.4rem;
font-size: 0.9rem;
`;

export const DisplayName = styled.span`
color: #af344e;
text-decoration: underline;
weight: 600;
`;