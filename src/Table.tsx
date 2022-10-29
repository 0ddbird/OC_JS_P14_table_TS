import React, { useEffect, useState } from 'react'
import { ITableItem, ITableAccessor, ISortOption, ITableOptions } from './interfaces'
import { filterByKeyword, filterItems } from './tableUtils'
import SearchModule from './SearchModule'
import NavModule from './NavModule'
import CountModule from './CountModule'
import PaginationModule from './PaginationModule'
import TableHeading from './TableHeading'
import TableRow from './TableRow'
import './table_main.css'

export interface ITableProps {
  items: ITableItem[]
  accessors: ITableAccessor[]
  options: ITableOptions
}

const Table = ({ items, accessors, options }: ITableProps): JSX.Element => {
  if (items == null) return <div>No data available</div>
  const { paginationModule: paginate, searchModule: search, countModule: count, navigationModule: navigate, paginationOptions, cssPrefix: prefix } = options
  const gridColumns = `repeat(${accessors.length}, 1fr)`
  const [range, setRange] = useState({ label: '10', value: '10' })
  const [rangeStart, setRangeStart] = useState(0)
  const [matchingItems, setMatchingItems] = useState(items)
  const [displayedItems, setDisplayedItems] = useState(items)
  const [sortOption, setSortOption] = useState<ISortOption | undefined>(undefined)
  const [searchKeyword, setSearchKeyword] = useState<string>('')
  const tableParams = { range, rangeStart, sortOption }
  const isEvenRow = (item: ITableItem, array: ITableItem[]): boolean => array.indexOf(item) % 2 === 0

  useEffect(() => {
    setMatchingItems(filterByKeyword(items, searchKeyword))
  }, [searchKeyword])

  useEffect(() => {
    setDisplayedItems(filterItems(matchingItems, tableParams))
  }, [sortOption, range, rangeStart, matchingItems])

  return (
    <div className={`${prefix ?? ''}table`}>
      <div className={`${prefix ?? ''}table-top-options`}>
        { paginate && paginationOptions !== undefined && <PaginationModule rangeOptions={paginationOptions} range={range} setRange={setRange} cssPrefix={prefix}/> }
        { search && <SearchModule setSearchKeyword={setSearchKeyword} cssPrefix={prefix}/> }
      </div>
      <div className={`${prefix ?? ''}table-header-row`} style={{ gridTemplateColumns: gridColumns }}>
        { accessors.map(accessor => <TableHeading key={accessor.value} category={accessor} setSortOption={setSortOption} cssPrefix={prefix}/>) }
      </div>
      { displayedItems.map(item => <TableRow key={item.id} item={item} accessors={accessors} gridColumns={gridColumns} cssPrefix={prefix} evenRow={isEvenRow(item, displayedItems)}/>) }
      <div className={`${prefix ?? ''}table-bottom-options`}>
        { count && <CountModule rangeStart={rangeStart} range={displayedItems.length} matchingItemsLength={matchingItems.length} totalItemsLength={items.length} cssPrefix={prefix}/> }
        { navigate && <NavModule items={matchingItems} rangeStart={rangeStart} range={parseInt(range.value)} setRangeStart={setRangeStart} cssPrefix={prefix}/> }
      </div>
    </div>
  )
}

export default Table
