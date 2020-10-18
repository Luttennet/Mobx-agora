import { observable } from 'mobx'

class Item {
    @observable name
    @observable price 
    @observable quantity 
    constructor(name, price =0, quantity=1){
        this.name = name
        this.price = price
        this.quantity = quantity
    }
}
export default Item