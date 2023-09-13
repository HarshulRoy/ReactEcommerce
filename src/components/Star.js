import React from 'react'
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';
import { AiOutlineStar } from "react-icons/ai"
import styled from 'styled-components'

const Star = ({ stars, reviews }) => {
    // Array.from({ length: 5 }, () =>{

    // })
    let array=[];
    let fullStar=Math.floor(4.5);
    let halfStar=0;
    if(stars-Math.floor(4.5)>=0.5){
       halfStar=1;
    }
    let emptyStar=5-fullStar-halfStar;

    function starArray(){
        for(let i=0;i<fullStar;i++){
            array.push(<FaStar className='icon' key={`fullStar${i}`}/>)
        }
        for(let i=0;i<halfStar;i++){
            array.push(<FaStarHalfAlt className='icon' key={`halfStar${i}`}/>)
        }
        for(let i=0;i<emptyStar;i++){
            array.push(<AiOutlineStar className='icon' key={`emptyStar${i}`}/>)
        }
    }
    
    starArray()

  return (
    <Wrapper>
        <div className="icon-style">
      {array} &nbsp; <span>({reviews} customer reviews)</span>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  .icon-style {
    display: flex;
    gap: 0.2rem;
    align-items: center;
    justify-content: flex-start;
    padding-bottom:0.5rem;
    span{
        font-size:1.2rem;
    }

    .icon {
      font-size: 1.3rem;
      color: orange;
    }
  }
`;


export default Star
