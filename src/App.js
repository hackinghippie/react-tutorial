import React from "react"
import Header from "./components/Header"
import Body from "./components/Body"
import {HashRouter as Router, Route, Switch} from "react-router-dom"

function App () {

  return (
    <div>
      <div>
        <Header />
      </div>
      <div id="main-container">
      <Router basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route exact path="/" component={Body} />
          <Route path="/page/:id" component={Body} />
        </Switch>
      </Router>
      </div>
    </div>
  )

}

export default App;