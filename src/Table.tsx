import React, { useEffect, useState } from 'react'
import { ITableItems, ITableCategory, ISortOption, ITableOptions } from './interfaces'
import { filterItems } from './tableUtils'
import SearchModule from './SearchModule'
import NavModule from './NavModule'
import CountModule from './CountModule'
import PaginationModule from './PaginationModule'
import TableHeading from './TableHeading'
import TableRow from './TableRow'
import './table_main.css'

export interface ITableProps {
  items: ITableItems
  categories: ITableCategory[]
  options: ITableOptions
}

const Table = ({ items, categories, options }: ITableProps): JSX.Element => {
  if (items == null) return <div>No data available</div>
  const { paginationModule: paginate, searchModule: search, countModule: count, navigationModule: navigate, paginationOptions, cssPrefix: prefix } = options
  const gridColumns = `repeat(${categories.length}, 1fr)`
  const [range, setRange] = useState({ label: '10', value: '10' })
  const [rangeStart, setRangeStart] = useState(0)
  const [displayedItems, setDisplayedItems] = useState(items)
  const [sortOption, setSortOption] = useState<ISortOption | undefined>(undefined)
  const [searchKeyword, setSearchKeyword] = useState<string | undefined>(undefined)
  const tableParams = { range, rangeStart, sortOption, searchKeyword }

  useEffect(() => {
    setDisplayedItems(filterItems(items, tableParams))
  }, [sortOption, range, rangeStart, searchKeyword])

  return (
    <div className={`${prefix ?? ''}table`}>
      <div className={`${prefix ?? ''}table-top-options`}>
        { paginate && paginationOptions !== undefined && <PaginationModule rangeOptions={paginationOptions} range={range} setRange={setRange} cssPrefix={prefix}/> }
        { search && <SearchModule setSearchKeyword={setSearchKeyword} cssPrefix={prefix}/> }
      </div>
      <div className={`${prefix ?? ''}table-header-row`} style={{ gridTemplateColumns: gridColumns }}>
        { categories.map(category => <TableHeading key={category.value} category={category} setSortOption={setSortOption} cssPrefix={prefix}/>) }
      </div>
      { [...displayedItems].map(item => <TableRow key={item[0]} item={item} gridColumns={gridColumns} cssPrefix={prefix} />) }
      <div className={`${prefix ?? ''}table-bottom-options`}>
        { count && <CountModule rangeStart={rangeStart} range={displayedItems.size} totalItems={items.size} cssPrefix={prefix}/> }
        { navigate && <NavModule items={items} rangeStart={rangeStart} range={parseInt(range.value)} setRangeStart={setRangeStart} cssPrefix={prefix}/> }
      </div>
    </div>
  )
}

export default Table
