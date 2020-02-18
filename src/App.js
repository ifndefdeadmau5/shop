import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Logo from "./Logo";
import Header from "./Header";
import "./App.css";

const StyledLogo = styled(Logo)`
  width: 100px;
  height: 150px;
  opacity: ${props => props.opacity};
  transition: all 1s ease-in;
`;

function App() {
  const [isOver, setIsOver] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  });

  function listenScrollEvent() {
    if (window.pageYOffset > 500) {
      setIsOver(true);
    } else {
      setIsOver(false);
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <Header>
          <StyledLogo opacity={isOver ? 0 : 1} />
        </Header>
      </header>
    </div>
  );
}

export default App;
