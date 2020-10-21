import React from 'react'


class Filtro extends React.Component{
    render(){
        return (
            <div>
                <h2>Filtros:</h2>
                <label>Valor Mínimo</label><br/>
                <input type='number'></input><br/>
                <label>Valor Maxímo</label><br/>
                <input type='number'></input><br/>
                <label>Buscar Produto</label><br/>
                <input type='text'></input>
            </div>
        )
    }
}

export default Filtro;