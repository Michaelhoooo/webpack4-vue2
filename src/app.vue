
<template>
  <div id="app">
    hello world
    <img
      src="../public/img/2018.png"
      alt=""
    >
    <hello-world />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld/index.vue'
export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>


