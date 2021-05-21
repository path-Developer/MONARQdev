import React, { useState, useEffect} from 'react';
import styled from 'styled-components';
import Tabs from './Tabs.jsx';



const Wrapper = styled.section`
  display:flex;
  flex-direction:column;   
`;

const Operations = () => {  
  
  const [userData, setUserData] = useState({});
  const [currentTab, setCurrentTab] = useState("");
  

  useEffect(()=>{
  },[currentTab])

  
  return (
      <Wrapper>
       <Tabs setCurrentTab={setCurrentTab} />       
      </Wrapper>          
    );
  }

  export default Operations