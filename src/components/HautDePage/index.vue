<template>
  <KaContainer
    code="haut-de-page"
    :options="options"
    :instance-class="instanceClass"
    :inner="inner != null ? inner : true"
    :xs="xs"
    :sm="sm">
    <!-- Partie A -->
    <KaContainer code="partie-a">
      <KaImage
        code="logo-de-lentreprise"
        :options="{
          animationIn: `fadeIn`,
          lazyOptions: {
            throttle: 200,
            once: true,
            intersection: { threshold: 0.1 }
          },
          alt: `Logo de l'entreprise`
        }"
        value="https://ucarecdn.com/ab8432ca-9c9a-43ec-84a8-a3042af1c2e5/" />
      <KaText
        code="onglet"
        :xs="{ hidden: true }">
        <span v-html="t('hautDePage.partieA.onglet.value', `Compta Carbone`)" />
      </KaText>
      <KaText
        code="text-1"
        :xs="{ hidden: true }">
        <span v-html="t('hautDePage.partieA.text1.value', `Blogue`)" />
      </KaText>
      <KaText
        code="text-2"
        :xs="{ hidden: true }">
        <span v-html="t('hautDePage.partieA.text2.value', `Connexion`)" />
      </KaText>
    </KaContainer>
    <!-- Partie B -->
    <KaContainer code="partie-b">
      <!-- Menu Burger -->
      <KaContainer
        code="menu-burger"
        :options="{ hidden: true }"
        :xs="{
          click: componentInstance.menuBurgerClickOnXs,
          hidden: false
        }">
        <KaIcon
          code="icone"
          :options="{
            hidden: true,
            $inheritState: { selected: true }
          }"
          :xs="{ hidden: false }"
          value="i-fa-solid:icons"
          xs-value="i-fa-solid:align-justify" />
        <KaText
          code="texte"
          :options="{ hidden: true }"
          :xs="{ hidden: false }">
          <span v-html="t('hautDePage.partieB.menuBurger.texte.value', `Du texte ici`)" />
          <template #xs>
            <span v-html="t('hautDePage.partieB.menuBurger.texte.xs.value', `Menu`)" />
          </template>
        </KaText>
      </KaContainer>
    </KaContainer>
  </KaContainer>
</template>

<script setup lang="ts">
import { NOOP, kapixContext } from 'kapix-components-vue3'
import { hautDePageComponent } from './store'
import './style.scss'
import './style.custom.scss'

defineOptions({
  name: 'HautDePage'
})
provide('$scoped', '-c0')
const component = hautDePageComponent()
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
