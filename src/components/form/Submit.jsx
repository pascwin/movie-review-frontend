import React from 'react'

export const Submit = ({value}) => {
  return (
    <input type="submit"
    className="w-full rounded dark:bg-white bg-secondary dark:text-secondary text-white hover:bg-opacity-90 transistion font-semibold text-lg cursor-pointer p-1" 
    value={value} />
  )
}
