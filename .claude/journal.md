# Journal de développement

## 2024-12-14 - Retrospective : Échec initial du design

### Ce qui a merdé

1. **Sur-ingénierie du thème**
   - Créé un thème "deepspace" custom avec couleurs OKLCH complexes
   - Aurait dû utiliser le thème `black` de DaisyUI (comme le site Svelte de référence)

2. **Emojis comme icônes**
   - Utilisé 🏠 📝 🛠️ 👤 au lieu de SVG propres
   - Décision amateur, non professionnelle

3. **CSS legacy conservé**
   - Gardé le CSS Bear Blog de la template Astro originale
   - Conflits avec Tailwind/DaisyUI (styles `main` qui écrasaient le layout)

4. **Référence ignorée**
   - Le site Svelte (`maxiim3-svelte-site/`) était la source de vérité
   - Aurait dû le lire en premier et copier le style exactement

5. **Trop de planning, pas assez d'action**
   - Plans interminables au lieu d'examiner le code existant
   - Temps perdu en questions alors que les réponses étaient dans le code

6. **Agents mal guidés**
   - Agents lancés sans contexte suffisant sur le style attendu
   - Chacun a fait ses propres choix design incohérents

### La solution qui a marché

```css
/* Simple et efficace */
@import "tailwindcss";

@plugin "daisyui";
@plugin "daisyui" {
  themes: black --default;
}
```

- Thème `black` de DaisyUI (identique au site Svelte)
- Icônes SVG minimalistes (style Lucide/Feather)
- Composants simplifiés sans fioritures
- CSS global minimal

### Leçon retenue

**Quand une référence existe, la lire d'abord et s'en servir comme source de vérité.**

Ne pas improviser. Ne pas sur-ingénierer. Copier ce qui marche.
