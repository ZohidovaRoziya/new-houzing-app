import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { ReactComponent as LogoIcon } from "../../assets/icons/logo-icon.svg";


export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  .mobile {
    display: none;
  }
  @media screen and (max-width: 940px) {
    #btn {
      display: none;
    }
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--primaryColor);
  padding: 0 130px;
  @media screen and (max-width: 940px) {
    padding: 0 18px;
    .mobile {
      display: flex;
      align-items: center;
    }
  }
`;

export const NavbarWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 64px;
  max-width: 1440px;
  font-family: "Montserrat";
  font-size: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  width: 100%;
  color: #fff;
  @media screen and (max-width: 940px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const NavbarBody = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  color: white;
  .active {
    color: #00fff5;
  }
  @media screen and (max-width: 940px) {
    display: none;
  }
`;

export const Link = styled(NavLink)`
color: white;
text-decoration: none;
margin: 0 32px;
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 24px;
`;

export const Logo = styled.div`
display: flex;
align-items: center;
cursor: pointer;
`;

Logo.Icon = styled(LogoIcon)`
margin-left: 11px;
font-size: 20px;
font-weight: 500px;
`;