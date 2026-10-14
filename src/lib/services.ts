import { images, type SiteImage } from './images'

export type Service = {
  slug: string
  title: string
  short: string
  metaTitle: string
  metaDescription: string
  intro: string
  image: SiteImage
  includes: string[]
  forWhom: string
  faq: { q: string; a: string }[]
}

export const services: Service[] = [
  {
    slug: 'comptabilite',
    title: 'Comptabilité et bouclement',
    short: 'Tenue de vos comptes toute l’année, décomptes TVA et bouclement annuel.',
    metaTitle: 'Comptabilité et bouclement à Tolochenaz | Performance Transmission',
    metaDescription:
      'Tenue comptable, décomptes TVA et bouclement annuel pour indépendants, Sàrl et SA dans le canton de Vaud. Premier entretien sans engagement.',
    intro:
      'Vous nous transmettez vos pièces, nous tenons votre comptabilité à jour. Vous savez où en est votre entreprise chaque mois, pas seulement à la fin de l’année.',
    image: images.comptabilite,
    includes: [
      'Saisie des écritures et rapprochements bancaires',
      'Suivi des débiteurs et des créanciers',
      'Décomptes TVA (méthode effective ou TDFN) et respect des délais AFC',
      'Bouclement annuel : bilan, compte de résultat et annexe',
      'Préparation des documents pour l’assemblée générale',
    ],
    forWhom:
      'Indépendants qui veulent se décharger de l’administratif, Sàrl et SA qui ont besoin d’une comptabilité fiable pour piloter leur activité.',
    faq: [
      {
        q: 'À partir de quel chiffre d’affaires faut-il s’assujettir à la TVA ?',
        a: 'L’assujettissement devient obligatoire dès 100’000 CHF de chiffre d’affaires annuel provenant de prestations imposables. En dessous, un assujettissement volontaire est possible et peut être intéressant selon votre activité.',
      },
      {
        q: 'Méthode effective ou taux de la dette fiscale nette (TDFN) ?',
        a: 'La méthode effective permet de récupérer l’impôt préalable sur vos achats, avec un décompte trimestriel. Le TDFN simplifie les décomptes (semestriels) mais ne convient pas à toutes les activités. Nous comparons les deux sur vos chiffres réels.',
      },
      {
        q: 'Comment vous transmettre mes pièces comptables ?',
        a: 'Par voie électronique de préférence (scan ou photo, export bancaire). Nous nous adaptons aussi si vous préférez nous remettre un classeur papier.',
      },
    ],
  },
  {
    slug: 'salaires',
    title: 'Salaires et charges sociales',
    short: 'Fiches de salaire, assurances sociales et certificats de salaire.',
    metaTitle: 'Gestion des salaires et charges sociales | Performance Transmission',
    metaDescription:
      'Fiches de salaire, déclarations AVS, LPP, LAA, IJM et certificats de salaire pour PME vaudoises. Gestion complète des charges sociales.',
    intro:
      'Chaque mois, vos collaborateurs reçoivent une fiche de salaire juste. En fin d’année, les déclarations aux caisses et les certificats de salaire partent dans les délais.',
    image: images.salaires,
    includes: [
      'Calcul et établissement des fiches de salaire mensuelles',
      'Décomptes AVS/AI/APG, AC et allocations familiales',
      'Déclarations LPP, LAA, LAAC et IJM',
      'Certificats de salaire annuels',
      'Affiliation aux caisses lors d’une première embauche',
    ],
    forWhom:
      'Entreprises de 1 à 50 collaborateurs, et indépendants qui engagent pour la première fois.',
    faq: [
      {
        q: 'J’engage mon premier employé, que dois-je faire ?',
        a: 'Il faut notamment s’affilier à une caisse de compensation AVS, conclure une assurance accidents (LAA) et, selon le salaire, une prévoyance professionnelle (LPP). Nous nous occupons des démarches.',
      },
      {
        q: 'Quand faut-il remettre les certificats de salaire ?',
        a: 'Les certificats de salaire sont établis après la fin de l’année civile, à temps pour que vos collaborateurs remplissent leur déclaration d’impôts.',
      },
      {
        q: 'Gérez-vous aussi les salaires des dirigeants de Sàrl ou SA ?',
        a: 'Oui. Le choix entre salaire et dividende a un impact fiscal et social important : nous vous aidons à trouver le bon équilibre.',
      },
    ],
  },
  {
    slug: 'fiscalite',
    title: 'Fiscalité et conseil',
    short: 'Déclarations d’impôts de la société et du dirigeant, optimisation fiscale.',
    metaTitle: 'Déclarations fiscales et conseil fiscal Vaud | Performance Transmission',
    metaDescription:
      'Déclarations d’impôts des sociétés et des indépendants, planification et optimisation fiscale dans le canton de Vaud. Conseil personnalisé.',
    intro:
      'Nous préparons vos déclarations d’impôts et cherchons ce qui peut être optimisé légalement, avant que l’année ne soit bouclée.',
    image: images.fiscalite,
    includes: [
      'Déclaration d’impôts de la société (bénéfice et capital)',
      'Déclaration d’impôts de l’indépendant ou du dirigeant',
      'Planification fiscale : salaire ou dividende, rachats LPP, 3e pilier',
      'Contrôle des taxations et réclamations',
      'Réponses aux demandes de l’administration fiscale',
    ],
    forWhom:
      'Dirigeants de Sàrl et SA, indépendants et particuliers dont la situation demande un regard professionnel.',
    faq: [
      {
        q: 'Pouvez-vous remplir aussi ma déclaration personnelle ?',
        a: 'Oui. Traiter la société et le dirigeant ensemble permet de voir l’ensemble et d’éviter les décisions qui optimisent l’un au détriment de l’autre.',
      },
      {
        q: 'Que faire si je ne suis pas d’accord avec ma taxation ?',
        a: 'Une réclamation peut être déposée dans un délai de 30 jours dès la notification de la décision. Nous analysons la taxation et rédigeons la réclamation si elle est fondée.',
      },
      {
        q: 'Quand faut-il penser à l’optimisation fiscale ?',
        a: 'Avant la fin de l’année : rachats LPP, versements au 3e pilier ou choix de rémunération se décident pendant l’exercice, pas après.',
      },
    ],
  },
  {
    slug: 'creation-entreprise',
    title: 'Création et transformation de société',
    short: 'Créer votre Sàrl ou SA, ou transformer votre raison individuelle.',
    metaTitle: 'Créer une Sàrl ou une SA dans le canton de Vaud | Performance Transmission',
    metaDescription:
      'Création de Sàrl, SA ou raison individuelle, transformation et restructuration. Inscription au registre du commerce et mise en place de la comptabilité.',
    intro:
      'Raison individuelle, Sàrl ou SA : nous vous aidons à choisir la bonne forme, puis nous nous occupons des démarches jusqu’à l’inscription au registre du commerce.',
    image: images.creation,
    includes: [
      'Choix de la forme juridique selon votre situation',
      'Statuts, capital et inscription au registre du commerce',
      'Affiliations (AVS, TVA si nécessaire) et mise en place de la comptabilité',
      'Transformation d’une raison individuelle en Sàrl ou SA',
      'Accompagnement lors de fusions, scissions et changements de structure',
    ],
    forWhom:
      'Entrepreneurs qui se lancent, indépendants dont l’activité grandit, sociétés qui changent de structure.',
    faq: [
      {
        q: 'Quel capital faut-il pour créer une Sàrl ou une SA ?',
        a: 'Une Sàrl demande un capital minimum de 20’000 CHF. Une SA demande 100’000 CHF, dont au moins 50’000 CHF libérés à la fondation.',
      },
      {
        q: 'Raison individuelle ou Sàrl ?',
        a: 'La raison individuelle est simple et peu coûteuse, mais vous êtes responsable sur vos biens personnels. La Sàrl limite la responsabilité et peut devenir fiscalement plus intéressante quand le bénéfice augmente.',
      },
      {
        q: 'Dois-je inscrire ma raison individuelle au registre du commerce ?',
        a: 'L’inscription devient obligatoire dès 100’000 CHF de chiffre d’affaires annuel. En dessous, elle reste possible et facultative.',
      },
    ],
  },
]

export const getService = (slug: string) => services.find((s) => s.slug === slug)
