import config from '../config/config.js'

const addListBook = async (userID, isbn, token) => {
  try {
    const response = await fetch(`${config.baseURL}/BookStore/v1/Books`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        userId: userID,
        collectionOfIsbns: [
          {
            isbn,
          },
        ],
      }),
    })
    return response
  } catch (error) {
    throw new Error(
      error.response || 'Ошибка  с ручкой авторизации пользователя',
    )
  }
}

const replaceIsbn = async (userID, isbn, newBookId, token) => {
  try {
    const response = await fetch(
      `${config.baseURL}/BookStore/v1/Books/${isbn}`,
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          userId: userID,
          isbn: newBookId,
        }),
      },
    )
    return response
  } catch (error) {
    throw new Error(
      error.response || 'Ошибка  с ручкой авторизации пользователя',
    )
  }
}

const bookInfo = async isbn => {
  try {
    const response = await fetch(
      `${config.baseURL}/BookStore/v1/Book?ISBN=${isbn}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      },
    )
    return response
  } catch (error) {
    throw new Error(error.response || 'Ошибка  с ручкой создания пользователя')
  }
}

const booksDelete = async (userID, token, newBookId) => {
  try {
    const response = await fetch(`${config.baseURL}/BookStore/v1/Book`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        isbn: newBookId,
        userId: userID,
      }),
    })
    return response
  } catch (error) {
    throw new Error(error.response || 'Ошибка  с ручкой удаления пользователя')
  }
}

export default {
  addListBook,
  replaceIsbn,
  bookInfo,
  booksDelete,
}
