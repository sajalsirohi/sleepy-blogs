import styled from "styled-components";

export const Outer = styled.div`
  width: 70%;

  padding: 20px;
  margin: 0 auto;
  margin-bottom: 4rem;
  @media (max-width: 1000px) {
    width: 95%;
    padding: 5px;
  }
`;

export const Title = styled.div`
  color: #802639;
  text-shadow: 0px 0px 20px;
  text-decoration: underline;
  text-decoration-thickness: 2px;
  font-size: 2rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
  text-align: center;
`;
export const LoadContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
`;

export const TopSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const TextSection = styled.div`
  box-shadow: 3px 3px 7px #111111, -3px -3px 7px #252525;
  padding: 15px;
  font-size: 1.3rem;
  line-height: 2rem;
  margin-top: 1.5rem;
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

export const Tag = styled.div`
  font-size: 1.5rem;
  font-weight: 600;
  display: inline-block;
  margin: 10px;
  @media (max-width: 1000px) {
    margin-right: 5px;
  }
`;

export const NoComments = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #4a4a4a;
  margin-top: 2rem;
`;

export const BtnContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  width: 320px;
`;

export const LikesContainer = styled.div`
color: #bb3853;
 font-weight: 600;
 position: relative;
 right: 45px;
 margin-right: -30px;
 font-size: 1.3rem;
 `;
