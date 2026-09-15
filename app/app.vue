<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
  <AppToast />
</template>

<script setup lang="ts">
const authStore = useAuthStore()
const languageStore = useLanguageStore()
const { lang } = useLocale()

useHead({ htmlAttrs: { lang } })

onMounted(() => {
  authStore.restore()
  languageStore.init()
})
</script>
