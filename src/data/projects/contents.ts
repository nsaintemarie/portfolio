import { ProjectContent } from "@/types"

export const projectsContents = {
  uptoo: {
    context: {
      picture1: "/projects/uptoo/picture-1.webp",
      picture2: "/projects/uptoo/picture-2.webp",
      picture3: "/projects/uptoo/picture-3.webp",
      title: "La refonte d'une machine technique pour une machine de vente plus performante ",
      description: `Pendant 3 ans et demi chez Uptoo, j’ai piloté l’évolution de la stack en tant que Stack Owner – Lead Developer, au cœur d’un écosystème multi-plateformes (interne ~200 utilisateurs, clients, partenaires, stagiaires). 
      Ma mission : structurer et moderniser une base technique de près de 10 ans pour en faire un socle scalable, capable d'absorber de nouveaux enjeux métiers — notamment l’intégration de l’IA — sans ralentir la croissance produit. 
      L’objectif n’était pas seulement de migrer une stack, mais de poser une architecture durable, alignée avec la vision business et les process métiers, tout en accompagnant l’équipe dans cette transformation.`,
      stack: ["React", "Tailwind CSS", "Node.js", "GraphQL"],
    },
    contribution: {
      title: "Transformer un mastodonte technique en levier d’innovation",
      descriptions: [
        {
          title: "Migration frontend — Next.js App Router & Design System",
          content: `Migration du Pages Router vers l’App Router, avec refactor progressif de l’architecture frontend et intégration d’un Design System
          Mise en place de bonnes pratiques (architecture, conventions, performance)`
        },
        {
          title: "Migration backend — NestJS en DDD",
          content: `Découpage d’un monolithe Express vers un Turborepo en NestJS (TS) avec une architecture Domain-Driven Design: Structuration des couches et mise en place des bases de code et des standards techniques
          Passage de Kubernetes (GKE) vers GCP Cloud Run avec approche serverless (Cloud Functions, Cloud Tasks, Cloud Scheduler)
          Décision stratégique de ne plus tout développer en interne : recentrage sur les domaines métier critiques, intégration de plateformes externes pour les besoins non-core`
        },
        {
          title: "Leadership & organisation",
          content: `Participation active aux sprint plannings, structuration des process agiles
          Encadrement technique sur les projets majeurs, code reviews régulières et mise en place des PR`
        },
        {
          title: "Intégration de l’IA dans les process métiers",
          content: `Conception d’une nouvelle plateforme interne pour des process intégrant des modèles d’IA, avec une première brique d’automatisation de la rédaction de comptes rendus d’entretiens. Réflexion sur les prompts, la fiabilité et l’intégration métier`
        },
        {
          title: "Transmission & formation",
          content: `Mise en place de documentations sur les bonnes pratiques et les bases conceptuelles et techniques du DDD
          Animation d’ateliers internes pour faciliter l’adoption et permettre à l’équipe d’itérer rapidement et simplement`
        }
      ]

    },
    results: {
      title: "Une transformation devenue avantage compétitif",
      descriptions: [
        {
          title: "Efficacité et qualité",
          content: `Gain estimé de 40% en vélocité sur les évolutions frontend, avec une qualité et une cohérence UI nettement améliorées qui ont contribuées à remporter de gros contrats clients.`
        },
        {
          title: "Scalabilité et réduction des frictions",
          content: `Fin des “projets marathon” de 3 mois. Livraisons incrémentales plus prévisibles, moins d’épuisement de l’équipe, meilleure maîtrise des dépendances entre plateformes. Capacité de livrer de nouvelles briques IA en 2 à 4 semaines, et réduction drastique des bugs et effets de bords.`
        },
        {
          title: "Adoption IA opérationnelle",
          content: `Nouvelle plateforme utilisée quotidiennement par ~50 recruteurs et ~100 commerciaux. Envoi des comptes rendus d’entretien le jour même, contre 5 jours en moyenne auparavant, avec témoignages d’une hausse de qualité par les clients.`
        },
        {
          title: "Montée en compétences",
          content: `Adoption d’une nouvelle stack pour l’équipe, capable d’itérer rapidement sur de nouvelles fonctionnalités tout en maintenant cohérence et qualité du code.`
        },
        {
          title: "Stack unifiée & maîtrisée",
          content: `Sortie d’un legacy historique pour une stack moderne, pensée pour évoluer sur le long terme et absorber de nouveaux enjeux métier.`
        }
      ]
      ,
      picture1: "/projects/uptoo/picture-4.webp",
      picture2: "/projects/uptoo/picture-5.webp",
    }
  },
  kapture: {
    context: {
      picture1: "/projects/kapture/picture-1.webp",
      picture2: "/projects/kapture/picture-2.webp",
      picture3: "/projects/kapture/picture-3.webp",
      title: "Explorer le motion design au service de l’image",
      description: `Projet personnel conçu comme laboratoire technique autour de l’expérience visuelle et du motion design. L’objectif : créer un portfolio photo immersif permettant d’explorer les possibilités offertes par SvelteKit et GSAP en matière de performance et d'animations. Ce projet m’a permis de sortir d’un contexte produit business pour me concentrer sur l’expérience utilisateur, la fluidité et la narration visuelle.`,
      stack: ["Next.JS", "Firebase", "Tailwind CSS"],
    },
    contribution: {
      title: "Construire une expérience immersive, de la performance à l’animation",
      descriptions: [
        {
          title: "Architecture statique avec SvelteKit",
          content: `Mise en place d’un site entièrement statique généré avec SvelteKit, garantissant une rapidité de chargement optimale. Déploiement sur Cloudflare pour une distribution performante et mondiale.`
        },
        {
          title: "Animations immersives avec GSAP",
          content: `Orchestration de transitions fluides entre les pages, effets au scroll et micro-interactions afin de donner une dimension cinématographique à la navigation.`
        },
        {
          title: "Optimisation avancée des images",
          content: `Création d’un script de conversion automatique des images en WebP afin de réduire drastiquement le poids des assets tout en conservant une qualité visuelle élevée. Génération d’une version full résolution et d’une version miniature (thumbnails) pour optimiser les performances.`
        },
        {
          title: "Interface minimaliste orientée image",
          content: `Design volontairement épuré pour laisser toute la place à la photographie, avec une attention particulière portée au rythme des transitions et à l’expérience immersive.`
        }
      ]
    },
    results: {
      title: "Une vitrine technique de précision et de fluidité",
      descriptions: [
        {
          title: "Chargement ultra-rapide",
          content: `Site statique optimisé, images compressées en WebP et distribution via CDN Cloudflare : navigation fluide et temps de chargement quasi instantané.`
        },
        {
          title: "Expérience immersive maîtrisée",
          content: `Transitions animées cohérentes et fluides, renforçant la perception premium du portfolio.`
        },
        {
          title: "Démonstration de polyvalence frontend",
          content: `Projet illustrant une capacité à travailler hors contexte produit business : motion design, optimisation d’assets, déploiement edge et architecture moderne.`
        },
        {
          title: "Approfondissement technique ciblé",
          content: `Montée en expertise sur SvelteKit, gestion d’assets statiques et intégration d’animations avancées avec GSAP.`
        }
      ],
      picture1: "/projects/kapture/picture-4.webp",
      picture2: "/projects/kapture/picture-5.webp",
    }
  },
  gfield: {
    context: {
      picture1: "/projects/gfield/picture-1.webp",
      picture2: "/projects/gfield/picture-2.webp",
      picture3: "/projects/gfield/picture-3.webp",
      title: "Du WordPress générique à un site qui parle: Redonner vie à l’univers de Gabriel Field.",
      description: `Gabriel Field, musicien compositeur, disposait d’un site qui ne traduisait ni son univers musical ni sa sensibilité artistique
      La boutique de partitions, rarement utilisée, alourdissait l’expérience et détournait le site de son objectif principal : mettre la musique en avant.\n
      À cela s’ajoutaient des contraintes de maintenance qui faisaient du site une charge plutôt qu’un outil de communication. 
      Nous avons donc décidé de repartir de zéro pour transformer le site en une véritable vitrine artistique, où sa musique et son univers visuel seraient au centre de l’expérience.`,
      stack: ["Next.js", "TypeScript", "Tailwind CSS"],
    },
    contribution: {
      title: "Faire des choix techniques au service de la musique",
      descriptions: [{
        title: "Refonte technique",
        content: "Migration vers un site statique en Next.js, hébergé sur Vercel, afin d’obtenir des performances élevées, un excellent SEO et une maintenance minimale."
      },
      {
        title: "Design immersif",
        content: "Conception d’une interface responsive, épurée et ponctuée d’animations légères, pensée pour faire ressentir l’univers musical dès la première visite."
      },
      {
        title: "Simplification stratégique",
        content: `Suppression de la boutique et recentrage du site sur l’essentiel : la musique, les projets et l’identité artistique. 
        Mise en place d’une version anglaise du site, afin de rendre le travail de Gabriel accessible à un public international, et d’un formulaire de contact permettant aux professionnels et auditeurs de contacter facilement l’artiste.`
      },
      {
        title: "Accompagnement & conseil",
        content: "Travail collaboratif sur la structuration des contenus et leur mise en valeur, pour garantir un parcours clair et cohérent."
      }]
    },
    results: {
      title: "Un site léger, rapide et fidèle à l’artiste",
      descriptions: [{
        title: "Performance optimisée",
        content: "Passage d’un site WordPress à un site statique Next.js : chargement < 1s sur la majorité des pages."
      },
      {
        title: "Maintenance simplifiée",
        content: "Coûts de maintenance divisés par 4, suppression totale de la dette liée aux plugins WordPress."
      },
      {
        title: "Visibilité accrue",
        content: "Amélioration du référencement naturel grâce à une structure optimisée et des performances élevées."
      },
      {
        title: "Satisfaction client",
        content: "Site autonome, élégant et évolutif, prêt à accompagner la carrière artistique de Gabriel."
      }],
      picture1: "/projects/gfield/picture-4.webp",
      picture2: "/projects/gfield/picture-5.webp",
    }
  },
  nearlist: {
    context: {
      picture1: "/projects/nearlist/picture-1.webp",
      picture2: "/projects/nearlist/picture-2.webp",
      picture3: "/projects/nearlist/picture-3.webp",
      title: "Connecter les plateformes musicales autour d’une expérience sociale unifiée",
      description: `Nearlist est une application mobile pensée comme une surcouche sociale aux plateformes de streaming musical (Spotify, Deezer).
      L’ambition : permettre aux utilisateurs de créer des playlists collaboratives inter-plateformes, enrichies d’interactions sociales — commentaires, 
      
      échanges en temps réel et découverte des playlists de ses amis — sans quitter leur écosystème musical existant. Le défi était double : proposer une expérience simple et naturelle côté utilisateur, tout en orchestrant une synchronisation complexe avec des APIs tierces.`,
      stack: ["Angular", "TypeScript", "RxJS"],
    },
    contribution: {
      title: "Concevoir une expérience collaborative fluide au-dessus de systèmes tiers",
      descriptions: [
        {
          title: "Penser “usage” avant intégration",
          content: `Plutôt que de reproduire un player musical, Nearlist a été conçu comme un espace d’interaction. La valeur réside dans la collaboration, les échanges et la découverte.`
        },
        {
          title: "Rendre l’interopérabilité invisible",
          content: `Connexion des comptes Spotify ou Deezer via OAuth, puis manipulation des playlists comme si elles étaient natives. Toute la complexité de synchronisation est masquée derrière une expérience simple.`
        },
        {
          title: "Créer une dynamique sociale autour de la musique",
          content: `Ajout de commentaires par morceau, playlists collaboratives et chat en temps réel pour transformer l’écoute en expérience partagée.`
        },
        {
          title: "Favoriser la découverte communautaire via l'humain",
          content: `Mise en place d’un espace Discover permettant d’explorer les playlists publiques de ses amis et de naviguer dans leurs univers musicaux.`
        },
        {
          title: "Structurer une base extensible",
          content: `Architecture pensée pour accueillir de nouveaux fournisseurs musicaux sans modifier l’expérience utilisateur.`
        }
      ]

    },
    results: {
      title: "Une architecture sociale extensible et cohérente",
      descriptions: [
        {
          title: "Expérience musicale réellement unifiée",
          content: `Les utilisateurs interagissent avec une seule interface sociale tout en conservant leurs plateformes musicales natives.`
        },
        {
          title: "Robustesse face aux contraintes externes",
          content: `Gestion fiable des flux OAuth, des refresh tokens et des limites d’API assurant une synchronisation stable.`
        },
        {
          title: "Base prête à évoluer",
          content: `L’abstraction multi-fournisseurs permettrait d’intégrer de nouvelles plateformes de streaming sans refonte majeure.`
        },
        {
          title: "Démonstration produit & technique complète",
          content: `Nearlist illustre la capacité à concevoir un produit mobile cohérent, à forte dimension sociale, tout en maîtrisant les intégrations tierces et le temps réel.`
        }
      ],
      picture1: "/projects/nearlist/picture-4.webp",
      picture2: "/projects/nearlist/picture-5.webp",
    }
  },
} as {
  [key: string]: ProjectContent
}