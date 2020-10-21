import React from 'react';
import Filtro from "./components/Filtro"
import Home from "./components/Home"
import Carrinho from "./components/Carrinho"
import styled from "styled-components"

const GridDiv = styled.div`
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr 1fr 1fr;
  border: 1px solid red;
`

function App() {
  return (
    <div>
      <GridDiv>
      <Filtro/>
      <Home/>
      <Carrinho/>
      </GridDiv>
    </div>
  );
}

export default App;
