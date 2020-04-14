/* 
TEMPORRARY FUNCTIONS

*/
const accounts = [
  { ID: 0, description: 'Santander', color: '#a30', initial_value: 100 },
  {
    ID: 1,
    description: 'Banco do Brasil',
    color: '#0ad',
    initial_value: 0,
  },
]

let id = 1

export default class Accounts {
  static getAccounts() {
    return accounts
  }
  static addAccounts(newAccount) {
    accounts.push({ ID: id++, ...newAccount })
  }
  // return { getAccounts }
}

// export default class Accounts {
//   static schema = {
//     name: 'Accounts',
//     properties: {
//       id: { type: 'int', indexed: true },
//       name: 'string',
//       color: 'string',
//       initial_value: 'int',
//     },
//   }
// }
