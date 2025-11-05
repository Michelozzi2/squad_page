# Master 2 Informatique - Squad Page

## 📁 Structure du projet

```
master2-squad/
│
├── index.html          # Page principale HTML
├── css/
│   └── style.css      # Feuille de style
├── js/
│   └── script.js      # JavaScript et données des étudiants
├── images/            # Dossier pour vos photos d'étudiants
│   └── .gitkeep
└── README.md          # Ce fichier
```

## 🖼️ Comment ajouter vos images

### 1. Placer vos images
Placez toutes les photos de vos étudiants dans le dossier `images/`.

**Format recommandé :**
- Format : JPG, PNG, ou WEBP
- Ratio : Portrait (3:4 idéal)
- Taille : 600x800px minimum
- Nommage : utilisez des noms sans espaces (exemple : `sophie-martin.jpg`)

### 2. Modifier le fichier JavaScript

Ouvrez le fichier `js/script.js` et modifiez le tableau `students` (ligne 8).

**Pour chaque étudiant, ajoutez la propriété `image` :**

```javascript
{
    id: 1,
    name: "Sophie Martin",
    role: "IA & Machine Learning",
    category: "ai",
    image: "images/sophie-martin.jpg",  // ← Ajoutez cette ligne !
    age: 23,
    birthdate: "15/03/2002",
    // ... reste des données
}
```

**Note :** Si vous ne spécifiez pas `image`, l'emoji sera affiché par défaut.

### 3. Les catégories

Les étudiants sont répartis en 3 catégories :
- `"ai"` → Spécialistes IA & Data
- `"fullstack"` → Développeurs Full Stack
- `"security"` → Experts Sécurité & Réseaux

## ✏️ Personnaliser les données

### Modifier un étudiant existant

Dans `js/script.js`, trouvez l'étudiant et modifiez ses informations :

```javascript
{
    id: 1,
    name: "Votre Nom",                    // Nom complet
    role: "Votre Spécialité",             // Titre/rôle
    category: "ai",                        // ai, fullstack, ou security
    emoji: "🎓",                           // Emoji de fallback
    image: "images/votre-photo.jpg",      // Chemin vers votre photo
    age: 23,                               // Âge
    birthdate: "01/01/2002",              // Date de naissance
    birthplace: "Ville, Pays",            // Lieu de naissance
    nationality: "🇫🇷",                    // Drapeau emoji
    projects: 10,                          // Nombre de projets
    commits: 1000,                         // Nombre de commits
    skills: 15,                            // Nombre de compétences
    hours: 2000,                           // Heures de code
    strengths: ["Skill 1", "Skill 2"],    // Points forts (tableau)
    weaknesses: ["Skill 3"],              // Points faibles (tableau)
    achievement: "Votre plus grande réussite en détail",
    funFact: "Une anecdote amusante ou intéressante"
}
```

### Ajouter un nouvel étudiant

1. Copiez un objet étudiant existant
2. Changez l'`id` (assurez-vous qu'il soit unique)
3. Modifiez toutes les informations
4. Placez-le dans le tableau `students` selon sa catégorie

### Supprimer un étudiant

Supprimez simplement l'objet complet de l'étudiant dans le tableau `students`.

## 🎨 Personnaliser le style

Le fichier `css/style.css` contient tout le style. Vous pouvez modifier :

- **Couleurs du gradient :** Lignes 8-9 (background principal)
- **Couleurs du header :** Ligne 14 (fond blanc)
- **Couleurs des cartes :** Ligne 112 (fond blanc)
- **Taille des photos :** Ligne 118 (hauteur 320px par défaut)

### Exemple : Changer le gradient principal

```css
background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%);
```
Remplacez `#1e3c72` et `#2a5298` par vos couleurs préférées.

## 🚀 Utilisation

1. Ouvrez simplement `index.html` dans votre navigateur
2. Cliquez sur une carte pour voir le profil détaillé
3. Cliquez sur "← Retour" pour revenir à la grille

## 📱 Responsive

La page est entièrement responsive et s'adapte aux :
- 🖥️ Ordinateurs de bureau
- 💻 Tablettes
- 📱 Smartphones

## 🔧 Support des images

Si vous utilisez des vraies images, les lignes de code nécessaires sont déjà prêtes dans le CSS :

```css
/* Lignes 122-127 dans style.css */
.player-photo img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
```

Ces styles sont commentés et prêts à être décommentés si nécessaire.

## 🎯 Checklist de personnalisation

- [ ] Ajouter vos photos dans le dossier `images/`
- [ ] Modifier les données des étudiants dans `js/script.js`
- [ ] Ajouter les chemins d'images pour chaque étudiant
- [ ] Tester dans le navigateur
- [ ] Ajuster les couleurs si désiré
- [ ] Vérifier la version mobile

## 💡 Conseils

- Utilisez des photos avec un fond uniforme pour un meilleur rendu
- Gardez des noms de fichiers courts et sans espaces
- Testez régulièrement dans le navigateur pendant vos modifications
- Sauvegardez vos données avant de faire des changements importants

---

Créé avec ❤️ pour le Master 2 Informatique
