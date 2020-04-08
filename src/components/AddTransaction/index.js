// import { Accounts, }
// import './db'
import React, { Fragment, useState } from 'react'
import DateTimePicker from '@react-native-community/datetimepicker';
import MESSAGE from '../../../locale/pt-br/pt-br.js';

import {
  Container,
  Button,
  StyledIcon,
  StyledPricetagIcon,
  TransactionTypeContainer,
  TransactionTypeButton,
  TransactionButtonText,
  TransactionFormRow,
  TransactionInput,
  TransactionLabel,
  TransactionButton,
  ButtonsContainer,
  
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
  
  const [category, setCategory] = useState(MESSAGE.uncategorized)
  const [recurrence, setRecurrence] = useState(0)

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
          <TransactionInput onChangeText={text => setAmount(text)} value={amount} width="150px" keyboardType="decimal-pad" placeholder="0,00" center />
        </TransactionFormRow>
       
        <TransactionFormRow>
          <TransactionLabel>{MESSAGE.date}</TransactionLabel>
          <TransactionButton onPress={() => setShowDatePicker(true)}>
            <TransactionButtonText >
              {date.toLocaleDateString()}
            </TransactionButtonText>
          </TransactionButton>
        </TransactionFormRow>

        <TransactionFormRow>
          <TransactionLabel>{MESSAGE.category}</TransactionLabel>
          <TransactionButton onPress={() => navigation.navigate('Categories')}>
            
            <TransactionButtonText color="red">
            {category}
            &nbsp;
              <StyledPricetagIcon name="md-pricetag" />
              
              
            </TransactionButtonText>
          </TransactionButton>
        </TransactionFormRow>

        <TransactionFormRow>
          <TransactionLabel>{MESSAGE.recurrence}</TransactionLabel>
          <TransactionButton onPress={() => {}}>
            <TransactionButtonText >
              {recurrence}
            </TransactionButtonText>
          </TransactionButton>
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