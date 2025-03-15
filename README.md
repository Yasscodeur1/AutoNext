This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
# AutoNext




Page d'accueil :

En-tête avec un carrousel présentant 5 produits aléatoire.
Section mettant en avant des elements au choix.
Section présentant des produits à prix abordable / bien notés.
Lorsqu'on clique sur un produit, redirection vers sa page de détails.
  

Page d'inscription :
Page permettant aux utilisateurs de s'inscrire. (pas de vrai authentification)
 

Page produit :
Page produit avec tout les produits 
Filtres avancés : Soit avec une sidebar soit avec des selects/dropdown
 

Page produit détails :
Affichage des détails du produit avec des routes ID.
Pas de prix, mais possibilité d'ajouter au panier/favoris.
 

Fonctionnalités:
Panier/favoris pour chaque produit.
Création d'un bouton "Checkout/Delete Favoris" qui enlève tout du panier/supprime tout les éléments en favoris
Utilisation de l'API.
Logo de chargement pendant le chargement de l'API.
Animation lors du chargement des composants (loading, fading)(Bonus).
Système de panier/favoris avec ajout, suppression et modification (si y a un panier) des articles, avec la condition d'être connecté.

Filtres avancés : Améliorez les fonctionnalités de filtrage en ajoutant des options supplémentaires telles que la taille, la couleur, la marque, etc.
Recherche avancée : Offrez aux utilisateurs la possibilité de rechercher des livres par titre, auteur, genre, année de publication, etc. (Faire en sorte que quand on sélectionne un filtre et qu'on écrit quelque chose dans la barre de recherche, les deux soient bien mis à jour)
Le responsive du laptop L jusqu'au mobile L.