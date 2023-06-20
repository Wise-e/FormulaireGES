<template>
  <KaContainer
    code="header"
    :data="page.$info.header"
    :options="{
      style: {
        backgroundColor: appData.theme.backgroundColor,
        img: appData.theme.backgroundImage,
        color: appData.theme.fontColor,
        fontFamily: appData.theme.fontFamily,
        fontSize: appData.theme.fontSize
      }
    }">
    <HautDePageAmeliore instance-class="haut-de-page-ameliore-p3" />
  </KaContainer>
</template>

<script setup lang="ts">
import { generateMeta } from 'kapix-components-vue3'
import { header } from './store'
import HautDePageAmeliore from '~/components/HautDePageAmeliore/index.vue'
import { appDataStore } from '~/stores'
import './style.scss'
import './style.custom.scss'

defineOptions({
  name: 'Header'
})
provide('$scoped', '-p3')
const props = withDefaults(defineProps<{
  seo?: boolean
}>(), {
  seo: true
})
const appData = appDataStore()
const page = header()
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
