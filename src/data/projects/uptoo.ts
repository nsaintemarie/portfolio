import { UptooContentType } from "@/types"

export const UptooContent: UptooContentType = {
  metadata: {
    title: "Uptoo | Refonte technique et intégration de l'IA pour une plateforme de recrutement performante",
    description: "En tant que Stack Owner – Lead Developer chez Uptoo, j'ai piloté la refonte technique d'une plateforme de recrutement utilisée par 200+ utilisateurs internes et clients. J'ai structuré une architecture scalable, orchestré la migration vers NestJS et Next.js, et intégré des solutions d'IA pour automatiser des process métiers, tout en accompagnant l'équipe dans cette transformation majeure.",
    keywords: ["recrutement", "refonte technique", "NestJS", "Next.js", "intégration IA", "lead developer"],
    image: "/projects/uptoo/listing.webp",
  },
  context: {
    picture1: "/projects/uptoo/picture-1.webp",
    picture2: "/projects/uptoo/picture-2.webp",
    picture3: "/projects/uptoo/picture-3.webp",
    date: "2022 - 2025",
    title: "La refonte d'une machine technique pour une machine de vente plus performante ",
    description: `Chez Uptoo, j'ai été Stack Owner – Lead Developer d'un écosystème multi-plateformes : ~200 utilisateurs internes, plus les clients, candidats et partenaires.
      Ma mission : faire d'une base technique de près de 10 ans un socle capable d'absorber de nouveaux enjeux métier — l'IA en tête — sans ralentir la croissance produit.
      Le vrai enjeu n'était pas de migrer une stack, mais de choisir une architecture qui tienne dans le temps, alignée avec la vision business et pensée pour que le prochain virage ne fasse pas tout casser.`,
    stack: ["TypeScript", "Node.js", "NestJs", "Next.Js", "MongoDB", "ElasticSearch", "Redis", "GCP"],
  },
  migrations: {
    title: "Anticiper la rupture",
    subtitle: "Sur un socle de 10 ans, le risque n'est pas qu'il soit vieux : c'est qu'il casse au prochain virage. Chaque choix d'architecture a anticipé une rupture précise.",
    descriptions: [
      {
        title: {
          from: "Monolithe Express",
          to: "NestJs Modulaire",
          subtitle: "Domain-Driven Design"
        },
        content: {
          problem: "Controllers interminables, logique métier noyée, process enchevêtrés. Régressions en série, chaque évolution plus coûteuse que la précédente.",
          solution: "DDD + NestJS pour des frontières idiomatiques. Turborepo pour les contrats partagés. Ports/adapters — pas d'événementiel — pour rendre les échanges explicites.",
          role: "Trier le pragmatique du dogmatique. Base posée, défendue auprès du CTO, validée sur un projet réel, puis transmise.",
          detail: "Découpage : controllers qui n'exposent que les routes, DTOs pour la validation, base et API isolées dans l'infra, use-cases pour le spécifique, services pour le générique. Arbitrage d'une logique ports/adapters pour l'inter-domaines plutôt que de l'événementiel : ancien repo saturé de middlewares qui créaient une opacité. Droits d'accès : fini les routes dupliquées par droit — une seule route, la logique portée par des guards.",
        }
      },
      {
        title: {
          from: "GKE (Kubernetes)",
          to: "Cloud Run + serverless",
          subtitle: "Functions, Tasks, Scheduler"
        },
        content: {
          problem: "Crashs par CPU insuffisant, 6 VMs partagées entre front et back pour les tests. Code infra maintenu en interne — hors cœur métier — qui s'accumule.",
          solution: "Cloud Run serverless : scaling automatique, déploiements par branche. Asynchrone et planifié délégués aux primitives managées GCP (Tasks, Scheduler).",
          role: "Co-piloter avec le CTO pour devenir un point d'appui autonome et embarquer l'équipe. Poser toute la logique asynchrone : quand queuer, idempotence, retries.",
          detail: "Cloud Run scale jusqu'à zéro et dimensionne CPU/mémoire par service, cold-starts assumés là où la latence n'est pas un problème, min-instances là où c'est nécessaire. Cloud Tasks pour les traitements longs queués (réponse immédiate, , exécution en arrière-plan avec retries). Cron déporté sur Scheduler. Refonte du pipeline de build (cache layers).",
        },
      },
      {
        title: {
          from: "Next 12 Pages Router",
          to: "Next 14 App Router",
          subtitle: "+ Design System shadcn / cva"
        },
        content: {
          problem: "Pas de logique d'architecture, UI et métier mélangés, UX incohérente d'une feature à l'autre. Friction design/dev permanente, coût en cohérence et en vélocité.",
          solution: "App Router + Design System modulaire (shadcn + cva). Architecture en entonnoir pour les composants métiers. Server-first, composants client réduits aux endroits qui en ont besoin.",
          role: "Poser l'architecture et les bases (auth, TanStack), encadrer l'intégrateur, coder les logiques des composants plus complexes, puis passer la main.",
          detail: "Pattern modulaire : composition à partir des primitives (`Dialog.Overlay`, `Dialog.Close`…) plutôt qu'un composant monolithique. Server-first via les RSC. Sortie du Redux résiduel au profit de TanStack Query (cache, dédoublonnage, refetch en arrière-plan) et de hooks dédiés."
        }
      },
    ]
  },
  ai: {
    title: "L'IA appliquée, sous contrôle",
    subtitle: "Les recruteurs passaient trop de temps à prendre des notes pendant les entretiens, et pas assez à mener l'entretien lui-même.",
    descriptions: [
      {
        title: "Questionner la structure",
        content: "La demande : une plateforme qui récupère le transcript de l'entretien, le CV et le contexte de l'offre, puis rédige le compte rendu destiné au client. J'aurais pu livrer ça comme une feature. J'ai livré autre chose : un bounded context IA complet, indépendant et rebranchable — des agents configurables, des « projets » où l'on choisit un agent et ses contextes (CV, offre…) pour lancer une génération. Le compte rendu n'était que la première brique ; n'importe quel autre domaine métier peut s'y brancher, sans tout reconstruire.",
      },
      {
        title: "L'arbitrage LLM",
        content: "Benchmarker les modèles pour trouver, par cas d'usage, le bon ratio entre réflexion nécessaire et coût. Côté code, une factory d'attribution des modèles : l'utilisateur peut changer de LLM depuis le front pour parer la panne d'un fournisseur, mais la tech garde le contrôle des coûts en assignant toujours le niveau de raisonnement adapté à l'usage — rédiger un e-mail ne demande pas le même modèle que rédiger un compte rendu.",
      },
      {
        title: "La fiabilité, comme discipline",
        content: "Trois leviers. Humain d'abord : une validation humaine systématique, parce que les équipes métier restent responsables de ce qui part chez le client — c'est autant de la pédagogie qu'une règle. Le prompt ensuite, optimisé dans la durée avec les ops pour réduire les hallucinations. Et pour les usages où l'IA produit de la donnée (extraire d'un compte rendu si une mise en situation a eu lieu, par exemple), une vraie démarche d'évaluation plutôt qu'une confiance aveugle.",
        detail: "Validation de l'extraction : vérification manuelle par les ops sur 3 mois, ajustements, nouveau run sur 3 mois, jusqu'à moins de 2 % d'erreur — concentrées sur les cas où l'info n'était pas assez claire dans le compte rendu. Pour tenir la consistance dans le temps : l'info affichée sur chaque fiche côté front, pour que les TA remontent les erreurs aux ops ; et un rapport automatique hebdomadaire qui rejoue les comptes rendus de moins de 7 jours et isole les écarts.",
      },
    ]
  },
  team: {
    title: "Faire gagner l'équipe en autonomie",
    subtitle: "Rendre lisible pour décider, transmettre pour maintenir : pour que toute l'équipe construise ensemble, sans cavalier solitaire.",
    descriptions: [
      {
        title: "Rendre lisible",
        subtitle: "pour décider, comprendre, prendre la relève",
        content: "Je ne garde pas le savoir technique dans ma tête. Je le rends lisible pour qui doit décider ou construire dessus — ce qui retire le lead dev du rôle de goulot et donne de l'autonomie à tous les membres de l'équipe.",
        cards: [
          { label: "Décider vite", content: "Tout choix qui demandait un arbitrage (CTO, produit) arrivait structuré : le +, le −, ma recommandation. On tranche en quelques minutes." },
          { label: "Rendre l'équipe produit autonome", content: "Contraintes et choix exposés/rédigés en langage accessible sur les sujets complexes (typiquement la gestion d'API partenaires sur mesure), pour que les PO raisonnent et décident seuls plutôt que de dépendre d'un dev à chaque question." },
          { label: "Que la connaissance survive", content: "Chaque grosse feature traitée comme un projet : une doc pensée comme un README, décrivant le besoin métier, les points de vigilance, les choix techniques — et pourquoi ceux-là. Vision d'ensemble garantie pour les nouveaux arrivants ou les itérations futures." },
        ]
      },
      {
        title: "Transmettre",
        subtitle: "pour s'approprier, construire et maintenir",
        content: `La transmission ne passe pas par une formation descendante : elle est ancrée dans les projets en cours. Le pair coding intervient dans les moments de blocage, ou pour trancher une décision technique à deux. Les reviews et les standards back/front sont des moments de transmission, pas des contrôles. La mise en place d'ateliers DDD, en plus d'une documentation conceptuelle, font que la nouvelle architecture a été adoptée — comprise et défendue par l'équipe — plutôt que subie.
        J'ai aussi tenu à lisser les pratiques : des conventions et des standards partagés, une manière de coder homogène d'un dev à l'autre. Le code devient lisible non seulement par sa documentation, mais parce qu'il se ressemble : l'équipe peut se relayer.`
      }
    ]
  },
  results: {
    title: "Une transformation devenue avantage compétitif",
    descriptions: [
      {
        title: "Efficacité et qualité",
        content: `Gain estimé de **40% en vélocité** sur les évolutions frontend, avec une qualité et une cohérence UI nettement améliorées qui ont contribuées à remporter de gros contrats clients.`
      },
      {
        title: "Scalabilité et réduction des frictions",
        content: `Fin des "projets marathon" de 3 mois. Livraisons incrémentales plus prévisibles, moins d'épuisement de l'équipe, meilleure maîtrise des dépendances entre plateformes. Capacité de livrer de **nouvelles briques IA en 2 à 4 semaines**, et réduction drastique des bugs et effets de bords.`
      },
      {
        title: "Adoption IA opérationnelle",
        content: `Nouvelle plateforme utilisée quotidiennement par ~50 recruteurs et ~100 commerciaux. **Envoi des comptes rendus d'entretien le jour même**, contre 5 jours en moyenne auparavant, avec témoignages d'une hausse de qualité par les clients.`
      },
      {
        title: "Montée en compétences",
        content: `Adoption d'une nouvelle architecture et d'une nouvelle stack pour l'équipe, capable d'itérer rapidement sur de nouvelles fonctionnalités tout en maintenant cohérence et qualité du code.`
      },
      {
        title: "Stack unifiée & maîtrisée",
        content: `Sortie d'un legacy historique pour une stack plus moderne, pensée pour évoluer sur le long terme et absorber de nouveaux enjeux métier.`
      }
    ],
    picture1: "/projects/uptoo/picture-4.webp",
    picture2: "/projects/uptoo/picture-5.webp",
  }
}
