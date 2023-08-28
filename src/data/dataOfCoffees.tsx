export type Coffee = {
  id: string;
  coffeeImage: string;
  coffeeType: string;
  coffeeName: string;
  description: string;
  price: number;
};

export type CoffeesProps = {
  title: string;
  data: Coffee[];
};

export const dataCoffees: CoffeesProps[] = [
  {
    title: "Tradicionais",
    data: [
      {
        id: "1",
        coffeeImage: "CoffeeImage1",
        coffeeType: "traditional",
        coffeeName: "Expresso Tradicional",
        description: "O tradicional café feito com água quente e grãos moídos",
        price: 9.9,
      },
      {
        id: "2",
        coffeeImage: "CoffeeImage2",
        coffeeType: "traditional",
        coffeeName: "Expresso Americano",
        description: "Expresso diluído, menos intenso que o tradicional",
        price: 9.9,
      },
      {
        id: "3",
        coffeeImage: "CoffeeImage3",
        coffeeType: "traditional",
        coffeeName: "Expresso Cremoso",
        description: "Café expresso tradicional com espuma cremosa",
        price: 9.9,
      },
      {
        id: "4",
        coffeeImage: "CoffeeImage4",
        coffeeType: "traditional",
        coffeeName: "Latte",
        description: "Café expresso com o dobro de leite e espuma cremosa",
        price: 9.9,
      },
      {
        id: "5",
        coffeeImage: "CoffeeImage5",
        coffeeType: "traditional",
        coffeeName: "Expresso Gelado",
        description: "Bebida preparada com café expresso e cubos de gelo",
        price: 9.9,
      },
    ],
  },
  {
    title: "Doces",
    data: [
      {
        id: "6",
        coffeeImage: "CoffeeImage6",
        coffeeType: "candy",
        coffeeName: "Capuccino",
        description: "Bebida com canela feita de doses de café, leite e espuma",
        price: 9.9,
      },
      {
        id: "7",
        coffeeImage: "CoffeeImage7",
        coffeeType: "candy",
        coffeeName: "Mocaccino",
        description:
          "Café expresso com calda de chocolate, pouco leite e espuma",
        price: 9.9,
      },
      {
        id: "8",
        coffeeImage: "CoffeeImage8",
        coffeeType: "candy",
        coffeeName: "Chocolate Quente",
        description:
          "Bebida feita com chocolate dissolvido no leite quente e café",
        price: 9.9,
      },
    ],
  },
  {
    title: "Especiais",
    data: [
      {
        id: "9",
        coffeeImage: "CoffeeImage9",
        coffeeType: "special",
        coffeeName: "Cubano",
        description:
          "Drink gelado de café expresso com rum, creme de leite e hortelã",
        price: 9.9,
      },
      {
        id: "10",
        coffeeImage: "CoffeeImage10",
        coffeeType: "special",
        coffeeName: "Havaiano",
        description: "Bebida adocicada preparada com café e leite de coco",
        price: 9.9,
      },
      {
        id: "11",
        coffeeImage: "CoffeeImage11",
        coffeeType: "special",
        coffeeName: "Árabe",
        description: "Bebida preparada com grãos de café árabe e especiarias",
        price: 9.9,
      },
      {
        id: "12",
        coffeeImage: "CoffeeImage12",
        coffeeType: "special",
        coffeeName: "Irlandês",
        description:
          "Bebida a base de café, uísque irlandês, açúcar e chantilly",
        price: 9.9,
      },
    ],
  },
];
