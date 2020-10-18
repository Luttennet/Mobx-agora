import { inject, observer } from 'mobx-react';
import React from 'react';

const Item = inject ("inventory") (observer((props) => {
  const buyItem = () => {
    props.inventory.buyItem( props.item.name)
  }

  const changePrice = () => {
    const newPrice = prompt("What is your new price for this item?")
    props.inventory.changePrice(props.item.name, newPrice)
  }

  return (
    <li onDoubleClick={() => changePrice()}>{props.item.quantity} {props.item.name} available at ${props.item.price} per item
      <button onClick={() => buyItem()}>Buy item</button>
    </li>
  // <li>{props.item.quantity}</li>
  );
}
))
export default Item;

//An Item Component, which will be a child of the Market component and will render the information of a single item, as well as a buy button
