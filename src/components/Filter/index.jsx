import React from 'react';
import Input from "../Generic/Input";
import Button from "../Generic/Button";
import { Popover } from 'antd';
import { Container, ContentWrapper, Icons, Wrapper } from './styles';



export const Filter = () => {
  const content = (
    <ContentWrapper>
      <ContentWrapper.Title>Address</ContentWrapper.Title>
      <ContentWrapper.Fragment1>
        <Input width={'200px'} placeholder={"Country"} />
        <Input width={'200px'} placeholder={"Region"} />
        <Input width={'200px'} placeholder={"City"} />
        <Input width={'200px'} placeholder={"Zip code"} />
      </ContentWrapper.Fragment1>
      <ContentWrapper.Title>Apartment info</ContentWrapper.Title>
      <ContentWrapper.Fragment2>
        <Input placeholder={"Rooms"} />
        <Input placeholder={"Size"} />
        <Input placeholder={"Sort"} />
      </ContentWrapper.Fragment2>
      <ContentWrapper.Title>Price</ContentWrapper.Title>
      <ContentWrapper.Fragment3>
        <Input placeholder={"Min price"} />
        <Input placeholder={"Max price"} />
      </ContentWrapper.Fragment3>
    </ContentWrapper>
  );

  return (
    <Wrapper>
      <Container>
        <Input
          type="text"
          pl={"50px"}
          placeholder={"Enter an address, neighborhood, city, or ZIP code"}
        >
          <Icons.HomeIcon />
        </Input>
        <div className="btnlar">
          <Popover placement="bottomRight" content={content} trigger="click">
            <Button type={"secondary"} mr={"20"} width={"131px"}>
              <Icons.AdvensedIcon />
              Advensed
            </Button>
          </Popover>
          <Button type={"primary"} width={"180px"}>
            <Icons.SearchIcon />
            Search
          </Button>
        </div>
      </Container>
    </Wrapper>
  );
}

export default Filter