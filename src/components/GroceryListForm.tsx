import React from 'react';
import { Food } from '../models/food';

export interface GroceryListFormProps {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onAdd: (event: React.FormEvent<HTMLFormElement>) => void;
  food: Food;
}

export const GroceryListForm: React.FC<GroceryListFormProps> = ({
  onChange,
  onAdd,
  food
}) => (
  <form onSubmit={onAdd}>
    <input onChange={onChange} value={food.name} />
    <button type="submit">Add Item</button>
  </form>
);