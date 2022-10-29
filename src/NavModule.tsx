import React from 'react'
import { ITableItem } from './interfaces'

interface INavModuleProps {
  items: ITableItem[]
  range: number
  rangeStart: number
  setRangeStart: React.Dispatch<React.SetStateAction<number>>
  cssPrefix: string | undefined
}

const NavModule = ({ items, range, rangeStart, setRangeStart, cssPrefix }: INavModuleProps): JSX.Element => {
  const handleClick = (direction?: string): void => direction === 'next' ? setRangeStart(rangeStart + range) : setRangeStart(rangeStart - range)
  const moreTotalItems = rangeStart + range < items.length

  return (
    <div>
      { rangeStart > 0 && <button className={`${cssPrefix ?? ''}table-nav-button previous`} onClick={() => handleClick()}>Previous</button>}
      <span>{rangeStart / range + 1}</span>
      { moreTotalItems && <button className={`${cssPrefix ?? ''}table-nav-button next`} onClick={() => handleClick('next')}>Next</button>}
    </div>
  )
}

export default NavModule
