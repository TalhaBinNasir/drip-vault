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

const Image = styled.img`
  width: 150px;
  min-width: 90px;
`;
