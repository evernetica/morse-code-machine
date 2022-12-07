import React from 'react';
import styled from 'styled-components/native';
import {marginStyles, paddingStyles} from './commonStyles';

const StyledBlock = styled.View`
  ${marginStyles};
  ${paddingStyles};
  ${({width}) => width && `width: ${width}`};
  ${({height}) => height && `height: ${height}`};
  ${({minHeight}) => minHeight && `min-height: ${minHeight}px`};
  ${({minWid}) => minWid && `min-width: ${minWid}`};
  ${({maxWid}) => maxWid && `max-width: ${maxWid}`};
  ${({maxHt}) => maxHt && `max-height: ${maxHt}`};
  ${({borderRadius}) => borderRadius && `border-radius: ${borderRadius}`};
  ${({bg}) => bg && `background-color: ${bg}`};
  ${({flexDirection}) => flexDirection && `flex-direction: ${flexDirection}`};
  ${({flexWrap}) => flexWrap && `flex-wrap: ${flexWrap}`};
  ${({flex}) => (flex || flex === 0) && `flex: ${flex}`};
  ${({justifyContent}) =>
    justifyContent && `justify-content: ${justifyContent}`};
  ${({alignItems}) => alignItems && `alignItems: ${alignItems}`};
  ${({alignSelf}) => alignSelf && `align-self: ${alignSelf}`};
  ${({opacity}) => opacity && `opacity: ${opacity}`};
  ${({position}) => position && `position: ${position}`};
  ${({top}) => top && `top: ${top}`};
  ${({left}) => left && `left: ${left}`};
  ${({right}) => right && `right: ${right}`};
  ${({bottom}) => bottom && `bottom: ${bottom}`};
  ${({zIndex}) => zIndex && `z-index: ${zIndex}`};
  ${({boxShadow}) => boxShadow && `box-shadow: ${boxShadow}`};
  ${({shadowColor}) => shadowColor && `shadow-color: ${shadowColor}`};
  ${({opacity}) => opacity && `opacity: ${opacity}`};
  ${({shadowOffset}) =>
    shadowOffset &&
    `shadow-offset: {width: ${shadowOffset.width}, height: ${shadowOffset.height}`};
  ${({shadowOpacity}) => shadowOpacity && `shadow-opacity: ${shadowOpacity}`};
  ${({shadowRadius}) => shadowRadius && `shadow-radius: ${shadowRadius}`};
  ${({boxShadow}) => boxShadow && `box-shadow: ${boxShadow}`};
  ${({borderWidth}) => borderWidth && `border-width: ${borderWidth}`};
  ${({borderColor}) => borderColor && `border-color: ${borderColor}`};
  ${({transform}) => transform && `transform: ${transform}`};
  ${({translateY, translateX}) =>
    (translateX || translateY) &&
    `transform:${(translateX && ` translateX(${translateX})`) || ''} ${
      (translateY && ` translateY(${translateY})`) || ''
    }`};
  ${({borderBottomColor, borderBottomWidth}) =>
    borderBottomColor &&
    borderBottomWidth &&
    `border-bottom-color: ${borderBottomColor}; border-bottom-width: ${borderBottomWidth}`};
  ${({borderTopColor, borderTopWidth}) =>
    borderTopColor &&
    borderTopWidth &&
    `border-top-color: ${borderTopColor}; border-top-width: ${borderTopWidth}`};
  ${({paddingHorizontal}) =>
    paddingHorizontal && `padding-horizontal: ${paddingHorizontal}`};
  ${({paddingVertical}) =>
    paddingVertical && `padding-vertical: ${paddingVertical}`};
  ${({borderStyle}) => borderStyle && `border-style: ${borderStyle}`};
  ${({overflow}) => overflow && `overflow: ${overflow}`};
`;

export const Block = ({children, ...rest}) => (
  <StyledBlock {...rest}>{children}</StyledBlock>
);
