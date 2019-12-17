import React from 'react';
import { Food } from "../models/food";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'

export interface GroceryListItemProps {
  food: Food;
  selected: boolean;
  onDelete: (food: Food) => void;
  onSelect: (food: Food) => void;
}

export const GroceryListItem: React.FC<GroceryListItemProps> = ({
  food,
  selected,
  onDelete,
  onSelect,
}) => {

  const onClick = () => {
    onDelete(food);
  };

  const onCheck = () => {
    onSelect(food);
  };

  return (
    <tr>
      <td><input type="checkbox" checked={selected} onChange={onCheck} /></td>
      <td className="food-name">{food.name}</td>
      <td>{food.created.toUTCString()}</td>
      <td>
        <button onClick={onClick}><FontAwesomeIcon icon={faTimesCircle} /></button>
      </td>
    </tr>
  );
};
