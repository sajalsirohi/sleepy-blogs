import styled from "styled-components";

export const Outer = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #613449;
  margin: 10px;
  padding: 10px;
  padding-bottom: 20px;
  width: 60%;
  @media (max-width: 700px) {
    width: 100%;
  }
`;

export const UserInfo = styled.div`
  display: flex;
  color: #855f71;
  text-decoration: underline;
  font-size: 1.2rem;
`;

export const CommentBody = styled.div`
  box-shadow: 3px 3px 7px #111111, -3px -3px 7px #252525;
  padding: 10px;
  line-height: 1.8rem;
  margin: 15px;
  padding-left: 20px;
  font-size: 1.2rem;
`;

export const TopSection = styled.div`
display: flex;
justify-content: space-between;
`;

export const DateHolder = styled.div`
font-weight: 500;
`;
