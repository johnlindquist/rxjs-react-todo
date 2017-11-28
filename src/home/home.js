import React from "react"

export default ({ title, message, changeMessage }) => (
  <div>
    <h1>{title}</h1>
    <div>{message}</div>
    <button
      className="btn btn-blue"
      onClick={changeMessage}
    >
      Change Message
    </button>
  </div>
)
