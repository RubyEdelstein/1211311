<template>
        <div class="farm">
            <img v-bind:src="this.$props.img" />
        <h2>{{title}}</h2>
        <p>{{description}}</p>
        <nuxt-link v-bind:to="url" class="button">SELECT</nuxt-link>
    </div>
</template>

<script>
export default {
    props: {
        img: String,
        title: String,
        description: String,
        url: String
    }
}
</script>

<style>
    .farm {
        padding: 16px;
        margin: 16px;
        background-color: #2E3236;
        border: 1px rgba(0,0,0,0.3) solid;
        border-radius: 12px;
        width: 250px;
        height: 236px;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        font-size: 14px;
    }
    .farm .img_container {
        width: 54px;
        height: 54px;
    }
    .farm .button {
        width: 100%;
        height: 42px;
        margin-top: 12px;
    }
    .farm img {
        width: 100%;
        height: 54px;
    }
    .farm h2 {
        font-family: 'Orbitron';
        margin: 12px 0px;
        font-size: 26px;
    }
</style>