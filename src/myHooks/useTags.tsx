import { Id } from 'lib/Id'
import { useEffect, useRef, useState } from 'react'
import { useUpdate } from './useUpdate'

interface tagObj {
  id: number
  name: string
}

const useTags = () => {
  const [tags, setTags] = useState<tagObj[]>([])

  useEffect(() => {
    const localTags = JSON.parse(window.localStorage.getItem('tags') || '[]')
    if (localTags.length === 0) {
      setTags([
        { id: new Id().value, name: '衣' },
        { id: new Id().value, name: '食' },
        { id: new Id().value, name: '住' },
        { id: new Id().value, name: '行' },
      ])
    } else {
      setTags(localTags)
    }
  }, [])

  useUpdate(() => {
    window.localStorage.setItem('tags', JSON.stringify(tags))
  }, [tags])

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

  const addTag = () => {
    const tagName = window.prompt('请输入增加的标签名：')
    const isSpace = (tagName: string) => {
      const reg = /\s+/g
      let res = tagName.replace(reg, '')
      return res === ''
    }
    if (tagName !== null && !isSpace(tagName)) {
      setTags([...tags, { id: new Id().value, name: tagName }])
    }
  }

  return { tags, setTags, findTag, updateTag, deleteTag, addTag }
}
export { useTags }
