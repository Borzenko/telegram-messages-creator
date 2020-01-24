<template>
  <div class="editor">
    <div style="width:40%;">
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
          <option value="4">50%</option>
          <option value="5">40%</option>
          <option value="6">30%</option>
          <option value="7">20%</option>
          <option value="8">10%</option>
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
  </div>
</template>

<script>
import Iphone from './Phone.vue'
import {mapGetters} from 'vuex'
export default {
  components:{
    Iphone
  },
  data(){
    return{
      isEdit:true
    }
  },
  computed: {
    ...mapGetters(["headerInfo"])
  },
}
</script>
<style >
.editor{
  display: flex;
}
 form{
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