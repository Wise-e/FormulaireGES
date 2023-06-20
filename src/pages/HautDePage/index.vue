<template>
  <KaContainer
    code="haut-de-page"
    :data="page.$info.hautDePage"
    :options="{
      style: {
        color: `$invert`,
        innerBackgroundColor: appData.theme.backgroundColor2,
        fontFamily: appData.theme.fontFamily,
        fontSize: appData.theme.fontSize
      }
    }">
    <KaButton
      code="cta"
      :options="{
        ripple: true,
        style: {
          innerBackgroundColor: appData.theme.buttonColor,
          color: appData.theme.buttonColor2
        }
      }">
      <span v-html="t('hautDePage.cta.value', `Produit`)" />
    </KaButton>
    <KaButton
      code="button-1"
      :options="{
        ripple: true,
        style: {
          innerBackgroundColor: appData.theme.buttonColor,
          color: appData.theme.buttonColor2
        }
      }">
      <span v-html="t('hautDePage.button1.value', `Entreprise`)" />
    </KaButton>
    <KaButton
      code="button-2"
      :options="{
        ripple: true,
        style: {
          innerBackgroundColor: appData.theme.buttonColor,
          color: appData.theme.buttonColor2
        }
      }">
      <span v-html="t('hautDePage.button2.value', `Tarifs`)" />
    </KaButton>
    <KaButton
      code="button-3"
      :options="{
        ripple: true,
        style: {
          innerBackgroundColor: appData.theme.buttonColor,
          color: appData.theme.buttonColor2
        }
      }">
      <span v-html="t('hautDePage.button3.value', `S'inscrire`)" />
    </KaButton>
    <KaButton
      code="button-4"
      :options="{
        ripple: true,
        style: {
          innerBackgroundColor: appData.theme.buttonColor,
          color: appData.theme.buttonColor2
        }
      }">
      <span v-html="t('hautDePage.button4.value', `Se connecter`)" />
    </KaButton>
  </KaContainer>
</template>

<script setup lang="ts">
import { hautDePage } from './store'
import { appDataStore } from '~/stores'
import './style.scss'
import './style.custom.scss'

defineOptions({
  name: 'HautDePage'
})
provide('$scoped', '-p4')
const appData = appDataStore()
const page = hautDePage()
provide('$elements', page.$elements)
provide('$parentPage', page)
onBeforeMount(() => page.beforeMount())
onMounted(() => page.mounted())
onServerPrefetch(() => page.serverPrefetch())
onBeforeUnmount(() => page.beforeUnmount())
onUnmounted(() => page.unmounted())

</script>
