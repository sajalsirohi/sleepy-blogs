import styled from "styled-components";

export const Outer = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
align-items: center;`;

export const NameHolder = styled.div`
margin:1.5rem;
color: #802639;
text-shadow: 1px 1px 20px #802639;
@media (max-width: 600px) {
  margin-left: 0;
}   
`;