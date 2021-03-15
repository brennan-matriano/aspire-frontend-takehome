<template>
  <div class="debit-card__wrapper text-white">
    <div class="debit-card__container q-my-md">
        <q-btn round color="white" class="debit-card__button" icon="img:icons/Eye.svg" />
      <div class="debit-card__content q-px-lg q-pb-md">
        <div class="row reverse items-end debit-card__row">
          <q-img src="~assets/Aspire Logo White.svg" height="21px" width="74px">
          </q-img>
        </div>
        <div class="text-h5 text-bold row debit-card__row q-mt-md">
          {{customerName}}
        </div>

        <div class="row debit-card__row debit-card__card-number text-demibold justify-between text-body2 q-mt-sm" style="width: 90%">
          <span class="debit-card__censored-card-number">● ● ● ●</span>
          <span class="debit-card__censored-card-number">● ● ● ●</span>
          <span class="debit-card__censored-card-number">● ● ● ●</span>
          <span class="text-body2 text-demibold"> {{lastFourDigits}} </span>
        </div>
        <div class="text-demibold row debit-card__row justify-between">
          <div class="justify-between">
            <span class="q-pr-sm vertical-middle">Thru: {{expiry}}</span>
            <span class="vertical-middle">CVV: </span><span class="vertical-middle"> ✱✱✱ </span> 
          </div>
          <q-img src="~assets/Visa Logo.svg" class="self-end" height="20px" width="59px">
          </q-img>
        </div>
      </div>            
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
  name: 'DebitCard',
  props: {
    customerName: {
      type: String,
      default: ''
    },
    lastFourDigits: {
      type: String,
      default: '0 0 0 0'
    },
    expiry: {
      type: String
    }
  }
}
</script>
