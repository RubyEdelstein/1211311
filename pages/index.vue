<template>
    <div class="container">
      <index-header/>
      <div class="details">
        <index-data-card 
          title="Your EAT Balance"
          v-bind:title_detail="balance"
          title_bottom="Pending claim"
          v-bind:title_bottom_detail="pendingEat"
        />
        <index-data-card 
          title="Total Available EAT Supply"
          v-bind:title_detail="supply"
          title_bottom="New rewards per block"
          title_bottom_detail="0.13 EAT"
        />
      </div>
      <!-- <nuxt-link to="/farms" class="button farms_button">VIEW FARMS</nuxt-link> -->
    </div>

</template>

<script>
import { EM_ADDRESS, ET_ADDRESS, PLATFORM_NAME } from '../assets/keys'
import { mapMutations } from 'vuex'
import IndexHeader from '../components/index/IndexHeader'
import IndexDataCard from '../components/index/IndexDataCard'
import { getContract, weiConverter } from '../assets/services/solidity_helpers'
import EAT from '../assets/contracts/EAT'
import Farm from '../assets/contracts/Farm.json'
import { formatNumber } from '../assets/services/numbers'
import { farmIds } from '../assets/data/farms_data'
import CountdownVue from '../components/general/Countdown.vue'
export default {
  components: {
    IndexHeader,
    IndexDataCard,
    CountdownVue
  },

  data() {
    return {
      balance: "LOCKED",
      supply: "LOCKED",
      pendingEat: ''
    }
  },
  computed: {
    account() {
      return this.$store.state.wallet.wallet
    }
  },
  watch: {
    async account (newAccount, oldAccount) {
      if(newAccount && newAccount !== oldAccount) {
        this.getData(newAccount)
      }
    }
  },
  created() {
    const { account } = this
    if(account) {
        this.getData(account)
    }
  },
  methods: {
    async getData(userAddress) {
        const EMakerContract = await getContract(Farm, EM_ADDRESS)
        const Eathereum = await getContract(EAT, ET_ADDRESS)
        if(EMakerContract && Eathereum) {
          const balance = await Eathereum.methods.balanceOf(userAddress).call()
          this.balance = formatNumber(await weiConverter(balance), 3)
          this.supply = '30,000.000'
          const ids = farmIds()
          let pendings = []
          for await(let id of ids) {
            const wei_pending = await EMakerContract.methods.pendingEat(id, userAddress).call()
            const pending = parseFloat((await weiConverter(wei_pending)))
            pendings.push(pending)
          }
          this.pendingEat = `${formatNumber(pendings.reduce((a, b) => a + b, 0), 3)} EAT`
        }
    }
  }

}
</script>

<style scoped>
  .details {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
  }

  .farms_button {
    padding: 12px 16px;
    margin-top: 46px;
  }



</style>
