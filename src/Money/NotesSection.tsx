import { Input } from 'components/Input'
import React, { ChangeEventHandler, useRef, useState } from 'react'
import styled from 'styled-components'
const Wrapper = styled.section`
  padding: 14px 16px;
`
type Props = {
  value: string
  onChange: (notes: string) => void
}
const NotesSection: React.FC<Props> = (props) => {
  const note = props.value
  const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    props.onChange(e.target.value)
  }
  return (
    <Wrapper>
      <Input label="备注" placeholder="在这里添加备注" value={note} onChange={onChange}></Input>
    </Wrapper>
  )
}

export { NotesSection }
