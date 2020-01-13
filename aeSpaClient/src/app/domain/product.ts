import { Category } from './category';

export class Product{
    id : number;
    name: string;
    code: string;
    description: string;
    price : number;
    categories : Category[];
}