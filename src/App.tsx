import React from 'react'
import { HashRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import Money from 'views/Money'
import Tags from 'views/Tags'
import Statistics from 'views/Statistics'
import NoMatch from 'views/NoMatch'
import { Tag } from 'views/Tag'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/tags" exact>
          <Tags />
        </Route>
        <Route path="/tags/:tag">
          <Tag />
        </Route>
        <Route path="/money" exact>
          <Money />
        </Route>
        <Route path="/statistics" exact>
          <Statistics />
        </Route>
        <Redirect from="/" to="/money" exact></Redirect>
        <Route path="*">
          <NoMatch />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
