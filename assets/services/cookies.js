import Cookies from 'js-cookie'

export const USER_COOKIE = 'UICO' 

export const setCookie = (name, value) => Cookies.set(name, value)

export const setTempCookie = (name, value) => Cookies.set(name, value, {expires: 1})

export const getCookie = (name) => Cookies.get(name)

export const deleteCookie = (name) => Cookies.remove(name)