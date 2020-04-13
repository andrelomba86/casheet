// import { Accounts, }
// import './db'
import React from 'react'

import { Container, Title, Text, Row, PricetagIcon } from './styles'

import { Button, StyledIcon, ButtonsContainer } from '../BasicButtonsStyles'

import { defaultCategories } from '../../consts'

const Categories = ({ navigation }) => {
  // const [showMenu, setShowMenu] = useState(false)
  const buttons = [
    {
      color: '#D23',
      icon: 'md-arrow-back',
      onpress: () => {
        navigation.goBack()
      },
    },
  ]

  return (
    <>
      <Title>Categorias</Title>
      <Container>
        {defaultCategories.map(item => (
          <Row
            key={item.ID}
            onPress={() => {
              // route.params.fnSetCategory(item)
              navigation.navigate('AddTransaction', {
                category: item,
              })
            }}
          >
            <PricetagIcon color={item.color} />
            <Text>{item.description}</Text>
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

export default Categories
