<template>
  <div class="wrapper" v-chat-scroll = " {smooth: true, notSmoothOnInit: true} " id="messages_block">
    <div class="message-block"
      v-for="(message, index) in messages"
      :key="index + Math.random().toString(36).slice(-8)"
      :class="message.name === userData.name ? 'self' : 'noself'"
    >
      <div class="from">
        {{ message.name }}:
      </div>
      <div class="text">
        {{ message.text }}
      </div>
    </div>
  </div>
</template>

<script>
const $ = require('jquery')
export default {
  name: 'messages',
  props: {
    messages: {
      type: Array,
      default: () => []
    },
    userData: {
      type: Object,
      default: () => {}
    }
  },
  watch: {
    messages: function (newVal, oldVal) {
      if (newVal.length !== oldVal.length) {
        const block = document.getElementById('messages_block')
        $('#messages_block').animate({
          scrollTop: $('#messages_block').offset().top + block.scrollHeight
        }, 'slow')
      }
    }
  }
}
</script>

<style lang="sass" scoped>
  .noself
    align-self: flex-start !important
  .self
    align-self: flex-end !important
  ::-webkit-scrollbar
    width: 3px
    height: 3px
  ::-webkit-scrollbar-button
    background-color: aqua !important
  ::-webkit-scrollbar-track
    background-color: black
  ::-webkit-scrollbar-track-piece
    background-color: black !important
  ::-webkit-scrollbar-thumb
    height: 50px
    background-color: aqua
  ::-webkit-scrollbar-corner
    background-color: black
  ::-webkit-resizer
    background-color: aqua
  .wrapper
    width: 80vw !important
    height: 80vh !important
    padding-left: 3%
    display: flex
    flex-direction: column
    overflow-y: auto
    box-shadow: 0 0 15px 5px
    .message-block
      width: calc( width + 50px )
      border-radius: 24px
      padding: 1%
      font-family: sans-serif
      margin-top: 2%
      box-shadow: 0 0 15px 2px
      .from
        width: 100%
        height: 50px
        font-size: 2.3vh
        text-align: left
        overflow-y: auto
      .text
        width: 100%
        height: calc( 100% - 50px )
        font-size: 2vh
        text-align: left
</style>
