import React from 'react'
import './form-input.styles.scss'
const formInput = ({onChangeHandler,label,...otherInputProps}) => {
  return (
    <div className='group'>
      <input className='form-input' onChange={onChangeHandler} {...otherInputProps}/>
      {
        label ?
          (<label
            className={`${otherInputProps.value.length ? 'shrink' : ''} form-input-label`}>
          {label}
          </label>)
          : null
    }
    </div>
  )
}
export default formInput