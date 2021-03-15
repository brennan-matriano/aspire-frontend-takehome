<template>
  <div>
    <span class="text-subtitle2">
      Available Balance
    </span>
    <div class="row q-mt-xs item-end justify-between">
      <div class="row">
        <div class="currency-flag">
          {{currency}}
        </div>
        <span class="q-px-lg text-h5 text-weight-bolder">
          {{balance | formatNumber}}
        </span>
      </div>
      <q-btn flat dense :label="summary? 'Top Up' : 'Top up account'" color="accent" no-caps icon="img:icons/Top Up.svg"/>
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
  name: 'DebitCardBalance',
  props: {
    currency: {
      type: String,
      default: ''
    },
    balance: {
      type: Number,
      default: 3000
    },
    summary: {
      type: Boolean,
      default: false
    }
  },
}
</script>
