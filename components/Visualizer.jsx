import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Operations from "./Operations";
import EndpointInput from "./EndpointInput";
import ConfigVis from "./ConfigVis";

const VizWrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
`;
const EndWrapper = styled.section`
  grid-column: 1 / span 1;
`;
const OperWrapper = styled.section`
  grid-column: 2 / span 1;
`;
const ConfigWrapper = styled.section`
  grid-column: 3 / span 4;
`;

const Visualizer = () => {
  const [operation, setOperation] = useState("");
  const [endpoint, setEndpoint] = useState("");
  const [method, setMethod] = useState("");
  const [configString, setConfigString] = useState(``);
  const [configArray, setConfigArray] = useState([]);

  const configArrayBuilder = () => {
    const newConfigArray = [...configArray];
    newConfigArray.push([endpoint, method, operation]);
    setConfigArray(newConfigArray);
  };

  const configStringBuilder = () => {
    if (configArray.length === 0) return;
    configArray.forEach(() => {
      setConfigString(configArray.join());
    });
  };

  useEffect(() => {
    configStringBuilder();
  }, [configArray]);

  return (
    <VizWrapper>
      <EndWrapper>
        <EndpointInput
          setMethod={setMethod}
          setEndpoint={setEndpoint}
          setConfigArray={setConfigArray}
        />
        <button type="button" onClick={() => configArrayBuilder()}>
          add to config
        </button>
      </EndWrapper>
      <OperWrapper>
        <Operations setOperation={setOperation} />
      </OperWrapper>
      <ConfigWrapper>
        <ConfigVis configString={configString} />
      </ConfigWrapper>
    </VizWrapper>
  );
};
export default Visualizer;
