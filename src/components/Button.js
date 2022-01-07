import React from 'react'

const Button = ({text, bgColor, onClick}) => {
    return (
        <button style = {{backgroundColor: bgColor}}
        className='btn' onClick={onClick}>
            {text}
        </button>
    )
}

export default Button
