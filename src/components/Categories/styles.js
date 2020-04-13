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

export const Row = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  padding: 12px 0;
  border-color: #AAA
  border-bottom-width: .5px  
`

export const PricetagIcon = styled(Icon).attrs({
  name: 'md-pricetag',
})`
  color: ${props => props.color || 'black'}
  font-size: 17px;
  margin: 0 20px;
`

export const Text = styled.Text`
  font-size: 17px;
` //color: white;
