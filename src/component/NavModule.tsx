import React from 'react'
import { ITableItems } from './interfaces'

interface INavModuleProps {
  items: ITableItems
  range: number
  rangeStart: number
  setRangeStart: React.Dispatch<React.SetStateAction<number>>
  cssPrefix: string | undefined
}

const NavModule = ({ items, range, rangeStart, setRangeStart, cssPrefix }: INavModuleProps): JSX.Element => {
  function handleClick (direction: string): void {
    if (direction === 'next') setRangeStart(rangeStart + range)
    else setRangeStart(rangeStart - range)
  }

  return (
    <div>
      { rangeStart > 0 && <button className={`${cssPrefix ?? ''}table-nav-button previous`} onClick={() => handleClick('previous')}>Previous</button>}
      <span>{rangeStart / range + 1}</span>
      { rangeStart + range < items.size && <button className={`${cssPrefix ?? ''}table-nav-button next`} onClick={() => handleClick('next')}>Next</button>}
    </div>
  )
}

export default NavModule
