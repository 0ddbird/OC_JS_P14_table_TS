import React from 'react'
import { ITableItem } from './interfaces'

interface ITableRowProps {
  item: [string, ITableItem]
  gridColumns: string
}
const TableRow = ({ item, gridColumns }: ITableRowProps): JSX.Element => {
  return (
    <div className='item_row' style={{ gridTemplateColumns: gridColumns }}>
      { Object.entries(item[1]).map(entry => <div className='table-cell' key={`${item[0]}${entry[0]}`}>{entry[1]}</div>) }
    </div>
  )
}

export default TableRow
