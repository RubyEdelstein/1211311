<template>
   <div class="member_container">
        <button @click="connectWallet" class="button navbar_margin connect_nav">CONNECT WALLET</button>
   </div>
</template>

<script>
export default {
  methods: {
     async connectWallet() {
        const { ethereum } = window
        if (ethereum) {
           try {
             const web3 = new Web3(ethereum)
             const selectedAccount = await ethereum.enable()
             if (!selectedAccount) {
               // User didn't give permission for dapp to access wallet
             } else {
               // User allowed access
               this.$store.commit('wallet/connectMetaMask', selectedAccount[0])
             }
           } catch (error) {
             // whoopsie!
           }
        }
     }
  }
}
</script>

<style>
.connect_nav {
}
</style>
