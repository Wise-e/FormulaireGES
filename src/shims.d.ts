declare interface Window {
  // extend the window
}

// with vite-plugin-vue-markdown, markdown files can be treated as Vue components
declare module '*.md' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare type Nullable<T> = T | null | undefined
declare type KeyValuePair<V = any> = {
  [key: string]: V
}
declare type KeyPair = KeyValuePair<string>
declare type PartialEntity<T> = Nullable<Partial<T>>
declare type PartialEntities<T> = Nullable<Array<Partial<T>>>
declare type TwitterCard = 'summary' | 'summary_large_image' | 'app' | 'player'
declare type KaElement = {
  value: any
  options: KeyValuePair
  style: KeyValuePair
}

declare type KaElementMap = {
  [key: string]: KaElement
}

declare type RoleEnum = null | 'admin' | 'manager'
declare interface IUser {
  name: string
  email: string
  roles: RoleEnum[]
}

declare type IGradientColor = string | { Angle?: number; Colors: string[] }
declare type KapixListData<T = any> = {
  items?: Nullable<Array<T>>
  scrollTop?: Nullable<number>
  scrollLeft?: Nullable<number>
  loading?: Nullable<boolean>
  quickSearch?: Nullable<string>
  addItem?: (item: PartialEntity<T>) => void
  removeItem?: (item: PartialEntity<T>) => boolean
}

declare namespace Kapix {
  declare namespace Entity {
    declare interface IMatiereUser {
      Id: number
      poidsMatiere: number
      provenanceMagasin: `Producteur` | `Magasin` | `Grossiste` | `Autre`
      caracteristiqueNeuve: Nullable<number>
      caracteristiqueOccasion: Nullable<number>
      caracteristiqueRecyclage: Nullable<number>
      caracteristiqueRecup: Nullable<number>
      caracteristiqueAutoproduite: Nullable<number>
      distanceMagasin: `Même ville` | `Même département` | `Même région` | `Autre Région` | `Pays frontalier` | `Autre pays d'Europe` | `Autre continent`
      consoTransport: Nullable<number>
      provenanceMatiere: `Même ville` | `Même département` | `Même région` | `Autre région` | `Pays frontalier` | `Pays d'Europe` | `Autre continent` | `Made in France` | `Made in Europe` | `Hors UE` | `Je ne sais pas`
      transportMagasin: `Je ne sais pas` | `Maritime/Fluvial` | `Aérien` | `Train` | `Routier`
      nombreEntrepriseCommande: number
      plusProcheQ: `Pour des questions de coût` | `Par habitude` | `Partenariat longue durée` | `N'existe pas plus près`
      certitudeduChoixQ: `Sûr et certain` | `à ma connaissance` | `Je ne sais pas`
      changerApprovisionnementQ: `Oui, mais je ne sais pas encore quand` | `Non, j'en suis satisfait` | `Non, je ne peux pas me le permettre pour le moment` | `Oui, je suis en train de le faire`
      Saisonnalite: Nullable<boolean>
      CreatedBy: string
      ModifiedBy: Nullable<string>
      CreatedAt: Date
      ModifiedAt: Nullable<Date>
      MatiereNomMatiere: string
      MoyenTransportId: number
      CompteIdCompte: number
      OptimisticConcurrencyVersion: number
      Matiere: PartialEntity<Kapix.Entity.IMatiere>
      MoyenTransport: PartialEntity<Kapix.Entity.IMoyenTransport>
      Compte: PartialEntity<Kapix.Entity.ICompte>
    }
    declare interface ISalarie {
      id: number
      OptimisticConcurrencyVersion: number
      Transports: PartialEntities<Kapix.Entity.ITransport>
      CreatedBy: string
      ModifiedBy: Nullable<string>
      CreatedAt: Date
      ModifiedAt: Nullable<Date>
    }
    declare interface IEnergieRenouvelables {
      Id: number
      nomEnergieRenouvelable: string
      valeurEnergieRenouvelable: Nullable<number>
      CreatedBy: string
      ModifiedBy: Nullable<string>
      CreatedAt: Date
      ModifiedAt: Nullable<Date>
      OptimisticConcurrencyVersion: number
      EnergieRenouvelableUsers: PartialEntities<Kapix.Entity.IEnergieRenouvelableUser>
    }
    declare interface IAgricole {
      Id: number
      nombreDeTete: Nullable<number>
      surfaceAgricole: Nullable<number>
      nombreDeMachines: Nullable<number>
      compost: Nullable<number>
      engraischimique: Nullable<number>
      alternativenaturelQ: Nullable<`Non jamais` | `Oui mais je n'ai pas pu trouver mieux pour le moment` | `Oui je pense le faire prochainement`> | Nullable<Array<any>>
      CompteIdCompte: number
      OptimisticConcurrencyVersion: number
      Compte: PartialEntity<Kapix.Entity.ICompte>
      CreatedBy: string
      ModifiedBy: Nullable<string>
      CreatedAt: Date
      ModifiedAt: Nullable<Date>
    }
    declare interface IChauffage {
      Id: number
      nomChauffage: string
      valeurChauffage: Nullable<number>
      OptimisticConcurrencyVersion: number
      ChauffageUsers: PartialEntities<Kapix.Entity.IChauffageUser>
      CreatedBy: string
      ModifiedBy: Nullable<string>
      CreatedAt: Date
      ModifiedAt: Nullable<Date>
    }
    declare interface IChauffageUser {
      Id: number
      valeurChauffer: number
      resultatChauffer: Nullable<number>
      ChauffageId: number
      CompteIdCompte: number
      OptimisticConcurrencyVersion: number
      Chauffage: PartialEntity<Kapix.Entity.IChauffage>
      Compte: PartialEntity<Kapix.Entity.ICompte>
      CreatedBy: string
      ModifiedBy: Nullable<string>
      CreatedAt: Date
      ModifiedAt: Nullable<Date>
    }
    declare interface IEmballage {
      Id: number
      nomEmballage: string
      valeurEmballage: Nullable<number>
      valeurRecycleEmballage: Nullable<number>
      CreatedBy: string
      ModifiedBy: Nullable<string>
      CreatedAt: Date
      ModifiedAt: Nullable<Date>
      OptimisticConcurrencyVersion: number
      EmballageUsers: PartialEntities<Kapix.Entity.IEmballageUser>
    }
    declare interface IEmballageUser {
      Id: number
      valeurEmballer: number
      resultatEmballer: Nullable<number>
      issueRecycleEmballage: Nullable<boolean>
      recyclableEmballage: Nullable<boolean>
      CreatedBy: string
      ModifiedBy: Nullable<string>
      CreatedAt: Date
      ModifiedAt: Nullable<Date>
      EmballageId: number
      CompteIdCompte: number
      OptimisticConcurrencyVersion: number
      Emballage: PartialEntity<Kapix.Entity.IEmballage>
      Compte: PartialEntity<Kapix.Entity.ICompte>
    }
    declare interface IFournitures {
      Id: number
      nomFourniture: string
      valeurFourniture: Nullable<number>
      CreatedBy: string
      ModifiedBy: Nullable<string>
      CreatedAt: Date
      ModifiedAt: Nullable<Date>
      OptimisticConcurrencyVersion: number
      FournitureUsers: PartialEntities<Kapix.Entity.IFournitureUser>
    }
    declare interface IFournitureUser {
      Id: number
      nombreFourniture: number
      tempsPossession: `Moins d'un an` | `Entre 1 et 5 ans` | `Entre 5 et 10 ans` | `Plus de 10 ans`
      tempsGarder: `Moins d'un an` | `Plus de 10 ans` | `Entre 1 et 5 ans` | `Entre 5 et 10 ans`
      caractFourniture: `Loué` | `Neuf` | `Reconditionnés` | `Seconde main`
      raisonJeterFourniture: `Manque de performance` | `Amortissement comptable` | `Usure` | `Evolution de la technologie`
      jeterFourniture: `Don` | `Revente` | `Décheterie` | `Recyclage`
      nombrePartageEntreprise: number
      resultat: Nullable<number>
      CreatedBy: string
      ModifiedBy: Nullable<string>
      CreatedAt: Date
      ModifiedAt: Nullable<Date>
      FournituresId: number
      CompteIdCompte: number
      OptimisticConcurrencyVersion: number
      Fournitures: PartialEntity<Kapix.Entity.IFournitures>
      Compte: PartialEntity<Kapix.Entity.ICompte>
    }
    declare interface IEnergieRenouvelableUser {
      Id: number
      valeurEnergieRenouvelableUser: number
      EnergieRenouvelablesId: number
      CompteIdCompte: number
      OptimisticConcurrencyVersion: number
      EnergieRenouvelables: PartialEntity<Kapix.Entity.IEnergieRenouvelables>
      Compte: PartialEntity<Kapix.Entity.ICompte>
      CreatedBy: string
      ModifiedBy: Nullable<string>
      CreatedAt: Date
      ModifiedAt: Nullable<Date>
    }
    declare interface IEnergieUser {
      Id: number
      valeurEnergieUser: Nullable<number>
      EnergieId: number
      CompteIdCompte: number
      OptimisticConcurrencyVersion: number
      Energie: PartialEntity<Kapix.Entity.IEnergie>
      Compte: PartialEntity<Kapix.Entity.ICompte>
      CreatedBy: string
      ModifiedBy: Nullable<string>
      CreatedAt: Date
      ModifiedAt: Nullable<Date>
    }
    declare interface IGenreDechet {
      Id: number
      nomDechet: string
      valeurDechet: number
      OptimisticConcurrencyVersion: number
      GenreDechetUsers: PartialEntities<Kapix.Entity.IGenreDechetUser>
      CreatedBy: string
      ModifiedBy: Nullable<string>
      CreatedAt: Date
      ModifiedAt: Nullable<Date>
    }
    declare interface IPoubelle {
      Id: number
      clecomposite: Nullable<string>
      typePoubelle: `Sac` | `Poubelle` | `Benne`
      taillePoubelle: `Moins de 30L` | `Entre 30L et 100L` | `Entre 100L et 150L` | `240L` | `660L` | `770L` | `1100L` | `3 à 6m3` | `7 à 15m3` | `Plus de 20m3`
      Couleur: `Noire` | `Jaune` | `Verte` | `Bleue`
      valeurPoubelle: number
      CreatedBy: string
      ModifiedBy: Nullable<string>
      CreatedAt: Date
      ModifiedAt: Nullable<Date>
      OptimisticConcurrencyVersion: number
      PoubelleUsers: PartialEntities<Kapix.Entity.IPoubelleUser>
    }
    declare interface ITransportQuestion {
      Id: number
      regrouperDeplacement: `Oui j'essaye de le faire au maximum` | `J'ai déjà pensé à le faire mais je n'en ai pas eu l'occasion` | `Non je ne peux pas me le permettre`
      surplaceObligatoire: boolean
      tachesADistance: boolean
      CompteIdCompte: number
      OptimisticConcurrencyVersion: number
      Compte: PartialEntity<Kapix.Entity.ICompte>
      CreatedBy: string
      ModifiedBy: Nullable<string>
      CreatedAt: Date
      ModifiedAt: Nullable<Date>
    }
    declare interface IEquipementUser {
      Id: number
      nombreEquipement: number
      dureeEquipement: Nullable<`Moins d'un an` | `Entre 1 et 5 ans` | `Entre 5 et 10 ans` | `Plus de 10 ans`>
      caractEquipement: Nullable<`Loué` | `Neuf` | `Reconditionné` | `Seconde main`>
      garderEquipement: Nullable<`Moins d'un an` | `Entre 1 et 5 ans` | `Entre 5 et 10 ans` | `Plus de 10 ans`>
      raisonJeterEquipement: Nullable<`Manque de performance` | `Amortissement Comptable` | `Usure` | `Evolution de la technologie`>
      jeterEquipement: Nullable<`Recyclage` | `Décheterie` | `Revente` | `Don`>
      nombreEntreprisePartage: Nullable<number>
      CreatedBy: string
      resultat: Nullable<number>
      ModifiedBy: Nullable<string>
      CreatedAt: Date
      ModifiedAt: Nullable<Date>
      EquipementId: number
      CompteIdCompte: number
      OptimisticConcurrencyVersion: number
      Equipement: PartialEntity<Kapix.Entity.IEquipement>
      Compte: PartialEntity<Kapix.Entity.ICompte>
    }
    declare interface IEquipement {
      Id: number
      nomEquipement: string
      valeurEquipement: Nullable<number>
      OptimisticConcurrencyVersion: number
      EquipementUsers: PartialEntities<Kapix.Entity.IEquipementUser>
      CreatedBy: string
      ModifiedBy: Nullable<string>
      CreatedAt: Date
      ModifiedAt: Nullable<Date>
    }
    declare interface IEnergie {
      Id: number
      TexteCourt: string
      uniteEnergie: Nullable<`Litres` | `KG` | `Stère`>
      valeurEnergieLitreouM3: Nullable<number>
      valeurKg: Nullable<number>
      CreatedBy: string
      ModifiedBy: Nullable<string>
      CreatedAt: Date
      ModifiedAt: Nullable<Date>
      OptimisticConcurrencyVersion: number
      EnergieUsers: PartialEntities<Kapix.Entity.IEnergieUser>
    }
    declare interface IMatiere {
      nomMatiere: `Sulfate de sodium ou d'ammonium` | `Acide benzoique, sodium benzoate, tocopherol, benzyl benzoate` | `Acide chlorydrique, phosphorique, sorbique, potassium sorbate` | `Acide sulfurique` | `Acier/Fer` | `Alcool` | `Aluminium` | `Ammoniaque` | `Argent` | `Carbonate de calcium` | `Acide citrique, tartrique, nitrique` | `Acide sulfurique` | `Bicarbonate de soude/Sodium` | `Chlorure de sodium, Potassium` | `Chlore` | `Cuivre` | `Epoxy` | `Fibre de carbone/Graphite` | `Nickel` | `Or` | `Oxyde de zinc` | `PET` | `Peinture en bombre` | `Peinture en bombe` | `Peinture en pot` | `Platine (et famille)` | `Plomb` | `Résine` | `Savons, détergents et tensioactifs` | `Soude` | `Soufre` | `Titane` | `Vernis en bombe` | `Vernis en pot` | `Verre`
      categorieMatiere: `Produits chimiques et alcool` | `Peinture/ Vernis/ Résines/Teinture/En` | `Plastiques` | `Métaux` | `Verre` | `Papeterie` | `Autres` | `Minéraux` | `Produits d'hygiène et nettoyage` | `Textile` | `Bois` | `Alimentaire`
      mesureMatiere: `Litres` | `KG` | `Nombre`
      valeurMatiere: Nullable<number>
      valeurRecyclage: Nullable<number>
      CreatedBy: string
      ModifiedBy: Nullable<string>
      CreatedAt: Date
      OptimisticConcurrencyVersion: number
      ModifiedAt: Nullable<Date>
      MatiereUsers: PartialEntities<Kapix.Entity.IMatiereUser>
    }
    declare interface IBatiment {
      Id: number
      CreatedBy: string
      lieuBatiment: Nullable<`Bâtiment industriel` | `Chez vous` | `Atelier/Boutique`>
      surfaceBatiment: Nullable<number>
      nbEntreprisesPartageLieu: Nullable<number>
      classeEnergitique: Nullable<`A` | `C` | `D` | `E` | `G` | `Je ne sais pas`>
      consoElectrique: Nullable<number>
      ModifiedBy: Nullable<string>
      CreatedAt: Date
      ModifiedAt: Nullable<Date>
      CompteIdCompte: number
      OptimisticConcurrencyVersion: number
      Compte: PartialEntity<Kapix.Entity.ICompte>
    }
    declare interface IVente {
      Id: number
      nombreVenteSemaine: number
      garantieMois: number
      produitRecyclable: boolean
      recupProduit: boolean
      restaurerProduit: boolean
      Locaux: Nullable<number>
      Touristes: Nullable<number>
      n1Km: Nullable<number>
      n10Km: Nullable<number>
      n10A20Km: Nullable<number>
      n20Km: Nullable<number>
      routier: Nullable<number>
      maritime: Nullable<number>
      marketplaces: Nullable<number>
      aerien: Nullable<number>
      train: Nullable<number>
      emplacementBoutique: `En centre ville` | `Zone périurbaine` | `Zone rurale`
      choixEmplacement: `Proximité gare` | `Proximité autoroute  et grand axes routiers` | `Proximité de mon domicile` | `Proximité fournisseur` | `Lieu de passage fréquent` | `Proximité aéroport`
      accessibiliteBoutique: Nullable<`Près du bus/tram` | `Parking voiture` | `Parking vélo` | `Près d'une gare`> | Nullable<Array<any>>
      raisonDeChangement: Nullable<string>
      CreatedBy: string
      ModifiedBy: Nullable<string>
      CreatedAt: Date
      ModifiedAt: Nullable<Date>
      CompteIdCompte: number
      OptimisticConcurrencyVersion: number
      Compte: PartialEntity<Kapix.Entity.ICompte>
    }
    declare interface ITransport {
      Id: number
      nombreKm: number
      consoTransport: number
      covoiturage: boolean
      fonction: boolean
      calculMoyenne: boolean
      deplacementPro: boolean
      transportPro: boolean
      SalarieId: Nullable<number>
      CompteIdCompte: number
      OptimisticConcurrencyVersion: number
      Salarie: PartialEntity<Kapix.Entity.ISalarie>
      Compte: PartialEntity<Kapix.Entity.ICompte>
      MoyenTransports: PartialEntities<Kapix.Entity.IMoyenTransport>
      CreatedBy: string
      ModifiedBy: Nullable<string>
      CreatedAt: Date
      ModifiedAt: Nullable<Date>
    }
    declare interface IDechetsQuestion {
      Id: number
      decheterie: Nullable<boolean>
      plierSiege: Nullable<boolean>
      tailleRemorque: Nullable<`Bagagère de moins de 500L` | `Bagagère de plus de 500L` | `Professionnel entre 800L et 1000L` | `Professionnel de plus de 1000L`>
      allerRetourMois: Nullable<number>
      taillePoubelleOrganique: Nullable<number>
      usagePoubelleOrganique: Nullable<`Usage professionnel` | `Usage personnel` | `Récupération par des services professionnel` | `Don à une municipalité`>
      CompteIdCompte: number
      OptimisticConcurrencyVersion: number
      Compte: PartialEntity<Kapix.Entity.ICompte>
      CreatedBy: string
      ModifiedBy: Nullable<string>
      CreatedAt: Date
      ModifiedAt: Nullable<Date>
    }
    declare interface IMoyenTransport {
      Id: number
      nomTransport: string
      carburantTransport: `Electrique` | `Biocarburant` | `GPL/GNL` | `Essence` | `Gazole` | `Transport en commun`
      consoTransport: number
      voiture: Nullable<boolean>
      Concatenation12: Nullable<string>
      CreatedBy: string
      ModifiedBy: Nullable<string>
      OptimisticConcurrencyVersion: number
      CreatedAt: Date
      Transports: PartialEntities<Kapix.Entity.ITransport>
      ModifiedAt: Nullable<Date>
      MatiereUsers: PartialEntities<Kapix.Entity.IMatiereUser>
    }
    declare interface IGenreDechetUser {
      Id: number
      valeurDechet: number
      CreatedBy: string
      ModifiedBy: Nullable<string>
      CreatedAt: Date
      ModifiedAt: Nullable<Date>
      GenreDechetId: number
      CompteIdCompte: number
      OptimisticConcurrencyVersion: number
      GenreDechet: PartialEntity<Kapix.Entity.IGenreDechet>
      Compte: PartialEntity<Kapix.Entity.ICompte>
    }
    declare interface IPoubelleUser {
      Id: number
      PoubelleId: number
      CompteIdCompte: number
      OptimisticConcurrencyVersion: number
      Poubelle: PartialEntity<Kapix.Entity.IPoubelle>
      Compte: PartialEntity<Kapix.Entity.ICompte>
      CreatedBy: string
      ModifiedBy: Nullable<string>
      CreatedAt: Date
      ModifiedAt: Nullable<Date>
    }
    declare interface ICompte {
      idCompte: number
      EMail: Nullable<string>
      Prenom: Nullable<string>
      Nom: Nullable<string>
      Admin: boolean
      CreatedBy: string
      ModifiedBy: Nullable<string>
      ModifiedAt: Nullable<Date>
      CreatedAt: Date
      OptimisticConcurrencyVersion: number
      MatiereUsers: PartialEntities<Kapix.Entity.IMatiereUser>
      Agricoles: PartialEntities<Kapix.Entity.IAgricole>
      ChauffageUsers: PartialEntities<Kapix.Entity.IChauffageUser>
      EmballageUsers: PartialEntities<Kapix.Entity.IEmballageUser>
      FournitureUsers: PartialEntities<Kapix.Entity.IFournitureUser>
      EnergieRenouvelableUsers: PartialEntities<Kapix.Entity.IEnergieRenouvelableUser>
      EnergieUsers: PartialEntities<Kapix.Entity.IEnergieUser>
      TransportQuestions: PartialEntities<Kapix.Entity.ITransportQuestion>
      EquipementUsers: PartialEntities<Kapix.Entity.IEquipementUser>
      Batiments: PartialEntities<Kapix.Entity.IBatiment>
      Ventes: PartialEntities<Kapix.Entity.IVente>
      Transports: PartialEntities<Kapix.Entity.ITransport>
      DechetsQuestions: PartialEntities<Kapix.Entity.IDechetsQuestion>
      PoubelleUsers: PartialEntities<Kapix.Entity.IPoubelleUser>
      GenreDechetUsers: PartialEntities<Kapix.Entity.IGenreDechetUser>
      Dashboards: PartialEntities<Kapix.Entity.IDashboard>
    }
    declare interface IDashboard {
      Id: number
      Image: Nullable<string>
      FamilleDePolices: Nullable<string>
      Couleur: Nullable<string>
      Couleur1: Nullable<string>
      Couleur2: Nullable<string>
      Couleur3: Nullable<string>
      Couleur4: Nullable<string>
      Couleur5: Nullable<string>
      CompteIdCompte: number
      OptimisticConcurrencyVersion: number
      Compte: PartialEntity<Kapix.Entity.ICompte>
      CreatedBy: string
      ModifiedBy: Nullable<string>
      CreatedAt: Date
      ModifiedAt: Nullable<Date>
    }
    declare interface IUser {
      id: unknown
      email: string
      userName: string
      imageUrl: string
      emailConfirmed: boolean
      type: Nullable<`Admin` | `Artisan` | `Client`>
      state: Nullable<null | `premium` | `blocked` | `banned` | `waiting`>
    }
    declare interface IApplication {
      name: string
      owner: string
      title: string
      icon: string
      version: string
      copyright: string
    }
  }
}