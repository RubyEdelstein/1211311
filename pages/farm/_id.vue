<template>
  <div v-if="connected" class="container">
      <farm-header 
        v-bind:img="farm.img"
        v-bind:title="farm.title"
        v-bind:token="farm.token"
      />
      <div class="actions">
        <div class="action">
        <img src="/images/navbar/microbe.png" />
          <h2>{{pendingEat}}</h2>
          <p>Withdraw LP Tokens</p>
          <!-- <countdown class="countdown" endTime="2020-10-21 13:00:00.052Z" /> -->
          <button 
          class="button"
          @click="claim"
          >WITHDRAW</button>
        
        </div>
        <div class="action">
        <img src="/images/farms/scientist.png" />
          <h2 v-if="!stake">{{amount}}</h2>
          <h2 v-else>{{userBalance}}</h2>
          <p v-if="!stake">{{farm.token}} Tokens Staked</p>
          <p v-else>Your {{farm.token}} Total Balance</p>
          <button 
            @click="giveAllowance"
            v-if="!allowance && !loadingApproval" 
            class="button"
          >
            APPROVE {{farm.token}}
          </button>
         <loader v-else-if="loadingApproval && !allowance" class="approval_loader" />
          <div v-else class="stake">
              <div class="stake_unstake" v-if="!stake && !unstake">
                <button @click="openUnstake" class="button">UNSTAKE</button>
                <button @click="openStake" class="button">STAKE</button>
              </div>
              <form 
                v-if="stake" 
                class="input"
                @submit="stakeTokens"
              >
                <p v-if="userStaked" @click="back" class="back">Back</p>
                <p v-if="userStaked" @click="max" class="max">Max</p>
                <input 
                  v-bind:disabled="loadingDeposit"
                  v-model="stakeAmount"
                  v-bind:placeholder="farm.token"
                />
                
                <button v-if="userStaked && !loadingDeposit" class="button">CONFIRM</button>
                <button v-else-if="!loadingDeposit" class="button">STAKE</button>
                <loader v-else class="loader" />
              </form>
              <div class="stake_unstake" v-else-if="unstake">
                <img 
                src="/images/farm/i.svg"  
                class="info"
                v-tooltip="`<strong>WARNING:</strong> By unstaking your tokens, <br/>you will lose all EAT grown.`"
                />
                <button @click="back" v-if="!loadingUnstake" class="button cancel">CANCEL</button>
                <button @click="unstakeTokens" v-if="!loadingUnstake" class="button approve">UNSTAKE</button>
                <loader v-else-if="loadingUnstake" class="unstake_loader" />
              </div>
          </div>
        </div>
      </div>
  </div>
  <div v-else class="container">
    <connect-wallet  />

  </div>

</template>

<script>
import data from '../../assets/data/farms_data'
import { 
  getBalanceNumber, 
  getContract, 
  toWei, 
  weiConverter 
} from '../../assets/services/solidity_helpers'
import { formatNumber } from '../../assets/services/numbers'
import vueAwesomeCountdown from 'vue-awesome-countdown'
import ERC20 from '../../assets/contracts/ERC20.json'
import Farm from '../../assets/contracts/Farm.json'
import FarmHeader from '../../components/farm/FarmHeader.vue'
import ConnectWallet from '../../components/connect/ConnectWallet.vue'
import { ethers } from 'ethers'
import Loader from '../../components/general/Loader.vue'
import CountdownVue from '../../components/general/Countdown.vue'
import { EM_ADDRESS } from '../../assets/keys'
export default {
  components: {
    ConnectWallet,
    Loader,
    CountdownVue
  },
    validate({ params }) {
    return data[params.id]
  },
  components: {
    FarmHeader
  },
  data() {
    return {
      farm: {},
      connected: false,
      allowance: true,
      stake: false,
      unstake: true,
      userStaked: true,
      loadingApproval: true,
      loadingDeposit: false,
      loadingUnstake: false,
      LPContract: undefined,
      userBalance: '',
      stakeAmount: undefined,
      pendingEat: '0.000',
      fetchInterval: undefined,
      FarmAddress: '',
      amount: '0.000'
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
        this.loadData()
      }
    }
  },
  beforeDestroy() {
    const { fetchInterval } = this
    if(fetchInterval) clearInterval(fetchInterval)
  },
  methods: {
    openStake() {
      this.stake = true
    },
    openUnstake() {
      this.unstake = true
    },
    back() {
      this.stake = false
      this.unstake = false
    },
    max() {
      this.stakeAmount = parseFloat(this.userBalance.replace(/,/g, ''))
    },
    async loadData() {
      const userAddress = this.$store.state.wallet.wallet
      if(userAddress) {
        this.connected = true
        const farm = data[this.$route.params.id]
        this.farm = farm
        const EMakerContract = await getContract(Farm, EM_ADDRESS)
        if(EMakerContract && farm.id >= 0) {
          const poolInfo = await await EMakerContract.methods.poolInfo(farm.id).call()
          console.log(poolInfo)
          if(poolInfo) {
            const { lpToken } = poolInfo
            this.loadPendingEat(EMakerContract)
            this.fetchInterval = setInterval(() => {
              this.loadPendingEat(EMakerContract)
            },3000)
            const LPContract = await getContract(ERC20, lpToken)
            if(LPContract) {
              this.LPContract = LPContract
              const allowance = await LPContract.methods.allowance(userAddress, EM_ADDRESS).call()
              if(!allowance || allowance === '0') { // ask user to give allowance
                this.allowance = true
                this.loadingApproval = false
              } else { // show users total in cocntract
                const userBalance = await LPContract.methods.balanceOf(userAddress).call()
                await this.getUserBalance()
                const userInfo = await EMakerContract.methods.userInfo(farm.id, userAddress).call()
                if(userInfo) {
                  const amount = await weiConverter(userInfo.amount)
                  this.amount =  formatNumber(amount, 3)
                  if(amount === '0') {
                    this.loadingApproval = false
                    this.stake = true
                    this.userStaked = false
                  } else {
                  }
                }
                this.loadingApproval = false
                this.allowance = true
              }
            }
          }
        }
      } 
    },
    async getUserBalance() {
      const userAddress = this.$store.state.wallet.wallet
      if(userAddress) {
      const userBalance = await this.LPContract.methods.balanceOf(userAddress).call()
      this.userBalance = formatNumber(await weiConverter(userBalance), 3)
      this.stakeAmount = await weiConverter(userBalance)
      }

    },
    async unstakeTokens() {
      const { amount, farm } = this
      const from = this.$store.state.wallet.wallet
      if(from) {
        const EMakerContract = await getContract(Farm, EM_ADDRESS)
        // if(EMakerContract) {
          const weiAmount = await toWei(amount)
        //   console.log(weiAmount)
        //   if(weiAmount !== '0') {
            EMakerContract.methods
            .withdraw(farm.id, weiAmount)
            .send({ from })
            .on('transactionHash', async (tx) => {
            this.loadingUnstake = true
            })
            .then(async (res) => {
              this.loadingUnstake = false
              this.unstake = false
              this.userStaked = false
              this.stake = true
              this.amount = '0.000'
              this.pendingEat = '0.000'
            })
            .catch(err => {
              this.unstakeErr = true
            })
          // }
        // }
      }
    },
    async stakeTokens(e) {
      e.preventDefault()
      const { stakeAmount, farm } = this
      const from = this.$store.state.wallet.wallet
      if(from && stakeAmount) {
        const EMakerContract = await getContract(Farm, EM_ADDRESS)
        if(EMakerContract) {
          const weiAmount = await toWei(stakeAmount)
          await EMakerContract.methods
          .deposit(farm.id ,weiAmount)
          .send({ from })
          .on('transactionHash', async (tx) => {
            this.loadingDeposit = true
          })
          .then(async (res) => {
            this.loadingDeposit = false
            this.userStaked = true
            this.stake = false
            this.amount = await formatNumber((parseFloat(this.amount.replace(/,/g, '')) +  parseFloat(stakeAmount)), 3)
            this.stakeAmount = ''
          })
          .catch(err => {
            this.depositErr = true
          })
        }
      }
    },
    async loadPendingEat(Contract) {
      const from = this.$store.state.wallet.wallet
      if(from) {
        const { id } = this.farm
        const pendingEat = await Contract.methods.pendingEat(id, from).call()
        this.pendingEat = formatNumber(await weiConverter(pendingEat), 3)
      }
    },
    async giveAllowance() {
      const from = this.$store.state.wallet.wallet
      const { lpTokenAddress } = this.farm
      if(lpTokenAddress && from) {
        const LPContract = await getContract(ERC20, lpTokenAddress)
        if(LPContract) {
          LPContract.methods
          .approve(EM_ADDRESS, ethers.constants.MaxUint256.toString())
          .send({ from })
          .on('transactionHash', async (tx) => {
            this.loadingApproval = true
          })
          .then(async res => {
            this.allowance = true
            this.loadingApproval = false
            this.userStaked = false
            this.stake = true
            await this.getUserBalance()
          })
        }
      }
    },
      async claim() {
    const from = this.$store.state.wallet.wallet
      if(from) {
        const FarmContract = await getContract(Farm, EM_ADDRESS)
        const farm = data[this.$route.params.id]
        if(FarmContract) {
 
          FarmContract.methods
          .withdraw(EM_ADDRESS, ethers.constants.MaxUint256.toString())
          .send({ from })
          .on('transactionHash', async (tx) => {
            this.loadingApproval = true
          })
          .then(async res => {
            this.allowance = true
            this.loadingApproval = false
            this.userStaked = false
            this.stake = true
            await this.getUserBalance()
          })
        }
      }
  },
  },

  async created() {
    this.loadData()
  }
}
</script>

<style>
  .actions {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }
  .stake_unstake {
    position: relative;
    display: flex;
    justify-content: space-between;
  }
  .stake_unstake .button {
    width: calc(50% - 5px) !important;
  }
  .action {
      position: relative;
      padding: 16px;
      margin: 16px;
      background-color: #2E3236;
      border: 1px rgba(0,0,0,0.3) solid;
      border-radius: 12px;
      width: 310px;
      height: 236px;
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      font-size: 14px;
    }
    .action p {
      min-height: 40px;
    }
    .action .img_container {
        width: 54px;
        height: 54px;
    }
    .action .button {
        width: 100%;
        height: 42px;
        margin-top: 12px;
    }
    .action img {
        width: 54px;
        height: 54px;
    }
    .action h2 {
        font-family: 'Orbitron';
        margin: 12px 0px;
        font-size: 26px;
    }
    .stake {
      width: 100%;
    }

    .input {
      position: relative;
      display: flex;
      background-color: #202225;
      width: 100%;
      padding: 6px 16px;
      align-items: center;
      justify-content: center;
      border-radius: 8px;
      height: 45px;
      margin-top: 10px;
    }
    .back {
      position: absolute;
      top: -20px;
      left: 10px;
      cursor: pointer;
      height: fit-content;
      min-height: 10px !important;
      color: #8e9297;
    }
    .max {
      position: absolute;
      left: 0; 
      right: 0; 
      margin-left: auto; 
      margin-right: auto; 
      top: -20px;
      width: 40px;
      cursor: pointer;
      height: fit-content;
      min-height: 10px !important;
      color: #8e9297;
    }
    .max:hover {
      text-decoration: underline;
    }
    .back:hover {
      text-decoration: underline;
    }
    .locked_claim {
      cursor: not-allowed;
      opacity: 0.6;
    }
    .locked_claim:focus { 
      outline: none;
    }
    .input input {
      padding: 10px 0px;
      padding-left: 0px;
      width: calc(100% - 10px);
      background-color: transparent;
      border: 0px;
      color: #dcddde;
      font-family: 'Orbitron';
    }
    .input .button {
      margin: 0px;
      height: 18px;
      font-size: 12px;
      width: 100px;
    }
    .loader {
      transform: scale(0.4);
      position: absolute;
      top: -15px;
      right: -10px;
    }
    .approval_loader {
      transform: scale(0.4);
      margin-top: 5px;
      margin-left: 5px;
    }
    .unstake_loader {
      transform: scale(0.4);
      position: absolute;
      left: 0; 
      right: 0; 
      margin-left: auto; 
      margin-right: auto; 
      margin-top: -5px;
    }
    .countdown {
      position: absolute;
      bottom: 60px;
      left: 0; 
      right: 0; 
      margin-left: auto; 
      margin-right: auto; 
      width: 130px; 
    }
    .info {
      position: absolute;
      top: -12px;
      width: 18px !important;
      height: 18px !important;
      right: 0px;
      cursor: help;
    }
    @media (max-width: 520px) {

    }
</style>