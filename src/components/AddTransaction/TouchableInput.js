import React from 'react'
import { Row, Label, Touchable, TouchableText } from './styles'

export default function TouchableInput({ children, label, color, onPress }) {
  return (
    <Row>
      <Label>{label}</Label>
      <Touchable onPress={onPress}>
        <TouchableText color={color}>{children}</TouchableText>
      </Touchable>
    </Row>
  )
}
