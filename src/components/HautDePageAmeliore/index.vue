<template>
  <KaContainer
    code="haut-de-page-ameliore"
    :options="options"
    :instance-class="instanceClass"
    :inner="inner"
    :xs="xs"
    :sm="sm">
    <KaText
      code="formulaire-ges"
      :options="{
        style: {
          color: appData.theme.fontColor2,
          fontFamily: appData.theme.fontFamily2
        }
      }">
      <h1 v-html="t('hautDePageAmeliore.formulaireGes.value', `Formulaire GES`)" />
    </KaText>
    <HautDePage instance-class="haut-de-page-c1" />
  </KaContainer>
</template>

<script setup lang="ts">
import { NOOP, kapixContext } from 'kapix-components-vue3'
import { hautDePageAmelioreComponent } from './store'
import HautDePage from '~/components/HautDePage/index.vue'
import { appDataStore } from '~/stores'
import './style.scss'
import './style.custom.scss'

defineOptions({
  name: 'HautDePageAmeliore'
})
provide('$scoped', '-c1')
const appData = appDataStore()
const component = hautDePageAmelioreComponent()
const componentInstance = component.newStoreInstance()
provide('$elements', componentInstance.$elements)
onBeforeMount(() => componentInstance.beforeMount())
onMounted(() => componentInstance.mounted())
onServerPrefetch(() => componentInstance.serverPrefetch())
onBeforeUnmount(() => componentInstance.beforeUnmount())
onUnmounted(() => componentInstance.unmounted())

withDefaults(defineProps<{
  instanceClass?: Nullable<string>
  options?: Nullable<KeyValuePair>
  sm?: Nullable<KeyValuePair>
  xs?: Nullable<KeyValuePair>
  inner?: Nullable<boolean>
}>(), {
  instanceClass: undefined,
  options: undefined,
  sm: undefined,
  xs: undefined,
  inner: undefined
})

if (kapixContext.isClient) {
  componentInstance.$parentPage = inject('$parentPage', NOOP)
  componentInstance.$parentComponent = inject('$parentComponent', NOOP)
}

</script>
