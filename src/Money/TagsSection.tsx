import { Id } from 'lib/Id'
import { useTags } from 'myHooks/useTags'
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
type Props = {
  value: string[]
  onChange: (tags: string[]) => void
}
const TagsSection: React.FC<Props> = (props) => {
  const { tags, addTag } = useTags()
  const selectedTags = props.value

  const toggleTag = (tag: string) => {
    const idx = selectedTags.indexOf(tag)
    if (idx >= 0) {
      // 返选： 将其他选中的作为新的selectedTags
      props.onChange(selectedTags.filter((selectedTag) => selectedTag !== tag))
    } else {
      props.onChange([...selectedTags, tag])
    }
  }
  return (
    <Wrapper>
      <ol>
        {tags &&
          tags.map((tag) => (
            <li key={tag.id} onClick={() => toggleTag(tag.name)} className={selectedTags.indexOf(tag.name) >= 0 ? 'selected' : ''}>
              {tag.name}
            </li>
          ))}
      </ol>
      <button onClick={addTag}>新增标签</button>
    </Wrapper>
  )
}
export { TagsSection }
