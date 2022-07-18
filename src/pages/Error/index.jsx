import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container } from './styles';
import ErrorImg from "../../assets/images/errorImg.png"


export const Generic = () => {
  const navigate = useNavigate()
  return (
    <Container>
      <img src={ErrorImg} alt="error" />
      <p>
        <strong style={{fontSize: "22px"}}>
            {window.location.pathname}  - Page not found :(
        </strong>
        <br/>
        <br />
        <Container.Button onClick={()=> navigate("/home")}>
          Go Home
        </Container.Button>
      </p>
    </Container>
  )
}

export default Generic