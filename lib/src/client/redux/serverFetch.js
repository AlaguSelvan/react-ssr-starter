import * as Actions from './actions'

export async function serverFetch(store) {
  await store.dispatch(Actions.getCorgi())
}
