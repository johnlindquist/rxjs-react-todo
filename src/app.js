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
        <ul className="list-reset flex justify-around w-1/3 border border-solid p-2">
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
        <Route exact path="/" component={Home} />
      </div>
    </Router>
  </div>
)
