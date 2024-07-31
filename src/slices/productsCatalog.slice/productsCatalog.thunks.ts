import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk<Product[]>("fetchProducts", async () => {
   return [
      {
         name: "Пицца Береке Ет",
         description:
            "Пряная говядина, томаты, красный лук, моцарелла, фирменный соус альфредо, чеснок, итальянские травы",
         picture:
            "https://media.dodostatic.net/image/r:233x233/11EF1CB7AB16CECF87C419EF9EEFACA0.avif",
         price: 3150,
      },
      {
         name: "Вау! Кебаб",
         description:
            "Мясо говядины, соус ранч, сыр моцарелла, сладкий перец, томаты, красный лук и фирменный томатный соус",
         picture:
            "https://media.dodostatic.net/image/r:233x233/11EF01FEE6DD7261A9C36187149758D0.avif",
         price: 2950,
      },
      {
         name: "Креветки со сладким чили",
         description:
            "Креветки, ананасы, соус сладкий чили, сладкий перец, моцарелла, фирменный соус альфредо",
         picture:
            "https://media.dodostatic.net/image/r:233x233/11EF01FD3C2AC8E791770181C4A9C04D.avif",
         price: 2950,
      },
      {
         name: "Пицца из половинок",
         description: "Соберите свою пиццу 35 см с двумя разными вкусами",
         picture:
            "https://media.dodostatic.net/image/r:233x233/11EE7D5FECCD3AC0B2E2C417625FCB02.avif",
         price: 3600,
      },
      {
         name: "Сырная 🌱👶",
         description: "Моцарелла, сыры чеддер и пармезан, соус альфредо",
         picture:
            "https://media.dodostatic.net/image/r:233x233/11EE7D5F837255B58B25A62C60FFDB38.avif",
         price: 1850,
      },
      {
         name: "Чоризо фреш 🌶",
         description:
            "Пикантные колбаски чоризо из цыпленка, зеленый перец, моцарелла, томатный соус",
         picture:
            "https://media.dodostatic.net/image/r:233x233/11EE7D5FBD0756A6AAA0BBEBA01B343A.avif",
         price: 2050,
      },
   ];
});
