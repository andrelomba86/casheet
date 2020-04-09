// import { Accounts, }
// import './db'
import React from 'react'

import {
  Container,
  CategoriesTitle,
  CategoriesText,
  CategoriesRow,
  CategoriesIcon,
} from './styles'

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
      <CategoriesTitle>Categorias</CategoriesTitle>
      <Container>
        {defaultCategories.map(item => (
          <CategoriesRow
            key={item.ID}
            onPress={() => {
              // route.params.fnSetCategory(item)
              navigation.navigate('AddTransaction', {
                category: item,
              })
            }}>
            <CategoriesIcon color={item.color} />
            <CategoriesText>{item.description}</CategoriesText>
          </CategoriesRow>
        ))}
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

export default Categories
