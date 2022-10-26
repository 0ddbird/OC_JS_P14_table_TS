import React from 'react'
import Table from './component/Table'
import { tableData } from './mocks/employees'

function App (): JSX.Element {
  const tableOptions = {
    searchModule: {
      enabled: true
    },
    paginationModule: {
      enabled: true,
      options: [
        {
          label: '10',
          value: '10'
        },
        {
          label: '25',
          value: '25'
        },
        {
          label: '50',
          value: '50'
        },
        {
          label: '100',
          value: '100'
        }
      ]
    },
    countModule: {
      enabled: true
    },
    navigationModule: {
      enabled: true
    }
  }
  return <Table content={tableData} options={tableOptions}/>
}

export default App
