<template>
  <q-page class="flex items-start justify-center q-px-xl q-py-md ">
    <div class="fit text-h5 gt-sm text-weight-bolder">
      Welcome to the Aspire Assessment Page!
    </div>
    <q-card class="router-card q-px-lg q-py-xl">
      <div class="router-card__content row text-subtitle1">
        <p>
          You can navigate to either the debit card page for the CSS challenge or the credit page for the loans challenge.
        </p>
        <p>
          Unfortunately, the icons don't change color when active yet. The SVGs do not play nice with Vue.
        </p>
      </div>
    </q-card>
  </q-page>
</template>

<script>

export default {
  name: 'HomePage'
}
</script>
