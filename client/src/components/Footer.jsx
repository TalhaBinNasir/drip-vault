import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <Wrapper>
      <Container>
        <div>
          Drip Vault <br />
          2025 &copy; All Rights Reserved.
        </div>
      </Container>
    </Wrapper>
  );
};

export default Footer;

const Wrapper = styled.div``;
const Container = styled.div`
  background-color: var(--clr-primary-2);
  margin-top: 5rem;
  height: 10vh;
  width: 100%;
  padding: 1rem;
  text-align: center;
  color: white;
`;
