import React, { useState } from 'react'

export default function Hooks(props) {
  const [ value, setValue ] = useState(0)

  return (
    <div>
      <div onClick={setValue(value + 1)}>
        {value}
      </div>
    </div>
  )
}
