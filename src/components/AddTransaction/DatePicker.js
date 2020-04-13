import DateTimePicker from '@react-native-community/datetimepicker'
import React, { useState } from 'react'
import { Row, Label, Touchable, TouchableText } from './styles'

export default function DatePicker({ label, onChangeDate, value }) {
  const [showDatePicker, setShowDatePicker] = useState(false)
  return (
    <>
      <Row>
        <Label>{label}</Label>
        <Touchable onPress={() => setShowDatePicker(true)}>
          <TouchableText>{value.toLocaleDateString()}</TouchableText>
        </Touchable>
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
      </Row>
    </>
  )
}
