import Axios from 'axios'
import User from './User'

const port = 8080
const domain = '18.139.50.74'

const config = {
  baseURL: `http://${domain}:${port}`
}

const api = Axios.create(config)

function registerUser(params) {
  return api.post('/register', params)
}

function loginUser(params) {
  return api.post('/login', params).then(
    (response) => {
      const { data } = response
      User.logIn(data.data.token)
      return true
    },
    () => (false)
  )
}

function saveCheckList(params) {
  return api.post('/checklist', params, {
    headers: {
      Authorization: `Bearer ${User.getToken()}`,
    },
  })
}

function getCheckList(params) {
  return api.get('/checklist', {
    headers: {
      Authorization: `Bearer ${User.getToken()}`,
    },
  })
}

function deleteCheckList(id) {
  return api.delete(`/checklist/${id}`, {
    headers: {
      Authorization: `Bearer ${User.getToken()}`,
    },
  })
}

function saveItem(params) {
  return api.post('/item', params, {
    headers: {
      Authorization: `Bearer ${User.getToken()}`,
    },
  }).then(
    (response) => (console.log(response))
  )
}

function getItem() {
  return api.get('/checklist', {
    headers: {
      Authorization: `Bearer ${User.getToken()}`,
    },
  })
}

function getItemById(id) {
  return api.get(`/item/${id}`, {
    headers: {
      Authorization: `Bearer ${User.getToken()}`,
    },
  })
}

function setComplete(id) {
  const params = {}
  params.itemCompletionStatus = true
  return api.put(`/item/${id}`, params, {
    headers: {
      Authorization: `Bearer ${User.getToken()}`,
    },
  })
}

function renameItem(id, params) {
  return api.put(`/item/${id}`, params, {
    headers: {
      Authorization: `Bearer ${User.getToken()}`,
    },
  })
}

function deleteItem(id) {
  return api.delete(`/item/${id}`, {
    headers: {
      Authorization: `Bearer ${User.getToken()}`,
    }
  })
}

export {
  registerUser,
  loginUser,
  saveCheckList,
  getCheckList,
  deleteCheckList,
  saveItem,
  getItem,
  setComplete,
  deleteItem,
  getItemById,
  renameItem,
}
