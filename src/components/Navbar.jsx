

import { AccountCircle,  MenuSharp,  Search} from '@material-ui/icons';
import React from 'react'
import styled from 'styled-components'
import logo from '../NolyLogo.png'
import { mobile } from '../responsive';

const Container = styled.div`
    height: 150px;
    background-color: #fff;
    
    ${mobile({height: "90px"})}

    `;
const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    ${mobile({padding:"10px 0px"})}
`

const MenuItem = styled.div`
font-size: 14px;
cursor:pointer;
margin-left: 25px;
${mobile({fontSize:"12px", marginLeft:"10px"})}

`;


const Input = styled.input`
border: none;

`

const Left = styled.div`
display: flex;
flex:1;
align-items: center;
justify-content: flex-start;
${mobile({height:"50px"})}

`;
const Center = styled.div`
flex:1;
text-align: center;
align-items: center;
${mobile({font:"50px"})}
`;
const Logo = styled.img`
  flex:1;
  align-items: center;
  cursor: pointer;
  width: 120px;
  height: 120px;
  ${mobile({height:"60px", width:"60px"})}
`

const Right = styled.div`
flex: 1;
display: flex;
align-items: center;
justify-content: flex-end;
${mobile({flex:"2", justifyContent:"Center"})}
`

const Navbar = () => {
  return (
    <Container>
        <Wrapper>
            <Left>
              <MenuSharp></MenuSharp>
            </Left>
            <Center>
              
              <Logo src={logo} />
           
              
              
            </Center>
            <Right>
              
              <MenuItem><Search></Search></MenuItem>
              <MenuItem><AccountCircle></AccountCircle></MenuItem>
              
                
            </Right>
        </Wrapper>
    </Container>
  )
}

export default Navbar