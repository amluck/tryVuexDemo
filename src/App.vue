<template>
  <div id="app">
    <!-- <img src="./assets/logo.png">
    <hello></hello> -->
    <!-- <counter></counter> -->
    <counter-hot></counter-hot>
  </div>
</template>

<script>
// import Hello from './components/Hello'
//  import Counter from './components/Counter'
 import CounterHot from './components/CounterHot'

export default {
  name: 'app',
  components: {
    // Hello
    // Counter
    CounterHot
  }
}
</script>
