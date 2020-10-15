<template>
  <div class="wrapper">
    <ul>
      <input type="text" class="sort">
      <li
      v-for="(user, index) in users"
      :key="index + Math.random().toString(36).slice(-8)"
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
  ::-webkit-scrollbar
    width: 3px
    height: 3px
  ::-webkit-scrollbar-button
    background-color: aqua
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
    width: 20vw !important
    height: 100vh !important
    border: 1px solid
    border-right: none
    display: flex
    justify-content: flex-start
    align-items: flex-start
    font-size: 3vh
    ul
      width: 100%
      height: 100%
      overflow-y: auto
      overflow-x: hidden
      display: flex
      flex-direction: column
      justify-content: flex-start
      align-items: center
      li
        width: 100%
        height: 10%
        min-height: 80px
        display: flex
        justify-content: flex-start
        align-items: center
        text-align: left !important
        padding-left: 35%
        cursor: pointer
        &:hover
          background-color: lighten(#000, 20%)
      .sort
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
