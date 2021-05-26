/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Tabs from "./Tabs";
import TabsPane from "./TabsPane";

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
`;

const Operations = (props) => {
  const { setOperation } = props;
  const introspectionQuery = {
    query:
      "{__schema {queryType {name fields {name}}mutationType {name fields {name}}}}",
  };
  const [introspectedTypes, setIntrospectedTypes] = useState({});

  const getIntrospection = async () => {
    const rawResponse = await fetch("https://api.spacex.land/graphql/", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(introspectionQuery),
    });
    const response = await rawResponse.json();
    // eslint-disable-next-line no-underscore-dangle
    setIntrospectedTypes(response.data.__schema);
  };

  const [currentTab, setCurrentTab] = useState("");

  useEffect(() => {}, [currentTab]);

  useEffect(() => {
    getIntrospection();
  }, []);

  const types = [];
  // for (const key in introspectedTypes) {
  //   types.push(introspectedTypes[key].name);
  // }
  Object.keys(introspectedTypes).forEach((key) => {
    types.push(introspectedTypes[key].name);
  });
  const operations = Object.values(introspectedTypes);

  return (
    <Wrapper>
      <Tabs setCurrentTab={setCurrentTab} types={types} />
      <TabsPane
        currentTab={currentTab}
        operations={operations}
        setOperation={setOperation}
      />
    </Wrapper>
  );
};

export default Operations;
