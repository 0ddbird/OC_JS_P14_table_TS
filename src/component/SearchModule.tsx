import React from 'react'

interface ISearchModuleProps {
  setSearchKeyword: React.Dispatch<React.SetStateAction<string | undefined>>
  cssPrefix: string | undefined
}

const SearchModule = ({ setSearchKeyword, cssPrefix }: ISearchModuleProps): JSX.Element => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setSearchKeyword(e.target.value)
  }
  return <div className={`${cssPrefix ?? ''}table-search`}><input type="text" onChange={handleInputChange}></input></div>
}

export default SearchModule
