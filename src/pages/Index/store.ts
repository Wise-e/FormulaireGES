import { useStorage } from '@vueuse/core'
import { remove } from 'lodash-es'
import type { CustomStoreImplementationOptions, KaElementMap, MergeCustomStore, StoreIdentifier } from 'kapix-components-vue3'
import { defineStore } from 'pinia'
import { initAliveStoreIds, kapixContext } from 'kapix-components-vue3'
import formulaireGesStoreCustom from './store.custom'
import { $translate } from '~/modules/i18n'

const storeName = 'formulaireGes'
const sessionStoragePersistence = useStorage(storeName, { formStep: 1 as Nullable<number> }, typeof sessionStorage != 'undefined' ? sessionStorage : undefined)
const customImplement: CustomStoreImplementationOptions = formulaireGesStoreCustom.options
const aliveStoreIds = initAliveStoreIds()

function formulaireGesFactory (storeId?: Nullable<StoreIdentifier>) {
  return defineStore(storeId == null ? storeName : `${storeName}/${storeId}`, {
    state: () => {
      return {
        $aliveStoreIds: aliveStoreIds,
        $subStoreIds: 1,
        $storeId: storeId,
        $emit: (() => {}) as (propName: any, value: any) => void,
        $elements: {} as KaElementMap,
        $router: kapixContext.isClient ? kapixContext.$router : undefined,
        $route: kapixContext.isClient ? kapixContext.$route : undefined,
        // Page info,
        $title: $translate('formulaire-ges.title', 'Formulaire GES'),
        $description: $translate('formulaire-ges.description', ''),
        $publishedTime: new Date('2023-03-15T08:06:34.738Z'),
        $modifiedTime: new Date('2023-06-23T08:45:20.355Z'),
        // Constants,
        $constants: {},
        // Data,
        $data: {
          get formStep () {
            return sessionStoragePersistence.value.formStep
          },
          set formStep (formStep) {
            sessionStoragePersistence.value.formStep = formStep
          }
        },
        $info: {
          formulaireGes: { scrollTop: 0 },
          formulaire: {
            scrollTop: 0,
            scrollLeft: 0,
            isValid: true,
            isDirty: false,
            quickSearch: undefined as Nullable<string>,
            item: {
              changerApprovisionnementQ: 'Oui, mais je ne sais pas encore quand',
              certitudeduChoixQ: 'Sûr et certain',
              plusProcheQ: 'Pour des questions de coût',
              transportMagasin: 'Je ne sais pas',
              provenanceMatiere: 'Même ville',
              distanceMagasin: 'Même ville',
              provenanceMagasin: 'Producteur',
              nombreEntrepriseCommande: 0,
              poidsMatiere: 0
            } as Partial<Kapix.Entity.IMatiereUser>
          }
        },
        ...(customImplement.state && customImplement.state())
      }
    },
    getters: {
      ...customImplement.getters
    },
    actions: {
      /* @ts-ignore: to allow override in your file */
      commencerLeFormulaireClick () {
        this.$data.formStep = 1
      },
      /* @ts-ignore: to allow override in your file */
      getStoreInstance (storeId?: Nullable<StoreIdentifier>) {
        return storeId != null ? getStoreInstance(storeId) : this
      },
      /* @ts-ignore: to allow override in your file */
      getStoreInstances () {
        return aliveStoreIds.map(storeId => this.getStoreInstance(storeId))
      },
      /* @ts-ignore: to allow override in your file */
      newStoreInstance (storeId?: Nullable<StoreIdentifier>) {
        const newStoreId = storeId || this.$subStoreIds++
        if (aliveStoreIds.includes(newStoreId)) {
          throw new Error(`Store with id ${storeId} already exists`)
        }
        aliveStoreIds.push(newStoreId)
        return getStoreInstance(newStoreId)
      },
      ...customImplement.actions,
      /* @ts-ignore: to allow override in your file */
      beforeMount () {
        customImplement.actions?.beforeMount?.call(this)
      },
      /* @ts-ignore: to allow override in your file */
      mounted () {
        customImplement.actions?.mounted?.call(this)
      },
      /* @ts-ignore: to allow override in your file */
      serverPrefetch () {
        customImplement.actions?.serverPrefetch?.call(this)
      },
      /* @ts-ignore: to allow override in your file */
      beforeUnmount () {
        customImplement.actions?.beforeUnmount?.call(this)
      },
      /* @ts-ignore: to allow override in your file */
      unmounted () {
        if (this.$storeId != null) {
          this.$dispose()
          remove(aliveStoreIds, this.$storeId)
        }
        customImplement.actions?.unmounted?.call(this)
      }
    }
  })
}

function getStoreInstance (storeId?: Nullable<StoreIdentifier>) {
  return formulaireGesFactory(storeId)()
}

export const formulaireGesRaw = formulaireGesFactory()
export const formulaireGes = () => formulaireGesRaw() as MergeCustomStore<typeof formulaireGesStoreCustom.instance>
