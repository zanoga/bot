const TelegramApi = require('node-telegram-bot-api')

const token = ''

const bot = new TelegramApi(token, {polling: true})

const start = () => {
    bot.setMyCommands([
        {command: '/start', description: 'Вітання від бота та початок роботи.'},
        {command: '/info', description:'Інформація щодо використання бота та можливості.'}
    ])
    
    bot.on('message', async msg => {
        const text = msg.text
        const chatId = msg.chat.id
    
        if (text === '/start') {
            return await bot.sendMessage(chatId, `Вітаю Вас в ТелеграмБоті Енергодарського спротиву окупантам ​💙💛​. \nЗа допомогою цього боту ви зможете допомогти ЗСУ тим чином наблизити нашу перемогу. \nСлава Україні. Слава ЗСУ! 🇺🇦` )
        }
    
        if (text === '/info') {
           return await bot.sendMessage(chatId, `Чим саме Ви можете допомогти? \nВ першу чергу нас цікавлять координати окупаційних військ та розміщення важкої техніки(Танки, Гради, Урагани тощо) \n---------------------- \nПриклад того як краще подавати інформацію \nКоординати: \n47.4062065308222, 34.64233790385897 \nКороткий опис: \nВорожа техніка: Гради 2 шт \nУрали з БК - кількість невідома \nГлушилки 1 шт \n Особовий склад до 20 осіб \n---------------- \nЯкщо Вам відомі вогньові позиції окупанів з яких вони обстрілюють Нікополь, Магранець та інші населені пункти то теж повідомляйте. Краще за все, звичайно, це місця дислокування їх вдень (посадки, ангари тощо.). \nВсе буде Україна!​💙💛​.`)
        }
        //console.log(msg.chat.id, msg.text)
        bot.sendMessage('526477482',  `Написав: ${msg.chat.first_name} \n${msg.text}`)
       // return bot.sendMessage(chatId, 'Вибач, я тебе не зрозумів. Спробуй ще раз!')
        let url = `https://api.telegram.org/bot${token}/getFile?file_id=${msg.photo.file_id}`;
       console.log(msg.photo.file_id)
        
    })
}

start()
