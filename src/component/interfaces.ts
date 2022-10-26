export interface ITableItem {
  [key: string]: string
}

export type ITableItems = Map<string, ITableItem>

export interface ITableContent {
  headers: Array<{
    name: string
    value: string
  }>
  items: Map<string, ITableItem>
}

export interface ISortOption {
  sortDirection: 'asc' | 'desc'
  category: string
}

export interface ITableParams {
  range: {
    label: string
    value: string
  }
  rangeStart: number
  sortOption: ISortOption | undefined
  searchKeyword: string | undefined
}
