import React from 'react'

interface ITableSearchProps {
  setSearchKeyword: React.Dispatch<React.SetStateAction<string | undefined>>
}

const TableSearch = ({ setSearchKeyword }: ITableSearchProps): JSX.Element => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setSearchKeyword(e.target.value)
  }
  return <div className='table-search'><input type="text" onChange={handleInputChange}></input></div>
}

export default TableSearch
