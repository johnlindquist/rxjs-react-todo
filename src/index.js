import "tailwindcss/dist/tailwind.css"
import React from "react"
import { render } from "react-dom"
import { setObservableConfig } from "recompose"
import rxjsConfig from "recompose/rxjsObservableConfig"
import App from "./app"
setObservableConfig(rxjsConfig)

render(<App />, document.getElementById("root"))
