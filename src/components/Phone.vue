<template>
  <div class="iphone">
    <Header />
    <Chat
     :isEdit="isEdit"
    />
    <Footer />
  </div>
</template>

<script>
import Header from './Header.vue'
import Chat from './Chat.vue'
import Footer from './Footer.vue'
export default {
  components:{
    Header,
    Chat,
    Footer
  },
  props:{
    isEdit:Boolean
  }
}
</script>

<style>
.iphone{
    position: relative;
    margin-left:100px;
    background-color: #18222B;
    width: 1242px;
    height: 2688px;
    overflow: hidden;
}
</style>