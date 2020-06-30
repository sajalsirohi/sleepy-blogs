import styled from "styled-components";

export const Outer = styled.div`
  display: flex;
  cursor: pointer;
  flex-direction: column;
  box-shadow: 3px 3px 7px #111111, -3px -3px 7px #252525;
  padding: 20px;
  transition: transform 0.2s;

  &:hover {
    box-shadow: 0 0px 40px #631d2c;
    animation: overshadow 350ms ease-out alternate;
    transform: scale(1.05);
  }

  @keyframes overshadow {
    0% {
      box-shadow: 3px 3px 7px #111111, -3px -3px 7px #252525;
    }
    100% {
      box-shadow: 0 0px 40px #631d2c;
    }
  }
`;

export const TitleContainer = styled.div`
  font-size: 1.7rem;
  margin: 1rem 0;
  color: #802639;
  text-decoration: underline;
`;

export const UserInfo = styled.div`
  display: flex;
  justify-content: space-between;
  img {
    width: 50px;
    border-radius: 50px;
  }
`;

export const TextSection = styled.div`
  font-size: 1.2rem;
  line-height: 2rem;
  cursor: auto;
`;

export const Interaction = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 2rem;
`;

export const NameHolder = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ImgAndNameHolder = styled.div`
  display: flex;
  width: 160px;
  justify-content: space-between;
`;
