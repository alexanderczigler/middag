export type Recipe = {
  ingredients: Ingredient[];
  instructions: string[];
  sides?: string[];
  slug?: string;
  title: string;
};

export type Ingredient = {
  name: string;
  quantity: number;
  unit: 'dl' | '';
};

export type Unit = 'dl' | 'krm' | 'msk' | 'g' | 'nypa' | 'tsk';
