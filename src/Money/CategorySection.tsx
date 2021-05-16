import { useState } from 'react'
import styled from 'styled-components'
const Wrapper = styled.section`
  > ul {
    display: flex;
    > li {
      background: #c4c4c4;
      font-size: 20px;
      width: 100%;
      text-align: center;
      padding: 20px 0;
      position: relative;
      &.selected::after {
        content: '';
        display: block;
        height: 4px;
        width: 100%;
        background: #000;
        position: absolute;
        left: 0;
        bottom: -4px;
      }
    }
  }
`
type Props = {
  value: string
  onChange: (cate: string) => void
}
const CategorySection: React.FC<Props> = (props) => {
  const [category, setCategory] = useState<string[]>(['收入', '支出'])
  const selectedCategory = props.value
  return (
    <Wrapper>
      <ul>
        {category.map((cate) => (
          <li
            key={cate}
            className={selectedCategory === cate ? 'selected' : ''}
            onClick={() => {
              props.onChange(cate)
            }}
          >
            {cate}
          </li>
        ))}
      </ul>
    </Wrapper>
  )
}
export { CategorySection }
