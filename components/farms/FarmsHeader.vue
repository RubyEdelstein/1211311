<template>
    <div class="head">
        <img src="/images/farms/scientist.png"/>
        <div class="head_title">
            <h2>YIELD FARMS</h2>
        </div>
        <p class="description">Earn EAT tokens by staking Uniswap LP Tokens.</p>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.head {
  padding: 48px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.head_title {
  font-family: 'Orbitron';
  margin-top: 10px;
  text-align:center;
}
.head_title p {
  margin-top: -8px;
  font-size: 32.4px;
}
.head img {
  width: 120px;
}

.description {
    font-size: 14px;
  text-align: center;
  margin-top: 8px;
}

.head h2 {
  font-size: 42px;
}

@media(max-width: 520px) {
  .head h2 {
    font-size: 22px;
  }
  .description {
    font-size: 12px;
  }
  .head img {
    width: 80px;
  }
}
</style>