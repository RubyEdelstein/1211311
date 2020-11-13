<template>
    <div class="head">
        <img v-bind:src="this.$props.img"/>
        <div class="head_title">
            <h2>{{this.$props.title}}</h2>
        </div>
        <p class="description">{{description}}</p>
    </div>
</template>

<script>
export default {
    props: {
        img: String,
        title: String,
        token: String
    },
    data() {
      return {
        description: ''
      }
    },
    created() {
      this.description = 'Deposit ' + this.$props.token + ' Earn EAT'
    }
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
  letter-spacing: 5px;
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
  .head img {
  width: 80px;
}
.head h2 {
  font-size: 28px;
}
.description {
    font-size: 12px;
}
.head {
  padding: 20px 0px;
  padding-top: 30px;
}
}
</style>