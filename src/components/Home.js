import React from 'react'
import styled from 'styled-components'

const Grid = styled.div `
    display:grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows:1fr 1fr;
    border: 1px solid blue;
`
const Borda = styled.h2 `
    border:1px solid black;
`

class Home extends React.Component{
    render(){
        return(
            <Grid>                
                <Borda>PRODUTO 1</Borda>
                <Borda>PRODUTO 2</Borda>
                <Borda>PRODUTO 3</Borda>
                <Borda>PRODUTO 4</Borda>
                <Borda>PRODUTO 5</Borda>
                <Borda>PRODUTO 6</Borda>
                <Borda>PRODUTO 7</Borda>
                <Borda>PRODUTO 8</Borda>
            </Grid>
        )
    }
}
export default Home