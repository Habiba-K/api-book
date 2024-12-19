import React from 'react'

const DynamicBook = (props:any) => {
    console.log(props)
  return (
    <div>
      <h1 className='text-7xl'>{props.params.id}</h1>
    </div>
  )
}

export default DynamicBook
