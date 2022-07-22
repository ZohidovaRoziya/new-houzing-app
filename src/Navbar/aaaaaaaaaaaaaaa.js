import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { ReactComponent as Logo } from "../../assets/icons/logo.svg";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 130px;
  background-color: var(--primaryColor);
  .mobile {
    display: none;
  }
  @media screen and (max-width: 870px) {
    padding: 0 16px;
    .mobile {
      display: block;
    }
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

Container.Logo = styled(Logo)`
  :hover {
    cursor: pointer;
  }
`;

Container.Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: all 0.2s linear;
  .active {
    transition: all 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    font-weight: 900;
    transform: scale(1.2, 1.2);
    font-weight: 900;
  }
  @media screen and (max-width: 870px) {
    display: none;
  }
`;

const LinkItem = styled(NavLink)`
  display: flex;
  margin-right: ${({ mr }) => (mr ? "64px" : 0)};
  font-family: "Montserrat";
  font-style: normal;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
  text-decoration: none;
  transition: all 0.3s linear;
  :hover {
    transition: all 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    cursor: pointer;
  }
`;

// Container.Button = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   width: 131px;
//   height: 44px;
//   border: 1px solid white;
//   font-family: "Montserrat";
//   font-style: normal;
//   font-weight: 400;
//   font-size: 14px;
//   line-height: 20px;
//   color: #ffffff;
//   border-radius: 2px;
//   :hover {
//     cursor: pointer;
//   }
//   :active {
//     transition: all 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);
//     transform: scale(0.9, 0.9);
//   }
// `;
const Navbari = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1440px;
  width: 100%;
  height: 64px;
  /* @media screen and (max-width: 870px) {
    display: flex;
    flex-direction: column;
  } */
`;

export { Container, Wrapper, LinkItem, Navbari };
