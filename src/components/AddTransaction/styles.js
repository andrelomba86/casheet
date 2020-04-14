import styled from 'styled-components/native'
import Icon from 'react-native-vector-icons/Ionicons'

export const Container = styled.ScrollView`
  padding: 15px 30px;
  ${//backgroundColor: #0aa;
  null}
`

export const StyledPlusIcon = styled(Icon).attrs({
  name: 'md-add',
})`
  font-size: 17px;
  margin: 20px;
  color: ${props => (props.color ? props.color : 'black')};
`

export const StyledPricetagIcon = styled(Icon).attrs({
  name: 'md-pricetag',
})`
  font-size: 17px;
  margin: 20px;
  color: ${props => (props.color ? props.color : 'black')};
`

export const TransactionTypeContainer = styled.View`
  width: 100%;
  flex-direction: row;
  margin-top: 5px;
  margin-bottom: 25px;
  justify-content: center;
`

export const TransactionTypeButton = styled.TouchableOpacity.attrs({
  activeOpacity: 1,
})`
  padding: 5px 14px;
  margin: 0 12px;
  align-items: center;
  border-bottom-width: 3px;
  border-bottom-color: ${props => (props.selected ? '#D33' : '#F3F3F3')};
`

export const Row = styled.View`
  flex-direction: row;
  border-radius: 6px;
  margin: 0 0 8px 0;
  width: 100%
  alignItems: center;
  justify-content: space-between;
`

export const Label = styled.Text`
  font-size: 16px;
  color: #777;
`

export const StyledInput = styled.TextInput`
  align-self: center;
  font-size: 16px;
  border-bottom-color: #CCC;
  border-bottom-width: 1.5px;
  border-radius: 6px
  padding: 3px 15px
  margin: 5px 0 5px 20px;
  
  ${props => props.width || 'flex: 1'};
  width: ${props => (props.width ? props.width : '100%')};
  ${props => props.center && `text-align: center`}
`

export const Touchable = styled.TouchableOpacity.attrs({
  activeOpacity: 1,
})`
  padding: 5px 30px;
  margin: 5px 0;
  align-items: center;
  border-bottom-color: #ccc;
  border-bottom-width: 1.5px;
  border-radius: 6px;
`
export const TouchableText = styled.Text`
  font-size: 17px;
  ${props => props.color && `color: ${props.color}`}
` //color: white;

export const StyledSwitch = styled.Switch.attrs({
  thumbColor: '#D33',
  trackColor: { true: '#D88' },
})`
  padding: 10px 0;
  color: #d22;
`
