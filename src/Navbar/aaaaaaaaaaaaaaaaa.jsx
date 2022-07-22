import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { navbar } from "../../utils/navbar";
import Button from "../Generic/Button";
import { Container, LinkItem, Navbari, Wrapper } from "./aaaaaaaaaaaaaaa";
import { ReactComponent as Hamburger } from "../../assets/icons/nav.svg";
import { ReactComponent as User } from "../../assets/icons/user.svg";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <Container>
        <Navbari>
          <Hamburger className="mobile" />
          <Container.Logo />
          <Container.Wrapper>
            {navbar?.map((value) => {
              return (
                !value.hidden && (
                  <LinkItem mr={value.mr} key={value.id} to={value.path}>
                    {value.title}
                  </LinkItem>
                )
              );
            })}
          </Container.Wrapper>
          <Button width={"120px"} onClick={() => navigate("/signin")}>
            Login
          </Button>
          <User className="mobile" />
        </Navbari>
      </Container>
      <Outlet />
    </Wrapper>
  );
};

export default Navbar;
