<template>
  <div class="wrapper">
    <form onsubmit="return false">
      <div class="input-wrapper">
        <label for="file">Документ </label>
        <input name="file" id="file" type="file" @change="handleFileUpload" ref="file">
        <input class="messageInput" type="text" placeholder="write a message...">
      </div>
      <input type="submit" class="submit" value="Send" @click="sendMessage">
    </form>
  </div>
</template>

<script>
import axios from 'axios'
const $ = require('jquery')
export default {
  name: 'SendMessage',
  data: () => ({
    file: null,
    filedata: null
  }),
  props: {
    userData: {
      type: Object,
      default: () => {}
    }
  },
  methods: {
    async sendMessage () {
      if (this.file) {
        await this.sendFile()
          .then(async () => {
            const params = {
              name: this.userData.name,
              text: $('.messageInput').val(),
              file: this.filedata
            }
            await axios.post('http://localhost:3000/message', params)
          })
      } else {
        const params = {
          name: this.userData.name,
          text: $('.messageInput').val(),
          file: { name: null, path: null, size: null, owner: null }
        }
        await axios.post('http://localhost:3000/message', params)
      }
    },
    handleFileUpload () {
      if (this.$refs.file.files.length === 0) this.file = null
      else this.file = this.$refs.file.files
    },
    async sendFile (res, rej) {
      if (this.file) {
        const formData = new FormData()
        formData.append('file', this.file[0])
        formData.append('owner', this.userData.name)
        await axios.post('http://localhost:3000/upload',
          formData,
          {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          }
        )
          .then(response => {
            if (response.data !== null) this.filedata = response.data
          })
          .catch(() => {
            console.log('FAILURE!!')
            this.filedata = null
            this.file = null
          })
      }
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
      .input-wrapper
        width: 80%
        height: 50%
        #file
          width: auto
          height: 20%
        .messageInput
          width: 100%
          height: 80%
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
