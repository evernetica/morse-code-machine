import React from 'react';
import styled from 'styled-components/native';
import {marginStyles} from './commonStyles';

const StyledText = styled.Text`
  ${marginStyles};
  ${({width}) => width && `width: ${width}`};
  ${({fontWeight}) => fontWeight && `font-weight: ${fontWeight}`};
  ${({textAlign}) => textAlign && `text-align: ${textAlign}`};
  ${({width}) => width && `width: ${width}`};
  ${({height}) => height && `height: ${height}`};
  ${({letterSpacing}) => letterSpacing && `letter-spacing: ${letterSpacing}`};
  ${({lineHeight}) => lineHeight && `line-height: ${lineHeight}`};
  ${({overflow}) => overflow && `overflow: ${overflow}`};
  ${({bg}) => bg && `background-color: ${bg}`};
  ${({pr}) => pr && `padding-right: ${pr}`};
  ${({pl}) => pl && `padding-left: ${pl}`};
  ${({pb}) => pb && `padding-bottom: ${pb}`};
  ${({textDecoration, color}) =>
    textDecoration &&
    `text-decoration: ${textDecoration}; text-decoration-color: ${color};`};
  color: ${({color}) => color || '#000'};
  font-size: ${({fontSize}) => fontSize || 15};
  ${({fontFamily}) => fontFamily && `font-family: ${fontFamily}`};
  ${({flexShrink}) => flexShrink && `flex-shrink: ${flexShrink}`};
  ${({textTransform}) => textTransform && `text-transform: ${textTransform}`};
`;

export const Text = ({children, ...rest}) => (
  <StyledText {...rest}>{children}</StyledText>
);
