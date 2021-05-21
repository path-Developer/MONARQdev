import React from 'react'
import Tabs from './Tabs.jsx'
import styled from 'styled-components'

const MainSection = styled.section`
    display:flex;
    flex-direction:column;
`;

 function App() {  
    return (
      <MainSection>
          <h1>Hey lol</h1>
          <Tabs key="theKey" />
      </MainSection>
    );

  }
   export default App;