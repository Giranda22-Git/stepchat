<template>
  <div class="wrapper">
    <ul>
      <li
      v-for="user in users"
      :key="user"
      >
        {{ user }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'userList',
  props: {
    users: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style lang="sass" scoped>
  .wrapper
    width: 20vw !important
    height: 100vh !important
    border: 1px solid aqua
    display: flex
    justify-content: flex-start
    align-items: flex-start
    font-size: 3vh
    ul
      width: 100%
      height: 100%
      overflow-y: auto
      display: flex
      flex-direction: column
      justify-content: flex-start
      align-items: center
      li
        width: 100%
        height: 10%
        min-height: 80px
        display: flex
        justify-content: center
        align-items: center
        cursor: pointer
        &:hover
          background-color: lighten(#000, 20%)
</style>
