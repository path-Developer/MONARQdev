/* eslint-disable react/prop-types */
import React, { useEffect } from "react";
import javascript from "highlight.js/lib/languages/javascript";
import Highlight from "react-highlight";

const ConfigVis = (props) => {
  const { configString } = props;
  const outputArray = [
    `export const manifest ={
      ${configString}
  }`,
  ];
  useEffect(() => {}, [configString]);

  return <Highlight language={javascript}>{outputArray[0]}</Highlight>;
};
export default ConfigVis;
