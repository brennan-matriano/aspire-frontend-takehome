<template class="column items-center justify-center"  >
  <q-list>
      <q-item clickable v-ripple class="q-py-lg">
        <q-item-section avatar>
          <q-icon color="primary" name="img:icons/Freeze Card.svg" />
        </q-item-section>
        <q-item-section> 
          <q-item-label class="text-subtitle1 text-demibold">Freeze Card</q-item-label>
          <q-item-label caption>Your debit card is currently active</q-item-label>
        </q-item-section>
          <q-item-section side >
            <q-toggle v-model="isCardFrozen" color="secondary" />
          </q-item-section>
      </q-item>

      <q-separator class="gt-sm" spaced />

      <q-item clickable v-ripple class="q-py-lg">
        <q-item-section avatar>
          <q-icon color="primary" name="img:icons/Limit Spend.svg" />
        </q-item-section>
        <q-item-section> 
          <q-item-label class="text-subtitle1 text-demibold">Spending Limit</q-item-label>
          <q-item-label caption>Set a weekly spending amount</q-item-label>
        </q-item-section>
      </q-item>

      <q-separator class="gt-sm" spaced />

      <q-item clickable v-ripple class="q-py-lg">
        <q-item-section avatar>
          <q-icon color="primary" name="img:icons/Limit Spend.svg" />
        </q-item-section>
        <q-item-section> 
          <q-item-label class="text-subtitle1 text-demibold">Get a New Card</q-item-label>
          <q-item-label caption>This deactivates your current debit card</q-item-label>
        </q-item-section>
      </q-item>

      <q-separator class="gt-sm" spaced />

      <q-item clickable v-ripple class="q-py-lg">
        <q-item-section avatar>
          <q-icon color="primary" name="img:icons/Limit Spend.svg" />
        </q-item-section>
        <q-item-section> 
          <q-item-label class="text-subtitle1 text-demibold">Deactivated cards</q-item-label>
          <q-item-label caption>Your previously deactivated cards</q-item-label>
        </q-item-section>
      </q-item>

    </q-list>
</template>

<script>
import Vue from 'vue'

export default {
  name: 'DebitCardOptions',
  props: {
    currency: {
      type: String,
      default: ''
    },
    balance: {
      type: Number,
      default: 0
    },
  },
  data: function (){
    return {
      isCardFrozen: true
    }
  }
}
</script>
