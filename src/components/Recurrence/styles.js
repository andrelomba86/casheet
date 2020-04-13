import styled from 'styled-components/native'
import Icon from 'react-native-vector-icons/Ionicons'

export const Container = styled.View`
  padding: 7px 30px;
  flex-direction: row;
  align-items: flex-start;
  flex: 1;
`

export const Title = styled.Text.attrs({})`
  padding: 15px;
  font-weight: bold;
  font-size: 30px;
`
export const Subtitle = styled.Text`
  color: #666
  padding-left: 30px;
  font-size: 22px;
`

export const ColInterval = styled.View`
  width: 40%
  flex-direction: column;
  padding-right: 30px;
  padding-top: 8px;
`
export const ColPeriod = styled.View`
  width: 60%
  flex-direction: column;
  padding-top: 8px;
`
export const Row = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  padding: 8px 15px;
  border-radius: 8px;
  border-color: #AAA
  border-bottom-width: 0.5px;
  ${props => props?.selected && `background-color: #D33;`}
`

export const SyledText = styled.Text`
  font-size: 17px;
  ${props => props?.selected && `color: white;`}
`
export const SyledInput = styled.TextInput`
  padding: 5px 0;
  font-size: 40px;
  background-color: #ddd;
  border-radius: 6px;
  text-align: center;
`
