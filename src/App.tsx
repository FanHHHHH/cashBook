import React from 'react'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import Money from 'views/Money'
import Tags from 'views/Tags'
import Statistics from 'views/Statistics'
import NoMatch from 'views/NoMatch'

const App = () => {
  return (
    <Router>
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
    </Router>
  )
}

export default App
