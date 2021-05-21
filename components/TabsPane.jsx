// import React, { useState, useEffect, useContext} from 'react';
// import styled from 'styled-components'


// const Wrapper = styled.section`
//   display:flex;
//   flex-direction:column;   
// `;
// const TabsWrapper = styled.section`
//   display:flex;
// `;
// const DisplayWindow = styled.section`
//   display:flex;
//   flex-direction:column;
// `;
// const CheckBox = styled.input`
//   display:flex-inline;
// `;
// const Operation = styled.label`
//   display:flex-inline  
//   color:blue
// `;

// const ConfigWrapper = styled.section`
//   display:flex;
// `;

// const CodeWrapper = styled.section`
//   display:flex;
// `;

// const Code = styled.code`
//   background-colorg:black;
// `;
// const introspectionQuery = {"query" : "{__schema {queryType {name fields {name}}mutationType {name fields {name}}}}"};

// const TabsPane = (props) => {  

//   console.log('TabsPane ', props)
  
//   const [userData, setUserData] = useState({});
//   const [currentTab, setCurrentTab] = useState("");
//   const [currentOperations, setCurrentOperations] = useState({})
//   const [checked, setChecked] = useState(false)

//   useEffect(()=>{
//   },[currentTab])

//   useEffect(()=> {
//     getIntrospection();
//   }, [])

//   const checkSwitch = () => {
//     if(checked === false){
      
//     }
//   }

//   const getIntrospection = async () => {
//     console.log('in introspection')
//     const rawResponse = await fetch('https://api.spacex.land/graphql/', {
//      method: 'POST',     
//      headers: {
//         'Accept': 'application/json',
//         'Content-Type': 'application/json'
//      },
//       body: JSON.stringify(introspectionQuery),
      
//     });
//     const response = await rawResponse.json();
//     console.log(response)
//     setUserData(response.data.__schema)
//   }
//   console.log(userData)
//   const tabsArray = [];
//   let displayedOperations = [];
//   const operationsObj = {};
  
  
  
//     Object.values(userData).forEach(el => {
//       if(el){
//         if(Object.values(el)) {
//           tabsArray.push(
//           <button 
//           key={Object.values(el)[0].toLowerCase()}
//           id ={Object.values(el)[0]}
//           onClick={(e)=> setCurrentTab(e.currentTarget.id)}
          
//           >{Object.values(el)[0]}</button>,
          
          
//           )
//           operationsObj[Object.values(el)[0]] = Object.values(el)[1]
//         }
//       }
            
//     })
//   if(Object.keys(operationsObj).includes(currentTab)) {
//     operationsObj[currentTab].forEach((el,idx)=>{displayedOperations.push(    
//     <Operation>
//       <CheckBox 
//       type="checkbox" 
//       className="checkbox" 
//       id={`${currentTab}checkbox${idx}`} 
//       onChange={()=> checkSwitch()}
//       />
//       {el.name}
//     </Operation>,    
//     )})
//   }
  
  
    
  
  

//     return (
//       <Wrapper>
//         <TabsWrapper>          
//           {tabsArray}
//         </TabsWrapper>
//         <DisplayWindow>
//           {displayedOperations}
//         </DisplayWindow>
//         <CodeWrapper><Code>hey lol</Code></CodeWrapper>
//       </Wrapper>    
      
//     );
//   }

//   export default TabsPane