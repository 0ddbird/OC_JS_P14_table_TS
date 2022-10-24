import React, { useEffect, useState } from 'react'
// Components
import Select from 'react-ts-controlled-select'
import TableSearch from './TableSearch'
import PageNavigation from './PageNavigation'
import EntryCount from './EntryCount'
import TableHeading from './TableHeading'
import '../sass/main.scss'

// Mocks
import { rangeOptions } from '../mocks/entries'

export interface ITableItem {
  [key: string]: string
}

export interface ITableContent {
  headers: Array<{
    name: string
    value: string
  }>
  items: ITableItem[]
}

export interface ITableProps {
  items: ITableContent
  options: {
    searchModule: Boolean
    paginationModule: Boolean
    countModule: Boolean
    navigationModule: Boolean
  }
}

export interface ISortOption {
  sortDirection: 'asc' | 'desc'
  category: string
}

interface ITableParams {
  range: {
    label: string
    value: string
  }
  rangeStart: number
  sortOption: ISortOption | undefined
  searchKeyword: string | undefined
}

const Table = ({ items, options }: ITableProps): JSX.Element => {
  if (items.items == null) return <div>No data available</div>
  const [range, setRange] = useState({ label: '10', value: '10' })
  const [rangeStart, setRangeStart] = useState(0)
  const [currentBatch, setCurrentBatch] = useState(items.items)
  const [sortOption, setSortOption] = useState<ISortOption | undefined>(undefined)
  const [searchKeyword, setSearchKeyword] = useState<string | undefined>(undefined)
  const tableParams = { range, rangeStart, sortOption, searchKeyword }
  const categories = items.headers
  const gridColumns = `repeat(${categories.length}, 1fr)`

  function searchByKeyword (items: ITableItem[], keyword: string): ITableItem[] {
    const result: ITableItem[] = []
    const lowerCasedKeyword = keyword.toLowerCase()
    items.forEach(item => {
      if (Object.values(item).toString().toLowerCase().includes(lowerCasedKeyword)) result.push(item)
    })
    return result
  }

  function selectEntriesInRange (entries: ITableItem[], range: number, rangeStart: number): ITableItem[] {
    const result = []
    if (range > entries.length) range = entries.length
    for (let i = rangeStart; i < rangeStart + range; i++) if (entries[i] != null) result.push(entries[i])

    return result
  }

  function sortEntries (sortOption: ISortOption, batch: ITableItem[]): ITableItem[] {
    const direction = sortOption.sortDirection
    let sortedBatch = batch
    if (direction === 'desc') {
      sortedBatch = sortedBatch.sort(
        (itemA, itemB) => {
          if (itemA[`${sortOption.category}`] > itemB[`${sortOption.category}`]) return -1
          if (itemA[`${sortOption.category}`] < itemB[`${sortOption.category}`]) return 1
          return 0
        }
      )
    } else if (direction === 'asc') {
      sortedBatch = sortedBatch.sort(
        (itemA, itemB) => {
          if (itemA[`${sortOption.category}`] < itemB[`${sortOption.category}`]) return -1
          if (itemA[`${sortOption.category}`] > itemB[`${sortOption.category}`]) return 1
          return 0
        })
    }
    return sortedBatch
  }

  function processBatch (items: ITableItem[], tableParams: ITableParams): ITableItem[] {
    let result = items
    const keyword = tableParams.searchKeyword
    const range = parseInt(tableParams.range.value)
    const rangeStart = tableParams.rangeStart
    const sortOption = tableParams.sortOption
    if (keyword != null) {
      result = searchByKeyword(items, keyword)
      if (result.length === 0) return result
    }
    result = selectEntriesInRange(result, range, rangeStart)
    if (sortOption != null) result = sortEntries(sortOption, result)
    return result
  }

  useEffect(() => {
    const currentBatch = processBatch(items.items, tableParams)
    setCurrentBatch(currentBatch)
  }, [sortOption, range, rangeStart, searchKeyword])

  return (
    <div className='table'>
      <div className='table-top-options'>
        {
          options.paginationModule === true &&
          <div className='table-length'>
            Show <Select options={rangeOptions} selected={range} setSelected={setRange}/> entries
          </div>
        }
        { options.searchModule === true && <TableSearch setSearchKeyword={setSearchKeyword}/>}
      </div>
      <div className='table-header-row' style={{ gridTemplateColumns: gridColumns }}>
      {
        categories.map(category => <TableHeading key={category.value} category={category} setSortOption={setSortOption}/>)
      }
      </div>
      {
        currentBatch.map((item) => {
          return (
            <div className='item_row' style={{ gridTemplateColumns: gridColumns }} key={item[0]}>
              { Object.entries(item).map(entry => <div className='table-cell' key={entry[0]}>{entry[1]}</div>) }
            </div>
          )
        })
      }
      <div className='table-bottom-options'>
        { options.countModule === true && <EntryCount rangeStart={rangeStart} range={currentBatch.length} totalItems={items.items.length}/> }
        { options.navigationModule === true && <PageNavigation items={items.items} rangeStart={rangeStart} range={parseInt(range.value)} setRangeStart={setRangeStart}/> }
      </div>
    </div>
  )
}

export default Table
