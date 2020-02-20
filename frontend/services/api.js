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

  get({ params, pathUrl, token }) {
    return this.api
      .get(pathUrl, { params, headers: { Authorization: `Bearer ${token}` } })

      .then(response => {
        return response.data
      })
      .catch(error => {
        toast.error(getErrorMessage(error.response.data), { autoClose: false })
      })
  }

  post({ data, pathUrl, token }) {
    return this.api
      .post(pathUrl, data, { headers: { Authorization: `Bearer ${token}` } })
      .then(response => {
        return response.data
      })
      .catch(error => {
        toast.error(getErrorMessage(error.response.data), { autoClose: false })
      })
  }

  put({ data, pathUrl, token }) {
    return this.api
      .put(pathUrl, data, { headers: { Authorization: `Bearer ${token}` } })
      .then(response => {
        return response.data
      })
      .catch(error => {
        toast.error(getErrorMessage(error.response.data), { autoClose: false })
      })
  }

  delete({ pathUrl, token }) {
    return this.api
      .delete(pathUrl, { headers: { Authorization: `Bearer ${token}` } })
      .then(response => {
        return response.data
      })
      .catch(error => {
        toast.error(getErrorMessage(error.response.data), { autoClose: false })
      })
  }
}

export default new Api()
