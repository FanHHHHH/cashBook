import styled from 'styled-components'
import Layout from '../components/Layout'

const TagsSection = styled.section`
  background: #fff;
  padding: 12px 16px;
  ol {
    display: flex;
    > li {
      margin: 0 12px;
      padding: 3px 17.5px;
      background: #d9d9d9;
      border-radius: 18px;
    }
    > li:first-child {
      margin-left: 0;
    }
  }
  > button {
    border: none;
    border-bottom: 1px solid #999;
    background: #fff;
    color: #999;
    margin-top: 16px;
    padding: 2px 4px;
  }
`
const NotesSection = styled.section`
  padding: 0 16px;
  > label {
    display: flex;
    align-items: center;
    > span {
      white-space: nowrap;
      margin-right: 16px;
    }
    > input {
      width: 100%;
      line-height: 72px;
      border: 0;
      background: #e5e5e5;
    }
  }
`
const CategorySection = styled.section`
  > ul {
    display: flex;
    > li {
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
const NumberPadSection = styled.section``

function Money() {
  return (
    <Layout>
      <TagsSection>
        <ol>
          <li>衣</li>
          <li>食</li>
          <li>住</li>
          <li>行</li>
        </ol>
        <button>新增标签</button>
      </TagsSection>
      <NotesSection>
        <label>
          <span>备注</span>
          <input type="text" placeholder="请在这里输入备注" />
        </label>
      </NotesSection>
      <CategorySection>
        <ul>
          <li className="selected">支出</li>
          <li>收入</li>
        </ul>
      </CategorySection>
      <NumberPadSection>
        <div>100</div>
        <div>
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>+</button>
          <button>删除</button>
          <button>4</button>
          <button>5</button>
          <button>6</button>
          <button>-</button>
          <button>清空</button>
          <button>7</button>
          <button>8</button>
          <button>9</button>
          <button>OK</button>
          <button>0</button>
          <button>.</button>
        </div>
      </NumberPadSection>
    </Layout>
  )
}
export default Money
