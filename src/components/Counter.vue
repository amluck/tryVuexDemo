<template>
  <div>
      <div>{{$store.state.count}}</div>
      <button @click="increment">+</button>
      <button @click="decrement">-</button>
  </div>
</template>
<script>
import { mapGetters,mapActions } from 'vuex'
export default {
  name:'counter',
//   computed:mapGetters({
//       count
//   }),
  methods:mapActions([
      'increment',
      'decrement'
  ])
}
</script>
