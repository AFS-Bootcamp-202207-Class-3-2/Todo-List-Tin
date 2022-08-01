import React from 'react'
import { useState } from 'react'

export default function TodoGenerator(props) {
    const [value, setValue] = useState('')
    const {addTodo} = props;
    const submitValue = () => { 
        addTodo(value)
     }
  return (
    <div>
        <input type="text" value={value} onChange={(e) => setValue(e.target.value)}/>
        <input type="button" value="add" onClick={submitValue}/>
    </div>
  )
}
