import React from 'react'
import styled from 'styled-components'
import Produtos from './Produtos'

const Grid = styled.div `
    display:grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows:1fr 1fr;    
    gap:10px;    
`

const FlexProduto = styled.div `
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding:5px;
` 
class Home extends React.Component{

    state = {
        ordena: 'crescente'
    }
    filtraOrdena = ()=>{
        return this.props.listaDeProdutos
            .filter((dados)=>dados.valor >= this.props.filtroMinimo)
            .filter((dados)=>dados.valor <= this.props.filtroMaximo)
            .filter((dados)=>dados.nome.includes (this.props.filtroNome))
            .sort((a,b)=>this.state.sort==='crescente'? a.valor - b.valor:b.valor-a.valor)
        }   

    render(){
        const filtro = this.filtraOrdena()
        return(
            <div>        
                <FlexProduto>
                    <p>Quantidade de produtos: {filtro.length}</p>                    
                    <label>Preço: 
                        <select value={this.state.ordena}>
                            <option value={'crescente'}>Crescente</option>
                            <option value={'decrescente'}>Decrescente</option>
                        </select>     
                    </label>    
                </FlexProduto>
            <Grid>                       
                {filtro.map((dados)=>{
                    return <Produtos listaDeProdutos = {dados}/>
                    })
                }                
            </Grid>
        </div>
        )
    }
}
export default Home