// Base de données des recettes (parssée depuis les fichiers .md)
export const recipesData = [
  {
    id: 'recette_03-tartare-de-cabillaud',
    title: 'Tartare de cabillaud, chou-fleur rôti et prune Reine Claude',
    type: 'plat',
    preparationTime: '10 min',
    cookingTime: '30 min',
    description: 'Un tartare moderne et équilibré avec cabillaud cru, chou-fleur rôti croquant et prune Reine Claude confite au citron vert pour un contraste sucré-acide.',
    ingredients: [
      '200 g cabillaud',
      '1/2 pièce chou-fleur',
      '150 g prune Reine Claude',
      '1 citron vert',
      '2 c.à.s huile d\'olive',
      'sel, poivre',
      '1 bouquet coriandre'
    ],
    preparation: '5 étapes (détails non fournis)',
    tools: ['magimix', 'four']
  },
  {
    id: 'recette_01-gratin-patate-douce',
    title: 'Gratin de patate douce, betterave et fenouil à la coriandre',
    type: 'gratin',
    preparationTime: '12 min',
    cookingTime: '40 min',
    description: 'Gratin végétal coloré où la coriandre fraîche relève la douceur naturelle des légumes rôtis.',
    ingredients: [
      '400 g patate douce',
      '250 g betterave',
      '1 fenouil',
      '1 cube bouillon de volaille',
      '40 g parmesan râpé',
      '1 bouquet coriandre',
      '2 c.à.s huile d\'olive'
    ],
    preparation: '5 étapes (détails non fournis)',
    tools: ['magimix', 'four']
  },
  {
    id: 'recette_01-velout-chou-blanc',
    title: 'Velouté de chou blanc, pomme et gingembre – croquant de butternut',
    type: 'soupe',
    preparationTime: '10 min',
    cookingTime: '35 min',
    description: 'Un velouté doux et réconfortant où la pomme et le gingembre subliment le chou blanc, avec un croquant de butternut rôti pour le contraste.',
    ingredients: [
      '1/4 pièce chou blanc',
      '1 pomme Gala',
      '200 g butternut',
      '15 g gingembre frais',
      '1 cube bouillon de volaille',
      '1 c.à.s huile d\'olive',
      '1/2 c.à.c cumin'
    ],
    preparation: '5 étapes (détails non fournis)',
    tools: ['magimix', 'four']
  },
  {
    id: 'recette_02-bowl-quinoa',
    title: 'Bowl quinoa aux betteraves rôties, citron vert et graines de citrouille',
    type: 'bows',
    preparationTime: '13 min',
    cookingTime: '30 min',
    description: 'Un bowl coloré et équilibré : quinoa cuit au bouillon, betteraves rôties au four, et une émulsion au yuzu pour une touche acide subtile.',
    ingredients: [
      '300 g betterave',
      '1 yuzu',
      '1 kiwi jaune',
      '150 g quinoa',
      '1 cube bouillon de volaille',
      '20 g graines de citrouille',
      '1 c.à.s huile d\'olive',
      '1 bouquet coriandre'
    ],
    preparation: '5 étapes (détails non fournis)',
    tools: ['magimix', 'four']
  },
  {
    id: 'recette_02-soupe-potimarron',
    title: 'Soupe veloutée potimarron-figue & coriandre grillée',
    type: 'soupe',
    preparationTime: '8 min',
    cookingTime: '30 min',
    description: 'Inventé : une soupe douce-amère où la figue apporte un fond fumé, relevé par une infusion de coriandre grillée et une touche de citron vert.',
    ingredients: [
      '1 potimarron',
      '300 g figue noire',
      '1 citron vert',
      '1 cube bouillon de volaille',
      '1 bouquet coriandre',
      '1 c.à.s huile de noix'
    ],
    preparation: '5 étapes (détails non fournis)',
    tools: ['magimix']
  },
  {
    id: 'recette_00-velout-betterave',
    title: 'Velouté de betterave, carottes et coriandre',
    type: 'soupe',
    preparationTime: '10 min',
    cookingTime: '35 min',
    description: 'Un velouté crémeux et sucré-salé où la betterave rencontre les carottes et une touche de coriandre fraîche pour un twist exotique.',
    ingredients: [
      '500 g betterave',
      '200 g navet violet',
      '1 oignon jaune',
      '1 cube bouillon de volaille',
      '1 bouquet coriandre',
      '1 c.à.s huile d\'olive'
    ],
    preparation: '5 étapes (détails non fournis)',
    tools: ['magimix']
  },
  {
    id: 'recette_01-gratin-chou-romanesco',
    title: 'Gratin de chou Romanesco, pommes de terre Agria et parmesan',
    type: 'gratin',
    preparationTime: '12 min',
    cookingTime: '40 min',
    description: 'Réinvention d\'un gratin provençal : le chou Romanesco est effiloché et mélangé à des pommes de terre Agria rôties.',
    ingredients: [
      '1 chou Romanesco',
      '500 g pommes de terre Agria',
      '1 cube bouillon de volaille',
      '60 g parmesan râpé',
      '2 gousses ail',
      '2 c.à.s huile d\'olive',
      '1 c.à.c paprika fumé'
    ],
    preparation: '5 étapes (détails non fournis)',
    tools: ['magimix', 'four']
  },
  {
    id: 'recette_03-bowl-quinoa-saumon',
    title: 'Bowl quinoa patate douce saumon fumé grenade',
    type: 'bows',
    preparationTime: '15 min',
    cookingTime: '25 min',
    description: 'Un bowl épicé et coloré avec quinoa, patate douce rôtie, saumon fumé et grenade pour une touche fruitée.',
    ingredients: [
      '300 g quinoa',
      '400 g patate douce',
      '200 g saumon fumé',
      '1 grenade',
      '1 citron vert',
      '1 c.à.s huile d\'olive',
      '1 bouquet coriandre'
    ],
    preparation: '5 étapes (détails non fournis)',
    tools: ['four']
  },
  {
    id: 'recette_03-curry-coco',
    title: 'Curry coco aux haricots verts betterave et citron',
    type: 'plat',
    preparationTime: '10 min',
    cookingTime: '25 min',
    description: 'Un curry crémeux et riche en saveurs avec haricots verts, betterave et une touche de citron vert.',
    ingredients: [
      '300 g haricots verts',
      '200 g betterave',
      '1 citron vert',
      '1 c.à.s curry',
      '200 ml lait de coco',
      '1 oignon',
      '2 c.à.s huile d\'olive'
    ],
    preparation: '5 étapes (détails non fournis)',
    tools: ['magimix']
  },
  {
    id: 'recette_02-velout-chou-chinois',
    title: 'Velouté de chou chinois fenouil et pomme de terre',
    type: 'soupe',
    preparationTime: '10 min',
    cookingTime: '30 min',
    description: 'Un velouté léger et rafraîchissant avec chou chinois, fenouil et pomme de terre.',
    ingredients: [
      '1 chou chinois',
      '1 fenouil',
      '200 g pommes de terre',
      '1 cube bouillon',
      '1 c.à.s huile d\'olive'
    ],
    preparation: '5 étapes (détails non fournis)',
    tools: ['magimix']
  }
]

// Extraire tous les ingrédients uniques
export function getUniqueIngredients(recipes) {
  const ingredients = new Set()
  recipes.forEach(recipe => {
    recipe.ingredients.forEach(ing => {
      // Extraire le nom de l'ingrédient (avant le prix ou quantité)
      const name = ing.split(/\s*\d+\s*|\s*-\s*/)[0].trim().toLowerCase()
      ingredients.add(name)
    })
  })
  return Array.from(ingredients).sort()
}

// Extraire les types de plat uniques
export function getRecipeTypes(recipes) {
  const types = new Set(recipes.map(r => r.type))
  return Array.from(types).sort()
}

// Rechercher des recettes (pour moteur de recherche interne)
export function searchRecipes(recipes, term) {
  const lowerTerm = term.toLowerCase()
  return recipes.filter(recipe =>
    recipe.title.toLowerCase().includes(lowerTerm) ||
    recipe.description.toLowerCase().includes(lowerTerm) ||
    recipe.ingredients.some(ing => ing.toLowerCase().includes(lowerTerm))
  )
}
