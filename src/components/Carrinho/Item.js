import React from 'react'
import styled from 'styled-components'

const ItemEstilizado = styled.div `
    display:grid;
    grid-auto-flow:column;
    gap:8px;
    align-items:center;
    p{
        margin:0;
    }
`
class Item extends React.Component{
    render(){
        return(
            <ItemEstilizado>
                <p>1x</p>
                <p>Produto</p>
                <button>Remover</button>                
            </ItemEstilizado>
        )
    }
}

export default Item