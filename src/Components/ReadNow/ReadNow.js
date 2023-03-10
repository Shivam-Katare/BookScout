import React from 'react'
import "./ReadNow.css"
function ReadNow(props) {
  return (
    <button className='know-more'>
      <a href={props.info} target="_blank" className='book-link'>
        <b>Read Now!</b>
      </a>
    </button>
  )
}

export default ReadNow