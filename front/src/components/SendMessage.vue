<template>
  <div class="wrapper">
    <form onsubmit="return false">
      <input class="messageInput" type="text" placeholder="write a message...">
      <input type="submit" class="submit" value="Send" @click="sendMessage">
    </form>
  </div>
</template>

<script>
import axios from 'axios'
const $ = require('jquery')
export default {
  name: 'SendMessage',
  props: {
    userData: {
      type: Object,
      default: () => {}
    }
  },
  methods: {
    async sendMessage () {
      const params = {
        name: this.userData.name,
        text: $('.messageInput').val()
      }
      await axios.post('http://api.stepchat.site/message', params)
    }
  }
}
</script>

<style lang="sass" scoped>
  .wrapper
    width: 80vw !important
    height: 20vh !important
    border: 1px solid
    border-left: none
    box-shadow: 0 0 15px 5px
    form
      width: 100%
      height: 100%
      display: flex
      justify-content: center
      align-items: center
      .submit
        width: 10%
        height: calc(50% + 1px)
        color: inherit
        font-size: 2.6vh
        background-color: transparent
        cursor: pointer
        border: none
        border-bottom: 1px solid
        transition: border .3s
        padding: 0
        outline: none
        &:hover
          border-bottom-color: aqua
      .messageInput
        width: 80%
        height: 50%
        border: none
        border-bottom: 1px solid
        background-color: transparent
        outline: none !important
        font-size: 2vh
        font-family: sans-serif
        transition: color .3s
        color: aqua
        padding: 0
        animation-name: rainbow !important
        animation-duration: 20s
        animation-timing-function: linear
        animation-iteration-count: infinite
        &:focus
          color: inherit
      ::-webkit-input-placeholder
        color: inherit
      ::-moz-placeholder
        color: inherit
      :-moz-placeholder
        color: inherit
      :-ms-input-placeholder
        color: inherit
</style>
