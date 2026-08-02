export const allergenLabels = {
  gluten: '🌾',
  lacteos: '🥛',
  huevos: '🥚',
  pescado: '🐟',
  mostaza: '🌭',
  sesamo: '🥯',
  sulfitos: '🍷',
  soja: '🫘',
  apio: '🌿',
  frutosSecos: '🥜',
}

export const menuCategories = [
  {
    name: 'Menús combinados',
    items: [
      { id: 'k1', name: 'Kebab (Pollo / Ternera / Mixto)', desc: '+ Patatas + Bebida', price: 8.00, isBestseller: true, allergens: ['gluten'] },
      { id: 'k2', name: 'Durum (Pollo / Ternera / Mixto)', desc: '+ Patatas + Bebida', price: 8.50, allergens: ['gluten'] },
      { id: 'k3', name: 'Burger de pollo', desc: '+ Patatas + Bebida', price: 7.00, allergens: ['gluten'] },
      { id: 'k4', name: 'Plato kebab', desc: '+ Bebida + Pan', price: 8.00, allergens: ['gluten'] },
      { id: 'p1', name: 'Pizza kebab', desc: '', price: 7.50, isBestseller: true, allergens: ['gluten', 'lacteos'] },
      { id: 'p2', name: 'Pizza kebab + Patatas + Bebida', desc: '', price: 9.50, allergens: ['gluten', 'lacteos'] },
      { id: 'p3', name: 'Pizza kebab + Ensalada + Bebida', desc: '', price: 10.00, allergens: ['gluten', 'lacteos'] },
      { id: 'p4', name: 'Pizza kebab + Patatas + Nuggets', desc: '', price: 10.00, allergens: ['gluten', 'lacteos'] },
      { id: 'o3', name: 'Menú taco', desc: '+ Patatas + Bebida', price: 9.00 },
      { id: 'o5', name: 'Durum gratinado', desc: 'Solo carne 7€ / Menú 9,50€', price: 6.50 },
      { id: 'o6', name: 'Plato gratinado', desc: '', price: 10.00 },
      { id: 'o7', name: 'Menú Infantil', desc: '', price: 5.00, isBestseller: true },
    ],
  },
  {
    name: 'Kebabs',
    items: [
      { id: 'k5', name: 'Plato kebab', desc: 'Solo plato', price: 6.50 },
      { id: 'k6', name: 'Plato solo carne', desc: '', price: 7.00 },
      { id: 'k7', name: 'Completo', desc: 'Kebab con pan turco', price: 4.00, isBestseller: true, allergens: ['gluten'] },
      { id: 'k8', name: 'Solo carne', desc: 'Kebab con pan turco', price: 4.50, allergens: ['gluten'] },
      { id: 'k9', name: 'Completo', desc: 'Kebab con pan durum', price: 5.00, allergens: ['gluten'] },
      { id: 'k10', name: 'Solo carne', desc: 'Kebab con pan durum', price: 5.50, allergens: ['gluten'] },
      { id: 'k11', name: 'Burger de pollo', desc: 'Hamburguesa', price: 4.50, allergens: ['gluten'] },
      { id: 'c5', name: 'Burger ternera', desc: '', price: 5.00, allergens: ['gluten'] },
      { id: 'o2', name: 'Plato kebab con arroz', desc: '', price: 9.00 },
      { id: 'o4', name: 'Taco solo', desc: '', price: 5.00 },
    ],
  },
  {
    name: 'Pizzas',
    items: [
      { id: 'p5', name: 'Pollo kebab', desc: '', price: 7.50, allergens: ['gluten', 'lacteos'] },
      { id: 'p6', name: 'Mixto kebab', desc: '', price: 7.50, allergens: ['gluten', 'lacteos'] },
      { id: 'p7', name: 'Ternera kebab', desc: '', price: 7.50, allergens: ['gluten', 'lacteos'] },
      { id: 'p8', name: 'Mixto kebab + picante', desc: '', price: 7.50, tags: ['picante'], allergens: ['gluten', 'lacteos'] },
      { id: 'p9', name: 'Margarita', desc: '', price: 7.50, allergens: ['gluten', 'lacteos'] },
      { id: 'p10', name: 'Calzone', desc: '', price: 8.00, allergens: ['gluten', 'lacteos'] },
      { id: 'p11', name: '4 quesos', desc: '', price: 7.50, allergens: ['gluten', 'lacteos'] },
      { id: 'p12', name: 'Atún con cebolla', desc: '', price: 8.00, allergens: ['gluten', 'lacteos'] },
      { id: 'p13', name: 'Atún con olivas', desc: '', price: 8.00, allergens: ['gluten', 'lacteos'] },
      { id: 'p14', name: 'Atún con queso', desc: '', price: 8.00, allergens: ['gluten', 'lacteos'] },
      { id: 'p15', name: 'Vegetal', desc: '', price: 8.00, allergens: ['gluten', 'lacteos'] },
      { id: 'p16', name: 'Express Pizza', desc: 'Salsa tomate, pollo, ternera o mixto, atún y queso', price: 10.50, isBestseller: true, allergens: ['gluten', 'lacteos'] },
    ],
  },
  {
    name: 'Entrantes',
    items: [
      { id: 'k12', name: 'Falafel', desc: 'Con pan turco', price: 5.00, tags: ['vegetariano'], allergens: ['gluten'] },
      { id: 'k13', name: 'Falafel', desc: 'Con pan durum', price: 5.50, tags: ['vegetariano'], allergens: ['gluten'] },
      { id: 'k14', name: 'Falafel', desc: 'En plato', price: 5.50, tags: ['vegetariano'] },
      { id: 'k15', name: 'Ensalada turca', desc: '', price: 3.50 },
      { id: 'k16', name: 'Ensalada de atún', desc: '', price: 3.50 },
      { id: 'k17', name: 'Bravas', desc: '', price: 3.00 },
      { id: 'k18', name: 'Fritas con salsa', desc: '', price: 3.00 },
      { id: 'c1', name: 'Nuggets (7 uds)', desc: '', price: 4.00, allergens: ['gluten'] },
      { id: 'c3', name: 'Nuggets con patatas (4 uds)', desc: '', price: 4.00, allergens: ['gluten'] },
      { id: 'c6', name: 'Patatas fritas + salsa', desc: '', price: 3.00 },
      { id: 'c7', name: 'Alitas', desc: '', price: 5.00 },
      { id: 'c8', name: 'Tiras de pollo (5 uds)', desc: '', price: 5.00, allergens: ['gluten'] },
      { id: 'c9', name: 'Tiras de pollo (10 uds)', desc: '', price: 10.00, allergens: ['gluten'] },
      { id: 'c10', name: 'Patatas bravas', desc: '', price: 3.00 },
      { id: 'c11', name: 'Samosa de pollo (3 uds)', desc: '', price: 6.00, allergens: ['gluten'] },
      { id: 'c12', name: 'Seekh kebab (4 uds)', desc: '', price: 6.00, tags: ['picante'], isBestseller: true },
      { id: 'c13', name: 'Patatas deluxe', desc: '', price: 3.50 },
    ],
  },
  {
    name: 'Bebidas',
    items: [
      { id: 'p19', name: 'Refresco 33cl', desc: 'Coca-Cola, Sprite, Fanta', price: 1.50 },
      { id: 'p20', name: 'Agua pequeña', desc: '', price: 1.00 },
      { id: 'p21', name: 'Agua 1.5L', desc: '', price: 1.50 },
    ],
  },
]

export const extras = [
  { id: 'k19', name: 'Queso / Doble carne / Solo carne / Sin lechuga', desc: '+0,50€ cada uno', price: 0.50, allergens: ['lacteos'] },
  { id: 'p17', name: 'Ingrediente extra', desc: '', price: 0.50, allergens: ['lacteos'] },
  { id: 'p18', name: 'Bote de salsa', desc: '', price: 0.50 },
]

export const offers = [
  { id: 'o1', title: 'Martes de Kebab', desc: 'Kebab completo', price: 2.99, highlight: true, dayOfWeek: 2 },
]


