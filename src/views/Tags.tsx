import Icon from 'components/icon'
import { useTags } from 'myHooks/useTags'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Layout from '../components/Layout'

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
const Button = styled.button`
  border: none;
  font-size: 16px;
  background: #f68;
  border-radius: 4px;
  padding: 10px 16px;
  color: #fff;
`

const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 44px;
`
function Tags() {
  const { tags, setTags } = useTags()
  return (
    <Layout>
      <TagList>
        {tags.map((tag) => (
          <Link to={'/tags/' + tag}>
            <li key={tag}>
              <span className="outline">{tag}</span>
              <Icon name="right" />
            </li>
          </Link>
        ))}
      </TagList>
      <Center>
        <Button>新建标签</Button>
      </Center>
    </Layout>
  )
}
export default Tags
