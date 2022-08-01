import React from 'react'
import { useState } from 'react'
import './index.css'

export default function TodoGenerator(props) {
    const [value, setValue] = useState('')
    const {addTodo} = props;
    const submitValue = () => { 
        addTodo(value)
        setValue('');
     }
  return (
    <div className='generator'>
        <input className='generator__text' type="text" value={value} onChange={(e) => setValue(e.target.value)}/>
        <input className='generator__btn' type="button" value="add" onClick={submitValue}/>
    </div>
  )
}
