<template>
  <div class="wrapper">
    <div class="message-block"
      v-for="message in messages"
      :key="message"
    >
      <div class="from">
        Отправитель {{ message.name }}
      </div>
      <div class="text">
        {{ message.text }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'userList',
  props: {
    messages: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style lang="sass" scoped>
  .wrapper
    width: 80vw !important
    height: 80% !important
    border: 1px solid aqua
    color: white
    display: flex
    flex-direction: column
    justify-content: flex-end
    align-items: center
</style>
