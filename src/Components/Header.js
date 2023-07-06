import React, { useState } from 'react'
import styled from 'styled-components';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';


function Header() {
  const [BurgerStatus,setBurgerStatus] = useState(false);

  return (
    <Container>
    
        {/* <img src='/images/logo.svg' alt = ""/> */}
        <RightMenu>
        <a href='#'>EnviCar</a>
        </RightMenu>
        
    <Menu>
      <a href='#'>Find a car</a>
      <a href='#'>Connect to services</a>
      <a href='#'>EnviCar story</a>
      <a href='#'>News</a>
      <a href='#'>Contact Us</a>
     </Menu>
     <RightMenu>
      <a href='#'>Cart</a>
      <a href='#'> Account</a>
      <CustomMenu onClick={() => setBurgerStatus(true)}/>
     </RightMenu>
     <BurgerNav show={BurgerStatus}>
       {/*
       <img src='/images/xicon.png' alt = ""/>
       {cars && cars.map((car, index) =>(
        <li><a key={index} href='#'>{car}</a></li>
      ))} */}
      <CloseWrapper>
         <CustomClose onClick={() => setBurgerStatus(false)}/>
      </CloseWrapper>
       <li><a href='#'>Existing Inventory</a></li>
       <li><a href='#'>Used Inventory</a></li>
       <li><a href='#'>Trade-in</a></li>
       <li><a href='#'>Cybertruck</a></li>
       <li><a href='#'>Roadster</a></li>
       <li><a href='#'>Semi</a></li>
       <li><a href='#'>Charging</a></li>
       <li><a href='#'>Powerwall</a></li>
       <li><a href='#'>Commercial Energy</a></li>
       <li><a href='#'>Utilities</a></li>
       <li><a href='#'>Find Us</a></li>
       <li><a href='#'>Support</a></li>
     </BurgerNav>
   </Container > 
  )
}

export default Header

const Container = styled.div `
  min-height :60px;
  position : fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-decoration: none;
  padding: 0 20px;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
`

const Menu = styled.div `
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  a {
      font-weight: 600;
      text-transform : uppercase;
      padding: 0 10px;
      flex-wrap: no-wrap;
      text-decoration: none;
  }
  @media(max-width: 768px){
    display:none;
  }
  
`
const RightMenu = styled.div`
display: flex;
align-items: center;
a {
    font-weight: 600;
    text-transform : uppercase;
    margin-right: 10px;
    text-decoration: none;
}
`
const CustomMenu = styled(MenuIcon)`
  cursor: pointer;
  color: #393c41; 
`

const BurgerNav = styled.div`
 position: fixed;
 top: 0;
 bottom:0;
 right: 0;
 background: white;
 width: 300px;
 z-index: 16;
 list-style:none;
 padding: 20px;
 display: flex;
 flex-direction: column;
 text-align: start;
 transform: ${props => props.show ? 'translateX(0)': 'translateX(100%)'};
 transition: transform 0.2s;
 li{
    padding: 15px 0px;
    border-bottom: 1px solid rgba(0,0,0,2);

    a{
      font-weigth: 600;
      text-decoration: none;
    }
 }
`

const CustomClose = styled(CloseIcon)`
cursor: pointer;
`
const CloseWrapper = styled.div`
  display: flex;
  justify-conetent: flex-end;
`


