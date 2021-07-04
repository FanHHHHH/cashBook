import Icon from 'components/icon'
import { useTags } from 'myHooks/useTags'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Layout from '../components/Layout'
import { Button } from 'components/Button'
import { Center } from 'components/Center'

const TagList = styled.ul`
  background: #fff;
  font-size: 16px;
  display: flex;
  flex-direction: column;
  > a {
    margin-left: 15px;
    padding: 12px 12px 12px 0;
    border-bottom: 1px solid #d5d5d9;
    box-shadow: inset 0px -0.5px 0px #bcbbc1;
    > li {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }
`

function Tags() {
  const { tags, addTag } = useTags()

  return (
    <Layout>
      <TagList>
        {tags.map((tag) => (
          <Link key={tag.id} to={'/tags/' + tag.id}>
            <li>
              <span className="outline">{tag.name}</span>
              <Icon name="right" />
            </li>
          </Link>
        ))}
      </TagList>
      <Center>
        <Button onClick={addTag}>新建标签</Button>
      </Center>
    </Layout>
  )
}
export default Tags
