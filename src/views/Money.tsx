import styled from 'styled-components'
import Layout from '../components/Layout'
import { TagsSection } from 'Money/TagsSection'
import { NotesSection } from 'Money/NotesSection'
import { CategorySection } from 'Money/CategorySection'
import { NumberPadSection } from 'Money/NumberPadSection'
import { useState } from 'react'

const MyLayout = styled(Layout)`
  display: flex;
  flex-direction: column;
`
function Money() {
  const [selected, setSelected] = useState({
    tags: [] as string[],
    notes: '',
    category: '收入',
    number: '0',
  })
  type Obj = typeof selected
  const onChange = (obj: Partial<Obj>) => {
    setSelected({ ...selected, ...obj })
  }

  return (
    <MyLayout className="main">
      <TagsSection value={selected.tags} onChange={(tags) => onChange({ tags })}></TagsSection>
      <NotesSection value={selected.notes} onChange={(notes) => onChange({ notes })}></NotesSection>
      <CategorySection value={selected.category} onChange={(category) => onChange({ category })}></CategorySection>
      <NumberPadSection
        value={selected.number}
        onChange={(number) => onChange({ number })}
        onOk={() => {
          console.log('调用OK函数')
        }}
      ></NumberPadSection>
    </MyLayout>
  )
}
export default Money
