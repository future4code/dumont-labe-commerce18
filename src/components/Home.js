import React from 'react'
import styled from 'styled-components'

const Grid = styled.div `
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: 1fr;
    border: 1px solid blue;
`
// const Borda = styled.h2 `
//     border:1px solid black;
// `

const ImagemCss = styled.img`
  display: grid;
  width: 15rem;
  height: 15rem;
  `

class Home extends React.Component{
    render(){
        return(
            <Grid>                
                {/* <Borda>PRODUTO 1</Borda>
                <Borda>PRODUTO 2</Borda>
                <Borda>PRODUTO 3</Borda>
                <Borda>PRODUTO 4</Borda>
                <Borda>PRODUTO 5</Borda>
                <Borda>PRODUTO 6</Borda>
                <Borda>PRODUTO 7</Borda>
                <Borda>PRODUTO 8</Borda> */}
               <div> 
                <ImagemCss src={this.props.fotoProduto} alt={'Imagem do produto'} />
                <h3>{this.props.descricao}</h3>
                <h3>{this.props.preco}</h3>
                </div>
            </Grid>
        )
    }
}
export default Home