import React, { useState, useContext} from 'react';
import styled from 'styled-components';
import { useIntrospection } from './IntrospectionContext.jsx'

const TabsWrapper = styled.section`
  display:flex;
`;

const Tabs = props => {

  const types = useIntrospection();
  const tabsArray = [];  
  const setCurrentTab = props;

  const handleClick = (id) =>{
    setCurrentTab(id)
  }

  console.log('log', setCurrentTab)

    Object.values(types).forEach(type => {
      if(type){
        if(Object.values(type)) {
          tabsArray.push(
          <button 
          key={Object.values(type)[0].toLowerCase()}
          id ={Object.values(type)[0]}
          onClick={(e)=> handleClick(e.currentTarget.id)}          
          >{Object.values(type)[0]}</button>,          
          )
        }
      }            
  })
  
    return (      
        <TabsWrapper>                 
          {tabsArray}
        </TabsWrapper>      
    );
  }

  export default Tabs