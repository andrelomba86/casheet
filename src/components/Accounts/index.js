import React from 'react'
import {
  Container,
  IconCard,
  IconEdit,
  Title,
  Row,
  Text,
  Option,
  EditContainer,
} from './styles'
import MESSAGE from '../../../locale/pt-br/pt-br'

import { ButtonsContainer, Button, StyledIcon } from '../BasicButtonsStyles'

export default function Accounts({ navigation, route }) {
  const buttons = [
    {
      color: '#292',
      icon: 'md-add',
      onpress: () => {
        navigation.navigate('NewAccount')
      },
    },
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
      onpress: () => {},
    },
  ]
  console.log(route.params)
  const accounts = route.params.accounts

  return (
    <>
      <Title>{MESSAGE.accounts}</Title>
      <Container>
        {accounts?.map((account, index) => (
          <Row>
            <Option
              key={index}
              onPress={() => {
                if (route.params.type === 'from') {
                  navigation.navigate('AddTransaction', {
                    accountFrom: account,
                  })
                  console.log(accounts[index])
                } else {
                  navigation.navigate('AddTransaction', {
                    accountTo: account,
                  })
                  console.log(accounts[index])
                }
              }}
            >
              <IconCard color={account.color} />
              <Text>{account.description}</Text>
            </Option>
            <EditContainer>
              <IconEdit />
            </EditContainer>
          </Row>
        ))}
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
