import React from 'react'
import Logo from '../../img/logo.png'
import styled from 'styled-components'
import Imagem from '../../img/fundoCabecalho.png'

const TamanhoDiv = styled.div `
    border:3px solid #6B50A9;
    background-color:orange;
    display:flex;
    align-items:center;    
    background-image: url(${Imagem});
`
const ImgLogo = styled.img`
    height:150px;
    width:150px;
    padding:30px;    
`
const TituloLogo = styled.div`
    display:flex;
    align-items:center;
    margin:0 500px;
    font-size:2em;
    color:#6B50A9;    
`
const ImgCabecalho = styled.div`    
    display:flex;
           
` 
const Branco = styled.span `
    color:white;
`
class Cabecalho extends React.Component{
    render(){
        return(
            <TamanhoDiv>                             
                <ImgCabecalho>
                    <ImgLogo src={Logo}/>                                        
                </ImgCabecalho>                
                <TituloLogo>
                    <h1>Astro<Branco>Nave</Branco></h1>
                </TituloLogo>                
            </TamanhoDiv>
        )
    }
}
export default Cabecalho