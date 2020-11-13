<template>
    <div class="detail_container">
        <div class="detail">
        <p>{{this.$props.title}}</p>
        <h2>{{this.$props.title_detail}}</h2>
        </div>
        <div class="detail_bottom">
        <p>{{this.$props.title_bottom}}</p>
        <p>{{this.$props.title_bottom_detail}}</p>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        title: String,
        title_detail: String,
        title_bottom: String,
        title_bottom_detail: String
    }
}
</script>

<style scoped>

  .detail h2 {
    font-family: 'Orbitron';
    font-size: 32px;
  }
  .details p {
  color: #8e9297;

  }
.detail {
  font-size: 14px;
  border: 1px rgba(0,0,0,0.3) solid;
  border-bottom: 0px;
  margin: 0px 12px;
      background-color: #2E3236;
      padding: 16px;
      border-radius: 12px 12px 0px 0px;
      width: 360px;
}
.detail_bottom {
  font-weight: 500;
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  margin: 0px 12px;
  border: 1px rgba(0,0,0,0.3) solid;
  background-color: #2E3236;
  border-radius: 0px 0px 12px 12px;
  padding: 8px 16px;
}

</style>