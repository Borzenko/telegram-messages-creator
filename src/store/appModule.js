export default {
    state: {
        headerInfo: {
            time: '11:18', // Время в телефоне
            avatar: 'https://gohtml.ru/images/news/151--15-10-03--21-21-00.jpg', // аватарка в чате
            name: 'Михаил Борзенко', // юзер в чате
            status: 'был(а) 3 минуты назад', //собеседник 'online/last seen 2'
            battery: 3, // Подставьте цифру , которая будет отображать % заряда батареи ,где:
            //1--> 100%
            //2--> 80%
            //3--> 60%
            //4--> 50%
            //5--> 40%
            //6--> 20%
            //7--> 10%
            ethernet: 2, //Подставьте цифру, которая будет отображать какой  доступ к интернету вы используете, где:
            //1--> Wi-fi
            //2--> LTE
            //3--> 3G
            connection: 2, //Подставьте цифру , которая будет отображать сколько активных полосок связи,где:
            //1--> 4 полоски
            //2--> 3 полоски
            //3--> 2 полоски
            dateChat: 'Сегодня', //Напишите дату последней переписки (Сегодня/вчера/6января и тд)
            // ЧИТАТЬ ВНИМАТЕЛЬНО
            // Каждое сообщение имеет текст, время а так же идентификатор, его отправили или получили (received: Отправленно/Полученно)
            // Сообщения сделаны не идеально, поэтому иногда текст может выглядить не правдоподобно (часто происходит когда /
            //сообщение имеет несколько строк), чтобы этого избежать в текст можно добавить </br> - он перенесет часть 
            // текста не следующую строку (такие переносы есть ниже)
            // ЧТОБЫ ПЕРЕНЕСТИ НА НОВУЮ СТРОКУ так же используйте </br>
            // Чтобы добавить эмодзи перейдите на сайт и скопируйте нужный https://ru.piliapp.com/emoji/list/smileys-people/
        },
        messages: [{
                message: 'Планируем 😀 выкатывать, пока воюем с nginx,gbababab babaababa bbabababa abadbabb ababababa banba',
                time: '16:25',
                received: 'Полученно'
            },
            {
                message: '2. 😀 Что нужно ?)',
                time: '16:15',
                received: 'Полученно'
            },
            {
                message: 'тут короче задача такая',
                time: '16:51',
                received: 'Отправленно'
            },
            {
                message: 'для экрана чата',
                time: '16:16',
                received: 'Отправленно'
            },
            {
                message: 'сорцы есть',
                time: '16:16',
                received: 'Отправленно'
            },
            {
                message: 'и пиксель-в-пиксель перенести ее на айос',
                time: '16:16',
                received: 'Отправленно'
            },
            {
                message: 'Ну у меня есть верстальщик',
                time: '16:16',
                received: 'Полученно'
            },
            {
                message: 'Но я не понял что точно <br> нужно',
                time: '16:16',
                received: 'Полученно'
            },
            {
                message: 'Теперь буду ставить только с</br>  вами!',
                time: '16:51',
                received: 'Полученно'
            },
            {
                message: 'Вы лучшие!',
                time: '16:51',
                received: 'Полученно'
            },
            {
                message: 'Привет, </br> Коэф зашел вообще отлично, спасибо!👍',
                time: '16:16',
                received: 'Полученно'
            },
            {
                message: 'Привет, </br> Коэф зашел вообще отлично, спасибо!👍',
                time: '16:16',
                received: 'Полученно'
            },
            {
                message: 'Привет, </br> Коэф зашел вообще отлично, спасибо!👍',
                time: '16:16',
                received: 'Полученно'
            },
            {
                message: 'Всегда пожалауйста!👌',
                time: '16:16',
                received: 'Отправленно'
            }
        ]
    },
    actions: {},
    getters: {
        headerInfo(state) {
            return state.headerInfo
        },
        messages(state) {
            return state.messages
        }
    },
    mutations: {
        deleteMessage(state, i) {
            // eslint-disable-next-line
            console.log(i)
            state.messages = state.messages.filter((element, index) => {
                    return index !== i
                })
                // eslint-disable-next-line
            console.log(state)
        },
        addMessage(state, newMessage) {
            state.messages.push(newMessage);
            // eslint-disable-next-line
            console.log(state.messages)
        }
    }
}