import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Ionicons';

const buttonMargin = 20;
const buttonSize = 60;
const buttonSpacing = 7;


export const ButtonsContainer = styled.View`
  position: relative;
  padding: ${buttonMargin}px;
  
  flex-direction: row-reverse;

`;
export const Button = styled.TouchableOpacity`
    font-size: 32px !important
    width: ${buttonSize}px;
    height: ${buttonSize}px;
    borderRadius: 30px;
    margin: 0 0 0 ${buttonSpacing}px;
    background: ${prop => prop.bgcolor || "#AAA"};
    z-index: 10;
    alignItems: center;
    justifyContent: center;
    
`;

export const StyledIcon = styled(Icon)`
  fontSize: 32px;
  color: #FDFDFD;
`;