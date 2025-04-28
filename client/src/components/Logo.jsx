import React from "react";
import styled from "styled-components";
import logo from "../assets/logo-navbar.png";
import { Link } from "react-router-dom";
const Logo = () => {
  return (
    <Wrapper>
      <Link to="/">
        <Image src={logo} />
      </Link>
    </Wrapper>
  );
};

export default Logo;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 20%;
  min-width: 245px;
`;

const Title = styled.h2`
  display: flex;
  align-items: center;
  padding-left: 5px;
`;
const Image = styled.img`
  width: 7%;
  min-width: 80px;
`;
