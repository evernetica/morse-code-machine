import React from 'react';
import styled from 'styled-components/native';
import {marginStyles, paddingStyles} from './commonStyles';

const StyledButton = styled.TouchableOpacity`
  ${marginStyles};
  ${paddingStyles};
  ${({width}) => width && `width: ${width}`};
  ${({height}) => height && `height: ${height}`};
  ${({borderRadius}) => borderRadius && `border-radius: ${borderRadius}`};
  ${({bg}) => bg && `background-color: ${bg}`};
  ${({flexDirection}) => flexDirection && `flex-direction: ${flexDirection}`};
  ${({flexWrap}) => flexWrap && `flex-wrap: ${flexWrap}`};
  ${({flex}) => (flex || flex === 0) && `flex: ${flex}`};
  ${({justifyContent}) =>
    justifyContent && `justify-content: ${justifyContent}`};
  ${({alignItems}) => alignItems && `alignItems: ${alignItems}`};
  ${({alignSelf}) => alignSelf && `align-self: ${alignSelf}`};
  ${({shadowColor}) => shadowColor && `shadow-color: ${shadowColor}`};
  ${({opacity}) => opacity && `opacity: ${opacity}`};
  ${({shadowOffset}) =>
    shadowOffset &&
    `shadow-offset: {width: ${shadowOffset.width}, height: ${shadowOffset.height}`};
  ${({shadowOpacity}) => shadowOpacity && `shadow-opacity: ${shadowOpacity}`};
  ${({shadowRadius}) => shadowRadius && `shadow-radius: ${shadowRadius}`};
  ${({boxShadow}) => boxShadow && `box-shadow: ${boxShadow}`};
  ${({elevation}) => elevation && `elevation: ${elevation}`};
  ${({borderRightColor, borderRightWidth}) =>
    borderRightColor &&
    borderRightWidth &&
    `border-right-color: ${borderRightColor}; border-right-width: ${borderRightWidth}`};
  ${({borderBottomColor, borderBottomWidth}) =>
    borderBottomColor &&
    borderBottomWidth &&
    `border-bottom-color: ${borderBottomColor}; border-bottom-width: ${borderBottomWidth}`};
`;

export const Button = ({children, onPressIn, onPressOut, onPress, ...rest}) => {
  return (
    <StyledButton
      onPressIn={onPressIn}
      onPressOut={onPressOut}
      onPress={onPress}
      {...rest}>
      {children}
    </StyledButton>
  );
};
