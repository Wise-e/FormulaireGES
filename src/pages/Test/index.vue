<template>
  <KaContainer
    code="test"
    :data="page.$info.test"
    :options="{
      style: {
        backgroundColor: appData.theme.backgroundColor,
        img: appData.theme.backgroundImage,
        color: appData.theme.fontColor,
        fontFamily: appData.theme.fontFamily,
        fontSize: appData.theme.fontSize
      }
    }">
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
            debounce: 10,
            items: page.$constants.commentVousLesProcurezVousItems,
            placeholder: t('test.matiereUserForm.formContent.commentVousLesProcurezVous.placeholder', `Comment vous les procurez-vous ?`)
          }" />
        <KaText code="choisissez-votre-matiere">
          <span v-html="t('test.matiereUserForm.formContent.choisissezVotreMatiere.value', `Choisissez votre matière:`)" />
        </KaText>
        <KaSelectInput
          v-model="page.$info.matiereUserForm.item.Matiere.categorieMatiere"
          code="quel-est-la-categorie-de-votre-matiere"
          :options="{
            debounce: 10,
            items: page.$constants.quelEstLaCategorieDeVotreMatiereItems,
            placeholder: t('test.matiereUserForm.formContent.quelEstLaCategorieDeVotreMatiere.placeholder', `Quel est la catégorie de votre matière ?`)
          }" />
        <KaText code="quels-choix-caracterisent">
          <span v-html="t('test.matiereUserForm.formContent.quelsChoixCaracterisent.value', `Quels choix caractérisent vos matières premières?<br> `)" />
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
            placeholder: t('test.matiereUserForm.formContent.matiere.placeholder', `Matiere`)
          }" />
        <KaSelectInput
          v-model="page.$info.matiereUserForm.item.distanceMagasin"
          code="ou-sont-ils-situes-par-rapport-a-vous"
          :options="{
            debounce: 10,
            items: page.$constants.ouSontIlsSituesParRapportAVousItems,
            placeholder: t('test.matiereUserForm.formContent.ouSontIlsSituesParRapportAVous.placeholder', `Où sont-ils situés par rapport à vous ?`)
          }" />
        <KaSelectInput
          v-model="page.$info.matiereUserForm.item.Matiere.nomMatiere"
          code="quel-est-le-nom-de-votre-matiere"
          :options="{
            debounce: 10,
            items: page.$constants.quelEstLeNomDeVotreMatiereItems,
            placeholder: t('test.matiereUserForm.formContent.quelEstLeNomDeVotreMatiere.placeholder', `Quel est le nom de votre matière`)
          }" />
        <KaNumberInput
          v-model="page.$info.matiereUserForm.item.CompteIdCompte"
          code="compte-id-compte"
          :options="{
            labelPosition: `top`,
            placeholder: t('test.matiereUserForm.formContent.compteIdCompte.placeholder', `Compte Id Compte`)
          }">
          <template #label>
            {{ t('test.matiereUserForm.formContent.compteIdCompte.label', `Compte Id Compte`) }}
          </template>
        </KaNumberInput>
        <KaNumberInput
          v-model="page.$info.matiereUserForm.item.consoTransport"
          code="quel-est-la-consommation-du-vehicule"
          :options="{ placeholder: t('test.matiereUserForm.formContent.quelEstLaConsommationDuVehicule.placeholder', `Quel est la consommation du véhicule ?`) }" />
        <KaNumberInput
          v-model="page.$info.matiereUserForm.item.poidsMatiere"
          code="quel-est-le-poids-de-votre-matiere"
          :options="{ placeholder: t('test.matiereUserForm.formContent.quelEstLePoidsDeVotreMatiere.placeholder', `Quel est le poids de votre matière ?`) }" />
        <KaSelectInput
          v-model="page.$info.matiereUserForm.item.provenanceMatiere"
          code="quelle-est-la-provenance-de-vos-matieres-p"
          :options="{
            debounce: 10,
            items: page.$constants.quelleEstLaProvenanceDeVosMatieresPItems,
            placeholder: t('test.matiereUserForm.formContent.quelleEstLaProvenanceDeVosMatieresP.placeholder', `Quelle est la provenance de vos matières premières?`)
          }" />
        <KaSelectInput
          v-model="page.$info.matiereUserForm.item.transportMagasin"
          code="comment-recuperez-vous-votre-commande"
          :options="{
            debounce: 10,
            items: page.$constants.commentRecuperezVousVotreCommandeItems,
            placeholder: t('test.matiereUserForm.formContent.commentRecuperezVousVotreCommande.placeholder', `Comment récupérez vous votre commande ?`)
          }" />
        <KaSliderInput
          v-model="page.$info.matiereUserForm.item.caracteristiqueNeuve"
          code="matiere-neuve"
          :options="{
            style: { color: appData.theme.primaryColor },
            placeholder: t('test.matiereUserForm.formContent.matiereNeuve.placeholder', `Matière neuve`)
          }" />
        <KaNumberInput
          v-model="page.$info.matiereUserForm.item.nombreEntrepriseCommande"
          code="faites-vous-des-commandes-groupees-avec-d"
          :options="{ placeholder: t('test.matiereUserForm.formContent.faitesVousDesCommandesGroupeesAvecD.placeholder', `Faites-vous des commandes groupées avec d'autres entreprises ?`) }" />
        <KaSliderInput
          v-model="page.$info.matiereUserForm.item.caracteristiqueOccasion"
          code="matiere-occasion"
          :options="{
            style: { color: appData.theme.primaryColor },
            placeholder: t('test.matiereUserForm.formContent.matiereOccasion.placeholder', `Matière occasion`)
          }" />
        <KaSelectInput
          v-model="page.$info.matiereUserForm.item.plusProcheQ"
          code="pour-quelle-raison-ne-vous-approvisionne"
          :options="{
            debounce: 10,
            items: page.$constants.pourQuelleRaisonNeVousApprovisionneItems,
            placeholder: t('test.matiereUserForm.formContent.pourQuelleRaisonNeVousApprovisionne.placeholder', `Pour quelle raison ne vous approvisionnez-vous pas plus près ?`)
          }" />
        <KaSliderInput
          v-model="page.$info.matiereUserForm.item.caracteristiqueRecup"
          code="matiere-recuperees"
          :options="{
            style: { color: appData.theme.primaryColor },
            placeholder: t('test.matiereUserForm.formContent.matiereRecuperees.placeholder', `Matière récupérées`)
          }" />
        <KaSelectInput
          v-model="page.$info.matiereUserForm.item.certitudeduChoixQ"
          code="en-etes-vous-sur"
          :options="{
            debounce: 10,
            items: page.$constants.enEtesVousSurItems,
            placeholder: t('test.matiereUserForm.formContent.enEtesVousSur.placeholder', `En êtes vous sur ?`)
          }" />
        <KaSliderInput
          v-model="page.$info.matiereUserForm.item.caracteristiqueRecyclage"
          code="matiere-issue-du-recyclage"
          :options="{
            style: { color: appData.theme.primaryColor },
            placeholder: t('test.matiereUserForm.formContent.matiereIssueDuRecyclage.placeholder', `Matière issue du recyclage`)
          }" />
        <KaSelectInput
          v-model="page.$info.matiereUserForm.item.changerApprovisionnementQ"
          code="avez-vous-deja-pense-a-changer-votre-proce"
          :options="{
            debounce: 10,
            items: page.$constants.avezVousDejaPenseAChangerVotreProceItems,
            placeholder: t('test.matiereUserForm.formContent.avezVousDejaPenseAChangerVotreProce.placeholder', `Avez-vous déjà pensé à changer votre processus d'approvisionnement ?`)
          }" />
        <KaSliderInput
          v-model="page.$info.matiereUserForm.item.caracteristiqueAutoproduite"
          code="matiere-auto-produite"
          :options="{
            style: { color: appData.theme.primaryColor },
            placeholder: t('test.matiereUserForm.formContent.matiereAutoProduite.placeholder', `Matière auto-produite`)
          }" />
        <KaYesNoInput
          v-model="page.$info.matiereUserForm.item.Saisonnalite"
          code="saisonnalite"
          :options="{ debounce: 100 }" />
        <KaNavigationPropertyInput
          v-model="page.$info.matiereUserForm.item.MoyenTransport"
          code="moyen-transport"
          :options="{
            lazyOptions: {
              throttle: 500,
              once: true,
              intersection: { threshold: 0.1 }
            },
            placeholder: t('test.matiereUserForm.formContent.moyenTransport.placeholder', `Moyen Transport`)
          }" />
      </KaContainer>
      <!-- Bouton matière -->
      <KaContainer code="bouton-matiere">
        <KaButton
          code="nouvelle-matiere"
          :options="{ ripple: true }">
          <span v-html="t('test.matiereUserForm.boutonMatiere.nouvelleMatiere.value', `Sauvegarder la matière`)" />
        </KaButton>
        <KaButton
          code="suivant"
          :options="{ ripple: true }">
          <span v-html="t('test.matiereUserForm.boutonMatiere.suivant.value', `Suivant`)" />
        </KaButton>
      </KaContainer>
    </KaContainer>
    <!-- Formulaire sur une page -->
    <KaContainer
      code="formulaire-sur-une-page"
      :data="page.$info.formulaireSurUnePage"
      :options="{
        style: {
          backgroundColor: appData.theme.backgroundColor2,
          color: appData.theme.fontColor2
        }
      }">
      <!-- Agricole Form -->
      <KaContainer
        code="agricole-form"
        :data="page.$info.agricoleForm">
        <!-- Form content -->
        <KaContainer code="container-1">
          <KaNumberInput
            v-model="page.$info.agricoleForm.item.nombreDeTete"
            code="combien-de-tete"
            :options="{ placeholder: t('test.formulaireSurUnePage.agricoleForm.container1.combienDeTete.placeholder', `Combien de tête ?`) }" />
          <KaNumberInput
            v-model="page.$info.agricoleForm.item.surfaceAgricole"
            code="quel-est-la-surface-de-votre-exploitation"
            :options="{ placeholder: t('test.formulaireSurUnePage.agricoleForm.container1.quelEstLaSurfaceDeVotreExploitation.placeholder', `Quel est la surface de votre exploitation agricole?`) }" />
          <KaNumberInput
            v-model="page.$info.agricoleForm.item.nombreDeMachines"
            code="utilisez-vous-des-machines-agricoles"
            :options="{ placeholder: t('test.formulaireSurUnePage.agricoleForm.container1.utilisezVousDesMachinesAgricoles.placeholder', `Utilisez- vous des machines agricoles?`) }" />
          <KaSliderInput
            v-model="page.$info.agricoleForm.item.compost"
            code="compost"
            :options="{
              style: { color: appData.theme.primaryColor },
              placeholder: t('test.formulaireSurUnePage.agricoleForm.container1.compost.placeholder', `Compost`)
            }" />
          <KaSliderInput
            v-model="page.$info.agricoleForm.item.engraischimique"
            code="engraischimique"
            :options="{
              style: { color: appData.theme.primaryColor },
              placeholder: t('test.formulaireSurUnePage.agricoleForm.container1.engraischimique.placeholder', `Engraischimique`)
            }" />
          <KaAutoCompleteInput
            v-model="page.$info.agricoleForm.item.alternativenaturelQ"
            code="avez-vous-deja-pense-a-opter-pour-une-alter"
            :options="{
              debounce: 0,
              items: page.$constants.avezVousDejaPenseAOpterPourUneAlterItems,
              appendIcon: `i-fa-solid:search`,
              placeholder: t('test.formulaireSurUnePage.agricoleForm.container1.avezVousDejaPenseAOpterPourUneAlter.placeholder', `Avez-vous déjà pensé à opter pour une alternative plus naturel?`)
            }" />
        </KaContainer>
        <!-- Boutons -->
        <KaContainer code="boutons">
          <KaButton
            code="retour"
            :options="{ ripple: true }">
            <span v-html="t('test.formulaireSurUnePage.agricoleForm.boutons.retour.value', `Retour`)" />
          </KaButton>
          <KaButton
            code="button-1"
            :options="{ ripple: true }">
            <span v-html="t('test.formulaireSurUnePage.agricoleForm.boutons.button1.value', `Suivant`)" />
          </KaButton>
        </KaContainer>
      </KaContainer>
      <!-- EnergieUser Form -->
      <KaContainer
        code="energie-user-form"
        :data="page.$info.energieUserForm">
        <!-- Form content -->
        <KaContainer code="container-2">
          <KaNumberInput
            v-model="page.$info.energieUserForm.item.valeurEnergieUser"
            code="valeur-energie-user"
            :options="{ placeholder: t('test.formulaireSurUnePage.energieUserForm.container2.valeurEnergieUser.placeholder', `Valeur Energie User`) }" />
          <KaNavigationPropertyInput
            v-model="page.$info.energieUserForm.item.Energie"
            code="energie"
            :options="{
              lazyOptions: {
                throttle: 500,
                once: true,
                intersection: { threshold: 0.1 }
              },
              placeholder: t('test.formulaireSurUnePage.energieUserForm.container2.energie.placeholder', `Energie`)
            }" />
          <!-- Boutons etape formulaire -->
          <KaContainer code="boutons-etape-formulaire">
            <KaButton
              code="button-2"
              :options="{ ripple: true }">
              <span v-html="t('test.formulaireSurUnePage.energieUserForm.container2.boutonsEtapeFormulaire.button2.value', `Retour`)" />
            </KaButton>
            <KaButton
              code="button-3"
              :options="{ ripple: true }">
              <span v-html="t('test.formulaireSurUnePage.energieUserForm.container2.boutonsEtapeFormulaire.button3.value', `Suivant`)" />
            </KaButton>
            <KaButton
              code="enregistrer"
              :options="{ ripple: true }">
              <span v-html="t('test.formulaireSurUnePage.energieUserForm.container2.boutonsEtapeFormulaire.enregistrer.value', `Enregistrer l'énergie`)" />
            </KaButton>
          </KaContainer>
        </KaContainer>
      </KaContainer>
      <!-- EquipementUser Form -->
      <KaContainer
        code="equipement-user-form"
        :data="page.$info.equipementUserForm">
        <!-- Form content -->
        <KaContainer code="container-3">
          <KaNumberInput
            v-model="page.$info.equipementUserForm.item.nombreEquipement"
            code="nombre-equipement"
            :options="{ placeholder: t('test.formulaireSurUnePage.equipementUserForm.container3.nombreEquipement.placeholder', `Nombre Equipement`) }" />
          <KaSelectInput
            v-model="page.$info.equipementUserForm.item.dureeEquipement"
            code="depuis-combien-de-temps-possedez-vous-ces"
            :options="{
              debounce: 10,
              items: page.$constants.depuisCombienDeTempsPossedezVousCesItems,
              placeholder: t('test.formulaireSurUnePage.equipementUserForm.container3.depuisCombienDeTempsPossedezVousCes.placeholder', `Depuis combien de temps possédez vous ces équipements?`)
            }" />
          <KaSelectInput
            v-model="page.$info.equipementUserForm.item.caractEquipement"
            code="vos-equipements-ont-ils-ete-achetes-neufs"
            :options="{
              debounce: 10,
              items: page.$constants.vosEquipementsOntIlsEteAchetesNeufsItems,
              placeholder: t('test.formulaireSurUnePage.equipementUserForm.container3.vosEquipementsOntIlsEteAchetesNeufs.placeholder', `Vos équipements ont-ils été achetés neufs, reconditionnés ou de seconde main? Sont-ils loués?`)
            }" />
          <KaSelectInput
            v-model="page.$info.equipementUserForm.item.garderEquipement"
            code="combien-de-temps-gardez-vous-votre-materi"
            :options="{
              debounce: 10,
              items: page.$constants.combienDeTempsGardezVousVotreMateriItems,
              placeholder: t('test.formulaireSurUnePage.equipementUserForm.container3.combienDeTempsGardezVousVotreMateri.placeholder', `Combien de temps gardez vous votre matériel en moyenne?`)
            }" />
          <KaSelectInput
            v-model="page.$info.equipementUserForm.item.raisonJeterEquipement"
            code="quest-ce-qui-vous-pousse-a-vous-en-debarass"
            :options="{
              debounce: 10,
              items: page.$constants.questCeQuiVousPousseAVousEnDebarassItems,
              placeholder: t('test.formulaireSurUnePage.equipementUserForm.container3.questCeQuiVousPousseAVousEnDebarass.placeholder', `Qu'est-ce qui vous pousse à vous en débarasser?`)
            }" />
          <KaSelectInput
            v-model="page.$info.equipementUserForm.item.jeterEquipement"
            code="que-faites-vous-de-vos-fournitures-une-foi"
            :options="{
              debounce: 10,
              items: page.$constants.queFaitesVousDeVosFournituresUneFoiItems,
              placeholder: t('test.formulaireSurUnePage.equipementUserForm.container3.queFaitesVousDeVosFournituresUneFoi.placeholder', `Que faites vous de vos fournitures une fois qu'elles ne servent plus?`)
            }" />
          <KaNumberInput
            v-model="page.$info.equipementUserForm.item.nombreEntreprisePartage"
            code="partager-vous-lusage-des-machines-avec-da"
            :options="{ placeholder: t('test.formulaireSurUnePage.equipementUserForm.container3.partagerVousLusageDesMachinesAvecDa.placeholder', `Partager vous l'usage des machines avec d'autres entreprises?`) }" />
          <KaNavigationPropertyInput
            v-model="page.$info.equipementUserForm.item.Equipement"
            code="equipement"
            :options="{
              lazyOptions: {
                throttle: 500,
                once: true,
                intersection: { threshold: 0.1 }
              },
              placeholder: t('test.formulaireSurUnePage.equipementUserForm.container3.equipement.placeholder', `Equipement`)
            }" />
          <!-- Boutons etape formulaire -->
          <KaContainer code="container-4">
            <KaButton
              code="button-4"
              :options="{ ripple: true }">
              <span v-html="t('test.formulaireSurUnePage.equipementUserForm.container3.container4.button4.value', `Retour`)" />
            </KaButton>
            <KaButton
              code="button-5"
              :options="{ ripple: true }">
              <span v-html="t('test.formulaireSurUnePage.equipementUserForm.container3.container4.button5.value', `Enregistrer l'équipement`)" />
            </KaButton>
            <KaButton
              code="button-6"
              :options="{ ripple: true }">
              <span v-html="t('test.formulaireSurUnePage.equipementUserForm.container3.container4.button6.value', `Suivant`)" />
            </KaButton>
          </KaContainer>
        </KaContainer>
      </KaContainer>
      <!-- FournitureUser Form -->
      <KaContainer
        code="fourniture-user-form"
        :data="page.$info.fournitureUserForm">
        <!-- Form content -->
        <KaContainer code="container-5">
          <KaNumberInput
            v-model="page.$info.fournitureUserForm.item.nombreFourniture"
            code="valeur-fourniture-utilisees"
            :options="{ placeholder: t('test.formulaireSurUnePage.fournitureUserForm.container5.valeurFournitureUtilisees.placeholder', `Valeur Fourniture Utilisees`) }" />
          <KaNavigationPropertyInput
            v-model="page.$info.fournitureUserForm.item.Fournitures"
            code="fournitures"
            :options="{
              lazyOptions: {
                throttle: 500,
                once: true,
                intersection: { threshold: 0.1 }
              },
              placeholder: t('test.formulaireSurUnePage.fournitureUserForm.container5.fournitures.placeholder', `Fournitures`)
            }" />
        </KaContainer>
      </KaContainer>
      <!-- Batiment Form -->
      <KaContainer
        code="batiment-form"
        :data="page.$info.batimentForm">
        <!-- Form content -->
        <KaContainer code="container-6">
          <KaSelectInput
            v-model="page.$info.batimentForm.item.lieuBatiment"
            code="dans-quel-genre-de-batiment-ont-lieu-la-pro"
            :options="{
              debounce: 10,
              items: page.$constants.dansQuelGenreDeBatimentOntLieuLaProItems,
              placeholder: t('test.formulaireSurUnePage.batimentForm.container6.dansQuelGenreDeBatimentOntLieuLaPro.placeholder', `Dans quel genre de batiment ont lieu la production de vos produits?`)
            }" />
          <KaNumberInput
            v-model="page.$info.batimentForm.item.surfaceBatiment"
            code="quel-est-la-surface-total-du-batiment"
            :options="{ placeholder: t('test.formulaireSurUnePage.batimentForm.container6.quelEstLaSurfaceTotalDuBatiment.placeholder', `Quel est la surface total du bâtiment?`) }" />
          <KaNumberInput
            v-model="page.$info.batimentForm.item.nbEntreprisesPartageLieu"
            code="il-yat-il-dautres-entreprises-au-sein-du-ba"
            :options="{ placeholder: t('test.formulaireSurUnePage.batimentForm.container6.ilYATIlDautresEntreprisesAuSeinDuBa.placeholder', `Il y a-t-il d'autres entreprises au sein du bâtiment?`) }" />
          <KaSelectInput
            v-model="page.$info.batimentForm.item.classeEnergitique"
            code="quel-est-la-classe-energetique-du-batimen"
            :options="{
              debounce: 10,
              items: page.$constants.quelEstLaClasseEnergetiqueDuBatimenItems,
              placeholder: t('test.formulaireSurUnePage.batimentForm.container6.quelEstLaClasseEnergetiqueDuBatimen.placeholder', `Quel est la classe énergétique du bâtiment?`)
            }" />
          <KaNumberInput
            v-model="page.$info.batimentForm.item.consoElectrique"
            code="quel-est-la-consommation-electrique-du-ba"
            :options="{ placeholder: t('test.formulaireSurUnePage.batimentForm.container6.quelEstLaConsommationElectriqueDuBa.placeholder', `Quel est la consommation electrique du bâtiment? (euros ou kWh)`) }" />
          <KaNumberInput
            v-model="page.$info.batimentForm.item.pNTBTNsvZibWtSmRoigUmq"
            code="partagez-vous-lusage-des-machines-avec-da"
            :options="{ placeholder: t('test.formulaireSurUnePage.batimentForm.container6.partagezVousLusageDesMachinesAvecDa.placeholder', `Partagez vous l'usage des machines avec d'autres entreprises?`) }" />
        </KaContainer>
      </KaContainer>
      <!-- ChauffageUser Form -->
      <KaContainer
        code="chauffage-user-form"
        :data="page.$info.chauffageUserForm">
        <!-- Form content -->
        <KaContainer code="container-7">
          <KaNumberInput
            v-model="page.$info.chauffageUserForm.item.valeurChauffer"
            code="valeur-chauffer"
            :options="{ placeholder: t('test.formulaireSurUnePage.chauffageUserForm.container7.valeurChauffer.placeholder', `Valeur Chauffer`) }" />
          <KaNavigationPropertyInput
            v-model="page.$info.chauffageUserForm.item.Chauffage"
            code="chauffage"
            :options="{
              lazyOptions: {
                throttle: 500,
                once: true,
                intersection: { threshold: 0.1 }
              },
              placeholder: t('test.formulaireSurUnePage.chauffageUserForm.container7.chauffage.placeholder', `Chauffage`)
            }" />
          <!-- Boutons retour suivant enregistrer -->
          <KaContainer code="boutons-retour-suivant-enregistrer">
            <KaButton
              code="button-7"
              :options="{ ripple: true }">
              <span v-html="t('test.formulaireSurUnePage.chauffageUserForm.container7.boutonsRetourSuivantEnregistrer.button7.value', `Retour`)" />
            </KaButton>
            <KaButton
              code="button-8"
              :options="{ ripple: true }">
              <span v-html="t('test.formulaireSurUnePage.chauffageUserForm.container7.boutonsRetourSuivantEnregistrer.button8.value', `Suivant`)" />
            </KaButton>
            <KaButton
              code="button-9"
              :options="{ ripple: true }">
              <span v-html="t('test.formulaireSurUnePage.chauffageUserForm.container7.boutonsRetourSuivantEnregistrer.button9.value', `Enregistrer le chauffage`)" />
            </KaButton>
          </KaContainer>
        </KaContainer>
      </KaContainer>
      <!-- EnergieRenouvelableUser Form -->
      <KaContainer
        code="energie-renouvelable-user-form"
        :data="page.$info.energieRenouvelableUserForm">
        <!-- Form content -->
        <KaContainer code="container-8">
          <KaNumberInput
            v-model="page.$info.energieRenouvelableUserForm.item.valeurEnergieRenouvelableUser"
            code="valeur-energie-renouvelable-user"
            :options="{ placeholder: t('test.formulaireSurUnePage.energieRenouvelableUserForm.container8.valeurEnergieRenouvelableUser.placeholder', `Valeur Energie Renouvelable User`) }" />
          <KaNavigationPropertyInput
            v-model="page.$info.energieRenouvelableUserForm.item.EnergieRenouvelables"
            code="energie-renouvelables"
            :options="{
              lazyOptions: {
                throttle: 500,
                once: true,
                intersection: { threshold: 0.1 }
              },
              placeholder: t('test.formulaireSurUnePage.energieRenouvelableUserForm.container8.energieRenouvelables.placeholder', `Energie renouvelables`)
            }" />
        </KaContainer>
      </KaContainer>
      <!-- Vente Form -->
      <KaContainer
        code="vente-form"
        :data="page.$info.venteForm">
        <!-- Form content -->
        <KaContainer code="container-9">
          <KaNumberInput
            v-model="page.$info.venteForm.item.nombreVenteSemaine"
            code="en-moyenne-combien-de-produits-vendez-vou"
            :options="{ placeholder: t('test.formulaireSurUnePage.venteForm.container9.enMoyenneCombienDeProduitsVendezVou.placeholder', `En moyenne, combien de produits vendez-vous par semaine?`) }" />
          <KaNumberInput
            v-model="page.$info.venteForm.item.garantieMois"
            code="vos-produits-sont-ils-garantis"
            :options="{ placeholder: t('test.formulaireSurUnePage.venteForm.container9.vosProduitsSontIlsGarantis.placeholder', `Vos produits sont-ils garantis?`) }" />
          <KaYesNoInput
            v-model="page.$info.venteForm.item.produitRecyclable"
            code="vos-produits-sont-ils-recyclables"
            :options="{ debounce: 100 }" />
          <KaYesNoInput
            v-model="page.$info.venteForm.item.recupProduit"
            code="recuperez-vous-vos-produits-en-fin-de-vie"
            :options="{ debounce: 100 }" />
          <KaYesNoInput
            v-model="page.$info.venteForm.item.restaurerProduit"
            code="restaurez-vous-les-produits"
            :options="{ debounce: 100 }" />
          <KaSliderInput
            v-model="page.$info.venteForm.item.Locaux"
            code="locaux"
            :options="{
              style: { color: appData.theme.primaryColor },
              placeholder: t('test.formulaireSurUnePage.venteForm.container9.locaux.placeholder', `Locaux`)
            }" />
          <KaSliderInput
            v-model="page.$info.venteForm.item.Touristes"
            code="touristes"
            :options="{
              style: { color: appData.theme.primaryColor },
              placeholder: t('test.formulaireSurUnePage.venteForm.container9.touristes.placeholder', `Touristes`)
            }" />
          <KaSliderInput
            v-model="page.$info.venteForm.item.n1Km"
            code="k1-km"
            :options="{
              style: { color: appData.theme.primaryColor },
              placeholder: t('test.formulaireSurUnePage.venteForm.container9.1Km.placeholder', `<1km`)
            }" />
          <KaSliderInput
            v-model="page.$info.venteForm.item.n10Km"
            code="k10-km"
            :options="{
              style: { color: appData.theme.primaryColor },
              placeholder: t('test.formulaireSurUnePage.venteForm.container9.10Km.placeholder', `<10km`)
            }" />
          <KaSliderInput
            v-model="page.$info.venteForm.item.n10A20Km"
            code="k-10-a-20-km"
            :options="{
              style: { color: appData.theme.primaryColor },
              placeholder: t('test.formulaireSurUnePage.venteForm.container9.k10A20Km.placeholder', `10 à 20km`)
            }" />
          <KaSliderInput
            v-model="page.$info.venteForm.item.n20Km"
            code="k20-km"
            :options="{
              style: { color: appData.theme.primaryColor },
              placeholder: t('test.formulaireSurUnePage.venteForm.container9.20Km.placeholder', `<20km`)
            }" />
          <KaSliderInput
            v-model="page.$info.venteForm.item.routier"
            code="routier"
            :options="{
              style: { color: appData.theme.primaryColor },
              placeholder: t('test.formulaireSurUnePage.venteForm.container9.routier.placeholder', `Routier`)
            }" />
          <KaSliderInput
            v-model="page.$info.venteForm.item.maritime"
            code="maritime"
            :options="{
              style: { color: appData.theme.primaryColor },
              placeholder: t('test.formulaireSurUnePage.venteForm.container9.maritime.placeholder', `Maritime`)
            }" />
          <KaSliderInput
            v-model="page.$info.venteForm.item.marketplaces"
            code="marketplaces"
            :options="{
              style: { color: appData.theme.primaryColor },
              placeholder: t('test.formulaireSurUnePage.venteForm.container9.marketplaces.placeholder', `Marketplaces`)
            }" />
          <KaSliderInput
            v-model="page.$info.venteForm.item.aerien"
            code="aerien"
            :options="{
              style: { color: appData.theme.primaryColor },
              placeholder: t('test.formulaireSurUnePage.venteForm.container9.aerien.placeholder', `Aérien`)
            }" />
          <KaSliderInput
            v-model="page.$info.venteForm.item.train"
            code="train"
            :options="{
              style: { color: appData.theme.primaryColor },
              placeholder: t('test.formulaireSurUnePage.venteForm.container9.train.placeholder', `Train`)
            }" />
          <KaSelectInput
            v-model="page.$info.venteForm.item.emplacementBoutique"
            code="ou-votre-batiment-de-fonction-est-il-place"
            :options="{
              debounce: 10,
              items: page.$constants.ouVotreBatimentDeFonctionEstIlPlaceItems,
              placeholder: t('test.formulaireSurUnePage.venteForm.container9.ouVotreBatimentDeFonctionEstIlPlace.placeholder', `Où votre batiment de fonction est-il placé?`)
            }" />
          <KaSelectInput
            v-model="page.$info.venteForm.item.choixEmplacement"
            code="pourquoi-avez-vous-choisi-cet-emplacemen"
            :options="{
              debounce: 10,
              items: page.$constants.pourquoiAvezVousChoisiCetEmplacemenItems,
              placeholder: t('test.formulaireSurUnePage.venteForm.container9.pourquoiAvezVousChoisiCetEmplacemen.placeholder', `Pourquoi avez-vous choisi cet emplacement?`)
            }" />
          <KaAutoCompleteInput
            v-model="page.$info.venteForm.item.accessibiliteBoutique"
            code="quel-est-son-accessibilite"
            :options="{
              debounce: 0,
              items: page.$constants.quelEstSonAccessibiliteItems,
              appendIcon: `i-fa-solid:search`,
              placeholder: t('test.formulaireSurUnePage.venteForm.container9.quelEstSonAccessibilite.placeholder', `Quel est son accessibilité?`)
            }" />
          <KaTextAreaInput
            v-model="page.$info.venteForm.item.raisonDeChangement"
            code="quest-ce-qui-pourrait-vous-pousser-a-chang"
            :options="{ placeholder: t('test.formulaireSurUnePage.venteForm.container9.questCeQuiPourraitVousPousserAChang.placeholder', `Qu'est-ce qui pourrait vous pousser à changer d'emplacement?`) }" />
          <!-- Boutons retour suivant enregistrer -->
          <KaContainer code="container-10">
            <KaButton
              code="button-10"
              :options="{ ripple: true }">
              <span v-html="t('test.formulaireSurUnePage.venteForm.container9.container10.button10.value', `Retour`)" />
            </KaButton>
            <KaButton
              code="button-11"
              :options="{ ripple: true }">
              <span v-html="t('test.formulaireSurUnePage.venteForm.container9.container10.button11.value', `Suivant`)" />
            </KaButton>
          </KaContainer>
        </KaContainer>
      </KaContainer>
      <!-- EmballageUser Form -->
      <KaContainer
        code="emballage-user-form"
        :data="page.$info.emballageUserForm">
        <!-- Form content -->
        <KaContainer code="container-11">
          <KaNumberInput
            v-model="page.$info.emballageUserForm.item.valeurEmballer"
            code="valeur-emballer"
            :options="{ placeholder: t('test.formulaireSurUnePage.emballageUserForm.container11.valeurEmballer.placeholder', `Valeur Emballer`) }" />
          <KaNumberInput
            v-model="page.$info.emballageUserForm.item.resultatEmballer"
            code="resultat-emballer"
            :options="{ placeholder: t('test.formulaireSurUnePage.emballageUserForm.container11.resultatEmballer.placeholder', `Resultat Emballer`) }" />
          <KaYesNoInput
            v-model="page.$info.emballageUserForm.item.issueRecycleEmballage"
            code="issue-recycle-emballage"
            :options="{ debounce: 100 }" />
          <KaYesNoInput
            v-model="page.$info.emballageUserForm.item.recyclableEmballage"
            code="recyclable-emballage"
            :options="{ debounce: 100 }" />
          <KaNavigationPropertyInput
            v-model="page.$info.emballageUserForm.item.Emballage"
            code="emballage"
            :options="{
              lazyOptions: {
                throttle: 500,
                once: true,
                intersection: { threshold: 0.1 }
              },
              placeholder: t('test.formulaireSurUnePage.emballageUserForm.container11.emballage.placeholder', `Emballage`)
            }" />
          <!-- Boutons retour suivant enregistrer -->
          <KaContainer code="container-12">
            <KaButton
              code="button-12"
              :options="{ ripple: true }">
              <span v-html="t('test.formulaireSurUnePage.emballageUserForm.container11.container12.button12.value', `Retour`)" />
            </KaButton>
            <KaButton
              code="button-13"
              :options="{ ripple: true }">
              <span v-html="t('test.formulaireSurUnePage.emballageUserForm.container11.container12.button13.value', `Suivant`)" />
            </KaButton>
            <KaButton
              code="button-14"
              :options="{ ripple: true }">
              <span v-html="t('test.formulaireSurUnePage.emballageUserForm.container11.container12.button14.value', `Enregistrer l'emballage`)" />
            </KaButton>
          </KaContainer>
        </KaContainer>
      </KaContainer>
      <!-- Transport Form -->
      <KaContainer
        code="transport-form"
        :data="page.$info.transportForm">
        <!-- Form content -->
        <KaContainer code="container-13">
          <KaNumberInput
            v-model="page.$info.transportForm.item.nombreKm"
            code="nombre-de-km-domicile-travail"
            :options="{ placeholder: t('test.formulaireSurUnePage.transportForm.container13.nombreDeKmDomicileTravail.placeholder', `nombre de km domicile/travail`) }" />
          <KaNumberInput
            v-model="page.$info.transportForm.item.consoTransport"
            code="quelle-est-la-consommation-de-votre-vehic"
            :options="{ placeholder: t('test.formulaireSurUnePage.transportForm.container13.quelleEstLaConsommationDeVotreVehic.placeholder', `Quelle est la consommation de votre véhicule ?`) }" />
          <KaYesNoInput
            v-model="page.$info.transportForm.item.covoiturage"
            code="faites-vous-du-covoiturage"
            :options="{ debounce: 100 }" />
          <KaYesNoInput
            v-model="page.$info.transportForm.item.fonction"
            code="est-ce-une-voiture-de-fonction"
            :options="{ debounce: 100 }" />
          <KaYesNoInput
            v-model="page.$info.transportForm.item.calculMoyenne"
            code="faites-vous-une-moyenne-de-vos-employes-ou"
            :options="{ debounce: 100 }" />
          <KaYesNoInput
            v-model="page.$info.transportForm.item.deplacementPro"
            code="faites-vous-des-deplacements-profession"
            :options="{ debounce: 100 }" />
          <KaYesNoInput
            v-model="page.$info.transportForm.item.transportPro"
            code="est-ce-une-location"
            :options="{ debounce: 100 }" />
          <KaNavigationPropertyInput
            v-model="page.$info.transportForm.item.Salarie"
            code="salarie"
            :options="{
              lazyOptions: {
                throttle: 500,
                once: true,
                intersection: { threshold: 0.1 }
              },
              placeholder: t('test.formulaireSurUnePage.transportForm.container13.salarie.placeholder', `Salarie`)
            }" />
        </KaContainer>
      </KaContainer>
      <!-- DechetsQuestion Form -->
      <KaContainer
        code="dechets-question-form"
        :data="page.$info.dechetsQuestionForm">
        <!-- Form content -->
        <KaContainer code="container-14">
          <KaYesNoInput
            v-model="page.$info.dechetsQuestionForm.item.decheterie"
            code="jetez-vous-souvent-des-dechets-dus-a-votre"
            :options="{ debounce: 100 }" />
          <KaYesNoInput
            v-model="page.$info.dechetsQuestionForm.item.plierSiege"
            code="pliez-vous-vos-sieges-arrieres"
            :options="{ debounce: 100 }" />
          <KaSelectInput
            v-model="page.$info.dechetsQuestionForm.item.tailleRemorque"
            code="utilisez-vous-une-remorque"
            :options="{
              debounce: 10,
              items: page.$constants.utilisezVousUneRemorqueItems,
              placeholder: t('test.formulaireSurUnePage.dechetsQuestionForm.container14.utilisezVousUneRemorque.placeholder', `Utilisez-vous une remorque?`)
            }" />
          <KaNumberInput
            v-model="page.$info.dechetsQuestionForm.item.allerRetourMois"
            code="combien-dallers-retours-faites-vous-en-mo"
            :options="{ placeholder: t('test.formulaireSurUnePage.dechetsQuestionForm.container14.combienDallersRetoursFaitesVousEnMo.placeholder', `Combien d'allers-retours faites vous en moyenne par mois?`) }" />
          <KaNumberInput
            v-model="page.$info.dechetsQuestionForm.item.taillePoubelleOrganique"
            code="faites-vous-du-compost-avec-vos-dechets-or"
            :options="{ placeholder: t('test.formulaireSurUnePage.dechetsQuestionForm.container14.faitesVousDuCompostAvecVosDechetsOr.placeholder', `Faîtes-vous du compost avec vos déchets organiques ?`) }" />
          <KaSelectInput
            v-model="page.$info.dechetsQuestionForm.item.usagePoubelleOrganique"
            code="usage-poubelle-organique"
            :options="{
              debounce: 10,
              items: page.$constants.usagePoubelleOrganiqueItems,
              placeholder: t('test.formulaireSurUnePage.dechetsQuestionForm.container14.usagePoubelleOrganique.placeholder', `Usage Poubelle Organique`)
            }" />
          <!-- Boutons retour suivant enregistrer -->
          <KaContainer code="container-15">
            <KaButton
              code="button-15"
              :options="{ ripple: true }">
              <span v-html="t('test.formulaireSurUnePage.dechetsQuestionForm.container14.container15.button15.value', `Retour`)" />
            </KaButton>
            <KaButton
              code="button-16"
              :options="{ ripple: true }">
              <span v-html="t('test.formulaireSurUnePage.dechetsQuestionForm.container14.container15.button16.value', `Suivant`)" />
            </KaButton>
          </KaContainer>
        </KaContainer>
      </KaContainer>
      <KaText
        code="h-1"
        :options="{
          style: {
            color: appData.theme.fontColor2,
            fontFamily: appData.theme.fontFamily2
          }
        }">
        <h1 v-html="t('test.formulaireSurUnePage.h1.value', `h1`)" />
      </KaText>
      <KaButton
        code="commencer-le-formulaire"
        :options="{
          ripple: true,
          click: page.commencerLeFormulaireClick,
          $state: { selected: page.$data.formStep === 1 }
        }">
        <span v-html="t('test.formulaireSurUnePage.commencerLeFormulaire.value', `Commencer le formulaire`)" />
      </KaButton>
      <!-- TransportQuestion Form -->
      <KaContainer
        code="transport-question-form"
        :data="page.$info.transportQuestionForm">
        <!-- Form content -->
        <KaContainer code="container-16">
          <KaSelectInput
            v-model="page.$info.transportQuestionForm.item.regrouperDeplacement"
            code="regroupez-vous-vos-deplacements-profess"
            :options="{
              debounce: 10,
              items: page.$constants.regroupezVousVosDeplacementsProfessItems,
              placeholder: t('test.formulaireSurUnePage.transportQuestionForm.container16.regroupezVousVosDeplacementsProfess.placeholder', `Regroupez-vous vos déplacements professionnels afin de limiter le déplacement? `)
            }" />
          <KaYesNoInput
            v-model="page.$info.transportQuestionForm.item.surplaceObligatoire"
            code="votre-activite-implique-t-elle-detre-sur-p"
            :options="{ debounce: 100 }" />
          <KaYesNoInput
            v-model="page.$info.transportQuestionForm.item.tachesADistance"
            code="faites-vous-une-partie-de-vos-taches-admin"
            :options="{ debounce: 100 }" />
          <!-- Boutons retour suivant enregistrer -->
          <KaContainer code="container-17">
            <KaButton
              code="button-17"
              :options="{ ripple: true }">
              <span v-html="t('test.formulaireSurUnePage.transportQuestionForm.container16.container17.button17.value', `Retour`)" />
            </KaButton>
            <KaButton
              code="button-18"
              :options="{ ripple: true }">
              <span v-html="t('test.formulaireSurUnePage.transportQuestionForm.container16.container17.button18.value', `Suivant`)" />
            </KaButton>
          </KaContainer>
        </KaContainer>
      </KaContainer>
      <!-- Boutons retour suivant -->
      <KaContainer code="boutons-retour-suivant">
        <KaButton
          code="button-19"
          :options="{ ripple: true }">
          <span v-html="t('test.formulaireSurUnePage.boutonsRetourSuivant.button19.value', `Retour`)" />
        </KaButton>
        <KaButton
          code="button-20"
          :options="{ ripple: true }">
          <span v-html="t('test.formulaireSurUnePage.boutonsRetourSuivant.button20.value', `Suivant`)" />
        </KaButton>
        <KaButton
          code="button-21"
          :options="{ ripple: true }">
          <span v-html="t('test.formulaireSurUnePage.boutonsRetourSuivant.button21.value', `Enregistrer la fourniture`)" />
        </KaButton>
      </KaContainer>
      <!-- Boutons retour suivant enregistrer -->
      <KaContainer code="container-18">
        <KaButton
          code="button-22"
          :options="{ ripple: true }">
          <span v-html="t('test.formulaireSurUnePage.container18.button22.value', `Retour`)" />
        </KaButton>
        <KaButton
          code="button-23"
          :options="{ ripple: true }">
          <span v-html="t('test.formulaireSurUnePage.container18.button23.value', `Suivant`)" />
        </KaButton>
      </KaContainer>
      <!-- Boutons retour suivant enregistrer -->
      <KaContainer code="container-19">
        <KaButton
          code="button-24"
          :options="{ ripple: true }">
          <span v-html="t('test.formulaireSurUnePage.container19.button24.value', `Retour`)" />
        </KaButton>
        <KaButton
          code="button-25"
          :options="{ ripple: true }">
          <span v-html="t('test.formulaireSurUnePage.container19.button25.value', `Suivant`)" />
        </KaButton>
        <KaButton
          code="button-26"
          :options="{ ripple: true }">
          <span v-html="t('test.formulaireSurUnePage.container19.button26.value', `Enregistrer l'énergie renouvelable`)" />
        </KaButton>
      </KaContainer>
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
    </KaContainer>
  </KaContainer>
</template>

<script setup lang="ts">
import { generateMeta } from 'kapix-components-vue3'
import { test } from './store'
import { appDataStore } from '~/stores'
import './style.scss'
import './style.custom.scss'

defineOptions({
  name: 'Test'
})
provide('$scoped', '-p6')
const props = withDefaults(defineProps<{
  seo?: boolean
}>(), {
  seo: true
})
const appData = appDataStore()
const page = test()
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
