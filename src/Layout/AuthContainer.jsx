import React from "react";
import styled from "styled-components";

const AuthContainerStyle = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(79deg, #7439db, #c66fbc, #f7944d);

  text-align: center;
  display: flex;
  min-height: 100 vh;
  align-items: center;
  justify-content: center;
  color: white;
`;

function AuthContainer({ children }) {
  return <AuthContainerStyle>{children}</AuthContainerStyle>;
}

export default AuthContainer;
