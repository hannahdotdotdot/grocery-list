export interface Food {
  id: string;
  name: string;
  created: Date;
}

export interface FoodOrder {
  type: string;
  asc: boolean;
}
