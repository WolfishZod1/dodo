import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchStories = createAsyncThunk<Stories[]>("fetchStories", async () => {
   return [
      {
         picture:
            "https://cdn.inappstory.ru/story/l2t/ui4/6v8/ejwjchic0honzzxuevg9so0/custom_cover/logo-350x440.webp?k=qAEAAAAAAAAEAQ&v=4214416162",
         alt: "Акция",
      },
      {
         picture:
            "https://cdn.inappstory.ru/story/26v/xlf/1z8/ssksjapl9sx0qbid3qwzywr/custom_cover/logo-350x440.webp?k=qAEAAAAAAAAEAQ&v=543368141",
         alt: "Выгодное комбо",
      },
      {
         picture:
            "https://cdn.inappstory.ru/story/96q/sjs/vwd/xrwvn3ti7kt6lbk9rg2usan/custom_cover/logo-350x440.webp?k=qAEAAAAAAAAEAQ&v=4288778152",
         alt: "Подборка для детей",
      },
      {
         picture:
            "https://cdn.inappstory.ru/story/hit/7ke/aeh/lwtocg95z3vw04ddjjpffkc/custom_cover/logo-350x440.webp?k=qAEAAAAAAAAEAQ&v=3131391532",
         alt: "Новый молочный коктейль",
      },
      {
         picture:
            "https://cdn.inappstory.ru/story/z3l/nbl/gcm/3v8zrott9xjlcgda3wzyqis/custom_cover/logo-350x440.webp?k=qAEAAAAAAAAEAQ&v=3917565866",
         alt: "Новая пицца с креветками",
      },
      {
         picture:
            "https://cdn.inappstory.ru/story/xal/u4l/xev/1fihd18uj9flxosue4c4pry/custom_cover/logo-350x440.webp?k=qAEAAAAAAAAEAQ&v=576934385",
         alt: "Акция новым клиентам",
      },
   ];
});
