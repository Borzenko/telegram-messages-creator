<template>
  <div class="chat">
    <h6 id="date-chat">
      {{headerInfo.dateChat}}
    </h6>
    <div 
      class="message-block" 
      v-for="(message, index) in messages" 
      :key="index"
    >
      <div 
        class="message" 
        :ref="'message_' + index"
        :style="getMessageStyle(index)"
        :class="{'message-send':messageReiceved(message),
                'first-message':firstMessage(index),
                'last-message':lastMessage(index)
                }"
      >
        <button
          @click="deleteMess(index)"
          class="delete"
          :class="{'show':!isEdit}"
        >
        X
        </button>
        <p v-html="message.message"></p>
        <span v-if="message.received === 'Отправленно' ">
          {{message.time}} 
          <img src="../assets/images/check.jpg">
        </span>
        <span v-else> 
          {{message.time}} 
        </span>
      </div>
    </div>
    <button 
      :class="{'show':!isEdit}" 
      class="add" 
      @click="showAdd()"
    >
      {{buttonText}}
    </button>
      <form @submit.prevent="submit" :class ="{'show': show }">

        <label for="message13"> Сообщение </label>
        <input  id ="message13" type="text" v-model="newMessage.message">

        <label for="time13"> Время </label>
        <input  id ="time13" type="text" v-model="newMessage.time">

        <label for="sendOrRecieved"> Сообщение полученно ?</label>
          <select id="sendOrRecieved" v-model="newMessage.isRecieved">
            <option value= "Полученно">Полученно</option>
            <option value= "Отправленно" >Отправленно</option>
          </select>
          
        <button class="addMessage" type ="submit">Отправить</button>
      </form>
  </div>
</template>
<script>
import {mapGetters, mapMutations} from 'vuex'
export default {
  data(){
    return{
      show:true,

      newMessage:{
        message:'',
        time:'',
        isRecieved:''
      }
    }
  },
  props:{
    isEdit:Boolean
  },
    computed: {
      ...mapGetters(["messages","headerInfo"]),
      buttonText(){
        if(this.show) {
        return '+'
      }
      return '-' 
      }
    },
  methods: {
    ...mapMutations(["deleteMessage"]),
    deleteMess(index) {
      this.deleteMessage(index);
    },
    getMessageStyle(index) {
      setTimeout(() => {
        // eslint-disable-next-line
          console.log(index)
        // eslint-disable-next-line
            console.log(this.$refs[`message_` + index][0].clientHeight)
        if(this.$refs[`message_` + index][0].clientHeight < 100) {
          
          this.$refs[`message_` + index][0].style.paddingRight = '200px';
        }

      }, 1)
      // eslint-disable-next-line
      console.log(index)
    },
    messageReiceved(message){
      if (message.received === 'Отправленно'){
        return true
      } else {
        return false
      }
    },
    ...mapMutations(["addMessage"]),
    submit(){
      this.addMessage({
        message: this.newMessage.message,
        time: this.newMessage.time,
        received: this.newMessage.isRecieved
      });
      this.newMessage.message = this.newMessage.time ='';
    },
    showAdd(){
      
      this.show = !this.show
    },
    firstMessage(index){
      if(index == 0){
        return true
      }
      if(this.messages[index - 1]){
        if(this.messages[index].received != this.messages[index - 1].received){
          return true
        }
      }
    },
    lastMessage(index){
      if(this.messages[index + 1]){
        if (this.messages[index].received != this.messages[index + 1].received){
          return true
        }
      }else{
        return true
      }
    }
  },
}
</script>

<style >
.addMessage{
  cursor: pointer;
  outline: none;
    width: 450px;
    height:100px;
    font-size: 58px;
    margin-top:10px;
    border-radius: 30px;
    padding-left: 10px;
}
#date-chat {
    color: white;
    background-color: #16212A;
    background-color: rgb(21, 34, 43, 0.5);
    padding: 0 20px;
    font-size: 43px;
    text-align: center;
    position: absolute; 
    border-radius: 50px;
    left: 47%;
    margin-left: -90px;
    z-index: 1;
}
  .chat {
    overflow: scroll;
    height: 2453px;
    padding: 270px 12px 8px 21px;
    font-family: 'San-Francisco-Light';
}
.show{
  display: none;
}
.message-block {
    width: 100%;
    float: right;
    padding: 0 22px;
    padding-left: 0px;
}
.message span {
    position: absolute;
    right: 32px;
    bottom: 13px;
    color: #6D7D8C;
    font-size: 35px;
    /*  margin-left: 24px; */
    letter-spacing: 0;
    /* margin-bottom: -12px !important; */
}
.delete{
    cursor: pointer;
    outline: none;
    border-radius:30px;
    position: absolute;
    top: 10px;
    font-size:29px;
    left: -1px;
}
.add{
  width: 80px;
  height: 80px;
  font-size: 60px;
}
.message span img {
    width: 44px;
    margin-bottom: -3px;
    margin-left: 6px;
}
.message {
    margin-top: 2px;
    position: relative;
    display: inline-flex;
    flex-direction: row;
    align-items: flex-end;
    color: #F7FAFB;
    font-size: 51px;
    padding: 14px 26px 15px 36px;
    /* padding-right: 15; bilo tak*/
    max-width: 914px;
    margin-bottom: 8px;
    line-height: 1.4;
    letter-spacing: 1.1px;
    border-radius: 18px 40px 40px 16px;
    background-color: #20303F;
}
.first-message {
    margin-top: 7px;
    border-radius: 52px 56px 56px 13px;
}
.last-message {
    border-bottom-left-radius: 34px;
}
.message.last-message:before {
    content: '';
    background: url('../assets/images/comma2.jpg'), no-repeat;
    background-size: cover;
    position: absolute;
    height: 24px;
    bottom: 0px;
    left: -20px;
    width: 84px;
}
.message-send {
    padding-top: 9px !important;
    float: right;
    /* ackground-color: #3B6A96; */
    background-color: #477397;
    margin-bottom: 8px;
    border-radius: 45px 20px 20px 51px;
}
.message-send span {
    /* color: #85B0CF; */
    color: #80A2C2
}
.message-send.first-message {
    margin-top: 10px;
    border-top-right-radius: 57px;
    /* border-radius: 36px 34px 14px 34px; */
}
.message-send.last-message {
    /* border-bottom-right-radius: 8px; */
    border-bottom-right-radius: 37px;
}
.message-send.last-message:before {
    content: '';
    background: url('../assets/images/hvostik-pravo1.jpg'), no-repeat;
    position: absolute;
    background-size: cover;
    height: 30px;
    bottom: 0px;
    right: -21px;
    left:auto;
    width: 89px;
}


</style>