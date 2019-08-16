export const state = () => ({
  sponsors: []
})
export const getters = {}
export const actions = {
  async nuxtServerInit({ dispatch }, { query }) {
    await dispatch('loadData')
  },
  loadData({ dispatch }) {
    return Promise.all([dispatch('getSponsors')])
  },
  getSponsors({ commit }) {
    return new Promise((resolve, reject) => {
      resolve()
    })
  }
}
export const mutations = {}
