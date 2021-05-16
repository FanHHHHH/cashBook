import styled from 'styled-components'
import Layout from '../components/Layout'
import { TagsSection } from 'Money/TagsSection'
import { NotesSection } from 'Money/NotesSection'
import { CategorySection } from 'Money/CategorySection'
import { NumberPadSection } from 'Money/NumberPadSection'

const MyLayout = styled(Layout)`
  display: flex;
  flex-direction: column;
`

function Money() {
  return (
    <MyLayout className="main">
      <TagsSection></TagsSection>
      <NotesSection></NotesSection>
      <CategorySection></CategorySection>
      <NumberPadSection>
        
      </NumberPadSection>
    </MyLayout>
  )
}
export default Money
