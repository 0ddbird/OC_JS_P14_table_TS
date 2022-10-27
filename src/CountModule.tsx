import React from 'react'

interface ICountModuleProps {
  range: number
  rangeStart: number
  totalItems: number
  cssPrefix: string | undefined
}

const CountModule = ({ range, rangeStart, totalItems, cssPrefix }: ICountModuleProps): JSX.Element => {
  return <div className={`${cssPrefix ?? ''}table-count`}>Showing {`${rangeStart + 1}`} to { range < totalItems ? `${rangeStart + range}` : `${totalItems}`} of {`${totalItems}`} entries</div>
}

export default CountModule
