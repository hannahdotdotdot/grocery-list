import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


it('renders defaults correctly', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);

  const foodNames: NodeList | null = div.querySelectorAll('td.food-name');
  expect(foodNames.item(0).textContent).toEqual('bananas');
  expect(foodNames.item(1).textContent).toEqual('apples');
  expect(foodNames.item(2).textContent).toEqual('grapes');

  ReactDOM.unmountComponentAtNode(div);
});
