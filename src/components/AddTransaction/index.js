// import { Accounts, }
// import './db'
import React, { useState } from 'react'
// import DateTimePicker from '@react-native-community/datetimepicker'
import DatePicker from './DatePicker'
import MESSAGE from '../../../locale/pt-br/pt-br.js'

import {
  Container,
  StyledPricetagIcon,
  TransactionTypeContainer,
  TransactionTypeButton,
  Row,
  TransactionInput,
  Label,
  TouchableInput,
  TouchableInputText,
  TransactionSwitch,
} from './styles'

import { recurrencePeriods } from '../../consts'

import { ButtonsContainer, Button, StyledIcon } from '../BasicButtonsStyles'

const AddTransaction = ({ navigation, route }) => {
  // const [showMenu, setShowMenu] = useState(false)
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
      onpress: () => {},
    },
  ]

  const transactionTypes = [MESSAGE.expense, MESSAGE.income, MESSAGE.transfer]
  const [selectedTransactionType, setTransactionType] = useState(0)

  const [description, setDescription] = useState('')
  const [amount, setAmount] = useState('')
  var today = new Date()
  today.setHours(0, 0, 0, 0)
  const [date, setDate] = useState(today)
  // const [showDatePicker, setShowDatePicker] = useState(false)
  const [category, setCategory] = useState({
    ID: -1,
    description: MESSAGE.uncategorized,
    color: '#D33',
  })
  const [recurrence, setRecurrence] = useState({
    periodIndex: 0,
    strInterval: '',
  })

  const [paid, setPaid] = useState(true)

  const callback_recurrence = route.prams?.recurrence

  React.useEffect(() => {
    if (route.params?.category) {
      setCategory(route.params.category)
    }
    if (route.params?.recurrence) {
      setRecurrence(route.params.recurrence)
      console.log(recurrencePeriods[route.params.recurrence.periodIndex])
    }
  }, [route.params, callback_recurrence])

  console.log('rendering')
  return (
    <>
      <Container>
        <TransactionTypeContainer>
          {transactionTypes?.map((item, index) => (
            <TransactionTypeButton
              key={index}
              selected={selectedTransactionType === index ? true : false}
              onPress={() => setTransactionType(index)}>
              <TouchableInputText>{item}</TouchableInputText>
            </TransactionTypeButton>
          ))}
        </TransactionTypeContainer>

        <Row>
          <Label>{MESSAGE.description}</Label>
          <TransactionInput
            onChangeText={text => setDescription(text)}
            value={description}
          />
          {/* {autoFocus={true}} */}
        </Row>

        <Row>
          <Label>{MESSAGE.amount}</Label>
          <TransactionInput
            onChangeText={text => setAmount(text)}
            value={amount}
            width="150px"
            keyboardType="decimal-pad"
            placeholder="0,00"
            center
          />
        </Row>

        <Row>
          <Label>{MESSAGE.date}</Label>
          <DatePicker onChangeDate={value => setDate(value)} value={date} />
        </Row>

        <Row>
          <Label>{MESSAGE.category}</Label>
          <TouchableInput onPress={() => navigation.navigate('Categories')}>
            <TouchableInputText>
              <StyledPricetagIcon color={category.color} />
              &nbsp; {category.description}
            </TouchableInputText>
          </TouchableInput>
        </Row>

        <Row>
          <Label>{MESSAGE.recurrence}</Label>
          <TouchableInput
            onPress={() => navigation.navigate('Recurrence', recurrence)}>
            <TouchableInputText>
              {recurrence.periodIndex > 0 && `${recurrence.strInterval} `}
              {recurrencePeriods[recurrence.periodIndex]}
            </TouchableInputText>
          </TouchableInput>
        </Row>

        <Row>
          <Label>{MESSAGE.paid}</Label>
          <TransactionSwitch
            value={paid}
            onValueChange={state => setPaid(state)}
          />
        </Row>

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

export default AddTransaction
