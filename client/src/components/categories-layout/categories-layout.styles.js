import styled from "styled-components";

export const OuterContainer = styled.div`
  display: grid;
  grid-gap: 40px;
  box-shadow: 3px 3px 7px #111111, -3px -3px 7px #252525;
  grid-template-columns: 1fr 1fr 1fr;
  padding: 55px;
  cursor: pointer;

  @media (max-width: 1300px) {
    grid-gap: 30px;
    padding: 35px;
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 700px) {
    grid-gap: 20px;
    padding: 30px;
  }
`;

export const Category = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 10rem;
  box-shadow: 3px 3px 7px #111111, -3px -3px 7px #252525;
  padding: 10px;
  transition: transform 0.2s;
  font-size: 1.4rem;

  &:hover {
    color: #631d2c;
    text-shadow: 0px 0px 10px;
    box-shadow: 0 0px 40px #631d2c;
    animation: overshadow 350ms ease-out alternate;
    transform: scale(1.1);
  }
`;

