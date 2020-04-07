// import { Accounts, }
// import './db'
import React, { Fragment, useState } from 'react'
import DateTimePicker from '@react-native-community/datetimepicker';
import { Text } from 'react-native'
import MESSAGE from '../../../lang/pt-br/pt-br.js';

import {
  Container,
  Button,
  StyledIcon,
  TransactionTypeContainer,
  TransactionTypeButton,
  TransactionButtonText,
  TransactionFormRow,
  TransactionInput,
  TransactionLabel,
  TransactionDate,
  ButtonsContainer
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

  const transactionTypes = [MESSAGE.expense, MESSAGE.income, MESSAGE.transfer]
  const [selectedTransactionType, setTransactionType] = useState(0)

  const [description, setDescription] = useState('')
  const [amount, setAmount] = useState('')
  var today = new Date()
  today.setHours(0,0,0,0)
  const [date, setDate] = useState(today)
  const [showDatePicker, setShowDatePicker] = useState(false)
  
  const [category, setCategory] = useState('')

  console.log("rennderig")
  return (
    <>
      <Container>
        
        <TransactionTypeContainer>
          {transactionTypes.map((item, index) => (
            <TransactionTypeButton key={index} selected={(selectedTransactionType === index ? true : false)} onPress={() => setTransactionType(index)}>
              <TransactionButtonText >
                {item}
              </TransactionButtonText>
            </TransactionTypeButton>
          ))}
        </TransactionTypeContainer>

        <TransactionFormRow>
          <TransactionLabel>{MESSAGE.description}</TransactionLabel>
          <TransactionInput onChangeText={text => setDescription(text)} value={description} autoFocus={true} />
        </TransactionFormRow>

        <TransactionFormRow>
          <TransactionLabel>{MESSAGE.amount}</TransactionLabel>
          <TransactionInput onChangeText={text => setAmount(parseInt(text))} value={amount} width="150px" keyboardType="decimal-pad" placeholder="0,00" center />
        </TransactionFormRow>
       
        <TransactionFormRow>
          <TransactionLabel>{MESSAGE.date}</TransactionLabel>
          <TransactionDate onPress={() => setShowDatePicker(true)}>
            <TransactionButtonText >
              {date.toLocaleDateString()}
            </TransactionButtonText>
          </TransactionDate>
        </TransactionFormRow>

        <TransactionFormRow>
          <TransactionLabel>{MESSAGE.category}</TransactionLabel>
          <TransactionDate onPress={() => navigation.navigate('Categories')}>
            <TransactionButtonText >
              {category}
            </TransactionButtonText>
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
              if (selectedDate) setDate(selectedDate)
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