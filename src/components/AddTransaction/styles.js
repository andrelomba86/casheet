import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Ionicons';

export const Container = styled.ScrollView`
    padding: 15px 30px;
    ${//backgroundColor: #0aa;
    null}
`;

export const StyledPricetagIcon = styled(Icon).attrs({
  name: "md-pricetag"
})`
  fontSize: 17px;
  margin: 20px;
  color: ${props => props.color ? props.color : 'black' };
`;

export const TransactionTypeContainer = styled.View`
  width: 100%;
  flex-direction: row;  
  margin-top: 5px;
  margin-bottom: 25px;
  justifyContent: center;
`;

export const TransactionTypeButton = styled.TouchableOpacity.attrs({
    activeOpacity: 1
  })`
  padding: 5px 14px;
  margin: 0 12px;
  alignItems: center;
  borderBottomWidth: 3px;
  borderBottomColor: ${props => props.selected ? "#D33" : "#F3F3F3"};
`;
 //background: ${prop => prop.selected ? "#DA3" : "#AAA"};
//  border-radius: 4px;
//  border-color: ${prop => prop.selected ? "#DA3" : "#AAA"};
//  border: 0 0 2px 0;
 
export const TransactionButtonText = styled.Text`
  font-size: 17px;
  
`; //color: white;

export const TransactionFormRow = styled.View`
  flexDirection: row;
  borderRadius: 6px;
  margin: 0 0 8px 0;
  width: 100%
  alignItems: center;
  justify-content: space-between;
`;

export const TransactionLabel = styled.Text`
  font-size: 16px;
  color: #777
`;

export const TransactionInput = styled.TextInput`
  alignSelf: center
  font-size: 16px;
  borderBottomColor: #CCC;
  borderBottomWidth: 1.5px;
  borderRadius: 6px
  padding: 3px 15px
  margin: 5px 0 5px 20px;
  
  ${props => props.width || 'flex: 1'};
  width: ${props => props.width ? props.width : "100%"};
  ${props => props.center && `textAlign: center`}
`;

export const TransactionButton = styled.TouchableOpacity.attrs({
  activeOpacity: 1
})`
  padding: 5px 30px;
  margin: 5px 0;
  alignItems: center;
  borderBottomColor: #CCC;
  borderBottomWidth: 1.5px;
  borderRadius: 6px
`;

export const TransactionSwitch = styled.Switch.attrs({
  thumbColor: "#D33",
  trackColor: { true: "#D88"}
})`
  padding: 10px 0;
  color: #D22
`;