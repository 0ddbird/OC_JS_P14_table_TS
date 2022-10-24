import React from 'react'
import Table from './component/Table'
import { tableData } from './mocks/employees'

function App (): JSX.Element {
  const tableOptions = {
    searchModule: true,
    paginationModule: true,
    countModule: true,
    navigationModule: true
  }
  return <Table items={tableData} options={tableOptions}/>
}

export default App
