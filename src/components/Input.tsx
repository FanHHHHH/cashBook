import { InputHTMLAttributes } from 'react'
import styled from 'styled-components'

const Label = styled.label`
  display: flex;
  align-items: center;
  > span {
    white-space: nowrap;
    margin-right: 16px;
  }
  > input {
    width: 100%;
    line-height: 44px;
    border: none;
    background: none;
  }
`
interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label: string
}

const Input: React.FC<Props> = (props) => {
  const { label, children, ...rest } = props
  return (
    <Label>
      <span>{label}</span>
      <input {...rest} />
    </Label>
  )
}

export { Input }
