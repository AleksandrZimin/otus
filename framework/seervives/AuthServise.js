import config from '../config/config.js'

const generateToken = async (userName, password) => {
  try {
    const response = await fetch(`${config.baseURL}/Account/v1/GenerateToken`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        userName,
        password,
      }),
    })
    return response
  } catch (error) {
    throw new Error(error.response || 'токена')
  }
}

const authorized = async (userName, password, token) => {
  try {
    const response = await fetch(`${config.baseURL}/Account/v1/Authorized`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        userName,
        password,
      }),
    })
    return response
  } catch (error) {
    throw new Error(
      error.response || 'Ошибка  с ручкой авторизации пользователя',
    )
  }
}

const сreateUser = async (userName, password) => {
  try {
    const response = await fetch(`${config.baseURL}/Account/v1/User`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        userName,
        password,
      }),
    })
    return response
  } catch (error) {
    throw new Error(error.response || 'Ошибка  с ручкой создания пользователя')
  }
}

const userInfo = async (userID, token) => {
  try {
    const response = await fetch(
      `${config.baseURL}/Account/v1/User/${userID}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      },
    )
    return response
  } catch (error) {
    throw new Error(error.response || 'Ошибка  с ручкой создания пользователя')
  }
}

const userDelete = async (userID, token) => {
  try {
    const response = await fetch(
      `${config.baseURL}/Account/v1/User/${userID}`,
      {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      },
    )
    return response
  } catch (error) {
    throw new Error(error.response || 'Ошибка  с ручкой удаления пользователя')
  }
}

export default {
  authorized,
  generateToken,
  сreateUser,
  userInfo,
  userDelete,
}
