import React, { useState, useContext} from 'react';
import styled from 'styled-components';


const TabsWrapper = styled.section`
  display:flex;
`;

const Tabs = props => {
  const types = props.types
  
  const tabsArray = [];  
  

  const handleClick = (id) =>{
    props.setCurrentTab(id)
  }

    Object.values(types).forEach(type => {
      if(type){        
          tabsArray.push(
          <button 
          key={type.toLowerCase()}
          id ={type}
          onClick={(e)=> handleClick(e.currentTarget.id)}          
          >{Object.values(type)}</button>,          
          )
        }                  
    })
  
    return (      
        <TabsWrapper>                 
          {tabsArray}
        </TabsWrapper>      
    );
  }

  export default Tabs