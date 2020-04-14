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
  - alterar componente "Row" para melhor indicar (Option /Select?)
*/

const Recurrence = ({ navigation, route }) => {
  const [interval, setInterval] = useState(route.params?.strInterval || '1')
  const [period, setPeriod] = useState(route.params?.periodIndex || 0)

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
          recurrence: { strInterval: interval, periodIndex: period },
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
            editable={period > 0 ? true : false}
            onChange={e => {
              setInterval(e.nativeEvent.text)
            }}
          />
        </ColInterval>
        <ColPeriod>
          {recurrencePeriods?.map((item, index) => (
            <Row
              key={index}
              selected={period === index ? true : false}
              onPress={() => {
                setPeriod(index)
              }}
            >
              <SyledText selected={period === index ? true : false}>
                {item}
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
            onPress={item.onpress}
          >
            <StyledIcon name={item.icon} />
          </Button>
        ))}
      </ButtonsContainer>
    </>
  )
}

export default Recurrence
