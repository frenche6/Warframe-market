export interface ItemPayload {
  items: Item[]
}

export interface Payload<T> {
  items: T
}

export interface Item {
  id: string
  url_name: string
  thumb: string
  item_name: string
}

export interface itemSet {
  id: string
  items_in_set: ItemsInSet[]
}

export interface ItemsInSet {
  icon: string
  trading_tax: number
  tags: string[]
  quantity_for_set?: number
  thumb: string
  url_name: string
  mastery_level: number
  ducats: number
  set_root: boolean
  id: string
  sub_icon?: string
  icon_format: string
  en: En
}

export interface En {
  item_name: string
  description: string
  wiki_link: string
  thumb: string
  icon: string
  drop: any[]
}


