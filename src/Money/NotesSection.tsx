import styled from 'styled-components'
const NotesSection = styled.section`
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

export { NotesSection }
