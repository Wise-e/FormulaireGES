<template>
  <KaContainer
    code="tests-mise-en-forme"
    :data="page.$info.testsMiseEnForme"
    :options="{
      style: {
        backgroundColor: appData.theme.backgroundColor,
        img: appData.theme.backgroundImage,
        color: appData.theme.fontColor,
        fontFamily: appData.theme.fontFamily,
        fontSize: appData.theme.fontSize
      }
    }">
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
    <!-- MatiereUser Form -->
    <KaContainer
      code="matiere-user-form"
      :data="page.$info.matiereUserForm">
      <!-- Form content -->
      <KaContainer code="form-content">
        <KaNavigationPropertyInput
          v-model="page.$info.matiereUserForm.item.Matiere"
          code="matiere"
          :options="{
            lazyOptions: {
              throttle: 500,
              once: true,
              intersection: { threshold: 0.1 }
            },
            placeholder: t('testsMiseEnForme.matiereUserForm.formContent.matiere.placeholder', `Matiere`)
          }" />
        <KaNavigationPropertyInput
          v-model="page.$info.matiereUserForm.item.rWJSg7uKjX66bVvQPRbBJJ"
          code="user-2"
          :options="{
            lazyOptions: {
              throttle: 500,
              once: true,
              intersection: { threshold: 0.1 }
            },
            placeholder: t('testsMiseEnForme.matiereUserForm.formContent.user2.placeholder', `User 2`)
          }" />
        <KaNumberInput
          v-model="page.$info.matiereUserForm.item.poidsMatiere"
          code="poids-matiere"
          :options="{
            labelPosition: `top`,
            placeholder: t('testsMiseEnForme.matiereUserForm.formContent.poidsMatiere.placeholder', `Poids Matiere`)
          }">
          <template #label>
            {{ t('testsMiseEnForme.matiereUserForm.formContent.poidsMatiere.label', `Poids Matiere`) }}
          </template>
        </KaNumberInput>
        <KaAutoCompleteInput
          v-model="page.$info.matiereUserForm.item.caracteristiqueNeuve"
          code="caracteristique-choix"
          :options="{
            labelPosition: `top`,
            debounce: 0,
            appendIcon: `i-fa-solid:search`,
            placeholder: t('testsMiseEnForme.matiereUserForm.formContent.caracteristiqueChoix.placeholder', `Caracteristique Choix`)
          }">
          <template #label>
            {{ t('testsMiseEnForme.matiereUserForm.formContent.caracteristiqueChoix.label', `Caracteristique Choix`) }}
          </template>
        </KaAutoCompleteInput>
        <KaSelectInput
          v-model="page.$info.matiereUserForm.item.provenanceMagasin"
          code="provenance-magasin"
          :options="{
            labelPosition: `top`,
            debounce: 10,
            items: page.$constants.provenanceMagasinItems,
            placeholder: t('testsMiseEnForme.matiereUserForm.formContent.provenanceMagasin.placeholder', `Provenance Magasin`)
          }">
          <template #label>
            {{ t('testsMiseEnForme.matiereUserForm.formContent.provenanceMagasin.label', `Provenance Magasin`) }}
          </template>
        </KaSelectInput>
        <KaSelectInput
          v-model="page.$info.matiereUserForm.item.distanceMagasin"
          code="distance-magasin"
          :options="{
            labelPosition: `top`,
            debounce: 10,
            items: page.$constants.distanceMagasinItems,
            placeholder: t('testsMiseEnForme.matiereUserForm.formContent.distanceMagasin.placeholder', `Distance Magasin`)
          }">
          <template #label>
            {{ t('testsMiseEnForme.matiereUserForm.formContent.distanceMagasin.label', `Distance Magasin`) }}
          </template>
        </KaSelectInput>
        <KaNumberInput
          v-model="page.$info.matiereUserForm.item.consoTransport"
          code="conso-transport"
          :options="{
            labelPosition: `top`,
            placeholder: t('testsMiseEnForme.matiereUserForm.formContent.consoTransport.placeholder', `Conso Transport`)
          }">
          <template #label>
            {{ t('testsMiseEnForme.matiereUserForm.formContent.consoTransport.label', `Conso Transport`) }}
          </template>
        </KaNumberInput>
        <KaSelectInput
          v-model="page.$info.matiereUserForm.item.provenanceMatiere"
          code="provenance-matiere"
          :options="{
            labelPosition: `top`,
            debounce: 10,
            items: page.$constants.provenanceMatiereItems,
            placeholder: t('testsMiseEnForme.matiereUserForm.formContent.provenanceMatiere.placeholder', `Provenance Matiere`)
          }">
          <template #label>
            {{ t('testsMiseEnForme.matiereUserForm.formContent.provenanceMatiere.label', `Provenance Matiere`) }}
          </template>
        </KaSelectInput>
        <KaSelectInput
          v-model="page.$info.matiereUserForm.item.transportMagasin"
          code="transport-magasin"
          :options="{
            labelPosition: `top`,
            debounce: 10,
            items: page.$constants.transportMagasinItems,
            placeholder: t('testsMiseEnForme.matiereUserForm.formContent.transportMagasin.placeholder', `Transport Magasin`)
          }">
          <template #label>
            {{ t('testsMiseEnForme.matiereUserForm.formContent.transportMagasin.label', `Transport Magasin`) }}
          </template>
        </KaSelectInput>
        <KaNumberInput
          v-model="page.$info.matiereUserForm.item.nombreEntrepriseCommande"
          code="nombre-entreprise-commande"
          :options="{
            labelPosition: `top`,
            placeholder: t('testsMiseEnForme.matiereUserForm.formContent.nombreEntrepriseCommande.placeholder', `Nombre Entreprise Commande`)
          }">
          <template #label>
            {{ t('testsMiseEnForme.matiereUserForm.formContent.nombreEntrepriseCommande.label', `Nombre Entreprise Commande`) }}
          </template>
        </KaNumberInput>
        <KaSelectInput
          v-model="page.$info.matiereUserForm.item.plusProcheQ"
          code="plus-proche-q"
          :options="{
            labelPosition: `top`,
            debounce: 10,
            items: page.$constants.plusProcheQItems,
            placeholder: t('testsMiseEnForme.matiereUserForm.formContent.plusProcheQ.placeholder', `Plus Proche Q`)
          }">
          <template #label>
            {{ t('testsMiseEnForme.matiereUserForm.formContent.plusProcheQ.label', `Plus Proche Q`) }}
          </template>
        </KaSelectInput>
        <KaSelectInput
          v-model="page.$info.matiereUserForm.item.certitudeduChoixQ"
          code="certitudedu-choix-q"
          :options="{
            labelPosition: `top`,
            debounce: 10,
            items: page.$constants.certitudeduChoixQItems,
            placeholder: t('testsMiseEnForme.matiereUserForm.formContent.certitudeduChoixQ.placeholder', `Certitudedu Choix Q`)
          }">
          <template #label>
            {{ t('testsMiseEnForme.matiereUserForm.formContent.certitudeduChoixQ.label', `Certitudedu Choix Q`) }}
          </template>
        </KaSelectInput>
        <KaSelectInput
          v-model="page.$info.matiereUserForm.item.changerApprovisionnementQ"
          code="changer-approvisionnement-q"
          :options="{
            labelPosition: `top`,
            debounce: 10,
            items: page.$constants.changerApprovisionnementQItems,
            placeholder: t('testsMiseEnForme.matiereUserForm.formContent.changerApprovisionnementQ.placeholder', `Changer Approvisionnement Q`)
          }">
          <template #label>
            {{ t('testsMiseEnForme.matiereUserForm.formContent.changerApprovisionnementQ.label', `Changer Approvisionnement Q`) }}
          </template>
        </KaSelectInput>
        <KaText code="text">
          <span v-html="page.$info.matiereUserForm.item.$editLink" />
        </KaText>
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
        <span v-html="t('testsMiseEnForme.matiereUserForm.save.value', `Save`)" />
      </KaButton>
    </KaContainer>
    <KaCollectionView
      v-model="page.virtualInfiniteScrollList.value"
      code="virtual-infinite-scroll-list"
      :options="{
        placeholder: `No items`,
        debounce: 0
      }">
      <template #item="listItemProps">
      </template>
    </KaCollectionView>
    <KaSeparator code="separator" />
  </KaContainer>
</template>

<script setup lang="ts">
import { generateMeta } from 'kapix-components-vue3'
import { testsMiseEnForme } from './store'
import { appDataStore } from '~/stores'
import './style.scss'
import './style.custom.scss'

defineOptions({
  name: 'TestsMiseEnForme'
})
provide('$scoped', '-p2')
const props = withDefaults(defineProps<{
  seo?: boolean
}>(), {
  seo: true
})
const appData = appDataStore()
const page = testsMiseEnForme()
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
