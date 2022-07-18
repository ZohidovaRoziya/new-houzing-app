import React, { forwardRef } from 'react';
import { Container, Icon, Wrapper } from './styles';


export const Input = forwardRef(
  (
    {
  children,
  onClick,
  height,
  width,
  type,
  mr,
  ml,
  mb,
  mt,
  pl,
  onChange,
  placeholder,
  defaultValue,
  name,
  value
}, ref
  ) => {
  return (
    <Wrapper
      mr={mr}
      ml={ml}
      mb={mb}
      mt={mt}
    >
      <Icon>{children}</Icon>
      <Container
        ref={ref}
        defaultValue={defaultValue}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        pl={pl}
        type={type}
        width={width}
        height={height}
        onClick={onClick}
        name={name}
      />
    </Wrapper>
  );
});

export default Input;
