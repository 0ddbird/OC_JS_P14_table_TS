import React from 'react'
import { ITableAccessor, ITableItem } from './interfaces'

interface ITableRowProps {
  item: ITableItem
  accessors: ITableAccessor[]
  gridColumns: string
  evenRow: boolean
  cssPrefix: string | undefined
}
const TableRow = ({ item, gridColumns, accessors, evenRow, cssPrefix }: ITableRowProps): JSX.Element => {
  return (
    <div className={`${cssPrefix ?? ''}item_row ${evenRow ? 'even' : 'odd'}`} style={{ gridTemplateColumns: gridColumns }}>
      { accessors.map(accessor => <div className={`${cssPrefix ?? ''}table-cell`} key={`${item.id}-${accessor.value}`}>{item[accessor.value]}</div>) }
    </div>
  )
}

export default TableRow
