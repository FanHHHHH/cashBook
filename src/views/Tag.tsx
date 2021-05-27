import { useTags } from 'myHooks/useTags'
import { useParams } from 'react-router'

interface Params {
  id: string
}
const Tag: React.FC = (props) => {
  const { id } = useParams<Params>()
  const { findTag } = useTags()

  return <div>{findTag(parseInt(id, 10)).name}</div>
}
export { Tag }
