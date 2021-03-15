<template>
  <q-page class="flex items-start justify-center q-px-xl q-py-md ">
    <div class="fit text-h5 q-mb-xl gt-sm text-weight-bolder">
      Debit Card
    </div>
    <q-card class="router-card q-px-lg q-py-xl fit">
      <div class="router-card__content row">
        <div class="col-12 justify-sm-center col-md">
          <DebitCardBalance currency="S$" :balance=3000 class="gt-sm" summary />
          <DebitCard class="q-mx-sm-auto"  customerName="Mark Henry" lastFourDigits="2 0 2 0" expiry="12/20" />
          <DebitCardSpendingLimit :currentSpend="20" :limit="100" id="spending-limit" class="gt-sm q-my-xl" />
          <CashbackTimer :totalPeriod="30" :remainingPeriod="15" class="gt-sm q-my-xl" />
        </div>
        <div class="col-12 col-md q-pa-xl debit-card__options row items-center justify-center">
          <DebitCardOptions/>
        </div>
      </div>
    </q-card>
  </q-page>
</template>

<script>
import DebitCardBalance from 'components/DebitCardBalance.vue'
import DebitCard from 'components/DebitCard.vue'
import DebitCardSpendingLimit from 'components/DebitCardSpendingLimit.vue'
import CashbackTimer from 'components/CashbackTimer.vue'
import DebitCardOptions from 'components/DebitCardOptions.vue'

export default {
  name: 'DebitPage',
  components: { DebitCardBalance, DebitCard, DebitCardSpendingLimit, CashbackTimer, DebitCardOptions
   },
}
</script>
