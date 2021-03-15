<template>
  <q-page class="flex items-start justify-center q-px-xl q-py-md ">
    <div class="fit text-h5 gt-sm text-weight-bolder">
      Loans
    </div>
    <q-table
      :data="data"
      :columns="columns"
      row-key="name"
      class="fit"
      :dense="$q.screen.lt.sm"
    >
      <template v-slot:body-cell-status="cellProperties">
        <q-td :props="cellProperties">
          <q-badge :color="cellProperties.row.status == 'Accepted' ? 'secondary' : 'negative' ">
            {{cellProperties.row.status}}
          </q-badge>
        </q-td>
      </template>
      <template v-slot:body-cell-action="cellProperties">
        <q-td :props="cellProperties">
          <q-btn  
            rounded
            no-caps
            color="secondary" 
            v-if="cellProperties.row.action" 
            class="aspire-button" 
            :to="{
              name: 'credit-repay', 
              params: { 
                loanId : cellProperties.row.action
              }
            }" 
            label="Repay Loan" />
        </q-td>
      </template>
    </q-table>
    <div class="router-card__content form-action items-center fit row reverse text-subtitle1">
        <q-btn rounded color="secondary" no-caps class=" aspire-button aspire-button--cta" :to="{name: 'credit-apply'}" label="Apply For New Loan" />
    </div>  
  </q-page>
</template>

<script>
import axios from 'axios'

export default {
  name: 'HomePage',
  mounted: function(){
    axios.get('/api/loans').then(response => {
      this.data = JSON.parse(response.body);
    }).catch(e => {
      console.log(e)
      this.data = [
      {
        application: 'May 12, 2021',
        status: 'Rejected',
        amount: 140.00,
        loan_term: '4 months',
      },
      {
        application: 'May 12, 2021',        
        status: 'Accepted',
        amount: 150.00,
        loan_term: '1 months',
        action: 2,
        next_due: 'April 1, 2021',
      },
      {
        application: 'May 12, 2021',
        status: 'Rejected',
        amount: 160.00,
        loan_term: '2 months',
      },
    ]
    })
  },
  data () {
    return {
      columns: [
        {
          name: 'application',
          required: true,
          label: 'Application Date',
          align: 'left',
          field: 'application',
          sortable: true
        },
        { name: 'status', align: 'center', label: 'Application Status', field: 'status', sortable: true },
        { name: 'amount', align: 'center', label: 'Amount', field: 'amount', sortable: true },
        { name: 'loan_term', align: 'center', label: 'Loan Term', field: 'loan_term', sortable: true },
        { name: 'next_due', align: 'center', label: 'Next Payment Due', field: 'next_due', sortable: true },
        {
          name: 'action',
          field: 'key',
        }
      ],
      data: []
    }
  }
}
</script>
