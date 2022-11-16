import styled from 'styled-components/native';
import {marginStyles, paddingStyles} from './commonStyles';
export const StyledScrollView = styled.ScrollView`
  ${marginStyles};
  ${paddingStyles};
  ${({height}): string | undefined => height && `height: ${height}`};
  ${({width}): string | undefined => width && `width: ${width}`};
  ${({flex}): number | undefined => flex && `height: ${flex}`};
  ${({bg}): string | undefined => bg && `background-color: ${bg}`};
  ${({flexDirection}): string | undefined =>
    flexDirection && `flex-direction: ${flexDirection}`};
`;
