import styled from "styled-components";

export const Outer = styled.div`
padding: 10px;
box-shadow: 3px 3px 7px #111111, -3px -3px 7px #252525;
display: flex;
max-width: 300px;
flex-direction: column;
border-radius:10px;
`;

export const Label = styled.label`
color: #b03851;
margin: 1rem 0;
font-size:0.8rem;
`;

export const Value = styled.div`
border-bottom: 1px #252525 solid;
padding-bottom: 10px;
`;

export const ImageHolder = styled.div`
background-image: ${props => `url(${props.profile_image_url});`}
height: 100px;
width: 100px;
margin: auto;
background-repeat: no-repeat;
background-position: center; 
background-size: cover;
border-radius: 20px;
`;

export const EditButton = styled.button`
position: relative;
width: 50px;
height: 1.7rem;
border-radius: 7px;
font-size: 0.9rem;
right: 0px;
outline: none;
background: linear-gradient(145deg, #bb3853, #9e2f46);
border: none;
color: #e8bec7;
    :hover{
    box-shadow: 1px 1px 10px #802639;
    }
    &:focus{
    outline: none;
    }
`;

export const ErrorContainer = styled.div`
background: #a8202e;
color: white;
font-size: 1rem;
display: flex;
align-items: center;
height: 2rem;
padding: 10px 15px;
width: fit-content;
margin-top:1.5rem;
`;