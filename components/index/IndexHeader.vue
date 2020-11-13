<template>
    <div class="head">
        <img src="/images/navbar/microbe.png"/>
        <div class="head_title">
            <h2>EATHEREUM</h2>
            <p>YIELD FARMS</p>
        </div>
        <p class="description">Stake Uniswap LP tokens to claim your EAT!</p>
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
  letter-spacing: 4px;

  text-align:center;
}
.head_title p {
  margin-top: -8px;
  font-size: 38px;
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
</style>