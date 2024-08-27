import React from 'react'

const Button = ({onClick,label}) => {
  return (
    <Button onClick={onClick}>
        {label}
    </Button>
  )
}

export default Button