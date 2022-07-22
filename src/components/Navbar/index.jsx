import React from 'react'
import { navbar } from "../../utils/navbar"
import { Outlet, useNavigate } from "react-router-dom"
import { Container, Link, Logo, NavbarBody, NavbarWrapper, Wrapper } from './styles'
import Button from '../Generic/Button'
import {ReactComponent as Bars} from "../../assets/icons/nav.svg"
import {ReactComponent as User} from "../../assets/icons/user.svg"
export const Navbar = () => {
  const navigate = useNavigate()
  return (
    <Wrapper>
      <Container>
        <NavbarWrapper>
          <Logo onClick={() => navigate("/home")}>
            <Bars className='mobile'/>
            
          </Logo>
          <Logo.Icon />
          <NavbarBody>
            {navbar.map(({ id, path, title, hidden }) => {
                return (
                  !hidden && (
                    <Link key={id} to={path}>{title}</Link>
                  )
                );
              })}
          </NavbarBody>
          <div id="btn"><Button onClick={() => { navigate("/home") }} width="120px">Log Out</Button></div>
          <User className='mobile' />
        </NavbarWrapper>
      </Container>
      <Outlet/>
    </Wrapper>
  )
}

export default Navbar