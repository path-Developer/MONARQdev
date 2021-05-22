import React from 'react';
import styled from 'styled-components';



const EndpointInput = (props) => {  
    const methodHandler = (evt) =>{
        props.setMethod(evt.target.value)
    }
    const endpointHandler = (evt) => {
        props.setEndpoint(evt.target.value)
    }
    return (
        <div>
        <label htmlFor="method">Method:</label>
        <select defaultValue="" name="method" id="method" onChange={evt => methodHandler(evt)}>
            <option value="" disabled={true}>choose method</option>
            <option value="get">GET</option>
            <option value="post">POST</option>
            <option value="put">PUT</option>
            <option value="delete">DELETE</option>
            <option value="patch">PATCH</option>
        </select>        
        <input type='text' onChange={evt => endpointHandler(evt)} />        
        </div>      
    );
  }
   export default EndpointInput;