// stores/user-store.js
import axios from 'axios'
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    id: null,
    token: null,
    firstName: null,
    lastName: null,
    email: null,
  }),
  // could also be defined as
  // state: () => ({ count: 0 })
  actions: {
   setUserDetails(res){
       this.$state.id = res.data.user.id
       this.$state.token = res.data.token
       this.$state.firstName = res.data.user.first_name
       this.$state.lastName = res.data.user.last_name
       this.$state.email = res.data.user.email

   },

   async fetchUser() {
       let res = await axios.get('http://127.0.0.1:8000/api/users' + this.state.id)

       this.$state.id = res.data.user.id
       this.$state.firstName = res.data.user.first_name
       this.$state.lastName = res.data.user.last_name

   },

   clearUser() {
    this.$state.id = null
    this.$state.token = null
    this.$state.firstName = null
    this.$state.lastName = null
    this.$state.email = null
   },

  },
  persist: true
})
