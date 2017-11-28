import React from "react"
import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom"

import Home from "./home"

export default () => (
  <div className="text-xl m-3 border border-solid">
    <Router>
      <div>
        <nav className="list-reset flex justify-around w-1/3 border border-solid p-2">
          <Link to="/">Home</Link>
        </nav>
        <Route
          exact
          path="/"
          render={() => <Home title="Home Page" />}
        />
      </div>
    </Router>
  </div>
)
