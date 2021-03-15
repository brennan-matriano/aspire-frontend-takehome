
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', 
        components: {
          default: () => import('pages/Home.vue'),
        },
        meta: {
        title: "Home",
        },
        name: 'home' 
      },
      { 
        path: 'debit', 
        components: {
          default: () => import('pages/Debit.vue'),
          optionalHeaderContent: () => import('components/DebitCardBalance.vue')
        },
        meta: {
        title: "Debit Card",
        },
        name: 'debit' 
      },
      { 
        path: 'credit', 
        components: {
          default: () => import('pages/Credit.vue'),
        },
        meta: {
        title: "Loans",
        },
        name: 'credit' 
      },
      { 
        path: 'credit/apply', 
        components: {
          default: () => import('pages/CreditApplication.vue'),
        },
        meta: {
        title: "Loans",
        },
        name: 'credit-apply' 
      },
      { 
        path: 'credit/repay/:loanId', 
        components: {
          default: () => import('pages/CreditRepayment.vue'),
        },
        meta: {
        title: "Loans",
        },
        name: 'credit-repay' 
      }
    ],
  },
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
