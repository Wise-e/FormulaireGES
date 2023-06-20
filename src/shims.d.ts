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
    declare interface IUser {
      type: Nullable<'Admin' | 'Artisan' | 'Client'>
      id: unknown
      email: string
      userName: string
      imageUrl: string
      emailConfirmed: boolean
      state: Nullable<null | 'premium' | 'blocked' | 'banned' | 'waiting'>
    }
    declare interface IApplication {
      name: string
      owner: string
      title: string
      icon: string
      version: string
      copyright: string
    }
    declare interface IMatiereUser {
      Id: number
      Saisonnalite: Nullable<boolean>
      changerApprovisionnementQ: 'Oui, mais je ne sais pas encore quand' | 'Non, j'en suis satisfait' | 'Non, je ne peux pas me le permettre pour le moment' | 'Oui, je suis en train de le faire'
      certitudeduChoixQ: 'Sûr et certain' | 'à ma connaissance' | 'Je ne sais pas'
      plusProcheQ: 'Pour des questions de coût' | 'Par habitude' | 'Partenariat longue durée' | 'N'existe pas plus près'
      nombreEntrepriseCommande: number
      transportMagasin: 'Je ne sais pas' | 'Maritime/Fluvial' | 'Aérien' | 'Train' | 'Routier'
      provenanceMatiere: 'Même ville' | 'Même département' | 'Même région' | 'Autre région' | 'Pays frontalier' | 'Pays d'Europe' | 'Autre continent' | 'Made in France' | 'Made in Europe' | 'Hors UE' | 'Je ne sais pas'
      consoTransport: Nullable<number>
      distanceMagasin: 'Même ville' | 'Même département' | 'Même région' | 'Autre Région' | 'Pays frontalier' | 'Autre pays d'Europe' | 'Autre continent'
      provenanceMagasin: 'Producteur' | 'Magasin' | 'Grossiste' | 'Autre'
      caracteristiqueNeuve: Nullable<number>
      poidsMatiere: number
      CreatedBy: string
      ModifiedBy: Nullable<string>
      CreatedAt: Date
      ModifiedAt: Nullable<Date>
      caracteristiqueOccasion: Nullable<number>
      caracteristiqueAutoproduite: Nullable<number>
      caracteristiqueRecyclage: Nullable<number>
      caracteristiqueRecup: Nullable<number>
      Matiere: PartialEntity<Kapix.Entity.IMatiere>
      MoyenTransport: PartialEntity<Kapix.Entity.IMoyenTransport>
      Compte: PartialEntity<Kapix.Entity.ICompte>
    }
    declare interface ISalarie {
      id: number
      CreatedBy: string
      ModifiedBy: Nullable<string>
      CreatedAt: Date
      ModifiedAt: Nullable<Date>
      Transports: PartialEntities<Kapix.Entity.ITransport>
    }
    declare interface IEnergieRenouvelables {
      Id: number
      nomEnergieRenouvelable: string
      valeurEnergieRenouvelable: Nullable<number>
      CreatedBy: string
      ModifiedBy: Nullable<string>
      CreatedAt: Date
      ModifiedAt: Nullable<Date>
      EnergieRenouvelableUsers: PartialEntities<Kapix.Entity.IEnergieRenouvelableUser>
    }
    declare interface IAgricole {
      Id: number
      alternativenaturelQ: Nullable<'Non jamais' | 'Oui mais je n'ai pas pu trouver mieux pour le moment' | 'Oui je pense le faire prochainement'> | Nullable<Array<any>>
      engraischimique: Nullable<number>
      compost: Nullable<number>
      nombreDeMachines: Nullable<number>
      surfaceAgricole: Nullable<number>
      nombreDeTete: Nullable<number>
      CreatedBy: string
      ModifiedBy: Nullable<string>
      CreatedAt: Date
      ModifiedAt: Nullable<Date>
      Compte: PartialEntity<Kapix.Entity.ICompte>
    }
    declare interface IChauffage {
      Id: number
      valeurChauffage: Nullable<number>
      nomChauffage: string
      CreatedBy: string
      ModifiedBy: Nullable<string>
      CreatedAt: Date
      ModifiedAt: Nullable<Date>
      ChauffageUsers: PartialEntities<Kapix.Entity.IChauffageUser>
    }
    declare interface IChauffageUser {
      Id: number
      resultatChauffer: Nullable<number>
      valeurChauffer: number
      CreatedBy: string
      ModifiedBy: Nullable<string>
      CreatedAt: Date
      ModifiedAt: Nullable<Date>
      Chauffage: PartialEntity<Kapix.Entity.IChauffage>
      Compte: PartialEntity<Kapix.Entity.ICompte>
    }
    declare interface IEmballage {
      Id: number
      valeurRecycleEmballage: Nullable<number>
      valeurEmballage: Nullable<number>
      nomEmballage: string
      CreatedBy: string
      ModifiedBy: Nullable<string>
      CreatedAt: Date
      ModifiedAt: Nullable<Date>
      EmballageUsers: PartialEntities<Kapix.Entity.IEmballageUser>
    }
    declare interface IEmballageUser {
      Id: number
      recyclableEmballage: Nullable<boolean>
      issueRecycleEmballage: Nullable<boolean>
      resultatEmballer: Nullable<number>
      valeurEmballer: number
      CreatedBy: string
      ModifiedBy: Nullable<string>
      CreatedAt: Date
      ModifiedAt: Nullable<Date>
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
      FournitureUsers: PartialEntities<Kapix.Entity.IFournitureUser>
    }
    declare interface IFournitureUser {
      Id: number
      caractFourniture: 'Loué' | 'Neuf' | 'Reconditionnés' | 'Seconde main'
      resultat: Nullable<number>
      nombrePartageEntreprise: number
      jeterFourniture: 'Don' | 'Revente' | 'Décheterie' | 'Recyclage'
      raisonJeterFourniture: 'Manque de performance' | 'Amortissement comptable' | 'Usure' | 'Evolution de la technologie'
      tempsGarder: 'Moins d'un an' | 'Plus de 10 ans' | 'Entre 1 et 5 ans' | 'Entre 5 et 10 ans'
      tempsPossession: 'Moins d'un an' | 'Entre 1 et 5 ans' | 'Entre 5 et 10 ans' | 'Plus de 10 ans'
      nombreFourniture: number
      CreatedBy: string
      ModifiedBy: Nullable<string>
      CreatedAt: Date
      ModifiedAt: Nullable<Date>
      Fournitures: PartialEntity<Kapix.Entity.IFournitures>
      Compte: PartialEntity<Kapix.Entity.ICompte>
    }
    declare interface IEnergieRenouvelableUser {
      Id: number
      valeurEnergieRenouvelableUser: number
      CreatedBy: string
      ModifiedBy: Nullable<string>
      CreatedAt: Date
      ModifiedAt: Nullable<Date>
      EnergieRenouvelables: PartialEntity<Kapix.Entity.IEnergieRenouvelables>
      Compte: PartialEntity<Kapix.Entity.ICompte>
    }
    declare interface IEnergieUser {
      Id: number
      valeurEnergieUser: Nullable<number>
      CreatedBy: string
      ModifiedBy: Nullable<string>
      CreatedAt: Date
      ModifiedAt: Nullable<Date>
      Energie: PartialEntity<Kapix.Entity.IEnergie>
      Compte: PartialEntity<Kapix.Entity.ICompte>
    }
    declare interface IGenreDechet {
      Id: number
      valeurDechet: number
      nomDechet: string
      CreatedBy: string
      ModifiedBy: Nullable<string>
      CreatedAt: Date
      ModifiedAt: Nullable<Date>
      GenreDechetUsers: PartialEntities<Kapix.Entity.IGenreDechetUser>
    }
    declare interface IPoubelle {
      Id: number
      Couleur: 'Noire' | 'Jaune' | 'Verte' | 'Bleue'
      taillePoubelle: 'Moins de 30L' | 'Entre 30L et 100L' | 'Entre 100L et 150L' | '240L' | '660L' | '770L' | '1100L' | '3 à 6m3' | '7 à 15m3' | 'Plus de 20m3'
      valeurPoubelle: number
      typePoubelle: 'Sac' | 'Poubelle' | 'Benne'
      CreatedBy: string
      ModifiedBy: Nullable<string>
      CreatedAt: Date
      ModifiedAt: Nullable<Date>
      PoubelleUsers: PartialEntities<Kapix.Entity.IPoubelleUser>
      clecomposite: Nullable<string>
    }
    declare interface ITransportQuestion {
      Id: number
      tachesADistance: boolean
      surplaceObligatoire: boolean
      regrouperDeplacement: 'Oui j'essaye de le faire au maximum' | 'J'ai déjà pensé à le faire mais je n'en ai pas eu l'occasion' | 'Non je ne peux pas me le permettre'
      CreatedBy: string
      ModifiedBy: Nullable<string>
      CreatedAt: Date
      ModifiedAt: Nullable<Date>
      Compte: PartialEntity<Kapix.Entity.ICompte>
    }
    declare interface IEquipementUser {
      Id: number
      resultat: Nullable<number>
      nombreEntreprisePartage: Nullable<number>
      jeterEquipement: Nullable<'Recyclage' | 'Décheterie' | 'Revente' | 'Don'>
      raisonJeterEquipement: Nullable<'Manque de performance' | 'Amortissement Comptable' | 'Usure' | 'Evolution de la technologie'>
      garderEquipement: Nullable<'Moins d'un an' | 'Entre 1 et 5 ans' | 'Entre 5 et 10 ans' | 'Plus de 10 ans'>
      caractEquipement: Nullable<'Loué' | 'Neuf' | 'Reconditionné' | 'Seconde main'>
      dureeEquipement: Nullable<'Moins d'un an' | 'Entre 1 et 5 ans' | 'Entre 5 et 10 ans' | 'Plus de 10 ans'>
      nombreEquipement: number
      CreatedBy: string
      ModifiedBy: Nullable<string>
      CreatedAt: Date
      ModifiedAt: Nullable<Date>
      Equipement: PartialEntity<Kapix.Entity.IEquipement>
      Compte: PartialEntity<Kapix.Entity.ICompte>
    }
    declare interface IEquipement {
      Id: number
      valeurEquipement: Nullable<number>
      nomEquipement: string
      CreatedBy: string
      ModifiedBy: Nullable<string>
      CreatedAt: Date
      ModifiedAt: Nullable<Date>
      EquipementUsers: PartialEntities<Kapix.Entity.IEquipementUser>
    }
    declare interface IEnergie {
      Id: number
      uniteEnergie: Nullable<'Litres' | 'KG' | 'Stère'>
      valeurKg: Nullable<number>
      valeurEnergieLitreouM3: Nullable<number>
      TexteCourt: string
      CreatedBy: string
      ModifiedBy: Nullable<string>
      CreatedAt: Date
      ModifiedAt: Nullable<Date>
      EnergieUsers: PartialEntities<Kapix.Entity.IEnergieUser>
    }
    declare interface IMatiere {
      nomMatiere: 'Sulfate de sodium ou d'ammonium' | 'Acide benzoique, sodium benzoate, tocopherol, benzyl benzoate' | 'Acide chlorydrique, phosphorique, sorbique, potassium sorbate' | 'Acide sulfurique' | 'Acier/Fer' | 'Alcool' | 'Aluminium' | 'Ammoniaque' | 'Argent' | 'Carbonate de calcium' | 'Acide citrique, tartrique, nitrique' | 'Acide sulfurique' | 'Bicarbonate de soude/Sodium' | 'Chlorure de sodium, Potassium' | 'Chlore' | 'Cuivre' | 'Epoxy' | 'Fibre de carbone/Graphite' | 'Nickel' | 'Or' | 'Oxyde de zinc' | 'PET' | 'Peinture en bombre' | 'Peinture en bombe' | 'Peinture en pot' | 'Platine (et famille)' | 'Plomb' | 'Résine' | 'Savons, détergents et tensioactifs' | 'Soude' | 'Soufre' | 'Titane' | 'Vernis en bombe' | 'Vernis en pot' | 'Verre'
      valeurRecyclage: Nullable<number>
      valeurMatiere: Nullable<number>
      mesureMatiere: 'Litres' | 'KG' | 'Nombre'
      categorieMatiere: 'Produits chimiques et alcool' | 'Peinture/ Vernis/ Résines/Teinture/En' | 'Plastiques' | 'Métaux' | 'Verre' | 'Papeterie' | 'Autres' | 'Minéraux' | 'Produits d'hygiène et nettoyage' | 'Textile' | 'Bois' | 'Alimentaire'
      CreatedBy: string
      ModifiedBy: Nullable<string>
      CreatedAt: Date
      ModifiedAt: Nullable<Date>
      MatiereUsers: PartialEntities<Kapix.Entity.IMatiereUser>
    }
    declare interface IBatiment {
      Id: number
      consoElectrique: Nullable<number>
      classeEnergitique: Nullable<'A' | 'C' | 'D' | 'E' | 'G' | 'Je ne sais pas'>
      nbEntreprisesPartageLieu: Nullable<number>
      surfaceBatiment: Nullable<number>
      lieuBatiment: Nullable<'Bâtiment industriel' | 'Chez vous' | 'Atelier/Boutique'>
      CreatedBy: string
      ModifiedBy: Nullable<string>
      CreatedAt: Date
      ModifiedAt: Nullable<Date>
      Compte: PartialEntity<Kapix.Entity.ICompte>
    }
    declare interface IVente {
      Id: number
      accessibiliteBoutique: Nullable<'Près du bus/tram' | 'Parking voiture' | 'Parking vélo' | 'Près d'une gare'> | Nullable<Array<any>>
      raisonDeChangement: Nullable<string>
      choixEmplacement: 'Proximité gare' | 'Proximité autoroute  et grand axes routiers' | 'Proximité de mon domicile' | 'Proximité fournisseur' | 'Lieu de passage fréquent' | 'Proximité aéroport'
      emplacementBoutique: 'En centre ville' | 'Zone périurbaine' | 'Zone rurale'
      train: Nullable<number>
      aerien: Nullable<number>
      marketplaces: Nullable<number>
      maritime: Nullable<number>
      routier: Nullable<number>
      n20Km: Nullable<number>
      n10A20Km: Nullable<number>
      n10Km: Nullable<number>
      n1Km: Nullable<number>
      Touristes: Nullable<number>
      Locaux: Nullable<number>
      restaurerProduit: boolean
      recupProduit: boolean
      produitRecyclable: boolean
      garantieMois: number
      nombreVenteSemaine: number
      CreatedBy: string
      ModifiedBy: Nullable<string>
      CreatedAt: Date
      ModifiedAt: Nullable<Date>
      Compte: PartialEntity<Kapix.Entity.ICompte>
    }
    declare interface ITransport {
      Id: number
      transportPro: boolean
      deplacementPro: boolean
      calculMoyenne: boolean
      fonction: boolean
      covoiturage: boolean
      consoTransport: number
      nombreKm: number
      CreatedBy: string
      ModifiedBy: Nullable<string>
      CreatedAt: Date
      ModifiedAt: Nullable<Date>
      Salarie: PartialEntity<Kapix.Entity.ISalarie>
      MoyenTransports: PartialEntities<Kapix.Entity.IMoyenTransport>
      Compte: PartialEntity<Kapix.Entity.ICompte>
    }
    declare interface IDechetsQuestion {
      Id: number
      usagePoubelleOrganique: Nullable<'Usage professionnel' | 'Usage personnel' | 'Récupération par des services professionnel' | 'Don à une municipalité'>
      taillePoubelleOrganique: Nullable<number>
      allerRetourMois: Nullable<number>
      tailleRemorque: Nullable<'Bagagère de moins de 500L' | 'Bagagère de plus de 500L' | 'Professionnel entre 800L et 1000L' | 'Professionnel de plus de 1000L'>
      plierSiege: Nullable<boolean>
      decheterie: Nullable<boolean>
      CreatedBy: string
      ModifiedBy: Nullable<string>
      CreatedAt: Date
      ModifiedAt: Nullable<Date>
      Compte: PartialEntity<Kapix.Entity.ICompte>
    }
    declare interface IMoyenTransport {
      Id: number
      voiture: Nullable<boolean>
      consoTransport: number
      carburantTransport: 'Electrique' | 'Biocarburant' | 'GPL/GNL' | 'Essence' | 'Gazole' | 'Transport en commun'
      nomTransport: string
      CreatedBy: string
      ModifiedBy: Nullable<string>
      CreatedAt: Date
      ModifiedAt: Nullable<Date>
      Transports: PartialEntities<Kapix.Entity.ITransport>
      MatiereUsers: PartialEntities<Kapix.Entity.IMatiereUser>
      Concatenation12: Nullable<string>
    }
    declare interface IGenreDechetUser {
      Id: number
      valeurDechet: number
      CreatedBy: string
      ModifiedBy: Nullable<string>
      CreatedAt: Date
      ModifiedAt: Nullable<Date>
      GenreDechet: PartialEntity<Kapix.Entity.IGenreDechet>
      Compte: PartialEntity<Kapix.Entity.ICompte>
    }
    declare interface IPoubelleUser {
      Id: number
      CreatedBy: string
      ModifiedBy: Nullable<string>
      CreatedAt: Date
      ModifiedAt: Nullable<Date>
      Poubelle: PartialEntity<Kapix.Entity.IPoubelle>
      Compte: PartialEntity<Kapix.Entity.ICompte>
    }
    declare interface ICompte {
      Admin: boolean
      Nom: Nullable<string>
      Prenom: Nullable<string>
      idCompte: number
      EMail: Nullable<string>
      CreatedBy: string
      ModifiedBy: Nullable<string>
      CreatedAt: Date
      ModifiedAt: Nullable<Date>
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
      Couleur5: Nullable<string>
      Couleur4: Nullable<string>
      Couleur3: Nullable<string>
      Couleur2: Nullable<string>
      Couleur1: Nullable<string>
      Couleur: Nullable<string>
      FamilleDePolices: Nullable<string>
      Image: Nullable<string>
      CreatedBy: string
      ModifiedBy: Nullable<string>
      CreatedAt: Date
      ModifiedAt: Nullable<Date>
      Compte: PartialEntity<Kapix.Entity.ICompte>
    }
  }
}