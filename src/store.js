import { createEventHandler } from "recompose"
import * as L from "partial.lenses"

const {
  handler: dispatch,
  stream: dispatch$
} = createEventHandler()

const updateStoreMessage = () =>
  dispatch(L.set("storeMessage", "Updated!"))

const store$ = dispatch$
  .startWith({
    updateStoreMessage,
    storeMessage: "This is a message from the store"
  })
  .scan((state, fn) => fn(state))
  .shareReplay(1)

export { store$ }
