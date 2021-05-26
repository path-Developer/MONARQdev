/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
import styled from "styled-components";

const DisplayWindow = styled.section`
  display: flex;
  flex-direction: column;
`;

const TabsPane = (props) => {
  const { currentTab } = props;
  const { operations } = props;
  const { setOperation } = props;

  const [checked, setChecked] = useState("");

  useEffect(() => {}, [currentTab]);
  useEffect(() => {}, [checked]);

  const selectHandler = (evt) => {
    setChecked(evt.target.value);
    setOperation(evt.target.value);
  };
  const operationsObject = {};

  operations.forEach((el) => {
    operationsObject[el.name] = el.fields;
  });

  const displayArray = [];
  Object.keys(operationsObject).forEach((key) => {
    if (key === currentTab) {
      displayArray.push(
        operationsObject[key].forEach((operation) => {
          if (key === currentTab)
            displayArray.push(
              <div>
                <input
                  type="radio"
                  id={`${key}`}
                  value={`${operation.name}`}
                  name="operation"
                  key={`${operation.name}Button`}
                  onClick={(evt) => selectHandler(evt)}
                />
                <label
                  key={`${operation.name}Label`}
                  htmlFor={`${operation.name}`}
                >{`${operation.name}`}</label>
              </div>
            );
        })
      );
    }
  });
  return <DisplayWindow>{displayArray}</DisplayWindow>;
};

export default TabsPane;
