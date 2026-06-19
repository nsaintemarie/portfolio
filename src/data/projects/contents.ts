import { ProjectContent } from "@/types"

export const projectsContents: { [key: string]: ProjectContent } = {
  uptoo: {
    metadata: {
      title: "Uptoo | Refonte technique et intégration de l’IA pour une plateforme de recrutement performante",
      description: "En tant que Stack Owner – Lead Developer chez Uptoo, j’ai piloté la refonte technique d’une plateforme de recrutement utilisée par 200+ utilisateurs internes et clients. J’ai structuré une architecture scalable, orchestré la migration vers NestJS et Next.js, et intégré des solutions d’IA pour automatiser des process métiers, tout en accompagnant l’équipe dans cette transformation majeure.",
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
      stack: ["Node.js", "NestJs", "Next.Js", "Vue.js", "TypeScript", "MongoDB", "ElasticSearch", "Redis", "GCP"],
    },
    contributions: [{
      title: "Anticiper la rupture",
      subtitle: "Sur un socle de 10 ans, le risque n'est pas qu'il soit vieux : c'est qu'il casse au prochain virage. Chaque choix d'architecture a anticipé une rupture précise.",
      descriptions: [
        {
          title: "Monolithe Express -> NestJs en DDD",
          content: `
          <p><i>Le problème.</i> Un monolithe Express où la logique métier se noyait dans des controllers interminables. Le code ne laissait plus retracer les vrais besoins métier — régressions en série, et des process si enchevêtrés (créer une mission imposait un contrat, puis des factures…) qu'ils plombaient la productivité. La rupture était écrite : chaque évolution coûtait plus cher et cassait autre chose.</p>
          <p><i>Le choix.</i> Repenser le back en domaines, avec du DDD : segmenter, isoler, rendre le code lisible par le métier qu'il sert. NestJS et Turborepo ne sont pas des choix de mode — Nest rend ces frontières idiomatiques (modules, injection, guards), donc tenables par l'équipe ; le monorepo garde les contrats partagés sans éclater le code. Le tout typé en TypeScript, pour qu'on sache toujours ce qu'on manipule.</p>
          <p><i>Mon rôle.</i> Trier ce qui, du théorique, a vraiment du sens en interne et restera maintenable — pas appliquer le DDD par dogme. Exemple : entre domaines, j'ai choisi des ports/adapters plutôt que de l'événementiel, parce qu'on sortait d'un repo saturé de middlewares où plus personne ne suivait quelle action déclenchait quoi. L'événementiel aurait rejoué cette opacité ; les ports/adapters rendent les échanges explicites. J'ai posé la base technique du repo, défendue auprès du CTO, validée sur un projet réel, puis transmis à l'équipe.</p>`
        },
        {
          title: "GKE (Kubernetes) → Cloud Run + serverless (Functions, Tasks, Scheduler)",
          content: `
          <p><i>Le problème.</i> Le cluster ne suivait plus : crashs par CPU insuffisant, et un parc de 6 VMs à se partager pour les environnements de test, à répartir entre front et back — un goulot dès qu'on menait plusieurs projets en parallèle. À côté, du code « infra » (jobs asynchrones, tâches planifiées) maintenu en interne, alors que ce n'est pas du cœur métier.</p>
          <p><i>Le choix.</i> Cloud Run, serverless : chaque service se dimensionne et scale seul, et on déploie autant d'environnements par branche que nécessaire — les PO testent chaque feature en isolation, en parallèle. Et sortir le non-core du code : l'asynchrone et le planifié partent dans les primitives managées de GCP (Tasks, Functions, Scheduler), avec leurs retries et leurs logs, plutôt que reconstruits et entretenus maison.</p>
          <p><i>Mon rôle.</i> Co-piloter la migration avec le CTO, l'embarquer dans l'équipe et en devenir un point d'appui autonome — capable de faire avancer et de débugger même en son absence. Et surtout, poser toute la logique asynchrone : décider quand un traitement bascule en job queué — pas seulement l'envoi d'e-mails (quasi le seul cas avant), mais tout process long sans réponse immédiate attendue — puis l'architecture côté repo et les bonnes pratiques d'écriture des functions (idempotence, retries).</p>`
        },
        {
          title: "Next 12 Pages Router → Next 14 App Router + Design System",
          content: `
          <p><i>Le problème.</i> Un frontend en Next 12, sans logique d'architecture : composants mêlant UI et métier, fichiers à rallonge, chacun codant à sa main. Résultat, une UX qui variait d'une feature et d'une plateforme à l'autre — et, avec une équipe fullstack pour un seul intégrateur, des maquettes mal suivies et une friction design/dev permanente. La rupture : à ce rythme, chaque feature coûtait en cohérence et en vélocité.</p>
          <p><i>Le choix.</i>Migration en App Router, et surtout un Design System (shadcn + variants en cva) pensé modulaire — on compose à partir des primitives nécessaires plutôt que d'importer des composants monolithiques. Côté architecture, un modèle « en entonnoir » : les composants métier au plus près des pages qui les utilisent, des pages server par défaut, du client réduit aux endroits qui en ont vraiment besoin. La logique native de l'App Router, mise au service de la perf et de la lisibilité.</p>
          <p><i>Mon rôle. Poser cette architecture et les bases techniques (auth, droits d'accès, fetch, cache de données via TanStack pour l'UX), encadrer l'intégrateur sur les composants d'UI, et prendre en charge moi-même les pièces les plus délicates — tables paginées, formulaires, éditeur — avant de passer la main à l'équipe. Le Design System a réglé la friction design/dev en donnant un langage commun : fini les maquettes réinterprétées à chaque feature.</p>`
        },
      ]

    }, {
      title: "Intégrer l'IA dans le produit, sous contrôle",
      descriptions: [{
        content: `
        <p>Le problème. Les recruteurs passaient trop de temps à prendre des notes pendant les entretiens, et pas assez à mener l'entretien lui-même.
        Questionner la structure. La demande : une plateforme qui récupère le transcript de l'entretien, le CV et le contexte de l'offre, puis rédige le compte rendu destiné au client. J'aurais pu livrer ça comme une feature. J'ai livré autre chose : un bounded context IA complet, indépendant et rebranchable — des agents configurables, des « projets » où l'on choisit un agent et ses contextes (CV, offre…) pour lancer une génération. Le compte rendu n'était que la première brique ; n'importe quel autre domaine métier peut s'y brancher, sans tout reconstruire.
        L'arbitrage LLM. J'ai benchmarké les modèles pour trouver, par cas d'usage, le bon ratio entre réflexion nécessaire et coût. Côté code, une factory d'attribution des modèles : l'utilisateur peut changer de LLM depuis le front pour parer la panne d'un fournisseur, mais la tech garde le contrôle des coûts en assignant toujours le niveau de raisonnement adapté à l'usage — rédiger un e-mail ne demande pas le même modèle que rédiger un compte rendu.
        La fiabilité, comme discipline. Trois leviers. Humain d'abord : une validation humaine systématique, parce que les équipes métier restent responsables de ce qui part chez le client — c'est autant de la pédagogie qu'une règle. Le prompt ensuite, optimisé dans la durée avec les ops pour réduire les hallucinations. Et pour les usages où l'IA produit de la donnée (extraire d'un compte rendu si une mise en situation a eu lieu, par exemple), une vraie démarche d'évaluation plutôt qu'une confiance aveugle.
        Validation de l'extraction : vérification manuelle par les ops sur 3 mois, ajustements, nouveau run sur 3 mois, jusqu'à moins de 2 % d'erreur — concentrées sur les cas où l'info n'était pas assez claire dans le compte rendu. Pour tenir la consistance dans le temps : l'info affichée sur chaque fiche côté front, pour que les TA remontent les erreurs aux ops ; et un rapport automatique hebdomadaire qui rejoue les comptes rendus de moins de 7 jours et isole les écarts.</p>`
      },]
    }, {
      title: "Faire monter l'équipe en autonomie",
      subtitle: "Rendre lisible pour décider, transmettre pour maintenir : pour que toute l'équipe construise ensemble, sans cavalier solitaire.",
      descriptions: [{
        title: "Rendre lisible, pour décider, comprendre, prendre la relève",
        content: `
        <p><i>Le principe.</i> Je ne garde pas le savoir technique dans ma tête. Je le rends lisible pour qui doit décider ou construire dessus — ce qui retire le lead dev du rôle de goulot et donne de l'autonomie à tous les membres de l'équipe.</p>
        <p><i>Décider vite.</i> Tout choix qui demandait un arbitrage (CTO, produit) arrivait structuré : le +, le −, ma recommandation. On tranche en quelques minutes.</p>
        <p><i>Rendre l'équipe produit autonome.</i> Sur les sujets complexes — typiquement la gestion d'API partenaires sur mesure — j'ai pris l'habitude de rédiger la liste des contraintes et des choix, en langage accessible, pour que les PO raisonnent et décident seuls plutôt que de dépendre d'un dev à chaque question.</p>
        <p><i>Que la connaissance survive.</i> Chaque grosse feature traitée comme un projet : un README, une doc qui explique ce que ça fait, comment ça marche globalement, les points de vigilance, et les choix techniques — et pourquoi ceux-là. N'importe qui qui embarque sur le projet a la vision d'ensemble ; et quand on y revient six mois plus tard, on répond sans replonger des heures dans le code.</p>`
      }, {
        title: "Transmettre, pour s'approprier, construire et maintenir",
        content: `<p>La transmission ne passe pas par une formation descendante : elle est ancrée dans les projets en cours. Le pair coding intervient dans les moments de blocage, ou pour trancher une décision technique à deux. Les reviews et les standards back/front sont des moments de transmission, pas des contrôles. Et les ateliers DDD, avec la documentation conceptuelle, font que la nouvelle architecture est adoptée — comprise et défendue par l'équipe — plutôt que subie.
        J'ai aussi tenu à lisser les pratiques : des conventions et des standards partagés, une manière de coder homogène d'un dev à l'autre. Le code devient lisible non seulement par sa documentation, mais parce qu'il se ressemble — n'importe qui peut reprendre celui d'un autre.</p>`
      }]
    }],
    results: {
      title: "Une transformation devenue avantage compétitif",
      descriptions: [
        {
          title: "Efficacité et qualité",
          content: `Gain estimé de **40% en vélocité** sur les évolutions frontend, avec une qualité et une cohérence UI nettement améliorées qui ont contribuées à remporter de gros contrats clients.`
        },
        {
          title: "Scalabilité et réduction des frictions",
          content: `Fin des “projets marathon” de 3 mois. Livraisons incrémentales plus prévisibles, moins d’épuisement de l’équipe, meilleure maîtrise des dépendances entre plateformes. Capacité de livrer de **nouvelles briques IA en 2 à 4 semaines**, et réduction drastique des bugs et effets de bords.`
        },
        {
          title: "Adoption IA opérationnelle",
          content: `Nouvelle plateforme utilisée quotidiennement par ~50 recruteurs et ~100 commerciaux. **Envoi des comptes rendus d’entretien le jour même**, contre 5 jours en moyenne auparavant, avec témoignages d’une hausse de qualité par les clients.`
        },
        {
          title: "Montée en compétences",
          content: `Adoption d’une nouvelle architecture et d'une nouvelle stack pour l’équipe, capable d’itérer rapidement sur de nouvelles fonctionnalités tout en maintenant cohérence et qualité du code.`
        },
        {
          title: "Stack unifiée & maîtrisée",
          content: `Sortie d’un legacy historique pour une stack plus moderne, pensée pour évoluer sur le long terme et absorber de nouveaux enjeux métier.`
        }
      ]
      ,
      picture1: "/projects/uptoo/picture-4.webp",
      picture2: "/projects/uptoo/picture-5.webp",
    }
  },
}