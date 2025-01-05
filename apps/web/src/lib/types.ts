export type Recipe = {
  ingredients: Ingredient[];
  instructions: string[];
  sides?: string[];
  slug?: string;
  title: string;
  pantry?: string[];
};

export type Ingredient = {
  name: string;
  quantity: number;
  unit: Unit;
};

export type Unit =
  | 'dl' // Deciliter
  | 'krm' // Kryddmått
  | 'msk' // Matsked
  | 'g' // Gram
  | 'nypa' // Nypa
  | 'tsk' // Tesked
  | 'st' // Styck
  | 'kg' // Kilogram
  | 'ml' // Milliliter
  | 'cl' // Centiliter
  | 'l' // Liter
  | 'förp' // Förpackning
  | 'pkt' // Paket
  | 'klyfta' // För t.ex. vitlök eller citron
  | 'skiva'; // För t.ex. bröd eller ost

export type Menu = {
  [date: string]: string;
};
