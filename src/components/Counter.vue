<template>
  <div>
    <div>{{$store.state.count}}</div>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incIfOdd">incIfOdd</button>
    <button @click="incrAsync">incrAsync</button>
  </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'counter',
  computed: {
    ...mapGetters({
      count:'count'
    })
  },
  methods: mapActions([
    'increment',
    'decrement',
    'incIfOdd',
    'incrAsync'
  ])
}
</script>
