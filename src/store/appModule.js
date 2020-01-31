/* eslint-disable indent */
/* eslint-disable no-plusplus */
export default {
    state: {
        headerInfo: {
            time: '11:18', // Время в телефоне
            avatar: 'https://gohtml.ru/images/news/151--15-10-03--21-21-00.jpg', // аватарка в чате
            name: 'Василий Ставочник', // юзер в чате
            status: 'был(а) 3 минуты назад', // собеседник 'online/last seen 2'
            battery: 3, // Подставьте цифру , которая будет отображать % заряда батареи ,где:
            // 1--> 100%
            // 2--> 80%
            // 3--> 60%
            // 4--> 50%
            // 5--> 40%
            // 6--> 20%
            // 7--> 10%
            ethernet: 2, // Подставьте цифру, где:
            // 1--> Wi-fi
            // 2--> LTE
            // 3--> 3G
            connection: 2, // Подставьте цифру  полосок связи,где:
            // 1--> 4 полоски
            // 2--> 3 полоски
            // 3--> 2 полоски
            dateChat: 'Сегодня', // Напишите дату последней переписки (Сегодня/вчера/6января и тд)
            // ЧИТАТЬ ВНИМАТЕЛЬНО
            // Каждое сообщеё или получили (received: Отправленно/Полученно)
            // Сообщения, поэтому иногда текст может выгляпроисходит когда /
            // сообщение имеет  можно добавить </br> - он перенесет часть
            // текста не следующую строку (такие переносы есть ниже)
            // ЧТОБЫ ПЕРЕНЕСТИ НА НОВУЮ СТРОКУ так же используйте </br>
            // Чтобы добавить эмодзи перейдите на сайт и скопируйте нужный https://ru.piliapp.com/emoji/list/smileys-people/
        },
        messages: [{
                message: 'я сделал через звездочк',
                time: '15:42',
                edit: false,
                received: true,
            },
            {
                message: 'Посмотри мб что-то проебал',
                time: '15:53',
                edit: false,
                received: false,
            },
            {
                message: 'Короче в старом конфиге была команда',
                time: '16:12',
                edit: false,
                received: true,
            },
            {
                message: 'RewriteBase /',
                time: '16:12',
                edit: false,
                received: true,
            },
            {
                message: 'я ее удалил и стало нормально <br/> редиректить',
                time: '16:12',
                edit: false,
                received: true,
            },
            {
                message: 'Что эта команда делает ?',
                time: '16:12',
                edit: false,
                received: false,
            },
            {
                message: 'ярику показал но его смущает тот факт что мы не особо знает что это делает',
                time: '16:12',
                edit: false,
                received: true,
            },
            {
                message: 'она',
                time: '16:12',
                edit: false,
                received: true,
            },
            {
                message: 'короче',
                time: '16:12',
                edit: false,
                received: true,
            },
            {
                message: 'указывает путь',
                time: '16:12',
                edit: false,
                received: true,
            },
            {
                message: 'он просто дописывает',
                time: '16:12',
                edit: false,
                received: true,
            },
            {
                message: 'Если получившийся после преобразований запрос является относительным и отличается от исходного, RewriteBase восстановит его, сделав абсолютным. RewriteBase просто допишет себя к запросу слева.',
                time: '16:16',
                edit: false,
                received: true,
            },
            {
                message: 'И почему из-за него не работает ?',
                time: '16:16',
                edit: false,
                received: false,
            },
            {
                message: 'оно работает',
                time: '16:16',
                edit: false,
                received: true,
            },
            {
                img: 'https://gohtml.ru/images/news/151--15-10-03--21-21-00.jpg',
                message: 'Some text text text textSome text text text text textSome text Some text text text text textSome text text text text texttext text text text text',
                time: '16:16',
                edit: false,
                received: true,
            },
            {
                img: 'https://gohtml.ru/images/news/151--15-10-03--21-21-00.jpg',
                time: '20:20',
            },
        ],
    },
    actions: {},
    getters: {
        headerInfo(state) {
            return state.headerInfo;
        },
        messages(state) {
            return state.messages;
        },
    },
    mutations: {
        deleteMessage(state, i) {
            // eslint-disable-next-line
            console.log(i)
                // eslint-disable-next-line no-param-reassign
            state.messages = state.messages.filter((element, index) => index !== i);
            // eslint-disable-next-line
            console.log(state)
        },
        pushUp(state, i) {
            console.log(i);
            // eslint-disable-next-line no-param-reassign
            const f = state.messages.slice(0, ++i);
            const s = state.messages.slice(i);
            const r = f.splice(-2).reverse();
            // eslint-disable-next-line
            state.messages = f.concat(r).concat(s)
            return state.messages;
        },
        pushDown(state, i) {
            let down = i + 1;
            console.log(state.messages[i + 1]);
            // eslint-disable-next-line no-param-reassign
            const f = state.messages.slice(0, ++down);
            const s = state.messages.slice(down);
            const r = f.splice(-2).reverse();
            // eslint-disable-next-line
            state.messages = f.concat(r).concat(s)
            return state.messages;
        },
        addMessage(state, newMessage) {
            state.messages.push(newMessage);
            // eslint-disable-next-line
            console.log(state.messages)
        },
    },
    // eslint-disable-next-line eol-last
};