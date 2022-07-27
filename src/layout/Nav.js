import React from 'react'
import { NavLink } from "react-router-dom"
import styled from 'styled-components'
import ttLogo from '../img/logo.png'
import footerBg from '../img/hamburger.svg'

const navs = [
    {
        path: '/artists',
        name: 'Artists'
    },
    {
        path: '/about',
        name: 'About',
    },
]

const Nav = () => {
    return <nav class="main__nav">
    <div class="menu">
      <li class="logo"><NavLink exact to="/"><img class="tt__records" src={ttLogo} alt="" /></NavLink></li>
    <div class="menu__inner__container">
    <ul class="nav__menu">
    {navs.map(
        (navItem) => (
            <li class="item">
                <NavLink exact to={navItem.path} activeClassName="underline">{navItem.name}</NavLink>
            </li>
        ))}
    </ul> 
    
    <ul class="mobile__nav__menu">
        <li class="item"><a href="#">Artists</a></li>
        <li class="item"><a href="#">Shop</a><input type="search"></li>
        <li class="item"><a href="#">About</a></li>
        <li class="item"><a href="#">Search</a></li>
    </ul>
    
    <div class="control-group">
        <label class="control control--radio">Releases
          <input type="radio" name="radio" checked="checked"/>
          <div class="control__indicator"></div>
        </label>
        <label class="control control--radio">Video
          <input type="radio" name="radio"/>
          <div class="control__indicator"></div>
        </label>
        <label class="control control--radio">Editorial
            <input type="radio" name="radio"/>
            <div class="control__indicator"></div>
        </label>
        <label class="control control--radio">Events
            <input type="radio" name="radio"/>
            <div class="control__indicator"></div>
        </label>
        <label class="control control--radio">Radio
            <input type="radio" name="radio"/>
            <div class="control__indicator"></div>
        </label>
        <label class="control control--radio">All
            <input type="radio" name="radio"/>
            <div class="control__indicator"></div>
        </label>
      </div>
    </div>
    <li class="toggle"><a href="#"><img src="img/hamburger.svg" alt="" /></a></li>  
    </div>
    </nav>
}

export default Nav 