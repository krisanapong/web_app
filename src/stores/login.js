import { defineStore } from 'pinia'
import axios from 'axios'

const BASE_URL = 'http://192.168.3.94/api_test_data/v3'

export const useLoginStore = defineStore('login', {
  state: () => ({ // กำหนดข้อมูล state ที่จะเก็บใน store นี้
    username: 'aef',
    password: 'admin@123'
  }),
  actions: {
    async login () {
      const bodyData = {
        username: this.username,
        password: this.password
      }
      try {
        const response = await axios.post(`${BASE_URL}/user.php`, bodyData)
        console.log(response.data)
        this.list = response.data
      } catch (error) {
        console.log('error', error)
      }
    }
  }
})