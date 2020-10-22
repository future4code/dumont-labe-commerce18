import React from 'react'
import styled from 'styled-components'

const EstilizaDiv = styled.div`
    display: flex;
    flex-direction:column;
    align-items: flex-start;    
`
const InputEstilizado = styled.div `
    margin:0 10px; // 0 px cima e baixo e 10 px esquerda e direita        
`
class Filtro extends React.Component{
    render(){
        return (
            <EstilizaDiv>                
                    <h2>Filtros:</h2>
                    <InputEstilizado>
                        <label>Valor Mínimo:</label>
                        <input type='number'></input>                               
                    </InputEstilizado>
                    <InputEstilizado>
                        <label>Valor Máximo:</label>
                        <input type="number"></input>                                
                    </InputEstilizado>
                    <InputEstilizado>
                        <label>Buscar Produto</label>
                        <input type='text'></input>
                    </InputEstilizado>
                
            </EstilizaDiv>
        )
    }
}

export default Filtro;