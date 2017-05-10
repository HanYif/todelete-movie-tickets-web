import types from './types'

export default {
  [types.GET_ARTICLES] (state, payload) {
    console.log('payload.data', payload.data)
    state.articles = payload.data
  },
  [types.GET_ARTICLE] (state, payload) {
    state.article = payload.data
  }
}
