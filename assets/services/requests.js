// import axios from 'axios'
// import { API } from '../keys'
// import { deleteCookie, USER_COOKIE, getCookie } from './cookies'

// export const getRequest = async (route, config) => {
//     try {
//         const res = await axios.get(API + route, config)
//         const { ok, result } = res.data
//         if(ok) {
//             return result
//         } else {
//             if(result === 'No access') {
//                 deleteCookie(USER_COOKIE)
//                 window.location.replace('/')
//             } else return undefined
//         }
//     } catch(err) {
//         return undefined
//     }

// }

// export const postRequest = async (route, body, config) => {
//     try {
//         const res = await axios.post(API + route, body, config)
//         const { ok, result } = res.data
//         if(ok) {
//             return result
//         } else {
//             if(result === 'No access') {
//                 deleteCookie(USER_COOKIE)
//                 window.location.replace('/')
//             } else return undefined
//         }
//     } catch(err) {
//         return undefined
//     }

// }

// export const authrizedConfig = () => {
//     const token = getCookie(USER_COOKIE)
//     return {
//         headers: {
//             'access-token': token
//         }
//     }
// }