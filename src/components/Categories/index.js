// import { Accounts, }
// import './db'
import React, { Fragment, useState } from 'react'
import DateTimePicker from '@react-native-community/datetimepicker';
import { Text } from 'react-native'

import MESSAGE from '../../../locale/pt-br/pt-br.js';

import {
  Container,
  CategoriesTitle,
  CategoriesText,
  CategoriesRow,
  CategoriesIcon
} from './styles'

import {
  Button,
  StyledIcon,
  ButtonsContainer,
} from '../BasicButtonsStyles'

const defaultCategories = [
  {
    ID: 0,
    description: MESSAGE.home,
    color: "yellow"
  },
  {
    ID: 1,
    description: MESSAGE.food,
    color: "red"
  },
  {
    ID: 2,
    description: MESSAGE.others,
    color: "gray"
  },
]


const Categories = ({ navigation, route }) => {

  // const [showMenu, setShowMenu] = useState(false)
  const buttons = [
    {
      color: "#D23",
      icon: "md-arrow-back",
      onpress: () => {
        navigation.navigate('AddTransaction')
      }
    },
    {
      color: "#74D",
      icon: "md-checkmark",
      onpress: () => {

      }
    }
  ]

  return (
    <>
      <CategoriesTitle>
        Categorias
      </CategoriesTitle>
      <Container>

        {defaultCategories.map((item) =>
          <CategoriesRow onPress={() => {
            route.params.fnSetCategory(item)
            navigation.navigate('AddTransaction')
          }}>
            <CategoriesIcon color={item.color} />
            <CategoriesText key={item.ID} >
              {item.description}
            </CategoriesText>
          </CategoriesRow>
        )}

      </Container>
      <ButtonsContainer>
        {buttons.map((item, index) => (
          <Button key={index} index={index} bgcolor={item.color} onPress={item.onpress}>
            <StyledIcon name={item.icon} />
          </Button>
        ))}
      </ButtonsContainer>
    </>
  )
}

export default Categories