import { useState } from 'react'
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
  const onNotesChange = (note: string) => {
    setNotes(note)
  }
  return (
    <Wrapper>
      <label>
        <span>备注</span>
        <input type="text" placeholder="请在这里输入备注" value={notes} onChange={(e) => onNotesChange(e.target.value)} />
      </label>
    </Wrapper>
  )
}

export { NotesSection }
