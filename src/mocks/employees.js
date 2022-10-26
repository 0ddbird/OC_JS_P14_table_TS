
const headers = [
  {
    name: 'First Name',
    value: 'firstName'
  },
  {
    name: 'Last Name',
    value: 'lastName'
  },
  {
    name: 'Start Date',
    value: 'startDate'
  },
  {
    name: 'Department',
    value: 'department'
  },
  {
    name: 'Birth Date',
    value: 'birthDate'
  },
  {
    name: 'Street',
    value: 'street'
  },
  {
    name: 'City',
    value: 'city'
  },
  {
    name: 'State',
    value: 'state'
  },
  {
    name: 'Zip Code',
    value: 'zipCode'
  }
]
const employeesMap = new Map()
employeesMap.set('0', {
  firstName: 'Steve',
  lastName: 'Works',
  startDate: '2022-09-06',
  department: 'Sales',
  birthDate: '1990-09-06',
  street: '12, Red street',
  city: 'London',
  state: 'AK',
  zipCode: '123ABC'
})
employeesMap.set('1', {
  firstName: 'Bob',
  lastName: 'Iwan',
  startDate: '2022-09-06',
  department: 'Engineering',
  birthDate: '1990-09-06',
  street: '02, Baker Street',
  city: 'Paris',
  state: 'OK',
  zipCode: '465ABC'
})
employeesMap.set('2', {
  firstName: 'Charly',
  lastName: 'Bupont',
  startDate: '2021-02-06',
  department: 'Marketing',
  birthDate: '1980-09-06',
  street: '59, Central Park',
  city: 'New York',
  state: 'NY',
  zipCode: 'ABC896'
})
employeesMap.set('3', {
  firstName: 'Jen',
  lastName: 'Barber',
  startDate: '2021-02-06',
  department: 'Marketing',
  birthDate: '1980-09-06',
  street: '59, Pineapple street',
  city: 'Sydney',
  state: 'IO',
  zipCode: 'ABC896'
})

const tableData = {
  headers,
  items: employeesMap
}

export { tableData }
