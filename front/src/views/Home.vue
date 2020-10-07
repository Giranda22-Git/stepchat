<template>
  <div class="wrapper">
    <transition name="fade">
      <AuthModal class="AuthModal" @Authorized="Authorized" v-show="isModalVision" />
    </transition>
    <userList class="userList" :users="users" />
    <div class="rightContentWrapper">
      <messages :messages="messages" :userData="userData" />
      <SendMessage />
    </div>
  </div>
</template>

<script>
import AuthModal from '@/components/AuthModal.vue'
import userList from '@/components/userList.vue'
import messages from '@/components/messages.vue'
import SendMessage from '@/components/SendMessage.vue'
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
    messages,
    SendMessage
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
    setInterval(this.updateData, 15000)
  }
}
</script>

<style lang="sass" scoped>
  *
    animation-name: rainbow
    animation-duration: 10s
    animation-timing-function: linear
    animation-iteration-count: infinite
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
  .rightContentWrapper
    width: 80vw
    height: 100vh
  @keyframes rainbow
    0%
      color: red
    15%
      color: orange
    30%
      color: yellow
    45%
      color: green
    60%
      color: lightblue
    75%
      color: blue
    100%
      color: purple
</style>
