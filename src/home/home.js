import React from "react"
import About from "../about"

export default ({
  title,
  message,
  changeMessage,
  storeMessage,
  updateStoreMessage
}) => (
  <div>
    <h1>{title}</h1>
    <div>{message}</div>
    <button
      className="btn btn-blue"
      onClick={changeMessage}
    >
      Change Message
    </button>
    <div>{storeMessage}</div>
    <button
      className="btn btn-blue"
      onClick={updateStoreMessage}
    >
      Update Store Message
    </button>

    <About />
  </div>
)
