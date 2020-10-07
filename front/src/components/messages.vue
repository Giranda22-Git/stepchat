<template>
  <div class="wrapper">
    <div class="messages-block">
      <div class="message-block"
        v-for="message in messages"
        :key="message"
        :class="message.name === userData.name ? 'self' : 'noself'"
      >
        <div class="from">
          {{ message.name }}
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
  *
    outline: 1px solid red
  .self
    align-self: flex-end !important
  .wrapper
    width: 80vw !important
    height: 80vh !important
    border: 1px solid aqua
    .messages-block
      width: 100%
      height: 100%
      overflow-y: auto
      display: flex
      flex-direction: column
      .message-block
        width: 50%
        height: 10vh
        min-height: 100px
        background-color: rgba(210, 27, 227, 0.4)
        border-radius: 24px
        display: flex
        justify-content: center
        align-items: center
</style>
