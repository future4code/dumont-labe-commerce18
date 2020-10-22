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
    render(){
        return(
            <div>        
                <FlexProduto>
                    <p>Quantidade de produtos: 4</p>                    
                    <label>Preço: 
                        <select>
                            <option>Crescente</option>
                            <option>Decrescente</option>
                        </select>     
                    </label>    
                </FlexProduto>
            <Grid>                       
                <Produtos/>                                                           
                <Produtos/>
                <Produtos/>
                <Produtos/>
                <Produtos/>
                <Produtos/>
                <Produtos/>
                <Produtos/>
            </Grid>
        </div>
        )
    }
}
export default Home