import React from 'react'
import styled from 'styled-components'
import Item from './Item'

const CarrinhoEstilizado = styled.div `
    display:grid;    
    gap:4px;
`
class Carrinho extends React.Component{
    render(){
        return(
            <div>
                <h2>Carrinho</h2>
                <CarrinhoEstilizado>
                    <Item/>
                    <Item/>
                    <Item/>
                    <Item/>
                    <p>Valor total: R$100,00</p>
                </CarrinhoEstilizado>
            </div>
        )
    }    
}

export default Carrinho