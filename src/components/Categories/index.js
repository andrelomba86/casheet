// import { Accounts, }
// import './db'
import React, { Fragment, useState } from 'react'
import DateTimePicker from '@react-native-community/datetimepicker';
import { Text } from 'react-native'
import {
  MESSAGE_TRANSFER,
  MESSAGE_INCOME,
  MESSAGE_EXPENSE,
  MESSAGE_DESCRIPTION,
  MESSAGE_AMOUNT,
  MESSAGE_DATE
} from '../../../lang/pt-br/pt-br.js'

import MESSAGE from '../../../lang/pt-br/pt-br.js';

import {
  Container,
  Button,
  StyledIcon,
  ButtonsContainer
} from './styles'

const Categories = ({ navigation }) => {

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


  console.log("rennderig")
  return (
    <>
      <Container>
      
        
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

export default AddTransaction