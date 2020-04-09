import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Ionicons';

const buttonMargin = 20;
const buttonSize = 60;
const buttonSpacing = 7;

export const Container = styled.ScrollView`
    padding: 15px 30px;
`;

export const CategoriesTitle = styled.Text.attrs({
})`
  padding: 15px;
  fontWeight: bold;
  font-size: 30px;
`;

export const CategoriesRow = styled.TouchableOpacity`
  flexDirection: row;
  alignItems: center;
  padding: 8px 0;
  borderColor: #AAA
  borderBottomWidth: .5px  
`;

export const CategoriesIcon = styled(Icon).attrs({
  name: "md-pricetag"
})`
  color: ${props => props.color || 'black'}
  fontSize: 17px;
  margin: 0 20px;
`;

export const CategoriesText = styled.Text`
  
  fontSize: 17px;
  

`; //color: white;

