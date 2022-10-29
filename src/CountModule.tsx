import React from 'react'

interface ICountModuleProps {
  range: number
  rangeStart: number
  totalItemsLength: number
  matchingItemsLength: number
  cssPrefix: string | undefined
}

const CountModule = ({ range, rangeStart, totalItemsLength, matchingItemsLength, cssPrefix }: ICountModuleProps): JSX.Element => {
  const firstDisplayedElement = `${rangeStart + 1}`
  const lastDisplayedElement = range < matchingItemsLength ? `${rangeStart + range}` : `${matchingItemsLength}`
  const lastTableElement = `${totalItemsLength}`
  return <div className={`${cssPrefix ?? ''}table-count`}>Showing {firstDisplayedElement} to {lastDisplayedElement} of {lastTableElement} entries</div>
}

export default CountModule
