// import { Accounts, }
// import './db'
import React, { useState } from 'react'
import DatePicker from './DatePicker'
import TouchableInput from './TouchableInput'
import Input from './Input'
import Switch from './Switch'
import MESSAGE from '../../../locale/pt-br/pt-br.js'

import {
  Container,
  StyledPricetagIcon,
  TouchableText,
  TransactionTypeContainer,
  TransactionTypeButton,
} from './styles'

import { recurrencePeriods } from '../../consts'

import { ButtonsContainer, Button, StyledIcon } from '../BasicButtonsStyles'

const AddTransaction = ({ navigation, route }) => {
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
  const today = new Date()
  today.setHours(0, 0, 0, 0)

  const [selectedTransactionType, setTransactionType] = useState(0)
  const [description, setDescription] = useState('')
  const [amount, setAmount] = useState('')
  const [date, setDate] = useState(today)
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

  const transactionTypes = [MESSAGE.expense, MESSAGE.income, MESSAGE.transfer]

  console.log('rendering')
  return (
    <>
      <Container>
        <TransactionTypeContainer>
          {transactionTypes?.map((item, index) => (
            <TransactionTypeButton
              key={index}
              selected={selectedTransactionType === index ? true : false}
              onPress={() => setTransactionType(index)}
            >
              <TouchableText>{item}</TouchableText>
            </TransactionTypeButton>
          ))}
        </TransactionTypeContainer>

        <Input
          label={MESSAGE.description}
          onChangeText={text => setDescription(text)}
          value={description}
        />
        {/* {autoFocus={true}} */}

        <Input
          label={MESSAGE.amount}
          onChangeText={text => setAmount(text)}
          value={amount}
          width="150px"
          keyboardType="decimal-pad"
          placeholder="0,00"
          center
        />

        <DatePicker
          label={MESSAGE.date}
          onChangeDate={value => setDate(value)}
          value={date}
        />

        <TouchableInput
          label={MESSAGE.category}
          onPress={() => navigation.navigate('Categories')}
        >
          <StyledPricetagIcon color={category.color} />
          &nbsp; {category.description}
        </TouchableInput>

        <TouchableInput
          label={MESSAGE.recurrence}
          onPress={() => navigation.navigate('Recurrence', recurrence)}
        >
          {recurrence.periodIndex > 0 && `${recurrence.strInterval} `}
          {recurrencePeriods[recurrence.periodIndex]}
        </TouchableInput>

        <Switch
          label={MESSAGE.paid}
          value={paid}
          onValueChange={state => setPaid(state)}
        />

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
            onPress={item.onpress}
          >
            <StyledIcon name={item.icon} />
          </Button>
        ))}
      </ButtonsContainer>
    </>
  )
}

export default AddTransaction
