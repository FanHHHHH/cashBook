import { Id } from 'lib/Id'
import { useState } from 'react'

const defaultTags = [
  { id: new Id().value, name: '衣' },
  { id: new Id().value, name: '食' },
  { id: new Id().value, name: '住' },
  { id: new Id().value, name: '行' },
]

interface tagObj {
  id: number
  name: string
}
const useTags = () => {
  const [tags, setTags] = useState<tagObj[]>(defaultTags)
  const findTag = (id: number) => {
    return tags.filter((tag) => tag.id === id)[0]
  }

  return { tags, setTags, findTag }
}
export { useTags }
