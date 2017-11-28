import {
  mapPropsStream,
  createEventHandler
} from "recompose"
import * as R from "ramda"

const {
  handler: setState,
  stream: setState$
} = createEventHandler()

const changeMessage = () =>
  setState({ message: "Changed!" })

const state$ = setState$.startWith({
  message: "Hello world",
  changeMessage
})

export default mapPropsStream(props$ =>
  props$.combineLatest(state$, R.merge)
)
