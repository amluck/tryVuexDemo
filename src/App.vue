<template>
  <div id="app">
    <!-- <img src="./assets/logo.png">
    <hello></hello> -->
    <counter></counter>
  </div>
</template>

<script>
// import Hello from './components/Hello'
 import Counter from './components/Counter'

export default {
  name: 'app',
  components: {
    // Hello
    Counter
  }
}
</script>
