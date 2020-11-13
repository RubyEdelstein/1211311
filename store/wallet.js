export const state = () => ({
    wallet: ''
})

export const mutations = {
    connectMetaMask (state, payload) {
        state.wallet = payload
    }
}

export const getters = {
    getAccount(state) {
      return state.wallet
    }
  }