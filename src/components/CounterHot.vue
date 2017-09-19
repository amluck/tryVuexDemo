<template>
  <div>
      <div>{{$store.state.count}}</div>
      <button @click="incr">+</button>
      <button @click="decr">-</button>
      <button @click="incIfOdd">incIfOdd</button>
      <button @click="incAsyn">incAsyn</button>
      <div>{{history}}</div>
  </div>
</template>
<script>
import { mapGetters,mapActions } from 'vuex'
export default {
  name:'counter-hot',
  computed:mapGetters({
    history:'recentHistroy'

  }),
  methods:mapActions([
    'incr',
    'decr',
    'incIfOdd',
    'incAsyn'
  ])
}
</script>
