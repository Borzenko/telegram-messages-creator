<template>
  <div id="app">
    <editor />
  </div>
</template>

<script>

import Editor from './components/Editor.vue';

export default {
  name: 'app',
  components: {
    Editor,
  },
};
</script>

<style>
 @font-face {
            font-family: 'San-Francisco';
            /* Гарнитура шрифта */
            src: local(San-Francisco), url(fonts/SFUIText-Regular.ttf);
            /* Для остальных браузеров */
        }
        @font-face {
            font-family: 'San-Francisco-Light';
            /* Гарнитура шрифта */
            src: local(San-Francisco-Light), url(fonts/SFUIText-Light.ttf);
            /* Для остальных браузеров */
        }
#app {

    margin-top: 0;
    font-family: 'San-Francisco', sans-serif;
    font-size: 15px;
    line-height: 1.6;
    color: #fff;
    zoom: 0.33;
}

*,
*:before,
*:after {
    box-sizing: border-box;
}

p {
    margin: 0;
    padding: 0;
    letter-spacing: 1.3px;
}

h1,
h2,
h3,
h4,
h5,
h6 {
    margin: 0;
}

</style>
