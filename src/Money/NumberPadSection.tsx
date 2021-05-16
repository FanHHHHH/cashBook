import React, { useState } from 'react'
import styled from 'styled-components'

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  > .output {
    display: flex;
    justify-content: flex-end;
    overflow: auto;
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

const NumberPadSection: React.FC = () => {
  const [number, _setNumber] = useState<string>('0')
  const setNumber = (num: string) => {
    if (number.length === 16) {
      return
    }
    _setNumber(num)
  }
  const onClick = (e: React.MouseEvent) => {
    const num = (e.target as HTMLButtonElement).textContent
    if (num === null) {
      return
    }
    if (num === '0' || num === '1' || num === '2' || num === '3' || num === '4' || num === '5' || num === '6' || num === '7' || num === '8' || num === '9') {
      if (number === '0') {
        setNumber(num)
      } else {
        setNumber(number + num)
      }
    } else if (num === '.') {
      const n = number.indexOf('.')
      if (n >= 0) {
        return
      }
      setNumber(number + '.')
    } else if (num === '删除') {
      if (number.length === 1) {
        setNumber('0')
      } else {
        _setNumber(number.slice(0, number.length - 1))
      }
    } else if (num === '清空') {
      setNumber('0')
    } else {
      console.log(number)
    }
  }
  return (
    <Wrapper>
      <div className="output">{number}</div>
      <div className="pad clearfix" onClick={onClick}>
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
    </Wrapper>
  )
}
export { NumberPadSection }
