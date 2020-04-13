import React from 'react'
import { Row, Label, StyledSwitch } from './styles'

export default function Switch({ label, ...props }) {
  return (
    <Row>
      <Label>{label}</Label>
      <StyledSwitch {...props} />
    </Row>
  )
}
