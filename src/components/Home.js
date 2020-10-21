import React from 'react'
import styled from 'styled-components'

const Grid = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  border: 1px solid red;
`
const Borda = styled.h2 `
    border: 1px solid black;
`

class Home extends React.Component {
    render(){
        return(
            <Grid>
                <Borda>Produto 1</Borda>
                <Borda>Produto 2</Borda>
                <Borda>Produto 3</Borda>
                <Borda>Produto 4</Borda>
                <Borda>Produto 5</Borda>
                <Borda>Produto 6</Borda>
                <Borda>Produto 7</Borda>
                <Borda>Produto 8</Borda>
            </Grid>
        )
    }
}

export default Home;