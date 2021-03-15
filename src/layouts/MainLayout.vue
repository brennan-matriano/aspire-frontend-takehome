<template>
  <q-layout view="lHh Lpr lFf">
    <q-drawer
      show-if-above
      persistent
      content-class="bg-primary"
      class="auth-desktop-sidebar text-white fit"
    >
      <q-list class="q-px-xl fit">
        <q-item-label
        class="q-mb-xl"
        >
          <q-img src="~assets/Aspire Logo.svg" class="q-mt-xl q-mb-lg brand_logo">
          </q-img>
          <div class="q-mb-xs text-subtitle2 spiel">
            Trusted way of banking for 3,000+ SMEs and startups in Singapore
          </div>
        </q-item-label>
        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
          class="q-mb-lg text-h6"
          :active="$route.name.match(link.name)"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <q-header class="q-px-xl" id="main-layout__header">
        <q-toolbar class="row reverse">
          <q-btn flat round dense class="lt-md" icon="img:icons/Logo.svg" />
        </q-toolbar>
        <div class="q-pb-lg text-h5 lt-sm text-weight-bolder">
          {{$route.meta.title}}
        </div>
        <router-view class="lt-md" name="optionalHeaderContent" />
      </q-header>
      <router-view id="main-layout__content" />
    </q-page-container>

    <q-footer elevated id="main-layout__footer" class="bg-white lt-md text-dark">
      <q-tabs no-caps active-color="primary" indicator-color="transparent" class="text-grey" v-model="tab">
        <q-route-tab 
          v-for="link in essentialLinks"
          :key="link.title"
          :name="link.title"
          :label="link.title"
          v-bind="link"
          :icon="link.greyIcon"
          :class="{'text-secondary': $route.name.match(link.name)}"
          :to="{name:link.name}"
        />

      </q-tabs>
    </q-footer>
  </q-layout>
  
</template>

<script>
import Vue from 'vue'

import EssentialLink from 'components/EssentialLink.vue'

const linksData = [
  {
    title: 'Home',
    icon: 'img:icons/Home.svg',
    link: '/',
    greyIcon: 'img:icons/Home Grey.svg',
    name: 'home'
  },
  {
    title: 'Debit Card',
    icon: 'credit_card',
    link: '/#/debit',
    greyIcon: 'credit_card',
    name: 'debit'
  },
  {
    title: 'Payments',
    icon: 'img:icons/Payments.svg',
    link: '/',
    greyIcon: 'img:icons/Payments Grey.svg',
    name: 'payments'
  },
  {
    title: 'Credit',
    icon: 'img:icons/Credit.svg',
    link: '/#/credit',
    greyIcon: 'img:icons/Credit Grey.svg',
    name: "credit"
  },
  {
    title: 'Settings',
    icon: 'img:icons/Account.svg',
    link: '/',
    greyIcon: 'img:icons/Account Grey.svg',
    name: 'settings'
  },
];

export default {
  name: 'MainLayout',
  components: { EssentialLink },
  data () {
    return {
      leftDrawerOpen: true,
      essentialLinks: linksData
    }
  }
}
</script>
