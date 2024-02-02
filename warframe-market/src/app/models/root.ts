import {Item, ItemPayload, itemSet, Payload} from "./item";
import {Order} from "./order";

export interface AllItemsRoot {
  payload: Payload<Item[]>
}

export interface ItemSetRoot {
  payload: Payload<itemSet>
}

export interface OrderRoot {
  payload: Payload<Order[]>
}
