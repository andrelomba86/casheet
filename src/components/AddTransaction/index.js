// import { Accounts, }
// import './db'
import React, { useState } from 'react'
import DatePicker from './DatePicker'
import TouchableInput from './TouchableInput'
import Input from './Input'
import Switch from './Switch'
import MESSAGE from '../../../locale/pt-br/pt-br.js'
import AccountsDB from '../../db/accounts'

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
  const [accountFrom, setAccountFrom] = useState('')
  const [accountTo, setAccountTo] = useState('')

  const [accounts, setAccounts] = useState([])

  React.useEffect(() => {
    const dbAccounts = AccountsDB.getAccounts()
    if (dbAccounts.length > 0) {
      setAccounts(dbAccounts)
      console.log('setted setAccounts')
      setAccountFrom(dbAccounts[0])
      console.log('setted accountfrom', dbAccounts[0])
    } else {
      setAccountFrom({
        ID: -1,
        description: MESSAGE.add,
        color: '#ccc',
      })
    }
  }, [])

  const categoryFromRoute = route.params?.category
  const recurrenceFromRoute = route.params?.recurrence
  const accountFrom_FromRoute = route.params?.accountFrom
  const accountTo_FromRoute = route.params?.accountTo
  React.useEffect(() => {
    if (categoryFromRoute) {
      setCategory(categoryFromRoute)
    }
  }, [categoryFromRoute])

  React.useEffect(() => {
    if (recurrenceFromRoute) {
      setRecurrence(recurrenceFromRoute)
    }
  }, [recurrenceFromRoute])

  React.useEffect(() => {
    console.log('x---------', accountFrom_FromRoute)
    if (accountFrom_FromRoute) {
      setAccountFrom(accountFrom_FromRoute)
    }
  }, [accountFrom_FromRoute])

  React.useEffect(() => {
    if (accountTo_FromRoute) {
      setAccountFrom(accountTo_FromRoute)
    }
  }, [accountTo_FromRoute])

  const transactionTypes = [MESSAGE.expense, MESSAGE.income, MESSAGE.transfer]

  console.log('rendering')
  return (
    <>
      <Container>
        {/* Transaction type buttons */}
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

        {/* Description */}
        <Input
          label={MESSAGE.description}
          onChangeText={text => setDescription(text)}
          value={description}
        />
        {/* {autoFocus={true}} */}

        {/* Amount */}
        <Input
          label={MESSAGE.amount}
          onChangeText={text => setAmount(text)}
          value={amount}
          width="150px"
          keyboardType="decimal-pad"
          placeholder="0,00"
          center
        />

        {/* Date */}
        <DatePicker
          label={MESSAGE.date}
          onChangeDate={value => setDate(value)}
          value={date}
        />

        {/* Account FROM */}
        <TouchableInput
          label={MESSAGE.account}
          color={accountFrom?.color}
          onPress={() =>
            navigation.navigate('Accounts', {
              accounts: accounts,
              type: 'from',
            })
          }
        >
          {accountFrom?.description}
        </TouchableInput>

        {/* Categories */}
        <TouchableInput
          label={MESSAGE.category}
          onPress={() => navigation.navigate('Categories')}
        >
          <StyledPricetagIcon color={category.color} />
          &nbsp; {category.description}
        </TouchableInput>

        {/* Recurrence */}
        <TouchableInput
          label={MESSAGE.recurrence}
          onPress={() => navigation.navigate('Recurrence', recurrence)}
        >
          {recurrence.periodIndex > 0 && `${recurrence.strInterval} `}
          {recurrencePeriods[recurrence.periodIndex]}
        </TouchableInput>

        {/* Paid Switch */}
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

      {/* OK and back buttons */}
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
