import React from "react";
// import Filtro from "./components/Filtro"
import Home from "./components/Home"
import Carrinho from "./components/Carrinho"
import BlusaCinco from "./components/img/camiseta5.jpg"
import styled from "styled-components"
import Camiseta1 from './img/camiseta1.png'
import Camiseta2 from './img/camiseta2.jpg'
import Camiseta3 from './img/camiseta3.jpg'
import Camiseta4 from './img/camiseta4.jpg'
import Camiseta5 from './img/camiseta5.jpg'
import Camiseta6 from './img/camiseta6.jpg'
import Camiseta7 from './img/camiseta7.jpg'
import Camiseta8 from './img/camiseta8.jpg'

const listaDeProdutos = [
  {
    id:1,
    nome: 'Camiseta Nasa',
    valor: 40,
    imagem: Camiseta1
  }, 
  {
    id:2,
    nome: 'Camiseta Planetas Flex',
    valor: 50,
    imagem: Camiseta2
  }, 
  {
    id:3,
    nome: 'Camiseta Planetas Grid',
    valor: 30,
    imagem:Camiseta3 
  }, 
  {
    id:4,
    nome: 'Camiseta AstroBot Planetas',
    valor: 50,
    imagem: Camiseta4
  }, 
  {
    id:5,
    nome: 'Camiseta Colete AstroBot',
    valor: 60,
    imagem: Camiseta5
  }, 
  {
    id:6,
    nome: 'Camiseta Planeta Balões',
    valor: 30,
    imagem: Camiseta6
  }, 
  {
    id:7,
    nome: 'Camiseta FrankeinBot',
    valor: 50,
    imagem: Camiseta7
  }, 
  {
    id:8,
    nome: 'Camiseta AstroBot Suave',
    valor: 40,
    imagem: Camiseta8
  }, 
]

const DivGeral = styled.div`
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: repeat(4, 1fr);
  border: 1px solid red;
`

function App() {
  return (
    <div>
      <DivGeral>
        <div> 
          {/* <Filtro/> */}
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
