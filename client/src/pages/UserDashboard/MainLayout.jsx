import React from "react";
import { Outlet } from "react-router-dom";
import { LeftSidebar, MobileProfileBar } from "../../components";
import styled from "styled-components";
const MainLayout = () => {
  return (
    <>
      <div className="section-center">
        <MobileProfileBar />
        <Wrapper>
          <LeftSidebar />
          <Outlet />
        </Wrapper>
      </div>
    </>
  );
};

export default MainLayout;

const Wrapper = styled.div`
  display: flex;
`;
