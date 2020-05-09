import React from 'react'
import './Header.scss';
import Logo from '../../assets/img/logo.png'
import './Header.scss'
const Header=() =>{
    return(
        <div className= 'container-header'>
       <img src= {Logo} altt ="logo"></img>
       <h1>DAILY </h1>
        </div>
    )
}
export default Header;