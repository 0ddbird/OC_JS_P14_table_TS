import React from 'react'
import { ITableItems } from './interfaces'

interface IPageNavigationProps {
  items: ITableItems
  range: number
  rangeStart: number
  setRangeStart: React.Dispatch<React.SetStateAction<number>>
}

const PageNavigation = ({ items, range, rangeStart, setRangeStart }: IPageNavigationProps): JSX.Element => {
  function handleClick (direction: string): void {
    if (direction === 'next') setRangeStart(rangeStart + range)
    else setRangeStart(rangeStart - range)
  }

  return (
    <div>
      { rangeStart > 0 && <button onClick={() => handleClick('previous')}>Previous</button>}
      <span>{rangeStart / range + 1}</span>
      { rangeStart + range < items.size && <button onClick={() => handleClick('next')}>Next</button>}
    </div>
  )
}

export default PageNavigation
