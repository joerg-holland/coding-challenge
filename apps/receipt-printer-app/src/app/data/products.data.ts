import { Product } from "../interfaces/products";

export const PRODUCTS: Product[] = [
    { id: 'd2b35cb0-74d9-47c4-90e2-dd2af549fb0b', name: 'book', price: 12.49, import: false, category: 'books' },
    { id: '74609292-af62-4eea-98c3-6bad8d15dc94', name: 'music CD', price: 14.99, import: false, category: 'music' },
    { id: 'fe91fc7a-0918-48b1-b9d2-fa32410321ff', name: 'chocolate bar', price: 0.85, import: false, category: 'food' },
    { id: 'd7f325f6-03b9-4b21-bf44-39fd24963c6f', name: 'imported box of chocolates', price: 10.00, import: true, category: 'food' },
    { id: 'f7b0d06b-95b7-4c6d-847b-b7fe04bffa24', name: 'imported bottle of perfume', price: 47.50, import: true, category: 'cosmetics' },
    { id: 'b360e091-6c69-4d8c-81c6-acc4fb70cf31', name: 'imported bottle of perfume', price: 27.99, import: true, category: 'cosmetics' },
    { id: 'c8cca8c7-12a4-4a6b-a8de-56f9b41e15cd', name: 'botle of perfume', price: 18.99, import: false, category: 'cosmetics' },
    { id: 'd60b1970-ac6c-4107-853e-f1ef2bc89c83', name: 'packet of headache pills', price: 9.75, import: false, category: 'medical' },
    { id: '04178a84-66ec-49d7-bcb1-fdbc3e60da84', name: 'box of imported chocolates', price: 11.25, import: true, category: 'food' }
];