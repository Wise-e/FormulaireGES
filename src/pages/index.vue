<template>
  <KaContainer
    code="formulaire-ges"
    :data="page.$info.formulaireGes"
    :options="{
      style: {
        backgroundColor: appData.theme.backgroundColor,
        img: appData.theme.backgroundImage,
        color: appData.theme.fontColor,
        fontFamily: appData.theme.fontFamily,
        fontSize: appData.theme.fontSize
      }
    }">
    <HautDePageAmeliore instance-class="haut-de-page-ameliore-p0" />
    <!-- Container -->
    <KaContainer code="container">
      <!-- Container -->
      <KaContainer code="container-1">
        <KaList
          v-model="page.list.value"
          code="list"
          :options="{
            placeholder: `No items`,
            debounce: 0,
            overflow: `auto`
          }"
          :data="page.$info.list">
          <template #item="listItemProps">
          </template>
        </KaList>
        <!-- Formulaire -->
        <KaContainer
          code="formulaire"
          :data="page.$info.formulaire"
          :options="{
            style: {
              backgroundColor: appData.theme.backgroundColor2,
              color: appData.theme.fontColor2
            },
            displays: [
              `Success`,
              `Error`,
              `Formulaire GES Matières`,
              `Formulaire GES Agricole`,
              `Formulaire GES Energie`,
              `Formulaire GES Equipement`,
              `Formulaire Fourniture`,
              `Formulaire GES Batiment`,
              `Formulaire GES Chauffage`,
              `Formulaire GES Energie Renouvelable`,
              `Formulaire GES Vente`,
              `Formulaire GES Emballage`,
              `Formulaire GES Transport`,
              `Formulaire GES Dechets`
            ]
          }">
          <KaButton
            code="commencer-le-formulaire"
            :options="{
              ripple: true,
              click: page.commencerLeFormulaireClick
            }">
            <span v-html="t('formulaireGes.container.container1.formulaire.commencerLeFormulaire.value', `Commencer le formulaire`)" />
          </KaButton>
        </KaContainer>
      </KaContainer>
    </KaContainer>
  </KaContainer>
</template>

<script setup lang="ts">
import { generateMeta } from 'kapix-components-vue3'
import { formulaireGes } from './Index/store'
import HautDePageAmeliore from '~/components/HautDePageAmeliore/index.vue'
import { appDataStore } from '~/stores'
import './Index/style.scss'
import './Index/style.custom.scss'

defineOptions({
  name: 'HomePage'
})
provide('$scoped', '-p0')
const props = withDefaults(defineProps<{
  seo?: boolean
}>(), {
  seo: true
})
const appData = appDataStore()
const page = formulaireGes()
provide('$elements', page.$elements)
provide('$parentPage', page)
onBeforeMount(() => page.beforeMount())
onMounted(() => page.mounted())
onServerPrefetch(() => page.serverPrefetch())
onBeforeUnmount(() => page.beforeUnmount())
onUnmounted(() => page.unmounted())

// SEO
if (props.seo) {
  // https://github.com/vueuse/head
  useHead({
    title: computed(() => page.$title),
    htmlAttrs: { lang: appData.locale },
    meta: computed(() => generateMeta({
      title: page.$title,
      description: page.$description,
      canonicalUrl: appData.hostname,
      publishedTime: page.$publishedTime,
      modifiedTime: page.$modifiedTime,
      ...appData.twitter
    }))
  })

  useSchemaOrg([
    // https://vue-schema-org.netlify.app/api/schema/webpage.html#type-definition
    defineWebPage({
      name: page.$title,
      description: page.$description,
      inLanguage: appData.locale,
      primaryImageOfPage: appData.twitter.image,
      datePublished: page.$publishedTime
      // dateModified: page.$modifiedTime?.toISOString()
    })
  ])
}
</script>
