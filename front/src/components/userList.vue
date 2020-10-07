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
    height: 100%
    border: 1px solid aqua
    display: flex
    justify-content: center
    align-items: center
</style>
