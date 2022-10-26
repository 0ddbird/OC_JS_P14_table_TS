import React from 'react'
import PropTypes from 'prop-types'
// Assets
import CaretUp from '../assets/caretUp.svg'
import CaretDown from '../assets/caretDown.svg'
import { ISortOption } from './interfaces'

interface ITableHeadingProps {
  category: {
    name: string
    value: string
  }
  setSortOption: React.Dispatch<React.SetStateAction<ISortOption | undefined>>
  cssPrefix: string | undefined
}

const TableHeading = ({ category, setSortOption, cssPrefix }: ITableHeadingProps): JSX.Element => {
  function handleSortBtnClick (sortDirection: 'asc' | 'desc'): void {
    const value = category.value
    setSortOption({ category: value, sortDirection })
  }
  return (
    <div className={`${cssPrefix ?? ''}table-header-cell`}>
      <div>{category.name}</div>
      <div className='sort-buttons'>
        <button className='sort-button asc' onClick={() => handleSortBtnClick('asc')}><img className='caret' src={CaretUp} alt='up'/></button>
        <button className='sort-button desc' onClick={() => handleSortBtnClick('desc')}><img className='caret' src={CaretDown} alt='down'/></button>
      </div>
    </div>
  )
}

TableHeading.propTypes = {
  category: PropTypes.object,
  setSortOption: PropTypes.func
}

export default TableHeading
