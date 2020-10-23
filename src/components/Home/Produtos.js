import React from 'react'
import styled from 'styled-components'

const DivProduto = styled.div `
    border:1px solid #6B50A9;
    display:flex;
    flex-direction:column;
    padding:10px;
    label,button{
        margin:5px 0;
    }
`
const TamanhoImagem = styled.img `
    height:200px;
    width:200px;
    background-color:black;
    margin:0 auto;
` 
const BotaoEstilizado = styled.button`
    background-color:#6B50A9;
    border-radius:5%;
    height:30px;    
    color:white;
`

class Produtos extends React.Component{
    

    render (){
        const listaDeProdutos = this.props.listaDeProdutos
        return <DivProduto>
            <TamanhoImagem src={listaDeProdutos.imagem}/>    
            <label>{listaDeProdutos.nome}</label>        
            <label>R$:{listaDeProdutos.valor}</label>
            <BotaoEstilizado>Adicionar Carrinho</BotaoEstilizado>
        </DivProduto>
    }
}

export default Produtos