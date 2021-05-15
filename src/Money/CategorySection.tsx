import styled from 'styled-components'
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
export { CategorySection }
