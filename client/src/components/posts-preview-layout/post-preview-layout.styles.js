import styled from "styled-components";

export const OuterContainer = styled.div`
  display: grid;
  grid-gap: 40px;
  box-shadow: 3px 3px 7px #111111, -3px -3px 7px #252525;
  grid-template-columns: 1fr 1fr 1fr ;
  padding: 35px;
  justify-content: center;

  @media (max-width: 1180px) {
    grid-gap: 30px;
    padding: 15px;
    grid-template-columns: 1fr 1fr ;
  }

  @media (max-width: 700px) {
    grid-gap: 20px;
    padding: 10px;
    grid-template-columns: 1fr;
  }
`;
