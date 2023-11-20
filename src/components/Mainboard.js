import React from 'react';
import styled from 'styled-components';
import Pin from './Pin';
//import './Mainboard.css'

function Mainboard(props) {
let {pins} = props;
  return (
    <Wrapper>
        <Container className='mainboard_container'>
            {pins.map((pin, index)=>{
                let {urls} = pin;
                return <Pin key={index} urls={urls}/>;
            })}
        </Container>
    </Wrapper>
  )
}

export default Mainboard

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100%;
    margin-top: 15px;
    background-color: white;
`


const Container = styled.div`
    column-count: 9;
    column-gap: 5px; 
    margin: 0 auto;
    height: 100%;
    background-color: white;
`
