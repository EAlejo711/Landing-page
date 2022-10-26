import { mobile } from '../responsive';
import React from 'react'
import styled from 'styled-components';


const Container=styled.div`
flex: 1;
margin: 3px;
height: 70vh;
position: relative;
background-color: #F2F2F2;
`;



const Image=styled.img`
width: 100%;
height: 100%;
object-fit: cover;
${mobile({height: "55vh"})}

`;
const Info=styled.div`
position: absolute;
top:0;
left: 0;
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
align-items: left;
justify-content: end;
padding-left: 10px;

`;
const Title=styled.h1`
color:#fff;
margin-bottom: 20px;
font-family: Helvetica;
font-weight: bold;
font-size: 30px;
`;

const CategoryItem = ({item}) => {
  return (
    <Container>
        <Image src={item.img}/>
        <Info>
            <Title>{item.title}</Title>
        </Info>
    </Container>
  )
}

export default CategoryItem