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
            display: `formulaireGesMatieres`,
            displays: [
              `success`,
              `formulaireGesMatieres`,
              `formulaireGesAgricole`,
              `formulaireGesEnergie`,
              `formulaireGesEquipement`,
              `formulaireFourniture`,
              `formulaireGesBatiment`,
              `formulaireGesChauffage`,
              `formulaireGesEnergieRenouvelable`,
              `formulaireGesVente`,
              `formulaireGesEmballage`,
              `formulaireGesTransport`,
              `formulaireGesDechets`
            ]
          }">
          <template #default>
            <KaButton
              code="commencer-le-formulaire"
              :options="{
                ripple: true,
                click: page.commencerLeFormulaireClick,
                $state: { selected: page.$elements['formulaire']?.display === 'formulaireGesMatieres' }
              }">
              <span v-html="t('formulaireGes.container.container1.formulaire.commencerLeFormulaire.value', `Commencer le formulaire`)" />
            </KaButton>
          </template>
          <template #success>
            <KaText
              code="vous-avez-fini-le-questionnaire"
              :options="{
                style: {
                  color: appData.theme.fontColor2,
                  fontFamily: appData.theme.fontFamily2
                }
              }">
              <h1 v-html="t('formulaireGes.container.container1.formulaire.vousAvezFiniLeQuestionnaire.value', `Vous avez fini le questionnaire !`)" />
            </KaText>
          </template>
          <template #formulaireGesMatieres>
            <!-- MatiereUser Form -->
            <KaContainer
              code="matiere-user-form"
              :data="page.$info.matiereUserForm">
              <!-- Form content -->
              <KaContainer code="form-content">
                <KaSelectInput
                  v-model="page.$info.matiereUserForm.item.provenanceMagasin"
                  code="comment-vous-les-procurez-vous"
                  :options="{
                    labelPosition: `top`,
                    debounce: 10,
                    items: page.$constants.commentVousLesProcurezVousItems,
                    placeholder: t('formulaireGes.container.container1.formulaire.matiereUserForm.formContent.commentVousLesProcurezVous.placeholder', `Comment vous les procurez-vous ?`)
                  }">
                  <template #label>
                    {{ t('formulaireGes.container.container1.formulaire.matiereUserForm.formContent.commentVousLesProcurezVous.label', `Comment vous les procurez-vous ?`) }}
                  </template>
                </KaSelectInput>
                <KaText code="choisissez-votre-matiere">
                  <span v-html="t('formulaireGes.container.container1.formulaire.matiereUserForm.formContent.choisissezVotreMatiere.value', `Choisissez votre matière:`)" />
                </KaText>
                <KaSelectInput
                  v-model="page.$info.matiereUserForm.item.Matiere.categorieMatiere"
                  code="quel-est-la-categorie-de-votre-matiere"
                  :options="{
                    labelPosition: `top`,
                    debounce: 10,
                    items: page.$constants.quelEstLaCategorieDeVotreMatiereItems,
                    placeholder: t('formulaireGes.container.container1.formulaire.matiereUserForm.formContent.quelEstLaCategorieDeVotreMatiere.placeholder', `Quel est la catégorie de votre matière ?`)
                  }">
                  <template #label>
                    {{ t('formulaireGes.container.container1.formulaire.matiereUserForm.formContent.quelEstLaCategorieDeVotreMatiere.label', `Quel est la catégorie de votre matière ?`) }}
                  </template>
                </KaSelectInput>
                <KaText code="quels-choix-caracterisent">
                  <span v-html="t('formulaireGes.container.container1.formulaire.matiereUserForm.formContent.quelsChoixCaracterisent.value', `Quels choix caractérisent vos matières premières?<br> `)" />
                </KaText>
                <KaNavigationPropertyInput
                  v-model="page.$info.matiereUserForm.item.Matiere"
                  code="matiere"
                  :options="{
                    lazyOptions: {
                      throttle: 500,
                      once: true,
                      intersection: { threshold: 0.1 }
                    },
                    placeholder: t('formulaireGes.container.container1.formulaire.matiereUserForm.formContent.matiere.placeholder', `Matiere`)
                  }" />
                <KaSelectInput
                  v-model="page.$info.matiereUserForm.item.distanceMagasin"
                  code="ou-sont-ils-situes-par-rapport-a-vous"
                  :options="{
                    labelPosition: `top`,
                    debounce: 10,
                    items: page.$constants.ouSontIlsSituesParRapportAVousItems,
                    placeholder: t('formulaireGes.container.container1.formulaire.matiereUserForm.formContent.ouSontIlsSituesParRapportAVous.placeholder', `Où sont-ils situés par rapport à vous ?`)
                  }">
                  <template #label>
                    {{ t('formulaireGes.container.container1.formulaire.matiereUserForm.formContent.ouSontIlsSituesParRapportAVous.label', `Où sont-ils situés par rapport à vous ?`) }}
                  </template>
                </KaSelectInput>
                <KaSelectInput
                  v-model="page.$info.matiereUserForm.item.Matiere.nomMatiere"
                  code="quel-est-le-nom-de-votre-matiere"
                  :options="{
                    labelPosition: `top`,
                    debounce: 10,
                    items: page.$constants.quelEstLeNomDeVotreMatiereItems,
                    placeholder: t('formulaireGes.container.container1.formulaire.matiereUserForm.formContent.quelEstLeNomDeVotreMatiere.placeholder', `Quel est le nom de votre matière`)
                  }">
                  <template #label>
                    {{ t('formulaireGes.container.container1.formulaire.matiereUserForm.formContent.quelEstLeNomDeVotreMatiere.label', `Quel est le nom de votre matière`) }}
                  </template>
                </KaSelectInput>
                <KaNumberInput
                  v-model="page.$info.matiereUserForm.item.CompteIdCompte"
                  code="compte-id-compte"
                  :options="{ placeholder: t('formulaireGes.container.container1.formulaire.matiereUserForm.formContent.compteIdCompte.placeholder', `Compte Id Compte`) }" />
                <KaNumberInput
                  v-model="page.$info.matiereUserForm.item.consoTransport"
                  code="quel-est-la-consommation-du-vehicule"
                  :options="{
                    labelPosition: `top`,
                    placeholder: t('formulaireGes.container.container1.formulaire.matiereUserForm.formContent.quelEstLaConsommationDuVehicule.placeholder', `Quel est la consommation du véhicule ?`)
                  }">
                  <template #label>
                    {{ t('formulaireGes.container.container1.formulaire.matiereUserForm.formContent.quelEstLaConsommationDuVehicule.label', `Quel est la consommation du véhicule ?`) }}
                  </template>
                </KaNumberInput>
                <KaNumberInput
                  v-model="page.$info.matiereUserForm.item.poidsMatiere"
                  code="quel-est-le-poids-de-votre-matiere"
                  :options="{
                    labelPosition: `top`,
                    placeholder: t('formulaireGes.container.container1.formulaire.matiereUserForm.formContent.quelEstLePoidsDeVotreMatiere.placeholder', `Quel est le poids de votre matière ?`)
                  }">
                  <template #label>
                    {{ t('formulaireGes.container.container1.formulaire.matiereUserForm.formContent.quelEstLePoidsDeVotreMatiere.label', `Quel est le poids de votre matière ?`) }}
                  </template>
                </KaNumberInput>
                <KaSelectInput
                  v-model="page.$info.matiereUserForm.item.provenanceMatiere"
                  code="quelle-est-la-provenance-de-vos-matieres-p"
                  :options="{
                    labelPosition: `top`,
                    debounce: 10,
                    items: page.$constants.quelleEstLaProvenanceDeVosMatieresPItems,
                    placeholder: t('formulaireGes.container.container1.formulaire.matiereUserForm.formContent.quelleEstLaProvenanceDeVosMatieresP.placeholder', `Quelle est la provenance de vos matières premières?`)
                  }">
                  <template #label>
                    {{ t('formulaireGes.container.container1.formulaire.matiereUserForm.formContent.quelleEstLaProvenanceDeVosMatieresP.label', `Quelle est la provenance de vos matières premières?`) }}
                  </template>
                </KaSelectInput>
                <KaSelectInput
                  v-model="page.$info.matiereUserForm.item.transportMagasin"
                  code="comment-recuperez-vous-votre-commande"
                  :options="{
                    labelPosition: `top`,
                    debounce: 10,
                    items: page.$constants.commentRecuperezVousVotreCommandeItems,
                    placeholder: t('formulaireGes.container.container1.formulaire.matiereUserForm.formContent.commentRecuperezVousVotreCommande.placeholder', `Comment récupérez vous votre commande ?`)
                  }">
                  <template #label>
                    {{ t('formulaireGes.container.container1.formulaire.matiereUserForm.formContent.commentRecuperezVousVotreCommande.label', `Comment récupérez vous votre commande ?`) }}
                  </template>
                </KaSelectInput>
                <KaSliderInput
                  v-model="page.$info.matiereUserForm.item.caracteristiqueNeuve"
                  code="matiere-neuve"
                  :options="{
                    labelPosition: `top`,
                    style: { color: appData.theme.primaryColor },
                    placeholder: t('formulaireGes.container.container1.formulaire.matiereUserForm.formContent.matiereNeuve.placeholder', `Matière neuve`)
                  }">
                  <template #label>
                    {{ t('formulaireGes.container.container1.formulaire.matiereUserForm.formContent.matiereNeuve.label', `Matière neuve`) }}
                  </template>
                </KaSliderInput>
                <KaSliderInput
                  v-model="page.$info.matiereUserForm.item.caracteristiqueOccasion"
                  code="matiere-occasion"
                  :options="{
                    labelPosition: `top`,
                    style: { color: appData.theme.primaryColor },
                    placeholder: t('formulaireGes.container.container1.formulaire.matiereUserForm.formContent.matiereOccasion.placeholder', `Matière occasion`)
                  }">
                  <template #label>
                    {{ t('formulaireGes.container.container1.formulaire.matiereUserForm.formContent.matiereOccasion.label', `Matière occasion`) }}
                  </template>
                </KaSliderInput>
                <KaSliderInput
                  v-model="page.$info.matiereUserForm.item.caracteristiqueRecup"
                  code="matiere-recuperees"
                  :options="{
                    labelPosition: `top`,
                    style: { color: appData.theme.primaryColor },
                    placeholder: t('formulaireGes.container.container1.formulaire.matiereUserForm.formContent.matiereRecuperees.placeholder', `Matière récupérées`)
                  }">
                  <template #label>
                    {{ t('formulaireGes.container.container1.formulaire.matiereUserForm.formContent.matiereRecuperees.label', `Matière récupérées`) }}
                  </template>
                </KaSliderInput>
                <KaSliderInput
                  v-model="page.$info.matiereUserForm.item.caracteristiqueRecyclage"
                  code="matiere-issue-du-recyclage"
                  :options="{
                    labelPosition: `top`,
                    style: { color: appData.theme.primaryColor },
                    placeholder: t('formulaireGes.container.container1.formulaire.matiereUserForm.formContent.matiereIssueDuRecyclage.placeholder', `Matière issue du recyclage`)
                  }">
                  <template #label>
                    {{ t('formulaireGes.container.container1.formulaire.matiereUserForm.formContent.matiereIssueDuRecyclage.label', `Matière issue du recyclage`) }}
                  </template>
                </KaSliderInput>
                <KaSliderInput
                  v-model="page.$info.matiereUserForm.item.caracteristiqueAutoproduite"
                  code="matiere-auto-produite"
                  :options="{
                    labelPosition: `top`,
                    style: { color: appData.theme.primaryColor },
                    placeholder: t('formulaireGes.container.container1.formulaire.matiereUserForm.formContent.matiereAutoProduite.placeholder', `Matière auto-produite`)
                  }">
                  <template #label>
                    {{ t('formulaireGes.container.container1.formulaire.matiereUserForm.formContent.matiereAutoProduite.label', `Matière auto-produite`) }}
                  </template>
                </KaSliderInput>
                <KaNumberInput
                  v-model="page.$info.matiereUserForm.item.nombreEntrepriseCommande"
                  code="faites-vous-des-commandes-groupees-avec-d"
                  :options="{
                    labelPosition: `top`,
                    placeholder: t('formulaireGes.container.container1.formulaire.matiereUserForm.formContent.faitesVousDesCommandesGroupeesAvecD.placeholder', `Faites-vous des commandes groupées avec d'autres entreprises ?`)
                  }">
                  <template #label>
                    {{ t('formulaireGes.container.container1.formulaire.matiereUserForm.formContent.faitesVousDesCommandesGroupeesAvecD.label', `Faites-vous des commandes groupées avec d'autres entreprises ?`) }}
                  </template>
                </KaNumberInput>
                <KaSelectInput
                  v-model="page.$info.matiereUserForm.item.plusProcheQ"
                  code="pour-quelle-raison-ne-vous-approvisionne"
                  :options="{
                    labelPosition: `top`,
                    debounce: 10,
                    items: page.$constants.pourQuelleRaisonNeVousApprovisionneItems,
                    placeholder: t('formulaireGes.container.container1.formulaire.matiereUserForm.formContent.pourQuelleRaisonNeVousApprovisionne.placeholder', `Pour quelle raison ne vous approvisionnez-vous pas plus près ?`)
                  }">
                  <template #label>
                    {{ t('formulaireGes.container.container1.formulaire.matiereUserForm.formContent.pourQuelleRaisonNeVousApprovisionne.label', `Pour quelle raison ne vous approvisionnez-vous pas plus près ?`) }}
                  </template>
                </KaSelectInput>
                <KaSelectInput
                  v-model="page.$info.matiereUserForm.item.certitudeduChoixQ"
                  code="en-etes-vous-sur"
                  :options="{
                    labelPosition: `top`,
                    debounce: 10,
                    items: page.$constants.enEtesVousSurItems,
                    placeholder: t('formulaireGes.container.container1.formulaire.matiereUserForm.formContent.enEtesVousSur.placeholder', `En êtes vous sur ?`)
                  }">
                  <template #label>
                    {{ t('formulaireGes.container.container1.formulaire.matiereUserForm.formContent.enEtesVousSur.label', `En êtes vous sur ?`) }}
                  </template>
                </KaSelectInput>
                <KaSelectInput
                  v-model="page.$info.matiereUserForm.item.changerApprovisionnementQ"
                  code="avez-vous-deja-pense-a-changer-votre-proce"
                  :options="{
                    labelPosition: `top`,
                    debounce: 10,
                    items: page.$constants.avezVousDejaPenseAChangerVotreProceItems,
                    placeholder: t('formulaireGes.container.container1.formulaire.matiereUserForm.formContent.avezVousDejaPenseAChangerVotreProce.placeholder', `Avez-vous déjà pensé à changer votre processus d'approvisionnement ?`)
                  }">
                  <template #label>
                    {{ t('formulaireGes.container.container1.formulaire.matiereUserForm.formContent.avezVousDejaPenseAChangerVotreProce.label', `Avez-vous déjà pensé à changer votre processus d'approvisionnement ?`) }}
                  </template>
                </KaSelectInput>
                <KaYesNoInput
                  v-model="page.$info.matiereUserForm.item.Saisonnalite"
                  code="saisonnalite"
                  :options="{
                    labelPosition: `top`,
                    debounce: 100
                  }">
                  <template #label>
                    {{ t('formulaireGes.container.container1.formulaire.matiereUserForm.formContent.saisonnalite.label', `Saisonnalité`) }}
                  </template>
                </KaYesNoInput>
                <KaNavigationPropertyInput
                  v-model="page.$info.matiereUserForm.item.MoyenTransport"
                  code="moyen-transport"
                  :options="{
                    lazyOptions: {
                      throttle: 500,
                      once: true,
                      intersection: { threshold: 0.1 }
                    },
                    placeholder: t('formulaireGes.container.container1.formulaire.matiereUserForm.formContent.moyenTransport.placeholder', `Moyen Transport`)
                  }" />
              </KaContainer>
              <!-- Bouton matière -->
              <KaContainer code="bouton-matiere">
                <KaButton
                  code="nouvelle-matiere"
                  :options="{
                    ripple: true,
                    style: {
                      color: `$invert`,
                      innerBackgroundColor: appData.theme.secondaryColor
                    },
                    click: page.nouvelleMatiereClick
                  }">
                  <span v-html="t('formulaireGes.container.container1.formulaire.matiereUserForm.boutonMatiere.nouvelleMatiere.value', `Sauvegarder la matière`)" />
                </KaButton>
                <KaButton
                  code="suivant"
                  :options="{
                    ripple: true,
                    style: {
                      color: `$invert`,
                      innerBackgroundColor: appData.theme.secondaryColor
                    },
                    click: page.suivantClick
                  }">
                  <span v-html="t('formulaireGes.container.container1.formulaire.matiereUserForm.boutonMatiere.suivant.value', `Suivant`)" />
                </KaButton>
              </KaContainer>
            </KaContainer>
          </template>
          <template #formulaireGesAgricole>
            <!-- Agricole Form -->
            <KaContainer
              code="agricole-form"
              :data="page.$info.agricoleForm">
              <!-- Form content -->
              <KaContainer code="container-2">
                <KaNumberInput
                  v-model="page.$info.agricoleForm.item.nombreDeTete"
                  code="combien-de-tete"
                  :options="{
                    labelPosition: `top`,
                    placeholder: t('formulaireGes.container.container1.formulaire.agricoleForm.container2.combienDeTete.placeholder', `Combien de tête ?`)
                  }">
                  <template #label>
                    {{ t('formulaireGes.container.container1.formulaire.agricoleForm.container2.combienDeTete.label', `Combien de tête ?`) }}
                  </template>
                </KaNumberInput>
                <KaNumberInput
                  v-model="page.$info.agricoleForm.item.surfaceAgricole"
                  code="quel-est-la-surface-de-votre-exploitation"
                  :options="{
                    labelPosition: `top`,
                    placeholder: t('formulaireGes.container.container1.formulaire.agricoleForm.container2.quelEstLaSurfaceDeVotreExploitation.placeholder', `Quel est la surface de votre exploitation agricole?`)
                  }">
                  <template #label>
                    {{ t('formulaireGes.container.container1.formulaire.agricoleForm.container2.quelEstLaSurfaceDeVotreExploitation.label', `Quel est la surface de votre exploitation agricole?`) }}
                  </template>
                </KaNumberInput>
                <KaNumberInput
                  v-model="page.$info.agricoleForm.item.nombreDeMachines"
                  code="utilisez-vous-des-machines-agricoles"
                  :options="{
                    labelPosition: `top`,
                    placeholder: t('formulaireGes.container.container1.formulaire.agricoleForm.container2.utilisezVousDesMachinesAgricoles.placeholder', `Utilisez- vous des machines agricoles?`)
                  }">
                  <template #label>
                    {{ t('formulaireGes.container.container1.formulaire.agricoleForm.container2.utilisezVousDesMachinesAgricoles.label', `Utilisez- vous des machines agricoles?`) }}
                  </template>
                </KaNumberInput>
                <KaSliderInput
                  v-model="page.$info.agricoleForm.item.compost"
                  code="compost"
                  :options="{
                    labelPosition: `top`,
                    style: { color: appData.theme.primaryColor },
                    placeholder: t('formulaireGes.container.container1.formulaire.agricoleForm.container2.compost.placeholder', `Compost`)
                  }">
                  <template #label>
                    {{ t('formulaireGes.container.container1.formulaire.agricoleForm.container2.compost.label', `Compost`) }}
                  </template>
                </KaSliderInput>
                <KaSliderInput
                  v-model="page.$info.agricoleForm.item.engraischimique"
                  code="engraischimique"
                  :options="{
                    labelPosition: `top`,
                    style: { color: appData.theme.primaryColor },
                    placeholder: t('formulaireGes.container.container1.formulaire.agricoleForm.container2.engraischimique.placeholder', `Engraischimique`)
                  }">
                  <template #label>
                    {{ t('formulaireGes.container.container1.formulaire.agricoleForm.container2.engraischimique.label', `Engraischimique`) }}
                  </template>
                </KaSliderInput>
                <KaAutoCompleteInput
                  v-model="page.$info.agricoleForm.item.alternativenaturelQ"
                  code="avez-vous-deja-pense-a-opter-pour-une-alter"
                  :options="{
                    labelPosition: `top`,
                    debounce: 0,
                    items: page.$constants.avezVousDejaPenseAOpterPourUneAlterItems,
                    appendIcon: `i-fa-solid:search`,
                    placeholder: t('formulaireGes.container.container1.formulaire.agricoleForm.container2.avezVousDejaPenseAOpterPourUneAlter.placeholder', `Avez-vous déjà pensé à opter pour une alternative plus naturel?`)
                  }">
                  <template #label>
                    {{ t('formulaireGes.container.container1.formulaire.agricoleForm.container2.avezVousDejaPenseAOpterPourUneAlter.label', `Avez-vous déjà pensé à opter pour une alternative plus naturel?`) }}
                  </template>
                </KaAutoCompleteInput>
              </KaContainer>
              <!-- Boutons -->
              <KaContainer code="boutons">
                <KaButton
                  code="retour"
                  :options="{
                    ripple: true,
                    style: {
                      color: `$invert`,
                      innerBackgroundColor: appData.theme.secondaryColor
                    },
                    click: page.retourClick
                  }">
                  <span v-html="t('formulaireGes.container.container1.formulaire.agricoleForm.boutons.retour.value', `Retour`)" />
                </KaButton>
                <KaButton
                  code="button-1"
                  :options="{
                    ripple: true,
                    style: {
                      color: `$invert`,
                      innerBackgroundColor: appData.theme.secondaryColor
                    },
                    click: page.button1Click
                  }">
                  <span v-html="t('formulaireGes.container.container1.formulaire.agricoleForm.boutons.button1.value', `Suivant`)" />
                </KaButton>
                <KaButton
                  code="button-2"
                  :options="{
                    ripple: true,
                    style: {
                      color: `$invert`,
                      innerBackgroundColor: appData.theme.secondaryColor
                    },
                    click: page.button2Click
                  }">
                  <span v-html="t('formulaireGes.container.container1.formulaire.agricoleForm.boutons.button2.value', `Suivant`)" />
                </KaButton>
              </KaContainer>
            </KaContainer>
          </template>
          <template #formulaireGesEnergie>
            <!-- EnergieUser Form -->
            <KaContainer
              code="energie-user-form"
              :data="page.$info.energieUserForm">
              <!-- Form content -->
              <KaContainer code="container-3">
                <KaNumberInput
                  v-model="page.$info.energieUserForm.item.valeurEnergieUser"
                  code="valeur-energie-user"
                  :options="{
                    labelPosition: `top`,
                    placeholder: t('formulaireGes.container.container1.formulaire.energieUserForm.container3.valeurEnergieUser.placeholder', `Valeur Energie User`)
                  }">
                  <template #label>
                    {{ t('formulaireGes.container.container1.formulaire.energieUserForm.container3.valeurEnergieUser.label', `Valeur Energie User`) }}
                  </template>
                </KaNumberInput>
                <KaNavigationPropertyInput
                  v-model="page.$info.energieUserForm.item.Energie"
                  code="energie"
                  :options="{
                    lazyOptions: {
                      throttle: 500,
                      once: true,
                      intersection: { threshold: 0.1 }
                    },
                    placeholder: t('formulaireGes.container.container1.formulaire.energieUserForm.container3.energie.placeholder', `Energie`)
                  }" />
                <!-- Boutons etape formulaire -->
                <KaContainer code="boutons-etape-formulaire">
                  <KaButton
                    code="button-3"
                    :options="{
                      ripple: true,
                      style: {
                        color: `$invert`,
                        innerBackgroundColor: appData.theme.secondaryColor
                      },
                      click: page.button3Click
                    }">
                    <span v-html="t('formulaireGes.container.container1.formulaire.energieUserForm.container3.boutonsEtapeFormulaire.button3.value', `Retour`)" />
                  </KaButton>
                  <KaButton
                    code="button-4"
                    :options="{
                      ripple: true,
                      style: {
                        color: `$invert`,
                        innerBackgroundColor: appData.theme.secondaryColor
                      },
                      click: page.button4Click
                    }">
                    <span v-html="t('formulaireGes.container.container1.formulaire.energieUserForm.container3.boutonsEtapeFormulaire.button4.value', `Suivant`)" />
                  </KaButton>
                  <KaButton
                    code="enregistrer"
                    :options="{
                      ripple: true,
                      style: {
                        color: `$invert`,
                        innerBackgroundColor: appData.theme.secondaryColor
                      },
                      click: page.enregistrerClick
                    }">
                    <span v-html="t('formulaireGes.container.container1.formulaire.energieUserForm.container3.boutonsEtapeFormulaire.enregistrer.value', `Enregistrer l'énergie`)" />
                  </KaButton>
                </KaContainer>
              </KaContainer>
            </KaContainer>
          </template>
          <template #formulaireGesEquipement>
            <!-- EquipementUser Form -->
            <KaContainer
              code="equipement-user-form"
              :data="page.$info.equipementUserForm">
              <!-- Form content -->
              <KaContainer code="container-4">
                <KaNumberInput
                  v-model="page.$info.equipementUserForm.item.nombreEquipement"
                  code="nombre-equipement"
                  :options="{
                    labelPosition: `top`,
                    placeholder: t('formulaireGes.container.container1.formulaire.equipementUserForm.container4.nombreEquipement.placeholder', `Nombre Equipement`)
                  }">
                  <template #label>
                    {{ t('formulaireGes.container.container1.formulaire.equipementUserForm.container4.nombreEquipement.label', `Nombre Equipement`) }}
                  </template>
                </KaNumberInput>
                <KaSelectInput
                  v-model="page.$info.equipementUserForm.item.dureeEquipement"
                  code="depuis-combien-de-temps-possedez-vous-ces"
                  :options="{
                    labelPosition: `top`,
                    debounce: 10,
                    items: page.$constants.depuisCombienDeTempsPossedezVousCesItems,
                    placeholder: t('formulaireGes.container.container1.formulaire.equipementUserForm.container4.depuisCombienDeTempsPossedezVousCes.placeholder', `Depuis combien de temps possédez vous ces équipements?`)
                  }">
                  <template #label>
                    {{ t('formulaireGes.container.container1.formulaire.equipementUserForm.container4.depuisCombienDeTempsPossedezVousCes.label', `Depuis combien de temps possédez vous ces équipements?`) }}
                  </template>
                </KaSelectInput>
                <KaSelectInput
                  v-model="page.$info.equipementUserForm.item.caractEquipement"
                  code="vos-equipements-ont-ils-ete-achetes-neufs"
                  :options="{
                    labelPosition: `top`,
                    debounce: 10,
                    items: page.$constants.vosEquipementsOntIlsEteAchetesNeufsItems,
                    placeholder: t('formulaireGes.container.container1.formulaire.equipementUserForm.container4.vosEquipementsOntIlsEteAchetesNeufs.placeholder', `Vos équipements ont-ils été achetés neufs, reconditionnés ou de seconde main? Sont-ils loués?`)
                  }">
                  <template #label>
                    {{ t('formulaireGes.container.container1.formulaire.equipementUserForm.container4.vosEquipementsOntIlsEteAchetesNeufs.label', `Vos équipements ont-ils été achetés neufs, reconditionnés ou de seconde main? Sont-ils loués?`) }}
                  </template>
                </KaSelectInput>
                <KaSelectInput
                  v-model="page.$info.equipementUserForm.item.garderEquipement"
                  code="combien-de-temps-gardez-vous-votre-materi"
                  :options="{
                    labelPosition: `top`,
                    debounce: 10,
                    items: page.$constants.combienDeTempsGardezVousVotreMateriItems,
                    placeholder: t('formulaireGes.container.container1.formulaire.equipementUserForm.container4.combienDeTempsGardezVousVotreMateri.placeholder', `Combien de temps gardez vous votre matériel en moyenne?`)
                  }">
                  <template #label>
                    {{ t('formulaireGes.container.container1.formulaire.equipementUserForm.container4.combienDeTempsGardezVousVotreMateri.label', `Combien de temps gardez vous votre matériel en moyenne?`) }}
                  </template>
                </KaSelectInput>
                <KaSelectInput
                  v-model="page.$info.equipementUserForm.item.raisonJeterEquipement"
                  code="quest-ce-qui-vous-pousse-a-vous-en-debarass"
                  :options="{
                    labelPosition: `top`,
                    debounce: 10,
                    items: page.$constants.questCeQuiVousPousseAVousEnDebarassItems,
                    placeholder: t('formulaireGes.container.container1.formulaire.equipementUserForm.container4.questCeQuiVousPousseAVousEnDebarass.placeholder', `Qu'est-ce qui vous pousse à vous en débarasser?`)
                  }">
                  <template #label>
                    {{ t('formulaireGes.container.container1.formulaire.equipementUserForm.container4.questCeQuiVousPousseAVousEnDebarass.label', `Qu'est-ce qui vous pousse à vous en débarasser?`) }}
                  </template>
                </KaSelectInput>
                <KaSelectInput
                  v-model="page.$info.equipementUserForm.item.jeterEquipement"
                  code="que-faites-vous-de-vos-fournitures-une-foi"
                  :options="{
                    labelPosition: `top`,
                    debounce: 10,
                    items: page.$constants.queFaitesVousDeVosFournituresUneFoiItems,
                    placeholder: t('formulaireGes.container.container1.formulaire.equipementUserForm.container4.queFaitesVousDeVosFournituresUneFoi.placeholder', `Que faites vous de vos fournitures une fois qu'elles ne servent plus?`)
                  }">
                  <template #label>
                    {{ t('formulaireGes.container.container1.formulaire.equipementUserForm.container4.queFaitesVousDeVosFournituresUneFoi.label', `Que faites vous de vos fournitures une fois qu'elles ne servent plus?`) }}
                  </template>
                </KaSelectInput>
                <KaNumberInput
                  v-model="page.$info.equipementUserForm.item.nombreEntreprisePartage"
                  code="partager-vous-lusage-des-machines-avec-da"
                  :options="{
                    labelPosition: `top`,
                    placeholder: t('formulaireGes.container.container1.formulaire.equipementUserForm.container4.partagerVousLusageDesMachinesAvecDa.placeholder', `Partager vous l'usage des machines avec d'autres entreprises?`)
                  }">
                  <template #label>
                    {{ t('formulaireGes.container.container1.formulaire.equipementUserForm.container4.partagerVousLusageDesMachinesAvecDa.label', `Partager vous l'usage des machines avec d'autres entreprises?`) }}
                  </template>
                </KaNumberInput>
                <KaNavigationPropertyInput
                  v-model="page.$info.equipementUserForm.item.Equipement"
                  code="equipement"
                  :options="{
                    lazyOptions: {
                      throttle: 500,
                      once: true,
                      intersection: { threshold: 0.1 }
                    },
                    placeholder: t('formulaireGes.container.container1.formulaire.equipementUserForm.container4.equipement.placeholder', `Equipement`)
                  }" />
                <!-- Boutons etape formulaire -->
                <KaContainer code="container-5">
                  <KaButton
                    code="button-5"
                    :options="{
                      ripple: true,
                      style: {
                        color: `$invert`,
                        innerBackgroundColor: appData.theme.secondaryColor
                      },
                      click: page.button5Click
                    }">
                    <span v-html="t('formulaireGes.container.container1.formulaire.equipementUserForm.container4.container5.button5.value', `Retour`)" />
                  </KaButton>
                  <KaButton
                    code="button-6"
                    :options="{
                      ripple: true,
                      style: {
                        color: `$invert`,
                        innerBackgroundColor: appData.theme.secondaryColor
                      },
                      click: page.button6Click
                    }">
                    <span v-html="t('formulaireGes.container.container1.formulaire.equipementUserForm.container4.container5.button6.value', `Suivant`)" />
                  </KaButton>
                  <KaButton
                    code="button-7"
                    :options="{
                      ripple: true,
                      style: {
                        color: `$invert`,
                        innerBackgroundColor: appData.theme.secondaryColor
                      },
                      click: page.button7Click
                    }">
                    <span v-html="t('formulaireGes.container.container1.formulaire.equipementUserForm.container4.container5.button7.value', `Enregistrer l'équipement`)" />
                  </KaButton>
                </KaContainer>
              </KaContainer>
            </KaContainer>
          </template>
          <template #formulaireFourniture>
            <!-- FournitureUser Form -->
            <KaContainer
              code="fourniture-user-form"
              :data="page.$info.fournitureUserForm">
              <!-- Form content -->
              <KaContainer code="container-6">
                <KaNumberInput
                  v-model="page.$info.fournitureUserForm.item.nombreFourniture"
                  code="valeur-fourniture-utilisees"
                  :options="{
                    labelPosition: `top`,
                    placeholder: t('formulaireGes.container.container1.formulaire.fournitureUserForm.container6.valeurFournitureUtilisees.placeholder', `Valeur Fourniture Utilisees`)
                  }">
                  <template #label>
                    {{ t('formulaireGes.container.container1.formulaire.fournitureUserForm.container6.valeurFournitureUtilisees.label', `Valeur Fourniture Utilisees`) }}
                  </template>
                </KaNumberInput>
                <KaNavigationPropertyInput
                  v-model="page.$info.fournitureUserForm.item.Fournitures"
                  code="fournitures"
                  :options="{
                    lazyOptions: {
                      throttle: 500,
                      once: true,
                      intersection: { threshold: 0.1 }
                    },
                    placeholder: t('formulaireGes.container.container1.formulaire.fournitureUserForm.container6.fournitures.placeholder', `Fournitures`)
                  }" />
              </KaContainer>
            </KaContainer>
            <!-- Boutons retour suivant -->
            <KaContainer code="boutons-retour-suivant">
              <KaButton
                code="button-8"
                :options="{
                  ripple: true,
                  style: {
                    color: `$invert`,
                    innerBackgroundColor: appData.theme.secondaryColor
                  },
                  click: page.button8Click
                }">
                <span v-html="t('formulaireGes.container.container1.formulaire.boutonsRetourSuivant.button8.value', `Retour`)" />
              </KaButton>
              <KaButton
                code="button-9"
                :options="{
                  ripple: true,
                  style: {
                    color: `$invert`,
                    innerBackgroundColor: appData.theme.secondaryColor
                  },
                  click: page.button9Click
                }">
                <span v-html="t('formulaireGes.container.container1.formulaire.boutonsRetourSuivant.button9.value', `Suivant`)" />
              </KaButton>
              <KaButton
                code="button-10"
                :options="{
                  ripple: true,
                  style: {
                    color: `$invert`,
                    innerBackgroundColor: appData.theme.secondaryColor
                  },
                  click: page.button10Click
                }">
                <span v-html="t('formulaireGes.container.container1.formulaire.boutonsRetourSuivant.button10.value', `Enregistrer la fourniture`)" />
              </KaButton>
            </KaContainer>
          </template>
          <template #formulaireGesBatiment>
            <!-- Batiment Form -->
            <KaContainer
              code="batiment-form"
              :data="page.$info.batimentForm">
              <!-- Form content -->
              <KaContainer code="container-7">
                <KaSelectInput
                  v-model="page.$info.batimentForm.item.lieuBatiment"
                  code="dans-quel-genre-de-batiment-ont-lieu-la-pro"
                  :options="{
                    labelPosition: `top`,
                    debounce: 10,
                    items: page.$constants.dansQuelGenreDeBatimentOntLieuLaProItems,
                    placeholder: t('formulaireGes.container.container1.formulaire.batimentForm.container7.dansQuelGenreDeBatimentOntLieuLaPro.placeholder', `Dans quel genre de batiment ont lieu la production de vos produits?`)
                  }">
                  <template #label>
                    {{ t('formulaireGes.container.container1.formulaire.batimentForm.container7.dansQuelGenreDeBatimentOntLieuLaPro.label', `Dans quel genre de batiment ont lieu la production de vos produits?`) }}
                  </template>
                </KaSelectInput>
                <KaNumberInput
                  v-model="page.$info.batimentForm.item.surfaceBatiment"
                  code="quel-est-la-surface-total-du-batiment"
                  :options="{
                    labelPosition: `top`,
                    placeholder: t('formulaireGes.container.container1.formulaire.batimentForm.container7.quelEstLaSurfaceTotalDuBatiment.placeholder', `Quel est la surface total du bâtiment?`)
                  }">
                  <template #label>
                    {{ t('formulaireGes.container.container1.formulaire.batimentForm.container7.quelEstLaSurfaceTotalDuBatiment.label', `Quel est la surface total du bâtiment?`) }}
                  </template>
                </KaNumberInput>
                <KaNumberInput
                  v-model="page.$info.batimentForm.item.nbEntreprisesPartageLieu"
                  code="il-yat-il-dautres-entreprises-au-sein-du-ba"
                  :options="{
                    labelPosition: `top`,
                    placeholder: t('formulaireGes.container.container1.formulaire.batimentForm.container7.ilYATIlDautresEntreprisesAuSeinDuBa.placeholder', `Il y a-t-il d'autres entreprises au sein du bâtiment?`)
                  }">
                  <template #label>
                    {{ t('formulaireGes.container.container1.formulaire.batimentForm.container7.ilYATIlDautresEntreprisesAuSeinDuBa.label', `Il y a-t-il d'autres entreprises au sein du bâtiment?`) }}
                  </template>
                </KaNumberInput>
                <KaSelectInput
                  v-model="page.$info.batimentForm.item.classeEnergitique"
                  code="quel-est-la-classe-energetique-du-batimen"
                  :options="{
                    labelPosition: `top`,
                    debounce: 10,
                    items: page.$constants.quelEstLaClasseEnergetiqueDuBatimenItems,
                    placeholder: t('formulaireGes.container.container1.formulaire.batimentForm.container7.quelEstLaClasseEnergetiqueDuBatimen.placeholder', `Quel est la classe énergétique du bâtiment?`)
                  }">
                  <template #label>
                    {{ t('formulaireGes.container.container1.formulaire.batimentForm.container7.quelEstLaClasseEnergetiqueDuBatimen.label', `Quel est la classe énergétique du bâtiment?`) }}
                  </template>
                </KaSelectInput>
                <KaNumberInput
                  v-model="page.$info.batimentForm.item.consoElectrique"
                  code="quel-est-la-consommation-electrique-du-ba"
                  :options="{
                    labelPosition: `top`,
                    placeholder: t('formulaireGes.container.container1.formulaire.batimentForm.container7.quelEstLaConsommationElectriqueDuBa.placeholder', `Quel est la consommation electrique du bâtiment? (euros ou kWh)`)
                  }">
                  <template #label>
                    {{ t('formulaireGes.container.container1.formulaire.batimentForm.container7.quelEstLaConsommationElectriqueDuBa.label', `Quel est la consommation electrique du bâtiment? (euros ou kWh)`) }}
                  </template>
                </KaNumberInput>
                <KaNumberInput
                  v-model="page.$info.batimentForm.item.pNTBTNsvZibWtSmRoigUmq"
                  code="partagez-vous-lusage-des-machines-avec-da"
                  :options="{
                    labelPosition: `top`,
                    placeholder: t('formulaireGes.container.container1.formulaire.batimentForm.container7.partagezVousLusageDesMachinesAvecDa.placeholder', `Partagez vous l'usage des machines avec d'autres entreprises?`)
                  }">
                  <template #label>
                    {{ t('formulaireGes.container.container1.formulaire.batimentForm.container7.partagezVousLusageDesMachinesAvecDa.label', `Partagez vous l'usage des machines avec d'autres entreprises?`) }}
                  </template>
                </KaNumberInput>
              </KaContainer>
            </KaContainer>
            <!-- Boutons retour suivant enregistrer -->
            <KaContainer code="boutons-retour-suivant-enregistrer">
              <KaButton
                code="button-11"
                :options="{
                  ripple: true,
                  style: {
                    color: `$invert`,
                    innerBackgroundColor: appData.theme.secondaryColor
                  },
                  click: page.button11Click
                }">
                <span v-html="t('formulaireGes.container.container1.formulaire.boutonsRetourSuivantEnregistrer.button11.value', `Retour`)" />
              </KaButton>
              <KaButton
                code="button-12"
                :options="{
                  ripple: true,
                  style: {
                    color: `$invert`,
                    innerBackgroundColor: appData.theme.secondaryColor
                  },
                  click: page.button12Click
                }">
                <span v-html="t('formulaireGes.container.container1.formulaire.boutonsRetourSuivantEnregistrer.button12.value', `Suivant`)" />
              </KaButton>
            </KaContainer>
          </template>
          <template #formulaireGesChauffage>
            <!-- ChauffageUser Form -->
            <KaContainer
              code="chauffage-user-form"
              :data="page.$info.chauffageUserForm">
              <!-- Form content -->
              <KaContainer code="container-8">
                <KaNumberInput
                  v-model="page.$info.chauffageUserForm.item.valeurChauffer"
                  code="valeur-chauffer"
                  :options="{
                    labelPosition: `top`,
                    placeholder: t('formulaireGes.container.container1.formulaire.chauffageUserForm.container8.valeurChauffer.placeholder', `Valeur Chauffer`)
                  }">
                  <template #label>
                    {{ t('formulaireGes.container.container1.formulaire.chauffageUserForm.container8.valeurChauffer.label', `Valeur Chauffer`) }}
                  </template>
                </KaNumberInput>
                <KaNavigationPropertyInput
                  v-model="page.$info.chauffageUserForm.item.Chauffage"
                  code="chauffage"
                  :options="{
                    lazyOptions: {
                      throttle: 500,
                      once: true,
                      intersection: { threshold: 0.1 }
                    },
                    placeholder: t('formulaireGes.container.container1.formulaire.chauffageUserForm.container8.chauffage.placeholder', `Chauffage`)
                  }" />
                <!-- Boutons retour suivant enregistrer -->
                <KaContainer code="container-9">
                  <KaButton
                    code="button-13"
                    :options="{
                      ripple: true,
                      style: {
                        color: `$invert`,
                        innerBackgroundColor: appData.theme.secondaryColor
                      },
                      click: page.button13Click
                    }">
                    <span v-html="t('formulaireGes.container.container1.formulaire.chauffageUserForm.container8.container9.button13.value', `Retour`)" />
                  </KaButton>
                  <KaButton
                    code="button-14"
                    :options="{
                      ripple: true,
                      style: {
                        color: `$invert`,
                        innerBackgroundColor: appData.theme.secondaryColor
                      },
                      click: page.button14Click
                    }">
                    <span v-html="t('formulaireGes.container.container1.formulaire.chauffageUserForm.container8.container9.button14.value', `Suivant`)" />
                  </KaButton>
                  <KaButton
                    code="button-15"
                    :options="{
                      ripple: true,
                      style: {
                        color: `$invert`,
                        innerBackgroundColor: appData.theme.secondaryColor
                      },
                      click: page.button15Click
                    }">
                    <span v-html="t('formulaireGes.container.container1.formulaire.chauffageUserForm.container8.container9.button15.value', `Enregistrer le chauffage`)" />
                  </KaButton>
                </KaContainer>
              </KaContainer>
            </KaContainer>
          </template>
          <template #formulaireGesEnergieRenouvelable>
            <!-- EnergieRenouvelableUser Form -->
            <KaContainer
              code="energie-renouvelable-user-form"
              :data="page.$info.energieRenouvelableUserForm">
              <!-- Form content -->
              <KaContainer code="container-10">
                <KaNumberInput
                  v-model="page.$info.energieRenouvelableUserForm.item.valeurEnergieRenouvelableUser"
                  code="valeur-energie-renouvelable-user"
                  :options="{
                    labelPosition: `top`,
                    placeholder: t('formulaireGes.container.container1.formulaire.energieRenouvelableUserForm.container10.valeurEnergieRenouvelableUser.placeholder', `Valeur Energie Renouvelable User`)
                  }">
                  <template #label>
                    {{ t('formulaireGes.container.container1.formulaire.energieRenouvelableUserForm.container10.valeurEnergieRenouvelableUser.label', `Valeur Energie Renouvelable User`) }}
                  </template>
                </KaNumberInput>
                <KaNavigationPropertyInput
                  v-model="page.$info.energieRenouvelableUserForm.item.EnergieRenouvelables"
                  code="energie-renouvelables"
                  :options="{
                    lazyOptions: {
                      throttle: 500,
                      once: true,
                      intersection: { threshold: 0.1 }
                    },
                    placeholder: t('formulaireGes.container.container1.formulaire.energieRenouvelableUserForm.container10.energieRenouvelables.placeholder', `Energie renouvelables`)
                  }" />
              </KaContainer>
              <!-- Boutons retour suivant enregistrer -->
              <KaContainer code="container-11">
                <KaButton
                  code="button-16"
                  :options="{
                    ripple: true,
                    style: {
                      color: `$invert`,
                      innerBackgroundColor: appData.theme.secondaryColor
                    },
                    click: page.button16Click
                  }">
                  <span v-html="t('formulaireGes.container.container1.formulaire.energieRenouvelableUserForm.container11.button16.value', `Retour`)" />
                </KaButton>
                <KaButton
                  code="button-17"
                  :options="{
                    ripple: true,
                    style: {
                      color: `$invert`,
                      innerBackgroundColor: appData.theme.secondaryColor
                    },
                    click: page.button17Click
                  }">
                  <span v-html="t('formulaireGes.container.container1.formulaire.energieRenouvelableUserForm.container11.button17.value', `Suivant`)" />
                </KaButton>
                <KaButton
                  code="button-18"
                  :options="{
                    ripple: true,
                    style: {
                      color: `$invert`,
                      innerBackgroundColor: appData.theme.secondaryColor
                    },
                    click: page.button18Click
                  }">
                  <span v-html="t('formulaireGes.container.container1.formulaire.energieRenouvelableUserForm.container11.button18.value', `Enregistrer le chauffage`)" />
                </KaButton>
              </KaContainer>
            </KaContainer>
          </template>
          <template #formulaireGesVente>
            <!-- Vente Form -->
            <KaContainer
              code="vente-form"
              :data="page.$info.venteForm">
              <!-- Form content -->
              <KaContainer code="container-12">
                <KaNumberInput
                  v-model="page.$info.venteForm.item.nombreVenteSemaine"
                  code="en-moyenne-combien-de-produits-vendez-vou"
                  :options="{
                    labelPosition: `top`,
                    placeholder: t('formulaireGes.container.container1.formulaire.venteForm.container12.enMoyenneCombienDeProduitsVendezVou.placeholder', `En moyenne, combien de produits vendez-vous par semaine?`)
                  }">
                  <template #label>
                    {{ t('formulaireGes.container.container1.formulaire.venteForm.container12.enMoyenneCombienDeProduitsVendezVou.label', `En moyenne, combien de produits vendez-vous par semaine?`) }}
                  </template>
                </KaNumberInput>
                <KaNumberInput
                  v-model="page.$info.venteForm.item.garantieMois"
                  code="vos-produits-sont-ils-garantis"
                  :options="{
                    labelPosition: `top`,
                    placeholder: t('formulaireGes.container.container1.formulaire.venteForm.container12.vosProduitsSontIlsGarantis.placeholder', `Vos produits sont-ils garantis?`)
                  }">
                  <template #label>
                    {{ t('formulaireGes.container.container1.formulaire.venteForm.container12.vosProduitsSontIlsGarantis.label', `Vos produits sont-ils garantis?`) }}
                  </template>
                </KaNumberInput>
                <KaYesNoInput
                  v-model="page.$info.venteForm.item.produitRecyclable"
                  code="vos-produits-sont-ils-recyclables"
                  :options="{
                    labelPosition: `top`,
                    debounce: 100
                  }">
                  <template #label>
                    {{ t('formulaireGes.container.container1.formulaire.venteForm.container12.vosProduitsSontIlsRecyclables.label', `Vos produits sont-ils recyclables?`) }}
                  </template>
                </KaYesNoInput>
                <KaYesNoInput
                  v-model="page.$info.venteForm.item.recupProduit"
                  code="recuperez-vous-vos-produits-en-fin-de-vie"
                  :options="{
                    labelPosition: `top`,
                    debounce: 100
                  }">
                  <template #label>
                    {{ t('formulaireGes.container.container1.formulaire.venteForm.container12.recuperezVousVosProduitsEnFinDeVie.label', `Récupérez-vous vos produits en fin de vie?`) }}
                  </template>
                </KaYesNoInput>
                <KaYesNoInput
                  v-model="page.$info.venteForm.item.restaurerProduit"
                  code="restaurez-vous-les-produits"
                  :options="{
                    labelPosition: `top`,
                    debounce: 100
                  }">
                  <template #label>
                    {{ t('formulaireGes.container.container1.formulaire.venteForm.container12.restaurezVousLesProduits.label', `Restaurez-vous les produits?`) }}
                  </template>
                </KaYesNoInput>
                <KaSliderInput
                  v-model="page.$info.venteForm.item.Locaux"
                  code="locaux"
                  :options="{
                    labelPosition: `top`,
                    style: { color: appData.theme.primaryColor },
                    placeholder: t('formulaireGes.container.container1.formulaire.venteForm.container12.locaux.placeholder', `Locaux`)
                  }">
                  <template #label>
                    {{ t('formulaireGes.container.container1.formulaire.venteForm.container12.locaux.label', `Locaux`) }}
                  </template>
                </KaSliderInput>
                <KaSliderInput
                  v-model="page.$info.venteForm.item.Touristes"
                  code="touristes"
                  :options="{
                    labelPosition: `top`,
                    style: { color: appData.theme.primaryColor },
                    placeholder: t('formulaireGes.container.container1.formulaire.venteForm.container12.touristes.placeholder', `Touristes`)
                  }">
                  <template #label>
                    {{ t('formulaireGes.container.container1.formulaire.venteForm.container12.touristes.label', `Touristes`) }}
                  </template>
                </KaSliderInput>
                <KaSliderInput
                  v-model="page.$info.venteForm.item.n1Km"
                  code="k1-km"
                  :options="{
                    labelPosition: `top`,
                    style: { color: appData.theme.primaryColor },
                    placeholder: t('formulaireGes.container.container1.formulaire.venteForm.container12.1Km.placeholder', `<1km`)
                  }">
                  <template #label>
                    {{ t('formulaireGes.container.container1.formulaire.venteForm.container12.1Km.label', `<1km`) }}
                  </template>
                </KaSliderInput>
                <KaSliderInput
                  v-model="page.$info.venteForm.item.n10Km"
                  code="k10-km"
                  :options="{
                    labelPosition: `top`,
                    style: { color: appData.theme.primaryColor },
                    placeholder: t('formulaireGes.container.container1.formulaire.venteForm.container12.10Km.placeholder', `<10km`)
                  }">
                  <template #label>
                    {{ t('formulaireGes.container.container1.formulaire.venteForm.container12.10Km.label', `<10km`) }}
                  </template>
                </KaSliderInput>
                <KaSliderInput
                  v-model="page.$info.venteForm.item.n10A20Km"
                  code="k-10-a-20-km"
                  :options="{
                    labelPosition: `top`,
                    style: { color: appData.theme.primaryColor },
                    placeholder: t('formulaireGes.container.container1.formulaire.venteForm.container12.k10A20Km.placeholder', `10 à 20km`)
                  }">
                  <template #label>
                    {{ t('formulaireGes.container.container1.formulaire.venteForm.container12.k10A20Km.label', `10 à 20km`) }}
                  </template>
                </KaSliderInput>
                <KaSliderInput
                  v-model="page.$info.venteForm.item.n20Km"
                  code="k20-km"
                  :options="{
                    labelPosition: `top`,
                    style: { color: appData.theme.primaryColor },
                    placeholder: t('formulaireGes.container.container1.formulaire.venteForm.container12.20Km.placeholder', `<20km`)
                  }">
                  <template #label>
                    {{ t('formulaireGes.container.container1.formulaire.venteForm.container12.20Km.label', `<20km`) }}
                  </template>
                </KaSliderInput>
                <KaSliderInput
                  v-model="page.$info.venteForm.item.routier"
                  code="routier"
                  :options="{
                    labelPosition: `top`,
                    style: { color: appData.theme.primaryColor },
                    placeholder: t('formulaireGes.container.container1.formulaire.venteForm.container12.routier.placeholder', `Routier`)
                  }">
                  <template #label>
                    {{ t('formulaireGes.container.container1.formulaire.venteForm.container12.routier.label', `Routier`) }}
                  </template>
                </KaSliderInput>
                <KaSliderInput
                  v-model="page.$info.venteForm.item.maritime"
                  code="maritime"
                  :options="{
                    labelPosition: `top`,
                    style: { color: appData.theme.primaryColor },
                    placeholder: t('formulaireGes.container.container1.formulaire.venteForm.container12.maritime.placeholder', `Maritime`)
                  }">
                  <template #label>
                    {{ t('formulaireGes.container.container1.formulaire.venteForm.container12.maritime.label', `Maritime`) }}
                  </template>
                </KaSliderInput>
                <KaSliderInput
                  v-model="page.$info.venteForm.item.marketplaces"
                  code="marketplaces"
                  :options="{
                    labelPosition: `top`,
                    style: { color: appData.theme.primaryColor },
                    placeholder: t('formulaireGes.container.container1.formulaire.venteForm.container12.marketplaces.placeholder', `Marketplaces`)
                  }">
                  <template #label>
                    {{ t('formulaireGes.container.container1.formulaire.venteForm.container12.marketplaces.label', `Marketplaces`) }}
                  </template>
                </KaSliderInput>
                <KaSliderInput
                  v-model="page.$info.venteForm.item.aerien"
                  code="aerien"
                  :options="{
                    labelPosition: `top`,
                    style: { color: appData.theme.primaryColor },
                    placeholder: t('formulaireGes.container.container1.formulaire.venteForm.container12.aerien.placeholder', `Aérien`)
                  }">
                  <template #label>
                    {{ t('formulaireGes.container.container1.formulaire.venteForm.container12.aerien.label', `Aérien`) }}
                  </template>
                </KaSliderInput>
                <KaSliderInput
                  v-model="page.$info.venteForm.item.train"
                  code="train"
                  :options="{
                    labelPosition: `top`,
                    style: { color: appData.theme.primaryColor },
                    placeholder: t('formulaireGes.container.container1.formulaire.venteForm.container12.train.placeholder', `Train`)
                  }">
                  <template #label>
                    {{ t('formulaireGes.container.container1.formulaire.venteForm.container12.train.label', `Train`) }}
                  </template>
                </KaSliderInput>
                <KaSelectInput
                  v-model="page.$info.venteForm.item.emplacementBoutique"
                  code="ou-votre-batiment-de-fonction-est-il-place"
                  :options="{
                    labelPosition: `top`,
                    debounce: 10,
                    items: page.$constants.ouVotreBatimentDeFonctionEstIlPlaceItems,
                    placeholder: t('formulaireGes.container.container1.formulaire.venteForm.container12.ouVotreBatimentDeFonctionEstIlPlace.placeholder', `Où votre batiment de fonction est-il placé?`)
                  }">
                  <template #label>
                    {{ t('formulaireGes.container.container1.formulaire.venteForm.container12.ouVotreBatimentDeFonctionEstIlPlace.label', `Où votre batiment de fonction est-il placé?`) }}
                  </template>
                </KaSelectInput>
                <KaSelectInput
                  v-model="page.$info.venteForm.item.choixEmplacement"
                  code="pourquoi-avez-vous-choisi-cet-emplacemen"
                  :options="{
                    labelPosition: `top`,
                    debounce: 10,
                    items: page.$constants.pourquoiAvezVousChoisiCetEmplacemenItems,
                    placeholder: t('formulaireGes.container.container1.formulaire.venteForm.container12.pourquoiAvezVousChoisiCetEmplacemen.placeholder', `Pourquoi avez-vous choisi cet emplacement?`)
                  }">
                  <template #label>
                    {{ t('formulaireGes.container.container1.formulaire.venteForm.container12.pourquoiAvezVousChoisiCetEmplacemen.label', `Pourquoi avez-vous choisi cet emplacement?`) }}
                  </template>
                </KaSelectInput>
                <KaAutoCompleteInput
                  v-model="page.$info.venteForm.item.accessibiliteBoutique"
                  code="quel-est-son-accessibilite"
                  :options="{
                    labelPosition: `top`,
                    debounce: 0,
                    items: page.$constants.quelEstSonAccessibiliteItems,
                    appendIcon: `i-fa-solid:search`,
                    placeholder: t('formulaireGes.container.container1.formulaire.venteForm.container12.quelEstSonAccessibilite.placeholder', `Quel est son accessibilité?`)
                  }">
                  <template #label>
                    {{ t('formulaireGes.container.container1.formulaire.venteForm.container12.quelEstSonAccessibilite.label', `Quel est son accessibilité?`) }}
                  </template>
                </KaAutoCompleteInput>
                <KaTextAreaInput
                  v-model="page.$info.venteForm.item.raisonDeChangement"
                  code="quest-ce-qui-pourrait-vous-pousser-a-chang"
                  :options="{
                    labelPosition: `top`,
                    placeholder: t('formulaireGes.container.container1.formulaire.venteForm.container12.questCeQuiPourraitVousPousserAChang.placeholder', `Qu'est-ce qui pourrait vous pousser à changer d'emplacement?`)
                  }">
                  <template #label>
                    {{ t('formulaireGes.container.container1.formulaire.venteForm.container12.questCeQuiPourraitVousPousserAChang.label', `Qu'est-ce qui pourrait vous pousser à changer d'emplacement?`) }}
                  </template>
                </KaTextAreaInput>
                <!-- Boutons retour suivant enregistrer -->
                <KaContainer code="container-13">
                  <KaButton
                    code="button-19"
                    :options="{
                      ripple: true,
                      style: {
                        color: `$invert`,
                        innerBackgroundColor: appData.theme.secondaryColor
                      },
                      click: page.button19Click
                    }">
                    <span v-html="t('formulaireGes.container.container1.formulaire.venteForm.container12.container13.button19.value', `Retour`)" />
                  </KaButton>
                  <KaButton
                    code="button-20"
                    :options="{
                      ripple: true,
                      style: {
                        color: `$invert`,
                        innerBackgroundColor: appData.theme.secondaryColor
                      },
                      click: page.button20Click
                    }">
                    <span v-html="t('formulaireGes.container.container1.formulaire.venteForm.container12.container13.button20.value', `Suivant`)" />
                  </KaButton>
                </KaContainer>
              </KaContainer>
            </KaContainer>
          </template>
          <template #formulaireGesEmballage>
            <!-- EmballageUser Form -->
            <KaContainer
              code="emballage-user-form"
              :data="page.$info.emballageUserForm">
              <!-- Form content -->
              <KaContainer code="container-14">
                <KaNumberInput
                  v-model="page.$info.emballageUserForm.item.valeurEmballer"
                  code="valeur-emballer"
                  :options="{
                    labelPosition: `top`,
                    placeholder: t('formulaireGes.container.container1.formulaire.emballageUserForm.container14.valeurEmballer.placeholder', `Valeur Emballer`)
                  }">
                  <template #label>
                    {{ t('formulaireGes.container.container1.formulaire.emballageUserForm.container14.valeurEmballer.label', `Valeur Emballer`) }}
                  </template>
                </KaNumberInput>
                <KaNumberInput
                  v-model="page.$info.emballageUserForm.item.resultatEmballer"
                  code="resultat-emballer"
                  :options="{
                    labelPosition: `top`,
                    placeholder: t('formulaireGes.container.container1.formulaire.emballageUserForm.container14.resultatEmballer.placeholder', `Resultat Emballer`)
                  }">
                  <template #label>
                    {{ t('formulaireGes.container.container1.formulaire.emballageUserForm.container14.resultatEmballer.label', `Resultat Emballer`) }}
                  </template>
                </KaNumberInput>
                <KaYesNoInput
                  v-model="page.$info.emballageUserForm.item.issueRecycleEmballage"
                  code="issue-recycle-emballage"
                  :options="{
                    labelPosition: `top`,
                    debounce: 100
                  }">
                  <template #label>
                    {{ t('formulaireGes.container.container1.formulaire.emballageUserForm.container14.issueRecycleEmballage.label', `Issue Recycle Emballage`) }}
                  </template>
                </KaYesNoInput>
                <KaYesNoInput
                  v-model="page.$info.emballageUserForm.item.recyclableEmballage"
                  code="recyclable-emballage"
                  :options="{
                    labelPosition: `top`,
                    debounce: 100
                  }">
                  <template #label>
                    {{ t('formulaireGes.container.container1.formulaire.emballageUserForm.container14.recyclableEmballage.label', `Recyclable Emballage`) }}
                  </template>
                </KaYesNoInput>
                <KaNavigationPropertyInput
                  v-model="page.$info.emballageUserForm.item.Emballage"
                  code="emballage"
                  :options="{
                    lazyOptions: {
                      throttle: 500,
                      once: true,
                      intersection: { threshold: 0.1 }
                    },
                    placeholder: t('formulaireGes.container.container1.formulaire.emballageUserForm.container14.emballage.placeholder', `Emballage`)
                  }" />
                <!-- Boutons retour suivant enregistrer -->
                <KaContainer code="container-15">
                  <KaButton
                    code="button-21"
                    :options="{
                      ripple: true,
                      style: {
                        color: `$invert`,
                        innerBackgroundColor: appData.theme.secondaryColor
                      },
                      click: page.button21Click
                    }">
                    <span v-html="t('formulaireGes.container.container1.formulaire.emballageUserForm.container14.container15.button21.value', `Retour`)" />
                  </KaButton>
                  <KaButton
                    code="button-22"
                    :options="{
                      ripple: true,
                      style: {
                        color: `$invert`,
                        innerBackgroundColor: appData.theme.secondaryColor
                      },
                      click: page.button22Click
                    }">
                    <span v-html="t('formulaireGes.container.container1.formulaire.emballageUserForm.container14.container15.button22.value', `Suivant`)" />
                  </KaButton>
                  <KaButton
                    code="button-23"
                    :options="{
                      ripple: true,
                      style: {
                        color: `$invert`,
                        innerBackgroundColor: appData.theme.secondaryColor
                      },
                      click: page.button23Click
                    }">
                    <span v-html="t('formulaireGes.container.container1.formulaire.emballageUserForm.container14.container15.button23.value', `Enregistrer le chauffage`)" />
                  </KaButton>
                </KaContainer>
              </KaContainer>
            </KaContainer>
          </template>
          <template #formulaireGesTransport>
            <!-- Transport Form -->
            <KaContainer
              code="transport-form"
              :data="page.$info.transportForm">
              <!-- Form content -->
              <KaContainer code="container-16">
                <KaNumberInput
                  v-model="page.$info.transportForm.item.nombreKm"
                  code="nombre-de-km-domicile-travail"
                  :options="{
                    labelPosition: `top`,
                    placeholder: t('formulaireGes.container.container1.formulaire.transportForm.container16.nombreDeKmDomicileTravail.placeholder', `nombre de km domicile/travail`)
                  }">
                  <template #label>
                    {{ t('formulaireGes.container.container1.formulaire.transportForm.container16.nombreDeKmDomicileTravail.label', `nombre de km domicile/travail`) }}
                  </template>
                </KaNumberInput>
                <KaNumberInput
                  v-model="page.$info.transportForm.item.consoTransport"
                  code="quelle-est-la-consommation-de-votre-vehic"
                  :options="{
                    labelPosition: `top`,
                    placeholder: t('formulaireGes.container.container1.formulaire.transportForm.container16.quelleEstLaConsommationDeVotreVehic.placeholder', `Quelle est la consommation de votre véhicule ?`)
                  }">
                  <template #label>
                    {{ t('formulaireGes.container.container1.formulaire.transportForm.container16.quelleEstLaConsommationDeVotreVehic.label', `Quelle est la consommation de votre véhicule ?`) }}
                  </template>
                </KaNumberInput>
                <KaYesNoInput
                  v-model="page.$info.transportForm.item.covoiturage"
                  code="faites-vous-du-covoiturage"
                  :options="{
                    labelPosition: `top`,
                    debounce: 100
                  }">
                  <template #label>
                    {{ t('formulaireGes.container.container1.formulaire.transportForm.container16.faitesVousDuCovoiturage.label', `Faites vous du covoiturage ?`) }}
                  </template>
                </KaYesNoInput>
                <KaYesNoInput
                  v-model="page.$info.transportForm.item.fonction"
                  code="est-ce-une-voiture-de-fonction"
                  :options="{
                    labelPosition: `top`,
                    debounce: 100
                  }">
                  <template #label>
                    {{ t('formulaireGes.container.container1.formulaire.transportForm.container16.estCeUneVoitureDeFonction.label', `Est-ce une voiture de fonction`) }}
                  </template>
                </KaYesNoInput>
                <KaYesNoInput
                  v-model="page.$info.transportForm.item.calculMoyenne"
                  code="faites-vous-une-moyenne-de-vos-employes-ou"
                  :options="{
                    labelPosition: `top`,
                    debounce: 100
                  }">
                  <template #label>
                    {{ t('formulaireGes.container.container1.formulaire.transportForm.container16.faitesVousUneMoyenneDeVosEmployesOu.label', `Faites vous une moyenne de vos employés ou par employé ?`) }}
                  </template>
                </KaYesNoInput>
                <KaYesNoInput
                  v-model="page.$info.transportForm.item.deplacementPro"
                  code="faites-vous-des-deplacements-profession"
                  :options="{
                    labelPosition: `top`,
                    debounce: 100
                  }">
                  <template #label>
                    {{ t('formulaireGes.container.container1.formulaire.transportForm.container16.faitesVousDesDeplacementsProfession.label', `Faites vous des déplacements professionnels ?`) }}
                  </template>
                </KaYesNoInput>
                <KaYesNoInput
                  v-model="page.$info.transportForm.item.transportPro"
                  code="est-ce-une-location"
                  :options="{
                    labelPosition: `top`,
                    debounce: 100
                  }">
                  <template #label>
                    {{ t('formulaireGes.container.container1.formulaire.transportForm.container16.estCeUneLocation.label', `Est-ce une location ?`) }}
                  </template>
                </KaYesNoInput>
                <KaNavigationPropertyInput
                  v-model="page.$info.transportForm.item.Salarie"
                  code="salarie"
                  :options="{
                    lazyOptions: {
                      throttle: 500,
                      once: true,
                      intersection: { threshold: 0.1 }
                    },
                    placeholder: t('formulaireGes.container.container1.formulaire.transportForm.container16.salarie.placeholder', `Salarie`)
                  }" />
              </KaContainer>
            </KaContainer>
            <!-- TransportQuestion Form -->
            <KaContainer
              code="transport-question-form"
              :data="page.$info.transportQuestionForm">
              <!-- Form content -->
              <KaContainer code="container-17">
                <KaSelectInput
                  v-model="page.$info.transportQuestionForm.item.regrouperDeplacement"
                  code="regroupez-vous-vos-deplacements-profess"
                  :options="{
                    labelPosition: `top`,
                    debounce: 10,
                    items: page.$constants.regroupezVousVosDeplacementsProfessItems,
                    placeholder: t('formulaireGes.container.container1.formulaire.transportQuestionForm.container17.regroupezVousVosDeplacementsProfess.placeholder', `Regroupez-vous vos déplacements professionnels afin de limiter le déplacement? `)
                  }">
                  <template #label>
                    {{ t('formulaireGes.container.container1.formulaire.transportQuestionForm.container17.regroupezVousVosDeplacementsProfess.label', `Regroupez-vous vos déplacements professionnels afin de limiter le déplacement? `) }}
                  </template>
                </KaSelectInput>
                <KaYesNoInput
                  v-model="page.$info.transportQuestionForm.item.surplaceObligatoire"
                  code="votre-activite-implique-t-elle-detre-sur-p"
                  :options="{
                    labelPosition: `top`,
                    debounce: 100
                  }">
                  <template #label>
                    {{ t('formulaireGes.container.container1.formulaire.transportQuestionForm.container17.votreActiviteImpliqueTElleDetreSurP.label', `Votre activité implique-t-elle d'être sur place à chaque étape?`) }}
                  </template>
                </KaYesNoInput>
                <KaYesNoInput
                  v-model="page.$info.transportQuestionForm.item.tachesADistance"
                  code="faites-vous-une-partie-de-vos-taches-admin"
                  :options="{
                    labelPosition: `top`,
                    debounce: 100
                  }">
                  <template #label>
                    {{ t('formulaireGes.container.container1.formulaire.transportQuestionForm.container17.faitesVousUnePartieDeVosTachesAdmin.label', `Faites-vous une partie de vos taches administratives (prise de contact, devis) à distance?`) }}
                  </template>
                </KaYesNoInput>
                <!-- Boutons retour suivant enregistrer -->
                <KaContainer code="container-18">
                  <KaButton
                    code="button-24"
                    :options="{
                      ripple: true,
                      style: {
                        color: `$invert`,
                        innerBackgroundColor: appData.theme.secondaryColor
                      },
                      click: page.button24Click
                    }">
                    <span v-html="t('formulaireGes.container.container1.formulaire.transportQuestionForm.container17.container18.button24.value', `Retour`)" />
                  </KaButton>
                  <KaButton
                    code="button-25"
                    :options="{
                      ripple: true,
                      style: {
                        color: `$invert`,
                        innerBackgroundColor: appData.theme.secondaryColor
                      },
                      click: page.button25Click
                    }">
                    <span v-html="t('formulaireGes.container.container1.formulaire.transportQuestionForm.container17.container18.button25.value', `Suivant`)" />
                  </KaButton>
                </KaContainer>
              </KaContainer>
            </KaContainer>
          </template>
          <template #formulaireGesDechets>
            <!-- DechetsQuestion Form -->
            <KaContainer
              code="dechets-question-form"
              :data="page.$info.dechetsQuestionForm">
              <!-- Form content -->
              <KaContainer code="container-19">
                <KaYesNoInput
                  v-model="page.$info.dechetsQuestionForm.item.decheterie"
                  code="jetez-vous-souvent-des-dechets-dus-a-votre"
                  :options="{
                    labelPosition: `top`,
                    debounce: 100
                  }">
                  <template #label>
                    {{ t('formulaireGes.container.container1.formulaire.dechetsQuestionForm.container19.jetezVousSouventDesDechetsDusAVotre.label', `Jetez-vous souvent des déchets (dus à votre activité) à la décheterie?`) }}
                  </template>
                </KaYesNoInput>
                <KaYesNoInput
                  v-model="page.$info.dechetsQuestionForm.item.plierSiege"
                  code="pliez-vous-vos-sieges-arrieres"
                  :options="{
                    labelPosition: `top`,
                    debounce: 100
                  }">
                  <template #label>
                    {{ t('formulaireGes.container.container1.formulaire.dechetsQuestionForm.container19.pliezVousVosSiegesArrieres.label', `Pliez-vous vos sièges arrières?`) }}
                  </template>
                </KaYesNoInput>
                <KaSelectInput
                  v-model="page.$info.dechetsQuestionForm.item.tailleRemorque"
                  code="utilisez-vous-une-remorque"
                  :options="{
                    labelPosition: `top`,
                    debounce: 10,
                    items: page.$constants.utilisezVousUneRemorqueItems,
                    placeholder: t('formulaireGes.container.container1.formulaire.dechetsQuestionForm.container19.utilisezVousUneRemorque.placeholder', `Utilisez-vous une remorque?`)
                  }">
                  <template #label>
                    {{ t('formulaireGes.container.container1.formulaire.dechetsQuestionForm.container19.utilisezVousUneRemorque.label', `Utilisez-vous une remorque?`) }}
                  </template>
                </KaSelectInput>
                <KaNumberInput
                  v-model="page.$info.dechetsQuestionForm.item.allerRetourMois"
                  code="combien-dallers-retours-faites-vous-en-mo"
                  :options="{
                    labelPosition: `top`,
                    placeholder: t('formulaireGes.container.container1.formulaire.dechetsQuestionForm.container19.combienDallersRetoursFaitesVousEnMo.placeholder', `Combien d'allers-retours faites vous en moyenne par mois?`)
                  }">
                  <template #label>
                    {{ t('formulaireGes.container.container1.formulaire.dechetsQuestionForm.container19.combienDallersRetoursFaitesVousEnMo.label', `Combien d'allers-retours faites vous en moyenne par mois?`) }}
                  </template>
                </KaNumberInput>
                <KaNumberInput
                  v-model="page.$info.dechetsQuestionForm.item.taillePoubelleOrganique"
                  code="faites-vous-du-compost-avec-vos-dechets-or"
                  :options="{
                    labelPosition: `top`,
                    placeholder: t('formulaireGes.container.container1.formulaire.dechetsQuestionForm.container19.faitesVousDuCompostAvecVosDechetsOr.placeholder', `Faîtes-vous du compost avec vos déchets organiques ?`)
                  }">
                  <template #label>
                    {{ t('formulaireGes.container.container1.formulaire.dechetsQuestionForm.container19.faitesVousDuCompostAvecVosDechetsOr.label', `Faîtes-vous du compost avec vos déchets organiques ?`) }}
                  </template>
                </KaNumberInput>
                <KaSelectInput
                  v-model="page.$info.dechetsQuestionForm.item.usagePoubelleOrganique"
                  code="usage-poubelle-organique"
                  :options="{
                    labelPosition: `top`,
                    debounce: 10,
                    items: page.$constants.usagePoubelleOrganiqueItems,
                    placeholder: t('formulaireGes.container.container1.formulaire.dechetsQuestionForm.container19.usagePoubelleOrganique.placeholder', `Usage Poubelle Organique`)
                  }">
                  <template #label>
                    {{ t('formulaireGes.container.container1.formulaire.dechetsQuestionForm.container19.usagePoubelleOrganique.label', `Usage Poubelle Organique`) }}
                  </template>
                </KaSelectInput>
                <!-- Boutons retour suivant enregistrer -->
                <KaContainer code="container-20">
                  <KaButton
                    code="button-26"
                    :options="{
                      ripple: true,
                      style: {
                        color: `$invert`,
                        innerBackgroundColor: appData.theme.secondaryColor
                      },
                      click: page.button26Click
                    }">
                    <span v-html="t('formulaireGes.container.container1.formulaire.dechetsQuestionForm.container19.container20.button26.value', `Retour`)" />
                  </KaButton>
                  <KaButton
                    code="button-27"
                    :options="{
                      ripple: true,
                      style: {
                        color: `$invert`,
                        innerBackgroundColor: appData.theme.secondaryColor
                      },
                      click: page.button27Click,
                      $state: { selected: page.$elements['formulaire']?.display === 'success' }
                    }">
                    <span v-html="t('formulaireGes.container.container1.formulaire.dechetsQuestionForm.container19.container20.button27.value', `Suivant`)" />
                  </KaButton>
                </KaContainer>
              </KaContainer>
            </KaContainer>
          </template>
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
