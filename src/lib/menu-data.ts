export type AllergenTag = "V" | "VG" | "GF" | "N" | "D" | "G";

export interface MenuItem {
  id: string;
  name: string;
  urdu?: string;
  description: string;
  price: number;
  allergens: AllergenTag[];
  image: string;
  popular?: boolean;
  spiceLevel?: 1 | 2 | 3;
}

export interface MenuCategory {
  id: string;
  name: string;
  description: string;
  items: MenuItem[];
}

export const ALLERGEN_LABELS: Record<AllergenTag, string> = {
  V: "Vegetarian",
  VG: "Vegan",
  GF: "Gluten Free",
  N: "Contains Nuts",
  D: "Contains Dairy",
  G: "Contains Gluten",
};

export const menuCategories: MenuCategory[] = [
  {
    id: "starters",
    name: "Starters",
    description: "Begin your journey with our street-food inspired small plates",
    items: [
      {
        id: "seekh-kebab",
        name: "Seekh Kebab",
        urdu: "سیخ کباب",
        description:
          "Hand-minced lamb with green chillies, ginger, garlic and fresh herbs, grilled over charcoal. Served with raita and chutney.",
        price: 7.95,
        allergens: ["G", "D"],
        image:
          "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=600&q=80",
        popular: true,
        spiceLevel: 2,
      },
      {
        id: "aloo-tikki",
        name: "Aloo Tikki",
        urdu: "آلو ٹکی",
        description:
          "Crispy spiced potato patties pan-fried golden, topped with tamarind chutney, yoghurt and pomegranate seeds.",
        price: 6.5,
        allergens: ["V", "D"],
        image:
          "https://images.unsplash.com/photo-1606491048802-8342506d6471?w=600&q=80",
        spiceLevel: 1,
      },
      {
        id: "samosa",
        name: "Samosa (2 pcs)",
        urdu: "سموسہ",
        description:
          "Flaky pastry parcels filled with spiced lamb mince and peas. Made fresh each morning.",
        price: 5.95,
        allergens: ["G"],
        image:
          "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=600&q=80",
        spiceLevel: 2,
      },
      {
        id: "chana-chaat",
        name: "Chana Chaat",
        urdu: "چنا چاٹ",
        description:
          "Tangy chickpea salad with diced onion, tomato, green chilli, tamarind, cumin and fresh coriander.",
        price: 6.5,
        allergens: ["VG", "GF"],
        image:
          "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=600&q=80",
        spiceLevel: 2,
      },
      {
        id: "haleem",
        name: "Haleem",
        urdu: "حلیم",
        description:
          "Slow-cooked wheat, lentils and shredded lamb — a Karachi classic. Simmered for six hours, finished with crispy onions, ginger and lime.",
        price: 8.5,
        allergens: ["G", "D"],
        image:
          "https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=600&q=80",
        popular: true,
        spiceLevel: 2,
      },
    ],
  },
  {
    id: "curries",
    name: "Curries",
    description: "Rich, aromatic gravies slow-cooked with house-ground spices",
    items: [
      {
        id: "nihari",
        name: "Nihari",
        urdu: "نہاری",
        description:
          "The king of Pakistani curries. Bone-in beef shank simmered overnight with 22 whole spices. Garnished with ginger, green chilli and fried onions.",
        price: 14.95,
        allergens: ["G", "D"],
        image:
          "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=600&q=80",
        popular: true,
        spiceLevel: 2,
      },
      {
        id: "dal-makhani",
        name: "Dal Makhani",
        urdu: "دال مکھنی",
        description:
          "Black lentils and kidney beans slow-cooked overnight with butter, cream and tomato. Comfort in a bowl.",
        price: 10.95,
        allergens: ["V", "GF", "D"],
        image:
          "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=600&q=80",
        spiceLevel: 1,
      },
      {
        id: "palak-gosht",
        name: "Palak Gosht",
        urdu: "پالک گوشت",
        description:
          "Tender lamb pieces cooked with fresh spinach, fenugreek and warming spices. Lighter than you'd expect, full of depth.",
        price: 13.95,
        allergens: ["GF"],
        image:
          "https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=600&q=80",
        spiceLevel: 2,
      },
      {
        id: "chicken-korma",
        name: "Chicken Korma",
        urdu: "مرغی کورمہ",
        description:
          "Free-range chicken in a fragrant cashew and cream sauce, gentle on spice, big on aroma. Our most popular mild dish.",
        price: 12.95,
        allergens: ["GF", "D", "N"],
        image:
          "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=600&q=80",
        spiceLevel: 1,
      },
      {
        id: "saag-aloo",
        name: "Saag Aloo",
        urdu: "ساگ آلو",
        description:
          "Potatoes and spinach cooked together with mustard seeds, cumin and green chilli. A hearty vegetarian staple.",
        price: 10.5,
        allergens: ["V", "VG", "GF"],
        image:
          "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=600&q=80",
        spiceLevel: 2,
      },
    ],
  },
  {
    id: "karahi",
    name: "Karahi",
    description: "Cooked to order in a traditional iron karahi — bold, smoky and freshly made",
    items: [
      {
        id: "chicken-karahi",
        name: "Chicken Karahi",
        urdu: "مرغی کڑاہی",
        description:
          "Farm-fresh chicken, whole tomatoes, green chillies, ginger and black pepper. No water added — the tomatoes create the sauce. Serves 1–2.",
        price: 15.95,
        allergens: ["GF", "D"],
        image:
          "https://images.unsplash.com/photo-1567337710282-00832b415979?w=600&q=80",
        popular: true,
        spiceLevel: 3,
      },
      {
        id: "lamb-karahi",
        name: "Lamb Karahi",
        urdu: "مٹن کڑاہی",
        description:
          "Spring lamb karahi cooked the Peshawar way — tomatoes, black pepper, green chillies, and a generous hand with fresh coriander.",
        price: 17.95,
        allergens: ["GF", "D"],
        image:
          "https://images.unsplash.com/photo-1567337710282-00832b415979?w=600&q=80",
        spiceLevel: 3,
      },
      {
        id: "paneer-karahi",
        name: "Paneer Karahi",
        urdu: "پنیر کڑاہی",
        description:
          "House-made paneer cubes in a vibrant tomato and green chilli karahi sauce. Vegetarian but just as bold.",
        price: 13.95,
        allergens: ["V", "GF", "D"],
        image:
          "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=600&q=80",
        spiceLevel: 2,
      },
    ],
  },
  {
    id: "biryani",
    name: "Biryani",
    description: "Long-grain basmati layered with slow-cooked meat and sealed in the dum style",
    items: [
      {
        id: "lamb-biryani",
        name: "Lamb Dum Biryani",
        urdu: "مٹن بریانی",
        description:
          "Bone-in lamb marinated overnight, layered with saffron-infused aged basmati, sealed and slow-cooked. Served with raita and salan.",
        price: 16.95,
        allergens: ["GF", "D"],
        image:
          "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?w=600&q=80",
        popular: true,
        spiceLevel: 2,
      },
      {
        id: "chicken-biryani",
        name: "Chicken Biryani",
        urdu: "مرغی بریانی",
        description:
          "Free-range chicken marinated in yoghurt and spices, layered with golden fried onions, mint and aged basmati.",
        price: 13.95,
        allergens: ["GF", "D"],
        image:
          "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?w=600&q=80",
        spiceLevel: 2,
      },
      {
        id: "vegetable-biryani",
        name: "Vegetable Biryani",
        urdu: "سبزی بریانی",
        description:
          "Seasonal vegetables, paneer and whole spices layered with aromatic basmati. A satisfying vegetarian centrepiece.",
        price: 11.95,
        allergens: ["V", "GF", "D"],
        image:
          "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?w=600&q=80",
        spiceLevel: 1,
      },
    ],
  },
  {
    id: "breads",
    name: "Breads",
    description: "All breads baked fresh in our tandoor oven",
    items: [
      {
        id: "garlic-naan",
        name: "Garlic & Coriander Naan",
        description:
          "Leavened dough slapped into the tandoor, finished with garlic butter and fresh coriander. Perfect for scooping.",
        price: 3.5,
        allergens: ["V", "G", "D"],
        image:
          "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?w=600&q=80",
      },
      {
        id: "plain-naan",
        name: "Plain Naan",
        description: "Classic tandoor-baked flatbread, soft and lightly charred.",
        price: 2.5,
        allergens: ["V", "G", "D"],
        image:
          "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?w=600&q=80",
      },
      {
        id: "paratha",
        name: "Lachha Paratha",
        description:
          "Multi-layered flaky flatbread pan-fried with clarified butter. Pairs beautifully with our karahi dishes.",
        price: 3.5,
        allergens: ["V", "G", "D"],
        image:
          "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?w=600&q=80",
      },
      {
        id: "peshwari-naan",
        name: "Peshwari Naan",
        description:
          "Sweet naan filled with coconut, almond and sultanas. A Curry Mile institution.",
        price: 3.95,
        allergens: ["V", "G", "D", "N"],
        image:
          "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?w=600&q=80",
      },
    ],
  },
  {
    id: "desserts",
    name: "Desserts",
    description: "Traditional Pakistani sweets made in-house every day",
    items: [
      {
        id: "gulab-jamun",
        name: "Gulab Jamun",
        urdu: "گلاب جامن",
        description:
          "Milk-solid dumplings soaked in rose and cardamom syrup. Served warm with vanilla ice cream.",
        price: 5.5,
        allergens: ["V", "G", "D"],
        image:
          "https://images.unsplash.com/photo-1548369937-47519962c11a?w=600&q=80",
        popular: true,
      },
      {
        id: "kheer",
        name: "Kheer",
        urdu: "کھیر",
        description:
          "Grandmother's slow-cooked rice pudding, simmered for hours in full-fat milk with cardamom, saffron and topped with pistachios.",
        price: 5.5,
        allergens: ["V", "GF", "D", "N"],
        image:
          "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=600&q=80",
      },
      {
        id: "kulfi",
        name: "Mango Kulfi",
        description:
          "Dense, intensely flavoured frozen dessert made with reduced milk, Alphonso mango and pistachios. Served on a stick.",
        price: 4.95,
        allergens: ["V", "GF", "D", "N"],
        image:
          "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=600&q=80",
      },
    ],
  },
  {
    id: "drinks",
    name: "Drinks",
    description: "Traditional beverages and soft drinks",
    items: [
      {
        id: "mango-lassi",
        name: "Mango Lassi",
        urdu: "لسی",
        description:
          "Thick, creamy yoghurt blended with fresh Alphonso mango pulp. The only thing better than water on a spicy day.",
        price: 4.5,
        allergens: ["V", "GF", "D"],
        image:
          "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=600&q=80",
        popular: true,
      },
      {
        id: "salted-lassi",
        name: "Salted Lassi",
        description:
          "Chilled yoghurt drink with a pinch of roasted cumin and salt — the classic digestif.",
        price: 4.0,
        allergens: ["V", "GF", "D"],
        image:
          "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=600&q=80",
      },
      {
        id: "chai",
        name: "Doodh Patti Chai",
        urdu: "دودھ پتی چائے",
        description:
          "Black tea brewed directly in whole milk with cardamom, ginger and a hint of cinnamon. No water, all milk.",
        price: 3.0,
        allergens: ["V", "GF", "D"],
        image:
          "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=600&q=80",
      },
      {
        id: "soft-drink",
        name: "Soft Drink",
        description: "Coca-Cola, Diet Coke, Lemonade, Fanta or Still/Sparkling Water (330ml)",
        price: 2.5,
        allergens: ["V", "VG", "GF"],
        image:
          "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=600&q=80",
      },
    ],
  },
];

export const featuredDishes = menuCategories
  .flatMap((c) => c.items)
  .filter((item) => item.popular);

export const openingHours = [
  { day: "Monday", hours: "Closed" },
  { day: "Tuesday – Thursday", hours: "5:00 pm – 10:30 pm" },
  { day: "Friday – Saturday", hours: "12:00 pm – 11:30 pm" },
  { day: "Sunday", hours: "12:00 pm – 10:00 pm" },
];
