/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-boolean-value */
import React from "react";

const EndpointInput = (props) => {
  const { setMethod }= props;
  const { setEndpoint } = props;
  const methodHandler = (evt) => {
    setMethod(evt.target.value);
  };
  const endpointHandler = (evt) => {
    setEndpoint(evt.target.value);
  };
  return (
    <div>
      <label htmlFor="method">
        <select
          defaultValue=""
          name="method"
          id="method"
          onChange={(evt) => methodHandler(evt)}
        >
          <option value="" disabled={true}>
            choose method
          </option>
          <option value="get">GET</option>
          <option value="post">POST</option>
          <option value="put">PUT</option>
          <option value="delete">DELETE</option>
          <option value="patch">PATCH</option>
        </select>
      </label>
      <input type="text" onChange={(evt) => endpointHandler(evt)} />
    </div>
  );
};
export default EndpointInput;
