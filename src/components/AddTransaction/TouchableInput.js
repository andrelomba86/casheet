import React from 'react'
import { Row, Label, Touchable, TouchableText } from './styles'

export default function TouchableInput({ children, label, onPress }) {
  return (
    <Row>
      <Label>{label}</Label>
      <Touchable onPress={onPress}>
        <TouchableText>{children}</TouchableText>
      </Touchable>
    </Row>
  )
}
