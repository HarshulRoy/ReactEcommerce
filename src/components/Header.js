import React from 'react'
import style from 'styled-components'
import {NavLink} from 'react-router-dom'
import Nav from './Nav'

const Header = () => {
  return (
    <MainHeader>
      <NavLink to='/'>
        <img className='logo' src="./images/logo2.png" alt=''/>
      </NavLink>
      <Nav/>
    </MainHeader>
  )
}

const MainHeader= style.header`
padding: 1rem 4.8rem;
background-color: ${({theme})=> theme.colors.bg};
display: flex;
justify-content: space-between;
.logo{
  width: 15rem
}
`
export default Header
