import styled from 'styled-components'
import Layout from '../components/Layout'

const TagsSection = styled.section`
  background: #fff;
  padding: 12px 16px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  ol {
    display: flex;
    flex-wrap: wrap;
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
const NumberPadSection = styled.section`
  display: flex;
  flex-direction: column;
  > .output {
    background: #fff;
    padding: 0 16px;
    line-height: 72px;
    text-align: right;
    font-size: 36px;
    box-shadow: inset 0 -5px 5px -5px rgba(0, 0, 0, 0.25), inset 0 5px 5px -5px rgba(0, 0, 0, 0.25);
  }
  > .pad {
    > button {
      float: left;
      width: 25%;
      font-size: 18px;
      border: none;
      height: 64px;
      &.ok {
        float: right;
        height: 128px;
      }
      &.zero {
        width: 50%;
      }
      &:nth-child(1) {
        background: #f2f2f2;
      }
      &:nth-child(2),
      :nth-child(5) {
        background: #e0e0e0;
      }
      &:nth-child(3),
      :nth-child(6),
      :nth-child(9) {
        background: #d3d3d3;
      }
      &:nth-child(4),
      :nth-child(7),
      :nth-child(10) {
        background: #c1c1c1;
      }
      &:nth-child(8),
      :nth-child(11),
      :nth-child(13) {
        background: #b8b8b8;
      }
      &:nth-child(12) {
        background: #9a9a9a;
      }
      &:nth-child(14) {
        background: #a9a9a9;
      }
    }
  }
`

const MyLayout = styled(Layout)`
  display: flex;
  flex-direction: column;
`

function Money() {
  return (
    <MyLayout className="main">
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
        <div className="output">100</div>
        <div className="pad clearfix">
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>删除</button>

          <button>4</button>
          <button>5</button>
          <button>6</button>
          <button>清空</button>
          <button>7</button>
          <button>8</button>
          <button>9</button>
          <button className="ok">OK</button>
          <button className="zero">0</button>
          <button>.</button>
        </div>
      </NumberPadSection>
    </MyLayout>
  )
}
export default Money
