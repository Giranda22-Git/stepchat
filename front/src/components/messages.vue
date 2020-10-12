<template>
  <div class="wrapper">
    <div class="messages-block">
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
  </div>
</template>

<script>
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
  }
}
</script>

<style lang="sass" scoped>
  .self
    align-self: flex-end !important
  .wrapper
    width: 80vw !important
    height: 80vh !important
    border: 1px solid aqua
    border-left: none
    border-right: none
    padding-left: 3%
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
    .messages-block
      width: 100%
      height: 100%
      overflow-y: auto
      display: flex
      flex-direction: column
      .message-block
        width: 50%
        border-radius: 24px
        padding: 2%
        font-family: sans-serif
        .from
          width: 100%
          height: 20%
          font-size: 2.3vh
          text-align: left
        .text
          width: 100%
          height: 80%
          font-size: 2vh
          text-align: left
</style>
