import { useState } from 'react'
import styled from 'styled-components'

const Wrapper = styled.section`
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
      margin-right: 24px;
      margin-top: 10px;
      padding: 3px 17.5px;
      background: #d9d9d9;
      border-radius: 18px;
      &.selected {
        background: #f68;
      }
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

const TagsSection: React.FC = (props) => {
  const [tags, setTags] = useState<string[]>(['衣', '食', '住', '行'])
  const [selectedTags, setSelectedTags] = useState<string[]>([])

  const addTag = () => {
    const tagName = window.prompt('请输入增加的标签名：')
    if (tagName !== null) {
      setTags([...tags, tagName])
    }
  }

  const toggleTag = (tag: string) => {
    const idx = selectedTags.indexOf(tag)
    if (idx >= 0) {
      // 返选： 将其他选中的作为新的selectedTags
      setSelectedTags(selectedTags.filter((selectedTag) => selectedTag !== tag))
    } else {
      setSelectedTags([...selectedTags, tag])
    }
  }
  return (
    <Wrapper>
      <ol>
        {tags &&
          tags.map((tag) => (
            <li key={tag} onClick={() => toggleTag(tag)} className={selectedTags.indexOf(tag) >= 0 ? 'selected' : ''}>
              {tag}
            </li>
          ))}
      </ol>
      <button onClick={addTag}>新增标签</button>
    </Wrapper>
  )
}
export { TagsSection }
