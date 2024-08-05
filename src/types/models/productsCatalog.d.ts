interface ProductsCatalog {
   pizza: Product[];
   combos: Product[];
   snacks: Product[];
   cocktails: Product[];
   coffee: Product[];
   childrenLove: Product[];
   beverages: Product[];
   sauces: Product[];
   others: Product[];
}

type ProductsCategories = keyof ProductsCatalog;
