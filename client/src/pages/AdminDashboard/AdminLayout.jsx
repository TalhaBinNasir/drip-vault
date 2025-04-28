import React from "react";
import { Outlet } from "react-router-dom";
import { LeftSidebar } from "../../components";
import styled from "styled-components";
const AdminLayout = ({ admin }) => {
  return (
    <>
      <div className="section-center">
        <Wrapper>
          <LeftSidebar admin />
          <Outlet />
        </Wrapper>
      </div>
    </>
  );
};

export default AdminLayout;

const Wrapper = styled.div`
  display: flex;
`;
