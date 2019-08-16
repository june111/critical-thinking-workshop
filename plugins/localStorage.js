import createPersistedState from 'vuex-persistedstate'

export default ({ store }) => {
  createPersistedState({
    key: 'bworkshop.junezhu.top',
    paths: ['system.dismissedPrompts']
  })(store)
}
