import React from 'react'

const Button = (props) => {
  return (
    <>
        <Link className={`btn ${props.class}`} to={props.url}>{props.text}</Link>
    </>
  )
}

export default Button