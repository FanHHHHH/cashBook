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
  const findTagIdx = (id: number) => {
    for (let i = 0; i < tags.length; i++) {
      if (tags[i].id === id) {
        return i
      }
    }
    return -1
  }
  const updateTag = (id: number, name: string) => {
    const idx = findTagIdx(id)
    const tagsClone = JSON.parse(JSON.stringify(tags))
    tagsClone.splice(idx, 1, { id, name })
    setTags(tagsClone)
  }

  const deleteTag = (id: number) => {
    const idx = findTagIdx(id)
    const tagsClone = JSON.parse(JSON.stringify(tags))
    tagsClone.splice(idx, 1)
    setTags(tagsClone)
  }

  return { tags, setTags, findTag, updateTag, deleteTag }
}
export { useTags }
