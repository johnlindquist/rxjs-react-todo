import React from "react"
import { render } from "react-dom"
import { setObservableConfig } from "recompose"
import rxjsConfig from "recompose/rxjsObservableConfig"
setObservableConfig(rxjsConfig)

import Home from "./home"

render(<Home />, document.getElementById("root"))
