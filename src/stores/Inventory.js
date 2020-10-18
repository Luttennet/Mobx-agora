import { observable, action, computed } from 'mobx';
import Item from '../stores/Item';

class Inventory {
    @observable items = []

    @action addItem = (itemName) => {
        if(this.items.find(i=>i.name===itemName)){
            const item = this.items.find(i=>i.name===itemName)
            item.quantity++
        }else{
            const newItem = new Item(itemName)
            this.items.push(newItem)
        }
    }

    @action buyItem = (itemName) => {
        const itemIndex = this.items.findIndex(i=>i.name===itemName)
        const item = this.items[itemIndex]
        if(item.quantity===1){
            this.items.splice(itemIndex,1)
        }else{
            item.quantity--
        }
    }

    @action changePrice = (itemName, newPrice) => {
        const item = this.items.find(i=>i.name===itemName)
        item.price = newPrice
    }

    @computed get numItems(){
        return this.items.length
    }
}

export default Inventory;