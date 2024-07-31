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
   ];
});
