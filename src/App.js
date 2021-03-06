import React from 'react';
import Filtro from "./components/Filtro/Filtro"
import Home from "./components/Home/Home"
import Carrinho from "./components/Carrinho/Carrinho"
import Cabecalho from "./components/Cabecalho/Cabecalho"
import styled from "styled-components"
import Camiseta1 from './img/camiseta1.png'
import Camiseta2 from './img/camiseta2.jpg'
import Camiseta3 from './img/camiseta3.jpg'
import Camiseta4 from './img/camiseta4.jpg'
import Camiseta5 from './img/camiseta5.jpg'
import Camiseta6 from './img/camiseta6.jpg'
import Camiseta7 from './img/camiseta7.jpg'
import Camiseta8 from './img/camiseta8.jpg'
import FundoDiv from './img/fundo.jpg'
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
const GridDiv = styled.div`
  display:grid;  
  grid-template-rows: 1fr;
  grid-template-columns: 1fr 3fr 1fr;
  padding:10px;  
  gap:10px;
`
const DivBody = styled.div`
  background: url(${FundoDiv});
  color:white;
`
class App extends React.Component {
  state = {
    filtroMinimo:-Infinity,
    filtroMaximo: Infinity,
    filtroNome: '',    
  }
  onChangeInputMinimo = (event)=>{
    if (event.target.value===''){
      this.setState({filtroMinimo:-Infinity})
    }else{
      this.setState({filtroMinimo:event.target.value})    
    }
  }
  onChangeInputMaximo = (event)=>{
    if (event.target.value===''){
      this.setState({filtroMaximo:Infinity})
    }else{
      this.setState({filtroMaximo:event.target.value})    
    }
  }
  onChangeInputNome = (event) =>{
    this.setState({filtroNome:event.target.value})
  }
  onClickAdiciona = ()=>{
    const listaCarrinho=[{
      id:listaDeProdutos.id,
      nome:listaDeProdutos.nome,
      valor:listaDeProdutos.valor
    }]
  }
  render(){
    return (
      <DivBody>      
        <Cabecalho/>
        <GridDiv>        
          <Filtro
            filtroMinimo={this.state.filtroMinimo}
            filtroMaximo={this.state.filtroMaximo}
            filtroNome={this.state.filtroNome}   
            onChangeInputMinimo={this.onChangeInputMinimo}         
            onChangeInputMaximo={this.onChangeInputMaximo}
            onChangeInputNome={this.onChangeInputNome}
          />
          <Home
           listaDeProdutos={listaDeProdutos}
           filtroMinimo={this.state.filtroMinimo}
           filtroMaximo={this.state.filtroMaximo}
           filtroNome={this.state.filtroNome}
           onClickAdiciona={this.onClickAdiciona}
          />
          <Carrinho/>
        </GridDiv>
      </DivBody>
    );
  }
}
export default App;