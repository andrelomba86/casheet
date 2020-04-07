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

import {
  Container,
  ButtonContainer,
  StyledIcon,
  TransactionTypeContainer,
  TransactionTypeButton,
  TransactionTypeButtonText,
  TransactionFormRow,
  TransactionInput,
  TransactionLabel,
  TransactionDate
} from './styles'

const AddTransaction = ({ navigation }) => {

  // const [showMenu, setShowMenu] = useState(false)
  const buttons = [
    {
      color: "#D23",
      icon: "md-arrow-back",
      onpress: () => {
        navigation.navigate('Main')
      }
    },
    {
      color: "#74D",
      icon: "md-checkmark",
      onpress: () => {

      }
    }
  ]

  const transactionTypes = [MESSAGE_EXPENSE, MESSAGE_INCOME, MESSAGE_TRANSFER]
  const [selectedTransactionType, setTransactionType] = useState(0)

  const [description, setDescription] = useState('')
  const [amount, setAmount] = useState(0)
  var today = new Date()
  today.setHours(0,0,0,0)
  const [date, setDate] = useState(today)
  const [showDatePicker, setShowDatePicker] = useState(false)

  return (
    <>
      <Container>
        <TransactionTypeContainer>
          {transactionTypes.map((item, index) => (
            <TransactionTypeButton key={index} selected={(selectedTransactionType === index ? true : false)} onPress={() => setTransactionType(index)}>
              <TransactionTypeButtonText >
                {item}
              </TransactionTypeButtonText>
            </TransactionTypeButton>
          ))}
        </TransactionTypeContainer>

        <TransactionFormRow>
          <TransactionLabel>{MESSAGE_DESCRIPTION}</TransactionLabel>
          <TransactionInput onChangeText={text => setDescription(text)} value={description} autoFocus={true} />
        </TransactionFormRow>

        <TransactionFormRow>
          <TransactionLabel>{MESSAGE_AMOUNT}</TransactionLabel>
          <TransactionInput onChangeText={text => setAmount(parseInt(text))} value={amount} width="150px" keyboardType="decimal-pad" placeholder="0,00" center />
        </TransactionFormRow>
       
        <TransactionFormRow>
          <TransactionLabel>{MESSAGE_DATE}</TransactionLabel>
          <TransactionDate onPress={() => setShowDatePicker(true)}>
            <TransactionTypeButtonText >
              {date.toLocaleDateString()}
            </TransactionTypeButtonText>
          </TransactionDate>
        </TransactionFormRow>

        {showDatePicker &&
          <DateTimePicker
            testID="dateTimePicker"
            timeZoneOffsetInMinutes={0}
            value={date}
            mode="date"
            display="default"
            onChange={(_e, selectedDate) => {
              setShowDatePicker(false)
              setDate(selectedDate ? selectedDate : date)
            }}
          />
        }
        {/*
          - descrição
          - conta / conta de origem (transf)
          - conta de destino (transf)
          - data
          - valor
          - marcador(categoria)
          - recorrência
          - pago/não pago

         */}

        {buttons.map((item, index) => (
          <ButtonContainer key={index} index={index} bgcolor={item.color} onPress={item.onpress}>
            <StyledIcon name={item.icon} />
          </ButtonContainer>
        ))}
      </Container>
    </>
  )
}

export default AddTransaction