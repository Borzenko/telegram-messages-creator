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
                message: 'я сделал через звездочк',
                time: '15:42',
                edit: false,
                received: true
            },
            {
                message: 'Посмотри мб что-то проебал',
                time: '15:53',
                edit: false,
                received: false
            },
            {
                message: 'Короче в старом конфиге была команда',
                time: '16:12',
                edit: false,
                received: true
            },
            {
                message: 'RewriteBase /',
                time: '16:12',
                edit: false,
                received: true
            },
            {
                message: 'я ее удалил и стало нормально <br/> редиректить',
                time: '16:12',
                edit: false,
                received: true
            },
            {
                message: 'Что эта команда делает ?',
                time: '16:12',
                edit: false,
                received: false
            },
            {
                message: 'ярику показал но его смущает тот факт что мы не особо знает что это делает',
                time: '16:12',
                edit: false,
                received: true
            },
            {
                message: 'она',
                time: '16:12',
                edit: false,
                received: true
            },
            {
                message: 'короче',
                time: '16:12',
                edit: false,
                received: true
            },
            {
                message: 'указывает путь',
                time: '16:12',
                edit: false,
                received: true
            },
            {
                message: 'он просто дописывает',
                time: '16:12',
                edit: false,
                received: true
            },
            {
                message: 'Если получившийся после преобразований запрос является относительным и отличается от исходного, RewriteBase восстановит его, сделав абсолютным. RewriteBase просто допишет себя к запросу слева.',
                time: '16:16',
                edit: false,
                received: true
            },
            {
                message: 'И почему из-за него не работает ?',
                time: '16:16',
                edit: false,
                received: false
            },
            {
                message: 'оно работает',
                time: '16:16',
                edit: false,
                received: true
            },
            {
                img: 'https://gohtml.ru/images/news/151--15-10-03--21-21-00.jpg',
                message: "Some text text text textSome text text text text textSome text Some text text text text textSome text text text text texttext text text text text",
                time: '16:16',
                edit: false,
                received: true
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
        pushUp(state, i) {
            // eslint-disable-next-line
            console.log(i)
            let f = state.messages.slice(0, ++i),
                s = state.messages.slice(i),
                r = f.splice(-2).reverse();
            // eslint-disable-next-line
            state.messages = f.concat(r).concat(s)
            return state.messages;
        },
        addMessage(state, newMessage) {
            state.messages.push(newMessage);
            // eslint-disable-next-line
            console.log(state.messages)
        }
    }
}