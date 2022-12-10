import React from 'react'

const Exhibit = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>
      <h3>{props.children}</h3>
    </div>
  )
}

export default Exhibit
