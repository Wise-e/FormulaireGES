<template>
  <KaContainer
    code="dashboard"
    :data="page.$info.dashboard"
    :options="{
      style: {
        backgroundColor: appData.theme.backgroundColor,
        img: appData.theme.backgroundImage,
        color: appData.theme.fontColor,
        fontFamily: appData.theme.fontFamily,
        fontSize: appData.theme.fontSize
      }
    }">
    <!-- Dashboard Form -->
    <KaContainer
      code="dashboard-form"
      :data="page.$info.dashboardForm">
      <!-- Form content -->
      <KaContainer code="form-content">
        <KaImageViewerInput
          v-model="page.$info.dashboardForm.item.Image"
          code="image"
          :options="{
            labelPosition: `top`,
            hideInputDetails: false,
            placeholder: t('dashboard.dashboardForm.formContent.image.placeholder', `Image`)
          }">
          <template #label>
            {{ t('dashboard.dashboardForm.formContent.image.label', `Image`) }}
          </template>
        </KaImageViewerInput>
        <KaFontFamilyInput
          v-model="page.$info.dashboardForm.item.FamilleDePolices"
          code="famille-de-polices"
          :options="{
            labelPosition: `top`,
            placeholder: t('dashboard.dashboardForm.formContent.familleDePolices.placeholder', `Famille de polices`)
          }">
          <template #label>
            {{ t('dashboard.dashboardForm.formContent.familleDePolices.label', `Famille de polices`) }}
          </template>
        </KaFontFamilyInput>
        <KaColorInput
          v-model="page.$info.dashboardForm.item.Couleur"
          code="couleur"
          :options="{
            labelPosition: `top`,
            placeholder: t('dashboard.dashboardForm.formContent.couleur.placeholder', `Couleur`)
          }">
          <template #label>
            {{ t('dashboard.dashboardForm.formContent.couleur.label', `Couleur`) }}
          </template>
        </KaColorInput>
        <KaColorInput
          v-model="page.$info.dashboardForm.item.Couleur1"
          code="couleur-1"
          :options="{
            labelPosition: `top`,
            placeholder: t('dashboard.dashboardForm.formContent.couleur1.placeholder', `Couleur 1`)
          }">
          <template #label>
            {{ t('dashboard.dashboardForm.formContent.couleur1.label', `Couleur 1`) }}
          </template>
        </KaColorInput>
        <KaColorInput
          v-model="page.$info.dashboardForm.item.Couleur2"
          code="couleur-2"
          :options="{
            labelPosition: `top`,
            placeholder: t('dashboard.dashboardForm.formContent.couleur2.placeholder', `Couleur 2`)
          }">
          <template #label>
            {{ t('dashboard.dashboardForm.formContent.couleur2.label', `Couleur 2`) }}
          </template>
        </KaColorInput>
        <KaColorInput
          v-model="page.$info.dashboardForm.item.Couleur3"
          code="couleur-3"
          :options="{
            labelPosition: `top`,
            placeholder: t('dashboard.dashboardForm.formContent.couleur3.placeholder', `Couleur 3`)
          }">
          <template #label>
            {{ t('dashboard.dashboardForm.formContent.couleur3.label', `Couleur 3`) }}
          </template>
        </KaColorInput>
        <KaColorInput
          v-model="page.$info.dashboardForm.item.Couleur4"
          code="couleur-4"
          :options="{
            labelPosition: `top`,
            placeholder: t('dashboard.dashboardForm.formContent.couleur4.placeholder', `Couleur 4`)
          }">
          <template #label>
            {{ t('dashboard.dashboardForm.formContent.couleur4.label', `Couleur 4`) }}
          </template>
        </KaColorInput>
        <KaColorInput
          v-model="page.$info.dashboardForm.item.Couleur5"
          code="couleur-5"
          :options="{
            labelPosition: `top`,
            placeholder: t('dashboard.dashboardForm.formContent.couleur5.placeholder', `Couleur 5`)
          }">
          <template #label>
            {{ t('dashboard.dashboardForm.formContent.couleur5.label', `Couleur 5`) }}
          </template>
        </KaColorInput>
      </KaContainer>
      <KaButton
        code="save"
        :options="{
          ripple: true,
          style: {
            color: `$invert`,
            innerBackgroundColor: appData.theme.secondaryColor
          },
          click: page.saveClick
        }">
        <span v-html="t('dashboard.dashboardForm.save.value', `Save`)" />
      </KaButton>
    </KaContainer>
  </KaContainer>
</template>

<script setup lang="ts">
import { generateMeta } from 'kapix-components-vue3'
import { dashboard } from './store'
import { appDataStore } from '~/stores'
import './style.scss'
import './style.custom.scss'

defineOptions({
  name: 'Dashboard'
})
provide('$scoped', '-p5')
const props = withDefaults(defineProps<{
  seo?: boolean
}>(), {
  seo: true
})
const appData = appDataStore()
const page = dashboard()
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
