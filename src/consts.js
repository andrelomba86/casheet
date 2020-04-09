import MESSAGE from '../locale/pt-br/pt-br.js'

export const recurrencePeriods = [
  { ID: 1, description: MESSAGE.week },
  { ID: 2, description: MESSAGE.fifteen_days },
  { ID: 3, description: MESSAGE.month },
  { ID: 4, description: MESSAGE.bimester },
  { ID: 5, description: MESSAGE.year },
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
