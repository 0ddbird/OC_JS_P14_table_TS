import React from 'react'

interface IEntryCountProps {
  range: number
  rangeStart: number
  totalItems: number
}

const EntryCount = ({ range, rangeStart, totalItems }: IEntryCountProps): JSX.Element => <div className='table-count'>Showing {`${rangeStart + 1}`} to { range < totalItems ? `${rangeStart + range}` : `${totalItems}`} of {`${totalItems}`} entries</div>

export default EntryCount
