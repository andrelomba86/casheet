import styled from 'styled-components/native'
import Icon from 'react-native-vector-icons/Ionicons'

export const Container = styled.ScrollView`
  padding: 15px 30px;
`

export const Title = styled.Text.attrs({})`
  padding: 15px;
  font-weight: bold;
  font-size: 30px;
`

export const Row = styled.View`
  flex-direction: row;
  flex: 1
  justify-content: space-between
  align-items: center;
  border-color: #AAA
  border-bottom-width: .5px  
`
export const Option = styled.TouchableOpacity`
  flex-direction: row;
  flex: 1;
  padding: 12px;
`
export const EditContainer = styled.TouchableOpacity`
  flex-direction: row;
  padding: 12px 20px;
`

export const Text = styled.Text`
  ${props => props?.color && `color: ${props.color}`}
  font-size: 17px;
` //color: white;

export const IconCard = styled(Icon).attrs({
  name: 'ios-card',
})`
  font-size: 24px;
  padding-right: 20px;
  ${props => props?.color && `color: ${props.color}`};
`

export const IconEdit = styled(Icon).attrs({
  name: 'md-create',
})`
  right: 0;
  font-size: 24px;
`
