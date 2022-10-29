import { ITableItem, ISortOption, ITableParams } from './interfaces'

function filterByKeyword (items: ITableItem[], keyword: string): ITableItem[] {
  const itemsClone: ITableItem[] = JSON.parse(JSON.stringify(items))
  return itemsClone.filter(item => Object.values(item).toString().toLowerCase().includes(keyword.toLowerCase()))
}
function selectEntriesInRange (items: ITableItem[], range: number, rangeStart: number): ITableItem[] {
  let cappedRange
  range > items.length ? cappedRange = items.length : cappedRange = range
  return items.slice(rangeStart, rangeStart + cappedRange)
}
function sortEntries (sortOption: ISortOption, items: ITableItem[]): ITableItem[] {
  const direction = sortOption.sortDirection
  const result = items.sort(
    (itemA, itemB) => {
      if (itemA[`${sortOption.category}`] > itemB[`${sortOption.category}`]) return -1
      else if (itemA[`${sortOption.category}`] < itemB[`${sortOption.category}`]) return 1
      else return 0
    }
  )
  switch (direction) {
    case 'desc': return result
    case 'asc': return result.reverse()
    default: return items
  }
}
function filterItems (items: ITableItem[], tableParams: ITableParams): ITableItem[] {
  // Deep clone array of objects
  let result = JSON.parse(JSON.stringify(items))

  // Destructure tableParams and convert range string to integer
  const { range, rangeStart, sortOption } = tableParams
  const intRange = parseInt(range.value)

  // Filter items to fit in the allowed display range
  result = selectEntriesInRange(result, intRange, rangeStart)

  // Sort items
  if (sortOption != null) result = sortEntries(sortOption, result)
  return result
}

export { filterItems, filterByKeyword }
