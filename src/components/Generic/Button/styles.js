import styled from "styled-components";

const getType = (type) => {
    switch (type) {
        case 'secondary':
            return {
                border: "1px solid #e6e9ec",
                color: "#0d2636"
            };
        case 'primary':
            return {
                backgroundColor: "#0061DF",
                border: "none",
                color: "#fff"
            };
        default:
            return {
                border: "1px solid #e6e9ec",
                color: "#fff"

            }
    };
};

export const Container = styled.div`
  display: flex;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  justify-content: center;
  align-items: center;
  height: ${({ height }) => height || "44px"};
  /* min-width: ${({ width }) => (width ? width : "100%")}; */
  width: ${({ width }) => width && width};
  border-radius: 2px;
  margin-right: ${({ mr }) => `${mr}px`};
  margin-left: ${({ ml }) => `${ml}px`};
  margin-top: ${({ mt }) => `${mt}px`};
  margin-bottom: ${({ mb }) => `${mb}px`};
  cursor: pointer;
  ${({ type }) => getType(type)}
  :active {
    transform: scale(0.98);
    opacity: 0.7;
  }
  @media screen and (max-width: 940px) {
    width: 137px;
  }
`;