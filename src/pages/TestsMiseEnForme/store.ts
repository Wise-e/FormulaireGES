import { useStorage } from '@vueuse/core'
import type { WritableComputedRef } from 'vue'
import { remove } from 'lodash-es'
import type { CustomStoreImplementationOptions, KaElementMap, MergeCustomStore, StoreIdentifier } from 'kapix-components-vue3'
import { defineStore } from 'pinia'
import { initAliveStoreIds, kapixContext } from 'kapix-components-vue3'
import testsMiseEnFormeStoreCustom from './store.custom'
import { $translate } from '~/modules/i18n'

const storeName = 'testsMiseEnForme'
const localStoragePersistence = useStorage(storeName, { form: undefined as PartialEntities<Kapix.Entity.IMatiereUser> })
const customImplement: CustomStoreImplementationOptions = testsMiseEnFormeStoreCustom.options
const aliveStoreIds = initAliveStoreIds()

function testsMiseEnFormeFactory (storeId?: Nullable<StoreIdentifier>) {
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
        $title: $translate('tests-mise-en-forme.title', 'Tests mise en forme'),
        $description: $translate('tests-mise-en-forme.description', ''),
        $publishedTime: new Date('2023-06-05T14:33:05.677Z'),
        $modifiedTime: new Date('2023-06-06T09:40:14.905Z'),
        // Constants,
        $constants: {
          provenanceMagasinItems: [
            {
              label: 'Producteur',
              value: 'Producteur'
            },
            {
              label: 'Magasin',
              value: 'Magasin'
            },
            {
              label: 'Grossiste',
              value: 'Grossiste'
            },
            {
              label: 'Autre',
              value: 'Autre'
            }
          ],
          distanceMagasinItems: [
            {
              label: 'Même ville',
              value: 'Même ville'
            },
            {
              label: 'Même département',
              value: 'Même département'
            },
            {
              label: 'Même région',
              value: 'Même région'
            },
            {
              label: 'Autre Région',
              value: 'Autre Région'
            },
            {
              label: 'Pays frontalier',
              value: 'Pays frontalier'
            },
            {
              label: 'Autre pays d\'Europe',
              value: 'Autre pays d\'Europe'
            },
            {
              label: 'Autre continent',
              value: 'Autre continent'
            }
          ],
          provenanceMatiereItems: [
            {
              label: 'Même ville',
              value: 'Même ville',
              description: null,
              icon: null,
              color: null,
              background: null
            },
            {
              label: 'Même département',
              value: 'Même département'
            },
            {
              label: 'Même région',
              value: 'Même région'
            },
            {
              label: 'Autre région',
              value: 'Autre région'
            },
            {
              label: 'Pays frontalier',
              value: 'Pays frontalier'
            },
            {
              label: 'Pays d\'Europe',
              value: 'Pays d\'Europe'
            },
            {
              label: 'Autre continent',
              value: 'Autre continent'
            },
            {
              label: 'Made in France',
              value: 'Made in France'
            },
            {
              label: 'Made in Europe',
              value: 'Made in Europe'
            },
            {
              label: 'Hors UE',
              value: 'Hors UE'
            },
            {
              label: 'Je ne sais pas',
              value: 'Je ne sais pas'
            }
          ],
          transportMagasinItems: [
            {
              label: 'Je ne sais pas',
              value: 'Je ne sais pas'
            },
            {
              label: 'Maritime/Fluvial',
              value: 'Maritime/Fluvial'
            },
            {
              label: 'Aérien',
              value: 'Aérien'
            },
            {
              label: 'Train',
              value: 'Train'
            },
            {
              label: 'Routier',
              value: 'Routier'
            }
          ],
          plusProcheQItems: [
            {
              label: 'Pour des questions de coût',
              value: 'Pour des questions de coût'
            },
            {
              label: 'Par habitude',
              value: 'Par habitude'
            },
            {
              label: 'Partenariat longue durée',
              value: 'Partenariat longue durée'
            },
            {
              label: 'N\'existe pas plus près',
              value: 'N\'existe pas plus près'
            }
          ],
          certitudeduChoixQItems: [
            {
              label: 'Sûr et certain',
              value: 'Sûr et certain'
            },
            {
              label: 'à ma connaissance',
              value: 'à ma connaissance'
            },
            {
              label: 'Je ne sais pas',
              value: 'Je ne sais pas'
            }
          ],
          changerApprovisionnementQItems: [
            {
              label: 'Oui, mais je ne sais pas encore quand',
              value: 'Oui, mais je ne sais pas encore quand'
            },
            {
              label: 'Non, j\'en suis satisfait',
              value: 'Non, j\'en suis satisfait'
            },
            {
              label: 'Non, je ne peux pas me le permettre pour le moment',
              value: 'Non, je ne peux pas me le permettre pour le moment'
            },
            {
              label: 'Oui, je suis en train de le faire',
              value: 'Oui, je suis en train de le faire'
            }
          ]
        },
        // Data,
        $data: {
          get form () {
            return localStoragePersistence.value.form
          },
          set form (form) {
            localStoragePersistence.value.form = form
          }
        },
        $inputs: {
          list: {},
          virtualInfiniteScrollList: undefined as Nullable<KeyValuePair>
        },
        $info: {
          testsMiseEnForme: { scrollTop: 0 },
          list: {
            scrollTop: 0,
            scrollLeft: 0
          },
          matiereUserForm: {
            scrollTop: 0,
            scrollLeft: 0,
            isValid: true,
            isDirty: false,
            quickSearch: undefined as Nullable<string>,
            item: {
              changerApprovisionnementQ: 'Oui, mais je ne sais pas encore quand',
              certitudeduChoixQ: 'Sûr et certain',
              plusProcheQ: 'Pour des questions de coût',
              nombreEntrepriseCommande: 0,
              transportMagasin: 'Je ne sais pas',
              provenanceMatiere: 'Même ville',
              distanceMagasin: 'Même ville',
              provenanceMagasin: 'Producteur',
              poidsMatiere: 0
            } as Partial<Kapix.Entity.IMatiereUser>
          }
        },
        ...(customImplement.state && customImplement.state())
      }
    },
    getters: {
      /* @ts-ignore: to allow override in your file */
      list (): WritableComputedRef<Nullable<KeyValuePair>> {
        return computed({
          get: () => this.$inputs.list,
          set: (value) => {
            this.$inputs.list = value
          }
        })
      },
      /* @ts-ignore: to allow override in your file */
      virtualInfiniteScrollList (): WritableComputedRef<Nullable<KeyValuePair>> {
        return computed({
          get: () => this.$inputs.virtualInfiniteScrollList,
          set: (value) => {
            this.$inputs.virtualInfiniteScrollList = value
          }
        })
      },
      ...customImplement.getters
    },
    actions: {
      /* @ts-ignore: to allow override in your file */
      saveClick () {
        // this.$info.matiereUserForm.create()
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
  return testsMiseEnFormeFactory(storeId)()
}

export const testsMiseEnFormeRaw = testsMiseEnFormeFactory()
export const testsMiseEnForme = () => testsMiseEnFormeRaw() as MergeCustomStore<typeof testsMiseEnFormeStoreCustom.instance>
