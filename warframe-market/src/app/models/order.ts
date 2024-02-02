export interface Order {
  platform: string
  order_type: OrderType
  visible: boolean
  creation_date: string
  quantity: number
  user: User
  last_update: string
  platinum: number
  id: string
  region: string
}

export interface User {
  reputation: number
  locale: string
  avatar?: string
  ingame_name: string
  last_seen: string
  id: string
  region: string
  status: string
}

export enum OrderType {
  buy,
  sell
}
