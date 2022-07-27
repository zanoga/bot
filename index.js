const TelegramApi = require('node-telegram-bot-api')

const token = '5475182753:AAHPeEEHAevUXraZ9XHo54wsNeAvphE7O0s'

const bot = new TelegramApi(token, {polling: true})

const start = () => {
    bot.setMyCommands([
        {command: '/start', description: 'Вітання від бота та почтаок роботи.'},
        {command: '/info', description:'Інформація щодо використання бота та можливості.'}
    ])
    
    bot.on('message', async msg => {
        const text = msg.text
        const chatId = msg.chat.id
    
        if (text === '/start') {
            return await bot.sendMessage(chatId, `Вітаю Вас в ТелеграмБоті Енергодарського спротиву окупантам ​💙💛​. \nЗа допомогою цього боту ви зможете допомогти ЗСУ тим чином наблизити нашу перемогу. \nСлава Україні. Слава ЗСУ! 🇺🇦` )
        }
    
        if (text === '/info') {
           return await bot.sendMessage(chatId, `Чим саме Ви можете допомогти?`)
        }
        console.log(msg.chat.id, msg.text)
        bot.sendMessage('526477482',  `Написав: ${msg.chat.first_name} \n${msg.text}`)
       // return bot.sendMessage(chatId, 'Вибач, я тебе не зрозумів. Спробуй ще раз!')
        
    })
}

start()