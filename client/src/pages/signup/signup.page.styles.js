import styled from "styled-components";

export const Outer = styled.div`
display: flex;
flex-direction: column;
box-shadow: 3px 3px 7px #111111, -3px -3px 7px #252525;
padding: 10px;
margin: 3rem 0px;
width: 50%;
margin-left: auto;
margin-right: auto;
 @media (max-width: 980px) {
    width: 90%;
  }
`;

export const SignUpSignIn = styled.div`
display: flex;
margin-bottom: 1rem;
`;

export const Btns = styled.div`
color: ${props => props.active ? "#802639": "pink"};
border-bottom: ${props => props.active ? "1px solid #802639" : "none"};
height: 3rem;
width: 50%;
display: flex;
justify-content: center;
align-items: center;
cursor: pointer;

&:hover{
text-decoration: underline;
}
`;