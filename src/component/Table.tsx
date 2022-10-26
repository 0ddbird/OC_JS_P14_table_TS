import React, { useEffect, useState } from 'react'
// Components
import { ITableContent, ISortOption } from './interfaces'
import { processBatch } from './tableUtils'
import TableSearch from './TableSearch'
import PageNavigation from './PageNavigation'
import EntryCount from './EntryCount'
import TableHeading from './TableHeading'
import PaginationModule from './PaginationModule'
import '../sass/main.scss'
import TableRow from './TableRow'

export interface ITableProps {
  content: ITableContent
  options: {
    searchModule: {
      enabled: boolean
    }
    paginationModule: {
      enabled: boolean
      options?: Array<{
        label: string
        value: string
      }>
    }
    countModule: {
      enabled: boolean
    }
    navigationModule: {
      enabled: boolean
    }
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

  useEffect(() => {
    const currentBatch = processBatch(content.items, tableParams)
    setCurrentBatch(currentBatch)
  }, [sortOption, range, rangeStart, searchKeyword])

  return (
    <div className='table'>
      <div className='table-top-options'>
        { options.paginationModule.enabled &&
          options.paginationModule.options != null &&
        <PaginationModule rangeOptions={options.paginationModule.options} range={range} setRange={setRange} /> }
        { options.searchModule.enabled && <TableSearch setSearchKeyword={setSearchKeyword}/> }
      </div>
      <div className='table-header-row' style={{ gridTemplateColumns: gridColumns }}>
        { content.headers.map(category => <TableHeading key={category.value} category={category} setSortOption={setSortOption}/>) }
      </div>
      { [...currentBatch].map((item) => <TableRow key={item[0]} item={item} gridColumns={gridColumns} />) }
      <div className='table-bottom-options'>
        { options.countModule.enabled && <EntryCount rangeStart={rangeStart} range={currentBatch.size} totalItems={content.items.size}/> }
        { options.navigationModule.enabled && <PageNavigation items={content.items} rangeStart={rangeStart} range={parseInt(range.value)} setRangeStart={setRangeStart}/> }
      </div>
    </div>
  )
}

export default Table
