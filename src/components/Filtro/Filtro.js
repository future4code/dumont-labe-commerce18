import React from 'react'
import styled from 'styled-components'
const EstilizaDiv = styled.div`
    display: flex;
    flex-direction:column;
    align-items: flex-start;    
`
const InputEstilizado = styled.div `
    margin:0 10px; // 0 px cima e baixo e 10 px esquerda e direita  
    display:grid;
    grid-template-columns:1fr 1fr;    
    grid-template-rows:1fr 1fr 1fr;  
`
class Filtro extends React.Component{
    render(){
        return (
            <EstilizaDiv>                
                    <h2>Filtros:</h2>
                    <InputEstilizado>
                        <label>Valor Mínimo: </label>
                        <input type='number' value={this.props.filtroMinimo} onChange={this.props.onChangeInputMinimo}></input>                                 
                    </InputEstilizado>
                    <InputEstilizado>
                        <label>Valor Máximo: </label>
                        <input type="number" value={this.props.filtroMaximo} onChange={this.props.onChangeInputMaximo}></input>                                
                    </InputEstilizado>
                    <InputEstilizado>
                        <label>Buscar Produto: </label>
                        <input type='text' value={this.props.filtroNome} onChange={this.props.onChangeInputNome}></input>
                    </InputEstilizado>                
            </EstilizaDiv>
        )
    }
}
export default Filtro;
