import styled from "styled-components";

export const Outer = styled.div`
  display: flex;
  flex-wrap: row;
  margin: 2rem 0;
  img {
    width: auto;
    height:70px;
    border-radius: 70px;
  }
`;

export const NameHolder = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1.5rem;
`;

export const DisplayName = styled.div`
  color: #802639;
  font-size: 1.5rem;
  text-shadow: 0px 0px 20px;
`;

export const UserName = styled.div`
  font-size: 1rem;
`;
