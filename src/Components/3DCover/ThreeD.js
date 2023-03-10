import React from 'react'
import "./ThreeD.css"
function ThreeD(props) {
  return (
    <>
      <a
        class="threeD-book-container"
        href={props.info}
        target="_blank"
        rel="noreferrer noopener"
      >
        <div class="threeD-book">
          <img
            alt="The Outstanding Developer by Sebastien Castiel"
            src={props.image}
          />
        </div>
      </a>

    </>
  )
}

export default ThreeD