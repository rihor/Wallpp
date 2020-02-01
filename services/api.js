import React from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'

import ToastMessage from '../components/ToastMessage'

function getErrorMessage(data) {
  if (data.error) return data.error
  if (data.message) return data.message
  if (Array.isArray(data)) {
    const messages = data.map(error => error.message)
    return <ToastMessage messages={messages} />
  }
  return 'Unexpected error'
}

class Api {
  constructor() {
    this.api = axios.create({
      baseURL: 'http://localhost:3333'
    })
  }

  saveToken(token) {
    this.api.defaults.headers.Authorization = `Bearer ${token}`
  }

  get({ params, pathUrl }) {
    return this.api
      .get(pathUrl, { params })
      .then(response => {
        return response.data
      })
      .catch(error => {
        toast.error(getErrorMessage(error.response.data), { autoClose: false })
      })
  }

  post({ data, pathUrl }) {
    return this.api
      .post(pathUrl, data)
      .then(response => {
        return response.data
      })
      .catch(error => {
        toast.error(getErrorMessage(error.response.data), { autoClose: false })
      })
  }

  put({ data, pathUrl }) {
    return this.api
      .put(pathUrl, data)
      .then(response => {
        return response.data
      })
      .catch(error => {
        toast.error(getErrorMessage(error.response.data), { autoClose: false })
      })
  }

  delete({ pathUrl }) {
    return this.api
      .delete(pathUrl)
      .then(response => {
        return response.data
      })
      .catch(error => {
        toast.error(getErrorMessage(error.response.data), { autoClose: false })
      })
  }
}

export default new Api()
