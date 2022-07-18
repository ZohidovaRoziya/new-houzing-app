import styled from "styled-components";

export const Container = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
width: 100%;
height: 100vh;
`;

Container.Button = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  width: 131px;
  height: 44px;
  border: 1px solid #06FF00;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  color: black;
  background-color: #06FF00;
  border-radius: 2px;
  :hover {
    cursor: pointer;
  }
  :active {
    transition: all 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    transform: scale(0.9, 0.9);
  }
`;