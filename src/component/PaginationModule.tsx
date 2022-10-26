import React from 'react'
import Select, { IOption } from 'react-ts-controlled-select/Select'

interface IPaginationModuleProps {
  rangeOptions: IOption[]
  range: IOption
  setRange: React.Dispatch<React.SetStateAction<IOption>>
  cssPrefix: string | undefined
}

const PaginationModule = ({ rangeOptions, range, setRange, cssPrefix }: IPaginationModuleProps): JSX.Element => {
  return (
    <div className={`${cssPrefix ?? ''}table-length`}>
        Show <Select options={rangeOptions} selected={range} setSelected={setRange}/> entries
    </div>
  )
}

export default PaginationModule
