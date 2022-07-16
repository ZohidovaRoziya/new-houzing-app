import React, {memo} from 'react';
import { Container } from './styles';


export const Button = ({
    children,
    onClick,
    height,
    width,
    type,
    mr,
    ml,
    mb,
    mt
}) => {
  return (
    <Container
    mr={mr}
    ml={ml}
    mb={mb}
    mt={mt}
    type={type}
    width={width}
    height={height}
    onClick={onClick}
    >
        {children}
    </Container>
  );
};

export default memo(Button);
