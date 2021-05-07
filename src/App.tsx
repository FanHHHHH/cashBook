import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import styled from 'styled-components'

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`

const Nav = styled.nav`
  border: 1px solid blue;
  > ul {
    display: flex;
    > li {
      width: 33.33333%;
      text-align: center;
      padding: 16px 0;
    }
  }
`
const Main = styled.div`
  flex-grow: 1;
  overflow: auto;
`
const App = () => {
  return (
    <Router>
      <Wrapper>
        <Main>
          <Switch>
            <Route exact path="/">
              <Money />
            </Route>
            <Route path="/tags">
              <Tags />
            </Route>
            <Route path="/money">
              <Money />
            </Route>
            <Route path="/statistics">
              <Statistics />
            </Route>
            <Route path="*">
              <NoMatch />
            </Route>
          </Switch>
        </Main>

        <Nav>
          <ul>
            <li>
              <Link to="/tags">标签</Link>
            </li>
            <li>
              <Link to="/money">记一笔</Link>
            </li>
            <li>
              <Link to="/statistics">统计</Link>
            </li>
          </ul>
        </Nav>
      </Wrapper>
    </Router>
  )
}

function Tags() {
  return <h2>标签页</h2>
}

function Money() {
  return <h2>记账页</h2>
}

function Statistics() {
  return <h2>统计页</h2>
}
function NoMatch() {
  return <h2>未找到页面</h2>
}

export default App