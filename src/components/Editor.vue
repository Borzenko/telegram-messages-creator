/* eslint-disable max-len */
<template>
  <div class="editor">
    <div style="width:36%;">
    <iphone
    :isEdit="isEdit"
    />
    </div>
    <form action="">

      <label for="time1"> Время</label>
      <input
        v-model="headerInfo.time"
        id ="time1"
        type="text"
      >

      <label for="connect"> Состояние сети</label>
        <select id="connect" v-model="headerInfo.connection">
          <option disabled value="">Выберите колличество полосок сети</option>
          <option value = "1">4 Полоски</option>
          <option value = "2">3 Полоски</option>
          <option value = "3">2 Полоски</option>
        </select>

      <label for="Ethernet"> Интернет соединение</label>
        <select id="Ethernet" v-model="headerInfo.ethernet">
          <option disabled value="">Выберите интернет соединение</option>
          <option value = "1">Wi-Fi</option>
          <option value = "2">LTE</option>
          <option value = "3">3G</option>
        </select>

        <label for="batter"> Состояние баттареи</label>
        <select id="batter" v-model="headerInfo.battery">
          <option disabled value="">Выберите % заряда батареи </option>
          <option value="1">100%</option>
          <option value="2">80%</option>
          <option value="3">60%</option>
       <!--    <option value="4">50%</option> -->
          <option value="5">40%</option>
<!--           <option value="6">30%</option>
          <option value="7">20%</option>
          <option value="8">10%</option> -->
        </select>

      <label for="name"> Имя </label>
      <input v-model="headerInfo.name" id ="name" type="text">

      <label for="onlin"> Когда был в сети</label>
      <input v-model="headerInfo.status" id ="onlin" type="text">

      <label for="image"> Аватарка</label>
      <input v-model="headerInfo.avatar" id ="image" type="text">

      <label for="lastmsg"> Последнее сообщение</label>
      <input v-model="headerInfo.dateChat" id ="lastmsg" type="text">

      <label for="edit"> Режим редактирования</label>
      <input id="edit" type="checkbox" v-model="isEdit">
    </form>
    <div class ="infoUse">
      <h2> Инструкции по использованию приложения</h2>
        <div style="position:relative;">
          <h5>1) Как добавить сообщение</h5>
          <button class="showInfoButton" @click="isOpen1 = !isOpen1">{{buttonText}}</button>
        </div>
        <div class="textInstuction" v-if="isOpen1">
          <p>
            Поставьте галочку в соседней форме "РЕЖИМ РЕДАКТИРОВАНИЯ".
            Чтобы добавить сообщение проскрольте чат вниз и нажмите на кнопку "+", внизу появиться
            форма где: <br/>
            <span>Сообщение</span> - Тут вводить текст сообщения <br/>
            <span>Картинка</span> - Если она есть вставьте ссылку на нее (пример ссылки c картинкой <a href="https://gohtml.ru/images/news/151--15-10-03--21-21-00.jpg">https://gohtml.ru/images/news/151--15-10-03--21-21-00.jpg </a>) <br/>
            <span>Время</span> - Введите время такого формата ,например 12:20 <br/>
            <span>Сообщение полученно ?</span> - Выберите, слева или справа
              будет отображенно сообщение <br/>
            <span>Отправить</span> - Кнопка добавляет сообщение <br/>
            <span> ВАЖНО!</span> - Если в сообщении будет только картинка ,
            вам нужно заполнить поле "КАРТИНКА" и "ВРЕМЯ"
            и выбрать в поле "СООБЩЕНИЕ ПОЛУЧЕННО ?"=Полученно(Если в сообщении только
            картинка она должна быть слева.Если нужно чтобы была справа добавляйте текст к картинке)
            После таких картинок обязательно должно быть еще одно ТЕКСТОВОЕ СООБЩЕНИЕ<br/>
            <span>НЕ ПРАВИЛЬНАЯ КАРТИНКА </span> После нее нету сообщения <br/>
            <img src="../assets/screenshots/WrongScreen1.png" alt="" style="width:100%;">
            <span style="color:green !important">ПРАВИЛЬНАЯ </span> <br/>
            <img src="../assets/screenshots/TrueScreen1.png" style="width:100%;">
            <span>НЕ ПРАВИЛЬНАЯ КАРТИНКА</span> Эта картинка была "Отправлена" <br/>
            <img src="../assets/screenshots/WrongScreen2.png" alt="" style="width:100%;">
            <span style="color:green !important">ПРАВИЛЬНАЯ </span> Если нужно отправить картинку
            , добавляйте в это сообщение текст<br/>
            <img src="../assets/screenshots/TrueScreen2.png" style="width:100%;">
            <span>ОЧЕНЬ ВАЖНО !!!</span> -Сообщения сделаны не идеально, поэтому иногда текст может
            выглядить не правдоподобно (часто происходит когда сообщение имеет несколько строк),
            чтобы этого избежать в текст можно добавить &lt;br/&gt;  - он перенесет часть
            текста не следующую строку (такие переносы есть ниже)
            ЧТОБЫ ПЕРЕНЕСТИ НА НОВУЮ СТРОКУ так же используйте &lt;br/&gt; <br/>
            <span>НЕ ПРАВИЛЬНОЕ СООБЩЕНИЕ БЕЗ &lt;br/&gt;</span> <br/>
            <img src="../assets/screenshots/withoutBr.png" alt="" style="width:100%;">
            <span style="color:green !important">ПРАВИЛЬНОЕ </span> <br/>
            <img src="../assets/screenshots/withBr.png" style="width:100%;">
    Чтобы добавить эмодзи перейдите на сайт и скопируйте нужный <a href="https://ru.piliapp.com/emoji/list/smileys-people/">https://ru.piliapp.com/emoji/list/smileys-people/ </a>
          </p>
      </div>
      <div style="position:relative;">
        <h5>2) Как редактировать сообщение</h5>
        <button class="showInfoButton" @click="isOpen2 = !isOpen2">{{buttonText2}}</button>
          <div class="textInstuction"  v-if="isOpen2">
          <p>
            Поставьте галочку в соседней форме "РЕЖИМ РЕДАКТИРОВАНИЯ".
            Чтобы удалить сообщение нажмите на выбранном сообщении "X" <br/>
        Чтобы переместить выбранное сообщение вверх нажмите "Up" .Чтобы переместить вниз "Down"<br/>
            Чтобы изменить сообщение нажмите на выбраном сообщении "Изменить".<br/>
            После того как вы нажали Изменить открылось сообщение где: <br/>
            <span>Сообщение</span> - Тут можно изменить текст сообщения <br/>
            <span>Время</span> - Введите время такого формата ,например 12:20 <br/>
            <span>Ок</span> - Кнопка сохраняет измененное сообщение <br/>
          </p>
          </div>
       </div>
       <div style="position:relative;">
        <h5>3) Как редактировать верхнюю часть чата</h5>
        <button class="showInfoButton1" @click="isOpen3 = !isOpen3">{{buttonText3}}</button>
          <div class="textInstuction"  v-if="isOpen3">
          <p>
            Справа от чата есть форма где: <br/>
            <span>Время</span> - Введите время такого формата ,например 12:20 <br/>
            <span>Состояние сети</span> - Выберите сколько полосок связи сейчас досупно <br/>
            <span>Интернет соединение</span> - Выберите к какому типу интернета подключены<br/>
            <span>Состояние баттареи</span> - Выберите % заряда батареи  <br/>
            <span>Имя</span> - Введите имя получателя сообщений <br/>
            <span>Когда был в сети</span> - Введите когда человек был последний раз в сети
            (прим. был(а) 3 минуты назад) или напишите "в сети"<br/>
            <span>Аватарка</span> - Вставьте ссылку с аватаркой получателя сообщений(прим.https://gohtml.ru/images/news/151--15-10-03--21-21-00.jpg)<br/>
            <span>Последнее сообщение</span> - Тут можно ввести когда была ваша последняя переписка.
           Оставьте это поле пустым ,если переписка была сегодня или если не нужен этот элемент<br/>
          </p>
          </div>
       </div>
       <div style="position:relative;">
        <h5><span style="color:red;">Внимание!! </span>Перед тем как делать скриншот ,
          уберите галочку в соседней форме с "Режим редактирования"</h5>
       </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Iphone from './Phone.vue';

export default {
  components: {
    Iphone,
  },
  data() {
    return {
      isEdit: true,
      isOpen1: false,
      isOpen2: false,
      isOpen3: false,
    };
  },
  computed: {
    ...mapGetters(['headerInfo']),
    buttonText() {
      if (!this.isOpen1) {
        return '+';
      }
      return '-';
    },
    buttonText2() {
      if (!this.isOpen2) {
        return '+';
      }
      return '-';
    },
    buttonText3() {
      if (!this.isOpen3) {
        return '+';
      }
      return '-';
    },
  },
};
</script>
<style >
.editor{
  display: flex;
}
.showInfoButton{
  position:absolute;
  top:15px;
  right:360px;
  font-size:50px;
  width:60px;
}
.showInfoButton1{
  position:absolute;
  top:15px;
  right:200px;
  font-size:50px;
  width:60px;
}
.infoUse{
  margin-left:50px;
  width:36%;
  padding:10px 50px;
  background-color: #18222B;
  font-size:50px;
}
.textInstuction{
  padding:30px;
  border-bottom: 1px solid #e5e5e5;
  background-color: rgb(17, 17, 17);
  border-radius:40px;
}
.textInstuction a{
  text-decoration: none;
  color:royalblue;
}
.infoUse h2{
  font-size: 60px;
  color:royalblue;
  text-align: center;
}
.infoUse h5{
  font-size:60px;
}
.infoUse p{
  font-size: 48px;
}
.infoUse p span{
  color:red;
}
 form{
   height: 2220px;
    text-align: center;
    padding:70px 150px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #18222B;
  }
  label{
    font-size: 60px;
    color:white;
  }
  form input[type="text"],input[type="password"], select{
    outline: none;
    width: 850px;
    height:100px;
    font-size: 58px;
    margin-bottom: 25px;
    border-radius: 30px;
    padding-left: 10px;
  }

 input[type="checkbox"] {
    margin-top:50px;
    transform:scale(9.3);
    opacity:0.9;
    cursor:pointer;
  }
  .dropdownvisible {
    height: auto;
    width: auto;
}
</style>
