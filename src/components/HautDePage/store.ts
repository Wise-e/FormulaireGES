import { remove } from 'lodash-es'
import { defineStore } from 'pinia'
import type { CustomStoreImplementationOptions, KaElementClickEvent, KaElementMap, MergeCustomStore, StoreIdentifier } from 'kapix-components-vue3'
import { NOOP, initAliveStoreIds, kapixContext } from 'kapix-components-vue3'
import hautDePageComponentStoreCustom from './store.custom'
import HautDePage from '~/pages/HautDePage/index.vue'

const storeName = 'hautDePageComponent'
const customImplement: CustomStoreImplementationOptions = hautDePageComponentStoreCustom.options
const aliveStoreIds = initAliveStoreIds()

function hautDePageComponentFactory (storeId?: Nullable<StoreIdentifier>) {
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
        $parentPage: NOOP,
        $parentComponent: NOOP,
        // Constants,
        $constants: {},
        // Data,
        ...(customImplement.state && customImplement.state())
      }
    },
    getters: {
      ...customImplement.getters
    },
    actions: {
      /* @ts-ignore: to allow override in your file */
      menuBurgerClickOnXs (event: KaElementClickEvent) {
        event.vm?.showTooltip(HautDePage)
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
  return hautDePageComponentFactory(storeId)()
}

export const hautDePageComponentRaw = hautDePageComponentFactory()
export const hautDePageComponent = () => hautDePageComponentRaw() as MergeCustomStore<typeof hautDePageComponentStoreCustom.instance>
