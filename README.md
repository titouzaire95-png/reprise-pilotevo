# ReprisePilot VO

Application interne de cotation de reprise véhicule occasion.

## Fonctionnalités V1

- Saisie véhicule
- État carrosserie, mécanique, pneus, entretien
- Comparables marché manuels
- Calcul automatique du prix de reprise conseillé
- Prix minimum et maximum
- Score de risque
- Préparation à la sauvegarde Supabase

## Installation locale

```bash
npm install
npm run dev
```

Ouvre ensuite :

```text
http://localhost:3000
```

## Déploiement Vercel

1. Crée un dépôt GitHub `reprisepilot-vo`.
2. Envoie ce projet sur GitHub.
3. Sur Vercel, clique sur `Add New Project`.
4. Sélectionne le dépôt GitHub.
5. Déploie.

## Supabase

1. Crée un projet Supabase.
2. Va dans SQL Editor.
3. Colle le contenu de `database/schema.sql`.
4. Va dans Project Settings > API.
5. Copie :
   - Project URL
   - anon public key
6. Dans Vercel > Project > Settings > Environment Variables, ajoute :

```text
NEXT_PUBLIC_SUPABASE_URL=...
NEXT_PUBLIC_SUPABASE_ANON_KEY=...
```

## Commandes Git utiles

```bash
git init
git add .
git commit -m "Initial ReprisePilot VO"
git branch -M main
git remote add origin https://github.com/TON-COMPTE/reprisepilot-vo.git
git push -u origin main
```

## Prochaines améliorations

- Authentification privée
- Historique des reprises
- Fiche PDF
- Import photos
- OCR carte grise
- Connexion API de cotation ou extraction de comparables
- Dashboard marge et délai réel
