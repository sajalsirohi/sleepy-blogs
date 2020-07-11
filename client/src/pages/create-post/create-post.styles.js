import styled from "styled-components";

export const Outer = styled.div`
display: flex;
flex-direction: column;
padding: 10px;
width: 70vw;
margin:  0 auto  ;
margin-bottom: 4rem;
 @media (max-width: 900px) {
    width: 90vw;
  }
`;

export const NoUser = styled.div`
width: 100%;
text-align:center;
margin: 1.5rem;
`;

export const BtnHolder = styled.div`
width: 450px;
margin-top: 1rem;
`;

export const CatAndTag = styled.div`
  padding: 5px 10px;
  display: inline-block;
  margin: 10px;
  background: linear-gradient(145deg, #bb3853, #9e2f46);
  color: #e8bec7;
  border-radius: 5px;
`;

export const CatAndTagCont = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;