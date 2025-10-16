export type Service = {
  slug: string;
  title: string;
  description: string;
  icon: string; // react-icons name or custom mapping
  image: string; // public path
  operations: string[];
  brands: string[];
};

export const services: Service[] = [
  {
    slug: "diagnostic-electronique",
    title: "Diagnostic électronique",
    description:
      "Analyse complète des systèmes électroniques embarqués pour identifier rapidement les pannes.",
    icon: "MdElectricalServices",
    image: "/services/diagnostic.jpg",
    operations: [
      "Lecture/effacement des codes défauts",
      "Tests actionneurs",
      "Paramétrage calculateurs",
      "Mise à jour logiciels"
    ],
    brands: ["Volvo", "MAN", "Scania", "Renault Trucks"],
  },
  {
    slug: "entretien-moteur-transmission",
    title: "Entretien moteur / transmission",
    description:
      "Maintenance complète des groupes motopropulseurs pour performance et longévité.",
    icon: "PiEngine",
    image: "/services/engine.jpg",
    operations: [
      "Vidange et filtres",
      "Courroies et chaînes",
      "Boîtes de vitesses",
      "Embrayage"
    ],
    brands: ["DAF", "Iveco", "Mercedes-Benz Trucks"],
  },
  {
    slug: "maintenance-preventive",
    title: "Maintenance préventive",
    description:
      "Plans d’entretien adaptés pour éviter les immobilisations et optimiser les coûts.",
    icon: "MdBuild",
    image: "/services/maintenance.jpg",
    operations: ["Contrôles périodiques", "Graissage", "Réglages", "Remplacements programmés"],
    brands: ["Toutes marques"],
  },
  {
    slug: "assistance-routiere",
    title: "Assistance routière",
    description:
      "Interventions rapides sur site ou sur route pour limiter l’arrêt d’activité.",
    icon: "RiRoadsterLine",
    image: "/services/assistance.jpg",
    operations: ["Dépannage sur place", "Remorquage", "Diagnostic mobile"],
    brands: ["Toutes marques"],
  },
  {
    slug: "pieces-de-rechange",
    title: "Pièces de rechange",
    description:
      "Fourniture et montage de pièces d’origine ou équivalentes certifiées.",
    icon: "MdBuildCircle",
    image: "/services/parts.jpg",
    operations: ["Freinage", "Suspension", "Électricité", "Carrosserie"],
    brands: ["Toutes marques"],
  },
];


