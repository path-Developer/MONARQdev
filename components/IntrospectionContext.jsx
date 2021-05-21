import React, { useState, useEffect, createContext, useContext } from 'react';
import Tabs from './Tabs.jsx';
import TabsPane from './TabsPane.jsx'


export const IntrospectionContext = createContext()

export function IntrospectionContextProvider () {
    
    const introspectionQuery = {"query" : "{__schema {queryType {name fields {name}}mutationType {name fields {name}}}}"};
    const [introspectedTypes, setIntrospectedTypes] = useState({})

    useEffect(()=> {
        getIntrospection();
      }, [])

    const getIntrospection = async () => {
         const rawResponse = await fetch('https://api.spacex.land/graphql/', {
         method: 'POST',     
         headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
         },
          body: JSON.stringify(introspectionQuery),
          
        });
        const response = await rawResponse.json();
        
        setIntrospectedTypes(response.data.__schema)
      }
    return (
      <>
        <IntrospectionContext.Provider value = {introspectedTypes} >            
            <Tabs />
        </IntrospectionContext.Provider>
      </>
    )

}

export function useIntrospection() {
  const context = useContext(IntrospectionContext);
  if (context === undefined) {
    throw new Error("Context must be used within a Provider");
  }
  return context;
}