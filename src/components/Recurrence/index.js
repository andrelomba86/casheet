// import { Accounts, }
// import './db'
import React, { useState } from 'react'
import {
  Container,
  Title,
  Subtitle,
  SyledText,
  SyledInput,
  Row,
  ColInterval,
  ColPeriod,
} from './styles'
import MESSAGE from '../../../locale/pt-br/pt-br'
import { recurrencePeriods } from '../../consts'

import { Button, StyledIcon, ButtonsContainer } from '../BasicButtonsStyles'

/*
  TO-DO:
  - definir limite de caracteres para o INPUT
  - ?? exibir erro se não for número / for maior que 999

*/

const Recurrence = ({ navigation }) => {
  const [interval, setInterval] = useState('1')
  const [period, setPeriod] = useState(recurrencePeriods[0].ID)

  const buttons = [
    {
      color: '#D23',
      icon: 'md-arrow-back',
      onpress: () => {
        navigation.goBack()
      },
    },
    {
      color: '#11c',
      icon: 'md-checkmark',
      onpress: () => {
        navigation.navigate('AddTransaction', {
          recurrence: { strInterval: interval, periodID: period },
        })
      },
    },
  ]

  return (
    <>
      <Title>Recorrência</Title>
      <Subtitle>{MESSAGE.repeat}</Subtitle>
      <Container>
        <ColInterval>
          <SyledInput
            value={interval}
            keyboardType="decimal-pad"
            onChange={value => setInterval(value)}
          />
        </ColInterval>
        <ColPeriod>
          {recurrencePeriods?.map(item => (
            <Row
              key={item.ID}
              selected={period === item.ID ? true : false}
              onPress={() => {
                setPeriod(item.ID)
              }}>
              <SyledText selected={period === item.ID ? true : false}>
                {item.description}
              </SyledText>
            </Row>
          ))}
        </ColPeriod>
      </Container>
      <ButtonsContainer>
        {buttons.map((item, index) => (
          <Button
            key={index}
            index={index}
            bgcolor={item.color}
            onPress={item.onpress}>
            <StyledIcon name={item.icon} />
          </Button>
        ))}
      </ButtonsContainer>
    </>
  )
}

export default Recurrence
