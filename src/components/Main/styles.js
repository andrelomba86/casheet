import styled from 'styled-components/native';
import IconFontAwesome from 'react-native-vector-icons/Ionicons';

const buttonBottomMargin = 40;
const buttonSize = 60;
const menuItemHeight = 40;
const menuItemSpacing = 20;

export const Container = styled.SafeAreaView`
    flex: 1;
    background-color: #FFF;
    align-items: center;
`;

export const Titlebar = styled.View`
    margin-top: 50px;
`;

export const Title = styled.Text`
    font-size: 20px;
    font-weight: 500;
    color: #b8bece;
`;

export const ButtonContainer = styled.TouchableOpacity`
    position: absolute;
    width: ${buttonSize}px;
    height: ${buttonSize}px;
    right: 40px;
    bottom: ${buttonBottomMargin}px;
    border-radius: 30px;
    background: #D23;
    z-index: 10;
    alignItems: center;
    justifyContent: center;
`;

export const StyledIconFontAwesome = styled(IconFontAwesome)`
  font-size: 32px;
  color: #FDFDFD;
`;

export const DarkBackground = styled.View`
    position: absolute;
    background-color: #0009;
    width:100%;
    height:100%
    z-index: 5;
`;

export const MenuItemContainer = styled.TouchableOpacity`
    position: absolute;
    flex-direction: row;
    height: ${menuItemHeight}px;
    bottom: ${props => 
                props.index
                ? (buttonBottomMargin + buttonSize + menuItemSpacing + (menuItemHeight + menuItemSpacing) * props.index)
                : buttonBottomMargin + buttonSize + menuItemSpacing
            }px;
    right: 40px;
    alignItems: center;
    justifyContent: center;
    z-index: 10;
    
`;


export const MenuItemIconContainer = styled.TouchableOpacity`
    width: 40px;
    height: 40px;
    border-radius: 20px;
    background: ${props => props.bgcolor || "#AAA"};
    alignItems: center;
    justifyContent: center;
`;

export const MenuItemIcon = styled(IconFontAwesome)`
    font-size: 24px;
    color: white;
`;

export const MenuItemText = styled.Text`
    font-size: 19px;
    padding: 10px;
    color: white;
`;