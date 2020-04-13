import MESSAGE from '../locale/pt-br/pt-br.js'

export const recurrencePeriods = [
  MESSAGE.dontrepeat,
  MESSAGE.week,
  MESSAGE.fifteen_days,
  MESSAGE.month,
  MESSAGE.bimester,
  MESSAGE.year,
]

export const defaultCategories = [
  {
    ID: 0,
    description: MESSAGE.home,
    color: 'yellow',
  },
  {
    ID: 1,
    description: MESSAGE.food,
    color: 'red',
  },
  {
    ID: 2,
    description: MESSAGE.others,
    color: 'gray',
  },
]
