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
                background: "#0061gf",
                border: "none",
                color: "#fff"
            };
        default:
            return {
                border: "1px solid #e6e9ec",
                color: "#000",
            }
    };
};

export const Container = styled.input   `
display: flex;
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 20px;
border-radius: 2px;
border: var(--border);
width: ${({width}) => (width || "100%")};
min-width: ${({width}) => (width ? width : "100%")};
height: ${({height}) => height || "44px"};
padding-left: ${({pl}) => pl || "15px"};
margin-right: ${({mr}) => `${mr}px`};
margin-left: ${({ml}) => `${ml}px`};
margin-top: ${({mt}) => `${mt}px`};
margin-bottom: ${({mb}) => `${mb}px`};
 ${({type}) => getType(type)};
 :focus {
    outline: 1px solid blue;
    outline-offset: 0px;
 }
 
`;

export const Wrapper = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  color: black;
  margin-right: ${({ mr }) => `${mr}px`};
  margin-left: ${({ ml }) => `${ml}px`};
  margin-top: ${({ mt }) => `${mt}px`};
  margin-bottom: ${({ mb }) => `${mb}px`};
`;

export const Icon = styled.div`
position: absolute;
transform: translate(-50%, -50%);
top: 50%;
left: 30px;
`;