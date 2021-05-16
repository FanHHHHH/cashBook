import { useRef, useState } from 'react'
import styled from 'styled-components'
const Wrapper = styled.section`
  padding: 0 16px;
  > label {
    display: flex;
    align-items: center;
    > span {
      white-space: nowrap;
      margin-right: 16px;
    }
    > input {
      width: 100%;
      line-height: 72px;
      border: 0;
      background: #e5e5e5;
    }
  }
`

const NotesSection: React.FC = () => {
  const [notes, setNotes] = useState<string>('')
  const refInput = useRef<HTMLInputElement>(null)

  const onBlur = () => {
    refInput.current && setNotes(refInput.current.value)
  }
  return (
    <Wrapper>
      <label>
        <span>备注</span>
        <input type="text" ref={refInput} placeholder="请在这里输入备注" defaultValue={notes} onBlur={onBlur} />
      </label>
    </Wrapper>
  )
}

export { NotesSection }
