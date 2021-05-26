/* eslint-disable react/prop-types */
import React from "react";
import styled from "styled-components";

const TabsWrapper = styled.section`
  display: flex;
`;

const Tabs = (props) => {
  const { types } = props;
  const { setCurrentTab } = props;
  const tabsArray = [];
  const handleClick = (id) => {
    setCurrentTab(id);
  };

  Object.values(types).forEach((type) => {
    if (type) {
      tabsArray.push(
        <button
          type="button"
          key={type.toString().toLowerCase()}
          id={type}
          onClick={(e) => handleClick(e.currentTarget.id)}
        >
          {Object.values(type)}
        </button>
      );
    }
  });

  return <TabsWrapper>{tabsArray}</TabsWrapper>;
};

export default Tabs;
