<template>
  <div class="cashback-timer__container q-py-md q-mx-auto row">
    <div class="col flex items-center">
      <div class="q-pa-sm">
        <span class="text-subtitle1 text-demibold text-secondary"> 1% cashback on debit card </span>
        <p>You get 1% cashback on your next 5 debit card payments. Hurry, the offer expires soon!</p>
      </div>
    </div>
    <div class="col-4 flex items-center q-md-sm">
      <q-circular-progress
        show-value
        v-bind:value=calculatePercentage()
        size="5rem"
        color="secondary"
        track-color="#01D16726"
        class="q-mx-auto"
        thickness="0.25"
        font-size="1rem"
      >
        <span class="text-subtitle text-demibold">
        {{remainingPeriod}}
        </span>
        <span class="text-tiny">
        days left
        </span>
      </q-circular-progress>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
var numeral = require("numeral");

Vue.filter("formatNumber", function (value) {
  return numeral(value).format("0,0"); // displaying other groupings/separators is possible, look at the docs
});

export default {
  name: 'CashbackTimer',
  props: {
    totalPeriod: {
      type: Number,
      default: 10
    },
    remainingPeriod: {
      type: Number,
      default: 3
    },
  },
  methods:{
  calculatePercentage: function(){
    return (this.remainingPeriod/this.totalPeriod)*100
  }
  },
}
</script>
