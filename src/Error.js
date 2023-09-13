import styled from 'styled-components'
import {Button} from './styles/Button'
import { Link } from 'react-router-dom'
const Error = () => {
  return (
    <Wrapper>
        <div className='error-container'>
          <div className='error-container-code'><h1>404</h1><p>UH OH! You're lost.</p></div>
          <div><p>mcjoancoja cnqajncna cnqoanconqc cqninj  ks fkmkf kemfmkf ekmfe fkemfmoc</p></div>
          <div><Link to="/"><Button>Home</Button></Link></div>
        </div>
    </Wrapper>
  )
}

const Wrapper=styled.section`

  .error-container{
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    gap:2rem;
  }

  .error-container-code{
    display:flex;
    flex-direction:column;
    align-items:center;

    h1{
      font-weight:700;
    }

    p{
      font-size:4rem;
    }

  }
`

export default Error
