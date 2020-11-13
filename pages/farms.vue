<template>
  <div v-if="connected" class="container">
        <farms-header />
        <div class="farms">
            <farm 
            v-bind:key="farm.title"
            v-for="farm in farms" 
            v-bind:title="farm.title"
            v-bind:img="farm.img"
            v-bind:description="farm.description"
            v-bind:url="farm.url"
            />
        </div>
  </div>
   <div v-else class="container">
        <connect-wallet  />
  </div>
</template>

<script>
import Farm from '../components/farms/Farm.vue'
import FarmsHeader from '../components/farms/FarmsHeader.vue'
import farms from '../assets/data/farms_list'
import ConnectWallet from '../components/connect/ConnectWallet.vue'

export default {
    components: {
        FarmsHeader,
        Farm,
        ConnectWallet
    },
    created() {
        if(this.account) this.connected = true
    },
    data() {
        return {
            farms,
            connected: false
        }
    },
    computed: {
        account() {
        return this.$store.state.wallet.wallet
        }
    },
    watch: {
    async account (newAccount, oldAccount) {
        console.log(newAccount, oldAccount)
      if(newAccount && newAccount !== oldAccount) {
        this.connected = true
      }
    }
  },
}
</script>

<style scoped>
    .farms {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: -16px;
        max-width: 900px;
        width: 100%;
        flex-wrap: wrap;
    }
</style>