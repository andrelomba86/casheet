import styled from 'styled-components/native'
import Icon from 'react-native-vector-icons/Ionicons'

export const Container = styled.ScrollView`
  padding: 15px 30px;
`

export const CategoriesTitle = styled.Text.attrs({})`
  padding: 15px;
  font-weight: bold;
  font-size: 30px;
`

export const CategoriesRow = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  padding: 8px 0;
  border-color: #AAA
  border-bottom-width: .5px  
`

export const CategoriesIcon = styled(Icon).attrs({
  name: 'md-pricetag',
})`
  color: ${props => props.color || 'black'}
  font-size: 17px;
  margin: 0 20px;
`

export const CategoriesText = styled.Text`
  font-size: 17px;
` //color: white;
