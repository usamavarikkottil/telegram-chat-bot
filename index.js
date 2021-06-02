const { Telegraf } = require('telegraf')

const BOT_TOKEN = "1811466883:AAFhQfe3ZoQI8D7oxCIZMDwHiaX9yzh4rRs";
const bot = new Telegraf(BOT_TOKEN)
bot.start((ctx) => ctx.reply('Welcome'))

bot.on('sticker', (ctx) => ctx.reply('👍'))
bot.hears('hi', (ctx) => ctx.reply(`Hey, ${ctx.message.from.first_name}`))
bot.hears('haha', (ctx) => ctx.reply('Hehe'))
bot.hears('hehe', (ctx) => ctx.reply('Huhu'))
bot.launch()

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))