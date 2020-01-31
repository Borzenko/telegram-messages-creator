<template>
  <div class="header">
    <div class="mobile-icons">
      <span id="time">
        {{headerInfo.time}}
      </span>
      <ul>
          <li>
              <img id="connection" :src="getImageConnection" style="width: 77px;" alt="">
          </li>
          <li>
              <img id="ethernet" :src="getImageEthernet" style="width: 69px;" alt="">
          </li>
          <li>
              <img id="battery" :src="getImageBattery"  style="width: 96px; margin-top:-3px;" >
          </li>
      </ul>
    </div>
      <div class="chat-title">
          <div class="back-to-chats">
              <img src="../assets/images/strela.jpg" alt="" class="back-toChat">
              <span style="vertical-align: top;letter-spacing: -1px;margin-left:7px;">Чаты</span>
          </div>
          <div class="chat-autor">
              <h3 id="name">
                {{headerInfo.name}}
              </h3>
              <span
              class="status"
              :class="{'online':isOnline()}"
              >
              {{headerInfo.status}}
              </span>
          </div>
          <div class="photo-autor">
            <img id="avatar" alt="" :src ="headerInfo.avatar">
          </div>
      </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import battery100 from '../assets/images/battery100.jpg';
import battery81 from '../assets/images/battery81.jpg';
import battery60 from '../assets/images/battery60.jpg';
import battery50 from '../assets/images/battery50.jpg';
import battery40 from '../assets/images/battery40.jpg';
import battery30 from '../assets/images/battery30.jpg';
import battery20 from '../assets/images/battery20.jpg';
import connection2 from '../assets/images/connection2.jpg';
import connection3 from '../assets/images/connection3.jpg';
import connection4 from '../assets/images/connection4.jpg';
import wifi from '../assets/images/wifi.jpg';
import LTE from '../assets/images/LTE.jpg';
import ThreG from '../assets/images/3G.jpg';

export default {
  computed: {
    ...mapGetters(['headerInfo']),
    getImageEthernet() {
      const ethernetImages = {
        1: wifi,
        2: LTE,
        3: ThreG,
      };

      return ethernetImages[this.headerInfo.ethernet] || wifi;
    },
    getImageBattery() {
      const batteryImages = {
        1: battery100,
        2: battery81,
        3: battery60,
        4: battery50,
        5: battery40,
        6: battery30,
        7: battery20,
      };
      return batteryImages[this.headerInfo.battery] || battery100;
    },
    getImageConnection() {
      const connectionImages = {
        1: connection4,
        2: connection3,
        3: connection2,
      };
      return connectionImages[this.headerInfo.connection] || connection4;
    },
  },
  methods: {
    // eslint-disable-next-line consistent-return
    isOnline() {
      if (this.headerInfo.status === 'в сети') {
        return true;
      }
    },
  },
};
</script>

<style >
  .header{
    overflow: hidden;
    z-index: 14;
/*     top:0; */
    background-color: #203040;
    height: 264px;
    width: 1242px;
    position: fixed;
    padding-left: 20px;
    border-bottom: 1px solid rgb(52, 66, 83)
  }

.mobile-icons {
    color: white;
    padding-top: 28px;
    font-weight: 200;
    display: flex;
    height: 50px;
}
.online {
    color: rgb(58, 158, 230) !important;
}
.status{
    color:#737D88;
    font-size: 39px;
    line-height: 0.8;
}
.back-toChat{
  margin-right: -4px;
  width: 57px;
  margin-left:-7px;
}
ul {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 100%;
    margin: 0;
    padding: 0;
    padding-top: 51px;
    padding-right: 60px;
    list-style: none;
    margin-top: -12px;
}

li {
    font-size: 20px;
    display: inline-block;
}

.chat-title {
    margin-top: 79px;
    padding-left: 5px;
    align-items: center;
    justify-content: space-between;
    color: white;
    display: flex;
    flex-direction: row;
}

.back-to-chats {
    margin-top: 18px;
    position: relative;
    font-size: 52px;
    color: rgb(58, 158, 230);
}
.chat-autor {
    margin-top: -17px;
    margin-left: -72px;
    text-align: center;
}

.chat-autor h3 {
    font-weight: 200;
    font-size: 50px;
    letter-spacing: 0;
}


.photo-autor {
    padding-right: 20px;
    padding-top: 10px;
    border-radius: 50%;
}

#operator {
    margin-right: 9px;
    font-size: 24px;
    font-family: 'San-Francisco-Light';
    margin-left: 4px;
    letter-spacing: 0.9px;
}

#time {
    font-size: 48px;
    font-family: 'San-Francisco';
    margin-left: 92px;
}

#avatar {
    border-radius: 50%;
    width: 110px;
    height: 110px;
}


</style>
