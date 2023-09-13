import React from 'react'
import styled from 'styled-components'
import {NavLink} from 'react-router-dom'

const pageNavigation = ({title}) => {
  return (
    <Wrapper>
      <NavLink to='/'>Home</NavLink>/{title}
    </Wrapper>
  )
}

const Wrapper = styled.section`
background-color: ${({theme}) => theme.colors.bg};
font-size: 2rem;
padding-left: 1.2rem;
padding-block: 0.2rem;

a{
    font-size: 2rem;
}
`

export default pageNavigation
