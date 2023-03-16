import { IBook } from "./Book";

export interface ICategory{
    categoryId:number;
    categoryName:string;
    isDelete?:boolean;
    books?:IBook;
}
export interface ICategoryGets{
    categoryId:number;
    categoryName:string;
}