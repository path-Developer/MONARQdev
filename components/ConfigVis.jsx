import React from 'react';
import javascript from 'highlight.js/lib/languages/javascript';
import Highlight from 'react-highlight'
import styled from 'styled-components';

const StyledHighlight = styled(Highlight)`
    font-size: 24px;
`;
const ConfigVis = (props) => {  


    return (
    <StyledHighlight language={javascript}>
        {`export const manifest = {
                    endpoints: {
                        ${props.configString}
                    }
                } `}
    </StyledHighlight>
    );
  }
   export default ConfigVis;