export { default as Navbar } from '../../components/Navbar.vue'
export { default as ConnectWallet } from '../../components/connect/ConnectWallet.vue'
export { default as FarmAction } from '../../components/farm/FarmAction.vue'
export { default as FarmHeader } from '../../components/farm/FarmHeader.vue'
export { default as Footer } from '../../components/footer/Footer.vue'
export { default as Farm } from '../../components/farms/Farm.vue'
export { default as FarmsHeader } from '../../components/farms/FarmsHeader.vue'
export { default as Countdown } from '../../components/general/Countdown.vue'
export { default as Loader } from '../../components/general/Loader.vue'
export { default as IndexDataCard } from '../../components/index/IndexDataCard.vue'
export { default as IndexHeader } from '../../components/index/IndexHeader.vue'
export { default as NavbarGuest } from '../../components/navbar/NavbarGuest.vue'
export { default as NavbarRegistered } from '../../components/navbar/NavbarRegistered.vue'
export { default as NavList } from '../../components/navbar/nav_list.js'

export const LazyNavbar = import('../../components/Navbar.vue' /* webpackChunkName: "components/Navbar'}" */).then(c => c.default || c)
export const LazyConnectWallet = import('../../components/connect/ConnectWallet.vue' /* webpackChunkName: "components/connect/ConnectWallet'}" */).then(c => c.default || c)
export const LazyFarmAction = import('../../components/farm/FarmAction.vue' /* webpackChunkName: "components/farm/FarmAction'}" */).then(c => c.default || c)
export const LazyFarmHeader = import('../../components/farm/FarmHeader.vue' /* webpackChunkName: "components/farm/FarmHeader'}" */).then(c => c.default || c)
export const LazyFooter = import('../../components/footer/Footer.vue' /* webpackChunkName: "components/footer/Footer'}" */).then(c => c.default || c)
export const LazyFarm = import('../../components/farms/Farm.vue' /* webpackChunkName: "components/farms/Farm'}" */).then(c => c.default || c)
export const LazyFarmsHeader = import('../../components/farms/FarmsHeader.vue' /* webpackChunkName: "components/farms/FarmsHeader'}" */).then(c => c.default || c)
export const LazyCountdown = import('../../components/general/Countdown.vue' /* webpackChunkName: "components/general/Countdown'}" */).then(c => c.default || c)
export const LazyLoader = import('../../components/general/Loader.vue' /* webpackChunkName: "components/general/Loader'}" */).then(c => c.default || c)
export const LazyIndexDataCard = import('../../components/index/IndexDataCard.vue' /* webpackChunkName: "components/index/IndexDataCard'}" */).then(c => c.default || c)
export const LazyIndexHeader = import('../../components/index/IndexHeader.vue' /* webpackChunkName: "components/index/IndexHeader'}" */).then(c => c.default || c)
export const LazyNavbarGuest = import('../../components/navbar/NavbarGuest.vue' /* webpackChunkName: "components/navbar/NavbarGuest'}" */).then(c => c.default || c)
export const LazyNavbarRegistered = import('../../components/navbar/NavbarRegistered.vue' /* webpackChunkName: "components/navbar/NavbarRegistered'}" */).then(c => c.default || c)
export const LazyNavList = import('../../components/navbar/nav_list.js' /* webpackChunkName: "components/navbar/nav_list'}" */).then(c => c.default || c)
