<template>
  <div>
    <div class="row justify-between text-subtitle2">
      <span>
        Available Balance
      </span>
      <span>
        <span class="text-secondary"> {{currency}}{{currentSpend}} </span>  <span class="text-grey"> | S${{limit}}</span>
      </span>
    </div>
    <q-linear-progress size="20px" color="secondary" id="spending-limit-progress" class="aspire-progressbar q-mt-sm" />
  </div>
</template>

<script>
import Vue from 'vue'
var numeral = require("numeral");

Vue.filter("formatNumber", function (value) {
  return numeral(value).format("0,0"); // displaying other groupings/separators is possible, look at the docs
});

export default {
  name: 'DebitCardSpendingLimit',
  props: {
    currency: {
      type: String,
      default: 'S$'
    },
    currentSpend: {
      type: Number,
      default: 0
    },
    limit: {
      type: Number,
      default: 1
    }
  },
  mounted: function(){
    const percentage = this.currentSpend/this.limit;
    console.log(document.getElementById('spending-limit-progress').getElementsByClassName('q-linear-progress__model')[0].setAttribute('style',`transform: scale3d(${percentage}, 1, 1) skew(130deg)`))
  },
}
</script>
