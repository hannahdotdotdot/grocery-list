import React, { useState } from 'react';
import { Guid } from "guid-typescript";

import logo from './logo.svg';
import './App.css';

import { Food, FoodOrder } from './models/food';

import { GroceryListItem } from "./components/GroceryListItem";
import { GroceryListHeaders } from "./components/GroceryListHeaders";
import { GroceryListForm } from "./components/GroceryListForm";

const App: React.FC = () => {
  const [selected, setSelected] = useState<string>('');

  const [order, setOrder] = useState<FoodOrder>({
    'type': '',
    'asc': true
  });

  const [newFood, setNewFood] = useState<Food>(
    {
      'id': Guid.raw(),
      'name': '',
      'created': new Date()
    }
  );

  const [foodList, setFoodList] = useState<Array<Food>>([
    {
      'id': Guid.raw(),
      'name': 'bananas',
      'created': new Date('November 5, 2018 22:29:00')
    },
    {
      'id': Guid.raw(),
      'name': 'apples',
      'created': new Date('October 15, 2014 12:43:00')
    },
    {
      'id': Guid.raw(),
      'name': 'grapes',
      'created': new Date('July 8, 2005 13:14:00')
    },
  ]);

  const deleteFood = (food: Food) => {
    setFoodList(foodList.filter(item => item.id !== food.id));
  };

  const changeOrder = (newOrder: string) => {
    if (newOrder === order.type) {
      setOrder({
        'type': newOrder,
        'asc': !order.asc
      });
    } else {
      setOrder({
        'type': newOrder,
        'asc': true,
      });
    }
  };

  const selectFood = (food: Food) => {
    if (selected === food.id) {
      setSelected("");
    } else {
      setSelected(food.id);
    }
  };

  const addFood = (event: React.FormEvent<HTMLFormElement>) => {
    newFood.created = new Date();
    const newFoodList: Array<Food> = foodList.concat(newFood);
    setFoodList(newFoodList);

    setNewFood({
      'id': Guid.raw(),
      'created': new Date(),
      'name': ''
    });

    event.preventDefault();
  };

  const handleNewFoodChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewFood({
      'id': newFood.id,
      'created': new Date(),
      'name': event.target.value
    });

    event.preventDefault();
  };

  const sortedFoodList: Array<Food> = [...foodList];

  const sortAlgos: Record<string, (a: Food, b: Food) => number> = {
    'name': (a: Food, b: Food) => a.name < b.name ? -1 : a.name > b.name ? 1 : 0,
    'created': (a: Food, b: Food) => a.created < b.created ? -1 : a.created > b.created ? 1 : 0
  }

  if (order.type !== '') {
    sortedFoodList.sort(sortAlgos[order.type]);
    if (!order.asc) {
      sortedFoodList.reverse();
    }
  }

  return (
    <div className="App">
      <h1>Grocery List</h1>

      <GroceryListForm
        food={newFood}
        onAdd={addFood}
        onChange={handleNewFoodChange}
      />

      <table>
        <thead>
          <GroceryListHeaders order={order} onOrder={changeOrder} />
        </thead>
        <tbody>
          {sortedFoodList.map((value: Food, index: number) => {
            return <GroceryListItem key={value.id} food={value} onDelete={deleteFood} selected={selected === value.id} onSelect={selectFood} />
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
