<template>
       <button 
       @click="connectWallet"
       class="button connect"
       >CONNECT WALLET</button>
</template>

<script>
import NavbarGuest from '../navbar/NavbarGuest.vue'
export default {
    components: {
        NavbarGuest
    },
    methods: {
     async connectWallet() {
        const { ethereum } = window
        console.log(ethereum)
        if (ethereum) {
           try {
             const web3 = new Web3(ethereum)
             const selectedAccount = await ethereum.enable()
             if (!selectedAccount) {
             } else {
               this.$store.commit('wallet/connectMetaMask', selectedAccount[0])
             }
           } catch (error) {
           }
        }
     }
  }
}
</script>

<style scoped>
    .connect {
        font-size: 16px;
        height: 42px;
        margin: auto;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

</style>