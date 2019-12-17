import React from 'react';
import { FoodOrder } from '../models/food';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons'


export interface GroceryListHeadersProps {
  order: FoodOrder,
  onOrder: (name: string) => void;
}

export const GroceryListHeaders: React.FC<GroceryListHeadersProps> = ({
  order,
  onOrder
}) => {

  const onNameClick = () => {
    onOrder('name');
  };

  const onCreatedClick = () => {
    onOrder('created');
  };

  const ident: any = order.asc ? <FontAwesomeIcon icon={faAngleUp} /> : <FontAwesomeIcon icon={faAngleDown} />;

  return (
    <tr>
      <th></th>
      <th className="sort-name" onClick={onNameClick}>Item {order.type === 'name' ? ident : ''}</th>
      <th className="sort-created" onClick={onCreatedClick}>Added {order.type === 'created' ? ident : ''}</th>
      <th></th>
    </tr>
  );
};