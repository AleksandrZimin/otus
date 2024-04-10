import config from '../config/config.js'

const sendMessage = async message => {
  const chatId = '-1002124585353'
  await fetch(`https://api.telegram.org/bot${config.token}/sendMessage`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      chat_id: chatId,
      text: message,
    }),
  })
}

export default {
  sendMessage,
}
