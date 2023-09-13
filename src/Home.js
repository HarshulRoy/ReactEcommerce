import React from 'react'
import styled from 'styled-components'
import HeroSection from './components/HeroSection'
import Trusted from './components/Trusted'
import Services from './components/Services'
import FeatureProduct from './components/FeatureProduct'


const Home = () => {
  const name={
    name:'Roy Store'
  }
  return (
    <>
    <Wrapper className='test'>
      <HeroSection myName={name}/>
      <FeatureProduct/>
      <Services/>
      <Trusted/>
    </Wrapper>
    </>
  )
}

const Wrapper=styled.section`
  width: 100%;
  height: 100%;
  margin:auto;
`


export default Home;
