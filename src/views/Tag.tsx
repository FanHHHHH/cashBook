import { Button } from 'components/Button'
import { Center } from 'components/Center'
import Icon from 'components/icon'
import { Input } from 'components/Input'
import Layout from 'components/Layout'
import { useTags } from 'myHooks/useTags'
import { useParams } from 'react-router'
import styled from 'styled-components'

const Header = styled.header`
  font-size: 16px;
  display: flex;
  justify-content: space-between;
  padding: 14px 16px;
  background: #fff;
`

const InputWrapper = styled.div`
  background: #fff;
  padding: 0 16px;
  margin-top: 8px;
`

interface Params {
  id: string
}
const Tag: React.FC = (props) => {
  const { id } = useParams<Params>()
  const { findTag } = useTags()

  return (
    <Layout>
      <Header>
        <Icon name="left"></Icon>
        <span>编辑标签</span>
        <Icon />
      </Header>
      <InputWrapper>
        <Input label="标签名" type="text" placeholder="请输入标签名" />
      </InputWrapper>
      <Center>
        <Button>删除标签</Button>
      </Center>
    </Layout>
  )
}
export { Tag }
