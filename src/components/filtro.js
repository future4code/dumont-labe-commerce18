import React from 'react'

class Filtro extends React.Component {
    render(){
        return (
            <div>
                <h2>Filtros:</h2>
                <label>Valor Mínimo:</label>
                <input type='number'></input>
                <br/>
                <label>Valor Máximo:</label>
                <input type='number'></input>
                <br/>
                <label>Buscar Produtos</label>
                <input type='text'></input>
            </div>
        )
    }
}

export default Filtro;