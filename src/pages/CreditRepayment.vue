<template>
  <q-page class="flex items-start justify-center q-px-xl q-py-md ">
    <div class="fit text-h5 gt-sm text-weight-bolder">
      Loan Repayment
    </div>
    <q-card class="router-card q-px-lg fit q-py-xl">
      <div class="router-card__content row text-subtitle1">
        <q-form
          action="/api/credit/repayment" method="post"
          @submit="onSubmit"
          class="q-gutter-md fit"
        >
          <div class="text-bold q-mt-lg q-mb-md">
            Period covered: March 15-22, 2021
          </div>
          <q-input
            type="number"
            v-model="loanAmount"
            label="Loan amount"
            stack-label
            lazy-rules
            prefix="S$"
            :rules="[
              val => val !== null && val !== '' || 'Please enter a loan amount',
              val => val > 0 || 'Please enter an amount greater than S$0'
            ]"
            disable
            readonly
          >
              <template class="text-dark" v-slot:label>
                <q-icon class="text-primary q-mr-sm" name="monetization_on"/>
                <strong>Repayment Amount</strong>
              </template>
          </q-input>

          <q-select v-model="selectedSource" :options="source" label="Loan Term">
              <template class="text-dark" v-slot:label>
                <q-icon class="text-primary q-mr-sm" name="source"/>
                <strong>Repayment Source</strong>
              </template>
          </q-select>

          <q-toggle v-model="acceptedTC" color="secondary" label="I accept the terms and conditions of Aspire's credit service." />

        </q-form>
      </div>
    </q-card>
    <div class="form-action row fit reverse">
      <q-btn no-caps class="aspire-button aspire-button--cta" label="Submit" type="submit" color="secondary"/>
    </div>

  </q-page>
</template>

<script>

export default {
  name: 'CreditRepayment',
  data: function (){
    return {
      acceptedTC: true,
      selectedSource: 'Checking',
      loanAmount: 0,
      source: [
        'Checking (4480)',
        'Savings (2130)'
      ]
    }
  }
}
</script>
