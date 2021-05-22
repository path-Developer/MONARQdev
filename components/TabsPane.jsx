import React, { useState, useEffect, useContext} from 'react';
import styled from 'styled-components'


const DisplayWindow = styled.section`
  display:flex;
  flex-direction:column;
`;
const CheckBox = styled.input`
  display:flex-inline;
`;
const Operation = styled.label`
  display:flex-inline  
  color:blue
`;

const TabsPane = (props) => {  

 let currentTab = props.currentTab;
 const operations = props.operations
  
  

  const [checked, setChecked] = useState('')

  useEffect(()=>{
  },[currentTab])
  useEffect(()=>{},[checked])

  const selectHandler = (evt) => {
    setChecked(evt.target.value)
    props.setOperation(evt.target.value)

  }
  const operationsObject = {};
  operations.forEach(el => {operationsObject[el.name] = el.fields}) 

  const displayArray = [];
  for(const key in operationsObject){
      operationsObject[key].forEach( operation => {
        if(key === currentTab)
        displayArray.push(
            <div>            
            <input type="radio" id={`${key}`} value={`${operation.name}`} name="operation" key={`${operation.name}Button`} onClick={ (evt)=> selectHandler(evt)} />
            <label key={`${operation.name}Label`} htmlFor={`${operation.name}`} >{`${operation.name}`}</label>
            </div>
        )
      })

  }

    return (
        <DisplayWindow>
          {displayArray}
        </DisplayWindow>   
    );
  }

  export default TabsPane