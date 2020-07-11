import styled from "styled-components";

export const Outer = styled.div`
width: 85vw;
padding: 10px;
margin: 0 auto;
margin-bottom: 4rem;
`;

export const FilterHolder = styled.div`
display: flex;
flex-wrap: wrap;
margin: 1rem 0;
align-items: center;
@media (max-width: 600px) {
  margin-left: 0;
}   
`;

export const SearchCont = styled.div`
width: 300px;
margin: 0 1.5rem;
position: relative;
top: 9px;
@media (max-width: 600px) {
  margin-left: 0;
  right: 13px;

}
`;