import {Injectable} from '@angular/core';
import {ItemsService} from "../items/items.service";
import {Order, OrderType} from "../../models/order";

@Injectable({
  providedIn: 'root'
})
export class MarketService {

  constructor(private itemsService: ItemsService) { }

  getHighestBuyOrder(orders: Order[]): Order {
    let highestBuyOrder = orders[0];
    orders.forEach(order => {
      if (order.order_type === OrderType.buy && order.platinum > highestBuyOrder.platinum) {
        highestBuyOrder = order;
      }
    });
    return highestBuyOrder;
  }

  getLowestSellOrder(orders: Order[]): Order {
    let lowestSellOrder = orders[0];
    orders.forEach(order => {
      if (order.order_type === OrderType.sell && order.platinum < lowestSellOrder.platinum) {
        lowestSellOrder = order;
      }
    });
    return lowestSellOrder;
  }



}
