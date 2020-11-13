<template>
  <header class="navbar">
    <div class="navbar_main">
    <nuxt-link class="logo_parent" to="/">
        <img class="logo" src="/images/navbar/microbe.png" />
        <h1>EATHEREUM FARMS</h1>
        <!-- <p>Pools</p> -->
    </nuxt-link>
    <div class="center_nav">
        <nuxt-link 
            v-for="nav in navigation"
            v-bind:key="nav.title"
            v-bind:to="nav.url"
            v-bind:class="{
                navbar_link: true,
                navbar_margin: true,
                current_location: nav.url ==='/farms' ? navi.includes('farm') : nav.url === navi
            }"
        >
            {{nav.title}}
        </nuxt-link>
        <a href="https://eathereum.com" target="_blank" class="navbar_link navbar_margin">Play Eathereum</a>
    </div>
    </div>
   <NavbarGuest  v-if="!connected"/>
   <NavbarRegistered  v-else/>
  </header>
</template>

<script>
import NavbarGuest from '../components/navbar/NavbarGuest'
import NavbarRegistered from '../components/navbar/NavbarRegistered'
import navList from './navbar/nav_list'
export default {
    components: {
        NavbarGuest,
        NavbarRegistered
    },
    data() {
        return {
            connected: false,
            navi: '',
            navigation: navList
        }
    },
    methods: {
        clickNav(nav) {
            this.navi = nav
        }
    },
    computed: {
        account() {
        return this.$store.state.wallet.wallet
        }
    },
    created() {
        this.navi = this.$route.fullPath
    },
    watch: {
        async account (newAccount, oldAccount) {
            if(newAccount && newAccount !== oldAccount) {
                this.connected = true
            }
        },
        $route() {
            this.navi = this.$route.fullPath
        }
    }

}
</script>

<style>
    .center_nav {
        margin: auto;
    position: absolute;
        top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    }
    .logo_parent {
        display: flex;
        align-items: center;
    }
    .logo_parent h1 {
        font-size: 16px;
        font-family: 'Orbitron';
    }
    .logo_parent p  {
        font-size: 14px;
        font-weight: 600;
        margin-left: 10px;
    }
    .logo {
        width: 32px;
        margin-right: 8px;
    }
    .navbar_main {
        margin-left: 24px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .navbar_margin {
        margin-right: 16px;
        margin-left: 8px;
    }
    .navbar_link {
        font-weight: 600;
        font-size: 14px;
        text-decoration: none;
        color: #b9bbbe;
        transition: 0.17s;
    }
    .navbar_link:hover {
        color: #fff;
    }
    .member_container {
        position: absolute;
        display: flex;
        justify-content: space-between;
        align-items: center;
        right: 16px;
    }
    .navbar {
        box-sizing: border-box;
        margin: 0;
        min-width: 0;
        display: flex;
        position: fixed;
        border-bottom: 1px rgba(0,0,0,0.3) solid;
        top: 0;
        left: 0;
        z-index: 1001;
        color: #fff;
        height: 74px;
        background-color: #2E3236;
        -webkit-align-items: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        width: 100%;
        outline: none!important;
    }
    .nuxt-link-exact-active {
        color: #fff;
    }
    .current_location {
        color: #fff;
    }
</style>
