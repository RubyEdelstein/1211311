<template>

  <div id="app-container">
    <navbar />
    <Nuxt />
    <footer-vue />
  </div>
</template>
<script>
import Navbar from '../components/Navbar.vue'
import FooterVue from '../components/footer/Footer'
import { PLATFORM_NAME } from '../assets/keys'
  export default {
    components: {
      Navbar,
      FooterVue
    },
      async head () {
    return {
      title: 'askda',
      meta: [
        { hid: 'description', name: 'description', content: 'My custom description' }
      ]
    }
  }
  }
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&family=Orbitron:wght@700&display=swap');
html {
    color: #fff;
    font-family: 'Montserrat';
    font-size: 16px;
    word-spacing: 1px;
    background-color: #363A3E;
    margin: 0px;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
    height:100%;

}
body {
  height: 100%;
}
h1{
  font-family: 'Orbitron';
     margin: 0;
  }
  #__nuxt {
    height: 100%;
  }
#__layout {
  height: 100%;
}
#app-container {
  height: 100%;
}
p,h1,h2,h3,h4 {
  margin: 0px;
  padding: 0px;
}
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: calc(100% - 74px);
    padding-top: 74px;
  }
  .button {
    border-radius: 4px;
    font-size: 14px;
    font-family: 'Orbitron';
    padding: 4px 0px;
    border: none;
    min-height: 32px;
    padding-left: 16px;
    padding-right: 16px;
    font-weight: 600;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    text-decoration: none;
    background-color: #7289da;
    width: fit-content;
    cursor: pointer;
    transition: all .17s;
  }

  .button:hover {
    background-color: #677bc4;
  }

  a {
    text-decoration: none;
    color: inherit;
  }


  input:focus {
    outline: none;
  }
  input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type=number] {
  -moz-appearance: textfield;
}
.approve {
  background-color: rgb(67, 181, 129);
  opacity: 1;
}
.approve:hover {
  background-color: rgb(67, 181, 129);
  opacity: 0.9;
}
.cancel {
  opacity: 1;
  background-color: rgb(240, 71, 71);
}
.cancel:hover {
  background-color: rgb(240, 71, 71);
  opacity: 0.9;
}
.button:focus {
  outline: none;
}
.tooltip {
  display: block !important;
  font-size: 14px;
  z-index: 10000;
}

.tooltip .tooltip-inner {
  background: black;
  color: white;
  border-radius: 12px;
  padding: 10px 10px ;
  text-align: center;
}

.tooltip .tooltip-arrow {
  width: 0;
  height: 0;
  border-style: solid;
  position: absolute;
  margin: 5px;
  border-color: black;
  z-index: 1;
}

.tooltip[x-placement^="top"] {
  margin-bottom: 5px;
}

.tooltip[x-placement^="top"] .tooltip-arrow {
  border-width: 5px 5px 0 5px;
  border-left-color: transparent !important;
  border-right-color: transparent !important;
  border-bottom-color: transparent !important;
  bottom: -5px;
  left: calc(50% - 5px);
  margin-top: 0;
  margin-bottom: 0;
}

.tooltip[x-placement^="bottom"] {
  margin-top: 5px;
}

.tooltip[x-placement^="bottom"] .tooltip-arrow {
  border-width: 0 5px 5px 5px;
  border-left-color: transparent !important;
  border-right-color: transparent !important;
  border-top-color: transparent !important;
  top: -5px;
  left: calc(50% - 5px);
  margin-top: 0;
  margin-bottom: 0;
}

.tooltip[x-placement^="right"] {
  margin-left: 5px;
}

.tooltip[x-placement^="right"] .tooltip-arrow {
  border-width: 5px 5px 5px 0;
  border-left-color: transparent !important;
  border-top-color: transparent !important;
  border-bottom-color: transparent !important;
  left: -5px;
  top: calc(50% - 5px);
  margin-left: 0;
  margin-right: 0;
}

.tooltip[x-placement^="left"] {
  margin-right: 5px;
}

.tooltip[x-placement^="left"] .tooltip-arrow {
  border-width: 5px 0 5px 5px;
  border-top-color: transparent !important;
  border-right-color: transparent !important;
  border-bottom-color: transparent !important;
  right: -5px;
  top: calc(50% - 5px);
  margin-left: 0;
  margin-right: 0;
}

.tooltip.popover .popover-inner {
  background: #f9f9f9;
  color: black;
  padding: 24px;
  border-radius: 5px;
  box-shadow: 0 5px 30px rgba(black, .1);
}

.tooltip.popover .popover-arrow {
  border-color: #f9f9f9;
}

.tooltip[aria-hidden='true'] {
  visibility: hidden;
  opacity: 0;
  transition: opacity .15s, visibility .15s;
}

.tooltip[aria-hidden='false'] {
  visibility: visible;
  opacity: 1;
  transition: opacity .15s;
}
</style>
