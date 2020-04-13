import React from 'react'
import { Row, Label, StyledInput } from './styles'

export default function Input({ label, ...props }) {
  return (
    <Row>
      <Label>{label}</Label>
      <StyledInput {...props} />
    </Row>
  )
}
