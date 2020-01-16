<template>
  <div class="chat">
    <h6 id="date-chat">{{preChatInfo.dateChat}}</h6>
    <div class="message-block" v-for="(message, index) in messages" :key="index">
      <div 
        class="message" 
        :class="{'message-send':message.received,
                'first-message':firstMessage(index),
                'last-message':lastMessage(index)
                

        }"
        
      >
        <p v-html="message.message"></p>
        <span>{{message.time}}</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props:{
    preChatInfo:Object,
    messages:Array
  },
  methods: {
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
#date-chat {
    color: white;
    background-color: #16212A;
    background-color: rgb(21, 34, 43, 0.5);
    padding: 0 20px;
    font-size: 43px;
    text-align: center;
    position: fixed; 
    border-radius: 50px;
    left: 12%;
    margin-left: -90px;
    z-index: 1;
}
  .chat {
    overflow: scroll;
    height: 2453px;
    padding: 270px 12px 8px 21px;
    font-family: 'San-Francisco-Light';
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