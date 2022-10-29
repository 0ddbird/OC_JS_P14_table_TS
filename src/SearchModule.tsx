import React from 'react'

interface ISearchModuleProps {
  setSearchKeyword: React.Dispatch<React.SetStateAction<string>>
  cssPrefix: string | undefined
}

const SearchModule = ({ setSearchKeyword, cssPrefix }: ISearchModuleProps): JSX.Element => {
  return <div className={`${cssPrefix ?? ''}table-search`}><input type="text" onChange={(e) => setSearchKeyword(e.target.value)}></input></div>
}

export default SearchModule
