import React from "react";
import Filtro from "./components/Filtro"
import Home from "./components/Home"
import Carrinho from "./components/Carrinho"
import BlusaCinco from "./components/img/camiseta5.jpg"
import styled from "styled-components"

const DivGeral = styled.div`
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: repeat(4, 1fr);
  border: 1px solid red;
`

const Produtos = styled.div



function App() {
  return (
    <div>
      <DivGeral>
        <div> 
          <Filtro/>
        </div>
        <div> 
          <Home
          fotoProduto={BlusaCinco}
          descricao={'Blusa..'}
          preco={'R$ 50,00'}
          />
          <Home
          fotoProduto={BlusaCinco}
          descricao={'Blusa..'}
          preco={'R$ 50,00'}
          />
          <Home
          fotoProduto={BlusaCinco}
          descricao={'Blusa..'}
          preco={'R$ 50,00'}
          />
          <Home
          fotoProduto={BlusaCinco}
          descricao={'Blusa..'}
          preco={'R$ 50,00'}
          />
        </div>
        <div> 
          <Home
          fotoProduto={BlusaCinco}
          descricao={'Blusa..'}
          preco={'R$ 50,00'}
          />
          <Home
          fotoProduto={BlusaCinco}
          descricao={'Blusa..'}
          preco={'R$ 50,00'}
          />
          <Home
          fotoProduto={BlusaCinco}
          descricao={'Blusa..'}
          preco={'R$ 50,00'}
          />
          <Home
          fotoProduto={BlusaCinco}
          descricao={'Blusa..'}
          preco={'R$ 50,00'}
          />
        </div>

        <Carrinho/>
      </DivGeral>
    </div>
  );
}
export default App;
