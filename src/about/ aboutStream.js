import { mapPropsStream } from "recompose"
import { store$ } from "../store"
import * as R from "ramda"

export default mapPropsStream(props$ =>
  props$.combineLatest(
    store$.map(store => ({ message: store.storeMessage })),
    R.merge
  )
)
