export interface Cart {
    id: string,
    products: Array<BasketProduct>
}

export interface BasketProduct {
    id: string,
    amount: number
}