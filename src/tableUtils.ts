import { ITableItems, ISortOption, ITableParams } from './interfaces'

function searchBysearchKeyword (items: ITableItems, keyword: string): ITableItems {
  const result: ITableItems = new Map()
  const lowerCaseKeyword = keyword.toLowerCase()
  for (const [itemID, item] of items) if (Object.values(item).toString().toLowerCase().includes(lowerCaseKeyword)) result.set(itemID, item)
  return result
}

function selectEntriesInRange (items: ITableItems, range: number, rangeStart: number): ITableItems {
  const result: ITableItems = new Map()
  if (range > items.size) range = items.size
  for (let i = rangeStart; i < rangeStart + range; i++) {
    const key = `${i}`
    const value = items.get(key)
    if (items.has(key)) {
      if (value != null) result.set(key, value)
    }
  }
  return result
}

function sortEntries (sortOption: ISortOption, items: ITableItems): ITableItems {
  const direction = sortOption.sortDirection
  const result = new Map([...items].sort(
    (itemA, itemB) => {
      if (itemA[1][`${sortOption.category}`] > itemB[1][`${sortOption.category}`]) return -1
      if (itemA[1][`${sortOption.category}`] < itemB[1][`${sortOption.category}`]) return 1
      return 0
    }
  ))
  switch (direction) {
    case 'desc': return result
    case 'asc': return new Map([...result].reverse())
    default: return items
  }
}

function filterItems (items: ITableItems, tableParams: ITableParams): ITableItems {
  let result = items
  const { searchKeyword, rangeStart, sortOption } = tableParams
  const range = parseInt(tableParams.range.value)
  if (searchKeyword != null) {
    result = searchBysearchKeyword(items, searchKeyword)
    if (result.size === 0) return result
  }
  result = selectEntriesInRange(result, range, rangeStart)
  if (sortOption != null) result = sortEntries(sortOption, result)
  return result
}

export { filterItems }
