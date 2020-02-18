import React from "react";
import styled from "styled-components";

const Root = styled.div`
  top: 0;
  position: fixed;
  background: #fff;
  width: 100%;
`;

export default props => {
  

  return <Root>{props.children}</Root>;
};

// export default ({ children }) => <Root>{children}</Root>;
