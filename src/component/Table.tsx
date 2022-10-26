import React, { useEffect, useState } from 'react'
// Components
import { ITableContent, ISortOption } from './interfaces'
import { processBatch } from './tableUtils'
import SearchModule from './SearchModule'
import NavModule from './NavModule'
import CountModule from './CountModule'
import PaginationModule from './PaginationModule'
import TableHeading from './TableHeading'
import TableRow from './TableRow'
import '../sass/main.scss'

export interface ITableProps {
  content: ITableContent
  options: {
    searchModule: boolean
    paginationModule: boolean
    countModule: boolean
    navigationModule: boolean
    paginationOptions?: Array<{
      label: string
      value: string
    }>
    cssPrefix?: string
  }
}

const Table = ({ content, options }: ITableProps): JSX.Element => {
  if (content.items == null) return <div>No data available</div>
  const [range, setRange] = useState({ label: '10', value: '10' })
  const [rangeStart, setRangeStart] = useState(0)
  const [currentBatch, setCurrentBatch] = useState(content.items)
  const [sortOption, setSortOption] = useState<ISortOption | undefined>(undefined)
  const [searchKeyword, setSearchKeyword] = useState<string | undefined>(undefined)
  const tableParams = { range, rangeStart, sortOption, searchKeyword }
  const gridColumns = `repeat(${content.headers.length}, 1fr)`
  const { paginationModule, searchModule, countModule, navigationModule, paginationOptions, cssPrefix } = options

  useEffect(() => {
    const currentBatch = processBatch(content.items, tableParams)
    setCurrentBatch(currentBatch)
  }, [sortOption, range, rangeStart, searchKeyword])

  return (
    <div className={`${cssPrefix ?? ''}table`}>
      <div className={`${cssPrefix ?? ''}table-top-options`}>
        { paginationModule && paginationOptions !== undefined && <PaginationModule rangeOptions={paginationOptions} range={range} setRange={setRange} cssPrefix={cssPrefix}/> }
        { searchModule && <SearchModule setSearchKeyword={setSearchKeyword} cssPrefix={cssPrefix}/> }
      </div>
      <div className={`${cssPrefix ?? ''}table-header-row`} style={{ gridTemplateColumns: gridColumns }}>
        { content.headers.map(category => <TableHeading key={category.value} category={category} setSortOption={setSortOption} cssPrefix={cssPrefix}/>) }
      </div>
      { [...currentBatch].map((item) => <TableRow key={item[0]} item={item} gridColumns={gridColumns} cssPrefix={cssPrefix} />) }
      <div className={`${cssPrefix ?? ''}table-bottom-options`}>
        { countModule && <CountModule rangeStart={rangeStart} range={currentBatch.size} totalItems={content.items.size} cssPrefix={cssPrefix}/> }
        { navigationModule && <NavModule items={content.items} rangeStart={rangeStart} range={parseInt(range.value)} setRangeStart={setRangeStart} cssPrefix={cssPrefix}/> }
      </div>
    </div>
  )
}

export default Table
