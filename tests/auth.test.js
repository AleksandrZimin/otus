/* eslint-disable no-undef */
import config from '../framework/config/config'
import books from '../framework/fixtures/books'
import AuthServise from '../framework/seervives/AuthServise'
import BooksService from '../framework/seervives/BooksService'
import TelegramService from '../framework/seervives/TelegramService'

let userID = ''
let token = ''
const bookId = books[0].isbn
const newBookId = books[1].isbn

describe('Авторизация', () => {
  test('Создание пользователя с ошибкой, пароль не подходит', async () => {
    const response = await AuthServise.сreateUser('test', 'wrong_password')
    const data = await response.json()
    expect(response.status).toBe(400)
    expect(data.code).toBe('1300')
    expect(data.message).toBe(
      "Passwords must have at least one non alphanumeric character, one digit ('0'-'9'), one uppercase ('A'-'Z'), one lowercase ('a'-'z'), one special character and Password must be eight characters or longer.",
    )
  })
  test('Создание пользователя', async () => {
    const response = await AuthServise.сreateUser(
      config.username,
      config.password,
    )
    const data = await response.json()
    expect(response.status).toBe(201)
    expect(data.userID).not.toBe('')
    userID = data.userID
    expect(data.username).toBe(config.username)
  })
  test('Повторное создание пользователя', async () => {
    const response = await AuthServise.сreateUser(
      config.username,
      config.password,
    )
    const data = await response.json()
    expect(response.status).toBe(406)
    expect(data.code).toBe('1204')
    expect(data.message).toBe('User exists!')
  })

  test('Генерация токена', async () => {
    const response = await AuthServise.generateToken(
      config.username,
      config.password,
    )
    const data = await response.json()
    token = data.token
    expect(response.status).toBe(200)
    expect(data.token).not.toBe('')
    expect(data.status).toBe('Success')
    expect(data.result).toBe('User authorized successfully.')
  })

  test('Авторизация пользователя', async () => {
    const response = await AuthServise.authorized(
      config.username,
      config.password,
      token,
    )
    expect(response.status).toBe(200)
  })

  test('Получение информации о пользователе', async () => {
    const response = await AuthServise.userInfo(userID, token)
    const data = await response.json()
    expect(response.status).toBe(200)
    expect(data.userId).toBe(userID)
    expect(data.username).toBe(config.username)
    expect(data.books).toEqual([])
  })

  test('Добавление книги в список пользователя', async () => {
    const response = await BooksService.addListBook(userID, bookId, token)
    const data = await response.json()
    expect(response.status).toBe(201)
    expect(data.books[0].isbn).toBe(bookId)
  })

  test('Обновление книги', async () => {
    console.log(userID, bookId, newBookId)
    const response = await BooksService.replaceIsbn(
      userID,
      bookId,
      newBookId,
      token,
    )
    const data = await response.json()
    expect(response.status).toBe(200)
    expect(data.userId).toBe(userID)
    expect(data.username).toBe(config.username)
  })

  test('Получении информации о книге', async () => {
    const response = await BooksService.bookInfo(bookId)
    const data = await response.json()
    expect(response.status).toBe(200)
    expect(data.isbn).toBe(bookId)
  })

  test('Удаление книги', async () => {
    const response = await BooksService.booksDelete(userID, token, newBookId)
    expect(response.status).toBe(204)
  })

  test('Удаление пользователя', async () => {
    const response = await AuthServise.userDelete(userID, token)
    // const data = await response.json();
    expect(response.status).toBe(204)
  })

  test('Повтрорная авторизация пользолвателя после удаления', async () => {
    const response = await AuthServise.authorized(
      config.username,
      config.password,
      token,
    )
    const data = await response.json()
    expect(response.status).toBe(404)
    expect(data.code).toBe('1207')
    expect(data.message).toBe('User not found!')
    TelegramService.sendMessage('Автотест успешно пройден')
  })
})
