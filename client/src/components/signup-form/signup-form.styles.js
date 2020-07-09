import styled from "styled-components";

export const Outer = styled.div`
display: flex;
padding: 10px;
flex-direction: column;
margin-bottom: 1rem;
`;

export const BtnHolder = styled.div`
width:100%;
text-align:right;
display: flex;
justify-content:space-around;
`;

export const Span = styled.span`
color:  #af344e;
text-decoration: underline;
cursor: pointer;
margin-left: 0.5rem;
`;

export const Bottom = styled.div`
margin-top: 1.5rem;
`;

export const ErrorContainer = styled.div`
background: #a8202e;
color: white;
font-size: 1rem;
display: flex;
align-items: center;
height: fit-content;
padding: 10px 15px;
width: fit-content;
margin:1.5rem 0 ;
border-radius: 5px;
`;