<template>
  <div class="wrapper">
    <transition name="fade">
      <AuthModal class="AuthModal" @Authorized="Authorized" v-show="isModalVision" />
    </transition>
    <userList class="userList" :users="users" />
    <messages :messages="messages" />
  </div>
</template>

<script>
import AuthModal from '@/components/AuthModal.vue'
import userList from '@/components/userList.vue'
import messages from '@/components/messages.vue'
import axios from 'axios'
export default {
  name: 'Home',
  data: () => ({
    isModalVision: true,
    userData: null,
    users: null,
    messages: null
  }),
  components: {
    AuthModal,
    userList,
    messages
  },
  methods: {
    Authorized (data) {
      this.isModalVision = false
      this.userData = data
    },
    async updateData () {
      await axios.get('http://localhost:3000/')
        .then(response => {
          this.users = response.data.users
          this.messages = response.data.messages
        })
    }
  },
  mounted () {
    setInterval(this.updateData, 500)
  }
}
</script>

<style lang="sass" scoped>
  *
    outline: 1px solid red
  .wrapper
    width: 100vw
    height: 100vh
    background-color: #000
    display: flex
  .fade-enter-active, .fade-leave-active
    transition-property: opacity
    transition-duration: 1s
  .fade-enter-active
    transition-delay: .2s
  .fade-enter, .fade-leave-active
    opacity: 0
</style>
