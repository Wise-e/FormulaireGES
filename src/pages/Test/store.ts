import { useStorage } from '@vueuse/core'
import type { WritableComputedRef } from 'vue'
import { remove } from 'lodash-es'
import type { CustomStoreImplementationOptions, KaElementMap, MergeCustomStore, StoreIdentifier } from 'kapix-components-vue3'
import { defineStore } from 'pinia'
import { initAliveStoreIds, kapixContext } from 'kapix-components-vue3'
import testStoreCustom from './store.custom'
import { $translate } from '~/modules/i18n'

const storeName = 'test'
const sessionStoragePersistence = useStorage(storeName, { formStep: 1 as Nullable<number> }, typeof sessionStorage != 'undefined' ? sessionStorage : undefined)
const customImplement: CustomStoreImplementationOptions = testStoreCustom.options
const aliveStoreIds = initAliveStoreIds()

function testFactory (storeId?: Nullable<StoreIdentifier>) {
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
        $title: $translate('test.title', 'Test '),
        $description: $translate('test.description', ''),
        $publishedTime: new Date('2023-06-23T12:43:43.514Z'),
        $modifiedTime: new Date('2023-06-26T07:18:03.212Z'),
        // Constants,
        $constants: {
          commentVousLesProcurezVousItems: [
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
          quelEstLaCategorieDeVotreMatiereItems: [
            {
              label: 'Produits chimiques et alcool',
              value: 'Produits chimiques et alcool',
              description: null,
              icon: null,
              color: null,
              background: null
            },
            {
              label: 'Peinture/ Vernis/ Résines/Teinture/En',
              value: 'Peinture/ Vernis/ Résines/Teinture/En'
            },
            {
              label: 'Plastiques',
              value: 'Plastiques',
              description: null,
              icon: null,
              color: null,
              background: null
            },
            {
              label: 'Métaux',
              value: 'Métaux'
            },
            {
              label: 'Verre',
              value: 'Verre'
            },
            {
              label: 'Papeterie',
              value: 'Papeterie'
            },
            {
              label: 'Autres',
              value: 'Autres'
            },
            {
              label: 'Minéraux',
              value: 'Minéraux'
            },
            {
              label: 'Produits d\'hygiène et nettoyage',
              value: 'Produits d\'hygiène et nettoyage'
            },
            {
              label: 'Textile',
              value: 'Textile'
            },
            {
              label: 'Bois (hors énergie)',
              value: 'Bois',
              description: null,
              icon: null,
              color: null,
              background: null
            },
            {
              label: 'Alimentaire',
              value: 'Alimentaire'
            }
          ],
          ouSontIlsSituesParRapportAVousItems: [
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
          quelEstLeNomDeVotreMatiereItems: [
            {
              label: 'Sulfate de sodium ou d\'ammonium',
              value: 'Sulfate de sodium ou d\'ammonium'
            },
            {
              label: 'Acide benzoique, sodium benzoate, tocopherol, benzyl benzoate',
              value: 'Acide benzoique, sodium benzoate, tocopherol, benzyl benzoate'
            },
            {
              label: 'Acide chlorydrique, phosphorique, sorbique, potassium sorbate',
              value: 'Acide chlorydrique, phosphorique, sorbique, potassium sorbate'
            },
            {
              label: 'Acide sulfurique',
              value: 'Acide sulfurique'
            },
            {
              label: 'Acier/Fer',
              value: 'Acier/Fer',
              description: null,
              icon: null,
              color: null,
              background: null
            },
            {
              label: 'Alcool',
              value: 'Alcool'
            },
            {
              label: 'Aluminium',
              value: 'Aluminium'
            },
            {
              label: 'Ammoniaque',
              value: 'Ammoniaque'
            },
            {
              label: 'Argent',
              value: 'Argent'
            },
            {
              label: 'Carbonate de calcium',
              value: 'Carbonate de calcium',
              description: null,
              icon: null,
              color: null,
              background: null
            },
            {
              label: 'Acide citrique, tartrique, nitrique',
              value: 'Acide citrique, tartrique, nitrique'
            },
            {
              label: 'Acide sulfurique',
              value: 'Acide sulfurique'
            },
            {
              label: 'Bicarbonate de soude/Sodium',
              value: 'Bicarbonate de soude/Sodium',
              description: null,
              icon: null,
              color: null,
              background: null
            },
            {
              label: 'Chlorure de sodium, Potassium',
              value: 'Chlorure de sodium, Potassium',
              description: null,
              icon: null,
              color: null,
              background: null
            },
            {
              label: 'Chlore',
              value: 'Chlore'
            },
            {
              label: 'Cuivre',
              value: 'Cuivre'
            },
            {
              label: 'Epoxy',
              value: 'Epoxy'
            },
            {
              label: 'Fibre de carbone/Graphite',
              value: 'Fibre de carbone/Graphite'
            },
            {
              label: 'Nickel',
              value: 'Nickel'
            },
            {
              label: 'Or',
              value: 'Or'
            },
            {
              label: 'Oxyde de zinc',
              value: 'Oxyde de zinc'
            },
            {
              label: 'PET',
              value: 'PET'
            },
            {
              label: 'Peinture en bombre',
              value: 'Peinture en bombre'
            },
            {
              label: 'Peinture en bombe',
              value: 'Peinture en bombe'
            },
            {
              label: 'Peinture en pot',
              value: 'Peinture en pot'
            },
            {
              label: 'Platine (et famille)',
              value: 'Platine (et famille)',
              description: null,
              icon: null,
              color: null,
              background: null
            },
            {
              label: 'Plomb',
              value: 'Plomb'
            },
            {
              label: 'Résine',
              value: 'Résine'
            },
            {
              label: 'Savons, détergents et tensioactifs',
              value: 'Savons, détergents et tensioactifs'
            },
            {
              label: 'Soude',
              value: 'Soude'
            },
            {
              label: 'Soufre',
              value: 'Soufre'
            },
            {
              label: 'Titane',
              value: 'Titane'
            },
            {
              label: 'Vernis en bombe',
              value: 'Vernis en bombe'
            },
            {
              label: 'Vernis en pot',
              value: 'Vernis en pot'
            },
            {
              label: 'Verre',
              value: 'Verre'
            }
          ],
          quelleEstLaProvenanceDeVosMatieresPItems: [
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
          commentRecuperezVousVotreCommandeItems: [
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
          pourQuelleRaisonNeVousApprovisionneItems: [
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
          enEtesVousSurItems: [
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
          avezVousDejaPenseAChangerVotreProceItems: [
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
          ],
          avezVousDejaPenseAOpterPourUneAlterItems: [
            {
              label: 'Non jamais',
              value: 'Non jamais'
            },
            {
              label: 'Oui mais je n\'ai pas pu trouver mieux pour le moment',
              value: 'Oui mais je n\'ai pas pu trouver mieux pour le moment',
              description: null,
              icon: null,
              color: null,
              background: null
            },
            {
              label: 'Oui je pense le faire prochainement',
              value: 'Oui je pense le faire prochainement'
            }
          ],
          depuisCombienDeTempsPossedezVousCesItems: [
            {
              label: 'Moins d\'un an',
              value: 'Moins d\'un an'
            },
            {
              label: 'Entre 1 et 5 ans',
              value: 'Entre 1 et 5 ans'
            },
            {
              label: 'Entre 5 et 10 ans',
              value: 'Entre 5 et 10 ans'
            },
            {
              label: 'Plus de 10 ans',
              value: 'Plus de 10 ans'
            }
          ],
          vosEquipementsOntIlsEteAchetesNeufsItems: [
            {
              label: 'Loué',
              value: 'Loué'
            },
            {
              label: 'Neuf',
              value: 'Neuf'
            },
            {
              label: 'Reconditionné',
              value: 'Reconditionné'
            },
            {
              label: 'Seconde main',
              value: 'Seconde main'
            }
          ],
          combienDeTempsGardezVousVotreMateriItems: [
            {
              label: 'Moins d\'un an',
              value: 'Moins d\'un an'
            },
            {
              label: 'Entre 1 et 5 ans',
              value: 'Entre 1 et 5 ans'
            },
            {
              label: 'Entre 5 et 10 ans',
              value: 'Entre 5 et 10 ans'
            },
            {
              label: 'Plus de 10 ans',
              value: 'Plus de 10 ans'
            }
          ],
          questCeQuiVousPousseAVousEnDebarassItems: [
            {
              label: 'Manque de performance',
              value: 'Manque de performance'
            },
            {
              label: 'Amortissement Comptable',
              value: 'Amortissement Comptable'
            },
            {
              label: 'Usure',
              value: 'Usure'
            },
            {
              label: 'Evolution de la technologie',
              value: 'Evolution de la technologie'
            }
          ],
          queFaitesVousDeVosFournituresUneFoiItems: [
            {
              label: 'Recyclage',
              value: 'Recyclage'
            },
            {
              label: 'Décheterie',
              value: 'Décheterie'
            },
            {
              label: 'Revente',
              value: 'Revente'
            },
            {
              label: 'Don',
              value: 'Don'
            }
          ],
          dansQuelGenreDeBatimentOntLieuLaProItems: [
            {
              label: 'Bâtiment industriel',
              value: 'Bâtiment industriel',
              description: null,
              icon: null,
              color: null,
              background: null
            },
            {
              label: 'Chez vous',
              value: 'Chez vous'
            },
            {
              label: 'Atelier/Boutique',
              value: 'Atelier/Boutique'
            }
          ],
          quelEstLaClasseEnergetiqueDuBatimenItems: [
            {
              label: 'A',
              value: 'A'
            },
            {
              label: 'C',
              value: 'C'
            },
            {
              label: 'D',
              value: 'D'
            },
            {
              label: 'E',
              value: 'E'
            },
            {
              label: 'G',
              value: 'G'
            },
            {
              label: 'Je ne sais pas',
              value: 'Je ne sais pas'
            }
          ],
          ouVotreBatimentDeFonctionEstIlPlaceItems: [
            {
              label: 'En centre ville',
              value: 'En centre ville'
            },
            {
              label: 'Zone périurbaine',
              value: 'Zone périurbaine'
            },
            {
              label: 'Zone rurale',
              value: 'Zone rurale'
            }
          ],
          pourquoiAvezVousChoisiCetEmplacemenItems: [
            {
              label: 'Proximité gare',
              value: 'Proximité gare'
            },
            {
              label: 'Proximité autoroute  et grand axes routiers',
              value: 'Proximité autoroute  et grand axes routiers'
            },
            {
              label: 'Proximité de mon domicile',
              value: 'Proximité de mon domicile'
            },
            {
              label: 'Proximité fournisseur',
              value: 'Proximité fournisseur'
            },
            {
              label: 'Lieu de passage fréquent',
              value: 'Lieu de passage fréquent'
            },
            {
              label: 'Proximité aéroport',
              value: 'Proximité aéroport'
            }
          ],
          quelEstSonAccessibiliteItems: [
            {
              label: 'Près du bus/tram',
              value: 'Près du bus/tram'
            },
            {
              label: 'Parking voiture',
              value: 'Parking voiture',
              description: null,
              icon: null,
              color: null,
              background: null
            },
            {
              label: 'Parking vélo',
              value: 'Parking vélo'
            },
            {
              label: 'Près d\'une gare',
              value: 'Près d\'une gare'
            }
          ],
          utilisezVousUneRemorqueItems: [
            {
              background: null,
              color: null,
              description: null,
              icon: null,
              label: 'Bagagère de moins de 500L',
              value: 'Bagagère de moins de 500L'
            },
            {
              background: null,
              color: null,
              description: null,
              icon: null,
              label: 'Bagagère de plus de 500L',
              value: 'Bagagère de plus de 500L'
            },
            {
              label: 'Professionnel entre 800L et 1000L',
              value: 'Professionnel entre 800L et 1000L'
            },
            {
              label: 'Professionnel de plus de 1000L',
              value: 'Professionnel de plus de 1000L'
            }
          ],
          usagePoubelleOrganiqueItems: [
            {
              label: 'Usage professionnel',
              value: 'Usage professionnel'
            },
            {
              label: 'Usage personnel',
              value: 'Usage personnel'
            },
            {
              label: 'Récupération par des services professionnel',
              value: 'Récupération par des services professionnel'
            },
            {
              label: 'Don à une municipalité',
              value: 'Don à une municipalité'
            }
          ],
          regroupezVousVosDeplacementsProfessItems: [
            {
              label: 'Oui j\'essaye de le faire au maximum',
              value: 'Oui j\'essaye de le faire au maximum',
              description: null,
              icon: null,
              color: null,
              background: null
            },
            {
              label: 'J\'ai déjà pensé à le faire mais je n\'en ai pas eu l\'occasion',
              value: 'J\'ai déjà pensé à le faire mais je n\'en ai pas eu l\'occasion'
            },
            {
              label: 'Non je ne peux pas me le permettre',
              value: 'Non je ne peux pas me le permettre'
            }
          ]
        },
        // Data,
        $data: {
          get formStep () {
            return sessionStoragePersistence.value.formStep
          },
          set formStep (formStep) {
            sessionStoragePersistence.value.formStep = formStep
          }
        },
        $inputs: { list: {} },
        $info: {
          test: { scrollTop: 0 },
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
              transportMagasin: 'Je ne sais pas',
              provenanceMatiere: 'Même ville',
              distanceMagasin: 'Même ville',
              provenanceMagasin: 'Producteur',
              nombreEntrepriseCommande: 0,
              poidsMatiere: 0
            } as Partial<Kapix.Entity.IMatiereUser>
          },
          formulaireSurUnePage: {
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
          },
          agricoleForm: {
            scrollTop: 0,
            scrollLeft: 0,
            isValid: true,
            isDirty: false,
            quickSearch: undefined as Nullable<string>,
            item: {} as Partial<Kapix.Entity.IAgricole>
          },
          energieUserForm: {
            scrollTop: 0,
            scrollLeft: 0,
            isValid: true,
            isDirty: false,
            quickSearch: undefined as Nullable<string>,
            item: {} as Partial<Kapix.Entity.IEnergieUser>
          },
          equipementUserForm: {
            scrollTop: 0,
            scrollLeft: 0,
            isValid: true,
            isDirty: false,
            quickSearch: undefined as Nullable<string>,
            item: { nombreEquipement: 0 } as Partial<Kapix.Entity.IEquipementUser>
          },
          fournitureUserForm: {
            scrollTop: 0,
            scrollLeft: 0,
            isValid: true,
            isDirty: false,
            quickSearch: undefined as Nullable<string>,
            item: {
              caractFourniture: 'Loué',
              jeterFourniture: 'Don',
              raisonJeterFourniture: 'Manque de performance',
              tempsGarder: 'Moins d\'un an',
              tempsPossession: 'Moins d\'un an',
              nombrePartageEntreprise: 0,
              nombreFourniture: 0
            } as Partial<Kapix.Entity.IFournitureUser>
          },
          batimentForm: {
            scrollTop: 0,
            scrollLeft: 0,
            isValid: true,
            isDirty: false,
            quickSearch: undefined as Nullable<string>,
            item: {} as Partial<Kapix.Entity.IBatiment>
          },
          chauffageUserForm: {
            scrollTop: 0,
            scrollLeft: 0,
            isValid: true,
            isDirty: false,
            quickSearch: undefined as Nullable<string>,
            item: { valeurChauffer: 0 } as Partial<Kapix.Entity.IChauffageUser>
          },
          energieRenouvelableUserForm: {
            scrollTop: 0,
            scrollLeft: 0,
            isValid: true,
            isDirty: false,
            quickSearch: undefined as Nullable<string>,
            item: { valeurEnergieRenouvelableUser: 0 } as Partial<Kapix.Entity.IEnergieRenouvelableUser>
          },
          venteForm: {
            scrollTop: 0,
            scrollLeft: 0,
            isValid: true,
            isDirty: false,
            quickSearch: undefined as Nullable<string>,
            item: {
              choixEmplacement: 'Proximité gare',
              emplacementBoutique: 'En centre ville',
              garantieMois: 0,
              nombreVenteSemaine: 0,
              restaurerProduit: false,
              recupProduit: false,
              produitRecyclable: false
            } as Partial<Kapix.Entity.IVente>
          },
          emballageUserForm: {
            scrollTop: 0,
            scrollLeft: 0,
            isValid: true,
            isDirty: false,
            quickSearch: undefined as Nullable<string>,
            item: { valeurEmballer: 0 } as Partial<Kapix.Entity.IEmballageUser>
          },
          transportForm: {
            scrollTop: 0,
            scrollLeft: 0,
            isValid: true,
            isDirty: false,
            quickSearch: undefined as Nullable<string>,
            item: {
              nombreKm: 0,
              consoTransport: 0,
              transportPro: false,
              deplacementPro: false,
              calculMoyenne: false,
              fonction: false,
              covoiturage: false,
              MoyenTransports: []
            } as Partial<Kapix.Entity.ITransport>
          },
          dechetsQuestionForm: {
            scrollTop: 0,
            scrollLeft: 0,
            isValid: true,
            isDirty: false,
            quickSearch: undefined as Nullable<string>,
            item: {} as Partial<Kapix.Entity.IDechetsQuestion>
          },
          transportQuestionForm: {
            scrollTop: 0,
            scrollLeft: 0,
            isValid: true,
            isDirty: false,
            quickSearch: undefined as Nullable<string>,
            item: {
              regrouperDeplacement: 'Oui j\'essaye de le faire au maximum',
              tachesADistance: false,
              surplaceObligatoire: false
            } as Partial<Kapix.Entity.ITransportQuestion>
          },
          list: {
            scrollTop: 0,
            scrollLeft: 0
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
  return testFactory(storeId)()
}

export const testRaw = testFactory()
export const test = () => testRaw() as MergeCustomStore<typeof testStoreCustom.instance>
