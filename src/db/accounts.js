class Accounts {
    static schema = {
        name: 'Accounts',
        properties: {
            id: { type: 'int', indexed: true },
            name: 'string',
            color: 'string',
            initial_value: 'int',
        }
    }
}