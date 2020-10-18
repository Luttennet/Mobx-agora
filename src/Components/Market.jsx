import React from 'react';
import { observer, inject } from 'mobx-react'
import Item from './Item';


const Market = inject ("inventory") (observer((props) => {

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      const itemName = event.target.value
      props.inventory.addItem(itemName)
    }
  }


    return (
      <div>
        <input type="text" placeholder="new item name" onKeyPress={handleKeyPress} />
        {props.inventory.items.map((item,i)=> <Item key={i} item ={item} />)}
      </div>
    );
  }

))


export default Market;