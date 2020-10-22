import React from 'react'
import styled from 'styled-components'
import Produto1 from '../../img/camiseta1.png'
import Produto2 from '../../img/camiseta2.jpg'
import Produto3 from '../../img/camiseta3.jpg'
import Produto4 from '../../img/camiseta4.jpg'
import Produto5 from '../../img/camiseta5.jpg'
import Produto6 from '../../img/camiseta6.jpg'
import Produto7 from '../../img/camiseta7.jpg'
import Produto8 from '../../img/camiseta8.jpg'


const DivProduto = styled.div `
    border:1px solid black;
    display:flex;
    flex-direction:column;
    padding:10px;
    label,button{
        margin:5px 0;
    }
`
const TamanhoImagem = styled.img `
    height:200px;
    width:200px;
` 
class Produtos extends React.Component{
    render (){
        return <DivProduto>
            <TamanhoImagem src={Produto1}/>    
            <label>Descrição</label>        
            <label>Preço</label>
            <button>Adicionar Carrinho</button>
        </DivProduto>
    }
}

export default Produtos