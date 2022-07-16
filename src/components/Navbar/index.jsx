import React from 'react'
import { navbar } from "../../utils/navbar"
import { Outlet, useNavigate } from "react-router-dom"
import { Container, Link, Logo, NavbarBody, NavbarWrapper, Wrapper } from './styles'
import Button from '../Generic/Button'
export const Navbar = () => {
  const navigate = useNavigate()
  return (
    <Wrapper>
      <Container>
        <NavbarWrapper>
          <Logo onClick={() => navigate("/home")}>
            <Logo.Icon />
          </Logo>
          <NavbarBody>
            {navbar.map(({ id, path, title, hidden }) => {
                return (
                  !hidden && (
                    <Link key={id} to={path}>{title}</Link>
                  )
                );
              })}
          </NavbarBody>
          <Button onClick={()=> {navigate("/home")}} width="120px">Log Out</Button>
        </NavbarWrapper>
      </Container>
      <Outlet/>
    </Wrapper>
  )
}

export default Navbar