const mineflayer = require('mineflayer')
const http = require('http')

http.createServer((req, res) => {
  res.write('DrippyBot is alive! 🔥')
  res.end()
}).listen(3000)

function createBot() {
  const bot = mineflayer.createBot({
    host: 'DevXDarshXRohit.aternos.me',
    port: 63478,
    username: 'DrippyBot',
    version: '1.20.1',
    auth: 'offline'
  })
  bot.on('spawn', () => {
    console.log('Drippy Bot is online! 🔥')
    setInterval(() => {
      bot.setControlState('jump', true)
      setTimeout(() => {
        bot.setControlState('jump', false)
      }, 500)
    }, 30000)
  })
  bot.on('kicked', (reason) => {
    console.log('Bot got kicked:', reason)
    setTimeout(createBot, 5000)
  })
  bot.on('error', (err) => {
    console.log('Error:', err)
    setTimeout(createBot, 5000)
  })
  bot.on('end', () => {
    console.log('Bot disconnected, reconnecting...')
    setTimeout(createBot, 5000)
  })
}
createBot()
