<script setup>
  import { useI18n } from 'vue-i18n'
  const { t } = useI18n()
  const languages = [
    { title: 'English', value: 'en' },
    { title: '日本語', value: 'ja' }
  ]
</script>

<template>
  <v-select 
    v-model="$i18n.locale"
    :items="languages"
  />
  <p>{{ t('hello') }}</p>
</template>