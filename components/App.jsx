import React from 'react';
import { IntrospectionContextProvider } from './IntrospectionContext.jsx';
import Visualizer from './Visualizer.jsx'


 function App() {  
    return (
      <IntrospectionContextProvider>
        <div>
        <h1>Hey lol</h1>
          <Visualizer props="lol" />
        </div>    
      </IntrospectionContextProvider>     
    );
  }
   export default App;
