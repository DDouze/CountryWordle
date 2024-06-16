# SG8 - Développement d'applications Web : COUNTRY WORDLE

## Description

Ce projet est un jeu inspiré du célèbre jeu Wordle, adapté pour l'électif SG8 - Développement d'applications Web. Le jeu utilise l'API externe [Rest Countries](https://restcountries.com/v3.1/) pour récupérer des informations sur les pays du monde. À partir d'un drapeau affiché, le joueur a deux modes de jeu :

1. Deviner le pays du drapeau
2. Deviner la capitale du pays associé au drapeau

Ces modes de jeu sont présentés sous la forme d'un Wordle, ajoutant une couche de défi et d'engagement.

## Technologies Utilisées

Ce projet a été développé en utilisant les technologies suivantes :

- NextJS 14
- TailwindCSS

Les librairies de composants utilisés :
 
- Shad-cn UI
- Framer Motion

## Installation

Pour installer et exécuter ce projet, suivez les étapes suivantes :

```bash
git clone https://github.com/DDouze/CountryWordle.git
cd CountryWordle
npm install
npm run dev
```

## Améliorations possibles 

- Ajouter des niveaux de difficultés en modifiant le filtre pour choisir des pays que avec un certain nombre de lettres,
- Améliorer le responsive pour qu'il n'y ait pas de scrolling,
- Intégrer un système de points en localStorage.
  