<template>
  <div class="wrapper">
    <div class="front">
      <form action="#" onsubmit="return false">
        <input class="AuthName" type="text" placeholder="Your Name">
        <input type="submit" @click="auth">
      </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import sweetalert2 from 'sweetalert2'
const $ = require('jquery')
export default {
  name: 'AuthModal',
  data: () => ({
    AuthData: null
  }),
  methods: {
    async auth () {
      const params = {
        name: $('.AuthName').val()
      }
      await axios.post('http://localhost:3000/user', params)
        .then(response => {
          if (response.data !== 'OK') {
            sweetalert2.fire({
              title: 'Error',
              text: 'Вы не ввели ваше имя',
              icon: 'error',
              confirmButtonText: 'OK'
            })
            return false
          }
          this.AuthData = params
        })
        .catch(err => {
          sweetalert2.fire({
            title: 'Error',
            text: 'Неизвестная ошибка\n код ошибки' + err.status,
            icon: 'error',
            confirmButtonText: 'OK'
          })
          return false
        })
        .then(inCache => {
          sweetalert2.fire({
            title: 'OK',
            text: `Добро пожаловать в чатик ${params.name}`,
            icon: 'success',
            confirmButtonText: 'OK'
          })
          this.$emit('Authorized', this.AuthData)
        })
    }
  }
}
</script>

<style lang="sass" scoped>
  .wrapper
    width: 100%
    height: 100%
    background-color: rgba(0, 0, 0, 0.6)
    position: fixed
    display: flex
    justify-content: center
    align-items: center
    .front
      width: 20%
      height: 40%
      form
        width: 100%
        height: 100%
        background-color: #000
        display: flex
        flex-direction: column
        justify-content: space-evenly
        align-items: center
        input
          width: 80%
          height: 20%
          outline: none
          text-align: center
          font-size: 2vh
          color: white
          border: 1px solid aqua
          background-color: transparent
</style>
