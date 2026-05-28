const mineflayer = require('mineflayer')
const http = require('http')
http.createServer((req, res) => {
  res.write('NEXUS is alive! 🔥')
  res.end()
}).listen(3000)
function createBot() {
  const bot = mineflayer.createBot({
    host: 'SMPHUB.aternos.me',
    port: 62932,
    username: 'NEXUS',
    version: '1.20.1',
    auth: 'offline'
  })
  bot.on('spawn', () => {
    console.log('NEXUS is online! 🔥')
    setInterval(() => {
      bot.setControlState('jump', true)
      setTimeout(() => {
        bot.setControlState('jump', false)
      }, 500)
    }, 30000)
  })
  bot.on('kicked', (reason) => {
    console.log('Bot got kicked:', reason)
    setTimeout(createBot, 60000)
  })
  bot.on('error', (err) => {
    console.log('Error:', err)
    setTimeout(createBot, 60000)
  })
  bot.on('end', () => {
    console.log('Bot disconnected, reconnecting...')
    setTimeout(createBot, 60000)
  })
}
createBot()
