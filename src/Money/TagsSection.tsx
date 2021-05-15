import styled from 'styled-components'
const TagsSection = styled.section`
  background: #fff;
  padding: 12px 16px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  ol {
    display: flex;
    flex-wrap: wrap;
    > li {
      margin: 0 12px;
      padding: 3px 17.5px;
      background: #d9d9d9;
      border-radius: 18px;
    }
    > li:first-child {
      margin-left: 0;
    }
  }
  > button {
    border: none;
    border-bottom: 1px solid #999;
    background: #fff;
    color: #999;
    margin-top: 16px;
    padding: 2px 4px;
  }
`
export { TagsSection }
