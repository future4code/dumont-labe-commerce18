import React from 'react'
import styled from 'styled-components'

const DivProduto = styled.div `
    border:1px solid black;
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
` 
class Produtos extends React.Component{
    render (){
        const listaDeProdutos = this.props.listaDeProdutos
        return <DivProduto>
            <TamanhoImagem src={listaDeProdutos.imagem}/>    
            <label>{listaDeProdutos.nome}</label>        
            <label>R$:{listaDeProdutos.valor}</label>
            <button>Adicionar Carrinho</button>
        </DivProduto>
    }
}

export default Produtos