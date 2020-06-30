import styled from "styled-components";

export const Outer = styled.div`
  display: flex;
  flex-direction: row;
  flex-flow: row wrap;
  align-items: center;
  justify-content: center;
  box-shadow: 3px 3px 7px #111111, -3px -3px 7px #252525;
  margin: 1rem 0;
  margin-bottom: 4rem;
  padding: 1.5rem 0;
`;

export const Tags = styled.div`
  font-size: 1.2rem;
  padding: 15px 25px;
  cursor: pointer;
  border-radius: 20px;
  margin: 10px;
  border: 1px solid #631d2c;
  display: inline-block;
  text-align: center;
  transition: transform 0.2s;
  height: auto;
  &:hover {
    color: #631d2c;
    box-shadow: 0 0px 40px #631d2c;
    animation: overshadow 350ms ease-out alternate;
    transform: scale(1.1);
    box-shadow: 0 0px 40px #631d2c;
  }
`;
