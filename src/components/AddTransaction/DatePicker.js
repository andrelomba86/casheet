import DateTimePicker from '@react-native-community/datetimepicker'
import React, { useState } from 'react'
import { TouchableInput, TouchableInputText } from './styles'
// import MESSAGE from '../../../locale/pt-br/pt-br.js'

export default function DatePicker({ onChangeDate, value }) {
  const [showDatePicker, setShowDatePicker] = useState(false)
  // const [date, setDate] = useState(date)
  return (
    <>
      <TouchableInput onPress={() => setShowDatePicker(true)}>
        <TouchableInputText>{value.toLocaleDateString()}</TouchableInputText>
      </TouchableInput>
      {showDatePicker && (
        <DateTimePicker
          testID="dateTimePicker"
          timeZoneOffsetInMinutes={0}
          value={value ? value : ''}
          mode="date"
          display="default"
          onChange={(_e, selectedDate) => {
            setShowDatePicker(false)
            if (selectedDate && typeof onChangeDate === 'function') {
              onChangeDate(selectedDate)
            }
          }}
        />
      )}
    </>
  )
}
