# 🚀 Portfolio — React

Un portfolio personnel moderne et responsive, développé avec **React**.

---

## ✨ Aperçu

Ce portfolio présente mes projets, compétences et expériences professionnelles dans un design épuré et interactif.

---

## 🛠️ Technologies utilisées

- **React** — bibliothèque UI principale
- **React Router** — navigation entre les pages
- **CSS Modules / Styled Components / Tailwind CSS** *(adapter selon ton projet)*
- **Vite / Create React App** *(adapter selon ton setup)*

---

## 📁 Structure du projet

```
portfolio/
├── public/
│   └── index.html
├── src/
│   ├── assets/          # Images, icônes, polices
│   ├── components/      # Composants réutilisables
│   ├── pages/           # Pages principales (Home, About, Projects, Contact)
│   ├── styles/          # Fichiers CSS globaux
│   ├── App.jsx
│   └── main.jsx
├── .gitignore
├── package.json
└── README.md
```

---

## 🚀 Installation et lancement

### Prérequis

- Node.js `>= 18.x`
- npm ou yarn

### Étapes

```bash
# Cloner le dépôt
git clone https://github.com/Jusinho7/portfolio.git

# Accéder au dossier
cd portfolio

# Installer les dépendances
npm install

# Lancer en développement
npm run dev
```

L'application sera disponible sur `http://localhost:5173` (Vite) ou `http://localhost:3000` (CRA).

---

## 📦 Scripts disponibles

| Commande | Description |
|---|---|
| `npm run dev` | Lance le serveur de développement |
| `npm run build` | Compile le projet pour la production |
| `npm run preview` | Prévisualise le build de production |
| `npm run lint` | Vérifie le code avec ESLint |

---

## 📄 Pages

| Page | Description |
|---|---|
| **Accueil** | Présentation et accroche principale |
| **À propos** | Mon parcours, mes valeurs, mes compétences |
| **Projets** | Galerie de mes réalisations |
| **Contact** | Formulaire de contact et liens sociaux |

---

## 🌐 Déploiement sur GitHub Pages

### 1. Installer `gh-pages`

```bash
npm install --save-dev gh-pages
```

### 2. Modifier `package.json`

```json
{
  "homepage": "https://Jusinho7.github.io/portfolio",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

> Remplace `dist` par `build` si tu utilises Create React App.

### 3. Configurer Vite *(si applicable)*

Dans `vite.config.js` :

```js
export default defineConfig({
  base: '/potfolio/',
})
```

> Cette étape n'est pas nécessaire avec Create React App.

### 4. Déployer

```bash
npm run deploy
```

### 5. Activer GitHub Pages

Dans ton dépôt GitHub :
- **Settings → Pages**
- Source : branche `gh-pages`, dossier `/ (root)`
- Sauvegarde

🎉 Ton site sera disponible sur `https://jusinho7.github.io/portfolio` après quelques minutes.

---


## 📝 Licence

Ce projet est sous licence **MIT**. Tu es libre de t'en inspirer pour ton propre portfolio.
