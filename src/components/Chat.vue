/* eslint-disable max-len */
<template>
  <div class="chat">
    <h6 id="date-chat">
      {{headerInfo.dateChat}}
    </h6>


<!--  <dragable v-model="draggableMessages" group="people" @start="drag=true" @end="drag=false"> -->
    <div
      class="message-block"
      v-for="(message, index) in messages"
      :key="index"
    >
      <div
        style="position:relative;align-items:flex-start;"
        class="message"
        :class="{'message-send':messageReiceved(message),
                'first-message':firstMessage(index),
                'last-message':lastMessage(index, message)
                }"
      >
      <button
      class="UpBlock"
      :class="{'show':!isEdit}"
      @click="pushhUp(index)"
      >
        Up
      </button>
      <button
      class="downBlock"
      :class="{'show':!isEdit}"
      @click="pushhDown(index)"
      >
        Down
      </button>
      <button
          @click="editMode(message, index)"
          class="edit"
          :class="{'show':!isEdit}"
        >
        изменить
        </button>
        <button
          @click="deleteMess(index)"
          class="delete"
          :class="{'show':!isEdit}"
        >
        X
        </button>
        <div
          v-if="message.img"
          style="position:relative;"
          :class="{'padding-none': !message.message}"
          class="image-b"
         >
        <img
          :src="message.img"
          style="max-height: 701px;width: auto;margin: 0 auto;display: block;"
         >
        <div
          v-if="message.img"
          :style="{ backgroundImage: 'url( ' + message.img + ') ' }"
          style="position:absolute; top:0;left:0;" class="blur-image"
        >
        </div>
        <div
          v-if="message.img"
          class="ImageMessage"
          >
          <img style="height:100%;width:auto;max-width:100%;"
          :src="message.img"
        >
        <div v-show="!message.message">
          <span
              class="TimeImage"
              v-show="!message.edit"
              v-if="message.received"
          >
            {{message.time}}
            <!-- <img src="../assets/images/check.jpg"> -->
          </span>
          <span class="TimeImage" v-else>
            {{message.time}}
          </span>
        </div>
        </div>
        </div>

        <div
          :ref="'message_' + index"
          :style="getMessageStyle(index, message)"
          class="message-padding"
          :class="{'padding-none' : !message.message }"
        >

        <p
          v-show="!message.edit"
          v-html="message.message">
        </p>
        <div v-show="message.edit">
          <textarea
          @focus="mixin_autoResize_resize"
            class="text-area"
            :ref="'text_item_' + index"
            :class="{'colorMessage':!message.received}"
            name="textarea"
            v-model="message.message"
          />
          <input
            class="time-input"
            :class="{'colorMessage':!message.received}"
            v-model="message.time"
            type="text"
          />
          <button
            class="saveMessage"
            @click="saveItemMessage(message)"
          >
          OK
          </button>
        </div>
        <div v-show="message.time">
          <span
              v-show="!message.edit"
              v-if="message.received"
          >
            {{message.time}}
            <img src="../assets/images/check.jpg">
          </span>
          <span v-else>
            {{message.time}}
          </span>
        </div>
      </div>

      </div>
    </div>
   <!--  </draggable> -->
    <button
      :class="{'show':!isEdit}"
      class="add"
      @click="showAdd()"
    >
      {{buttonText}}
    </button>
      <form @submit.prevent="submit" v-if="isEdit && !show">

        <label for="message13"> Сообщение </label>
        <input  id ="message13" type="text" v-model="newMessage.message">
        <label for="image"> Картинка </label>
        <input  id ="image" type="text" v-model="newMessage.img">
        <label for="time13"> Время </label>
        <input  id ="time13" type="text" v-model="newMessage.time">

        <label for="sendOrRecieved"> Сообщение полученно ?</label>
          <select id="sendOrRecieved" v-model="newMessage.isRecieved">
            <option value=false>Полученно</option>
            <option value=true>Отправленно</option>
          </select>
        <button class="addMessage" type ="submit">Отправить</button>
      </form>
  </div>
</template>
<script>
import { mapGetters, mapMutations } from 'vuex';
/* import draggable from 'vuedraggable' */
export default {
  /*  components: {
        draggable
        }, */
  data() {
    return {
      show: true,
      /*  draggableMessages: [], */
      newMessage:
      {
        message: '',
        time: '',
        isRecieved: false,
        img: '',
      },
    };
  },
  /*   watch: {
    draggableMessages() {
      // eslint-disable-next-line
      console.log(this.draggableMessages)
    }
  }, */
  props:
  {
    isEdit: Boolean,
  },
  computed: {
    ...mapGetters(['messages', 'headerInfo']),
    buttonText() {
      if (this.show) {
        return '+';
      }
      return '-';
    },
  },
  mounted() {
    /*  this.draggableMessages = [...this.messages]; */
    this.$nextTick(() => {
      this.$el.setAttribute('style', 'height', `${this.$el.scrollHeight}px`);
    });
  },
  methods: {
    ...mapMutations(['deleteMessage']),
    deleteMess(index) {
      this.deleteMessage(index);
    },
    ...mapMutations(['pushUp']),
    pushhUp(index) {
      this.pushUp(index);
    },
    ...mapMutations(['pushDown']),
    pushhDown(index) {
      this.pushDown(index);
    },
    getMessageStyle(index, message) {
      setTimeout(() => {
        // eslint-disable-next-line prefer-template
        this.$refs['message_' + index][0].removeAttribute('style');
        if (message.received) {
          if (this.$refs[`message_${index}`][0].clientHeight <= 200) {
            this.$refs[`message_${index}`][0].style.paddingRight = '178px';
          }
        }
        if (!message.received) {
          if (this.$refs[`message_${index}`][0].clientHeight <= 100) {
            this.$refs[`message_${index}`][0].style.paddingRight = '146px';
          }
        }
        if (this.$refs[`message_${index}`][0].clientWidth >= 1038 && this.$refs[`message_${index}`][0].clientHeight >= 100) {
          this.$refs[`message_${index}`][0].style.paddingBottom = '56px';
          this.$refs[`message_${index}`][0].style.paddingRight = '25px';
        }
        if (message.edit) {
          this.$refs[`message_${index}`][0].style.paddingRight = '25px';
          this.$refs[`message_${index}`][0].style.paddingBottom = '15px';
        }
      }, 1);
    },
    mixin_autoResize_resize(event) {
      const ivent = event;
      ivent.target.style.height = 'auto';
      ivent.target.style.height = `${ivent.target.scrollHeight}px`;
    },
    editMode(message, index) {
      this.$set(message, 'edit', true);
      this.$nextTick(() => {
        this.$refs[`text_item_${index}`][0].focus();
      });
    },
    saveItemMessage(message) {
      // eslint-disable-next-line no-param-reassign
      message.edit = false;
    },
    messageReiceved(message) {
      if (message.received) {
        return true;
      }
      return false;
    },
    ...mapMutations(['addMessage']),
    submit() {
      this.addMessage({
        message: this.newMessage.message,
        time: this.newMessage.time,
        received: this.newMessage.isRecieved,
        img: this.newMessage.img,

      });
      // eslint-disable-next-line no-multi-assign
      this.newMessage.message = this.newMessage.time = this.newMessage.img = '';
    },
    showAdd() {
      this.show = !this.show;
    },
    // eslint-disable-next-line consistent-return
    firstMessage(index) {
      if (index === 0) {
        return true;
      }
      if (this.messages[index - 1]) {
        if (this.messages[index].received !== this.messages[index - 1].received) {
          return true;
        }
      }
    },
    scrollToTop() {
      window.scrollTo(0, 0);
    },
    // eslint-disable-next-line consistent-return
    lastMessage(index, message) {
      if (message.message) {
        if (this.messages[index + 1]) {
          if (this.messages[index].received !== this.messages[index + 1].received) {
            return true;
          }
        } else {
          return true;
        }
      }
    },
  },
};
</script>

<style >
.TimeImage{
    color: white !important;
    background-color: rgb(21, 34, 43, 0.5);
    padding: 2px 22px;
    font-size: 33px;
    text-align: center;
    border-radius: 50px;
    left: 72%;
    z-index: 1;
}
.downBlock{
  z-index: 3;
      cursor: pointer;
    outline: none;
    border-radius: 30px;
    position: absolute;
    bottom: 0px;
    font-size: 29px;
    right: 50%;
}
.padding-none{
  padding:0 !important;
  border-radius: 45px 45px 25px 26px !important;
}
.blur-image{
  position: relative;
  z-index: 1;
  border-radius: 18px 40px 0 0;

  /* Add the blur effect */
  filter: blur(8px);
  -webkit-filter: blur(8px);

  /* Full height */
  height:100%;
  width:100%;
  /* Center and scale the image nicely */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  overflow: hidden;
}
.image-b{
  width: 100%;
  overflow: hidden;
  border-radius:18px 40px 0 0 ;
}
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
.UpBlock{
  z-index: 3;
      cursor: pointer;
    outline: none;
    border-radius: 30px;
    position: absolute;
    top: -5px;
    font-size: 29px;
    right: 50%;
}
textarea{
  resize: none;
}
.ImageMessage{
  position:absolute;
  z-index:1;
  top:0;
  right:0%;
  left:0;
  text-align:center;
  width:100%;
  height:100%;
}
.text-area{
  font-family: 'San-Francisco-Light';
  border:none;
  color:white;
  background-color: #477397;
  width:800px;
  font-size: 51px;
  font-weight:normal;
  margin-bottom: 25px;
  border-radius: 30px;
  padding-left: 10px;
  outline:none;
}
.time-input{
  font-family: 'San-Francisco-Light';
  border:none;
  color:white;
  background-color: #477397;
  width:800px;
  height: 100px;
  font-size: 35px;
  margin-bottom: 25px;
  border-radius: 30px;
  padding-left: 10px;
  outline:none;
}
.colorMessage{
  background-color: #20303F !important;
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
    left: 50%;
    margin-left: -90px;
    z-index: 20;
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
    padding: 0 20px;
    padding-left: 0px;
}
.message span {
    position: absolute;
    right: 32px;
    bottom: 8px;
    color: #6D7D8C;
    font-size: 35px;
    /*  margin-left: 24px; */
    letter-spacing: 0;
    /* margin-bottom: -12px !important; */
}
.delete{
  z-index: 3;
    cursor: pointer;
    outline: none;
    border-radius:30px;
    position: absolute;
    top: 10px;
    font-size:29px;
    left: -1px;
}
.edit{
    z-index: 3;
    cursor: pointer;
    outline: none;
    border-radius:30px;
    position: absolute;
    top: 5px;
    font-size:29px;
    right: 0;
}
.saveMessage{
  z-index: 100;
    cursor: pointer;
    outline: none;
    border-radius:30px;
    position: absolute;
    top:184px;
    right: 40px;
    padding:15px;
    width: 140px;
    font-size:50px;

}
.add{
  width: 80px;
  height: 80px;
  font-size: 60px;
}
.message span img {
    width: 44px;
    margin-bottom: -3px;
}
.message {
    margin-top: 2px;
    position: relative;
    display: inline-flex;
    flex-direction: row;
    align-items: flex-end;
    color: #F7FAFB;
    font-size: 51px;
    /* padding-right: 15; bilo tak*/
    max-width: 1040px;
    margin-bottom: 8px;
    line-height: 1.4;
    letter-spacing: 1.1px;
    border-radius: 18px 40px 40px 16px;
    background-color: #20303F;
        flex-direction: column;
}
.message-padding{

    padding: 14px 26px 15px 36px;
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
    /* padding-top: 13px !important; */
    float: right;
    /* ackground-color: #3B6A96; */
    background-color: #477397;
    margin-bottom: 8px;
    border-radius: 45px 20px 20px 51px;
}
.message-send p{
  margin-right:10px;
}
.message-send span {
    /* color: #85B0CF; */
    color: #80A2C2;
    right: 20px !important;
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
