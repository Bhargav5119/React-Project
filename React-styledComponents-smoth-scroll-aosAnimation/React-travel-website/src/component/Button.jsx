import React from 'react'
import styled from 'styled-components'

const Btn = styled.button`
    padding: 1rem 2rem;
    background-color: var(--primary-color);
    border: none;
    font-size: 1.5rem;
    color: #fff;
    cursor: pointer;
    outline: none;
    border-radius: 0.5rem;
    transition: all 0.5s;
    &:hover{
        opacity: 0.8;
    }
`

const Button = ({text}) => {
  return (
    <Btn>
        {text}
    </Btn>
  )
}

export default Button