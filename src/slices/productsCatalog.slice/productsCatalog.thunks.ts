import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk<ProductsCatalog>("fetchProducts", async () => {
   return {
      pizza: [
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
      ],
      combos: [
         {
            name: "Комбо Вау! Кебаб",
            description: "Большой напиток и пицца Вау! Кебаб — попробуйте их вместе в комбо.",
            picture:
               "https://media.dodostatic.net/image/r:233x233/11EF168E1ECEE160827BC0ADE723E700.avif",
            price: 4550,
         },
         {
            name: "Летнее комбо",
            description:
               "Сочный чикен ролл, напиток, картошечка по-деревенски и нежный сырный соус.",
            picture:
               "https://media.dodostatic.net/image/r:233x233/11EF32003102C80A887E04629CE77DFA.avif",
            price: 1990,
         },
         {
            name: "Комбо Леди Баг",
            description:
               "Чудесный набор: маленькая пицца на выбор и брелок с персонажем мультсериала или его квами. Соберем всю коллекцию?",
            picture:
               "https://media.dodostatic.net/image/r:233x233/11EF1D3B8F8987C7BD92CDD947AB9875.avif",
            price: 2500,
         },
         {
            name: "Комбо за 3900 ₸",
            description:
               "Кому-кому только одному. Маленькая пицца, закуска, напиток и соус. Цена комбо зависит от выбранных продуктов и может быть увеличена",
            picture:
               "https://media.dodostatic.net/image/r:233x233/11EF0152C4EF8EA689865690AC33FA03.avif",
            price: 3900,
         },
         {
            name: "3 пиццы от 4900 ₸",
            description:
               "Настоящая дегустация. Три маленькие пиццы по суперцене. Пиццы в комбо можно менять. Цена комбо зависит от выбранных пицц и может быть увеличена",
            picture:
               "https://media.dodostatic.net/image/r:233x233/11EE7E215A2E0E04A2FB6BF3308D1AD5.avif",
            price: 4900,
         },
         {
            name: "2 пиццы",
            description:
               "Парочка что надо. 2 средние пиццы. Цена комбо зависит от выбранных пицц и может быть увеличена",
            picture:
               "https://media.dodostatic.net/image/r:233x233/11EE7E215D8C4FED8A0E004FEC01E713.avif",
            price: 5300,
         },
         {
            name: "3 пиццы",
            description:
               "3 пиццы 30 см на любой вкус. Для компании из 5–10 человек. Цена комбо зависит от выбранных пицц и может быть увеличена",
            picture:
               "https://media.dodostatic.net/image/r:233x233/11EE7E215EA3A03C84F00C3554992CAB.avif",
            price: 7700,
         },
      ],
      snacks: [
         {
            name: "Додстер Вау! Кебаб",
            description:
               "Горячая закуска с мясом говядины, моцареллой, красным луком и соусом ранч в тонкой пшеничной лепешке",
            picture:
               "https://media.dodostatic.net/image/r:233x233/11EF020014EC43D6994F3D276D755531.avif",
            price: 1750,
         },
         {
            name: "Дэнвич ветчина и сыр",
            description:
               "Поджаристая чиабатта и знакомое сочетание, цыпленка, ветчины из цыпленка, моцареллы со свежими томатами и соусом ранч",
            picture:
               "https://media.dodostatic.net/image/r:233x233/11EE796F1967B5AF950A96DC718BF68D.avif",
            price: 1650,
         },
         {
            name: "Паста Береке",
            description:
               "Паста из печи с пряной говядиной, томатами, моцареллой, фирменным соусом альфредо и чесноком",
            picture:
               "https://media.dodostatic.net/image/r:233x233/11EF1CB59EC300549F00E230839643A5.avif",
            price: 2600,
         },
         {
            name: "Картофель из печи 🌱👶",
            description: "Запеченная в печи картошечка. Привычный вкус и мало масла",
            picture:
               "https://media.dodostatic.net/image/r:233x233/11EE85418A5A22A5BDB76CC58FE4EFB4.avif",
            price: 850,
         },
      ],
      cocktails: [
         {
            name: "Молочный коктейль Ежевика-малина",
            description:
               "Сливочная прохлада классического молочного коктейля с добавлением лесных ягод",
            picture:
               "https://media.dodostatic.net/image/r:233x233/11EF18D081A5575F9FD95A1400F504D8.avif",
            price: 1950,
         },
         {
            name: "Молочный коктейль Пина Колада",
            description: "Тропическое сочетание кокоса и ананаса в нежном милкшейке",
            picture:
               "https://media.dodostatic.net/image/r:233x233/11EF18D22CBC5C0AB6F22E982ACEC859.avif",
            price: 1950,
         },
         {
            name: "Молочный коктейль с печеньем Орео",
            description:
               "Как вкуснее есть печенье? Его лучше пить! Попробуйте молочный коктейль с мороженым и дробленым печеньем «Орео»",
            picture:
               "https://media.dodostatic.net/image/r:233x233/11EE796EDC8861BC860E43989A45C019.avif",
            price: 1950,
         },
         {
            name: "Классический молочный коктейль 👶",
            description:
               "В мире так много коктейлей, но классика — вечна. Попробуйте наш молочный напиток с мороженым",
            picture:
               "https://media.dodostatic.net/image/r:233x233/11EE796ECF42909DB401D3BFF796742E.avif",
            price: 1600,
         },
      ],
      coffee: [
         {
            name: "Ирландский Капучино",
            description: "Классический кофейный напиток с яркой историей и сливочным вкусом",
            picture:
               "https://media.dodostatic.net/image/r:233x233/11EE7D5FD56D201B860BF98EFA2DCA48.avif",
            price: 1100,
         },
         {
            name: "Кофе Американо",
            description: "Горячий напиток на основе эспрессо",
            picture:
               "https://media.dodostatic.net/image/r:233x233/11EE7D5FEC6640C5A109F430EB09FD02.avif",
            price: 800,
         },
      ],
      childrenLove: [
         {
            name: "Сырная 🌱👶",
            description: "Моцарелла, сыры чеддер и пармезан, соус альфредо",
            picture:
               "https://media.dodostatic.net/image/r:233x233/11EE7D5F837255B58B25A62C60FFDB38.avif",
            price: 1850,
         },
         {
            name: "Комбо Леди Баг",
            description:
               "Чудесный набор: маленькая пицца на выбор и брелок с персонажем мультсериала или его квами. Соберем всю коллекцию?",
            picture:
               "https://media.dodostatic.net/image/r:233x233/11EF1D3B8F8987C7BD92CDD947AB9875.avif",
            price: 2500,
         },

         {
            name: "Картофель из печи 🌱👶",
            description: "Запеченная в печи картошечка. Привычный вкус и мало масла",
            picture:
               "https://media.dodostatic.net/image/r:233x233/11EE85418A5A22A5BDB76CC58FE4EFB4.avif",
            price: 850,
         },
         {
            name: "Додо-клюв",
            description: "Если хочется перевоплощения",
            picture:
               "https://media.dodostatic.net/image/r:233x233/11EE796ECBCD7897810115092E7469A6.avif",
            price: 70,
         },
      ],
      beverages: [
         {
            name: "Какао",
            description:
               "Отправляемся в сладкое плавание в хорошей компании — горячий какао с молоком",
            picture:
               "https://media.dodostatic.net/image/r:233x233/11EE796F1E930BCBBEA5F68F5CBDB82F.avif",
            price: 800,
         },
         {
            name: "Pepsi",
            description: "",
            picture:
               "https://media.dodostatic.net/image/r:233x233/11EF015215F8CC9094724B66F59D0D9E.avif",
            price: 550,
         },
         {
            name: "Pepsi Zero",
            description: "",
            picture:
               "https://media.dodostatic.net/image/r:233x233/11EF01522D02FC228FCD9D3B847E5D7F.avif",
            price: 550,
         },
         {
            name: "7UP",
            description: "",
            picture:
               "https://media.dodostatic.net/image/r:233x233/11EE7D5FE3C24295A8BB624018E41106.avif",
            price: 550,
         },
         {
            name: "Mirinda",
            description: "",
            picture:
               "https://media.dodostatic.net/image/r:233x233/11EE7D5FE61E52FD98C08F0CCF44BFF2.avif",
            price: 550,
         },
         {
            name: "Чай Lipton черный с персиком",
            description: "",
            picture:
               "https://media.dodostatic.net/image/r:233x233/11EE796EF2F13C2298E7B3B602051306.avif",
            price: 800,
         },
         {
            name: "Чай Lipton зеленый",
            description: "",
            picture:
               "https://media.dodostatic.net/image/r:233x233/11EE796EF2CF16DF87982178BCC836E0.avif",
            price: 800,
         },
         {
            name: "Сок DaDa Зеленое яблоко",
            description: "",
            picture:
               "https://media.dodostatic.net/image/r:233x233/11EF128DF542F3839D61ED0A19E0D1D9.avif",
            price: 700,
         },
      ],
      sauces: [
         {
            name: "Сырный соус",
            description:
               "Фирменный соус со вкусом расплавленного сыра для бортиков пиццы и горячих закусок, 25 г",
            picture:
               "https://media.dodostatic.net/image/r:233x233/11EE796ED49CBD1490B5F1C46A8F026E.avif",
            price: 400,
         },
         {
            name: "Соус Чесночный",
            description:
               "Фирменный соус с чесночным вкусом для бортиков пиццы и горячих закусок, 25 г",
            picture:
               "https://media.dodostatic.net/image/r:233x233/11EEB05AC741F77388CF9BC3CF08F858.avif",
            price: 300,
         },
         {
            name: "Барбекю",
            description:
               "Фирменный соус с дымным ароматом для бортиков пиццы и горячих закусок, 25 г",
            picture:
               "https://media.dodostatic.net/image/r:233x233/11EE796ED4D250A7970905C657FB3AB3.avif",
            price: 300,
         },
         {
            name: "Кетчуп",
            description:
               "Фирменный кетчуп с насыщенным томатным вкусом для бортиков пиццы и горячих закусок, 25 г",
            picture:
               "https://media.dodostatic.net/image/r:233x233/11EE89B04B070B0D9A5F1579B8215856.avif",
            price: 300,
         },
      ],
      others: [
         {
            name: "Додо-клюв",
            description: "Если хочется перевоплощения",
            picture:
               "https://media.dodostatic.net/image/r:233x233/11EE796ECBCD7897810115092E7469A6.avif",
            price: 70,
         },
         {
            name: "Додо-колпак",
            description: "Цвета разные, а эмоции одни – все варианты на высоте",
            picture:
               "https://media.dodostatic.net/image/r:233x233/11EE796ECBFB3E78BBFF74AC4F743A21.avif",
            price: 150,
         },
         {
            name: "Додо-раскраска",
            description: "Чтобы обед был не только сытным, но и веселым",
            picture:
               "https://media.dodostatic.net/image/r:233x233/11EE796EDF209385BD2B4B878DA62DB2.avif",
            price: 150,
         },
      ],
   };
});
