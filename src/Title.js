import React from 'react'

export default function Title(props) {
  return (
    <div>
        <h1 style={{backgroundColor:'orange',borderBottom:'5px solid red', textAlign:'center'}}>
          {props.mainTitle}
        </h1>

    </div>
  )
}
