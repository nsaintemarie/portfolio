import { ProjectContent } from "@/types"

export const projectsContents = {
    uptoo: {
        context: {
            picture1: "/projects/uptoo/picture-1.webp",
            picture2: "/projects/uptoo/picture-2.webp",
            picture3: "/projects/uptoo/picture-3.webp",
            title: "Uptoo",
            description1: "Uptoo est une plateforme de recrutement spécialisée dans les métiers commerciaux. En tant que développeur front-end, j'ai participé à la refonte complète de l'interface utilisateur, en utilisant React et Tailwind CSS pour créer une expérience utilisateur moderne et intuitive. J'ai également travaillé sur l'intégration de nouvelles fonctionnalités, telles que des tableaux de bord personnalisés et des outils d'analyse, pour aider les recruteurs à mieux gérer leurs processus de recrutement.",
            description2: "Uptoo est une plateforme de recrutement spécialisée dans les métiers commerciaux. En tant que développeur front-end, j'ai participé à la refonte complète de l'interface utilisateur, en utilisant React et Tailwind CSS pour créer une expérience utilisateur moderne et intuitive. J'ai également travaillé sur l'intégration de nouvelles fonctionnalités, telles que des tableaux de bord personnalisés et des outils d'analyse, pour aider les recruteurs à mieux gérer leurs processus de recrutement.",
            stack: ["React", "Tailwind CSS", "Node.js", "GraphQL"],
        },
        contribution: {
            title: "Kapture",
            descriptions: [{
                title: "Conception d'une architecture évolutive",
                content: ""
            }
            ]
        }
    },
    kapture: {
        context: {
            picture1: "/projects/kapture/picture-1.webp",
            picture2: "/projects/kapture/picture-2.webp",
            picture3: "/projects/kapture/picture-3.webp",
            title: "Kapture",
            description1: "Kapture est une application mobile de prise de notes et de gestion de tâches. En tant que développeur fullstack, j'ai contribué à la conception et au développement de l'application en utilisant Vue.js pour le front-end et Firebase pour le back-end. J'ai travaillé sur la mise en place d'une architecture évolutive, ainsi que sur l'implémentation de fonctionnalités clés telles que la synchronisation en temps réel, les notifications push et l'intégration avec des services tiers.",
            description2: "Kapture est une application mobile de prise de notes et de gestion de tâches. En tant que développeur fullstack, j'ai contribué à la conception et au développement de l'application en utilisant Vue.js pour le front-end et Firebase pour le back-end. J'ai travaillé sur la mise en place d'une architecture évolutive, ainsi que sur l'implémentation de fonctionnalités clés telles que la synchronisation en temps réel, les notifications push et l'intégration avec des services tiers.",
            stack: ["Next.JS", "Firebase", "Tailwind CSS"],
        },
        contribution: {
            title: "Kapture",
            descriptions: [{
                title: "Conception d'une architecture évolutive",
                content: ""
            }

            ]
        }
    },
    gfield: {
        context: {
            picture1: "/projects/gfield/picture-1.webp",
            picture2: "/projects/gfield/picture-2.webp",
            picture3: "/projects/gfield/picture-3.webp",
            title: "Du WordPress générique à un site qui parle: Redonner vie à l’univers de Gabriel Field.",
            description1: "Gabriel Field, musicien compositeur, souhaitait refondre un site WordPress trop générique et éloigné de son univers musical.\n La boutique de partitions, peu utilisée, ajoutait de la complexité inutile, tandis que la maintenance (plugins, mises à jour, coûts) transformait le site en contrainte plutôt qu’en outil de promotion.",
            description2: "Nous avons donc décidé de repartir de zéro : simplifier le contenu, supprimer la boutique inutile, et créer un site statique en Next.js, rapide, léger et fidèle à l’identité de Gabriel. L’objectif était de transformer le site en une véritable vitrine artistique, où sa musique et son univers visuel seraient au centre de l’expérience.",
            stack: ["Next.js", "TypeScript", "Tailwind CSS"],
        },
        contribution: {
            title: "Faire des choix techniques au service de la musique",
            descriptions: [{
                title: "Refonte technique :",
                content: "Migration vers un site statique en Next.js, hébergé de manière simple et fiable sur Vercel, pour garantir un chargement ultra-rapide, une excellente performance SEO et une maintenance quasi inexistante."
            },
            {
                title: "Design immersif :",
                content: "Conception d’un site responsive avec une interface épurée et des animations légères, afin de traduire visuellement l’univers musical de Gabriel dès les premières secondes."
            },
            {
                title: "Simplification stratégique :",
                content: "Suppression de la boutique de partitions et recentrage du site sur l’essentiel — la musique, les projets et l’identité artistique — pour offrir une expérience claire, fluide et élégante."
            },
            {
                title: "Accompagnement & conseil :",
                content: "Travail collaboratif sur le choix des contenus afin de maximiser l’impact artistique tout en conservant un parcours utilisateur simple et cohérent."
            }
            ]
        }
    },
    nearlist: {
        context: {
            picture1: "/projects/nearlist/picture-1.webp",
            picture2: "/projects/nearlist/picture-2.webp",
            picture3: "/projects/nearlist/picture-3.webp",
            title: "NearList",
            description1: "NearList est une application de découverte de lieux et d'événements locaux. En tant que développeur fullstack, j'ai contribué à la création de l'application en utilisant Angular pour le front-end et Node.js pour le back-end. J'ai travaillé sur la mise en place d'une architecture évolutive, ainsi que sur l'implémentation de fonctionnalités telles que la géolocalisation, les recommandations personnalisées et l'intégration avec des services de cartographie.",
            description2: "NearList est une application de découverte de lieux et d'événements locaux. En tant que développeur fullstack, j'ai contribué à la création de l'application en utilisant Angular pour le front-end et Node.js pour le back-end. J'ai travaillé sur la mise en place d'une architecture évolutive, ainsi que sur l'implémentation de fonctionnalités telles que la géolocalisation, les recommandations personnalisées et l'intégration avec des services de cartographie.",
            stack: ["Angular", "TypeScript", "RxJS"],
        },
        contribution: {
            title: "Kapture",
            descriptions: [{
                title: "Conception d'une architecture évolutive",
                content: ""
            }

            ]
        }
    },
} as {
    [key: string]: ProjectContent
}