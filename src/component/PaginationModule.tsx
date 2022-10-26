import React from 'react'
import Select, { IOption } from 'react-ts-controlled-select/Select'

interface IPaginationModuleProps {
  rangeOptions: IOption[]
  range: IOption
  setRange: React.Dispatch<React.SetStateAction<IOption>>
}

const PaginationModule = ({ rangeOptions, range, setRange }: IPaginationModuleProps): JSX.Element => {
  return (
    <div className='table-length'>
        Show <Select options={rangeOptions} selected={range} setSelected={setRange}/> entries
    </div>
  )
}

export default PaginationModule
